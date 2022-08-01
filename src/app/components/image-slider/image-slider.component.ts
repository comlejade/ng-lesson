import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId: any;
  @ViewChild('imageSlider', { static: true })
  imgSlider!: ElementRef;
  @ViewChildren('img')
  imgs!: QueryList<ElementRef>;

  constructor(
    private rd2: Renderer2
  ) { }

  ngAfterViewInit(): void {

    // let i = 0;
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        ((++this.selectedIndex % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length
      );
    }, this.intervalBySeconds * 1000)
  }

  handleScroll (ev: any) {
    // console.log(ev)
    let ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
    console.log(this.selectedIndex)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

}
