import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person, Fahrt, Auto } from '../classes';
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})

export class RideDetailComponent implements OnInit {

  private fahrten: Array<Fahrt>;
  private id: number;
  private fahrt: Fahrt;

  constructor(private router: Router, private datePipe: DatePipe, private dataService: DataService) { 
    this.fahrten = dataService.angeboteneFahrten;
    //need id via navParams
    this.id = 0;

    this.fahrtAnzeigen();
  }

  ngOnInit() {
  }

  private fahrtAnzeigen(){
    this.fahrt = this.fahrten[this.id];
  }

  anfrageSenden(){
    
  }
}
