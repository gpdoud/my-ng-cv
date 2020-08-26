import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  school: string = "UC";
  location: string  = "Cincinnati, OH";
  degree: string = "BS IPS";
  year: number = 1985;

  constructor() { }

  ngOnInit(): void {
  }

}
