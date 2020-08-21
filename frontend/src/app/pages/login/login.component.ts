import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('init login');
    this.service.login(this.username, this.password).subscribe(
      res => {
        console.log('login comp', res);
        if (res == true) {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

}
