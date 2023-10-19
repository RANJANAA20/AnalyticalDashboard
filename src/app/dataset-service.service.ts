import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class DatasetServiceService
 {
  
  private stompClient: Stomp.Client;
  
  constructor(private http: HttpClient) {
    // setTimeout(()=>{
    //   location.reload();
    // },9000);
    // this.initializeWebSocketConnection();
   }
  // initializeWebSocketConnection() 
  // {
  //   const webSocket = new WebSocket('http://localhost:9090/ws');
  //   this.stompClient = Stomp.over(webSocket);
  //   this.stompClient.connect({}, frame => {
  //     this.stompClient.subscribe('/topic/your-topic', message => {
  //       if (message.body) {
  //         const receivedMessage = JSON.parse(message.body);
  //         this.processReceivedMessage(receivedMessage);
  //       }
  //     });
  //   });
  // }
  // processReceivedMessage(receivedMessage: any) 
  // {
  //   console.log('Processing received message: ', receivedMessage);
  //   if (receivedMessage.someCondition) {
  //     this.getAllData();
  //   }
  // }
  // getAllData() 
  // {
  //   // return this.http.get(this.viewUrl)
    
  // }

  private viewUrl = 'http://localhost:9090/viewData'; // view customer

  private countUrl = 'http://localhost:9090/count'; // total customer

  private revUrl ='http://localhost:9090/revenue'; // revenue 

  private locationUrl = 'http://localhost:9090/getLocationCounts'; // location

  private planUrl = "http://localhost:9090/getPlanCount";// plan count

  private activeUrl = "http://localhost:9090/activeCustomer"; // active customer

  private inactiveUrl = "http://localhost:9090/inactiveCustomer" // inactive customer

  private userNewUrl = "http://localhost:9090/newCustomer" // to get new customers

  private revenueUrl = "http://localhost:9090/monthRevenue" // count of revenue

  private customerId = "http://localhost:9090"// to get individual customer

  private paymentModeUrl = "http://localhost:9090/modeOfPayment" // based on payment mode

  private payStatus = "http://localhost:9090/paymentStatus"// payment status

  private custStatus = "http://localhost:9090/statusCount" // customer status

  private complaints = "http://localhost:9090/viewComplaints" // complaints

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

  // new customers
  custNew()
  {
    console.log("in service")
    return this.http.get(this.userNewUrl);
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

  // based on mode of payment
  paymentMode() 
  {
    return this.http.get(this.paymentModeUrl);
  }

  // payment status
  paymentStatus()
  {
    return this.http.get(this.payStatus);
  }

  // customer status
  customerStatus()
  {
    return this.http.get(this.custStatus);
  }

  getComplaints()
  {
    return this.http.get(this.complaints);
  }
  
}
