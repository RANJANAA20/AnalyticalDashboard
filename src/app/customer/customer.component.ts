import { Component } from '@angular/core';
import { DatasetServiceService } from '../dataset-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent 
{
  constructor(private service:DatasetServiceService)
  {

  }
}
