import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren:() => import('../pages/videos/videos.module').then(m => m.VideosPageModule)
          },
          {
            path: 'videos',
            loadChildren:() => import('../pages/videos/videos.module').then(m => m.VideosPageModule)
          },
          {
            path: 'videos/:videoId',
            loadChildren: () => import('../pages/video-details/video-details.module').then(m => m.VideoDetailsPageModule)
          },
          
        ]
      },
      {
        path: 'audios',
        children: [
          {
            path: '',
            loadChildren:() => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
         },
          {
            path: 'friends',
            // loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'articles',
        children: [
          {
            path: '',
            loadChildren:() => import('../pages/articles/articles.module').then(m => m.ArticlesPageModule)
          }
        ]
      },
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
