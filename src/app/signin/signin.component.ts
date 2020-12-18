import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  sigin = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
    
  })
  constructor(private api:DataService,private router:Router) { }

  ngOnInit(): void {
  }


  auth(){
    console.log("hi");
    
    this.api.auth(this.sigin.value).subscribe((data:any)=>{
      console.log(data);
      
      if (data.success == true) {
        localStorage.setItem('token',data.token);
        this.router.navigate(['/all'])
      }else{
        alert(data.message);
      }
    },(err)=>{
      alert("Something went wrong , please try again ( notice taher is awesome )");
    });
  }
}
