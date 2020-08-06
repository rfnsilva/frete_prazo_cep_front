import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calc-preco',
  templateUrl: './calc-preco.component.html',
  styleUrls: ['./calc-preco.component.scss']
})
export class CalcPrecoComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl(''),
    sCepOrigem: new FormControl(''),
    sCepDestino: new FormControl(''),
    nCdServico: new FormControl(''),
    nCdFormato: new FormControl(''),
    nVlComprimento: new FormControl(''),
    nVlAltura: new FormControl(''),
    nVlLargura: new FormControl(''),
    nVlPeso: new FormControl(''),
    nVlDiametro: new FormControl(''),
    nVlValorDeclarado: new FormControl(''),
    sCdAvisoRecebimento: new FormControl(''),
    sCdMaoPropria: new FormControl('')
  });

  readonly apiURL : string;
  public rota: Router;
  public ctrl: boolean = true;
  public result: any;

  public produto: any;
  
  public produto_nome: string;
  public produto_: string;
  public produto_nCdFormato: string;
  public produto_nVlComprimento: number;
  public produto_nVlAltura: number;
  public produto_nVlLargura: number;
  public produto_nVlPeso: string;
  public produto_nVlDiametro: number;
  public produto_nVlValorDeclarado: number;
  public produto_sCdAvisoRecebimento: string;
  public produto_sCdMaoPropria: string;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'http://localhost:3333';
    this.rota = r;
  }

  ngOnInit(): void {
    const headers= new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*');
    
    this.http.get(`${this.apiURL}/get_produtos`, { 'headers': headers })
      .subscribe(result => {
        this.produto = result;
        this.produto_nome = this.produto[0].nome;
        this.produto_nCdFormato = this.produto[0].nCdFormato;
        this.produto_nVlComprimento = this.produto[0].nVlComprimento;
        this.produto_nVlAltura = this.produto[0].nVlAltura;
        this.produto_nVlLargura = this.produto[0].nVlLargura;
        this.produto_nVlPeso = this.produto[0].nVlPeso;
        this.produto_nVlDiametro = this.produto[0].nVlDiametro;
        this.produto_nVlValorDeclarado = this.produto[0].nVlValorDeclarado;
        this.produto_sCdAvisoRecebimento = this.produto[0].sCdAvisoRecebimento;
        this.produto_sCdMaoPropria = this.produto[0].sCdMaoPropria;
     });
  }

  calc(produto: any) {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    
    console.log(produto)
    this.http.post(`${this.apiURL}/calc_preco`, produto, { 'headers': headers })
      .subscribe(result => {
        this.result = result;
        console.log(this.result)
        this.ctrl = false;
    });
  }

  onSubmit() {
    this.calc(this.profileForm.value);
  }
}
