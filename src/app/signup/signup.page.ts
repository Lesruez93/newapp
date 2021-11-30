import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MenuController, ModalController} from '@ionic/angular';

import {PasswordValidator} from '../validators/password.validator';
import {AngularFireAuth} from '@angular/fire/auth';
import {SharedDataService} from '../shared-data.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: [
        './styles/signup.page.scss'
    ]
})
export class SignupPage implements OnInit {
    signupForm: FormGroup;
    matching_passwords_group: FormGroup;

    validation_messages = {
        'first_name': [
            {type: 'required', message: 'First name is required.'},
        ],

        'last_name': [
            {type: 'required', message: 'Last name is required.'},
        ],

        'email': [
            {type: 'required', message: 'Email is required.'},
            {type: 'pattern', message: 'Enter a valid email.'}
        ],
        'password': [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password must be at least 5 characters long.'}
        ],
        'confirm_password': [
            {type: 'required', message: 'Confirm password is required'}
        ],
        'matching_passwords': [
            {type: 'areNotEqual', message: 'Password mismatch'}
        ],
        dob: [
            {type: 'required', message: 'DOB name is required.'},
        ],
    };

    constructor(
        public router: Router,
        public modalController: ModalController,
        public afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private shared: SharedDataService,
        public menu: MenuController
    ) {
        this.matching_passwords_group = new FormGroup({
            'password': new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),


            'confirm_password': new FormControl('', Validators.required)
        }, (formGroup: FormGroup) => {
            return PasswordValidator.areNotEqual(formGroup);
        });

        this.signupForm = new FormGroup({
            'first_name': new FormControl('', Validators.compose([
                Validators.required
            ])),


            'email': new FormControl('test@test.com', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'matching_passwords': this.matching_passwords_group
        });
    }

    ngOnInit(): void {
        this.menu.enable(false);
    }

    async showTermsModal() {

    }

    async showPrivacyModal() {

    }

    doSignup(): void {


        let data = this.signupForm.value;
        delete data.matching_passwords;
        console.log(data);

        this.shared.showSpinner('Please wait..');


        this.afAuth.createUserWithEmailAndPassword(data.email, this.matching_passwords_group.value.password).then((res) => {
            data.uid = res.user.uid;
            data.avatar = '/assets/images/avatar.png';
            this.afs.collection('users').doc(res.user.uid).set(data).then(() => {
                this.router.navigate(['/']);
                this.shared.showToast('Account created successfully');
                this.shared.hideSpinner();


            }).catch((err) => {
                this.shared.hideSpinner();
                this.shared.showToast(err.message);
                console.log(err);

            });
        }).catch((err) => {
            console.log(err);
            this.shared.hideSpinner();
            this.shared.showToast(err.message);
        });

    }

    doFacebookSignup(): void {
        console.log('facebook signup');
        this.router.navigate(['app/categories']);
    }

    doGoogleSignup(): void {
        console.log('google signup');
        this.router.navigate(['app/categories']);
    }

    doTwitterSignup(): void {
        console.log('twitter signup');
        this.router.navigate(['app/categories']);
    }

    private checkReg(uid: string) {
        const usersRef = this.afs.collection('users').doc(uid);

        usersRef.get().subscribe((docSnapshot) => {
            if (docSnapshot.exists) {
                console.log('it exists');
                this.shared.hideSpinner();

                this.router.navigate(['/']);


            } else {

                this.shared.hideSpinner();

                this.router.navigate(['/personal-details']);


            }
        });

    }
}
