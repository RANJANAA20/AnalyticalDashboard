import { Component } from '@angular/core';
import { DatasetServiceService } from 'src/app/dataset-service.service';

@Component({
  selector: 'app-cust-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.scss']
})
export class CustListComponent 
{
  dataList:any
  constructor(private service:DatasetServiceService)
  {
    this.service.getAllData().subscribe((data)=>{this.dataList=data;},);
  }
}
