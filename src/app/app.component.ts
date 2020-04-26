import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'clubify';

  public in: boolean = false

  ngOnInit() {
    let auth = localStorage.getItem('token')
    if(auth != null) {
      this.in = true
    }
  }

  onLogout() {
    localStorage.clear()
    this.in = false
  }
}
