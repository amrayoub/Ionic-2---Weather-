import { Injectable, Pipe } from '@angular/core';


@Pipe({
  name: 'temperature'
})
@Injectable()
export class TemperaturePipe {

  transform(value, args) {
  var c = Math.round(parseInt(value,10)-273.15);
  var f = Math.round(parseInt(value,10)*9/5 - 459.67);

  return `${c} °C \n  ${f} °F` ;
  }
}
