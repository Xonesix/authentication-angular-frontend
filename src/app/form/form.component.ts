import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  template: `
    <form [formGroup]="profileForm" id="userform" (ngSubmit)="handleSubmit()">
      <label for="username">UserName: </label>
      <input required type="text" id="username" formControlName="username" />
      <label for="password">Password: </label>
      <input
        required
        type="password"
        id="password"
        formControlName="password"
      />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  styleUrl: './form.component.css',
})
export class FormComponent {
  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(7),
    ]),
  });
  constructor(private router: Router, private route: ActivatedRoute) {}
  handleSubmit() {
    // alert(
    //   `Username = ${this.profileForm.value.username}\nPassword = ${this.profileForm.value.password}`
    // );
    if (true) {
      this.router.navigate(['dashboard']);
    }
  }
}
