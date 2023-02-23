import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  baseUrl="/api/users";

  getUsers=()=>{
    return this.http.get<User[]>(this.baseUrl);
  }
  getUserById=(id:number)=>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  addUser=(user:User)=>{
    return this.http.post<User>(this.baseUrl,user);
  }

  updateUser=(user:User)=>{
    return this.http.put<any>(`${this.baseUrl}/${user.id}`,user);
  }

  deleteUser=(id:number)=>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  constructor(private http:HttpClient) { }
}
