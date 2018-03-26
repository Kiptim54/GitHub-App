import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
import{ Repo } from '../repo';
import { Component, OnInit } from '@angular/core';



@Injectable()
export class UsernameRequestService {
  user:User;
  
  repos;
  
  username:string="Kiptim54";

  constructor(private http:HttpClient) { }
  
  
  

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

  
    
                             
 
  





