import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatUsrComponent } from './stat-usr.component';

const routes: Routes = [
  {
      path: '',
      component: StatUsrComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 
export class StatUsrRoutingModule { }
  
