import { Post } from './post.js?v=1.8';

export const FORUMS = [
    "tempest_arrest",
    "fight_analysis",
    "worst_powers",
    "power_advice",
    "beach_villain",
    "new_kid",
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
        this.post_date = posts[0].datetime;
        this.last_post_date = posts[posts.length-1].datetime;
        this.replies_count = posts.length;
        this.locked = locked;
        this.posts = posts;
    }

    render(template, fileName) {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".forum-icon").src = this.locked ? closedForumIcon : openForumIcon;
        clone.querySelector(".forum-topic").href = "pages/forum.html?v=1.8&topic=" + fileName;
        clone.querySelector(".forum-topic").textContent = this.title
        clone.querySelector(".forum-author").textContent = this.author.username;
        clone.querySelector(".forum-replies").textContent = this.replies_count;
        clone.querySelector(".forum-post-date").textContent = this.post_date;
        clone.querySelector(".forum-last-post").textContent = this.last_post_date;
        return clone;
    }
}