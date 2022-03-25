import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberPipe } from './number.pipe';
import { SharedModule } from './shared/shared.module';

// decoradores
@NgModule({
  declarations: [AppComponent, NumberPipe],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
