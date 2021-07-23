import { Component, OnInit, EventEmitter } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http'
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';



@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  getPicture = new EventEmitter<WebcamImage>();
  captureImage : boolean = false;
  ward : string = '';
  state : string = '';
  lga : string = '';
  weight : number = 0;
  height : number = 0;
  bmi : number = 0;
  faGt = faGreaterThan;
  showWebcam : boolean = false;
  private trigger: Subject<void> = new Subject<void>();
  showImage : any= null;
  captured : boolean = false;
  imgFileName : string = '';



  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
    this.captureImage = false
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.captured = !this.captured
    this.imgFileName = webcamImage.imageAsBase64
    this.showImage = '<img class="img-fluid "src="'+webcamImage.imageAsDataUrl+'"></div>'
  }
  updateForm(arg : Event){
    this.bmi = (this.weight / this.height)
    this.ward = this.lga + this.state

  }


  takePicture(){
    this.showWebcam = !this.showWebcam;
    this.captureImage = !this.captureImage
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  done(data : any){
    data.image = this.imgFileName
    this.http.post('http://localhost:3000/healthworker/patient', data)
    .subscribe((result : any)=> {
      this.router.navigate(['/healthworker'])
      this.toastr.success('Success!', result.message , {
        timeOut: 10000,
      })
    }, (err)=> {
      console.log(err)
      this.toastr.error('Error!', err.message , {
        timeOut: 10000,
      })
    })

  }

}
