import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SpinnerDialog} from '@ionic-native/spinner-dialog/ngx';
import {Toast} from '@ionic-native/toast/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ComponentsModule} from './components/components.module';

import {ServiceWorkerModule} from '@angular/service-worker';

import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {AngularFirestoreModule} from '@angular/fire/firestore';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot({mode: 'ios'}),
        ReactiveFormsModule,
        AppRoutingModule,
        AngularFirestoreModule.enablePersistence(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireAuthGuardModule,
        ComponentsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        Toast,
        SpinnerDialog,


        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
