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


  constructor(private http:HttpClient) { }
  ngOnInit(){}
    user:User;
    username:string="Kiptim54";
    //repo:Repo;
    repos;
  
    
    // Username(username){
    //   alert(username);
    // }
    
    Username(username) {
      this.username=username;
      console.log("working");
      this.username="";
      
      
    interface ApiResponse1 {
      login:any;
      avatar_url:any;
      repos_url:any;
      html_url:any;
    }  
    interface ApiResponse2{
    data:any;
  
    } 
      this.http.get<ApiResponse1>("https://api.github.com/users/" + username +"/repos?access_token="+environment.access_token).toPromise().then(data=>{
          
        this.repos = data;
  
          
      }
      )
  
  this.http.get<ApiResponse1>("https://api.github.com/users/"+username+"?access_token="+environment.access_token).subscribe(data=>{
    this.user= new User(data.login, data.avatar_url, data.repos_url, data.html_url)
  })
  
  
  }
   
  }   
 // constructor(private usernameService:UsernameRequestService) {
 //   this.usernameService.Username(username)
   // this.username=this.usernameService.username
      
 //  }
 // ngOnInit(){
 //   this.usernameService.Username(username)
   // this.username=this.usernameService.username
 // }



//}
