import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.css']
})
export class EditorPanelComponent implements OnInit {
  public clubs = []
  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    this.clubService.getClub()
      .subscribe(data => {
        this.clubs = data
      })
  }

}
