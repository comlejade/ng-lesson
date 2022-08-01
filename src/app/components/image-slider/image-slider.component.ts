import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {

  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', { static: true })
  imgSlider!: ElementRef;
  @ViewChildren('img')
  imgs!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit', this.imgSlider)
    console.log('ngOnInit', this.imgs)
    // alert('ngOnInit')
    // this.imgSlider.nativeElement.innerHTML = `<div>新模板</div>`
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.imgs)
    // alert('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', this.imgs)
    // alert('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.imgs)
    // alert('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked', this.imgs)
    // alert('ngAfterViewChecked')
  }

}
