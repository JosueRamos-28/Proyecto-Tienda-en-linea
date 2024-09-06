import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.email && this.password) {
      console.log('Inicio de sesión exitoso para:', this.email);
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userEmail', this.email);
      alert('Inicio de sesión exitoso. Puedes comprar sin volver a iniciar sesión.');
      this.router.navigate(['/']);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  recoverPassword(): void {
    alert('Reinicio de contraseña solicitado para: ' + this.email);
  }
}



