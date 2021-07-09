import { Component } from '@angular/core';

//Component é um Decorator que funciona como um metadata para adicionar propriedades às classes
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  transferir($event: any): void{
    console.log($event);
    this.transferencia = $event;
  }

}
