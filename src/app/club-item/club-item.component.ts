import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-club-item',
  templateUrl: './club-item.component.html',
  styleUrls: ['./club-item.component.css']
})
export class ClubItemComponent implements OnInit {
  @Input() club
  constructor() { }

  ngOnInit(): void {
  }

}
