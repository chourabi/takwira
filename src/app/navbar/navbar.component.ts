import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.isConnected = false;
    }else{
      this.isConnected = true;
    }
  }

  signout(){
    if (confirm("Do you really wanna sign out ?")) {
      localStorage.clear();
      this.router.navigate(['/signin']);
    }
  }

}
