import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MoviePickerComponent } from './movie-picker/movie-picker.component';
import { TvPickerComponent } from './tv-picker/tv-picker.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: 'movie-picker/:id',      component: MoviePickerComponent },
  { path: 'movie-picker',      component: MoviePickerComponent },
  { path: 'tv-picker/:id',      component: TvPickerComponent },
  { path: 'tv-picker',      component: TvPickerComponent },
  { path: 'movie/:id',      component: MovieDetailsComponent },
  { path: 'series/:id',      component: SeriesDetailsComponent },
  { path: 'season/:id',      component: SeasonDetailsComponent },
  { path: 'person/:id',      component: PersonDetailsComponent },
  { path: '**', component: IndexComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MoviePickerComponent,
    TvPickerComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent,
    SeasonDetailsComponent,
    PersonDetailsComponent,
    IndexComponent
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
