import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public path: string
  constructor(private router: Router, private categorySerivce: CategoryService) { }

  ngOnInit(): void {
    this.categorySerivce.getCategory()
      .subscribe(data => {
        this.path = encodeURI(data[0].name)
        this.router.navigate(['home', this.path])
      })
  }

}
