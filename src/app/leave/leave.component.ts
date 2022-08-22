import { Component, OnInit } from '@angular/core';
import { Leaves } from '../leaves';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor() {
   
    
   }
   leaves!:Leaves[];
   leaveSelected:any={};
   modifiedtext!:string;

  ngOnInit(): void {
    this.leaves = [
      {id:1,name:'Sick Leave'},
      {id:2,name:'Casual Leave'},
      {id:3,name:'Earned Leave'},
      {id:4,name:'Maternity Leave'},
      {id:5,name:'Paternity Leave'},
      {id:6,name:'Compensation Leave'},
      {id:7,name:'Study Leave'},
      {id:8,name:'Leave Without Pay'},
    ];
    
  }
  onLeaveSelected(leave:Leaves){
    this.leaveSelected = leave.id;
    this.modifiedtext = leave.name;
  }
  


}




