import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface sideNavToggle{
  screenWidth: number;
  collapsed: boolean;

}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth!: number;
  navData = navbarData;
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    
  }

}
 