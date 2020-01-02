import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'audios', loadChildren: './pages/audios/audios.module#AudiosPageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'articles', loadChildren: './pages/articles/articles.module#ArticlesPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'audio-details', loadChildren: './pages/audio-details/audio-details.module#AudioDetailsPageModule' },
  { path: 'video-details', loadChildren: './pages/video-details/video-details.module#VideoDetailsPageModule' },
  { path: 'profile-details', loadChildren: './pages/profile-details/profile-details.module#ProfileDetailsPageModule' },
  { path: 'articles-details', loadChildren: './pages/articles-details/articles-details.module#ArticlesDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
