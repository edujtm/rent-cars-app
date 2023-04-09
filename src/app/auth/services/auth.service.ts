import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface LoginData {
  userName: string;
  password: string;
}

interface RegisterUserData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  isUserLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  login(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/authentication/login`, data).pipe(
      tap((res) => {
        localStorage.setItem('access_token', res.accessToken);
        localStorage.setItem('refresh_token', res.refreshToken);
      })
    );
  }

  registerUser(data: RegisterUserData) {
    const body = { ...data, roles: ['Customer'] };

    return this.http.post(`${environment.apiUrl}/authentication`, body);
  }
}
