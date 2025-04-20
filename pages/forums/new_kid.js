import { Forum } from '../../assets/js/forum.js';
import { Post } from '../../assets/js/post.js';
import { DateTime } from '../../assets/js/datetime.js';


const dt = new DateTime(5, 14, 2002, 21, 22);
const posts = [
  new Post("wbc", dt.offset(0), `So I was at the Q-Mart over on 5th earlier, and some punk tried to sneak some merch out. Wasn't too sneaky about it, and the security was after him. Still woulda gotten away with it, but then this kid (like, barely a teenager) just grabs his arm and locks him down. Like, dude was flailing and trying to yank free, but nope, hard stop - kid's arms musta been steel. Security came over, took the guy in, and the kid just mumbled something and peaced out before anyone could ask his name.

Anyone know who he is? New cape? Some random unregged [UC]? Kid was strong, at least.
Wearing normal clothes - a tee and shorts. No mask or anything. Sandy hair.`),
  new Post("nav", dt.offset(8), `Lmao, that’s gotta be the same kid who shut down Concrete Jack a few weeks ago.`),
  new Post("wbc", dt.offset(3), `Wait, he took down Concrete Jack? That dude’s built like a fridge. Thought he dipped after the Dust Hounds broke up?
What's his power again?`),
  new Post("nav", dt.offset(5), `Nah, he’s back, was just rolling solo till now. Got that weight-lock power—stands still too long and turns into a walking wrecking ball. He was trying to bust into a pawn shop, and the cops couldn’t do jack (LOL). Dude was literally walking through their barricade.

Then this kid runs in, grabs his arm, and Jack just stalls out. Kept trying to push forward, digging his heels in, but the kid held his ground. He kept leaning into it, but the kid leaned back - didn't budge an inch. Eventually the cops got in close enough to dart Jack.

Also, idk if it was just the video, but it looked like kid’s arm stretched a little when he grabbed Jack. Not full noodle mode, but something. Heard he was a [UC] before, but I dunno if that’s true.`),
  new Post("wbc", dt.offset(1), `Lmfao, so this kid just outmuscled Concrete Jack? And might be stretchy?? That’s some S-tier energy for a UC right there.
Wonder why he’s dipping so fast, though. No quip, no posing, no name drop, just poof.`),
  new Post("cf2", dt.offset(2), `Could be he’s just starting out. No costume, no name, maybe doesn’t even know what he’s doing yet. If he’s really that young, he might not even be a proper hero—just a kid with powers testing the waters.
Or maybe he’s trying to stay lowkey and not get scooped up by the big leagues. Lotta young capes get picked up fast.`),
  new Post("nav", dt.offset(3), `Yeah, if he keeps this up, someone’s slapping a label on him. Either the media or some A-list cape trying to “mentor” him. Kid better at least grab a ski mask or something.
Also, wtf are we calling him? I’ve seen people say:

Anchor (bc he locks people down)

Kid Titan (corny af, but kinda fits)

Grip (simple, effective)`),
  new Post("wbc", dt.offset(1), `Not “Kid Titan,” that sounds like a knockoff brand. I kinda like Grip, tbh.
But yeah, if anyone else spots him, post here. No way this is the last we see of him.`)
];

export const forum = new Forum("Anyone Seen This Kid Before??", posts);