import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './pages/side-menu/styles/side-menu.scss',
    './pages/side-menu/styles/side-menu.shell.scss',
    './pages/side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent {

  appPages = [
    {
      title: 'الصفحة الرئيسية',
      url: '/tabs/',
      icon: './assets/sample-icons/side-menu/categories.svg'
    },
    {
      title: ' المشايخ',
      url: '/app/profile',
      icon: './assets/sample-icons/side-menu/profile.svg'
    },
    {
      title: 'حول التطبيق',
      url: 'whoـare',
      icon: './assets/sample-icons/side-menu/getting-started.svg'
    },
    {
      title: ' تواصل معنا',
      url: '/app/contact-card',
      icon: './assets/sample-icons/side-menu/tutorial.svg'
    }
  ];
  accountPages = [
    {
      title: 'تغير اللغة',
      url: '/auth/login',
      icon: './assets/sample-icons/side-menu/globe.svg'
    }
  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
