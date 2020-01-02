import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data:any;

  constructor() {
    this.data = {
      "headerImage":"assets/images/background/14.jpg",
      "toolBarTitle":"Player",
      "title":"ArtistName",
      "iconLike":"icon-thumb-up",
      "iconFavorite":"icon-heart",
      "iconShare":"icon-share-variant",
      "iconSkipPrevious":"icon-skip-previous",
      "iconPlay":"icon-play",
      "iconSkipNext":"icon-skip-next",
      "items":[
         {
            "id":1,
            "title":"Highway 49",
            "description":"George Thorogood",
            "image":"assets/images/avatar/0.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":2,
            "title":"A Man Of Many Words",
            "description":"Buddy Guy",
            "image":"assets/images/avatar/1.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":3,
            "title":"Don’t Think Twice",
            "description":"Susan Tedeschi",
            "image":"assets/images/avatar/2.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":4,
            "title":"Everyday I Have the Blues",
            "description":"B.B. King",
            "image":"assets/images/avatar/3.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":5,
            "title":"Love Me Like a Man",
            "description":"Bonnie Raitt",
            "image":"assets/images/avatar/4.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":6,
            "title":"Five Long Years",
            "description":"	Ike and Tina Turner",
            "image":"assets/images/avatar/5.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":7,
            "title":"Sacred Ground",
            "description":"John Mooney",
            "image":"assets/images/avatar/6.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":8,
            "title":"Sinner’s Prayer",
            "description":"Ray Charles",
            "image":"assets/images/avatar/7.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":9,
            "title":"Statesboro Blues",
            "description":"Allman Brothers Band",
            "image":"assets/images/avatar/1.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":10,
            "title":"Walking by Myself",
            "description":"Jimmy Rogers",
            "image":"assets/images/avatar/2.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":11,
            "title":"Lovin’ In My Baby’s Eyes",
            "description":"Taj Mahal",
            "image":"assets/images/avatar/0.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         },
         {
            "id":12,
            "title":"Think It Over",
            "description":"Dave Hole",
            "image":"assets/images/avatar/3.jpg",
            "imageAlt":"avatar",
            "icon":"icon-heart-outline",
            "duration":"3:42"
         }
      ]
  };

  }

}
