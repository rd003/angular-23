import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-demo',
  templateUrl: './autocomplete-demo.component.html',
  styleUrls: ['./autocomplete-demo.component.scss']
})
export class AutocompleteDemoComponent implements OnInit {
   fruits= [
    {id:1,name:'apple🍏'},
    {id:2,name:'avacado🥑'},
    {id:3,name:'banana🍌'},
    {id:4,name:'blue berry🫐'},
    {id:5,name:'pineapple🍍'},
    {id:6,name:'peach🍑'},
    {id:7,name:'pomegranate'}
   ]
 isSubmitted=false;
 
 onPost= ()=>this.isSubmitted=true;

  frm!:FormGroup;
  
   ngOnInit(): void {
    this.frm = this.fb.group({
       'selectedFruit':[],
       'description':['']
    })
  }

  constructor(private fb:FormBuilder) {
    
  }



}
