import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person, Fahrt, Auto } from '../classes';
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})

export class RideDetailComponent implements OnInit {

  private fahrten: Array<Fahrt>;
  private id: number;
  public fahrt: Fahrt;
  private likeable : boolean;


  constructor(private router: Router, private datePipe: DatePipe, private dataService: DataService, public dialog: MatDialog, private route: ActivatedRoute) {
    this.fahrten = dataService.angeboteneFahrten;
    //need id via navParams
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.likeable = false;
    
    console.log(this.id);
    this.fahrtAnzeigen();
    this.darfmanlikenunddisliken();
  }

  ngOnInit() {
  }

  private fahrtAnzeigen() {
    console.table(this.dataService.angeboteneFahrten);
    this.dataService.angeboteneFahrten.forEach(f => {
      if(f.id == this.id){
        this.fahrt = f;
      }
    });

  }

  anfrageSenden() {
    if (this.dataService.angemeldeterUser != null) {
      let darfmitfahren = true;
      this.fahrt.mitfahrer.forEach(mitfahrer => {
        if (mitfahrer == this.dataService.angemeldeterUser) {
          darfmitfahren = false;
        }
      });

      if (darfmitfahren) {
        this.fahrt.addMitfahrer(this.dataService.angemeldeterUser);
      } else {
        //hier vllt fehler ausgeben
        console.log("du bist doch schon am mitfahren amk")
      }


    } else {
      this.login();
    }

  }

  like(){
    if(this.dataService.angemeldeterUser){
      this.fahrt.like(this.dataService.angemeldeterUser);
    }
    this.darfmanlikenunddisliken();
    
  }
  dislike(){
    if(this.dataService.angemeldeterUser){
      this.fahrt.dislike(this.dataService.angemeldeterUser);
    }
    this.darfmanlikenunddisliken();
  }

  darfmanlikenunddisliken(){
    if(true || new Date(this.fahrt.datum)<new Date()){ //#todo zum testen
      let binichmitfahrer = false;
      this.fahrt.mitfahrer.forEach(m => {
        if(m.id == this.dataService.angemeldeterUser.id){
          binichmitfahrer = true;
        }
      });
      
      let schongeliked = false;
     this.fahrt.haveliked.forEach(p => {
      if(p.id==this.dataService.angemeldeterUser.id){
        schongeliked = true;
      }
     });
      
      if(!schongeliked && binichmitfahrer){
        this.likeable = true;
      }
    }
  }


  login(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.anfrageSenden();
      console.log('The dialog was closed');
    });
  }

  
  


}
