import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private networkService: NetworkService, private authService: AuthService) { }

  ngOnInit() {
  }

  register(registerForm: NgForm) {
    this.networkService.register(registerForm.value).subscribe(
      result => {
        this.router.navigate(['/login']);
      },
      error => {
        alert(error.error.message);
      }
    )
  }

}
