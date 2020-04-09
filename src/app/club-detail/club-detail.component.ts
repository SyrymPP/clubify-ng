import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { userInfo } from 'os';

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
    phone: ''
  }

  ngOnInit(): void {
    this.clubService.getClub()
      .subscribe(data => {
        this.club = data.find(o => o.name == this.id )
      })
  }

  onSend(): void {
    console.log(this.userInfo)
    this.userService.enroll(this.userInfo)
  }
}