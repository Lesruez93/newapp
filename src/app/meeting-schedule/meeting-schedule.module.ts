import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MeetingSchedulePage} from './meeting-schedule.page';
import {RouterModule, Routes} from '@angular/router';
import {ComponentsModule} from '../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: MeetingSchedulePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    declarations: [MeetingSchedulePage]
})
export class MeetingSchedulePageModule {
}
