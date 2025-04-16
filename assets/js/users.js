/**
 * @param {string} username
 * @param {string} icon
 */
export class User {
    constructor(username) {
      this.username = username;
      this.icon = "../assets/user_icons/" + username + ".png";
    }
  
    renderUsername() {
      return this.username;
    }
}

export const USERS = {
    "wbc": new User("WannabeCape69"),
    "nav": new User("NotAVillain"),
    "cf2": new User("CapeFan2000"),
    "tyn": new User("TachyoNews"),
    "tem": new User("❤Tempestress💖"),
    "wau": new User("Waurdian"),
    "xcx": new User("xxTheCapeMan123xx"),
    "skm": new User("SidekickMaterial23"),
    "dv1": new User("[Deleted]"),
    "af1": new User("AdaptorFanboy1"),
    "af2": new User("AdaptorFanboy2"),
    "af3": new User("AdaptorFanboy3"),
    "af4": new User("AdaptorFanboy4"),
}