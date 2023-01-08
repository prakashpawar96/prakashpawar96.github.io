import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  body: string;
  posts: any[];
  NgForm:any;
  showForm:boolean=false;
  postData: any;
  getData:boolean=false;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => this.posts = posts);
  }

 onSubmit(form: NgForm) {

  console.log(form.value);
  const post = {
    title: this.title,
    body: this.body
  };

  this.http.post('https://jsonplaceholder.typicode.com/posts', post).subscribe(response => {
    this.postData=response;
    this.getData=true;
  });
}
  
}