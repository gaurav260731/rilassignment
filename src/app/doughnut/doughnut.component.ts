import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // // tslint:disable-next-line: member-ordering
    // public doughnutChartLabels: Label[] = ["GRADE 1 to 2", "GRADE 2 to 5", "GRADE 5-10", "GRADE 15-20"];
    // // tslint:disable-next-line: member-ordering
    // public demodoughnutChartData: number[] = [1, 2, 3, 4];
    // // tslint:disable-next-line: member-ordering
    // public doughnutChartType:string = 'doughnut';

    // // events
    // public chartClicked(e:any):void {
    //   console.log(e);
    // }

    // public chartHovered(e:any):void {
    //   console.log(e);
    // }

}
