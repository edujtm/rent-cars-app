import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UnauthorizedInterceptor } from './http-interceptors/unauthorized.interceptor';

@NgModule({
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true }],
})
export class CoreModule {}
