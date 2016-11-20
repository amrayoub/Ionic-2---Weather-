import { Component } from '@angular/core';
import { NavController ,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  public data = {
    country:'us'
  };

  constructor(public navCtrl: NavController,public view: ViewController) {
  }
  dismiss(formData) {
this.view.dismiss(formData);
}

}
