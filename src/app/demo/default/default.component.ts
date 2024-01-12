
// Angular Import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from 'src/app/customer/customer.component';


// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// Bootstrap Import
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

// third party
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
import { DatasetServiceService } from 'src/app/dataset-service.service';
import { __values } from 'tslib';
import { bottom } from '@popperjs/core';

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
  fill: ApexFill;
  labels:any,
  yaxis: ApexYAxis,
  legend: ApexLegend,
  theme: ApexTheme,
  title: ApexTitleSubtitle;
  series1:ApexAxisChartSeries;
 
};

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export default class DefaultComponent 
{
  
  // private props
  @ViewChild('growthChart') growthChart: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  @ViewChild('growthChart') growthChart2: ChartComponent;
  chartOptions2: Partial<ChartOptions>;

  @ViewChild('growthChart1') growthChart1: ChartComponent;
  chartOptions1: Partial<ChartOptions>;

  @ViewChild('chart', { static: false }) areachart: ChartComponent;
  public areachartOptions;

  @ViewChild('chart', { static: false }) piechart: ChartComponent;
  public piechartOptions;

  @ViewChild('chart', { static: false }) rchart: ChartComponent;
  public rchartOptions;

  @ViewChild('chart', { static: false }) donutchart: ChartComponent;
  public donutchartOptions;

  @ViewChild('chart', { static: false }) radarchart: ChartComponent;
  public radarchartOptions;

  @ViewChild("chart") chart: ChartComponent;
  public polarChartOptions: Partial<ChartOptions>;
  
  @ViewChild("chart") chartmeter: ChartComponent;
  public chartmeterOptions: Partial<ChartOptions>;

  @ViewChild('chart', { static: false }) anamoly: ChartComponent;
  public anamolychartOptions;


  // @ViewChild("chart") chart1: ChartComponent;
  // public ChartOptions: Partial<ChartOptions>;
  

  // @ViewChild('bajajchart') bajajchart: ChartComponent;
  // chartOptions1: Partial<ChartOptions>;
  monthChart: any;
  yearChart: any;
  colorChart = ['#673ab7'];

  // declarations
  Total:number
  Revenue :number
  planCount : number
  
  pieLabel:any
  pieValues:any

  donutLabel:any
  donutValues:any

  revenueLabel: string[];
  revenueValues: any[];

  paymentModeLabel: string[];
  paymentModeValues : any[];

  payStatusLabel:string[];
  payStatusValues :any[];

  activeValues :any[];
  inactiveValues : any[];
  monthLabel :string[]=[];

  radarLabel : string[]=[]
  radarValues :any[];

  feedbackLabel :string[]=[]
  feedbackValues : any[]

  anamolyLabel :string[]=[]
  anamolyValues :any[]


  // Constructor
  constructor(private service:DatasetServiceService) 
  {
    // setTimeout(()=>{
    //   location.reload();
    // },9000);
    
  }

  // Life cycle events
  ngOnInit(): void 
  {
    // setTimeout(() => {
    //   this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
    //   this.monthChart.render();
    // }, 500);

    // for values 
    this.getCustomerCount();// count of customers
    this.getRevenue();// revenue
    this.plan();//plan count
    this.chartPie(); // count based on location
    this.chartDonut();// count based on plans
    this.chartBar(); // revenue based on months
    this.chartArea();// mode of payment
    this.chartPayLine(); // payment status
    this.chartStatus();// payment status
    this.chartRadar(); // plan based revenue
    this.chartFeedback(); // feedback
    this.chartAnamoly();
    
  }
  

  

  
  
  
  
  
  

  // public Method
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      setTimeout(() => {
        this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
        this.monthChart.render();
      }, 200);
    }

    
  }

  
  monthOptions = {
    chart: {
      type: 'area ',
      height: 90,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [
      {
        name: 'series1',
        data: [45, 66, 41, 89, 25, 44, 9, 54]
      }
    ],
    yaxis: {
      min: 5,
      max: 95
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return 'Total Earning';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  
  // method declarations 

  // count of customers
  getCustomerCount()
  {
    // this.service.countCust.subscribe(count=>{this.Total=count});
    this.service.getTeleCount().subscribe((count:number)=>{this.Total=count;
      console.log("tele count : "+count)},);
  }

  // revenue
  getRevenue() {
    this.service.getRevenue().subscribe((rev:number)=>{this.Revenue=rev;
    console.log(rev)
    });
  }

  // plancount
  plan() 
  {
    this.service.plan().subscribe((data:number)=>
    {
      this.planCount = data;
    })
  }

  
  // charts 
  //count based on locations
  
  chartPie() 
  {
    console.log("before service");
    this.service.getLocation().subscribe((data: any) => 
    {
      // Convert the object to separate arrays
      const pieLabel = [];
      const pieValues: string[] = [];

      // iterate the data if it is key add in label. if it is value add in values
      for (const key in data) 
      {
        if (data.hasOwnProperty(key)) 
        {
          pieLabel.push(key);
          pieValues.push(data[key]);
        }
      }
      this.piechartOptions = 
      {
        series: pieValues,
        chart: 
        {
          type: 'pie', // supports radialBar
          height: 350,
        },
        labels: pieLabel,
        colors: ['#ddd1fe', '#303f9f', '#673ab7','#42a5f5',"#b39ddb","#6495ed"], // Example colors for the pie chart
        tooltip: 
        {
          theme: 'dark',
        },
        legend: 
        {
          position: 'bottom',
        }
      };
      console.log("value :"+pieValues)
      console.log("label: "+pieLabel)
      console.log("after service");
    });
  }

  // count based on plans
  chartDonut() 
  {
    console.log("before service");
    this.service.getPlanTele().subscribe((data: any) => 
    {
      // Convert the object to separate arrays
      const donutLabel = [];
      const donutValues: string[] = [];

      // iterate the data if it is key add in label. if it is value add in values
      for (const key in data) 
      {
        if (data.hasOwnProperty(key)) 
        {
          donutLabel.push(key);
          donutValues.push(data[key]);
        }
      }
      this.donutLabel = donutLabel
      this.donutValues = donutValues

      this.donutchartOptions = {
        series: donutValues, 
        chart: {
            type: 'donut', 
            height: 350,
        },
        labels:donutLabel, 
        colors: ['#303f9f', '#64b5f6', '#673ab7','#0d47a1','#9575cd'], 
        tooltip: {
            theme: 'dark',
        
        },
        legend: {
          position: 'bottom',
      },
      };
      
      console.log("value :"+donutValues)
      console.log("label: "+donutLabel)
      console.log("after service");
    });
  }

  // revenue based on months
  chartBar() 
  {
    this.service.getMonthRev().subscribe((data:any)=>
    {
      const revenueValues = [];
      const revenueLabel : string[]=[]

      for(const key in data)
      {
        if(data.hasOwnProperty(key))
        {
          revenueLabel.push(key);
          revenueValues.push(data[key]);
        }
      }
      this.revenueLabel = revenueLabel
      this.revenueValues = revenueValues

      this.chartOptions1 = {
        series: [
  
         
          {
            name: 'revenue',
            data: revenueValues
          },
          
          
        ],
        dataLabels: {
          enabled: false
        },
        chart: {
          type: 'bar',
          height: 380,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors:['#673ab7'],
        // colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        xaxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
          // categories: revenueLabel
        },
        grid: {
          strokeDashArray: 4
        },
        tooltip: {
          theme: 'dark'
        },
        
      };


    })
  }

  // area chart - mode of payment
  chartArea() 
  {
    console.log("area init")
    this.service.getPayMode().subscribe((data:any)=>
    {
      const paymentModeLabel = []
      const paymentModeValues : string[]=[]

      for(const key in data)
      {
        if(data.hasOwnProperty(key))
        {
          paymentModeLabel.push(key);
          paymentModeValues.push(data[key])
        }
      }

      this.paymentModeLabel = paymentModeLabel;
      this.paymentModeValues = paymentModeValues;
      console.log(paymentModeLabel+"\n"+paymentModeValues)

      this.areachartOptions = {
        series: [
          {
            name: 'payment mode',
            data: paymentModeValues,
          },
          
        ],
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false
          }
        },
        colors: [
          '#673ab7',
          '#13d8aa',
          '#A5978B',
          '#673ab7',
          '#f9a3a4',
          '#90ee7e',
          '#f48024',
          '#69d2e7',
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels:paymentModeLabel,
        xaxis: {
          
        },
        stroke: {
          curve: "smooth"
        },
        tooltip: {
          theme: 'dark'
        },
      };
  

    })
  };

  // anamoly
  chartAnamoly() 
  {
    console.log("before service");
    this.service.getAnamoly().subscribe((data: any) => 
    {
      // Convert the object to separate arrays
      const anamolyLabel = [];
      const anamolyValues: string[] = [];

      // iterate the data if it is key add in label. if it is value add in values
      for (const key in data) 
      {
        if (data.hasOwnProperty(key)) 
        {
          anamolyLabel.push(key);
          anamolyValues.push(data[key]);
        }
      }
      this.anamolyLabel = anamolyLabel
      this.anamolyValues = anamolyValues

      this.anamolychartOptions = {
        series: anamolyValues, 
        chart: {
            type: 'donut', 
            height: 390,
            
        },
        // labels:anamolyLabel,
        labels:['0 - no anomaly','1 - anomaly'], 
        colors: [ '#673ab7','#64b5f6','#9575cd'], 
        tooltip: {
            theme: 'dark',
        
        },
        total: {
          show: true,
          label: "Total",
          
        },
        legend: {
          position: 'bottom',
      },
      
      };
      
      
    });
  }


  // payment status
  chartPayLine() 
  {
    console.log("bf service")
    this.service.paymentStatus().subscribe((data:any)=>{
      const payStatusLabel :string[] =[]
      const payStatusValues:number[] =[];
      console.log(data)
      for(const key in data)
      {
        if(data.hasOwnProperty(key))
        {
          payStatusLabel.push(key)
          payStatusValues.push(data[key])
        }
      }

      this.payStatusLabel = payStatusLabel
      this.payStatusValues = payStatusValues
      console.log(payStatusLabel+"\n"+payStatusValues)

      this.polarChartOptions=
     {

      series: [
        {
          name: 'status',
          data: payStatusValues,
        }],
        chart: {
          width: 380,
          height:350,
          type: 'area',
          toolbar: {
            show: false
          }
        },
        labels: payStatusLabel,
        fill: {
          opacity: 5
        },
        stroke: {
          width: 4,
          colors: undefined
        },
        colors:['#673ab7'],
        yaxis: {
          show: false
        },
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          bar:{
            

          },
          polarArea: {
            rings: {
              strokeWidth: 0
            }
          }
        },
        tooltip: {
          theme: 'dark'
        },
       
    };
  
    })
  };

  // to get active and inactive customers based on month
  chartStatus() 
  {
    console.log("before status service")
    this.service.getStatusCount().subscribe((data:any)=>
    {
      const activeValues = []
      const inactiveValues = []
      const monthLabel :string[]=[];

      for(const key in data)
      {
        if(data.hasOwnProperty(key))
        {
          monthLabel.push(key);
          activeValues.push(data[key].active)
          inactiveValues.push(data[key].inactive)
        }
      }

      this.monthLabel = monthLabel;
      this.activeValues = activeValues;
      this.inactiveValues = inactiveValues;

      console.log(monthLabel+"\n"+"active:"+activeValues+"\n"+"inactive:"+inactiveValues)
      this.chartOptions = {
        // data
        series: [
          {
            name: 'active',
            data: activeValues
          },
          // {
          //   name: 'passive',
          //   data: inactiveValues
          //   // data:[2,3,4,1],
          // },
          
        ],
        
        // dataset
        dataLabels: {
          enabled: false
        },
        //type of chart
        chart: {
          type: 'area',
          height: 380,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: ['#673ab7', '#1e88e5', '#673ab7', '#ede7f6'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%'
          }
        },
        xaxis: {
          type: 'category',
          categories: monthLabel
          // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',   'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        grid: {
          strokeDashArray: 4
        },
        tooltip: {
          theme: 'dark'
        }
      };
  

    })
  };

  // plan based revenue
  chartRadar() 
  {
    this.service.getPlanRev().subscribe((data:any)=>
    {
      const radarLabel :string[]=[];
      const radarValues =[];

      for(const key in data)
      {
        if(data.hasOwnProperty)
        {
          radarLabel.push(key)
          radarValues.push(data[key]);

        }
      }

      this.radarLabel = radarLabel;
      this.radarValues = radarValues;
      console.log(radarValues+"radar values")
      this.radarchartOptions = {
        series: [
          {
            name: "₹ revenue",
            data: radarValues
          }
        ],
        chart: {
          height: 350,
          type: "radar",
          toolbar: {
            show: false
          }
        },
        title: {
          text: "Basic Radar Chart"
        },
        xaxis: {
          // categories: ["January", "February", "March", "April", "May", "June"]
          categories:radarLabel,
          color:"black"
        },
        colors:['#673ab7'],
        legend: {
          position: 'bottom'
        },
        tooltip: {
          theme: 'dark'
        },
      };
  
    })
  };

// feedback status
  chartFeedback() 
  {
    this.service.feedback().subscribe((data:any)=>
    {
      const feedbackLabel :string[]=[]
      const feedbackValues =[]

      for(const key in data)
      {
        if(data.hasOwnProperty(key))
        {
          feedbackLabel.push(key);
          feedbackValues.push(data[key])

        }
      }
      console.log(feedbackLabel)
      this.feedbackLabel = feedbackLabel;
      this.feedbackValues = feedbackValues;

      this.rchartOptions = {
        series: [
          {
            name: "feedback",
            data: feedbackValues
          }
        ],
        colors:['#673ab7'],
        chart: {
          height: 340,
          type: "bar",
          toolbar: {
            show: false
          }
        },
        title: {
          text: "Basic Radar Chart"
        },
        labels:feedbackLabel,
        // xaxis: {
        //   // categories: ["January", "February", "March", "April", "May", "June"]
        //   categories:feedbackLabel
        // },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: '50%'
          }
        },
        tooltip: {
          theme: 'dark'
        },
      };

    })
  }

}
