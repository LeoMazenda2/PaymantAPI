import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  private url: string = `${environment.baseUrl}/PaymentDetal`;
  list: PaymentDetail[] = [];

  constructor(private http: HttpClient) {}

  // 🔹 Retorna um Observable (boa prática)
  getPaymentDetails(): Observable<any> {
    return this.http.get(this.url);
  }

  // 🔹 Método apenas para log (útil em debug, mas não em produção)
  refreshList(): void {
    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as PaymentDetail[];
      },
      error: err => {console.error(err)}
    });
  }
}
