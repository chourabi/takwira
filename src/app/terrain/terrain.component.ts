import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  terrains:any=[];


  
  constructor(private dataService: DataService) { }

  
  ngOnInit() {


    this.dataService.getFeild(null).subscribe((data:any)=> {
      console.log(data);
      this.terrains=data;

    })


  }
}
