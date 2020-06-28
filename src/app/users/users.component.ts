import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;

  api: string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.users$ = this.http.get<any[]>(`${this.api}`);
  }

}
