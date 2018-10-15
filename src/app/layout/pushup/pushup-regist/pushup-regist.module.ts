import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushupRegistComponent } from './pushup-regist.component';
import { PushupRegistRoutingModule } from './pushup-regist-routing.module';

@NgModule({
  imports: [
    CommonModule,PushupRegistRoutingModule
  ],
  declarations: [PushupRegistComponent]
})
export class PushupRegistModule { }
