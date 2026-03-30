import { Component, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss'
})
export class MyModalComponent {
  // @Input()
  // visible = false;

  visible = input<boolean>();

  //Sintácticamente se tiene que llamar igual a Input pero se agrega Change
  // @Output()
  // visibleChange = new EventEmitter();

   visibleChange = output<boolean>();
}
