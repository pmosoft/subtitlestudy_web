import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleQuestionComponent } from './subtitle-question.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleQuestionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class SubtitleQuestionRoutingModule { }
  
