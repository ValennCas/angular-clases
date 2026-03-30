import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth/auth.actions';
import { authUser } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnDestroy, OnInit{
  authUserChangeSubcription?: Subscription;

  loginForm: FormGroup;

  authUserSubcription?: Subscription;

  constructor(private autService:AuthService,
     private router: Router,
    private fb: FormBuilder,
    private store: Store
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.store.select(authUser).subscribe({
      next: (user) => {
        if(user){
          this.router.navigate(['dashboard', 'home']);
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.authUserChangeSubcription?.unsubscribe();
    this.authUserSubcription?.unsubscribe();
  }



  login(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else{
       this.autService.login(this.loginForm.getRawValue());
      //this.store.dispatch(authActions.login({payload: this.loginForm.getRawValue()}));
    }
  }

}
