import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root' })
export class PostService{
    listOfPosts: Post[] = [
        new Post(
          'Nature',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg',
          'Dimi',
          new Date(),
          5
        ),
        new Post(
          'Desert',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'https://api.timeforkids.com/wp-content/uploads/2017/08/170227012793_hero.jpg?w=1024',
          'Dimi',
          new Date(),
          2
        ),
        new Post(
          'Mining',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          'https://perfilindustrial.com/wp-content/uploads/2020/02/miner%C3%ADa-subterranea.jpg',
          'Dimi',
          new Date(),
          3
        ),
      ];
      getPosts(){
          return this.listOfPosts
      }
      deletePost(index: number){
          this.listOfPosts.splice(index, 1)
      }
      addPost(post: Post){
          this.listOfPosts.push(post);
      }
      updatePost(index: number, post: Post){
        this.listOfPosts[index] = post
      }
      getPost(index: number){
        return this.listOfPosts[index]
      }
}