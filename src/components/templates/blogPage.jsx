import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './../styles/blogPage.css';

import Thumbnail1 from './../images/blog/day1/thumbnail1.jpg'
import RizalPark from './../images/blog/day1/rizalPark.jpg'
import PortSantiago from './../images/blog/day1/portSantiago.jpg'
import SmMoa from './../images/blog/day1/smMoa.jpg'

import Thumbnail2 from './../images/blog/day2/thumbnail2.jpg';
import SBECC from './../images/blog/day2/sbecc.jpeg';
import SubicPoliceStation from './../images/blog/day2/subicPoliceStation.jpg';
import SubicFreeportZone from './../images/blog/day2/subicFreeportZone.jpg';
import SubicBayLunch from './../images/blog/day2/subicBayLunch.jpg';

import Thumbnail3 from './../images/blog/day3/thumbnail3.jpg';
import Bone from './../images/blog/day3/bone.jpg';
import Sasakyan from './../images/blog/day3/sasakyan.jpg';
import Quezon from './../images/blog/day3/quezon.jpg';
import Trinoma from './../images/blog/day3/trinoma.jpg';

import Thumbnail4 from './../images/blog/day4/thumbnail4.jpg';
import Hytec from './../images/blog/day4/hytec.jpeg';

import Thumbnail5 from './../images/blog/day5/thumbnail5.jpg';
import MMDA from './../images/blog/day5/mmda.jpg';
import LRT from './../images/blog/day5/lrt.jpeg';

import Thumbnail6 from './../images/blog/day6/thumbnail6.jpg';
import Sf from './../images/blog/day6/strawberryfarm.jpeg';
import CBC from './../images/blog/day6/cbc.jpg';
import PPH from './../images/blog/day6/pph.jpg';
import PMA from './../images/blog/day6/pma.jpg';
import MVP from './../images/blog/day6/mvp.jpg';

import Thumbnail7 from './../images/blog/day7/thumbnail07.jpg';
import Bike from './../images/blog/day7/bike.jpg';
import Back from './../images/blog/day7/backtoqc.jpg';

import Thumbnail8 from './../images/blog/day8/thumbnail8.JPG';
import Arrived from './../images/blog/day8/arrived.jpg';
import Onboard from './../images/blog/day8/onboard.jpg';
import Waiting from './../images/blog/day8/waiting.JPG';



