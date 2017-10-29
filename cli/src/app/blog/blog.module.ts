// src/app/blog/blog.module.ts
import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
  selector: 'blog-view',
  templateUrl: './blog.component.html'
})
export class BlogComponent {}

@NgModule({
  declarations: [BlogComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: BlogComponent, pathMatch: 'full'}
    ])
  ]
})
export class BlogModule {

}
