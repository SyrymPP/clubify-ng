import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
  public club
  constructor(private clubService: ClubService, private route: ActivatedRoute, private userService: UserService) { }

  public id = this.route.snapshot.paramMap.get('club_name')

  userInfo = {
    name: '',
    phone: '',
    club_id: 0
  }

  ngOnInit(): void {
    this.clubService.getClubs().subscribe(data => {
      let club = data.find(o => o.name == this.id)

      this.clubService.getClub(club.id)
      .subscribe(data => {
        this.club = data

        this.userInfo.club_id = data.id
      })
    })
    
  }

  onSend(): void {
    this.userService.enroll(this.userInfo).subscribe()
  }
}