import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr : ToastrService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  // h
  formSubmit(data: any){
    if(data.valid){
      // submit to db
      this.http.post('https://young-springs-25765.herokuapp.com/patient/login', data.value)
      .subscribe((response : any) => {
        localStorage.setItem("token", response.token)
        this.router.navigate(['/patient/dashboard'] , { queryParams: { 'prop': response.id  } })
        this.toastr.success('Success', response.message)
      }, (err) => {
        console.log(err)
        this.toastr.error('Error!', err.error , {
          timeOut: 5000,
        })
      }
      )


    }else{
      this.toastr.error('Error!', "Fill out all feilds" , {
        timeOut: 5000,
      })
    }
  }
  }

