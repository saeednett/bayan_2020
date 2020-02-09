import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import ConfigProvider from './config';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }


  getVideo(lan: string, resolve, reject)  {
    console.log(ConfigProvider.video + '?localizable=' + lan);
    this.getContents(ConfigProvider.video + '?localizable=' + lan, [], resolve, reject);
  }

  getSound(lan: string, resolve, reject) {
    console.log(ConfigProvider.sound + '?localizable=' + lan);
    this.getContents(ConfigProvider.sound + '?localizable=' + lan, [], resolve, reject);
    console.log(resolve);
  }
  getPost(lan: string, resolve, reject) {
    console.log(ConfigProvider.post + '?localizable=' + lan);
    this.getContents(ConfigProvider.post + '?localizable=' + lan, [], resolve, reject);
  }
  getPersons(lan: string, resolve, reject) {
    console.log(ConfigProvider.persons + '?localizable=' + lan);
    this.getContents(ConfigProvider.persons + '?localizable=' + lan, [], resolve, reject);
  }

  getContents(url, Contents, resolve, reject) {
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // headers = headers.set('Accept', 'application/javascript');
    // ,{headers}
    console.log('this is link ' + url);
    this.http.get(url).subscribe(data => {
      const response: any = data;
      console.log('this is data ' + response);
      const retrivedResult = Contents.concat(response.data);
      console.log(response.links.next);
      if (response.links.next !== null) {
        this.getContents(response.links.next, retrivedResult, resolve, reject);
      } else {
        console.log(retrivedResult);
        resolve(retrivedResult);
      }
    }, err => {
      // this.tool.presentToast("حدث خطأ أثناء محاولة جلب البيانات");
      console.log('حدث خطأ أثناء محاولة جلب البيانات');
      console.log(err);
      reject(err);
    });
  }

  getData(url, universities, resolve, reject) {

    // debugger;

    console.log('this is link ' + url);
    this.http.get(url).subscribe(data => {
      const response: any = data;
      const retrivedResult = universities.concat(response.data);
      console.log(response.links.next);
      if (response.links.next !== null) {
        this.getData(response.links.next, retrivedResult, resolve, reject);
      } else {
        // console.log(retrivedResult);
        resolve(retrivedResult);
      }
    }, err => {
      // this.tool.presentToast("حدث خطأ أثناء محاولة جلب البيانات");
      console.log('حدث خطأ أثناء محاولة جلب البيانات');
      console.log(err);
    });

  }

}
