/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user,
 *  and user has clicked out of the fields, then beside it a username should be automatically generated which should be 
 * in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <div>
                     <input type="text" [(ngModel)]="firstName" (change)="ShowResult()" /> <br/>
                     <input type="text" [(ngModel)]="lastName" (change)="ShowResult()" />
                </div>
                <div>{{result}}</div>
                `,
    styles : []
})
export class UserNameComponent {
    result:any="";
    firstName:any;lastName:any;
    constructor(){
        this.firstName=this.lastName="";
    }
    ShowResult()
    {
        if(this.firstName!="" && this.firstName!=null && this.lastName!="" && this.lastName!=null)
        {
            this.result=this.firstName+"_"+this.lastName+"_"+this.randomIntFromInterval(1,9);
        }else{
            this.result="";
        }
    }
     randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule ,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};