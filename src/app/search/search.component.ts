import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { Auto, Person, Fahrt } from '../classes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


 private neueFahrt: Fahrt;
 private person: Person;

 public mitfahrer: number= 1;
 public gepaeckstueck = "egal";
 public geschlecht = "egal";

 public startort: string = "";
 public zielort: string = "";
 public datum: Date = new Date();
 public uhrzeit: string="";
 public preis: number = null;

 public geschlechter: Array<String> = ['egal','männlich', 'weiblich', 'agender', 'bigender', 'demigender', 'Enby', 'genderfluid', 'Ilyagender', 'Sonstige'];
 public gepaeck: Array<String> = ['egal','ja', 'nein'];

public fehlermeldung = "";
 isSearch: boolean = false;

 fahrten: Array<Fahrt> = [];

  constructor(private data: DataService, private router: Router) {


   }

  ngOnInit() {
  }

  onDrive(index){
    console.log(this.fahrten[index]);
       this.router.navigate(['/fahrt/' + this.fahrten[index].id]);
  }

  onSearch(){

    console.log("Auswahl:");
    console.log("Start:"+this.startort);
    console.log("Ziel:"+this.zielort);
    console.log("Datum:"+this.datum);
    console.log("Geschlecht:"+this.geschlecht);
    console.log("Gepäck:"+this.gepaeckstueck);
    console.log("Preis:"+this.preis);
    console.log("-------------");




this.fahrten = [];
this.fehlermeldung = "";

    let alleFahrten = this.data.angeboteneFahrten;
    let fahrtengenau = [];

    console.log(alleFahrten);
    for(let f of alleFahrten){


      if( (f.start.toLowerCase() == this.startort.toLowerCase()
      && f.ziel.toLowerCase() == this.zielort.toLowerCase())
      && f.datum >= new Date(this.datum)){
        if(this.gepaeckstueck=="egal"
        || (this.gepaeckstueck == "ja" && f.gepaeck == true)
        || (this.gepaeckstueck == "nein" && f.gepaeck == false)){

          switch(this.geschlecht){
            case "egal": fahrtengenau.push(f); break;
            case "männlich" && f.fahrer.geschlecht == "männlich": fahrtengenau.push(f); break;
            default:
          }

        }

      }


    }
    if(fahrtengenau.length==0){
      for(let f of alleFahrten){


        if( (f.start.toLowerCase() == this.startort.toLowerCase()
        || f.ziel.toLowerCase() == this.zielort.toLowerCase())
        && f.datum >= new Date(this.datum)){

          if(this.gepaeckstueck=="egal"
          || (this.gepaeckstueck == "ja" && f.gepaeck == true)
          || (this.gepaeckstueck == "nein" && f.gepaeck == false)){
            switch(this.geschlecht){
              case "egal": fahrtengenau.push(f); break;
              case "männlich":
                if( f.fahrer.geschlecht == "männlich"){
                  fahrtengenau.push(f);
                }
                   break;
                case "weiblich":
                if( f.fahrer.geschlecht == "weiblich"){
                 fahrtengenau.push(f);
                }
                break;
                case "agender":
                if( f.fahrer.geschlecht == "agender"){
                 fahrtengenau.push(f);
                }
                break;
                case "bigender":
                if( f.fahrer.geschlecht == "bigender"){
                 fahrtengenau.push(f);
                }
                break;
                case "demigender":
                if( f.fahrer.geschlecht == "demigender"){
                 fahrtengenau.push(f);
                }
                break;
                case "Enby":
                if( f.fahrer.geschlecht == "Enby"){
                 fahrtengenau.push(f);
                }
                break;
                case "genderfluid":
                if( f.fahrer.geschlecht == "genderfluid"){
                 fahrtengenau.push(f);
                }
                break;
                case "Ilyagender":
                if( f.fahrer.geschlecht == "Ilyagender"){
                 fahrtengenau.push(f);
                }
                break;
                case "Sonstige":
                if( f.fahrer.geschlecht == "Sonstige"){
                 fahrtengenau.push(f);
                }
                break;
              default:
            }
          }
        }
      }
    }

      this.fahrten = fahrtengenau;

    console.log(this.fahrten);
    this.isSearch = true;
    if(this.fahrten.length <= 0)
    {
      this.fehlermeldung = "Es wurden keine Fahrten gefunden!";
      this.isSearch = false;
    }

  }

}
