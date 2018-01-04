import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor() { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'username': new FormControl(null, Validators.email),
            'password': new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        console.log(this.loginForm);
    }
}
