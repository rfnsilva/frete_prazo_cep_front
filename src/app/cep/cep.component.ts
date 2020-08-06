import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {
  profileForm = new FormGroup({
    cep: new FormControl('')
  });

  readonly apiURL : string;
  public rota: Router;
  public ctrl: boolean = true;
  public result: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
  }

  calc(cep: any) {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    
    this.http.post(`${this.apiURL}/acha_endereco`, cep, { 'headers': headers })
      .subscribe(result => {
        this.result = result;
        this.ctrl = false;
    });
  }

  onSubmit() {
    this.calc(this.profileForm.value);
  }
}
