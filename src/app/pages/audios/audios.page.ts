import { Component, OnInit, ViewChild } from '@angular/core';
import {Howl, Howler} from 'howler';
import { IonRange } from '@ionic/angular';

export interface Track {
   name: string;
   path: string;
   url: string;
   image: string;
 }


@Component({
  selector: 'app-audios',
  templateUrl: './audios.page.html',
  styleUrls: [
   './styles/notifications.page.scss',
   './styles/notifications.shell.scss'
 ]})
export class AudiosPage implements OnInit {
   @ViewChild('range', { static: false}) range: IonRange;
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  currentFile: any = {};
  title = '';
  playList: Track[] = [
    {
      name: 'anewbeginning',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    },
    {
      name: 'creativeminds',
      path: './assets/mp3/bensound-creativeminds.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
    },
    {
      name: 'Summer',
      path: './assets/mp3/bensound-summer.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    },
    {
      name: 'Highway 49',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    },
    {
      name: 'A Man Of Many Word',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    }, {
      name: 'Don’t Think Twice',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    }, {
      name: 'Everyday I Have the Blues',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    }, {
      name: 'Love Me Like a Man',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    }, {
      name: 'Think It Over',
      path: './assets/mp3/bensound-anewbeginning.mp3',
      image: './assets/sample-images/notifications/100x100Notification1.jpg',
      url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',

    },

  ];

private data: any;
  constructor() {


  }

  ngOnInit() {
  }

  stop() {
   this.player.stop();
  }

  openFile(file, index) {
   this.title = file.title;
   this.currentFile = { index, file };
   console.log(this.currentFile);
   this.start(file);
   // console.log(this.state);
 }

  start(track: Track) {
   console.log(track.name);
   if (this.player) {
   this.player.stop();
  }

   this.player = new Howl({
       html5: true,
     src: track.url,
     // urls: [track.url],
     // https://stackoverflow.com/questions/59468679/ionic-4-play-single-audio-with-howler-with-one-click-event

     onplay: () => {
       console.log('onplay');
       this.isPlaying = true;
       this.activeTrack = track;
       console.log(this.activeTrack );
       this.updateProgress();
     },
     onend: () => {
       console.log('onend');
     }
     });
   this.player.play();
 }

 togglePlayer(pause) {
   this.isPlaying = !pause;
   if (pause) {
     this.player.pause();
   } else {
     this.player.play();
   }
 }
 next() {
   const index = this.playList.indexOf(this.activeTrack);
   if (index != this.playList.length - 1) {
     this.start(this.playList[index + 1]);
   } else {
     this.start(this.playList[0]);
   }
 }
 prev() {
   const index = this.playList.indexOf(this.activeTrack);
   if (index > 0) {
     this.start(this.playList[index - 1]);
   } else {
     this.start(this.playList[this.playList.length - 1]);
   }
 }
 seek() {
   const newValue = +this.range.value;
   const duration = this.player.duration();
   this.player.seek(duration * (newValue / 100));
 }
 updateProgress() {
   const seek = this.player.seek();
   this.progress = (seek / this.player.duration() ) * 100 || 0 ;
   setTimeout(() => {
     this.updateProgress();
   }, 1000);
 }



}
