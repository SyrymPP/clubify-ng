import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.css']
})
export class EditorPanelComponent implements OnInit {
  public clubs = []
  public selectedMode: boolean = false
  constructor(private clubService: ClubService) { }

  clubInfo = {
    id: 0,
    name: '',
    img: '',
    category2: '',
    desc: '',
    text: '',
    author2: ''
  }

  ngOnInit(): void {
    this.clubService.getClubs()
      .subscribe(data => {
        this.clubs = data
      })
  }

  onSubmit(): void {
    let manager = localStorage.getItem('username')
    this.clubInfo.author2 = manager

    this.clubService.create(this.clubInfo).subscribe()
  }

  onDelete(id) {
    this.clubService.delete(id).subscribe()
  }

  onEdit() {
    let manager = localStorage.getItem('username')
    this.clubInfo.author2 = manager

    this.clubService.edit(this.clubInfo).subscribe()
    console.log(this.clubInfo)

        this.clubInfo.category2 = ''
        this.clubInfo.name = ''
        this.clubInfo.img = ''
        this.clubInfo.text = ''
        this.clubInfo.desc = ''
        this.clubInfo.author2 = ''
    
    this.selectedMode = false
  }

  onChangeMode(id) {
    this.selectedMode = true
    this.clubService.getClub(id).subscribe(
      data => {
        this.clubInfo.category2 = data.category.name
        this.clubInfo.id = data.id
        this.clubInfo.name = data.name
        this.clubInfo.img = data.img
        this.clubInfo.text = data.text
        this.clubInfo.desc = data.desc
        this.clubInfo.author2 = data.author.username
      }
      )
  }
}
