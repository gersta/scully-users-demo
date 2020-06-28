import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  user$: Observable<any>;

  api: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.pipe(
      pluck("userId") // take the userId param from the route
    ).subscribe(userId => {
      this.user$ = this.http.get<any>(`${this.api}/${userId}`);
    })
  }

}
