import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.css']
})
export class CustomersHomeComponent implements OnInit, AfterViewInit, OnDestroy {

  public valor = 1;

  public arr = [1, 2, 3, 4];

  public obj = {
    a:1,
    b:2
  }

  public d = new Date;

  public b : boolean = true;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.valor++;
      this.d = new Date();
      this.b = !this.b;
  }, 1000)
  }

  ngAfterViewInit() : void{

  }

  ngOnDestroy(): void {
    
  }

  add(ev:any){
    this.valor++;
  }
  sub(ev:any){
    this.valor--;
  }

}
