import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseintervalComponent } from './exerciseinterval/exerciseinterval.component';
import { FormpageComponent } from './formpage/formpage.component';
import { IntervaltimeComponent } from './intervaltime/intervaltime.component';
import { PreptimeComponent } from './preptime/preptime.component';
import { ReptimeComponent } from './reptime/reptime.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path: '',
    component: FormpageComponent
  }, {
    path: 'clock',
    component: ClockComponent
  },
  {
    path: 'prep',
    component: PreptimeComponent
  }, {
    path: 'rep',
    component: ReptimeComponent
  },
  {
    path: 'interval',
    component: IntervaltimeComponent
  },
  {
    path: 'exerciseint',
    component: ExerciseintervalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
