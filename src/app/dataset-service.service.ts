import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatasetServiceService
 {
  
  
  
  constructor(private http: HttpClient) { }

  private viewUrl = 'http://localhost:9090/viewData'; // view customer

  private countUrl = 'http://localhost:9090/count'; // total customer

  private revUrl ='http://localhost:9090/revenue'; // revenue 

  private locationUrl = 'http://localhost:9090/getLocationCounts'; // location

  private planUrl = "http://localhost:9090/getPlanCount";// plan count

  private activeUrl = "http://localhost:9090/activeCustomer"; // active customer

  private inactiveUrl = "http://localhost:9090/inactiveCustomer" // inactive customer

  private revenueUrl = "http://localhost:9090/monthRevenue" // count of revenue

  private customerId = "http://localhost:9090"// to get individual customer

  // service to view the customer
  getAllData() 
  {
    return this.http.get(this.viewUrl)
  }
  
  // service to count customer
  countCust()
  {
    return this.http.get(this.countUrl)
  }

  // service to get revenue
  getRevenue() 
  {
    return this.http.get(this.revUrl)
  }

  // count based on location
  countLocation() 
  {
    return this.http.get(this.locationUrl)
  }

  //count based on plans
  countPlans() 
  {
    return this.http.get(this.planUrl);
  }

  // active customers
  activeCust() 
  {
    return this.http.get(this.activeUrl);
  }

  // inactive customers
  inactiveCust() 
  {
    return this.http.get(this.inactiveUrl);
  }

  // revenue based on months
  getMonRev() 
  {
    return this.http.get(this.revenueUrl);
  }
  
  // to get individual customer
  getCustById(id :number)
  {
    return this.http.get('this.customerId/${id}');
  }
}
