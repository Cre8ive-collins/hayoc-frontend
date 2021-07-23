import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../patients.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.css']
})
export class SinglePatientComponent implements OnInit {
  qParams : any
  data : any
  imageSrc = "data:image/jpg;base64,"

  constructor(
    private router: Router,
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

}
