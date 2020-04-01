import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories = []
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(data => {
        this.categories = data.map(item => {
          return {
            name: item.name,
            path: encodeURI(item.name)
          }
        })
        this.router.navigate([this.categories[0].path])
      })
  }

}
