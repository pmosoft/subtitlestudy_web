import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleListComponent } from './subtitle-list.component';
import { SubtitleListRoutingModule } from './subtitle-list-routing.module';

@NgModule({
  imports: [
    CommonModule,SubtitleListRoutingModule
  ],
  declarations: [SubtitleListComponent]
})
export class SubtitleListModule { }
