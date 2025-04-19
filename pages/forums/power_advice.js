import { Forum } from '../../assets/js/forum.js';
import { Post } from '../../assets/js/post.js';
import { DateTime } from '../../assets/js/datetime.js';


const dt = new DateTime(6, 23, 2002, 17, 18);
const posts = [
  new Post("583", dt.offset(0), `Hey, I need some advice about powers - does anyone here have them? Just got them at school, but things went bad and I'm worried people will be able to trace what happened to me.`),
  new Post("xmx", dt.offset(5), `Heyyy! What's your name?? Do you have it picked out already?`),
  new Post("bfg", dt.offset(0), `No way!!! How did you get yours??! Maybe I can do the same thing 🥺`),
  new Post("583", dt.offset(1), `I can't go into details, or share my name. I'm asking for advice on how to be anonymous.`),
  new Post("xmx", dt.offset(0), `I meant your hero name, not your real one! Unless you're thinking of being a villain, haha`),
  new Post("bfg", dt.offset(0), `We can't help unless you give us a little bit of info... Like, what happened? Give us a bit more than that, lol.
And pls give tips on how to get our own powers <3`),
  new Post("583", dt.offset(1), `Ha, thinking about hero.... I'm not sure about a name though. You can call me S. I guess I can tell you how it happened, but don't ask for more details.`),
  new Post("bfg", dt.offset(1), `Finneee, but you have to tell us what your power is too!`),
  new Post("583", dt.offset(8), `Basically it all happened in chemistry class this morning. We had this really tough assignment - A big test where we had to figure out all the stuff that was mixed into this green liquid. I've been really stressed about it, because the teacher is really mean and strict - like, he was yelling at this guy for using a microscope wrong, and called him an idiot in front of the whole class. So my nerves were pretty shot from the get-go.

We had to work in pairs, and I was partnered with this really tall, handsome guy I know. We did alright in the beginning, but we both got sort of stuck at this one point - like, I don't know what the teacher wanted from us, you know?? We tried fractal distillation, spectroscopy, and some other ones the guy knew about better than I did, but it wasn't working. It was really stressful because normally I'm a good student, but I was looking like a total moron in front of him, and he kept getting more and more frustrated as each new test failed.

At around 10 minutes remaining, he tells me to try doing a freezing-point test on some. Pretty simple, right? Put the solution in a beaker, put some salted ice in a dish around it, measure the temperature. A blindfolded chimpanzee could do it, but *apparently* I'm a fucking idiot. It's just that we were nearly out of time - I was so stressed, I couldn't think straight. I'd just added the ice to the tray, when I realized that I hadn't grabbed the salt. So intead of going to just grab the salt like a sensible person, I picked up the tray with the beaker, and turned to run to the table with the salt. Our teacher does this thing where he stands in the middle of the lab and just glares at people. It always makes me feel like I'm doing something wrong, even if I'm not. Well, guess where he decided do his glowering? Right. Fucking. Behind. Me. When I turned, the tray smashed into his arm, and the green liquid and ice just flew everwhere, <i>including</i> all over him. Whatever was in it must've been dangerous, because his eyes <i>bulged</i>, before he starts ripping off his shirt. In the meantime, with his sweater-vest half over his head, he starts flipping out and cursing the shit outta me in front of everyone, who are all just staring at us. 

All I could do was stand there, mouth open, and I saw my lab parter looking at me in absolute horror. That's when I started to feel the shame, the embarassment, and I felt as heat permeated my face. It felt like my tears were about to boil as then ran down my cheeks. I remember wishing that everyone would just stop staring, or at least that I couldn't see all their eyes on me. When I thought that, it felt like a string was tugging hard at my heart - it stopped my breath, kind of scared me. But it was distracting from, you know, EVERYTHING. The people staring, my increasingly-bare-skinned 60 year old teacher, the anger in Tom's eyes. So I kept pulling harder. 

And after a moment, I felt a release - emotional, physical, all of it. I took a deep breath, and the air felt like mist coming from a crashing waterfall: calm and pleasantly damp. When I opened my eyes, I thought I was blind for a moment. Everything was grayish white, like staring into a blind eye. I had to blink a lot, since droplets kept condensing on my eyelashes. I put out my hand, playing with the swirling eddys of the gas, and the smoke clung to it like twirling spagetti around a fork. And then the fire alarm started blaring, snapping me out of whatever trance I was in, and someone opened the door. I could see the sunlight a bit through the fog, enough to locate the door, and we all moved onto the field. Luckily all the classes had doors close together, so everyone mixed pretty quickly. I just found my friends and they told me that their room had filled with some sort of smoke, too. Pretty lucky, I guess. I didn't tell them about what happened in my class, but a few of the mean girls in that class saw me and started pointing a laughing at once point, so I'm sure everyone will know by tomorrow. I didn't see my teacher at all after that. Some of the people outside seemed pretty scared, though. I guess they thought it was some sort of villain attack, or a gas leak or something. The principal ended up making an announcement after everyone had made it to the field, and we were told to go home. 

So that's pretty much it - Dad called and said he'd gotten an email to pick me up and my sister up, and that everything was fine but school was canceled. Luckily he didn't ask too many questions, but my sister just kept saying how sure she was that this was because of a villain, and that the smoke could've been poisoned. Dad said if that had been true we would already be 6 feet under, and not to worry. I wasn't really listening. I think he thought I was in shock - told me to relax and play some games. I guess I sort of was, but not because I was stressed. I just felt weird, like I'd just woken up from a very odd dream.

I haven't told anyone, but what should I do now?? Will they figure out it was me? How can I hide it? How do I control this? I'm too scared to try again, but I know it was me. Should I be? I don't know what comes next - should I be testing out my power??`),
  new Post("tg1", dt.offset(4), `Definitely fake, lol. Like that could give someone powers.
You are all are getting baited.`),
  new Post("bfg", dt.offset(1), `So you were just stressed about school? That happens to me all the time, and I still don't have a power
This isn't fairrrr 😭`),
  new Post(`xmx`, dt.offset(0), `No way, S!! That sounds awful - at least your power is super cool!!
Can I be your sidekick?? You should PM me with your main account - I can keep your secret!`),
  new Post("sus", dt.offset(3), `I hate to be that girl, but I'm not so sure about following the whole 'superhero' route.... 
Imagine going up against BubbleBomb, or trying to stop a bank robbery, lol. Best you could hope for is getting out in one piece, with a power like that.. Probably best to play it safe, NGL. There are better powers for heroes out there.`),
  new Post("583", dt.offset(1), `Yea, I guess you're probably right... Does anyone know how I can avoid getting IDd though?? I'm really worried that one of the guys knows it was me, he was staring right at me when we were leaving the building. Is there anyone here with powers who can advise?? Please guys`),
  new Post("tg1", dt.offset(2), `Wow, really laying it on thick LOL
If you're going to make up stories, at least pick a cooler power next time. Give us something interesting to read...`),
  new Post("nav", dt.offset(0), `If this is legit -
Firstly, going to message boards about this stuff is NOT a good idea, lol. People can trace even the guest accounts. But since you already have i'll say this - keeping your identity safe is mega important for ANY [PP]. Villains will go after kids as young as middle school to try to recruit, so you shouldn't reveal your identity to ANYONE, just in case it gets out. 
Def don't skip school, or you'll look super sus. Just act like normal tomorrow, and it'll be fine. If you feel like anyone suspects you, just play dumb. They have no proof, unless you forgot to mention something obvious (like, the smoke didn't come out of you, right??)
Don't ever use in any public are, or at home.
Good luck man`),
  new Post("hsw", dt.offset(0), `What if they're just trying to bait a PP into talking to them? Would be pretty genius TBH. Well played if so 👏`),
  new Post("hwk", dt.offset(2), `Wait, that sounds my old chemistry teacher, at South Emmerson High right? That assignment sucked, my condolences girl XD
Wish I coulda dropped a smoke bomb to get outta it too LOL`),
  new Post("583", dt.offset(1), "<i>This thread has been locked</i>")
];

export const forum = new Forum("Power Advice", posts, true);