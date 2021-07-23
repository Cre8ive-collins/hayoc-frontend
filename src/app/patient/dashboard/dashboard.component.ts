import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../patients.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any
  imageSrc : string = "data:image/jpg;base64,"
  qParams : any
  checkDiagnosis : boolean = false
  diagnosisDate : any


  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private patient : PatientsService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((par : any) => {
      this.qParams = par['params'].prop
    });
    this.patient.onePatient(this.qParams).subscribe((response:any) => {
      this.data = response.result[0]
      this.imageSrc = this.imageSrc + this.data.image
    }, (err) => {
      this.toastr.error('Error', "Api call fail" , {
        timeOut: 10000,
      })
    }
    )
  }

  diagnosis(id : any){
    console.log(id)
    this.patient.diagnosis(id).subscribe(
      (result : any)  => {
        this.checkDiagnosis = true
        this.diagnosisDate = result['result']
        console.log(result['result'])
      }, (err) => {
        this.toastr.info("No data found", "Empty")
      }
    )
  }

}
