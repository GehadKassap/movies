import { NotfoundComponent } from './notfound/notfound.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
      {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactsComponent},
  {path:'people' , component:PeopleComponent},
  {path:'tv' , component:TvComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
