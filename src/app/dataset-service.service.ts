import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatasetServiceService
 {

  searchCustomer(customerId: string): Observable<any> {
    return this.http.get('http://localhost:9090/search?customerId=' + customerId);
}

getTeleDataByLocation(location: string) {
  return this.http.get('http://localhost:9090/teleDataByLocation?location=' + location);
}
  
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
  //       console.log(message.body)
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

  private telecount = 'http://localhost:9090/countTele'; // tele count

  private teleList = 'http://localhost:9090/teleData'; // tele List

  private active = 'http://localhost:9090/countActive' // tele active count

  private inactive = 'http://localhost:9090/countInactive' // tele inactive count

  private teleNew = 'http://localhost:9090/countNew' // new customers

  private location = 'http://localhost:9090/getLocation' // location

  private plantele = 'http://localhost:9090/getPlan' // plan telecom

  private payMode = 'http://localhost:9090/Payment'; // payment mode

  private statusCount = 'http://localhost:9090/countStatus' // status count

  private planRev = 'http://localhost:9090/planRevenue'; // plan based revenue

  private monthRev = 'http://localhost:9090/monthRev'; // month based revenue

  private anamoly = 'http://localhost:9090/anamoly'; // billing anamoly


   // own dataset
  private plancount = "http://localhost:9090/loc" // no.of.plans

  private viewUrl = 'http://localhost:9090/viewData'; // view customer

  private countUrl = 'http://localhost:9090/count'; // total customer

  private revUrl ='http://localhost:9090/rev'; // revenue 

  private locationUrl = 'http://localhost:9090/getLocationCounts'; // location

  private planUrl = "http://localhost:9090/loc";// plan count

  private activeUrl = "http://localhost:9090/activeCustomer"; // active customer

  private inactiveUrl = "http://localhost:9090/inactiveCustomer" // inactive customer

  private userNewUrl = "http://localhost:9090/newCustomer" // to get new customers

  private revenueUrl = "http://localhost:9090/monthRevenue" // count of revenue

  private customerId = "http://localhost:9090"// to get individual customer

  private paymentModeUrl = "http://localhost:9090/modeOfPayment" // based on payment mode

  private payStatus = "http://localhost:9090/paymentStatus"// payment status

  private custStatus = "http://localhost:9090/statusCount" // customer status

  private complaints = "http://localhost:9090/viewComplaints" // complaints

  private planRevUrl ="http://localhost:9090/planRev" // plan based revenue

  private feedbackUrl = "http://localhost:9090/feedbackCount" // feedback

  private viewFeedback = "http://localhost:9090/viewFeedback" // view feedback

  // telecom data ser
  // telecom count 
  getTeleCount()
  {
    // location.reload();
    return this.http.get(this.telecount);
  }

  getTelelist()
  {
    return this.http.get(this.teleList);
  }

  getActive()
  {
    return this.http.get(this.active);
  }

  getInactive()
  {
    return this.http.get(this.inactive);
  }

  getNewCust()
  {
    return this.http.get(this.teleNew);
  }

  getLocation()
  {
    return this.http.get(this.location);
  }

  getPlanTele()
  {
    return this.http.get(this.plantele);
  }

  getPayMode()
  {
    return this.http.get(this.payMode);
  }

  getStatusCount()
  {
    return this.http.get(this.statusCount);
  }

  getPlanRev()
  {
    return this.http.get(this.planRev);
  }

  getMonthRev()
  {
    return this.http.get(this.monthRev);
  }

  getAnamoly()
  {
    return this.http.get(this.anamoly);
  }
  


  // own dataset

  // service to view the customer
  getAllData() 
  {
    // setTimeout(()=>{
    //   location.reload();
    // },10000);
    // location.reload();
    return this.http.get(this.viewUrl)
  }

  // no.of.plans
  plan()
  {
    return this.http.get(this.plancount);
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
  
  planRevenue()
  {
    return this.http.get(this.planRevUrl);
  }

  // feedback
  feedback()
  {
    return this.http.get(this.feedbackUrl);
  }

  // view feedback
  viewFeed()
  {
    return this.http.get(this.viewFeedback);
  }
}
