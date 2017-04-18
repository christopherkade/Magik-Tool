import { Component, OnInit } from '@angular/core';
import {ParksService} from '../../parks.service';
import {Attraction} from '../../attraction/attraction';

@Component({
  selector: 'app-walt-disney-studios',
  templateUrl: './walt-disney-studios.component.html',
  styleUrls: ['./walt-disney-studios.component.css']
})
export class WaltDisneyStudiosComponent implements OnInit {

  attractions: any = [];
  items: any = [];
  name: string;
  filter: Attraction = new Attraction();

  constructor(private parksService: ParksService) { }

  // Gets the parks wait time to be displayed when loaded
  ngOnInit() {
    this.parksService.getWaltDisneyStudiosAttraction()
      .subscribe(attractions => { this.attractions = attractions; this.items = attractions ; console.log(attractions); });
  }
}
