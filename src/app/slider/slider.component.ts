import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  @Input() images: any;
  @Output() closeGallery = new EventEmitter();
  @Input() visibleIndex: number;
  rotation = 90;
  rotateIndex = 0;
  constructor() {
    this.visibleIndex = 0;
  }

  ngOnInit() {
  }

  next(i) {
    this.visibleIndex = i + 1;
    this.rotateIndex = 0;
  }

  previous(i) {
    this.visibleIndex = i - 1;
    this.rotateIndex = 0;
  }

  zoomOut() {
    const img = document.querySelector('.img');
    const currWidth = img.clientWidth - 100;
    if (currWidth > 60) {
      img.setAttribute('style', 'width' + ':' + currWidth + 'px');
    }
  }

  zoonIn(e) {
    const img = document.querySelector('.img');
    const currWidth = img.clientWidth + 100;
    img.setAttribute('style', 'width' + ':' + currWidth + 'px');
  }

  pinchIn(e) {
    const img = document.querySelector('.img');
    const currWidth = img.clientWidth - 10;
    if (currWidth > 60) {
      img.setAttribute('style', 'width' + ':' + currWidth + 'px');
    }
  }

  pinchout() {
    const img = document.querySelector('.img');
    const currWidth = img.clientWidth + 10;
    img.setAttribute('style', 'width' + ':' + currWidth + 'px');
  }
  close() {
    this.closeGallery.emit();
  }

  onDrag(e) {
    console.log(e);
    const x = e.x / 10;
    const y = e.x / 10;
    const img = document.querySelector('.img');
    // img.setAttribute('style', 'left' + ':' + x + 'px;' + 'bottom' + ':' + y + 'px');
  }

  rotate(e) {
    this.rotateIndex++;
    const img = document.querySelector('.img');
    if (e === 'right') {
      img.setAttribute('style', 'transform' + ':' + 'rotate(' + this.rotation * this.rotateIndex + 'deg)');
    } else {
      img.setAttribute('style', 'transform' + ':' + 'rotate(-' + this.rotation * this.rotateIndex + 'deg)');
    }
  }
}
