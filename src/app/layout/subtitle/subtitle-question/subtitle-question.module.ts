import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubtitleQuestionComponent } from './subtitle-question.component';
import { SubtitleQuestionRoutingModule } from './subtitle-question-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,SubtitleQuestionRoutingModule,FormsModule,NgbModule
  ],
  declarations: [SubtitleQuestionComponent]
})
export class SubtitleQuestionModule { }
