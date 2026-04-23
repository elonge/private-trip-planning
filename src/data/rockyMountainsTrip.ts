import { url } from "inspector/promises";
import type { TripPlan } from "../types/trip";

export const nycRockiesTrip: TripPlan = {
  title: "City Lights & Rocky Mountain Heights",
  subtitle:
    "A 17-day family adventure starting September 16, 2026. A girls' week in NYC followed by a 10-day full-family road trip through the Canadian Rockies when the boys arrive.",
  durationDays: 17,
  heroPhotoUrl:
    "https://adventures.com/media/19172/s-lake-louise-blue-water-view-canada.jpg",
  heroPhotoAlt:
    "The bright turquoise waters of Moraine Lake surrounded by the Valley of the Ten Peaks in Banff National Park.",
  routeStops: [
    { id: "nyc", label: "New York City", lat: 40.7128, lng: -74.006, order: 1 },
    {
      id: "bear-mountain",
      label: "Bear Mountain",
      lat: 41.3126,
      lng: -73.989,
      order: 2,
    },
    {
      id: "nyc-return",
      label: "New York City",
      lat: 40.7128,
      lng: -74.006,
      order: 3,
    },
    { id: "calgary", label: "Calgary", lat: 51.0447, lng: -114.0719, order: 4 },
    {
      id: "canmore",
      label: "Canmore / Banff",
      lat: 51.089,
      lng: -115.344,
      order: 5,
    },
    { id: "jasper", label: "Jasper", lat: 52.8737, lng: -118.0814, order: 6 },
    {
      id: "golden",
      label: "Golden / Yoho",
      lat: 51.3,
      lng: -116.9667,
      order: 7,
    },
  ],
  phases: [
    {
      id: "nyc-girls-week",
      name: "Phase 1: NYC Highlights & Hudson Valley Nature",
      description:
        "One week exploring the iconic sights of NYC with the parents and two girls (13 & 17), including a scenic escape to nature.",
      altitudeNote: "Sea level, lots of walking around the city.",
      blogs: [
        {
          title: "Things to do in NYC with teens (Mommy Gearest)",
          url: "https://mommygearest.com/things-to-do-in-nyc-with-teens/",
        },
        {
          title: "Bear Mountain State Park Guide (Hike the Hudson Valley)",
          url: "https://hikethehudsonvalley.com/hikes/bear-mountain-state-park/",
        },
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=XnJZ90ha5oM",
        "https://www.youtube.com/shorts/n2iuL9y74Gk",
        "https://www.youtube.com/shorts/4eAYUQXdJLI",
        "https://www.youtube.com/shorts/FTpjYmTQUcY",
        "https://www.youtube.com/watch?v=RyvFc_Aht8Y",
        "https://www.youtube.com/watch?v=TXiT9ci7Xsg",
      ],
      days: [
        {
          day: 1,
          title: "Arrival in the Big Apple",
          summary:
            "Arrive in NYC on Sept 16, settle into your Manhattan base, and take an evening walk through the dazzling lights of Times Square.",
          location: "Midtown Manhattan",
          travelMode: "walk",
          photos: [
            {
              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/38/c7/one-of-my-favourite-places.jpg?w=900&h=500&s=1",
              alt: "Bright billboards and taxis in Times Square."
            },
            {
              url: "https://commons.wikimedia.org/wiki/Special:FilePath/Central_Park_New_York_City_New_York_23_cropped.jpg",
              alt: "A scenic bridge surrounded by autumn trees in Central Park."
            },
            {
              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/ff/73/caption.jpg?w=1200&h=-1&s=1",
              alt: "The Gothic arches and suspension cables of the Brooklyn Bridge."
            }
          ],
          photoUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/38/c7/one-of-my-favourite-places.jpg?w=900&h=500&s=1",
          photoAlt: "Bright billboards and taxis in Times Square.",
          videoUrl: "https://www.youtube.com/watch?v=XnJZ90ha5oM",
        },
        {
          day: 2,
          title: "Central Park & Museums",
          summary:
            "Rent bikes to explore Central Park in the morning, followed by a visit to the American Museum of Natural History.",
          location: "Central Park, NYC",
          travelMode: "bike",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Central_Park_New_York_City_New_York_23_cropped.jpg",
          photoAlt:
            "A scenic bridge surrounded by autumn trees in Central Park.",
          videoUrl: "https://www.youtube.com/shorts/n2iuL9y74Gk",
        },
        {
          day: 3,
          title: "Downtown History & Views",
          summary:
            "Visit the 9/11 Memorial, explore the Financial District, and see the Oculus.",
          location: "Lower Manhattan",
          travelMode: "walk",
          photoUrl:
            "https://911groundzero.com/wp-content/uploads/2017/06/arthur-brognoli-bByNewj8uBI-unsplash-1-scaled-1-768x512.jpg",
          photoAlt:
            "The striking modern white architecture of the Oculus transportation hub.",
          videoUrl: "https://www.youtube.com/shorts/4eAYUQXdJLI",
        },
        {
          day: 4,
          title: "Brooklyn Bridge & DUMBO",
          summary:
            "Walk across the iconic Brooklyn Bridge, grab pizza in DUMBO, and browse vintage shops.",
          location: "Brooklyn, NYC",
          travelMode: "walk",
          photoUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/ff/73/caption.jpg?w=1200&h=-1&s=1",
          photoAlt:
            "The Gothic arches and suspension cables of the Brooklyn Bridge.",
          videoUrl: "https://www.youtube.com/shorts/FTpjYmTQUcY",
        },
        {
          day: 5,
          title: "High Line & Hudson Yards",
          summary:
            "Walk the elevated High Line park, grab lunch at Chelsea Market, and view the city from the Edge at Hudson Yards.",
          location: "West Side, NYC",
          travelMode: "walk",
          photoUrl:
            "https://happier.place/wp-content/uploads/2018/10/HighLineNYC_HappierPlace_14_M.jpg?x77079",
          photoAlt:
            "The High Line elevated park with lush greenery and modern buildings.",
          videoUrl: "https://www.youtube.com/watch?v=RyvFc_Aht8Y",
        },
        {
          day: 6,
          title: "Nature Escape: Bear Mountain",
          summary:
            "Rent a car for the day and drive ~1 hour north to Bear Mountain State Park for hiking, lake views, and a break from the city.",
          location: "Bear Mountain State Park, NY",
          travelMode: "car",
          photoUrl:
            "https://lh3.googleusercontent.com/proxy/e9U0oVnzm6fBKtzBhxyNPqmS0ID2lpA9AbCuDDVpwAp9KMlw_f0t-L9M-fH-5sSqODVYxCzzWgNnCoJ1zAxjDX63kHxCDrkIp2aI_H4Egd6FY976BqA",
          note: "A great transition to nature before the Canada trip.",
          photoAlt: "View of the Hudson River and Bear Mountain Bridge.",
          videoUrl: "https://www.youtube.com/watch?v=TXiT9ci7Xsg",
        },
        {
          day: 7,
          title: "Broadway & Farewell NYC",
          summary:
            "Enjoy a relaxed morning shopping in SoHo and catch a Broadway matinee or evening show before packing up.",
          location: "Theater District, NYC",
          travelMode: "walk",
          photoUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8a/c7/ff/broadway.jpg?w=1200&h=-1&s=1",
          photoAlt: "Theaters lining Broadway in the heart of NYC.",
          videoUrl: "https://www.youtube.com/shorts/OM7vOt2O6CU",
        },
      ],
    },
    {
      id: "rockies-base-1",
      name: "Phase 2: The Boys Join - Canmore & Banff Base",
      description:
        "Meet the boys and fly to Calgary, pick up a large SUV/minivan, and head to a spacious Airbnb in Canmore.",
      altitudeNote:
        "Canmore is around 1,400m (4,600ft). Drink plenty of water to adjust.",
      blogs: [
        {
          title: "Banff (Lametayel)",
          url: "https://www.lametayel.co.il/posts/d4lx99",
        },
        {
          title: "Banff (Lametayel) - 5 ימים בהרי הרוקי הקנדיים",
          url: "https://www.lametayel.co.il/posts/n580vv",
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=xJl6ETnVHKE",
        "https://www.youtube.com/watch?v=jnlz2_L2sxw",
        "https://www.youtube.com/watch?v=sVx2CeSuioc",
        "https://www.youtube.com/watch?v=rikFjpAxF5U",
      ],
      days: [
        {
          day: 8,
          title: "Reunion in Calgary & The Drive West",
          summary:
            "Meet the boys, fly to Calgary, grab the rental vehicle, and drive 1.5 hours to your Canmore Airbnb base just outside Banff National Park.",
          location: "Calgary -> Canmore",
          travelMode: "flight & car",
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CrA4oybO0w_z0hke0S8RBaWwg7U0_SYciw&s",
          note: "Stock up on groceries at the Safeway or Save-On-Foods in Canmore.",
          photoAlt:
            "The iconic Three Sisters mountain peaks towering over Canmore.",
          videoUrl: "https://www.youtube.com/watch?v=jnlz2_L2sxw",
        },
        {
          day: 9,
          title: "Banff Avenue & Gondola Views",
          summary:
            "Drive 20 mins into Banff town. Ride the Banff Gondola up Sulphur Mountain for panoramic views, then walk the Bow Falls trail.",
          location: "Banff National Park",
          travelMode: "walk",
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscoYj0lCWaSWV6RpITfQXipQhbDzZ7tE8vg&s",
          photoAlt:
            "Looking down Banff Avenue toward the massive, rocky peak of Cascade Mountain.",
          videoUrl: "https://www.youtube.com/watch?v=sVx2CeSuioc",
        },
        {
          day: 10,
          title: "The Iconic Lakes: Louise & Moraine",
          summary:
            "Take the pre-booked Parks Canada shuttle to see the blindingly blue waters of Moraine Lake and Lake Louise. Hike to the Lake Agnes Tea House.",
          location: "Lake Louise",
          travelMode: "hike",
          photoUrl:
            "https://adventures.com/media/19172/s-lake-louise-blue-water-view-canada.jpg",
          note: "Personal vehicles are restricted at Moraine Lake; you MUST book shuttle tickets in advance.",
          photoAlt:
            "The turquoise waters of Lake Louise surrounded by glaciers and mountains.",
          videoUrl: "https://www.youtube.com/watch?v=rikFjpAxF5U",
        },
        {
          day: 11,
          title: "Johnston Canyon & Evening Hot Springs",
          summary:
            "Hike the catwalks of Johnston Canyon to the Lower and Upper Falls. Spend the evening relaxing the family's legs at the Banff Upper Hot Springs.",
          location: "Bow Valley Parkway",
          travelMode: "hike",
          photoUrl:
            "https://www.banff-springs-hotel.com/content/uploads/2022/11/Johnstons-Canyon-993x462.jpeg",
          photoAlt:
            "Water rushing through the narrow limestone gorge of Johnston Canyon.",
          videoUrl: "https://www.youtube.com/watch?v=XtsBPZHwWRA",
        },
      ],
    },
    {
      id: "rockies-base-2",
      name: "Phase 3: The Icefields Parkway & Jasper Base",
      description:
        "Move base north to Jasper National Park via one of the most scenic drives in the world.",
      altitudeNote:
        "Elevations range up to 2,000m on the Parkway. Layered clothing is essential.",
      blogs: [
        {
          title: "My 3-Day Family Vacation to Jasper National Park",
          url: "https://www.jasper.travel/blog/my-3-day-family-vacation-jasper-national-park/",
        },
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=fY9OojMyRrE",
        "https://www.youtube.com/watch?v=x0VlECGq66o",
        "https://www.youtube.com/watch?v=OnXFSPPvnmY",
      ],
      days: [
        {
          day: 12,
          title: "The Icefields Parkway Drive",
          summary:
            "Check out of Canmore and drive north toward Jasper. Stop at Peyto Lake, walk on the Athabasca Glacier, and enjoy the stunning 3.5-hour drive (which takes all day with stops). A perfect time to listen to a history podcast or dig into a good book.",
          location: "Icefields Parkway -> Jasper",
          travelMode: "car",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Peyto_Lake-Banff_NP-Canada.jpg",
          photoAlt:
            "The bright blue, wolf-head shaped waters of Peyto Lake viewed from above.",
          videoUrl: "https://www.youtube.com/watch?v=fY9OojMyRrE",
        },
        {
          day: 13,
          title: "Maligne Lake & Spirit Island",
          summary:
            "Take a boat cruise down Maligne Lake to the famous Spirit Island. On the way back, explore the deep limestone gorges of Maligne Canyon.",
          location: "Jasper National Park",
          travelMode: "boat",
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCJwOrLy-eiGhNRWQSGvPXqPOIa-h-v0_ug&s",
          photoAlt:
            "A small cluster of pine trees on Spirit Island surrounded by the tranquil Maligne Lake.",
          videoUrl: "https://www.youtube.com/watch?v=x0VlECGq66o",
        },
        {
          day: 14,
          title: "Athabasca Falls & Jasper Skytram",
          summary:
            "Visit the immensely powerful Athabasca Falls in the morning. In the afternoon, take the Jasper Skytram up Whistlers Mountain for views of the entire valley.",
          location: "Jasper",
          travelMode: "walk",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Athabasca_Falls_Jasper_National_Park.jpg",
          photoAlt:
            "Water thundering through the rocky gorge at Athabasca Falls.",
          videoUrl: "https://www.youtube.com/watch?v=OnXFSPPvnmY",
        },
      ],
    },
    {
      id: "rockies-base-3",
      name: "Phase 4: Golden Base & Yoho National Park",
      description:
        "Drive south to the town of Golden, BC. This base offers a quieter mountain town vibe and access to the dramatic Yoho National Park.",
      altitudeNote: "Dropping back down slightly into the Columbia Valley.",
      blogs: [
        {
          title: "Things to do in Yoho National Park",
          url: "https://thebanffblog.com/yoho-national-park/",
        },
      ],
      videoUrls: ["https://www.youtube.com/watch?v=Ng0MaAEkw64", "https://www.youtube.com/watch?v=dk03AuaOugg"],
      days: [
        {
          day: 15,
          title: "Southbound to Golden",
          summary:
            "Leave Jasper and drive south, cutting west past Lake Louise into British Columbia. Settle into your final Airbnb in Golden.",
          location: "Jasper -> Golden",
          travelMode: "car",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/fb/Goldenbc.jpg",
          photoAlt:
            "The Kicking Horse River winding through the mountainous landscape near Golden.",
          videoUrl:
            "https://www.youtube.com/watch?v=Ng0MaAEkw64",
        },
        {
          day: 16,
          title: "Emerald Lake & Takakkaw Falls",
          summary:
            "Spend your last full day exploring Yoho National Park. Rent a canoe on the peaceful Emerald Lake and stand at the base of the towering Takakkaw Falls.",
          location: "Yoho National Park",
          travelMode: "walk",
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLukiFPBCCye_VD2ufVL_zB7DS6sdgNpYlVg&s",
          photoAlt:
            "A red canoe floating on the emerald green waters of the lake in Yoho National Park.",
          videoUrl:
            "https://www.youtube.com/watch?v=dk03AuaOugg",
        },
        {
          day: 17,
          title: "Journey Home",
          summary:
            "Drive 2.5 hours east from Golden back to Calgary International Airport (YYC), returning the rental car and catching your flights home.",
          location: "Golden -> Calgary",
          travelMode: "car & flight",
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDhZKm-Qhf_GLXoXPyFvJR89Coi77m444Tw&s",
          note: "Factor in potential mountain traffic on Highway 1 when planning your airport departure time.",
          photoAlt:
            "The downtown skyline of Calgary with the Bow River in the foreground.",
        },
      ],
    },
  ],
};
export const allTripDays = nycRockiesTrip.phases.flatMap((phase) => phase.days);

if (allTripDays.length !== 17) {
  throw new Error(`Expected 17 itinerary days but found ${allTripDays.length}.`);
}

const daySequence = allTripDays.map((item) => item.day);
const expected = Array.from({ length: 17 }, (_, index) => index + 1);
if (daySequence.some((value, index) => value !== expected[index])) {
  throw new Error("Trip days must be sequential from Day 1 to Day 17.");
}
