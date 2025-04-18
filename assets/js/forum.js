import { Post } from './post.js';

export const FORUMS = [
    "new_kid",
    "tempest_arrest",
    "beach_villain",
    "power_advice",
]

const openForumIcon = "./assets/images/thread.gif";
const closedForumIcon = "./assets/images/thread_lock.gif"


/**
 * @param {string} title
 * @param {List[Post]} posts
 */
export class Forum {
    constructor(title, posts, locked=false) {
        this.title = title;
        this.posts = posts;
        this.author = posts[0].user;
        this.post_date = posts[0].date_time;
        this.last_post_date = posts[posts.length-1].date_time;
        this.replies_count = posts.length;
        this.locked = locked;
        this.posts = posts;
    }

    render(template, fileName) {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".forum-icon").src = this.locked ? closedForumIcon : openForumIcon;
        clone.querySelector(".forum-topic").href = "pages/forum.html?topic=" + fileName;
        clone.querySelector(".forum-topic").textContent = this.title
        clone.querySelector(".forum-author").textContent = this.author.username;
        clone.querySelector(".forum-replies").textContent = this.replies_count;
        clone.querySelector(".forum-post-date").textContent = this.post_date;
        clone.querySelector(".forum-last-post").textContent = this.last_post_date;
        console.log(clone)
        return clone;
    }
}