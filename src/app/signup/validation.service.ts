import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      let config = {
          'required': 'Required',
          'invalidEmailAddress': 'Invalid email address',
          'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
          'minlength': `Minimum length ${validatorValue.requiredLength}`
      };

      return config[validatorName];
  }

  static emailValidator(control) {
    const regExp : RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(regExp.test(control)) return true
    else {
        alert('Invalid email address');
        return false;
    } 
  }

  static passwordValidator(control) {
    const regExp : RegExp = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
    if(regExp.test(control)) return true
    else {
        alert('Invalid password. Password must be at least 6 characters long, and contain a number.');
        return false;
    } 
  }
  
}