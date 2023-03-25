import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  lists: any = [
    {
      name: "Implement task sorting",
      ip: "28.08.2019,", 
      time: "02:17:33",
      checked: false,
    },
    {
      name: "Finish design for new website",
      ip: "28.08.2019,", 
      time: "02:17:33",
      checked: false,
    },
    {
      name: "Reply to all post today",
      ip: "28.08.2019,", 
      time: "02:17:33",
      checked: false,
    },
    {
      name: "Correct mail sending form",
      ip: "28.08.2019,", 
      time: "02:17:33",
      checked: true,
    },
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
