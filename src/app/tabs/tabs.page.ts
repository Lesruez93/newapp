import { Component } from '@angular/core';

import {MenuController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {MeetingSchedulePage} from '../meeting-schedule/meeting-schedule.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: [
    './styles/tabs.page.scss'
  ]
})
export class TabsPage {

    constructor(public menu: MenuController,
                private router: Router,
                private modal: ModalController) {
    }

    ionViewWillEnter() {
        this.menu.enable(true);
    }


    async openModal() {
        //     const modal = await this.modal.create({
        //         component: TherapistMatchesPage
        //     });
        //     await modal.present();
        //
        //     const { data } = await modal.onWillDismiss();
        //
        //     if (data){
        //         await this.router.navigate(['/app/categories/deals'])
        //
        //     }
        //
        // }
    }

    async open() {
        const modal = await this.modal.create({
            component: MeetingSchedulePage,
        });


        return await modal.present();

    }
}
