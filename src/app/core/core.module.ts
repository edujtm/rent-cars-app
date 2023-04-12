import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthorizationInterceptor } from './http-interceptors/authorization.interceptor';
import { UnauthorizedInterceptor } from './http-interceptors/unauthorized.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
  ],
})
export class CoreModule {}
