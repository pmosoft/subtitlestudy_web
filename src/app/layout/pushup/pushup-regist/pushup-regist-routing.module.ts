import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushupRegistComponent } from './pushup-regist.component';

const routes: Routes = [
  {
      path: '',
      component: PushupRegistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class PushupRegistRoutingModule { }
  