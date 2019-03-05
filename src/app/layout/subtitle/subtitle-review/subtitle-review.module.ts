import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubtitleReviewComponent } from './subtitle-review.component';
import { SubtitleReviewRoutingModule } from './subtitle-review-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,SubtitleReviewRoutingModule,FormsModule,NgbModule
  ],
  declarations: [SubtitleReviewComponent]
})
export class SubtitleReviewModule { }
