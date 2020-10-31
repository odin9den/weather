import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherDataService } from './services/weatherdata.service';
import { SelectionComponent } from './components/selection/selection.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DisplayComponent, SelectionComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [WeatherDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
