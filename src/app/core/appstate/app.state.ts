import { InjectionToken } from '@angular/core';
import { User } from './user.model';

export class AppState {
    system_lang: string;
    
    exitable: boolean;
    back_visible: boolean;
    back_caption: string;
    
    nav_title: string;
    tutorial_mode: boolean;
    isAuthenticated: boolean;
    current_user: User;
};

export let APP_CONFIG = new InjectionToken<string>('app.config');

export const APP_CONFIG_PROVIDER = [{
    provide: APP_CONFIG, useValue: AppState
}]