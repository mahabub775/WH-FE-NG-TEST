/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{monthly_payment}} <br/>
                    <b>Late Payment Fee : {{late_payment}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:any = 15000;
    monthly_payment:any = 200;
    late_payment:any = 10;
constructor(){

    if(this.loan_amount==null || this.loan_amount=="" ||  this.loan_amount==0){
        this.monthly_payment = this.late_payment="N/A";
    }else if(this.loan_amount>0){
        this.monthly_payment = (this.loan_amount*0.02).toLocaleString('en-US', {style: 'currency',currency: 'USD'});
        this.late_payment= (((this.loan_amount*0.02)*5)/100).toLocaleString('en-US', {style: 'currency',currency: 'USD'});
    }
}

}

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}