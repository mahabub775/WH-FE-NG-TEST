/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule , Output, EventEmitter, Input, } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@Component({
    selector : 'textfield',
    template : '<input type="text" [(ngModel)]="field" (keypress)="chngfieldvalue()" />'
})
export class TextField {
    
    @Output()    open = new EventEmitter();
    field = "";

    chngfieldvalue(){
        console.log(this.field);
        return this.open.emit(this.field);
    }
}


@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (open)="onOpen($event)"></textfield>`
})
export class ChildComponent {
  
    @Output()    trackfield = new EventEmitter();
    onOpen(event:any)
    {
        console.log(event);
        return this.trackfield.emit(event);
    }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (trackfield)="Getval($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";
    Getval(event:any){
        //console.log(event);
        this.title=event;
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
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};