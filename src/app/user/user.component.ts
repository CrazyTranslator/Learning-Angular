import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';
  userNameResult = '';

  constructor() { }

  ngOnInit(): void {
  }

  DisplayUserName(){
    this.userNameResult = "your username is: " + this.userName;
  }
  ResetUserName(){
    this.userNameResult = '';
  }
}
