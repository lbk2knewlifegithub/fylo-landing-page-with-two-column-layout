import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'lbk-get-early-access',
  templateUrl: './get-early-access.component.html',
  styleUrls: ['./get-early-access.component.scss'],
})
export class GetEarlyAccessComponent {
  form!: FormGroup;

  constructor(_fb: FormBuilder) {
    this.form = _fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    alert('Submitted!');
  }
}
