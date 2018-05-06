import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MoviePickerComponent } from './movie-picker/movie-picker.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'picker',      component: MoviePickerComponent },
  { path: 'movie/:id',      component: MovieDetailsComponent },
  { path: '**', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MoviePickerComponent,
    MovieDetailsComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
