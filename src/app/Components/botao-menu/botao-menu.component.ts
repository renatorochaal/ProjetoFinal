import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent {
  @Input() descricao: string;
  @Input() selecionado: boolean; // Adicione a propriedade 'selecionado'
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.click.emit();
  }
}
