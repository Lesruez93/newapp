import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);

const routes: Routes = [
    {path: '', redirectTo: '/app/categories', pathMatch: 'full'},
    {path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
    {path: 'auth/signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)},
    // tslint:disable-next-line:max-line-length
    {
        path: 'auth/forgot-password',
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin},
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'app',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
        // canActivate: [AuthGuardService]
    },


    {
        path: 'page-not-found',
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin},
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    },


    {
        path: 'user-profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfilePageModule)
    },
    {
        path: 'meeting-schedule',
        loadChildren: () => import('./meeting-schedule/meeting-schedule.module').then(m => m.MeetingSchedulePageModule)
    },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