const details = {
  day1: {
    thumbnail: Thumbnail1,
    date: 'April 7, 2025 | Day 1',
    title: 'Historical Sights & City Lights',
    subtitle: `Explore Luneta Park, Fort Santiago, and the SM Mall of Asia`,
    first_time: '1PM Luneta Park',
    first_destination: `As soon as we got off the bus and entered Rizal Park, also called Luneta, 
      Manila's heat enveloped us like a thick blanket. The tropical sun felt almost harsh at its 
      height because we're not used to that kind of heat. Nevertheless, it was all worthwhile 
      because of the expansive greenery and the famous Rizal Monument shining in the sunlight. 
      In front of the marble shrine to José Rizal, our national hero, we lined up for pictures, 
      strolled down the shaded walks, and stopped for cooled refreshments from a neighbouring vendor.`,
    first_image: RizalPark,
    second_time: '2:30 PM Fort Santiago',
    second_destination: `We proceeded a short distance to the Fort Santiago's red brick walls. The 
      temperature immediately dropped behind the old mango trees that shaded it. We paused to reflect 
      on centuries of history, including Spanish galleons, the American invasion, and the horrific 
      years of Japanese occupation, while the fort's ramparts creaked beneath our feet. We peered 
      into the tiny prison cell where Rizal was held prior to his execution, which was located within 
      the murky dungeons. Iron shackles and wet stone lent history a realistic—and sobering—feel.`,
    second_image: PortSantiago,
    third_time: '4:30 PM SM Mall of Asia (MOA)',
    third_destination: `The air had only cooled a little by the time we reached SM MOA.  Towering 
      over the harbor, the MOA complex was packed with shoppers, families, and street performers. The 
      massive MOA Eye Ferris wheel was the first thing that caught our eye.  We grabbed it so we could 
      see Manila Bay from above.  From above, the location where the sea and skyline met was almost wonderful.`,
    third_image: SmMoa,
  },


  day2: {
    thumbnail: Thumbnail2,
    date: 'April 8, 2025 | Day 2',
    title: 'By the Bay',
    subtitle: `Discover SBECC, Subic Police Station, Subic Bay Freeport Zone, and Seaside Lunch...`,
    first_time: '8:00 AM Subic Bay Exhibition Convention Center (SBECC)',
    first_destination: `When we got to the Subic Bay Exhibition Convention Center, the doors had 
      just opened. Outside, the bright morning sun was a stark contrast to the cool, quiet air inside. 
      Everywhere we turned, we saw colorful paintings and dioramas that chronicled the history of the 
      brave revolutionaries in the Philippines. It felt as though each canvas spoke tales of cultural 
      richness and courage. I can picture the tall ships that used to anchor here. It was a poignant 
      start to the day.`,
    first_image: SBECC,
    second_time: '9:30 AM Subic Police Station',
    second_destination: `We were then greeted into the Subic Police Station by a cordial officer. 
      After seeing the control center, where officials keep an eye on every area of the Freeport Zone, 
      we entered the briefing hall to learn about local laws, such as Subic-specific regulations on 
      marine conservation and waterfront selling.  Even a practical demonstration of how they handle 
      community tips and plan rescue missions was given.  We developed a fresh respect for those who 
      maintain this area's safety and order as a result.`,
    second_image: SubicPoliceStation,
    third_time: '11:00 AM Subic Bay Freeport Zone',
    third_destination: `After that, our guide took us through the center of the Freeport Zone, where 
      massive cargo ships enter and exit under the careful observation of port officials.  Every vessel 
      is watched from the time it enters Subic Bay until it docks, and we stopped at the monitoring 
      center to observe how radar and CCTV feed into a single hub.  It was like seeing a meticulously 
      planned ballet of technology and commerce as the cranes unloaded containers beneath the clear blue sky.`,
    third_image: SubicFreeportZone,
    fourth_time: '12:00 PM Lunch by the Shore',
    fourth_destination: `Our appetites were raging by midday, so we took up residence in a little shack 
      by the water with a view of the bay. As we relished each bite of our seafood feast, a mild breeze 
      with a hint of salt blew in. We enjoyed the freshest air while perusing the local souvenir shops, 
      choosing hand-carved souvenirs, woven bracelets, necklace made out of shells, and vibrant keychains 
      to commemorate this ideal location. We slowly got back into our bus at 1 PM and started driving 
      back to Quezon City, already thinking back on the best parts of the day. Overall, Subic Bay is the most 
      cleanest, friendly, and welcoming place I've ever been, and I'm already planning my next trip there.`,
    fourth_image: SubicBayLunch,
  },


  day3: {
    thumbnail: Thumbnail3,
    date: 'April 9, 2025 | Day 3',
    title: 'A Walk Through Time',
    Subtitle: `Discover Natural History, Quezon Shrine, and the Presidential Car Museum...`,
    first_time: '10:00 AM National Museum of Natural History',
    first_destination: `Upon entering the Natural Museum of Natural History, we immediately recognized its 
      differences from the museum in Zamboanga City, where we live. With each alcove showcasing specimens and 
      displays that immediately piqued our interest, the exhibition rooms were high and expansive. The massive 
      sperm whale skeleton towered above us; its vertebrae alone were bigger than any exhibition case at home. 
      Glistening mineral formations, fragile bug collections, and dioramas of ancient life were all housed in 
      glass exhibits. Everywhere we looked begged us to stay, but we didn't have much time, and before we knew 
      it, we were already planning our next trip.`,
    first_image: Bone,
    second_time: '1 PM Quezon Memorial Shrine',
    second_destination: `When we disembarked at the Quezon Memorial Shrine, the noon sun met us like a fiery 
      glare.  Excitation propelled us up the wide steps despite the extreme heat.  We found objects at the 
      shrine's museum that linked Philippine history, including antique weaponry 
      that spoke of bravery and struggle, elaborate presents from China, and a World War II soldier's outfit 
      from the liberation.  We visited the graves of President Manuel L. Quezon and his wife, Aurora, near 
      the center of the memorial.  We could feel the pride of a country they helped create, as well as the 
      weight of their legacy, standing beneath the towering art-deco spire.`,
    second_image: Quezon,
    third_time: '2 PM Museo ng Pampangulong Sasakyan',
    third_destination: `The Museo ng Pampangulong Sasakyan, where the history of Philippine leadership was
      told on four wheels, was a short stroll away.  General Douglas MacArthur's elegant wartime command 
      truck was the first to welcome us.  The glossy wood and brass fittings of Emilio Aguinaldo's carriage, 
      which was a tribute to the nation's first president, shone in the middle of the showroom.  A lovely 
      horse-drawn vehicle, known as a kalesa, was nearby, reminding us of daily life in a another time.  
      The most extravagant display of them was there, under soft spotlights: Imelda Marcos's automobile, 
      with its chrome trim and upholstery evoking luxury and scandal.`,
    third_image: Sasakyan,
    fourth_time: '3 PM Trinoma Mall',
    fourth_destination: `We decided to spend the late afternoon at Trinoma Mall because our official 
      tour ended earlier than anticipated. Although it wasn't on the original schedule, it was the ideal 
      way to relax. I started by getting a clean white shirt from OXGN, and then we competed against 
      one another in the game center, shooting hoops on the arcade basketball machines until our arms 
      hurt. Finally, we refueled at Turks Shawarma, where we enjoyed tender meat, fresh vegetables, 
      and tangy sauces. It was a fun way to cap off a day full of heritage and exploration.`,
    fourth_image: Trinoma,
  },


  day4: {
    thumbnail: Thumbnail4,
    date: 'April 10, 2025 | Day 4',
    title: 'Currency Creation to Robot Confrontation',
    Subtitle: `See how money are made and how tech thrives...`,
    first_time: '9 AM Bangko Sentral ng Pilipinas',
    first_destination: `We entered the Bangko Sentral ng Philippines. There was a legitimate reason 
      why the security procedures were so strict. No taking of pictures is allowed. they collected 
      our phone before entering the production site. The only location in the Philippines where our cash 
      is brought to life is here. We observed via a glass partition the incredible process of a banknote: 
      from raw paper pulp to meticulous printing to complex security feature embossing to last quality 
      checks to neatly arranged bundles ready for distribution across the country. The weight of each 
      peso in circulation was felt by us. Another interesting detail we discovered is that our new 
      polymer banknotes are really printed in Australia, not here. They come via safe shipping and go 
      through the same stringent inspection and packing process. Our gang had a fresh respect for each 
      charge we paid by the time we returned to the streets.`,
    // first_image: Bone,
    second_time: '2 PM Hytec Power Inc.',
    second_destination: `We left for Novaliches to explore Hytec Power Inc. after lunch.  The atmosphere 
      was brimming with inventiveness from the time we entered.  truck simulator, automated welding machine, 
      and rows of glowing server racks were among the items that engineers and IT students 
      interacted with.  The high point?  Piloting remote-controlled war robots through an obstacle course 
      after donning virtual reality goggles.  As students engaged in robot-vs-robot competitions, cheers 
      and laughter broke out. We also had a sneak glimpse at a hardware lab where students are developing 
      anything from robots to solar-powered chargers.  Their enthusiasm served as a reminder that the next 
      generation is already developing the technology of the future.`,
    second_image: Hytec
  },


  day5: {
    thumbnail: Thumbnail5,
    date: 'April 11, 2025 | Day 5',
    title: 'Managing Traffic, Riding Train',
    Subtitle: `From real-time traffic control to behind-the-scenes train operations, a deep dive into Manila's urban mobility...`,
    first_time: '9 AM Traffic Engineering Center',
    first_destination: `At Metro Manila's Traffic Engineering Center, a hub of displays and sensors 
      where every route in the city is monitored around-the-clock, we began Day 5. We were able to 
      observe everything through live dash-cam feeds worn by traffic enforcers and a wall of CCTV 
      monitors. In order to ease congestion, redirect traffic around events, and coordinate emergency 
      responses, engineers showed how they modify signal timings in real time. We gained a fresh 
      understanding of the unseen dance that keeps millions of cars on the road as we saw data screens 
      change every second.`,
    first_image: MMDA,
    second_time: '2 PM Light Rail Transit Authority (Line 2)',
    second_destination: `In the afternoon, we headed to Santolan Station to experience Manila's LRT 
      Line 2. Boarding the train, we rode eastward for two stations before returning to our starting 
      point, noting how smoothly the cars glided along elevated tracks above the city streets. Then 
      came the highlight: a behind-the-scenes tour of the maintenance depot.\n
      Inside the depot's cavernous bays, technicians inspected wheel assemblies, tested braking 
      systems, and ran diagnostics on electrical controls. We even climbed into the operator's 
      cabin of a parked train—sitting in the driver's seat, hands on the throttle and brake 
      handles, imagining the responsibility of guiding hundreds of passengers safely across 
      town. The LRT team explained their rigorous maintenance schedules, safety checks, and the 
      challenges of keeping aging infrastructure running reliably under heavy daily ridership.
      `,
    second_image: LRT
  },
  day6: {
    thumbnail: Thumbnail6,
    date: 'April 12, 2025 | Day 6',
    title: 'Welcome to Baguio City',
    Subtitle: `A full day in Baguio's cool air—from pre-dawn strawberry fields and hillside temples to academy vistas and bustling night bazaars...`,
    first_time: '6 AM Strawberry Farm',
    first_destination: `As the first light lit the sky, we arrived at the Strawberry Farm after 
      rolling into Baguio beneath a blanket of stars.  The tidy rows of plants promised delicious 
      summer harvests to come, even if it wasn't the best time of year to pick.  We perused booths 
      brimming with homemade handicrafts, mementos of fresh fruit, and jam jars.  I was immediately 
      revitalized by the farm's famous strawberry taho, which is warm silken tofu dripping with 
      melting sugar and vibrant strawberry syrup.  The ideal mountain-morning cure for our groaning 
      bellies, Faustine and I slurped warm bowls of arroz caldo topped with spring onions and 
      calamansi after realizing we had skipped breakfast.`,
    first_image: Sf,
    second_time: '7:30 AM Chinese Bell Church',
    second_destination: `With the hotel still closed for check-in, we made our way to the Chinese 
      Bell Church. Perched on a hillside, its red-and-gold pagoda contrasted against pine-forested 
      slopes. Every angle offered a postcard-worthy vista: curved roofs framing distant peaks, stone 
      lions guarding garden paths, and bell towers catching the sunrise. We snapped photo after photo, 
      breathing in the crisp air and admiring the tranquil koi ponds and lantern-lined walkways.`,
    second_image: CBC,
    third_time: '9 AM Prince Plaza Hotel',
    third_destination: `Finally the hotel doors opened and we claimed our cozy, window-ventilated 
      room—no air conditioning needed in Baguio's perpetual cool. Breakfast in the hotel dining hall 
      felt surprisingly luxurious after dorm life: plated omelets, fresh fruit, and coffee served at 
      the table (though, regrettably, not unlimited). Gazing out the open window at swaying pines, 
      we felt utterly refreshed and ready for the afternoon's adventures.`,
    third_image: PPH,
    fourth_time: '1 PM Philippine Military Academy',
    fourth_destination: `Visiting PMA had been my childhood dream, so even the tourist-only areas 
      thrilled me. We strolled across manicured grounds, pausing by helicopters parked on the tarmac 
      and imagining cadets in training. Though we couldn't enter the barracks or parade fields, every 
      viewpoint felt cinematic—whitewashed buildings against emerald lawns, mountain mist drifting 
      over the ridges. Cameras clicked nonstop: every gate, every statue, every hillside vista 
      begged to be remembered.`,
    fourth_image: PMA,
    fifth_time: '2 PM Mines View Park',
    fifth_destination: `Next stop: Mines View Park, where the air felt even cooler and the panorama 
      of rolling mountains stretched infinitely. We laughed as pink-maned horses posed for photos—some 
      classmates even rented traditional Igorot outfits to match the rustic charm. Souvenir stalls 
      tempted us with local peanut brittle and ube jam; we loaded up on pasalubong to bring back to 
      Zamboanga. Between photo ops and snack breaks, we lingered until the sun dipped lower, turning 
      the valley golden.`,
    fifth_image: MVP
    
  },
  day7: {
    thumbnail: Thumbnail7,
    date: 'April 13, 2025 | Day 7',
    title: 'Final Farewell',
    Subtitle: `Morning rides in Burnham Park, a wistful checkout, and the rainy-road journey back to Quezon City...`,
    first_time: '7 AM Burnham Park Reprise',
    first_destination: `We rose with the sun for one last taste of Baguio's crisp air. After 
    breakfast, we pedaled rented bikes around Burnham Park's serene lagoon, the morning mist 
    still hovering over the water. Laughter echoed as we raced past flowerbeds and pine-lined 
    paths, pausing to sample local snacks—strawberry taho, peanut brittle, and cornick—from 
    vendors along the walkway. Every turn revealed a vista we'd grown to love: the undulating 
    hills, the colonial-style buildings peeking through evergreens, and families gathering for 
    Sunday strolls. Those final hours felt suspended in time, each pedal stroke a reminder 
    that our Baguio chapter was drawing to a close.`,
    first_image: Bike,
    second_time: '5 PM Return to Quezon City',
    second_destination: `The road back unfolded under leaden skies. Rain had fallen earlier—wet 
      roads gleamed under streetlights—but as we rolled into Quezon City at 5 PM, the storm had 
      passed, leaving behind a cool, washed-clean freshness. Once home, we unpacked souvenirs and 
      spread photos across the table: selfies with Igorot-costumed friends, shots of towering 
      pines, and the imposing façade of the mint. Over a simple dinner—comfort food after a 
      week of nonstop adventure—we reflected on how much we'd seen and learned.`,
    second_image: Back,
  },
  day8: {
    thumbnail: Thumbnail8,
    date: 'April 14, 2025 | Day 8',
    title: 'The Sad Part',
    Subtitle: `Early airport goodbyes, a bittersweet flight home, and the joyful reunion in Zamboanga City...`,
    first_time: '1 PM Ninoy Aquino International Airport (NAIA Terminal 3)',
    first_destination: `Although our flight wasn't until 5 PM, we were escorted to NAIA Terminal 
      3 well ahead of schedule—security and check-in went smoothly, and our bags were tagged for 
      Zamboanga. With boarding passes in hand, we settled into the waiting lounge. Some of us 
      scrolled through photos, others chatted about favorite moments: the roar of the mint 
      presses, the hush of the Quezon Shrine, the thrill of VR robot battles. As we watched 
      planes taxi past the windows, a gentle melancholy set in—our week-long adventure was over.`,
    first_image: Waiting,
    second_time: '5 PM Onboard Philippine Airlines',
    second_destination: `Climbing into our seats on PAL, we scanned the cabin through misty eyes. 
      The engines' rumble felt like a closing chord. Yet beneath the sadness was excitement—eagerness 
      to share our stories with family and friends back in Zamboanga City. As the aircraft lifted off, 
      we exchanged final glances at Metro Manila's skyline, committing every landmark to memory. 
      Conversations drifted from “remember when…?” to plans for a reunion trip.`,
    second_image: Onboard,
    third_time: '7 PM Touchdown Zamboanga City',
    third_destination: `The wheels touched down smoothly, and relief washed over us: safe, sound, 
      and home. We snapped a group photo by the gate, then pinged the faculty GC with our arrival 
      update. Stepping into the open arms of family waiting outside felt like the warmest 
      welcome—Baguio's cool breezes already a sweet memory. Before heading home, hunger won 
      out: we made a beeline for Jollibee at Ayala Mall, laughing over Chickenjoy and palabok 
      as though our tour had happened in another lifetime.`,
    third_image: Arrived,
  }
};


