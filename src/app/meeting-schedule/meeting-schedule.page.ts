import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {SharedDataService} from '../shared-data.service';
import {AuthService} from '../auth.service';
import * as moment from 'moment';


@Component({
  selector: 'app-meeting-schedule',
  templateUrl: './meeting-schedule.page.html',
  styleUrls: ['./meeting-schedule.page.scss'],
})
export class MeetingSchedulePage implements OnInit {


    problem: any

    date: any
     uid: any;
    private user: any;
    today: any =  moment().format('DD/MM/YYYY h:mm')




  constructor( public router: Router,
               public modalController: ModalController,
               public afAuth: AngularFireAuth,
               private afs:AngularFirestore,
               public auth:AuthService,

               private shared:SharedDataService,) { }

  ngOnInit() {
console.log(this.today)
      this.auth.isLoggedIn().subscribe(res=>{
          this.uid = res.uid
          this.afs.collection('users').doc(res.uid).valueChanges().subscribe(resp=>{
              this.user = resp
              console.log(resp)

          })
      })

  }

dismiss(){
this.modalController.dismiss().then()
}


    submit() {
        const  data = {
            uid:this.uid,
            name:this.user.first_name,
            type:this.shared.cat.type,
            image:this.shared.cat.image,
            problem:this.problem,
            date:this.date

        }

        this.shared.showSpinner('Please wait..')
        this.afs.collection('bookings').add(data)
            .then(()=>{
                this.shared.hideSpinner()
                this.shared.showToast('Success')
                this.dismiss()

            }).catch(()=>{
                this.shared.hideSpinner()
                this.shared.showToast('Failed please try again')
        })

    }
}
