import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { Subscription, tap } from 'rxjs';
import { UsersService } from '../../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user!: User;
  @Output() getuser = new EventEmitter<User>();
  constructor(private userSrv: UsersService, public card:MatCardModule) { }

  ngOnInit(): void {
    this.getUser;
    }
    getUser():void{
      this.userSrv.getOneuser(this.user);
      this.getuser.emit(this.user)
    }
  }
