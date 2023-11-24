import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css'],
})
export class StartRatingComponent implements OnChanges {
  public startWidth: number = 0;
  public rating: number = 2;
  ngOnChanges(changes: SimpleChanges): void {
    this.startWidth = (this.rating * 125) / 5;
  }
}
