import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  //add a decorator with @Input
  //with this, we are exposing this to the world. So any component hosting our server component element can implement it through selector
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
