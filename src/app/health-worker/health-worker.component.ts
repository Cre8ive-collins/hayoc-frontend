import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { PatientsService } from '../patients.service';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-health-worker',
  templateUrl: './health-worker.component.html',
  styleUrls: ['./health-worker.component.css']
})
export class HealthWorkerComponent implements OnInit {

  allPatient : any = []

  public barChartOptions = {
    scaleShowVerticalLines : false,
    responsive : true
  }

  public barChartLabels = ['Gender', 'Age']
  public barChartType  : ChartType = 'pie'
  public barChartLegend = true

  public barChartData = [
    {data: [10, 20, 30, 40], label: 'Female'},
    {data: [10, 20, 30, 40], label: 'Male'}
  ]

  constructor(
    private toastr: ToastrService,
    private getPatiants : PatientsService
  ) {

   }

  ngOnInit(): void {
    this.getPatiants.allPatient().subscribe((response:any) => {
      this.allPatient = response.result
      console.log(this.allPatient)
    }, (err) => {

    }
    )
  }

}
