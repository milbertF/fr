import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './../styles/blog.css';
import Thumbnail1 from './../images/blog/day1/thumbnail1.jpg';
import Thumbnail2 from './../images/blog/day2/thumbnail2.jpg';
import Thumbnail3 from './../images/blog/day3/thumbnail3.jpg';

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  // const [loadCard, setLoadCard] = useState(false);

  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    // get total length of the path
    const pathLength = path.getTotalLength();

    // set up the dash array & initial offset
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    // animate strokeDashoffset to 0 as you scroll
    gsap.to(path, {
      strokeDashoffset: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: 0.5,
      }
    });
  }, []);
  return (
    <div className="blog">
      <div className="topF"></div>
      <div className="topF"></div>
      <div className="blogcon">
        <h2>7 Days of Discovery: Our Educational Tour Journey</h2>
        <p>
          Join us for a seven-day educational journey that will be full of eye-opening experiences,
          worthwhile lessons, and unforgettable moments as we explore outside the classroom to learn
          about different cultures, locations, and concepts that have influenced our worldview.
        </p>

        <div className="svgContainer" ref={containerRef}>
          <svg
            width="843"
            height="1657"
            viewBox="0 0 843 1657"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* attach ref to the path you want to animate */}
            <path
              ref={pathRef}
              d="M3 0V173.5C3 187.859 14.6406 199.5 29 199.5H814.5C828.859 199.5 840.5 211.141 840.5 225.5V381.5C840.5 395.859 828.859 407.5 814.5 407.5H29C14.6406 407.5 3 419.141 3 433.5V589.5C3 603.859 14.6406 615.5 29 615.5H814.5C828.859 615.5 840.5 627.141 840.5 641.5V797.5C840.5 811.859 828.859 823.5 814.5 823.5H29C14.6406 823.5 3 835.141 3 849.5V1005.5C3 1019.86 14.6406 1031.5 29 1031.5H814.5C828.859 1031.5 840.5 1043.14 840.5 1057.5V1213.5C840.5 1227.86 828.859 1239.5 814.5 1239.5H29C14.6406 1239.5 3 1251.14 3 1265.5V1421.5C3 1435.86 14.6406 1447.5 29 1447.5H814.5C828.859 1447.5 840.5 1459.14 840.5 1473.5V1628.5C840.5 1642.86 828.859 1654.5 814.5 1654.5H3"
              stroke="hsl(from var(--text-color) h s l / 0.7)"
              strokeWidth="5"
            />
          </svg>


          <div className="new cardL">
            <Link to="/blogPage/day1" className="onViewCard">
              <h4>DAY 1:</h4>
              <h2>Historical Sights & City Lights</h2>
              <p><i>(Luneta Park • Fort Santiago • SM Mall of Asia)</i></p>
            </Link>
          </div>
          <div className="new cardR">
            <Link to="/blogPage/day2" className="onViewCard">
              <h4>DAY 2:</h4>
              <h2>By the Bay</h2>
              <p><i>(Museum • Police Station • Subic Freeport)</i></p>
            </Link>
          </div>
          <div className="new cardL">
            <Link to="/blogPage/day3" className="onViewCard">
              <h4>DAY 3:</h4>
              <h2> A Walk Through Time</h2>
              <p><i>(Natural History • Quezon Shrine • Presidential Car Museum)</i></p>
            </Link>
          </div>
          <div className="new cardR">
            <Link to="/blogPage/day4" className="onViewCard">
              <h4>DAY 2:</h4>
              <h2>Inside Subic: History, Heroes, and Freeport Views</h2>
              <p><i>(Museum • Police Station • Subic Freeport)</i></p>
            </Link>
          </div>
        </div>

        

        {/* {!loadCard ? (
          <div className="cardcon">
            <Link to="/blogPage/day1" className="card card1">
              <img src={Thumbnail1} alt="" />
              <div className="des">
                <h4>Day 1: Historical Sights & City Lights</h4>
                <p><i>(Luneta Park • Fort Santiago • SM Mall of Asia)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day2" className="card card2">
              <img src={Thumbnail2} alt="" />
              <div className="des">
                <h4>Day 2: Inside Subic — History, Heroes, and Freeport Views</h4>
                <p><i>(Museum • Police Station • Subic Freeport)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day3" className="card card3">
              <img src={Thumbnail3} alt="" />
              <div className="des">
                <h4>Day 3: A Walk Through Time — Nature, Legacy, and Presidential Wheels</h4>
                <p><i>(Natural History • Quezon Shrine • Presidential Car Museum)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day4" className="card card4">
              <img src={Thumbnail1} alt="" />
              <div className="des">
                <h4>Day 4: Coastal Wonders & Marine Life</h4>
                <p><i>(White Beach • Oceanarium • Sunset Cruise)</i></p>
              </div>
            </Link>
            
            <div className="show">
              <p className="load-more" onClick={() => setLoadCard(true)}>Show More</p>
            </div>
          </div>
        ) : (
          <div className="cardcon">

            <Link to="/blogPage/day1" className="card card1">
              <img src={Thumbnail1} alt="" />
              <div className="des">
                <h4>Day 4: Coastal Wonders & Marine Life</h4>
                <p><i>(White Beach • Oceanarium • Sunset Cruise)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day2" className="card card2">
              <img src={Thumbnail2} alt="" />
              <div className="des">
                <h4>Day 5: Mountain Retreat & Cultural Immersion</h4>
                <p><i>(Hiking Trail • Local Village • Artisan Workshop)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day3" className="card card3">
              <img src={Thumbnail3} alt="" />
              <div className="des">
                <h4>Day 6: Agricultural Roots & Farm-to-Table Experience</h4>
                <p><i>(Rice Terraces • Organic Farm • Cooking Demo)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day4" className="card card4">
              <img src={Thumbnail1} alt="" />
              <div className="des">
                <h4>Day 4: Coastal Wonders & Marine Life</h4>
                <p><i>(White Beach • Oceanarium • Sunset Cruise)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day5" className="card card5">
              <img src={Thumbnail2} alt="" />
              <div className="des">
                <h4>Day 5: Mountain Retreat & Cultural Immersion</h4>
                <p><i>(Hiking Trail • Local Village • Artisan Workshop)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day6" className="card card6">
              <img src={Thumbnail3} alt="" />
              <div className="des">
                <h4>Day 6: Agricultural Roots & Farm-to-Table Experience</h4>
                <p><i>(Rice Terraces • Organic Farm • Cooking Demo)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day7" className="card card7">
              <img src={Thumbnail1} alt="" />
              <div className="des">
                <h4>Day 4: Coastal Wonders & Marine Life</h4>
                <p><i>(White Beach • Oceanarium • Sunset Cruise)</i></p>
              </div>
            </Link>

            <Link to="/blogPage/day8" className="card card8">
              <img src={Thumbnail1} alt="" />
              <div className="des">
                <h4>Day 4: Coastal Wonders & Marine Life</h4>
                <p><i>(White Beach • Oceanarium • Sunset Cruise)</i></p>
              </div>
            </Link>
            
            <div className="show">
              <p className="load-more" onClick={() => setLoadCard(false)}>Show Less</p>
            </div>
          </div>
        )} */}

      </div>
    </div>
  );
}

export default Blog;
