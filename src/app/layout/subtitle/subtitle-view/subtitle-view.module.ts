import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubtitleViewComponent } from './subtitle-view.component';
import { SubtitleViewRoutingModule } from './subtitle-view-routing.module';

@NgModule({
  imports: [
    CommonModule,SubtitleViewRoutingModule,FormsModule
  ],
  declarations: [SubtitleViewComponent]
})
export class SubtitleViewModule { }
