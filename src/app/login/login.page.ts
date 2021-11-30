import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import auth = firebase.auth;
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: [
    './styles/login.page.scss'
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  private user: any;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public menu: MenuController,
    private shared:SharedDataService
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]))
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  doLogin(): void {
    this.shared.showSpinner('Please wait..')

    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password)
        .then((res=>{
          this.shared.hideSpinner()
          this.router.navigate(['app/categories']);

        })).catch(e=>{
      console.log(e.message);

      this.shared.showToast(e.message)

      this.shared.hideSpinner()


    })
  }

  goToForgotPassword(): void {
    console.log('redirect to forgot-password page');
  }

  doFacebookLogin(): void {
    console.log('facebook login');
    this.router.navigate(['app/categories']);
  }

  doGoogleLogin(): void {
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider).then((res: any) => {
      this.user = res.user;
      this.router.navigate(['app/categories']);

    });
  }

  doTwitterLogin(): void {
    console.log('twitter login');
    this.router.navigate(['app/categories']);
  }
}
