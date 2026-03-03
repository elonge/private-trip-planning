import type { TripPlan } from "../types/trip";

export const nycCanadaTrip: TripPlan = {
  title: "City Lights & Northern Nature: NYC to Eastern Canada",
  subtitle:
    "A 17-day family adventure starting September 16, 2026. A girls' week in NYC followed by a 10-day full-family nature road trip in Eastern Canada when the boys arrive.",
  durationDays: 17,
  heroPhotoUrl:
    "https://www.greatcanadiantrails.com/croppedimages/North-America/Canada/Mont-Tremblant-Park-984490-1100px.jpg?1628691115",
  heroPhotoAlt:
    "The bright neon lights of Times Square in New York City with bustling crowds.",
  routeStops: [
    { id: "nyc", label: "New York City", lat: 40.7128, lng: -74.0060, order: 1 },
    { id: "bear-mountain", label: "Bear Mountain", lat: 41.3126, lng: -73.9890, order: 2 },
    { id: "nyc-return", label: "New York City", lat: 40.7128, lng: -74.0060, order: 3 },
    { id: "montreal", label: "Montreal", lat: 45.5017, lng: -73.5673, order: 4 },
    { id: "mont-tremblant", label: "Mont Tremblant", lat: 46.1185, lng: -74.5962, order: 5 },
    { id: "quebec-city", label: "Quebec City", lat: 46.8139, lng: -71.2080, order: 6 },
    { id: "jacques-cartier", label: "Jacques-Cartier", lat: 47.3753, lng: -71.3533, order: 7 },
    { id: "tadoussac", label: "Tadoussac", lat: 48.1432, lng: -69.7162, order: 8 }
  ],
  phases: [
    {
      id: "nyc-girls-week",
      name: "Phase 1: NYC Highlights & Hudson Valley Nature",
      description: "One week exploring the iconic sights of NYC with the parents and two girls (13 & 17), including a scenic escape to nature.",
      altitudeNote: "Sea level, lots of walking around the city.",
      blogs: [
        { 
          title: "Things to do in NYC with teens (Mommy Gearest)", 
          url: "https://mommygearest.com/things-to-do-in-nyc-with-teens/" 
        },
        { 
          title: "Bear Mountain State Park Guide (Hike the Hudson Valley)", 
          url: "https://hikethehudsonvalley.com/hikes/bear-mountain-state-park/" 
        }
      ],
      videoUrls: [
        "https://www.youtube.com/shorts/qAMR2-EDA2c",
        "https://www.youtube.com/shorts/n2iuL9y74Gk",
        "https://www.youtube.com/shorts/4eAYUQXdJLI",
        "https://www.youtube.com/shorts/FTpjYmTQUcY",
        "https://www.youtube.com/watch?v=RyvFc_Aht8Y",
        "https://www.youtube.com/shorts/DAkWGRmTKCs",
      ],
      days: [
        {
          day: 1,
          title: "Arrival in the Big Apple",
          summary:
            "Arrive in NYC on Sept 16, settle into your Manhattan base, and take an evening walk through the dazzling lights of Times Square.",
          location: "Midtown Manhattan",
          travelMode: "walk",
          photoUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/38/c7/one-of-my-favourite-places.jpg?w=900&h=500&s=1",
          photoAlt:
            "Bright billboards and taxis in Times Square.",
          videoUrl: "https://www.youtube.com/results?search_query=times+square+walking+tour"
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
          videoUrl: "https://www.youtube.com/shorts/n2iuL9y74Gk"
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
          videoUrl: "https://www.youtube.com/shorts/4eAYUQXdJLI"
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
          videoUrl: "https://www.youtube.com/shorts/FTpjYmTQUcY"
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
          videoUrl: "https://www.youtube.com/watch?v=RyvFc_Aht8Y"
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
          photoAlt:
            "View of the Hudson River and Bear Mountain Bridge.",
          videoUrl: "https://www.youtube.com/shorts/DAkWGRmTKCs"
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
          photoAlt:
            "Theaters lining Broadway in the heart of NYC.",
          videoUrl: "https://www.youtube.com/shorts/OM7vOt2O6CU"
        }
      ]
    },
    {
      id: "canada-base-1",
      name: "Phase 2: The Boys Join - Laurentian Mountains Base",
      description: "Meet the boys and fly to Montreal, pick up a large rental vehicle, and head to a large Airbnb in Mont Tremblant.",
      altitudeNote: "Gentle mountain elevations, comfortable for all.",
      blogs: [
        { 
          title: "Fun Mont-Tremblant Summer Activities", 
          url: "https://mommygearest.com/mont-tremblant-summer/" 
        }
      ],
      videoUrls: [
        "https://www.youtube.com/shorts/nPBy7UNzmjI",
        "https://www.youtube.com/watch?v=kKLxzW4YJEI",
      ],
      days: [
        {
          day: 8,
          title: "Reunion & Road to Tremblant",
          summary:
            "Meet the boys at the airport, fly to Montreal, pick up the rental SUV/Van, and drive 1.5 hours to your Mont Tremblant Airbnb.",
          location: "Montreal -> Mont Tremblant",
          travelMode: "flight & car",
          photoUrl:
            "https://cdn2.belairdirect.com/2017/08/Tremblant_shutterstock_395667178.jpg",
          note: "Stock up on groceries in Montreal or Saint-Jovite before arriving at the Airbnb.",
          photoAlt:
            "The colorful pedestrian village of Mont Tremblant resort.",
          videoUrl: "https://www.youtube.com/watch?v=FJhFhbjWEtI"
        },
        {
          day: 9,
          title: "Mont Tremblant National Park",
          summary:
            "Spend the day in the national park hiking the La Corniche trail or trying the Via Ferrata on the Diable cliff.",
          location: "Mont-Tremblant National Park",
          travelMode: "hike",
          photoUrl:
            "https://www.greatcanadiantrails.com/croppedimages/North-America/Canada/Mont-Tremblant-Park-984490-1100px.jpg?1628691115",
          photoAlt:
            "A sweeping panoramic view of the lakes and forests in Mont-Tremblant.",
          videoUrl: "https://www.youtube.com/watch?v=kKLxzW4YJEI"
        },
        {
          day: 10,
          title: "Lakeside Adrenaline",
          summary:
            "Rent canoes or kayaks on Lac Tremblant, or let the teens and older boys try the downhill luge and zip-lining.",
          location: "Mont Tremblant",
          travelMode: "car",
          photoUrl:
            "https://res.cloudinary.com/manawa/image/private/f_auto,c_limit,w_3840,q_auto/b5485ac74c7cdcd214511475214dfb6c",
          optional: true,
          photoAlt:
            "The serene waters of Lac Tremblant surrounded by mountains.",
          videoUrl: "https://www.youtube.com/shorts/DAkWGRmTKCs"
        }
      ]
    },
    {
      id: "canada-base-2",
      name: "Phase 3: Quebec City & Jacques-Cartier Base",
      description: "Move base to the Quebec City area (perfect for a mix of European charm and deep wilderness).",
      altitudeNote: "Sea level to rolling hills.",
      blogs: [
        { 
          title: "Jacques-Cartier Destination Guide", 
          url: "https://jacques-cartier.com/en/destination/" 
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=OE995KsdooA",
        "https://www.youtube.com/shorts/J2HwJ8i6A_Y",
        "https://www.youtube.com/watch?v=uPPYSmNU_1k",
        "https://www.youtube.com/watch?v=JLIcogFIIn0"
      ],
      days: [
        {
          day: 11,
          title: "Drive to Quebec & Old City Charm",
          summary:
            "Drive ~3.5 hours to the Quebec City area. Check into your second Airbnb and spend the evening wandering the historic, cobblestone streets of Old Quebec.",
          location: "Mont Tremblant -> Quebec City",
          travelMode: "car",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Château_Frontenac_at_night,_Quebec_City,_Canada.jpg",
          photoAlt:
            "The majestic Château Frontenac towering over the historic lower town of Quebec City at night.",
          videoUrl: "https://www.youtube.com/results?search_query=old+quebec+city+walking+tour"
        },
        {
          day: 12,
          title: "Parc National de la Jacques-Cartier",
          summary:
            "Drive 45 mins north to this stunning glacial valley. The family can paddle canoes down the river while spotting wildlife or tackle the Wolves Trail.",
          location: "Jacques-Cartier National Park",
          travelMode: "canoe",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Jacques-Cartier_Provincial_Park,_Québec.jpg",
          photoAlt:
            "A deep, lush green glacial valley with a river running through the center.",
          videoUrl: "https://www.youtube.com/watch?v=fSEoIsfNNj8"
        },
        {
          day: 13,
          title: "Montmorency Falls & Île d'Orléans",
          summary:
            "Visit the spectacular Montmorency Falls (taller than Niagara), then drive across the bridge to Île d'Orléans for apple picking and local cider.",
          location: "Quebec Area",
          travelMode: "walk",
          photoUrl:
            "https://hotelchateaulaurier.com/wp-content/uploads/2021/06/tejas-shah-vjin5kwcz18-unsplash.jpg",
          photoAlt:
            "The powerful Montmorency Falls crashing into the basin below.",
          videoUrl: "https://www.youtube.com/results?search_query=montmorency+falls+quebec"
        }
      ]
    },
    {
      id: "canada-base-3",
      name: "Phase 4: Charlevoix & The Fjord Base",
      description: "The final stretch deeper into nature, basing in the dramatic landscapes of Charlevoix near the St. Lawrence River.",
      altitudeNote: "Coastal and mountainous mix.",
      blogs: [
        { 
          title: "Whale Watching in Quebec", 
          url: "https://www.quebecmaritime.ca/en/blog/whale-watching" 
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=4m7O9ZVIDVY",
        "https://www.youtube.com/watch?v=Pj5RXctojb8",
        "https://www.youtube.com/watch?v=o27WNIYX5j8",

      ],
      days: [
        {
          day: 14,
          title: "Scenic Route to Charlevoix",
          summary:
            "Drive the picturesque Route 362 to your final Airbnb in the Charlevoix region (e.g., Baie-Saint-Paul or La Malbaie). Explore the local artisan shops.",
          location: "Quebec City -> Charlevoix",
          travelMode: "car",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Baie-Saint-Paul.jpg",
          photoAlt:
            "The quaint, artistic village of Baie-Saint-Paul nestled in a valley.",
          videoUrl: "https://www.youtube.com/results?search_query=charlevoix+quebec+road+trip"
        },
        {
          day: 15,
          title: "Tadoussac Whale Watching",
          summary:
            "Drive up to Tadoussac for an unforgettable Zodiac whale-watching tour where the Saguenay Fjord meets the St. Lawrence.",
          location: "Tadoussac",
          travelMode: "boat",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Whale_watching_Tadoussac_04.jpg",
          note: "Dress very warmly, as the wind on the water is cold even in September.",
          photoAlt:
            "A minke whale breaching the surface of the waters near Tadoussac.",
          videoUrl: "https://www.youtube.com/results?search_query=tadoussac+whale+watching"
        },
        {
          day: 16,
          title: "Hautes-Gorges-de-la-Rivière-Malbaie",
          summary:
            "Tackle the incredible Acropole des Draveurs hike for towering fjord views, or opt for a scenic riverboat cruise in the valley if legs are tired.",
          location: "Charlevoix Hinterland",
          travelMode: "hike",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Hautes-Gorges-de-la-Rivière-Malbaie.jpg",
          photoAlt:
            "High, dramatic rock faces plunging into the Malbaie River.",
          videoUrl: "https://www.youtube.com/results?search_query=hautes+gorges+de+la+riviere+malbaie"
        },
        {
          day: 17,
          title: "Journey Home",
          summary:
            "Pack up the car and drive back to Quebec City (YQB) or Montreal (YUL) for the family's flight home, carrying incredible memories.",
          location: "Charlevoix -> Airport",
          travelMode: "car & flight",
          photoUrl:
            "https://s28477.pcdn.co/wp-content/uploads/2019/07/YUL_NewFront.jpg",
          note: "Ensure plenty of time for the drive back to the airport.",
          photoAlt:
            "Planes parked at the gates of a busy international airport.",
          videoUrl: "https://www.youtube.com/results?search_query=montreal+airport+departure"
        }
      ]
    }
  ],
};
export const allTripDays = nycCanadaTrip.phases.flatMap((phase) => phase.days);

if (allTripDays.length !== 17) {
  throw new Error(`Expected 17 itinerary days but found ${allTripDays.length}.`);
}

const daySequence = allTripDays.map((item) => item.day);
const expected = Array.from({ length: 17 }, (_, index) => index + 1);
if (daySequence.some((value, index) => value !== expected[index])) {
  throw new Error("Trip days must be sequential from Day 1 to Day 17.");
}
