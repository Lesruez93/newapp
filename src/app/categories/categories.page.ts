import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedDataService} from '../shared-data.service';
import {Router} from '@angular/router';
import {MeetingSchedulePage} from '../meeting-schedule/meeting-schedule.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
    './styles/categories.page.scss',
    './styles/categories.shell.scss',
    './styles/categories.responsive.scss'
  ]
})
export class CategoriesPage implements OnInit , OnDestroy{

    constructor(
        public shared:SharedDataService,
        public modalCtrl:ModalController,
        public router:Router,
    ) {
    }
    // nav(cat) {
    //     this.router.navigate(['/firebase/therapists-listing'])
    //     this.shared.cat = cat
    //
    //
    // }

    ngOnInit(): void {

    }


    async nav(type,image){
        this.shared.cat = {
            type:type,
            image:image
        }

        }


    ngOnDestroy(): void {
    }


}
