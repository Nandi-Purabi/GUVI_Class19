import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { ElementComponent } from './element/element.component';
import { HomeComponent } from './home/home.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    CategoryComponent,
    ContactComponent,
    ElementComponent,
    HomeComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
