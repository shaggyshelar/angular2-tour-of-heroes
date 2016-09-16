import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Tour of Heroes';
  ngOnInit(): void {
    // App.init();
    // Layout.init();
    // Demo.init();
  }
}
