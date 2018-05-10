import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MoviePickerComponent } from './movie-picker/movie-picker.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';

const appRoutes: Routes = [
  { path: 'picker/:id',      component: MoviePickerComponent },
  { path: 'picker',      component: MoviePickerComponent },
  { path: 'movie/:id',      component: MovieDetailsComponent },
  { path: 'person/:id',      component: PersonDetailsComponent },
  { path: '**', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MoviePickerComponent,
    MovieDetailsComponent,
    PersonDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
