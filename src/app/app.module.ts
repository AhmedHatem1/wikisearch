import { WikipediaModule } from './wikipedia/wikipedia.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WikipediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
