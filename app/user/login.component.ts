import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}
    `]
})

export class LoginComponent{//
    selectedEmployee: any;

    
    constructor(private authService: AuthService, private router: Router){}
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }
    cancel(){
        console.log("in cancel")
        this.router.navigate(['events'])
    }
    displaySelected(yyy){
        console.log(this.employee.firstName, this.employee.lastName)
        debugger;
    }
    employee: any =[
        {id: 1, firstName: "George", lastName:"Washington"},
        {id: 2, firstName: "John", lastName:"Adams"},
        {id: 3, firstName: "Thomas", lastName:"Jefferson"}
    ]
}