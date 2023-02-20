import { Component, OnInit } from '@angular/core';
import { PaginationDummyService } from 'src/app/services/pagination-dummy.service';

@Component({
  selector: 'app-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.scss']
})
export class NgxInfiniteScrollComponent implements OnInit {
items:string[]=[];
   isLoading=false;
   currentPage=1;
   itemsPerPage=10;

   toggleLoading = ()=>this.isLoading=!this.isLoading;

   // it will be called when this component gets initialized.
   loadData= ()=>{
     this.toggleLoading();
     this.paginationService.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next:response=>this.items = response,
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
     })
   }

  ngOnInit(): void {
    this.loadData();
  }
  
// this method will be called on scrolling the page
appendData= ()=>{
  this.toggleLoading();
  this.paginationService.getItems(this.currentPage,this.itemsPerPage).subscribe({
   next:response=>this.items = [...this.items,...response],
   error:err=>console.log(err),
   complete:()=>this.toggleLoading()
  })
}

 onScroll= ()=>{
  this.currentPage++;
  this.appendData();
 }

 
  constructor(private paginationService:PaginationDummyService) {
   
    
  }
 
}
