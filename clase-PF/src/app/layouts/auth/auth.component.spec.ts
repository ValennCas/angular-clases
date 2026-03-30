import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AuthComponent } from "./auth.component"
import { SharedModule } from "../../shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from "../../core/services/auth.service";

describe('AuthComponent', ()=> {
    let component: AuthComponent;
    let fixture: ComponentFixture<AuthComponent>;
    let authService: AuthService;

    //Antes de cada prueba me tengo que asegurar que
    // el componente es una nueva instancia de si misma.
    // Si uso una igual para todos, puede ensuciar la sig prueba
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthComponent],
            imports: [SharedModule, BrowserAnimationsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);

        fixture.detectChanges();
    });

    it('El campo email debe se requerido', () => {
        const control = component.loginForm.get('email');
        control?.setValue('');

        expect(control?.hasError('required')).toBeTrue();
    })


    it('El campo password debe se requerido', () => {
        const control = component.loginForm.get('password');
        control?.setValue('');

        expect(control?.hasError('required')).toBeTrue();
    })


    it('Debe llamar markAllAsTouched de loginForm al llamar login si el formulario es invalido', () => {
        component.loginForm.setValue({
            email: "",
            password: ""
        })

        expect(component.loginForm.invalid).toBeTrue();

        const spyOnMark = spyOn(component.loginForm, 'markAllAsTouched');
        component.login();

        expect(spyOnMark).toHaveBeenCalled();
    })

    it('Debe llamar s suthService. login si el formulario es valido al llamar login', () => {
        component.loginForm.setValue({
            email: "valen@gmail.com",
            password: "123456"
        })

        expect(component.loginForm.valid).toBeTrue();

        const spyOnLogin = spyOn(authService, 'login');
        component.login();

        expect(spyOnLogin).toHaveBeenCalled();
    });
});