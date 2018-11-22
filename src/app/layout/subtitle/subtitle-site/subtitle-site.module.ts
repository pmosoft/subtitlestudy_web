import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtitleSiteComponent } from './subtitle-site.component';
import { SubtitleSiteRoutingModule } from './subtitle-site-routing.module';

@NgModule({
  imports: [
    CommonModule,SubtitleSiteRoutingModule
  ],
  declarations: [SubtitleSiteComponent]
})
export class SubtitleSiteModule { }
