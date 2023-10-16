
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

  


  // Constructor
  constructor(private service:DatasetServiceService) 
  {
    
    this.chartOptions = {
      // data
      series: [
        {
          name: 'Investment',
          data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
        },
        {
          name: 'Loss',
          data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
        },
        {
          name: 'Profit',
          data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
        },
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
      colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',   'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      grid: {
        strokeDashArray: 4
      },
      tooltip: {
        theme: 'dark'
      }
    };

    // area
    this.areachartOptions = {
      series: [
        {
          name: 'basic',
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      chart: {
        type: 'area',
        height: 350,
      },
      colors: [
        '#d4526e',
        '#13d8aa',
        '#A5978B',
        '#2b908f',
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
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
    };


    // chart 2 
    // to count revenue based on months
    

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
        colors: ['#90caf9', '#1e88e5', '#673ab7'], // Example colors for the pie chart
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
  
          // {
          //   name: 'Investment',
          //   data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
          // },
          // {
          //   name: 'Loss',
          //   data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
          // },
          {
            name: 'revenue',
            data: revenueValues
          },
          // {
          //   name: 'Maintenance',
          //   data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
          // }
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
            horizontal: false,
            columnWidth: '50%'
          }
        },
        xaxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
}
