import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleRegistComponent } from './subtitle-regist.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleRegistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleRegistRoutingModule { }
  