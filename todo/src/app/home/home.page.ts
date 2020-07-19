import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;

  constructor(private router : Router) {}

  moveTodo(): void {
    if((this.username == "Ridmi") && (this.password == "password")){
      console.log("Ok");
      this.router.navigateByUrl('/todo-list');
    }else{
      console.log("Error");
    }
  }

}
