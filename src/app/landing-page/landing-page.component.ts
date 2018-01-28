import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  suchen(){
    console.log("suche");
    this.router.navigate(['/suche']);
  }

  anbieten(){
    console.log("create ride"); //link zur anbietenseite muss noch hinzugefügt werden
    this.router.navigate(['/createride']);
  }
}
