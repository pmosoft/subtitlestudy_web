import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleViewMotherComponent } from './subtitle-view-mother.component';
import { SubtitleViewMotherRoutingModule } from './subtitle-view-mother-routing.module';

@NgModule({
  imports: [
    CommonModule,SubtitleViewMotherRoutingModule
  ],
  declarations: [SubtitleViewMotherComponent]
})
export class SubtitleViewMotherModule { }
