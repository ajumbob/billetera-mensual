import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-resultados.html',
  styleUrl: './panel-resultados.css'
})
export class PanelResultadosComponent {
  @Input() totalGastos: number = 0;
  @Input() saldoRestante: number = 0;
  @Input() mensaje: string = '';
  @Input() mostrar: boolean = false;
}