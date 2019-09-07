import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.indexService.getSlide()
      .subscribe(slide => {
        console.log(slide);
        this.slides = slide[0];
      });
  }

}
