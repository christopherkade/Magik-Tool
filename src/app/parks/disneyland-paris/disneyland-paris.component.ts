import { Component, OnInit } from '@angular/core';
import {ParksService} from '../../parks.service';
import {Attraction} from '../../attraction/attraction';

@Component({
  selector: 'app-disneyland-paris',
  templateUrl: './disneyland-paris.component.html',
  styleUrls: ['./disneyland-paris.component.css']
})
export class DisneylandParisComponent implements OnInit {

  attractions: any = [];
  items: any = [];
  name: string;
  filter: Attraction = new Attraction();

  constructor(private parksService: ParksService) { }

  // Gets the parks wait time to be displayed when loaded
  ngOnInit() {
    this.parksService.getDisneylandParisAttractions()
      .subscribe(attractions => { this.attractions = attractions; this.items = attractions ; console.log(attractions); });
  }
}
