import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { terrains} from "../terrain"
@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {

  terrains=[];
  terrainlist=terrains;

  
  constructor(private dataService: DataService) { }

  
  ngOnInit() {
console.log("terrainlist", this.terrainlist);

    this.dataService.sendGetRequest().subscribe((data:any)=> {
      console.log(data);
      this.terrains=data

    })


  }
}
