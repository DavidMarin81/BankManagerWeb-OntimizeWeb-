import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pilots-home',
  templateUrl: './pilots-home.component.html',
  styleUrls: ['./pilots-home.component.css']
})
export class PilotsHomeComponent implements OnInit {

  data: any [] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

}
