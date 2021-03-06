import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from 'src/app/provider/rest.service';
import { ToolService } from 'src/app/provider/tool.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: [
    './styles/travel-listing.page.scss',
    './styles/travel-listing.shell.scss'
  ],
})
export class VideosPage implements OnInit {
  listing: any;
  LanguageType = 'ar';

  // tslint:disable-next-line: whitespace
  constructor(private http: HttpClient,public sanitizer: DomSanitizer,
              private rest: RestService,
              //  private tool: ToolService,
              public router: Router,
              ) {
   this.listing = {
    items: [
      {
        id: 1,
        slug: 'tristan-narvaja',
        image: './assets/sample-images/travel/Travel1-64.47.png',
        icon: './assets/sample-images/travel/TravelIcon1.png',
        name: 'Tristán Narvaja ',
        category: 'Flea Market',
        description: 'Every Sunday from early morning until three in the afternoon enjoy the biggest market in Montevideo.',
        rating: 4.8,
        address: 'Cordón, Montevideo, Uruguay',
        reviewsCount: 17
      },
      {
        id: 2,
        slug: 'rambla-montevideo',
        image: './assets/sample-images/travel/Travel2-64.47.png',
        icon: './assets/sample-images/travel/TravelIcon2.png',
        name: 'Rambla Montevideo',
        category: 'Seaside Avenue',
        description: '22 kilometers long avenue along the coast of Rio de la Plata stretching throughout all of Montevideo.',
        rating: 4.7,
        address: 'Montevideo, Uruguay',
        reviewsCount: 5
      },
      {
        id: 3,
        slug: 'legislative-palace-bistro',
        image: './assets/sample-images/travel/Travel3-64.47.png',
        icon: './assets/sample-images/travel/TravelIcon3.png',
        name: 'Legislative Palace Bistro',
        category: 'Restaurant',
        description: 'It\'s warm and relaxed atmosphere, making it a favorite haunt for tourists, businessmen and cultural figures.',
        rating: 3.5,
        address: 'Aguada, Montevideo, Uruguay',
        reviewsCount: 8
      },
      {
        id: 4,
        slug: 'colonia',
        image: './assets/sample-images/travel/Travel4-64.47.png',
        icon: './assets/sample-images/travel/TravelIcon4.png',
        name: 'Colonia',
        category: 'Historic Pier',
        description: 'Cobbled and irregular streets straight from history, and a unique landscape with spectacular view of the river.',
        rating: 5.0,
        address: 'Barrio Sur, Colonia, Uruguay',
        reviewsCount: 108
      },
      {
        id: 5,
        slug: 'casapueblo',
        image: './assets/sample-images/travel/Travel5-64.47.png',
        icon: './assets/sample-images/travel/TravelIcon5.png',
        name: 'Casapueblo',
        category: 'Art Gallery',
        // tslint:disable-next-line: max-line-length
        description: 'Casapueblo is the former summer home of Uruguayan artist Carlos Paez Vilaró and is now an art gallery, museum and hotel',
        rating: 4.9,
        address: 'Punta Ballena, Maldonado, Uruguay',
        reviewsCount: 87
      }
    ]
  };

   }

   public getListingDataSource() {
    return this.http.get<any>('././assets/sample-data/travel/listing.json');
   }

  ngOnInit() {
    // this.listing = this.getListingDataSource();
    console.log(this.listing);
    this.getVideo();

  }

  getVideo() {

    new Promise((resolve, reject) => {
      this.rest.getVideo(this.LanguageType, resolve, reject)
    }).then(data =>{
        console.log(data);

    });
    // tslint:disable-next-line: no-unused-expression
    // new Promise((resolve, reject) => {
      
      // this.rest.getVideo(this.LanguageType, resolve, reject).then(data => {
      // this.tool.DismissLoadingCustom();
      // console.log(data);
      // this.navCtrl.push('LivePage', { Live: data, });
      // this.router.navigate(['app/deals']);

    // },err => {
      // this.tool.DismissLoadingCustom();
      // this.tool.presentToast('حدث خطا غير متوقع جاري اعادة التوجيه');
      // console.log(err);
    // });
  // tslint:disable-next-line: semicolon
  // }

}

}
