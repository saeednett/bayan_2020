import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: [
    './styles/deals-listing.page.scss',
    './styles/deals-listing.shell.scss',
    './styles/deals-listing.ios.scss'
  ]
})
export class ArticlesPage implements OnInit {
data: any;
  constructor() {
    this.data =  [
      {
          id: 1,
          title: 'Jessica Miles',
          avatar: '././assets/images/avatar/2.jpg',
          image: 'assets/images/background/1.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      },
      {
          id: 2,
          title: 'Holman Valencia',
          avatar: 'assets/images/avatar/0.jpg',
          image: 'assets/images/background/2.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      },
      {
          id: 3,
          title: 'Gayle Gaines',
          avatar: 'assets/images/avatar/1.jpg',
          image: 'assets/images/background/3.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      },
      {
          id: 4,
          title: 'Josefa Gardner',
          avatar: 'assets/images/avatar/4.jpg',
          image: 'assets/images/background/4.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      },
      {
          id: 5,
          title: 'Barbara Bernard',
          avatar: 'assets/images/avatar/5.jpg',
          image: 'assets/images/background/5.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      },
      {
          id: 6,
          title: 'Valdez Bruce',
          avatar: 'assets/images/avatar/6.jpg',
          image: 'assets/images/background/6.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      },
      {
          id: 7,
          title: 'Wilkerson Hardin',
          avatar: 'assets/images/avatar/7.jpg',
          image: 'assets/images/background/7.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          shortDescription: 'November 05, 1955',
          firstButton: 'LIKE',
          secondButton: 'SHARE'
      }
  ];

    console.log(this.data);
  }

  ngOnInit() {
  }

}
