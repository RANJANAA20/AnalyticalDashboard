import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { DatasetServiceService } from 'src/app/dataset-service.service';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent 
{
  compList :any
  feedback :any
  constructor(private service:DatasetServiceService)
  {
    this.service.getComplaints().subscribe((data)=>{
      this.compList=data;
      console.log(data);
    });

    
  }

  
}
