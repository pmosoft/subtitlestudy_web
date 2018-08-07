import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleListComponent } from './subtitle-list.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleListRoutingModule { }
  