// src/app/blog/blog.module.ts
import {NgModule, Component, OnInit} from '@angular/core'
import {RouterModule} from '@angular/router'
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blog-view',
  templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit {

  title : String = "Loading..."
  content : String = "Loading..."

  constructor(private _http: Http) {}

  ngOnInit() {
     this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078')
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.title = data.title;
                        this.content = data.content;
                        console.log(data);
                });
  }
  
}

//import { HttpModule }    from '@angular/http'; // moved to src/app/app.module.ts

@NgModule({
  declarations: [BlogComponent],
  imports: [
    //HttpModule, // moved to src/app/app.module.ts
    RouterModule.forChild([
      { path: '', component: BlogComponent, pathMatch: 'full'}
    ])
  ]
})
export class BlogModule {

}
