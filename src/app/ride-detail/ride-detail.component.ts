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
  private fahrt: Fahrt;

  constructor(private router: Router, private datePipe: DatePipe, private dataService: DataService, public dialog: MatDialog, private route: ActivatedRoute) {
    this.fahrten = dataService.angeboteneFahrten;
    //need id via navParams
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.fahrtAnzeigen();
  }

  ngOnInit() {
  }

  private fahrtAnzeigen(){

    let i = 0;
    for(let f of this.dataService.angeboteneFahrten){
    if(f.id == this.id){
      this.fahrt = this.dataService.angeboteneFahrten[i];
      console.log(this.fahrt);
    }
    i++;
  }
  
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
