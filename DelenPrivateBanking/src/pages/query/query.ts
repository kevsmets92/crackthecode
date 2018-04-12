import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { DatafinderProvider } from '../../providers/datafinder/datafinder';

export class QueryPage {
  documenttype: any;
  document = [];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    //this.dataFinder.getJsonDataAsync("");
  }
}
