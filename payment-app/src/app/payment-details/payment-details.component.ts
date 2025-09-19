import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailsService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetail){
    this.service.formDate = Object.assign({ },selectedRecord);

  }

  onDelete(id: number) {
    if(confirm('Deseja realmente eliminar? '))
    this.service.deletePaymentDetail(id).subscribe({
      next: (res) => {
        this.service.list = res as PaymentDetail[];
        this.toastr.error('Eliminado com sucesso!', 'Eliminação de pagamento');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
