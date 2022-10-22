import { Component } from "./Component";

export interface Screen {
    component: Component[],
    screen: any,
}

export interface ScreenComponentObject {
    [key: string]: Component;
}