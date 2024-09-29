import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  template: `
    <form [formGroup]="profileForm" id="userform" (ngSubmit)="handleSubmit()">
      <label for="email">Email: </label>
      <input required type="text" id="email" formControlName="email" />
      <label for="password">Password: </label>
      <input
        required
        type="password"
        id="password"
        formControlName="password"
      />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
      <p>{{ errorMessage }}</p>
    </form>
  `,
  styleUrl: './form.component.css',
})
@Injectable({ providedIn: 'root' })
export class FormComponent {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(7),
    ]),
  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  errorMessage = '';
  handleSubmit() {
    // alert(
    //   `Username = ${this.profileForm.value.username}\nPassword = ${this.profileForm.value.password}`
    // );

    const formData = this.profileForm.value;
    this.http
      .post<unknown>('http://localhost:8080/login', formData, {
        observe: 'response',
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          this.router.navigate(['dashboard']);
        },
        (error) => {
          this.errorMessage = error.error?.message;
        }
      );

    // if (true) {
    //   this.router.navigate(['dashboard']);
    // }
  }
}
