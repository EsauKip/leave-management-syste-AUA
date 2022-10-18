import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
text1="15";
type1="Annual Leave";
text2="10";
type2="Used Leaves";
text3="5";
type3="Remainig Leaves";
text4="0";
type4="Denied Leaves";
  constructor() { }

  ngOnInit(): void {
  }

}
