import { Injectable } from '@angular/core';
import {AlertController, LoadingController, Platform, ToastController} from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  number: any;
  verificationId: string;
  code: string;
  phone: string;
  sig = null;
  public loading: any;
  public toastC: any;
  cat: { image: any; type: any };

  constructor(
      public alertController: AlertController,
      private spinnerDialog: SpinnerDialog,
      private toast: Toast,
      private platform:Platform,
      public toastController: ToastController,
      public loadingController: LoadingController

  ) { }

  showSpinner(message) {
      if (this.platform.is('android')){
        this.spinnerDialog.show("", message, true, { overlayOpacity: 1.00 });

      }else {
        this.presentLoading(message)

      }


  }

  async presentLoading(msg) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: msg,
      duration: 2000
    });
    this.loading.present();

    console.log('Loading dismissed!');
  }


  dismiss(){
    if (this.platform.is('cordova')) {
      this.spinnerDialog.hide()
    }

    else {
      this.loading.dismiss()

    }
  }


  hideSpinner(){
    this.spinnerDialog.hide();

  }

  showToast(msg){
    if (this.platform.is('cordova')){

    this.toast.show(msg, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
    );}

    else {
      this.presentToast(msg)
    }
  }


  async presentToast(msg) {
    this.toastC = await this.toastController.create({
      message: msg,
      duration: 5000
    });
   await this.toastC.present();
  }
}
