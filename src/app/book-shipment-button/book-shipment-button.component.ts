import { Component, OnInit,HostListener, ViewEncapsulation} from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'order-confirmation',
  templateUrl: './book-shipment-button.component.html',
  styleUrls: ['./book-shipment-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderConfirm implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) { 

  }

ngOnInit(){
}




  }