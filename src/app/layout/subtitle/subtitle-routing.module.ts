import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtitleComponent } from './subtitle.component';

const routes: Routes = [
  {
      path: '',
      component: SubtitleComponent,
      children: [
          { path: '', redirectTo: 'subtitle' },
          { path: 'subtitle-regist', loadChildren: './subtitle/subtitle-regist/subtitle-regist.module#SubtitleRegistModule' },
          { path: 'subtitle-list', loadChildren: './subtitle/subtitle-list/subtitle-list.module#SubtitleListModule' },
          { path: 'subtitle-view', loadChildren: './subtitle/subtitle-regist/subtitle-regist.module#SubtitleRegistModule' },
      ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SubtitleRoutingModule { }
