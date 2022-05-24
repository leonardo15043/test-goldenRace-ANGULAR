import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ball-selector',
    pathMatch: 'full'
  },{
    path: 'ball-selector',
    component: BallSelectorComponent,
  },{
    path: 'bet-slip',
    component: BetSlipComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
