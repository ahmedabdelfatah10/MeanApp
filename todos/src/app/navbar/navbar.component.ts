import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  signedIn=false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.signedIn$.subscribe((signedIn)=>{
      this.signedIn=signedIn
    })
  }
  handelSignOut(){
    this.auth.signOut();
  }

}
