import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubtitleOpinionComponent } from './subtitle-opinion.component';
import { SubtitleOpinionRoutingModule } from './subtitle-opinion-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,SubtitleOpinionRoutingModule,FormsModule,NgbModule
  ],
  declarations: [SubtitleOpinionComponent]
})
export class SubtitleOpinionModule { }
