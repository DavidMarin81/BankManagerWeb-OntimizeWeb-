import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PilotsHomeComponent } from './pilots-home/pilots-home.component';
import { PilotsRoutingModule } from './pilots-routing.module';


@NgModule({
  declarations: [PilotsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    PilotsRoutingModule
  ]
})
export class PilotsComponent { }
