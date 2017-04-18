import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any = [];

  // constructor(private postsService: PostsService) { }
  //
  // ngOnInit() {
  //   this.postsService.getAllPosts()
  //     .subscribe(posts => {
  //       this.posts = posts;
  //     });
  // }

}
