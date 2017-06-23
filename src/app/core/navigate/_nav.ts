
import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface INavconf {
    title: String;
    back_visible: boolean;
    exitable: boolean;
    backCaption?: string; //back, home, close, shutdown, etc. Optionally set this as required by the user interface
    tutorial_mode: boolean;
}

export const config : INavconf = {
    title: '',
    back_visible: true,
    exitable: true,
    tutorial_mode: false,
}

export let NAV_CONFIG = new InjectionToken<string>('nav.config');

export const NAV_CONFIG_PROVIDER = [{
    provide: NAV_CONFIG, useValue: config
}];
