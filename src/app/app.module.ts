import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ExerciseintervalComponent } from './exerciseinterval/exerciseinterval.component';
import { FormpageComponent } from './formpage/formpage.component';
import { IntervaltimeComponent } from './intervaltime/intervaltime.component';
import { PreptimeComponent } from './preptime/preptime.component';
import { ReptimeComponent } from './reptime/reptime.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ExerciseintervalComponent,
    FormpageComponent,
    IntervaltimeComponent,
    PreptimeComponent,
    ReptimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatInputModule, 
    MatButtonModule, 
    ReactiveFormsModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
