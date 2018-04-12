import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //testing code 
  documenttypes: any = [];
  users: any = [];
  //end testing code
  public date: string = new Date().toISOString();

  constructor(public navCtrl: NavController) {
      
  }
  //after view has been loaded
  ionViewDidLoad() {
    this.load();
  }
  //testing code
  load() {
    this.documenttypes = [
      { "document": "Aankoop huis", "filetype": "pdf-File", "Filesize": "578,4kB", "datestored": "12/04/2018", "stored": "ja" },
      { "document": "Notaris document", "filetype": "pdf-File", "Filesize": "1278,4kB", "datestored": "12/04/2018", "stored": "nee" },
      { "document": "Opening rekening", "filetype": "pdf-File", "Filesize": "878,4kB", "datestored": "12/04/2018", "stored": "nee" }
    ];
    this.users = [
      {"Username": "John Doe" },
      {"Username":"Kevin Smets"}
    ]
  }
  addItem() {

  }

  //endtesting code
}
