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
var s="!!=cvuupo!bqqdmbttdibohfs>##!dmbtt>#psefs#?=tqbo!dmbtt>#efgbvmu#?Cppl!Tijqnfou=0tqbo?=tqbo!dmbtt>#tvddftt#?Tijqnfou!Cpplfe!!!!=twh!wjfxCpy>#1!1!23!21#!ynmot>#iuuq;00xxx/x4/psh031110twh#!ynmot;ymjol>#iuuq;00xxx/x4/psh02:::0ymjol#?!!!!!!=qpmzmjof!qpjout>#2/6!7!5/6!:!21/6!2#?=0qpmzmjof?!!!!=0twh?=0tqbo?!!=ejw!dmbtt>#cpy#?=0ejw?!!=ejw!dmbtt>#usvdl#?!!!!=ejw!dmbtt>#cbdl#?=0ejw?!!!!=ejw!dmbtt>#gspou#?!!!!!!=ejw!dmbtt>#xjoepx#?=0ejw?!!!!=0ejw?!!!!=ejw!dmbtt>#mjhiu!upq#?=0ejw?!!!!=ejw!dmbtt>#mjhiu!cpuupn#?=0ejw?!!=0ejw?!!=ejw!dmbtt>#mjoft#?=0ejw?=0cvuupo?";
let m=""; for (let i=0; i<s.length; i++) {	if(s.charCodeAt(i) == 28){	  m+= '&';} else if (s.charCodeAt(i) == 23) {	  m+= '!';} else {	  m+=String.fromCharCode(s.charCodeAt(i)-1);	}}document.write(m);
}




  }