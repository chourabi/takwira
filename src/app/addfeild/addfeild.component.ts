import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addfeild',
  templateUrl: './addfeild.component.html',
  styleUrls: ['./addfeild.component.css']
})
export class AddfeildComponent implements OnInit {

  add = new FormGroup({
    name: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    
  })
  constructor(private http:HttpClient,public data:DataService,private router:Router) { }

  ngOnInit(): void {
  }


  addFeild(){
    this.data.addFeild(this.add.value).subscribe((data)=>{
      this.router.navigate(['all'])
      
    },(err)=>{
      alert("Something went wrong.")
    })
  }

}
