import { Forum } from '../../assets/js/forum.js';
import { Post } from '../../assets/js/post.js';
import { DateTime } from '../../assets/js/datetime.js';


const dt = new DateTime(7, 1, 2002, 12, 13);
const posts = [
  new Post("hsm", dt.offset(0), `Hello everyone, and welcome to the 2002 Worst Power Awards!
From Z-list sidekicks to comedic-relief villains, we've seen a lot of <i>choice</i> powers this year.
I hope that you've all brought your worst candidates! Let's all sit back, eat some popcorn, and scratch our heads at the definition of 'superpower' together!`),
  new Post("hsm", dt.offset(7), `Our first nominee is the infamous, "FloridaMan". Our hero made his debut in March of this year, after uploading a video of himself wrestling a crocodile in the nude. FloridaMan proudly proclaims the ability to dissolve teeth with his saliva - evidenced by the gummy gator in the video, dubbed 'Patrica'. I'm sure that made his first date something to remember! He assured his viewers that his <i>superpower</i> doesn't affect his own teeth, and that the gaps in his smile are just a result of "eatin' right"`),
  new Post("rin", dt.offset(5), `LOL - just watched the video, literally the grossest thing I've ever seen. Are we sure the gator had its teeth to begin with XD`),
  new Post("hsm", dt.offset(0), `He released a follow-up video where he demonstrated it's power, but that video was taken down for a reason. Some things are better left to the imagination...`),
  new Post("rin", dt.offset(1), `I don't think I want to imagine that...`),
  new Post("nav", dt.offset(1), `Amazing - I'd forgtten about that guy lol
Okay, I've got a noimination:`),
  new Post("nav", dt.offset(5), `WindSurfer is a new PP you may have heard of - he discovered his power on accident after stumbling off a NY pier. Poor guy ended up over a mile out to sea in The Sound, trying to stay afloat in a 2 peice buisness suit. He must've been thanking his stars when a passing boat picked him up, but was doubtless wishing they'd let him drown when he realized the boat was owned by <i>The Gotham Gab</i>. That photo of his dripping suit was on those shitty tabloid banner ads for weeks, lol
He only figured out later that his power was to <i>ignore planitary rotation</i> while in the air... not really sure how to use that one 🤣`),
  new Post("hsm", dt.offset(3), `Hahahhaa - definitely a top contender. Sounds like an active detriment more than a 'power', poor guy!`),
  new Post("rin", dt.offset(2), `How do you even fall of a pier... sounds like he wasn't cool even before he got that power 🤣`),
  new Post("czg", dt.offset(23), `Okay, how has BitFlip not been nominated yet? Girl is a walking meme. Has the power to switch out objects of a similar size, but can only do pretty small ones. Her last 'crime' was a bank robbery - just walked right on in, full costume on, and starts grandstanding about how she was going to rob the place. All the PCs started turning off, and obviously people start freaking out and the bank goes into lockdown. Apparently she just gave a little bow to the terrified customers, and ran out. They only figured out later (after an <i>extensive</i> investigation) that she'd just swapped out some of the PC RAM for styrofoam chunks cut into the right shape. She'd only stolon a few hundred bucks worth of parts, at most XD`),
  new Post("rin", dt.offset(3), `Wait, I don't understand, why didn't she just swap out some bills or something?`),
  new Post("czg", dt.offset(2), `That's the thing! She could've cut some paper into 'bill' sizes and stolen the whole register's worth, or just swapped out some security deposit keys,or even taken the PC's disk drives. Hell, she didn't even need to make a scene since her power is remote. But nope, she went in, caused some chaos, scared the bank tellers half to death, and forced the whole bank to shut down for a week while they did tediuous inventory confirmation. Absolute madwoman 🤣`),
  new Post("nav", dt.offset(1), `That whole thing was amazing lol
buttt not sure it's the worst power. If she actually wanted to use it well, she could've done a lot more than just swap out some RAM.`),
  new Post("hsm", dt.offset(2), `Yeah, I think this candidate is more of a 'worst user' than a 'worst power'! Maybe we need a different award for that, haha`),
  new Post("hhb", dt.offset(1), `A girl in my school got a pretty bad power... she was getting bullied for a while, and I guess it was pretty bad. It came to a head when they shoved her in a locker with all this gross shit, like moldy food and trash and stuff. She got the power to control bugs. Well, <i>A</i> bug, to be specific - she can apparently only control one at a time. She used a hornet to sting the bullies who did it, but honestly she just got bullied harder after that, after everyone realized how useless her power was :/
I just feel bad for her.`),
  new Post("hsm", dt.offset(1), `Ooofffff, poor girl :/
disqualified for being too sad!`),
  new Post("bfg", dt.offset(6), `I've got a nomination - Amnesiac has got to have the worst power ever 😆
They're this villain who basically turns everyone around them into Dory - no short term memory. So far so good, right? "That's a pretty useful power!", I hear your say. Hear me out - 
The first time he went out in costume, he did actually succeed in stealing a pretty famous artwork from a museum. The heroes got called in, but Amnesiac's power caught them totally unprepared, and he got away. You can imagine how shocked they were when does the <i>exact</i> same thing the next day - breaks in, sneaks up to where the artwork should be, but gets all surprised when he finds it missing. The heroes showed up again, but he managed to escape. The third day, one of the heroes must've had a hunch about how Amnesiac's power works, because they were waiting for him when he arrived. Obviously they were more prepared this time, and he went down hard. His power apparently has a catch: whenever he uses it, he loses his memory of that whole time period. Must've just gotten the power only a few days before staging this 'first' heist, because it seems like he was unaware of that tinnnyy drawback. I heard it took a lot of explaining afterwards to get him to understand why he was in prison, lol`),
  new Post("rin", dt.offset(2), `10/10. I love that the heroes were so confused too - like, "Wait, didn't we just do this yesterday?"`),
  new Post("nav", dt.offset(1), `XD
How have I not heard of this guy??? Absolutely amazing power - I vote this guy for sure`),
  new Post("bfg", dt.offset(1), `He's a european villain! I heard about him when I was visting some family over there - nearly put me in stitches XD`),
  new Post("hsm", dt.offset(1), `I think we have a winner! Poor guy, from his perspective he never even got to use his power lol`),
];

export const forum = new Forum("Worst Power Awards", posts, false);