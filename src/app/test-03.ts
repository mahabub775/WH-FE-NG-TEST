/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector : 'ng-app',
    template : `<form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
                    <h2>Login</h2>
                    <br/>
                    <input formControlName="email">
                    <div *ngIf="email.errors && isValidFormSubmitted != null && !isValidFormSubmitted" [ngClass] = "'error'"> 
                    <div *ngIf="email.errors.required">Email required.</div>    
                    <div *ngIf="email.errors.pattern">Email not valid.</div> 
                    </div>		   
                    <br/>
                    <input type="password" formControlName="password">
                    <div *ngIf="password.errors && isValidFormSubmitted != null && !isValidFormSubmitted" [ngClass] = "'error'"> 
                        <div *ngIf="password.errors.required">
                            Password required.
                        </div>  
                        <div *ngIf="password.errors.pattern">
                            Password not valid.
                        </div> 
                    </div>		 

                    <button type="submit" >Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component    {
    pwdPattern ="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}"; 
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//valid case email :  mahabub775@gmail.com pass: Ma&1aaa7
    isValidFormSubmitted = null;    logged_in = false;
    constructor(private formBuilder:FormBuilder) {
    }
   
    userForm = this.formBuilder.group({
        email:new FormControl('', [,Validators.required,Validators.email, Validators.pattern(this.emailPattern)]),
        password:new FormControl('',[Validators.required,Validators.pattern(this.pwdPattern)])
      });




    onFormSubmit()
    {
        debugger;
        this.isValidFormSubmitted = false;
        if (this.userForm.invalid) {
           return;
        }
        this.isValidFormSubmitted = true;
        this.logged_in = true;

       
        // if(this.email==null || this.email=="" || this.password==null|| this.password==""){
        //     alert("email or Password Cn't be empty.");return;
        // }

        this.logged_in=true;
    }
    get password() {
        return this.userForm.get('password');
     }  
   
     get email() {
        return this.userForm.get('email');
     }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        // FormControl, FormBuilder, Validators,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};