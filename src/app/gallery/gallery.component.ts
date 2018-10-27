import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [

    trigger('state', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
        ,
        query(':leave', stagger('0ms', [
          animate('.2s ease-out', keyframes([
            // style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            // style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class GalleryComponent implements OnInit {

  state: string;
  images = [
    {
      url: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260',
      altText: 'woman-in-black-blazer-holding-blue-cup',
      title: 'woman-in-black-blazer-holding-blue-cup',
      thumbnailUrl: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60'
    },
    {
      url: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260',
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
      extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60'
    },
    {
      url: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260',
      altText: 'woman-in-black-blazer-holding-blue-cup',
      title: 'woman-in-black-blazer-holding-blue-cup',
      thumbnailUrl: 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60'
    },
    {
      url: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260',
      altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
      extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
      thumbnailUrl: 'https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60'
    },
  ];

  isGallery: boolean;
  visibleIndex: number;
  constructor() {
    this.isGallery = false;
  }

  ngOnInit() {
  }

  open(i) {
    this.isGallery = true;
    this.visibleIndex = i;
  }
}

