import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  public clubList = []
  public category

  constructor(
              private clubService: ClubService,
              private route: ActivatedRoute,
              private router: Router,
              private categorySerivice: CategoryService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.categorySerivice.getCategories().subscribe(
        data => {
          this.category = data.find(o => encodeURI(o.name) == param.id)
          this.clubService.getClubsByCategory(this.category.id).subscribe(data => {
            this.clubList = data
          })
        }
      )
    })
  }
}
