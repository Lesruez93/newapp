import {Component, HostBinding, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {AuthService} from '../auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./styles/profile.page.scss',
    './styles/profile.shell.scss'
  ],
})
export class UserProfilePage implements OnInit {

  user:any = {}
  @HostBinding('class.is-shell') get isShell() {
    return !!((this.user && this.user.isShell));
  }

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
        this.afs.collection('users').doc(res.uid).valueChanges().subscribe(resp=>{
          this.user = resp
          console.log(resp)

        })
      })

  }

  async openFirebaseUpdateModal() {
    // const modal = await this.modalController.create({
    //   component: FirebaseUpdateUserModal,
    //   componentProps: {
    //     'user': this.user
    //   }
    // });
    //
    // await modal.present();
  }


  logout() {
    this.afAuth.signOut().then(()=>{
      this.nav.navigateRoot('/auth/login')
    })
  }
}
