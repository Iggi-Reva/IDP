import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'home',
    component:CarouselComponent
  },
  {
    path:'bookstore',
    component:BookstoreComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'',
    component:CarouselComponent
  },
  {
    path:'**',
    component:ErrorComponent
  },
  {
    path:'error',
    component:CarouselComponent
  },
  {
    path:'auth',
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
