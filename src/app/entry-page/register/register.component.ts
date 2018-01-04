import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') public registerForm: NgForm;

    constructor() { }

    ngOnInit() {
    }

    // onSubmit(formInfo: NgForm) {
    //     console.log(formInfo);
    // }

    onSubmit() {
        console.log(this.registerForm);
        this.registerForm.reset();
    }

}
