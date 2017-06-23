
/**
 * Usage
 * Validators.compose([Validators.required, GlobalValidator.mailFormat])
 */



import { FormControl } from '@angular/forms';

export class GlobalValidator{

    static mailFormat(control: FormControl): ValidationResult {

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

}

interface ValidationResult {
    [key: string]: boolean;
}