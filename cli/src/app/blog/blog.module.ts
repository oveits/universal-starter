import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'

@Component({
  selector: 'blog-view',
  template: `<h3>i'm a blog</h3>`
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