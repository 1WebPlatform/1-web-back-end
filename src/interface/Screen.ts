import { Component } from "./Component";

export interface Screen {
    component: Component[] | ScreenComponentObject,
    screen: any,
}

export interface ScreenComponentObject {
    [key: string]: Component;
}