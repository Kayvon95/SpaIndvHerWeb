import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public hasToken = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('auth_token') != null) {
      this.hasToken = true;
    } else {
      this.hasToken = false;
    }
  }

  public onLogout() {
    // this.token = '';
    localStorage.removeItem('auth_token');
    this.router.navigate(['/']);
  }
}
