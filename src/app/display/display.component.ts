import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../user';
import{ environment } from '../../environments/environment';
import { Repo } from '../repo';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    user:User;
    gitusername:string="Kiptim54";
    repo:Repo;
    repos;
    
    
    
  constructor(private http:HttpClient) { }

  ngOnInit() {
  interface ApiResponse1 {
    login:any;
    avatar_url:any;
    repos_url:any;
    html_url:any;
  }  
  interface ApiResponse2{
  data:any;

  } 
    this.http.get<ApiResponse2>("https://api.github.com/users/" +this.gitusername+"/repos?access_token="+environment.access_token).subscribe(data=>{
     this.repos = data;
        // this.repo=new Repo(data);
      
    })
  
    
                             
  this.http.get<ApiResponse1>("https://api.github.com/users/"+this.gitusername+"?access_token="+environment.access_token).subscribe(data=>{
      this.user= new User(data.login, data.avatar_url, data.repos_url, data.html_url)
    })
  }

}
