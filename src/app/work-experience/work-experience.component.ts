import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  name: string = "Greg Doud";
  company: string = "TIY"
  location: string = "Greenville, SC"
  job: string = "Instructor";
  duration: string = "2016-2017"
  
  constructor() { }

  ngOnInit(): void {
  }

}
