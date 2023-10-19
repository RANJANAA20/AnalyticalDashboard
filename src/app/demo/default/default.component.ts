
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
  series1:ApexAxisChartSeries
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

  @ViewChild('growthChart1') growthChart1: ChartComponent;
  chartOptions1: Partial<ChartOptions>;

  @ViewChild('chart', { static: false }) areachart: ChartComponent;
  public areachartOptions;

  @ViewChild('chart', { static: false }) piechart: ChartComponent;
  public piechartOptions;

  @ViewChild('chart', { static: false }) donutchart: ChartComponent;
  public donutchartOptions;

  @ViewChild("chart") chart: ChartComponent;
  public polarChartOptions: Partial<ChartOptions>;
  

  // @ViewChild('bajajchart') bajajchart: ChartComponent;
  // chartOptions1: Partial<ChartOptions>;
  monthChart: any;
  yearChart: any;
  colorChart = ['#673ab7'];

  // declarations
  Total:number
  Revenue :number
  
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

  


  // Constructor
  constructor(private service:DatasetServiceService) 
  {
    
    
    // this.chartOptions = {
    //   // data
    //   series: [
    //     {
    //       name: 'active',
    //       data: [3, 1, 3, 5, 4, 8, 3, 2, 6, 4, 15, 12]
    //     },
    //     {
    //       name: 'passive',
    //       data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
    //     },
    //     // {
    //     //   name: 'Profit',
    //     //   data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
    //     // },
    //     // {
    //     //   name: 'neutral',
    //     //   data: [31, 142, 25, 15, 21, 125, 80, 30, 25, 95, 20, 30]
    //     // },
    //     // {
    //     //   name: 'Maintenance',
    //     //   data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
    //     // }
    //   ],
    //   // dataset
    //   dataLabels: {
    //     enabled: false
    //   },
    //   //type of chart
    //   chart: {
    //     type: 'line',
    //     height: 480,
    //     stacked: true,
    //     toolbar: {
    //       show: false
    //     }
    //   },
    //   colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         legend: {
    //           position: 'bottom',
    //           offsetX: -10,
    //           offsetY: 0
    //         }
    //       }
    //     }
    //   ],
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //       columnWidth: '50%'
    //     }
    //   },
    //   xaxis: {
    //     type: 'category',
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',   'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //   },
    //   grid: {
    //     strokeDashArray: 4
    //   },
    //   tooltip: {
    //     theme: 'dark'
    //   }
    // };

    // area
    // this.areachartOptions = {
    //   series: [
    //     {
    //       name: 'basic',
    //       data: [400, 430, 448, 470, 540, 580, 690, 1100, 120, 130],
    //     },
        
    //   ],
    //   chart: {
    //     type: 'area',
    //     height: 350,
    //     toolbar: {
    //       show: false
    //     }
    //   },
    //   colors: [
    //     '#673ab7',
    //     '#13d8aa',
    //     '#A5978B',
    //     '#673ab7',
    //     '#f9a3a4',
    //     '#90ee7e',
    //     '#f48024',
    //     '#69d2e7',
    //   ],
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //       distributed: true,
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   xaxis: {
    //     categories: [
    //       'South Korea',
    //       'Canada',
    //       'United Kingdom',
    //       'Netherlands',
    //       'Italy',
    //       'France',
    //       'Japan',
    //       'United States',
    //       'China',
    //       'Germany',
    //     ],
    //   },
    // };

    // this.polarChartOptions=
    //  {
    //   // series: [
    //   //   {
    //   //     name: 'line',
    //   //     data: [400, 430, 448, 470, 540],
    //   //   },
    //   // ],
    //   // chart: {
    //   //   type: "bar"
    //   // },
    //   // stroke: {
    //   //   colors: ["#fff"]
    //   // },
    //   // fill: {
    //   //   opacity: 0.8
    //   // },
    //   // responsive: [
    //   //   {
    //   //     breakpoint: 480,
    //   //     options: {
    //   //       chart: {
    //   //         width: 200,
    //   //         height:350
    //   //       },
    //   //       legend: {
    //   //         position: "bottom"
    //   //       },
    //   //       xaxis: {
    //   //         categories: [
    //   //           'South Korea',
    //   //           'Canada',
    //   //           'United Kingdom',
    //   //           'Netherlands',
    //   //           'Italy',
                
    //   //         ],
    //   //       },
    //   //     }
    //   //   }
    //   // ]

    //   series: [
    //     {
    //       name: 'basic',
    //       data: [400, 430, 448, 470, 540],
    //     }],
    //     chart: {
    //       width: 380,
    //       height:330,
    //       type: 'line',
    //       toolbar: {
    //         show: false
    //       }
    //     },
    //     labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    //     fill: {
    //       opacity: 5
    //     },
    //     stroke: {
    //       width: 4,
    //       colors: undefined
    //     },
    //     colors:['#673ab7'],
    //     yaxis: {
    //       show: false
    //     },
    //     legend: {
    //       position: 'bottom'
    //     },
    //     plotOptions: {
    //       bar:{
            

    //       },
    //       polarArea: {
    //         rings: {
    //           strokeWidth: 0
    //         }
    //       }
    //     },
       
    // };
  

    
    

// donut


// this.donutchartOptions = {
//   series: [1,2,3,4,5], 
//   chart: {
//       type: 'donut', 
//       height: 350,
//   },
//   labels:['q','s','g','h','k'], 
//   colors: ['#dcd0ff', '#64b5f6', '#673ab7','#0d47a1','#9575cd'], 
//   tooltip: {
//       theme: 'dark',
  
//   },
//   legend: {
//     position: 'bottom',
// },
// };


// pie

// this.piechartOptions = {
//   series:this.pieLabel,
//   chart: {
//       type: 'pie', 
//       height: 350,
//   },
//   labels: this.pieLabel, 
//   colors: ['#90caf9', '#1e88e5', '#673ab7'], 
//   tooltip: {
//       theme: 'dark',
  
//   },
//   legend: {
//     position: 'bottom', 
// },
// };


    // this.chartOptions1 = {
    //   chart: {
    //     type: 'area',
    //     height: 95,
    //     stacked: true,
    //     sparkline: {
    //       enabled: true
    //     }
    //   },
    //   colors: ['#673ab7'],
    //   stroke: {
    //     curve: 'smooth',
    //     width: 1
    //   },

    //   series: [
    //     {
    //       data: [0, 15, 10, 50, 30, 40, 25]
    //     }
    //   ]
    // };
  }

  // Life cycle events
  ngOnInit(): void 
  {
    setTimeout(() => {
      this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
      this.monthChart.render();
    }, 500);

    // for values 
    this.getCustomerCount();// count of customers
    this.getRevenue();// revenue
    this.chartPie(); // count based on location
    this.chartDonut();// count based on plans
    this.chartBar(); // revenue based on months
    this.chartArea();// mode of payment
    this.chartPayLine(); // payment status
    this.chartStatus();
    
  }

  
  
  
  
  
  

  // public Method
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      setTimeout(() => {
        this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
        this.monthChart.render();
      }, 200);
    }

    // if (changeEvent.nextId === 2) {
    //   setTimeout(() => {
    //     this.yearChart = new ApexCharts(document.querySelector('#tab-chart-2'), this.yearOptions);
    //     this.yearChart.render();
    //   }, 200);
    // }
  }

  // ListGroup = [
  //   {
  //     name: 'Bajaj Finery',
  //     profit: '10% Profit',
  //     invest: '$1839.00',
  //     bgColor: 'bg-light-success',
  //     icon: 'ti ti-chevron-up',
  //     color: 'text-success'
  //   },
  //   {
  //     name: 'TTML',
  //     profit: '10% Loss',
  //     invest: '$100.00',
  //     bgColor: 'bg-light-danger',
  //     icon: 'ti ti-chevron-down',
  //     color: 'text-danger'
  //   },
  //   {
  //     name: 'Reliance',
  //     profit: '10% Profit',
  //     invest: '$200.00',
  //     bgColor: 'bg-light-success',
  //     icon: 'ti ti-chevron-up',
  //     color: 'text-success'
  //   },
  //   {
  //     name: 'ATGL',
  //     profit: '10% Loss',
  //     invest: '$189.00',
  //     bgColor: 'bg-light-danger',
  //     icon: 'ti ti-chevron-down',
  //     color: 'text-danger'
  //   },
  //   {
  //     name: 'Stolon',
  //     profit: '10% Profit',
  //     invest: '$210.00',
  //     bgColor: 'bg-light-success',
  //     icon: 'ti ti-chevron-up',
  //     color: 'text-success'
  //   }
  // ];

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

  // yearOptions = {
  //   chart: {
  //     type: 'bar',
  //     height: 90,
  //     sparkline: {
  //       enabled: true
  //     }
  //   },
  //   dataLabels: {
  //     enabled: false
  //   },
  //   colors: ['#FFF'],
  //   stroke: {
  //     curve: 'smooth',
  //     width: 3
  //   },
  //   series: [
  //     {
  //       name: 'series1',
  //       data: [35, 44, 9, 54, 45, 66, 41, 69]
  //     }
  //   ],
  //   yaxis: {
  //     min: 5,
  //     max: 95
  //   },
  //   tooltip: {
  //     theme: 'dark',
  //     fixed: {
  //       enabled: false
  //     },
  //     x: {
  //       show: false
  //     },
  //     y: {
  //       title: {
  //         formatter: function (seriesName) {
  //           return 'Total Earning';
  //         }
  //       }
  //     },
  //     marker: {
  //       show: false
  //     }
  //   }
  // };

  // method declarations 

  // count of customers
  getCustomerCount()
  {
    // this.service.countCust.subscribe(count=>{this.Total=count});
    this.service.countCust().subscribe((count:number)=>{this.Total=count;
      console.log(count)},);
  }

  // revenue
  getRevenue() {
    this.service.getRevenue().subscribe((rev:number)=>{this.Revenue=rev;
    console.log(rev)
    });
  }

  
  // charts 
  //count based on locations
  
  chartPie() 
  {
    console.log("before service");
    this.service.countLocation().subscribe((data: any) => 
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
          type: 'pie',
          height: 350,
        },
        labels: pieLabel,
        colors: ['#90caf9', '#0d47a1', '#673ab7','#dcd0ff'], // Example colors for the pie chart
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
    this.service.countPlans().subscribe((data: any) => 
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
        colors: ['#dcd0ff', '#64b5f6', '#673ab7','#0d47a1','#9575cd'], 
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
    this.service.getMonRev().subscribe((data:any)=>
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
          height: 480,
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
            horizontal: true,
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
    this.service.paymentMode().subscribe((data:any)=>
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
      };
  

    })
  };

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
      // series: [
      //   {
      //     name: 'line',
      //     data: [400, 430, 448, 470, 540],
      //   },
      // ],
      // chart: {
      //   type: "bar"
      // },
      // stroke: {
      //   colors: ["#fff"]
      // },
      // fill: {
      //   opacity: 0.8
      // },
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     options: {
      //       chart: {
      //         width: 200,
      //         height:350
      //       },
      //       legend: {
      //         position: "bottom"
      //       },
      //       xaxis: {
      //         categories: [
      //           'South Korea',
      //           'Canada',
      //           'United Kingdom',
      //           'Netherlands',
      //           'Italy',
                
      //         ],
      //       },
      //     }
      //   }
      // ]

      series: [
        {
          name: 'basic',
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
       
    };
  
    })
  };

  // to get active and inactive customers based on month
  chartStatus() 
  {
    console.log("before status service")
    this.service.customerStatus().subscribe((data:any)=>
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
          // {
          //   name: 'Profit',
          //   data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
          // },
          // {
          //   name: 'neutral',
          //   data: [31, 142, 25, 15, 21, 125, 80, 30, 25, 95, 20, 30]
          // },
          // {
          //   name: 'Maintenance',
          //   data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
          // }
        ],
        
        // dataset
        dataLabels: {
          enabled: false
        },
        //type of chart
        chart: {
          type: 'line',
          height: 480,
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
  }

}
