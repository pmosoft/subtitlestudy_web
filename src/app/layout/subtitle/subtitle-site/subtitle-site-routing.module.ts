import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleSiteComponent } from './subtitle-site.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleSiteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleSiteRoutingModule { }
  