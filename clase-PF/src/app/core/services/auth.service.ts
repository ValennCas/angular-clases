import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";
import { LoginData } from "../../layouts/auth/models";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private MOCK_AUTH_USER = {
                id: 1,
                createdAt: new Date(),
                email: 'ema@gmail.com',
                lastName: 'aa',
                firstName: 'ema',
                role: 'ADMIN',
    };

    private _authUser$ = new BehaviorSubject<IUser | null>(null);

    authUser$ = this._authUser$.asObservable(); 

    constructor(private router: Router){}

    login(data: LoginData):void{
        console.log("Esta en authService");

        if(data.email !== "user@gmail.com" || data.password !== '123456'){
            alert("Datos incorrectos");
        }
        else{
            this._authUser$.next(
               this.MOCK_AUTH_USER
            );
            localStorage.setItem('token', 'abcdefghijklmn');
            this.router.navigate(['dashboard', 'home'])
        }
    };

    verifyToken(): boolean {
        const token = localStorage.getItem('token');
        if(token){
            //this._authUser$.next(this.MOCK_AUTH_USER);
            return true;
        }
        else{
            return false;
        }
    }

    logout() : void {
        this._authUser$.next(null);
        localStorage.removeItem('token');
    }

    
}