import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
import{ Repo } from '../repo';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';


@Injectable()
export class UsernameRequestService {
  private username:string;
  

  constructor(private http:Http) {
    console.log("service is now ready");
    this.username="Kiptim54";
   }
   Username(username) {
    this.username=username;
    console.log("working");
    this.username="";
  } 
  
   getgituser(){
     return this.http.get("https://api.github.com/users/"+this.username+"?access_token="+environment.access_token)
     .map(res=>res.json());
   }
   getgitrepo(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?access_token="+environment.access_token)
    .map(res=>res.json());
  }
  Updateuser(username:string){
    this.username=username;
  }
}
                 
 
  





