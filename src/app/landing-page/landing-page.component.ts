import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router,private data: DataService) { }

  ngOnInit() {
  }

  suchen(){
    console.log("suche");
    this.router.navigate(['/suche']);
  }

  loadandsave(){
    this.data.save();
    this.data.load();
  }

}
