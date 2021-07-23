import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../../patients.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router';



@Component({
  selector: 'app-patientencounter',
  templateUrl: './patientencounter.component.html',
  styleUrls: ['./patientencounter.component.css']
})
export class PatientencounterComponent implements OnInit {
  qParams : any
  data : any
  patientName: any
  patientAge : any
  formData : any


  constructor(
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private patient : PatientsService
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((par : any) => {
      this.qParams = par['params'].prop
    });
    this.patient.onePatient(this.qParams).subscribe((response:any) => {
      this.data = response.result
    }, (err) => {
      this.toastr.error("Error", "Api call error")
    }
    )
  }

  formSubmit(enc : any){
    if(enc.valid){
      // submit to db
      this.formData = enc.value
      this.http.post(' https://young-springs-25765.herokuapp.com//healthworker/patient/patientencounter', this.formData)
      .subscribe((result : any)=> {
        this.router.navigate(['/healthworker'])
        this.toastr.success('Success!', result.message , {
          timeOut: 10000,
        })
      }, (err)=> {
        this.toastr.error('Error!', err.message , {
          timeOut: 10000,
        })
      })

    }else{
      this.toastr.error('Error!', "Fill out all feilds" , {
        timeOut: 5000,
      })
    }
  }



}
