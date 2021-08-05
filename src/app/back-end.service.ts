import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import {tap} from "rxjs/operators";

// https://live-posts-42ca6-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackEndService {
    constructor(private postService: PostService, private http: HttpClient) {}
    // save and fetch functions should be here, the back end services conects the post service with backend
    saveData(){
        // shoould first get list of post from post.service, then send list of post to back end
        const listOfPosts: Post[] = this.postService.getPosts();
        this.http.put('https://live-posts-42ca6-default-rtdb.firebaseio.com/posts.json', 
        listOfPosts )
        .subscribe((res) => {
            console.log(res)
        })

    }

    fetchData(){
        this.http
        .get<Post[]>('https://live-posts-42ca6-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            tap((listOfPosts: Post[]) =>{
                console.log(listOfPosts);
                this.postService.setPosts(listOfPosts);
            })
        )
        .subscribe()
    }
}