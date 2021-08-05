import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

// https://live-posts-42ca6-default-rtdb.firebaseio.com/

@Injectable({ providedIn: 'root' })
export class BackEndService {
    constructor(private postService: PostService, private http: HttpClient) {}
    // save and fetch functions should be here, the back end services conects the post service with backend
    saveData(){
        // shoould first get list of post from post.service, then send list of post to back end
        const listOfPosts: Post[] = this.postService.getPosts();
        this.http.put('https://live-posts-42ca6-default-rtdb.firebaseio.com/', 
        listOfPosts )
        .subscribe((res) => {
            console.log(res)
        })

    }
}