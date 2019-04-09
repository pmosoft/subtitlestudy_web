import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatUsrComponent } from './stat-usr.component';
import { StatUsrRoutingModule } from './stat-usr-routing.module';

@NgModule({
  imports: [
    CommonModule,StatUsrRoutingModule
  ],
  declarations: [StatUsrComponent]
})
export class StatUsrModule { }
