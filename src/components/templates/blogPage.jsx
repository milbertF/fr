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

import Thumbnail3 from './../images/blog/day3/thumbnail3.jpg'
// import Thumbnail4 from './../images/blog/day4/thumbnail4.jpg'
// import Thumbnail5 from './../images/blog/day5/thumbnail5.jpg'
// import Thumbnail6 from './../images/blog/day6/thumbnail6.jpg'


const details = {
  day1: {
    thumbnail: Thumbnail1,
    date: 'April 7, 2025 | Day 1',
    title: 'Historical Sights & City Lights',
    subtitle: 'Explore Luneta Park, Fort Santiago, and the SM Mall of Asia',
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
    title: 'Exploring Subic’s Heritage & Freeport Wonders',
    subtitle: 'Discover SBECC, Subic Police Station, Subic Bay Freeport Zone, and Seaside Lunch',

    first_time: '8:00 AM Subic Bay Exhibition Convention Center (SBECC)',
    first_destination: `When we got to the Subic Bay Exhibition Convention Center, the doors had 
      just opened. Outside, the bright morning sun was a stark contrast to the cool, quiet air inside. 
      Everywhere we turned, we saw colorful paintings and dioramas that chronicled the history of the 
      brave revolutionaries in the Philippines. It felt as though each canvas spoke tales of cultural 
      richness and courage. I can picture the tall ships that used to anchor here. It was a poignant 
      start to the day.`,
    first_image: SBECC,

    second_time: '9:30 AM Subic Police Station',
    second_destination: `We were then greeted into the Subic Police Station by a cordial officer. 
      After seeing the control center, where officials keep an eye on every area of the Freeport Zone, 
      we entered the briefing hall to learn about local laws, such as Subic-specific regulations on 
      marine conservation and waterfront selling.  Even a practical demonstration of how they handle 
      community tips and plan rescue missions was given.  We developed a fresh respect for those who 
      maintain this area's safety and order as a result.`,
    second_image: SubicPoliceStation,

    third_time: '11:00 AM Subic Bay Freeport Zone',
    third_destination: `After that, our guide took us through the center of the Freeport Zone, where 
      massive cargo ships enter and exit under the careful observation of port officials.  Every vessel 
      is watched from the time it enters Subic Bay until it docks, and we stopped at the monitoring 
      center to observe how radar and CCTV feed into a single hub.  It was like seeing a meticulously 
      planned ballet of technology and commerce as the cranes unloaded containers beneath the clear blue sky.`,
    third_image: SubicFreeportZone,

    fourth_time: '12:00 PM Lunch by the Shore',
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
    title: 'A Walk Through Time',
    Subtitle: `Discover Natural History, Quezon Shrine, and the Presidential Car Museum...`
  },
  day4: {
    // thumbnail: Thumbnail4,
    title: 'Day 4: Coastal Wonders & Marine Life',
    Subtitle: `Relax on White Beach, tour the Oceanarium, enjoy a Sunset Cruise...`
  },
  day5: {
    // thumbnail: Thumbnail5,
    title: 'Day 5: Mountain Retreat & Cultural Immersion',
    Subtitle: `Hike scenic trails, visit a local village, join an artisan workshop...`
  },
  day6: {
    // thumbnail: Thumbnail6,
    title: 'Day 6: Agricultural Roots & Farm-to-Table Experience',
    Subtitle: `See the Rice Terraces, tour an organic farm, and try a cooking demo...`
  },
  day7: {
    // thumbnail: Thumbnail6,
    title: 'Day 6: Agricultural Roots & Farm-to-Table Experience',
    Subtitle: `See the Rice Terraces, tour an organic farm, and try a cooking demo...`
  },
  day8: {
    // thumbnail: Thumbnail6,
    title: 'Day 6: Agricultural Roots & Farm-to-Table Experience',
    Subtitle: `See the Rice Terraces, tour an organic farm, and try a cooking demo...`
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

        {['first','second','third','fourth'].map((prefix) => {
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
            : <button className="nav-link disabled" disabled>Day {nextNum} →</button>
          }
        </div>
        <Link to="/">← Back</Link>
      </div>
      
    </div>
  );
}

export default BlogPage;
