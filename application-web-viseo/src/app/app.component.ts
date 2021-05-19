import { Component } from '@angular/core';
import {AuthService} from './auth.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(public _authService: AuthService){}
  
}
