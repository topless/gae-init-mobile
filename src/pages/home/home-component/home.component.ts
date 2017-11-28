import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Config } from '../../../app/app.config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  constructor(public navCtrl: NavController, public config: Config) {

  }

  login() {
    console.log('Request login to backend')
  }
}
