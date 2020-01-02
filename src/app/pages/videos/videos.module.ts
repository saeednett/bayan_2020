import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideosPage } from './videos.page';
import { ComponentsModule } from 'src/app/components/components.module';

// import { VgCoreModule } from 'videogular2/compiled/core';
// import { VgControlsModule } from 'videogular2/compiled/controls';
// import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
// import { VgBufferingModule } from 'videogular2/compiled/buffering';
const routes: Routes = [
  {
    path: '',
    component: VideosPage,
  resolve: {
    // data: TravelListingResolver
  }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    //  VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
