import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaDetransferencias: any[];

  constructor() {
    this.listaDetransferencias = [];
  }

  get transferencias(): any[] {
    return this.listaDetransferencias;
  }

  adicionar(transferencia: any): void {
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
  }

  private hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
