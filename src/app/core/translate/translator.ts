import { InjectionToken } from '@angular/core';

import { LANG_EN_GB_NAME, LANG_EN_GB_TRANS } from './lang/lang-en-GB';
import { LANG_PT_PT_NAME, LANG_PT_PT_TRANS } from './lang/lang-pt-PT';

//token
export const TRANSLATIONS = new InjectionToken<string>('translations');

//traducoes
export const dictionary = {
    'en-GB': LANG_EN_GB_TRANS,
    'pt-PT': LANG_PT_PT_TRANS
};

//providers
export const TRANSLATION_PROVIDER = [
    { provide: TRANSLATIONS, useValue: dictionary }
];

