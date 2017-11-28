import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Config } from '../app.config';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    CommonModule,
    HttpModule,
  ],
  exports: [
    BrowserModule,
    HttpModule,
    IonicModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Config
  ]
})
export class SharedModule {}
