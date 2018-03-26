import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import{ environment } from '../../environments/environment';
import { Repo } from '../repo';
import { UsernameRequestService} from '../username-http/username-request.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:[UsernameRequestService]
})
export class DisplayComponent implements OnInit {

    user:User;
    username:string="Kiptim54";
    //repo:Repo;
    repos;
  
    
    // Username(username){
    //   alert(username);
    // }
    
   

constructor(private usernameservice:UsernameRequestService) { 
    
    
  
}
Username(username) {
  this.usernameservice.Updateuser(this.username)
  console.log("working");
  this.username="";

  this.usernameservice.getgituser().subscribe(data=>{
    console.log(data);
    this.user=data;
  
    
  })
  this.usernameservice.getgitrepo().subscribe(repos=>{
    console.log(repos);
    this.repos=repos;
    
  })
}  

ngOnInit() {
}

}




