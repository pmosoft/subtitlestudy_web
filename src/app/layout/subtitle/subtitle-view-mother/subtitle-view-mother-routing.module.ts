import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleViewMotherComponent } from './subtitle-view-mother.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleViewMotherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleViewMotherRoutingModule { }
  