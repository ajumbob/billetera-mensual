import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  calcularSaldo(): void {
    const comida = this.gastoComida || 0;
    const servicios = this.gastoServicios || 0;
    const entretenimiento = this.gastoEntretenimiento || 0;

    this.totalGastos = comida + servicios + entretenimiento;
    this.saldoRestante = this.ingreso - this.totalGastos;

    if (this.saldoRestante < 0) {
      this.mensaje = '⚠️ ¡Alerta! Estás gastando más de lo que ingresas.';
    } else if (this.saldoRestante < (this.ingreso * 0.20)) {
      this.mensaje = 'Cuidado, tu saldo restante es bajo. Trata de ahorrar.';
    } else {
      this.mensaje = '¡Excelente manejo de tus finanzas!';
    }
    
    this.mostrarResultados = true;
  }
}