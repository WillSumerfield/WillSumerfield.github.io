import { Forum } from '../../assets/js/forum.js';
import { Post } from '../../assets/js/post.js';
import { DateTime } from '../../assets/js/datetime.js';


const dt = new DateTime(6, 1, 2002, 22, 23);
const posts = [
  new Post("ham", dt.offset(0), `Hey, did anyone else see what just happened down at the waterfront? I guess I just want to make sure that really happened.`),
  new Post("btf", dt.offset(2), `Is this in relation to capes? Please remember that this forum is for cape discussion only, and non-cape posts will be removed.`),
  new Post("ham", dt.offset(1), `Sorry, yes. There was some villain activity there this evening, and it was sorta messed up. Kinda need someone to talk to about it :/`),
  new Post("sci", dt.offset(3), `Bad mod >:/`),
  new Post("sci", dt.offset(0), `Wasn't there, sorry to hear that Hamster, but happy to chat if you want <3`),
  new Post("ham", dt.offset(2), `Thanks Ciri <3
That would be nice. I guess I'll just start beginning?`),
  new Post("sci", dt.offset(0), `That's the best place to start!`),
  new Post("ham", dt.offset(2), `Okay, so basically my family and I live pretty near the boardwalk, and we decided to hang out at the beach after school since it was so hot today. We clearly weren't the only ones with that idea, because the beach was pretty packed. My sister was being obnoxious, so I decided to swim while the family were sunbathing.`),
  new Post("ham", dt.offset(2), `I was in kind of a bad mood, and I didn't really feel like swimming. Just ended up standing in the water at shoulder-height. There were lots of people swimming further out, so I was just kinda watching them swim, and thinkin. Idk. Maybe that's weird. I was zoning out, and I didn't really notice when the normal beach play-shouting turned into screams.`),
  new Post("sci", dt.offset(1), `Wait, what, was someoene attacked? Are you okay??`),
  new Post("ham", dt.offset(2), `Yea, I'm okay now. I was in the shallower water, so I had more time to get to shore. I was sorta just confused until I heard someone yell, "Shark!", and saw everyone swimming towards the shore. I couldn't see anything wrong, but obviously I started booking it. Butttt moving through water is one of those things that you always underestimate. I can swim pretty well, but I guess I panicked and thought that wading would be faster. It wasn't. It felt like when you get 'stuck' during a dream - it feels like you're 10x weaker when you're walking in water that deep. It was honestly the scariest moment of my life because I kept hearing people scream, and I just couldn't go fast no matter how hard I tried. I was terrified that I'd be the last person to get to shore - that the shark would get me. I shouldn't have worried, though. I was one of the first on shore.`),
  new Post("ham", dt.offset(5), `Mom and Dad ran up to me looking so relieved, but my sister had this look I hadn't seen on her before, and started pointing out at the water. I had time to turn and see the man running through waste high water holding a stump of an arm, and to see the the monster (villain, I guess), pounce and pin him underwater. We were all running after that. Whatever that thing was, it wasn't a shark. And it had legs, too. Walked right up onto the shore and started chasing people. It was so damn fast, but it was headed the opposite way from us, towards a larger group. I was so thankful for that. Still am I guess, but I can't stop thinking how slow I was to get out of the water. Like I deserved what happened more than them. It doesn't really make sense when I write it out.`),
  new Post("sci", dt.offset(4), `Oh my god...
No crap that's the scariest thing you've ever seen, I've had died of fright right there! (I can't swim, I can't imagine how long that would've taken me...) 
And it's not your fault - no way you deserved any of that.

What happened to the villain?? Is the beach safe?`),
  new Post("ham", dt.offset(3), `Sorry to trauma dump on you, I just realized that's kinda a lot to put on someone...
The family are all downstairs watching a movie, but I was too nervous to sit still. Figured maybe someone else who saw it would be here? IDK. I figure most of the victims just want to forget, sorta stupid to think anyone else would be here.

Yea, the beach is safe, a hero arrived eventually. It took so long, though. At one point I just sorta realized, and said "We need a hero", and it felt like I'd solved the problem, you know? Like I'd figured out how to fix it. But the screaming just kept going. We were sheltered up on the boardwalk by this point, so we were far away, but I could still hear it. Dad said that a hero was coming any minute. I guess he was right, but I think it must have been at least 10. Longer than it felt like this sorta thing should take. Anyways, my family and a few others all peered out the window of the ice-cream shop we were sheltered in, and saw this guy running full-pelt down the sidewalk, near the monster. It didn't look very heroic at all, but he was clearly in costume. I didn't recognize him, but dad said he was "NorthStar". Then, once the guy is right above where the monster was, we saw him pull up his arm like he was looking at his watch, which Dad told me that must be his compass.`),
  new Post("sci", dt.offset(1), `No way, I think it's normal to wanna talk about something like this. I couldn't just watch a movie either!

So he beat the monster? What's his power again? Doesn’t NorthStar have to look at someone or something?`),
  new Post("ham", dt.offset(2), `Thanks Ciri

Dad said he had to touch someone to make the power work.`),
  new Post("sci", dt.offset(2), "Ohhh right, that rings a bell. Wasn't the villain pretty big, though? How'd he get close enough to touch it?"),
  new Post("ham", dt.offset(5), `He was clever about it, I guess. I'd always imagined heros as rushing into danger, but NorthStar sorta crept up on the monster. It was so loud, I'm not surprised the monster couldn't hear him. It had backed a family into some bushes, and I think it was tearing into one of them on the ground. Mom kept telling me not to look, but I couldn’t just stop, you know? NorthStar just sorta crept up, touched the thing on one of its tails, and literally rolled backwards. It was almost funny. Anyways, apparently once he does that, that person can only move north for a while. Dad says it has something to do with magnets. It definitely worked, because the monster sorta snapped to the right, like a big invisible hand just reached down and turned it like a dial. It didn't roar. More like a burp - a big, guttural explosion of sound. It was so loud it hurt my ears a bit. It looked like it hurt NorthStar, becuase he covered his ears with his hands. The people near the bushes sorta scooted off to the side, away from the mosnter - NorthStar was yelling something and pointing at the ramp back the sidewalk. The thing was trying to turn its head around to see NorthStar, but it couldn't seem to rotate its body. When it tried, it lost its footing and sorta fell forward. Even for a monster, its movements became no unnatural looking. Everytime it would try to turn towards him, it would end up further North. NorthStar was watching it from a distance, in a pose like he was ready to run at any time. You know how you have to walk down a pathway to get onto the beach? Well the monster was facing the 'cliff' face, and that thing definitely wasn't built for climbing. It was so top heavy. We kinda thought it was over at that point. The monster had sorta pushed itself into the cliff, so that it didn't seem like it could even turn its head any more.`),
  new Post("ham", dt.offset(2), `We thought it was over - the beach was empty except for those two at this point. We were wondering if it was time to stop sheltering, but Mom said the official policy was to wait for police to arrive in case there were more. Seems like running away would be safer to me. But we heard another one of those burp noises, and when we looked back out the window the thing was shaking back and forth, a bit like a dog shaking off water. It made one last big shake to the right, swinging it's tail all the way to the left, and when spun back the other way, the big tail swooshing back to the right. This seemed to break it free, for a moment, because it was facing the ocean. As it spun, NorthStar lunged forward, hand outstretched. The good news is that he did manage to touch it. The bad news is that what he touched was one of the tails (which was bigger than he was), swinging at full speed. The guy went flying, and landed about 20 feet away in the sand near the water. The monster snapped back like it was on a spring though, face pushed into the cliffside more than ever. Northstar seemed to prop himself up on his side, so we knew he was awake, but he stayed down. That's when the cops came through the door, so I didn't get to see anymore. Dad said more heroes would arrive soon, though, and that we shouldn't worry about NorthStar.
I hope he's right.`),
  new Post("sci", dt.offset(1), `That's a crazyyy fight, wow!! So he won without like, any violence? I wish I coulda seen it.
I'm sure NorthStar is fine, heroes are trained to take a hit! 
Glad you and your family are safe and sound - that's the thing to remember <3`),
  new Post("tg1", dt.offset(0), `Jeez, why was that guy so late though? Seems like heroes should either run faster or use a car. Wonder how many people died because he skipped leg day.
Also, isn't NorthStar only a sidekick lol`),
  new Post("nst", dt.offset(9), `Hey <u>@HappyHamster</u>, 
I'm glad to hear you and your family are safe. It's the best part of my job to hear from the people who I can help, especially on the tough days where not everyone makes it out okay. It sounds like you and your family did everything right - sheltering in place can often be the safest thing to do when the situation is full of unknowns, like this one. You've been through an ordeal more scary than most adults have, and you should know there's no shame in reaching out to your school or parents if you feel like therapy could be useful.

This villain is a new one, and we've successfully taken them into custody. The beach will be off limits for a few days at least while the events are investigated, but we suspect they were working alone. We have given them the provisional designation of "Lurker", but more information will be made public soon. Special thanks are due to <u>@SilverSliver</u> for the capture, I couldn't have held the villain forever without her assist in decapacitating and containing it. 

I'm doing just fine, and I'll be back on patrols very soon! The doctors have informed me that I've got a few cracked ribs, but time heals all wounds. 

Stay safe, and keep wishing on the north star for me!`),
  new Post("tg1", dt.offset(1), `What, no excuse for your tardiness? "Oh yea, some people died. Go get counseling.” So pathetic. I'd make a hell of a better hero than that. Maybe I'd start with BUYING A BIKE. 
Also what a shitty power lol`),
  new Post("btf", dt.offset(1), `<i>This thread has been locked</i>`)
];

export const forum = new Forum("Was anyone else at the beach this evening?", posts, true);