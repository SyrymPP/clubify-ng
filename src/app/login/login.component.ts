import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login = true
  userInfo = {
    email: '',
    password: '',
    password2: ''
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userInfo)
    if(this.login == true){
      this.userService.login(this.userInfo)
    } else {
      this.userService.register(this.userInfo)
    }
  }
}
