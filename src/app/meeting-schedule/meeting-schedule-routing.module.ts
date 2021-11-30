import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingSchedulePage } from './meeting-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: MeetingSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetingSchedulePageRoutingModule {}
