import { Component } from '@angular/core';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appJwt';

  user = new User();

  constructor(private authService: AuthService){

  }

  register(user: User)
  {
    this.authService.register(user).subscribe();
  }

  login(user: User)
  {
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
    })
  }

  getMe()
  {
    this.authService.getMe().subscribe((name: string) => {
      console.log(name);
    })
  }
}
