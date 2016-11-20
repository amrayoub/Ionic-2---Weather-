import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';



@Injectable()
export class StorageProv {
  private storageDb = 'weatherstorage';
  private storage :Storage;
  private weathers: Array<Object>

  constructor() {
    this.storage = new Storage;
    this.getWeathers().then(data =>{
      this.weathers = JSON.parse(data);
    });


  }

  getWeathers(){
    return this.storage.get(this.storageDb);
  }

  setWeather(weather){
    if(!this.weathers){
      this.weathers = [weather]
    }
    else{
      this.weathers.push(weather);
    }
    this.storage.set(this.storageDb,JSON.stringify(this.weathers));

  }

}
