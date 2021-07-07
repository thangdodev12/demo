/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.png' {
    const value: string;
    export = value;
}

declare module '*.jpg' {
    const value: string;
    export = value;
}

declare module '*.svg' {
    const svgComponent: React.FC<React.ComponentProps<'svg'>>;
    export = svgComponent;
}

declare module 'redux-saga/effects' {
    export function takeEvery(...args: any[]): any;
    export function put(...args: any[]): any;
    export function call(...args: any[]): any;
    export function all(...args: any[]): any;
    export function fork(...args: any[]): any;
    export function delay(...args: any[]): any;
    export function take(...args: any[]): any;
    export function takeLatest(...args: any[]): any;
}

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    store: any;
}
