import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientsService } from 'src/app/patients.service';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
  qParams : any
  data : any

  constructor(
    private route: ActivatedRoute,
    private patient : PatientsService,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((par : any) => {
      this.qParams = par['params'].prop
    });

    this.patient.oneDiagnosis(this.qParams)
    .subscribe(
      (result : any) => {
        this.data = result['result'][0]
        console.log(result['result'])
      },
      (err) => {
        this.toastr.error('Error', 'Api cal failed')
      }
    )
  }

}
