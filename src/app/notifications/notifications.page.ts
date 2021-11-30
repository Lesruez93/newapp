import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {AuthService} from '../auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: [
    './styles/notifications.page.scss',
    './styles/notifications.shell.scss'
  ]
})
export class NotificationsPage implements OnInit {
  notifications: any = [];

  constructor(
      public modalController: ModalController,
      public auth:AuthService,
      public afs:AngularFirestore,
      public nav:NavController,
      public afAuth:AngularFireAuth,

  ) {
  }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(res=>{
      this.afs.collection('bookings',ref => ref.where('uid', '==', res.uid)).valueChanges().subscribe(resp=>{
        this.notifications = resp
        console.log(resp)

      })
    })

  }}
