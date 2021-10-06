import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ElementComponent } from './element/element.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home/:id",
    component:HomeComponent
  },
  {
    path:"categori",
    component:CategoryComponent
  },
  {
    path:"details",
    component:DetailsComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"latest_news",
    component:LatestNewsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"single-blog",
    component:BlogDetailsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"element",
    component:ElementComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

