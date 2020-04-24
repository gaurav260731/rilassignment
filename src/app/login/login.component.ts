import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './model/login.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading =  false;
  data = [];

  constructor(private router: Router, private store: Store<AppState>) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
        return;
    }
    this.store.dispatch({
      type: 'ADD_USER',
      payload: {
        email: form.value.email,
        password: form.value.password
      } as Login
    });

    console.log(this.store);


    // if (localStorage.getItem('form') !== '') {
    //   this.data = JSON.parse(localStorage.getItem('form'));
    // }

    // this.data.push(form.value.email);
    // localStorage.setItem('form', JSON.stringify(this.data));
    form.resetForm();
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
