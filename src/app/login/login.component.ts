import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading =  false;
  data = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
        return;
    }
    if(localStorage.getItem('form') != '') {
      this.data = JSON.parse(localStorage.getItem('form'));
    }

    console.log('before call' + this.data);
    console.log('getting userdetails' + localStorage.getItem('form'));
    this.data.push(form.value.email);
    localStorage.setItem('form', JSON.stringify(this.data));
    form.resetForm();
    this.router.navigate(['/dashboard']);
    console.log(this.data);
  }
}
