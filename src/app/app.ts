import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BilleteraService } from './billetera';
import { PanelResultadosComponent } from './panel-resultados/panel-resultados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelResultadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ingreso: number = 1500;
  gastoComida: number = 0;
  gastoServicios: number = 0;
  gastoEntretenimiento: number = 0;
  
  totalGastos: number = 0;
  saldoRestante: number = 0;
  mensaje: string = '';
  mostrarResultados: boolean = false;

  private billeteraService = inject(BilleteraService);

  calcularSaldo(): void {
    this.totalGastos = this.billeteraService.calcularTotalGastos(this.gastoComida, this.gastoServicios, this.gastoEntretenimiento);
    this.saldoRestante = this.billeteraService.calcularSaldo(this.ingreso, this.totalGastos);
    this.mensaje = this.billeteraService.obtenerMensajeAlerta(this.saldoRestante, this.ingreso);
    
    this.mostrarResultados = true;
  }

  limpiar(): void {
    this.ingreso = 1500;
    this.gastoComida = 0;
    this.gastoServicios = 0;
    this.gastoEntretenimiento = 0;
    this.mostrarResultados = false;
  }
}