import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private getPatients = 'https://young-springs-25765.herokuapp.com/healthworker/patient'
  private one = 'https://young-springs-25765.herokuapp.com/healthworker/patient/one?id='
  private diag = 'https://young-springs-25765.herokuapp.com/patient/diagnosis?id='
  private singleDiag = 'https://young-springs-25765.herokuapp.com/patient/singlediagnosis?id='

  constructor(
    private http : HttpClient
  ) { }

  allPatient(){
    return this.http.get(this.getPatients)
  }
  onePatient(id : any){
    this.one = 'https://young-springs-25765.herokuapp.com/healthworker/patient/one?id='
    this.one = this.one + id
    return this.http.get(this.one)
  }

  diagnosis(id : any){
    this.diag = 'https://young-springs-25765.herokuapp.com/patient/diagnosis?id='
    this.diag = this.diag + id
    return this.http.get(this.diag)

  }

  oneDiagnosis(id: any){
    this.singleDiag = 'https://young-springs-25765.herokuapp.com/patient/singlediagnosis?id='
    this.singleDiag = this.singleDiag  + id
    return this.http.get(this.singleDiag)
  }
}
