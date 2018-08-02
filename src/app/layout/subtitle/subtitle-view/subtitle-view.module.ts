import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleViewComponent } from './subtitle-view.component';
import { SubtitleViewRoutingModule } from './subtitle-view-routing.module';

@NgModule({
  imports: [
    CommonModule,SubtitleViewRoutingModule
  ],
  declarations: [SubtitleViewComponent]
})
export class SubtitleViewModule { }
