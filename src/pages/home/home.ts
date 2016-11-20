import { Component } from '@angular/core';
import { NavController ,ModalController,NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {AddPage} from '../add/add';
import {Weather} from '../../providers/weather';
import {StorageProv} from '../../providers/storage';
import {ForecastPage} from '../forecast/forecast';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public weatherList =[];
public localWeather:Object;

  constructor(public nav: NavController,public modalCtrl: ModalController ,  public weather:Weather ,public NavParams:NavParams , public Storage:StorageProv ) {

    this.getLocalWeather();
    this.getStoredWeathers();

  }
  getStoredWeathers(){
    this.Storage.getWeathers().then((weathers) =>{
      this.weatherList = JSON.parse(weathers) || [];
    });
  }


  addWeather() {

  let addWeatherModal= this.modalCtrl.create(AddPage);
  addWeatherModal.onDidDismiss(data => {
    if (data){
      this.getWeather(data.city,data.country);
}
  });
  addWeatherModal.present(addWeatherModal);

}
getWeather(city:string , country:string){
this.weather.city(city,country)
.map(data => data.json())
.subscribe(data=> {
  this.weatherList.push(data);
  this.Storage.setWeather(data);
})


}
viewForecast(cityWeather){
console.log("view forecast");
this.nav.push(ForecastPage,{cityWeather:cityWeather});
  }

  getLocalWeather(){
    this.weather.local().subscribe(
      data => {
        this.localWeather = data;
      }
    )

  }
}
