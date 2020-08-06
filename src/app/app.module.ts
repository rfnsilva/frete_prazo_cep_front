import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalcPrecoComponent } from './calc-preco/calc-preco.component';
import { CalcPrecoPrazoComponent } from './calc-preco-prazo/calc-preco-prazo.component';
import { IntermediariaComponent } from './intermediaria/intermediaria.component';
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcPrecoComponent,
    CalcPrecoPrazoComponent,
    IntermediariaComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
