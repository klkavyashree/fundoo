import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../service/dataservice/data.service'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
  @Output() messageEvent=new EventEmitter();
  flag=false;
  card:any;
  /**
   * taking the colors as two dimensional array
   */
  colorArray=[[{ 'color': '#FFFFFF', 'name': 'White' },
{ 'color': '#E53935', 'name': 'Red' },
{ 'color': '#EF6C00', 'name': 'Orange' },
{ 'color': '#FFEB3B', 'name': 'Yellow' }],

[{ 'color': '#B2FF59', 'name': 'green' },
{ 'color': '#69F0AE', 'name': 'teal' },
{ 'color': '#81D4FA', 'name': 'blue' },
{ 'color': '#0288D1', 'name': 'darkblue' }],

[{ 'color': '#B39DDB', 'name': 'purple' },
{ 'color': '#F48FB1', 'name': 'pink' },
{ 'color': '#FFAB40', 'name': 'brown' },
{ 'color': '#E0E0E0', 'name': 'gray' }

]]
  constructor(private data:DataService) { }

  ngOnInit() {
   
  }
  /**
   * 
   * @param color will take input from the template to emit the event
   */
 colorsEdit(color){
   this.messageEvent.emit(color);
 }


}
