import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories = []
  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryService.getCategory()
      .subscribe(data => {
        this.categories = data.map(item => {
          return {
            name: item.name,
            path: encodeURI(item.name)
          }
        })
      })
  }

}
