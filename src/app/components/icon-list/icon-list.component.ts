import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
flag=false;

  constructor() { }

  ngOnInit() {
  }
  remind($event:any){
    this.flag=true;
  }
  
}
