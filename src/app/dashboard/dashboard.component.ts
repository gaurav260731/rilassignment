import { Component, OnInit } from '@angular/core';
import { Login } from '../login/model/login.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  getValue: Observable<Login[]>;
  constructor(private store: Store<AppState>) {
    this.getValue = this.store.select(state => state.addUser);
  }

  ngOnInit() {
    //this.getValue = JSON.parse(localStorage.getItem('form'));
    console.log(this.getValue);
  }

}
