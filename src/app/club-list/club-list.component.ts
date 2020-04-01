import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  public clubList = []
  constructor(private clubService: ClubService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.clubService.getClub()
        .subscribe(data => {
          this.clubList = data.filter(o => o.category == decodeURI(param.id))
        })
    })
  }

}
