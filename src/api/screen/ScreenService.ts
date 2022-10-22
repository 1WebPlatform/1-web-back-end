import { InjectClient } from 'nest-postgres';
import { Client } from 'pg';
import { RightService } from '../right/RightService';
import { Injectable } from '@nestjs/common';
import { Component } from 'src/interface/Component';
import { Screen, ScreenComponentObject } from 'src/interface/Screen';

@Injectable()
export class ScreenService {
  constructor(
    @InjectClient() private readonly pg: Client,
    private readonly rightService: RightService,
  ) { }

  public async screen(id: number, authorization: string) {
    const right = await this.rightService.getRightUser(authorization);
    const result = await this.pg.query(
      `select * from config.screen_get_id_component(${id})`,
    );
    return await this.checkScreen(right?.[0]?.right, result.rows[0]?.screen);
  }
  /**
   * @param component 
   * @returns component
   * изменяет из строки в json компоненты
   */
  private convertComponent(component: Component) {
    /** из строки в json  */
    component.params = JSON.parse(component.params);
    component.event = JSON.parse(component.event);
    component.schema = JSON.parse(component.schema);
    component._tec = {};
    return component;
  }
  /**
   * @param component
   * @returns  component
   * проверка и добавление флага что есть файл css
   */
  private checkFileCss(component: Component) {
    if (component.style) {
      component.file_css = true;
    }
    return component;
  }
  /**
   * 
   * @param right number[]
   * @param screen  Screen
   * @returns boolean
   * проверка что есть права на скрин
   */
  private checkRightScreen(right: number[], screen: Screen) {
    if (screen.screen.id_right) {
      return !!right?.filter(
        (e: any) => e === screen.screen.id_right,
      ).length;
    }
    return true;
  }
  /**
   * 
   * @param element 
   * @param component 
   * @returns component
   * добавление children но id_parent
   */
  private saveChildrenComponent(element: Component, component: ScreenComponentObject) {
    if (element.id_parent) {
      if (!component[element.id_parent].children) {
        component[element.id_parent].children = [];
      }
      component[element.id_parent].children.push(element.id);
    }
    return component;
  }

  private async checkScreen(right: number[], screen: Screen) {
    if (!this.checkRightScreen(right, screen)) {
      const error = await this.pg.query(`select * from tec.error_get_id(20)`);
      return error.rows[0];
    }
    if (screen.component) {
      let component: ScreenComponentObject = {};
      if (Array.isArray(screen.component)) {
        screen.component.map((e: any) => {
          /** проверка прав на компонент */
          if (
            e.id_right === null ||
            (e.id_right && right.filter((r: any) => r === e.id_right).length)
          ) {
            component[e.id] = e;
          }
        });
      }

      /** Обработка компонентов */
      for (const key in component) {
        const element = component[key];
        this.convertComponent(element);
        this.checkFileCss(element);
        this.saveChildrenComponent(element, component);
      }
      /** Не очень хорошо изменения значения по ссылке */
      screen.component = component;
    }
    return screen;
  }
}
