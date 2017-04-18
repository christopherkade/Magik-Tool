import { Component, OnInit } from '@angular/core';
import {ParksService} from '../../parks.service';

@Component({
  selector: 'app-disneyland-paris',
  templateUrl: './disneyland-paris.component.html',
  styleUrls: ['./disneyland-paris.component.css']
})
export class DisneylandParisComponent implements OnInit {

  attractions: any = [];

  constructor(private parksService: ParksService) { }

  // Gets the parks wait time to be displayed when loaded
  ngOnInit() {
    this.parksService.getDisneylandParisTimes()
      .subscribe(attractions => { this.attractions = attractions; console.log(attractions); });
  }

}
