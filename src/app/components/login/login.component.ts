import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [UserService,HttpClient]
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response)
      },
      (error => {
        console.log(error)
      })
    )
  }
}
