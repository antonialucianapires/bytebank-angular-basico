import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  // tslint:disable-next-line:typedef
  transferir() {
    console.log('Solicitação realizada com sucesso');
  }
}
