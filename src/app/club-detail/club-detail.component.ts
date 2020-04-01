import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
  public club
  constructor(private clubService: ClubService, private route: ActivatedRoute) { }
  public id = this.route.snapshot.paramMap.get('club_name')
  ngOnInit(): void {
    this.clubService.getClub()
      .subscribe(data => {
        this.club = data.find(o => o.name == this.id )
      })
  }

}
