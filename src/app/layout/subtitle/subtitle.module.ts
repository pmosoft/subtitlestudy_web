import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubtitleRoutingModule } from './subtitle-routing.module';
import { SubtitleComponent } from './subtitle.component';
import { SubtitleRegistComponent } from './subtitle-regist/subtitle-regist.component';
import { SubtitleViewComponent } from './subtitle-view/subtitle-view.component';
import { SubtitleListComponent } from './subtitle-list/subtitle-list.component';

@NgModule({
    imports: [CommonModule, SubtitleRoutingModule],
    declarations: [SubtitleComponent, SubtitleRegistComponent, SubtitleViewComponent, SubtitleListComponent]
})
export class SubtitleModule {}
