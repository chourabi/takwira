import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  add = new FormGroup({
    name: new FormControl('',Validators.required),
    prenom: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    vreclamation: new FormControl('',Validators.required),
    
  })
  constructor(private http:HttpClient,public data:DataService,private router:Router) { }

  ngOnInit(): void {
  }


  reclamation(){
    this.data.addReclamation(this.add.value).subscribe((data)=>{
      this.router.navigate(['all'])
      
    },(err)=>{
      alert("Something went wrong.")
    })
  }
}
