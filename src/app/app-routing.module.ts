import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalcPrecoComponent } from './calc-preco/calc-preco.component';
import { CalcPrecoPrazoComponent } from './calc-preco-prazo/calc-preco-prazo.component';
import { IntermediariaComponent } from './intermediaria/intermediaria.component';
import { CepComponent } from './cep/cep.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calcpreco', component: CalcPrecoComponent },
  { path: 'calcprecoprazo', component: CalcPrecoPrazoComponent },
  { path: 'intermediaria', component: IntermediariaComponent },
  { path: 'cep', component: CepComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
