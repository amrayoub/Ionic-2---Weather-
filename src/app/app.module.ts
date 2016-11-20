import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import {Weather} from '../providers/weather';
import {TemperaturePipe} from '../pipes/temperature';
import {ForecastPage} from '../pages/forecast/forecast';
import {StorageProv} from '../providers/storage';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    TemperaturePipe,
    ForecastPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    ForecastPage,

  ],
  providers: [Weather,StorageProv]
})
export class AppModule {}
