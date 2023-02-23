import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserMockService } from 'src/app/services/user-mock.service';

@Component({
  selector: 'app-in-memory-api-demo',
  templateUrl: './in-memory-api-demo.component.html',
  styleUrls: ['./in-memory-api-demo.component.scss']
})
export class InMemoryApiDemoComponent {

    loadUsers(){
      this.userService.getUsers().subscribe({
        next:(d)=>console.log(d),
        error:(er)=>console.log(er)
      })
    }

    loadUserById(id:number){
      this.userService.getUserById(id).subscribe({
        next:(d)=>console.log(d),
        error:(er)=>console.log(er)
      })
    }

    addUser=()=>{
      // this user going to add in db
      const user:User={id:4,name:'mike',email:'mike@xyz.com'}

      this.userService.addUser(user).subscribe({
        next:(data)=>{
          console.log('added a new user');
          this.loadUsers();
        },
        error:(er)=>console.log(er)
      })
    }

    updateUser=(id:number)=>{
      const user:User={id:id,name:'jane 11',email:'jane11@yahoo.com'}
      this.userService.addUser(user).subscribe({
        next:(data)=>{
          console.log('update user with id '+id);
          this.loadUsers();
        },
        error:(er)=>console.log(er)
      })
    }

    deleteUser=(id:number)=>{
      this.userService.deleteUser(id).subscribe({
        next:(data)=>{
          console.log('deleted user with id '+id);
          this.loadUsers();
        },
        error:(er)=>console.log(er)
      })
    }

  constructor(private userService:UserMockService){
    //this.loadUserById(2);
    this.loadUsers();
    //this.addUser();
   //this.updateUser(2);
   this.deleteUser(2);
  }
}
