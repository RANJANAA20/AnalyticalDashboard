import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetServiceService } from 'src/app/dataset-service.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  
} from 'ng-apexcharts';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  colors: string[];
  grid: ApexGrid;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-element-color',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  // imports: [CommonModule],
  templateUrl: './element-color.component.html',
  styleUrls: ['./element-color.component.scss']
})
// interface CustomerComponent{}
export default class ElementColorComponent 
{
  @ViewChild('chart', { static: false }) areachart: ChartComponent;
  public areachartOptions;
  dataList:any
  active : number
  inactive : number
  selectedUser :null
  customer =[]
  custNew : number
  teleList : any

  searchTerm: string = '';
    searchedCustomer: any;

    filteredTeleList: any;
    selectedLocation: string = 'all';

  constructor(private service:DatasetServiceService,private route : AppRoutingModule)
  {
    this.service.getAllData().subscribe((data)=>{this.dataList=data;},);
    // this.service.activeCust().subscribe((data: number)=>{this.active=data})
    // this.service.inactiveCust().subscribe((data:number)=>{this.inactive=data});
    // this.service.custNew().subscribe((data:number)=>{this.custNew=data;console.log(data)});

    this.service.getTelelist().subscribe((data)=>{this.teleList=data})
    this.service.getActive().subscribe((data:number)=>{this.active=data})
    this.service.getInactive().subscribe((data:number)=>{this.inactive=data});
    this.service.getNewCust().subscribe((data:number)=>{this.custNew=data});

    this.service.getTelelist().subscribe((data) => {
      this.teleList = data;
      this.filteredTeleList = this.teleList;
    });
  }

  filterByLocation() {
    if (this.selectedLocation === 'all') {
      this.filteredTeleList = this.teleList;
    } else {
      this.filteredTeleList = this.teleList.filter(
        (item) => item.location === this.selectedLocation
      );
    }
  }

  getTeleDataByLocation(event: Event) {
    const target = event.target as HTMLSelectElement;
  const location = target.value;
    this.service.getTeleDataByLocation(location).subscribe((data) => {
      this.filteredTeleList = data;
      console.log(this.filteredTeleList);
    });
  }

  searchCustomer() {
    if (this.searchTerm.trim() !== '') {
        this.service.searchCustomer(this.searchTerm).subscribe((data: any) => {
            this.searchedCustomer = data;
            console.log(this.searchedCustomer)
        });
    } else {
      console.log("failed")
        this.searchedCustomer = null;
    }
}
showpopup(item)
{
  this.selectedUser=item
  this.customer=Object.values(item)
  
  console.log(this.customer)
 
}  

closepopup()
{
  this.selectedUser=null;
}



}
