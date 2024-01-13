import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizationGuard } from './authGuard.directive';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
// ...
@NgModule({
  declarations: [AppComponent, ProfileComponent, NotAuthorizedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://dev-ysallam.us.auth0.com',
        redirectUrl: window.location.origin + '/callback',
        postLogoutRedirectUri: window.location.origin,
        clientId: 'Qppoms0Iehi73UQzDRS824RP7u8QNm7U',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
