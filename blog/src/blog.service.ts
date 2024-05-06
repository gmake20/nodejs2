
import { Injectable } from "@nestjs/common";
import { PostDto } from "./blog.model";
// import { BlogFileRepository, BlogRepository  } from "./blog.repository";
import { BlogMongoRepository } from "./blog.repository";

@Injectable()
export class BlogService {
    // posts = [];
    // blogRepository: BlogRepository;

    // constructor() {
    //     this.blogRepository = new BlogFileRepository();
    // }
    // constructor(private blogRepository: BlogFileRepository) {}
    constructor(private blogRepository: BlogMongoRepository) {  }

    async getAllPosts() {
        return await this.blogRepository.getAllPost();
        // return this.posts;
    }

    createPost(postDto: PostDto) {
        this.blogRepository.createPost(postDto);
        // const id = this.posts.length + 1;
        // this.posts.push({ id: id.toString(), ...postDto, createdDt: new Date() });
    }

    async getPost(id) : Promise<PostDto> {
        return await this.blogRepository.getPost(id);
        // const post = this.posts.find((post) => {
        //   return post.id === id;
        // });
        // console.log(post);
        // return post;
    }


    delete(id) {
        this.blogRepository.deletePost(id);
        // const filteredPosts = this.posts.filter((post) => post.id !== id);
        // this.posts = [...filteredPosts];
    }

    updatePost(id, postDto: PostDto) {
        this.blogRepository.updatePost(id,postDto);
        // let updateIndex = this.posts.findIndex((post) => post.id === id);
        // const updatePost = { id, ...postDto, updatedDt: new Date() };
        // this.posts[updateIndex] = updatePost;
        // return updatePost;
    }

}