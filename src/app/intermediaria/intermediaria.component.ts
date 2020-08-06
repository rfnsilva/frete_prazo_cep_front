import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intermediaria',
  templateUrl: './intermediaria.component.html',
  styleUrls: ['./intermediaria.component.scss']
})
export class IntermediariaComponent implements OnInit {
  public radio_value: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onItemChange(event){
    this.radio_value = event.target.value;
  }

  pagina() {
    switch (this.radio_value) {
      case '1':
        this.router.navigate(['cep']);
        break;
      
      case '2':
        this.router.navigate(['calcpreco']);
        break;
      
      case '3':
        this.router.navigate(['calcprecoprazo']);
        break;
      
      default:
        alert('selecione um item');
    }
  }
}