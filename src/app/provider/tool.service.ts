import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AlertController, LoadingController, ToastController, Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToolService {

  public loader: any;
  onDevice: boolean;

  constructor(public http: HttpClient, public alertController: AlertController, public loadingController: LoadingController,
              public toastCtrl: ToastController, public platform: Platform, ) {
                // public network: Network
      console.log('Hello ToolsProvider Provider');
      this.onDevice = this.platform.is('cordova');
     }


  // show Alert ..
  public showAlert(errormsg: string) {
    const alert = this.alertController.create({
      // title: errormsg,
      // subTitle: errormsg,
      cssClass: 'alertstyle',
      buttons: ['تم']
    });
    // alert.present();
  }


  // show loadar ..
  presentLoadingCustom() {
    console.log('Show loading');

    this.loader = this.loadingController.create({
      spinner: 'bubbles',
      // content: "جاري التحميل",
      cssClass: 'my-loading-class',

    });



    this.loader.present();

    setTimeout(() => {
      // this.nav.push(Page2);
      // this.loader.dismiss();
      if (this.loader) {
        this.loader.dismiss();
        this.loader = null;
      }
    }, 20000);

  }

  // this.loader.onDidDismiss(() => {
  //   console.log('Dismissed loading');
  // });

  DismissLoadingCustom() {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
    // this.loader.dismiss();

  }

  //   this.loading.dismiss();

  // setTimeout(() => {
  //   this.nav.push(Page2);
  // }, 1000);

  // setTimeout(() => {
  //   this.loader.dismiss();
  //   this.presentToast('الرجاء التاكد من اتصال النت ومن ثم المحاولة');
  // }, 9000);


  // show Toast ..
  presentToast(msg: string) {
    console.log('toaast');
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      // dismissOnPageChange: true,
      cssClass: 'toast-message_error'

      // position: 'middle'
    });
    // toast.present();
  }





  presentToastConnection() {
    console.log('toaast');
    const toast = this.toastCtrl.create({
      message: 'الرجاء التأكد من اتصال النت !',
      duration: 3000,
    });

    // toast.present();
  }

  // npm install @ionic-native/network
  // ionic cordova plugin add cordova-plugin-network-information



}
