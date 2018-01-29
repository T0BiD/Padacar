import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl} from '@angular/forms';

import { Auto, Person, Fahrt } from '../classes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  date = new FormControl(new Date());
 serializedDate = new FormControl((new Date()).toISOString());
 gepaeck: string = "nein";

 isSearch: boolean = false;

 fahrten: Array<Fahrt> = this.data.angeboteneFahrten;

  constructor(private data: DataService) {
    console.log(this.fahrten);
   }

  ngOnInit() {
  }

  onSearch(){
    console.log("onSearch");
    this.isSearch = true;
  }

}
