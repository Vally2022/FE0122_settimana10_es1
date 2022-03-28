import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './compontents/navbar/navbar.component';
import { HomeComponent } from './compontents/home/home.component';
import { ActivePostsComponent } from './compontents/active-posts/active-posts.component';
import { InactivePostsComponent } from './compontents/inactive-posts/inactive-posts.component';
import { CardComponent } from './card/card.component';

const routes: Route[] = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'active-posts', component: ActivePostsComponent
  },
  {
    path: 'inactive-posts', component: InactivePostsComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
