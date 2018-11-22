import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleRegistComponent } from './subtitle-regist.component';
import { SubtitleRegistRoutingModule } from './subtitle-regist-routing.module';

@NgModule({
  imports: [
    CommonModule,SubtitleRegistRoutingModule
  ],
  declarations: [SubtitleRegistComponent]
})
export class SubtitleRegistModule { }
