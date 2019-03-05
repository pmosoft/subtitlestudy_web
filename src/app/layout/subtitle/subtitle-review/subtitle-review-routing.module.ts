import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleReviewComponent } from './subtitle-review.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleReviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleReviewRoutingModule { }
  
