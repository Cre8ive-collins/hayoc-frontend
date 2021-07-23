import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  faCaret = faCaretDown

  constructor() { }


  ngOnInit(): void {
  }

}
