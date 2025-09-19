import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [],
})
export class PaymentDetailFormComponent {
  constructor(
    public service: PaymentDetailsService,
    private toastr: ToastrService
  ) {}

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      this.service.postPaymentDetail().subscribe({
        next: (res) => {
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toastr.success('Inserido com sucesso!', 'Registo de Pagamento');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
