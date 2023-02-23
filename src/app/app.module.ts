import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxInfiniteScrollComponent } from './components/ngx-infinite-scroll/ngx-infinite-scroll.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteDemoComponent } from './components/autocomplete-demo/autocomplete-demo.component';
import { MockData } from './mock-data';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiDemoComponent } from './components/in-memory-api-demo/in-memory-api-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxInfiniteScrollComponent,
    AutocompleteDemoComponent,
    InMemoryApiDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockData,{delay:500})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
