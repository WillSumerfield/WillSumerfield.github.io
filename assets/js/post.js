import { User, USERS } from './users.js';
import { DateTime} from './datetime.js'

/**
 * @param {User} user
 * @param {DateTime} date_time
 * @param {string} content
 */
export class Post {
    constructor(user, date_time, content) {
      this.user = USERS[user];
      this.date_time = date_time;
      this.content = content;
    }
  
    render(template) {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".username").textContent = this.user.username;
      clone.querySelector(".date_time_text").textContent = this.date_time.toString();
      clone.querySelector(".user_icon").src = this.user.icon;
      clone.querySelector(".content").innerHTML = this.content;
      return clone;
    }
  }