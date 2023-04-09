import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SharedModule } from '../shared/shared.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, AuthPageComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  providers: [AuthService],
  exports: [AuthRoutingModule],
})
export class AuthModule {}
