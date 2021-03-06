import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating!: number;
  stars?: number[];

  constructor() {}

  ngOnInit(): void {
    this.stars = [...Array(this.rating).keys()];
  }
}
