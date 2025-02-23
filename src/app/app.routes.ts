import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ChatManagerComponent } from './features/chat-manager/chat-manager.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'chat', component: ChatManagerComponent },
    ],
  },
];
