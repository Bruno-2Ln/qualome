import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name: string;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.name = this.userService.name;
  }

}
