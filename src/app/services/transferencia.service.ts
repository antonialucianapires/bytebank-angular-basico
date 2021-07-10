import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDetransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaDetransferencias = [];
  }

  get transferencias(): any[] {
    return this.listaDetransferencias;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): any{
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
