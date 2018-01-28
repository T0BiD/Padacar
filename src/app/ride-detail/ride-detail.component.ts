import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private fahrt: Fahrt;

  constructor(private router: Router, private datePipe: DatePipe, private dataService: DataService, public dialog: MatDialog) { 
    this.fahrten = dataService.angeboteneFahrten;
    //need id via navParams
    this.id = 0;    
    this.fahrtAnzeigen();
  }

  ngOnInit() {
  }

  private fahrtAnzeigen(){
    //this.fahrt = this.fahrten[this.id];
    this.fahrt = new Fahrt(this.dataService.users[0]);
  }

  anfrageSenden(){
    if(this.dataService.angemeldeterUser!=null){
      let darfmitfahren = true;
      this.fahrt.mitfahrer.forEach(mitfahrer => {
        if(mitfahrer==this.dataService.angemeldeterUser){
          darfmitfahren = false;
        }
      });

      if(darfmitfahren){
        this.fahrt.addMitfahrer(this.dataService.angemeldeterUser); 
      } else{
        //hier vllt fehler ausgeben
        console.log("du bist doch schon am mitfahren amk")
      }
      

    } else {
      this.login();
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
