import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.css']
})
export class UserProfileComponent {
  email: string = localStorage.getItem('userEmail') || '';
  firstName: string = 'Nombre';
  lastName: string = 'Apellido';

  constructor(private router: Router) {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    if (localStorage.getItem('userLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    }
  }

  updateProfile(): void {
    localStorage.setItem('userEmail', this.email);
    alert('Perfil actualizado');
  }

  changePassword(): void {
    alert('Cambio de contraseña solicitado para: ' + this.email);
  }

  logout(): void {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/home']);
    alert('Has cerrado sesión correctamente.');
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}

