import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit, DoCheck {

  list = [
    { title: 'baidu', url: 'www.baidu.com', count: 13 },
    { title: '360', url: 'www.360.com', count: 23 },
    { title: 'aliyun', url: 'www.aliyun.com', count: 33 },
    { title: 'dddd', url: 'www.dddd.com', count: 2000 },
    { title: 'wwww', url: 'www.wwww.com', count: 20000 }
  ];

  constructor() { }

  ngDoCheck(): void {
    this.list = this.list.sort((a, b) => {
      return b.count - a.count;
    });
  }

  ngOnInit(): void {
    this.list = this.list.filter(a => {
      return a.count < 200;
    });
    this.list = this.list.sort((a, b) => {
      return b.count - a.count;
    });
  }

  add(item: { count: number; }) {
    item.count++;
    this.list = this.list.sort((a, b) => {
      return b.count - a.count;
    });
  }

}
