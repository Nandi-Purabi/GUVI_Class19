import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  id:number=0;

  trendingBottom:Array<Card>=[
    {
      title:"Lifestyple",
      info:"Get the Illusion of Fuller Lashes by “Mascng.”",
      img:"assets/img/trending/trending_bottom1.jpg",
      color:"color1"
    },
    {
      title:"Sports",
      info:"Get the Illusion of Fuller Lashes by “Mascng.”",
      img:"assets/img/trending/trending_bottom2.jpg",
      color:"color2"
    },
    {
      title:"Travels",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/trending/trending_bottom3.jpg",
      color:"color3"
    }
  ]

  rihtContent:Array<Card>=[
    {
      title:"Concert",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/trending/right1.jpg",
      color:"color1"
    },
    {
      title:"sea beach",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/trending/right2.jpg",
      color:"color3"
    },
    {
      title:"Bike Show",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/trending/right3.jpg",
      color:"color2"
    },
    {
      title:"See beach",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/trending/right4.jpg",
      color:"color4"
    },
    {
      title:"Skeping",
      info:"Welcome To The Best Model Winner Contest",
      img:"assets/img/trending/right5.jpg",
      color:"color1"
    }

  ]

  weeklyNews:Array<Card>=[
    {
      title:"Strike",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weeklyNews2.jpg",
      color:"color1"
    },
    {
      title:"Strike",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weeklyNews1.jpg",
      color:"color1"
    },
    {
      title:"Strike",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weeklyNews3.jpg",
      color:"color1"
    },
    {
      title:"Strike",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weeklyNews1.jpg",
      color:"color1"
    }
  ]

  weekly2News:Array<Card>=[
    {
      title:"Corporate",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weekly2News1.jpg",
      color:"color1"
     },
     {
      title:"Event Night",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weekly2News2.jpg",
      color:"color1"
     },
     {
      title:"Corporate",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weekly2News3.jpg",
      color:"color1"
     },
     {
      title:"Event Time",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weekly2News4.jpg",
      color:"color1"
     },
     {
      title:"Corporate",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/weekly2News4.jpg",
      color:"color1"
     }
  ]

  recentArticles:Array<Card>=[
    {
      title:"Night party",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/recent1.jpg",
      color:"color1"
    },
    {
      title:"Night party",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/recent2.jpg",
      color:"color1"
    },
    {
      title:"Night party",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/recent3.jpg",
      color:"color1"
    },
    {
      title:"Night party",
      info:"Welcome To The Best Model  Winner Contest",
      img:"assets/img/news/recent2.jpg",
      color:"color1"
    }
  ]

  constructor(private activeRoute:ActivatedRoute,private router:Router) { 
    console.log(this.id)
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData)=>
    {
      this.id=paramsData.id
      console.log(this.id)
    })
  }

}

