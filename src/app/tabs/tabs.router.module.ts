import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsPage } from './tabs.page';
import {AuthGuardService} from '../auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
          },


        ],
        canActivate:[AuthGuardService]
      },
      {
        path: 'profile',
        loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },


      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule),
            
          },
         
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
