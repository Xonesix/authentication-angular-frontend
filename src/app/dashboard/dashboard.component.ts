import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>This is the dashboard page</h1>
    <ul>
      <li>Username: {{ email }}</li>
      <li>Info: "Aramse"</li>
    </ul>
  `,
  styleUrl: './dashboard.component.css',
})
@Injectable({ providedIn: 'root' })
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.loadData();
  }

  email = '';

  loadData(): void {
    // Function to fetch data based on the valid session
    console.log('Fetching user data...');
    // Make HTTP requests to fetch necessary data
    this.http
      .get<unknown>('http://localhost:8080/dashboard', {
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          this.email = response.message;
        },
        (error) => {
          this.router.navigate(['/']);
          // console.error(error);
          // this.email = 'Something has gone wrong';
        }
      );
  }
}
