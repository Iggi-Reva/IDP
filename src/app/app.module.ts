import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { PopularComponent } from './popular/popular.component';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    SearchbarComponent,
    BookstoreComponent,
    ContactComponent,
    FooterComponent,
    AccountComponent,
    ErrorComponent,
    PopularComponent,
    NewarrivalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
