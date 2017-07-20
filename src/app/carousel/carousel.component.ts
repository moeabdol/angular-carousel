import { Component,
         Input,
         ContentChildren,
         QueryList,
         AfterContentInit } from '@angular/core';

import { CarouselItemComponent } from "./carousel-item.component";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentInit {
  @Input() delay: number = 500;
  @ContentChildren(CarouselItemComponent) carouselItemsList:
    QueryList<CarouselItemComponent>;

  ngAfterContentInit() {
    const carouselItems = this.carouselItemsList.toArray();
    let count = 0;
    const max = carouselItems.length;
    setInterval(() => {
      const i = count % max;
      carouselItems.forEach((item) => item.isActive = false);
      carouselItems[i].isActive = true;
      count += 1;
    }, this.delay);
  }
}
