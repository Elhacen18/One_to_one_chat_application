import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatLayoutComponent } from './chat/chat-layout/chat-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', redirectTo: 'login' }, 
  // Live above: Remove this; this was causing routing issue after login
  // It was redirecting to login after successful login
  {path: 'chat-layout', component: ChatLayoutComponent}
  //  {path: 'chat', component: ChatLayoutComponent}
];
