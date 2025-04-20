/**
 * @param {string} username
 * @param {string} icon
 */
export class User {
    constructor(username) {
      this.username = username;
      const icon_name = username.replace(/\[.*?\]/g, '').replace(/\s+/g, ' ').trim();
      if (icon_name == "" || icon_name.includes("Guest")) {
        this.icon = "../assets/user_icons/default.png";
      }
      else {
        this.icon = "../assets/user_icons/" + icon_name + ".png";
      }
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
    "del": new User("[Deleted]"),
    "af1": new User("AdaptorFanboy1"),
    "af2": new User("AdaptorFanboy2"),
    "af3": new User("AdaptorFanboy3"),
    "af4": new User("AdaptorFanboy4"),
    "ham": new User("HappyHamster"),
    "btf": new User("[Moderator] BornToFly"),
    "sci": new User("StratusCiri"),
    "tg1": new User("TheOriginalGamer1"),
    "nst": new User("[Verified Sidekick] NorthStar"),
    "583": new User("Guest583"),
    "xmx": new User("xXMagicallySamXx"),
    "bfg": new User("BFEG"),
    "sus": new User("SuperScissors"),
    "hsw": new User("HyperSonicWrench"),
    "hwk": new User("HenchmenRKewl"),
    "tkm": new User("TinkerMind"),
}