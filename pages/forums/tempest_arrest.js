import { Forum } from '../../assets/js/forum.js';
import { Post } from '../../assets/js/post.js';

const posts = [
  new Post("tyn", "08/23/02 11:28 AM", `"The villain know as Green Tempest was arrested alongside several non-powered individuals on Monday morning after an anonymous tip to police. Tempest was known for his stunning escapades and ..."
Read the full story here: <u>Notorious Crime Ring Leader Arrested</u>`),
  new Post("tem", "08/23/02 11:28 AM", `Aww nooo!!... Anyone know where they brought him? Visiting hours!? Or even a fanmail address 🥺`),
  new Post("wau", "08/23/02 11:45 AM", `No, he's probably locked up tight. Did some pretty bad stuff and not to mention his power. Abilities that can deal with that are pretty rarecan't even imagine how they caught him in the first place.`),
  new Post("tem", "08/23/02 11:45 AM", `😭😭😭 going to drop my letter at the police station then 💔. Hope he gets it 💞`),
  new Post("nav", "08/23/02 11:49 AM", `He wasn't that bad really. He was all about the show - never so much as pushed someone to the ground during a heist. Remember the last time he hit the news? He already had the bag of cash but rewound two more times to let someone console their child (and cuz they started crying in the middle of his monologue LOL). Maybe a third time to fix his hair or something for that viral cell phone vid.`),
  new Post("xcx", "08/23/02 11:50 AM", `fr tho how did he get caught?? he was sposed to be like suuupperr un catchable i thought! i bet i coulda easily got him when I get my powers but no way those posers could have!`),
  new Post("skm", "08/23/02 11:58 AM", `Did anyone actually read the article? It sounds like the cops just sort of... picked him up? Maybe he turned himself in for headlines and pre-planned a prison break for some quick fame? I'm confused because usually they'll say who it was when a cape turns in a villain.`),
  new Post("del", "08/23/02 12:14 PM", `No, not a pig cape or UC - corpo I'm pretty sure. Usual MO is cops keep mum for certain teams. Didn't recognize this guy so it fits the bill. Sonuva had some sort ranged grabby . One minute we was meeting up about some business and the next people get straight up thrown to the ground or tossed at each other. Temp got stuck to a lamp post and musta got pretty unlucky cuz he couldn't rewind out of it.`),
  new Post("xcx", "08/23/02 12:17 PM", `damnnn, bro got rekt with the power interactions 💀`),
  new Post("del", "08/23/02 12:18 PM", `Yeah, and then I started runnin but all of a sudden it felt like getting grabbed by the collar, except like, all over, and I got flung back. He stood over me like he was tryna read something written on the sidewalk, 'cept I couldn't see through the eyeholes on his mask. Then he kneels down next to me, reaches inside the pinstripe suit he was wearin, and hands me a business card. Told me and the gang to stay outta midtown, and bother the address on the card if I felt like it. Then he phones in the cops and I made sure to scram before they show up.`),
  new Post("nav", "08/23/02 12:20 PM", `Wait, are you admitting to working with a supervillan? You know they check this site sometimes, right? `),
  new Post("wau", "08/23/02 12:31 PM", `Not often but we can use it to track info down in some cases. Thanks for the tip <u>@NotAVillain!</u>`),
];

export const forum = new Forum("Green Tempest Arrested", posts);