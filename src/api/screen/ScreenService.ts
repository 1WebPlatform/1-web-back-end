import {InjectClient} from "nest-postgres";
import {Client} from "pg";
import {RightService} from "../right/RightService";
import {Injectable} from "@nestjs/common";


@Injectable()
export class ScreenService {
    constructor(
        @InjectClient() private readonly pg: Client,
        private readonly rightService: RightService
    ) {
    }

    public async screen(id: number, authorization: string) {
       const right = await this.rightService.getRightUser(authorization);
       const result = await this.pg.query(`select * from config.screen_get_id_component(${id})`);
       return await this.checkScreen(right?.right, result.rows[0]?.screen);
    }

    private async checkScreen(right: number[], screen: any) {
        let check_screen:any = true;
        if (screen.screen.id_right) {
            check_screen = right.filter((e: any) => e === screen.screen.id_right).length;
        }
        if (!check_screen) {
            const error = await this.pg.query(`select * from tec.error_get_id(20)`);
            return error.rows[0];
        }
        if (screen.component) {
            let component:any = [];
            screen.component.map((e: any) => {
                if (e.id_right && right.filter((r: any) => r === e.id_right).length) {
                    component.push(e);
                } else if (e.id_right === null) {
                    component.push(e);
                }
            })
            /** Не очень хорошо изменения значения по ссылке */
            screen.component = component;
        }
        return screen;
    }
}