import { Component, OnInit } from '@angular/core';
import { Card } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  route:string="";
  cards:Array<Card>=[
    {
      title:"Night Party",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/news/whatNews1.jpg",
      color:"color1"
    
    },
    {
      title:"Night Party",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/news/whatNews2.jpg",
      color:"color1"
    },
    {
      title:"Night Party",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/news/whatNews3.jpg",
      color:"color1"
    },
    {
      title:"Night Party",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/news/whatNews4.jpg",
      color:"color1"
    }
  ];

  constructor(private router:Router) {
    this.route=router.url;
   }

  ngOnInit(): void {
  }

}
