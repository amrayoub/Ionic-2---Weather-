import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Geolocation} from 'ionic-native';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Weather {

private appId ='ab522410733c5709226f78ec02dff236';
private baseUrl ='http://api.openweathermap.org/data/2.5/';
  constructor(public http: Http) {}

    city(city: string, country: string){
      let url = this.baseUrl + 'weather';
      url+= '?q=' +city;
      url+=',' +country;
      url+='&appid=' + this.appId;


      return this.http.get(url);
  }
  forecast(cityId: string , numbOfDays:number){

    let url = this.baseUrl + 'forecast/daily';
    url+= '?id='+cityId;
    url+= '&appid=' + this.appId;
    url+= '&cnt=' + numbOfDays;

    return this.http.get(url);
  }
  local(){
    let Obs = Observable.create(observer =>{


    Geolocation.getCurrentPosition().then((resp =>{
      let lat = resp.coords.latitude;
      let lng = resp.coords.longitude;

    let url = this.baseUrl +'weather';
    url+= `?lat=${lat}&lon=${lng}`;
    url+= '&appid=' +this.appId;


    return this.http.get(url)
    .subscribe(data => {
      observer.next(data.json());
    },
    err => observer.error(err),
    () => observer.compelte
)

}))
})

return Obs;
  }
}
