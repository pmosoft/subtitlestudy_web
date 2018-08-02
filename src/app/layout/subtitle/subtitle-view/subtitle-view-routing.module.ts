import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleViewComponent } from './subtitle-view.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleViewRoutingModule { }
  