import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilleteraService {
  
  calcularTotalGastos(comida: number, servicios: number, entretenimiento: number): number {
    return (comida || 0) + (servicios || 0) + (entretenimiento || 0);
  }

  calcularSaldo(ingreso: number, totalGastos: number): number {
    return ingreso - totalGastos;
  }

  obtenerMensajeAlerta(saldoRestante: number, ingreso: number): string {
    if (saldoRestante < 0) {
      return '⚠️ ¡Alerta! Estás gastando más de lo que ingresas.';
    } else if (saldoRestante < (ingreso * 0.20)) {
      return 'Cuidado, tu saldo restante es bajo. Trata de ahorrar.';
    } else {
      return '¡Excelente manejo de tus finanzas!';
    }
  }
}