function BlogPage() {
  const { dayId } = useParams();
  const num = parseInt(dayId.replace('day',''), 10);
  const page = details[dayId];

  useEffect(() => { window.scrollTo(0,0); }, [dayId]);

  if (!page) return null;

  const keys = Object.keys(details).filter(k=>k.startsWith('day'));
  const lastNum = keys.length;

  const prevNum = num - 1;
  const nextNum = num + 1;

  return (
    <div className="blogPage">
      <div className="blogPageCon">
        
        <div className="imageThumbnail">
          <img src={page.thumbnail} alt="" />
        </div>
        <h4>{page.date}</h4>
        <h2>{page.title}</h2>
        <p>{page.Subtitle}</p>

        {['first','second','third','fourth', 'fifth'].map((prefix) => {
          const time = page[`${prefix}_time`];
          const dest = page[`${prefix}_destination`];
          const img  = page[`${prefix}_image`];
          if (!time || !dest) return null;
          return (
            <div className="article" key={prefix}>
              <article>
                <h3>{time}</h3>
                <p>{dest}</p>
              </article>
              {img && <div className="img"><img src={img} alt="" /></div>}
            </div>
          );
        })}
        <div className="btn">
          {prevNum >= 1
            ? <Link to={`/blogPage/day${prevNum}`} className="nav-link">← Day {prevNum}</Link>
            : <Link className="nav-link disabled" disabled>First Day</Link>
          }
          {nextNum <= lastNum
            ? <Link to={`/blogPage/day${nextNum}`} className="nav-link">Day {nextNum} →</Link>
            : <button className="nav-link disabled" disabled>Last Day</button>
          }
        </div>
        <Link to="/">← Back</Link>
      </div>
      
    </div>
  );
}

export default BlogPage;
