import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UsrComponent } from '../layout/usr/usr.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,    
        LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [UsrComponent]
})
export class LoginModule {}
