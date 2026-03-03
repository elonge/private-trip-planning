import type { TripPlan } from "../types/trip";

export const nycMexicoTrip: TripPlan = {
  title: "City Lights to Ancient Sites: NYC & Mexico",
  subtitle:
    "A 17-day family adventure starting September 16, 2026. A girls' week in NYC followed by a 10-day full-family exploration of Mexico's vibrant capital and Caribbean coast when the boys arrive.",
  durationDays: 17,
  heroPhotoUrl:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_Bellas_Artes,_Mexico_City.jpg",
  heroPhotoAlt:
    "The iconic orange-domed Palacio de Bellas Artes in Mexico City against a clear sky.",
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
    { id: "cdmx", label: "Mexico City", lat: 19.4326, lng: -99.1332, order: 4 },
    {
      id: "cancun",
      label: "Cancun Airport",
      lat: 21.0367,
      lng: -86.877,
      order: 5,
    },
    { id: "tulum", label: "Tulum", lat: 20.2114, lng: -87.4654, order: 6 },
    {
      id: "chichen-itza",
      label: "Chichen Itza",
      lat: 20.6843,
      lng: -88.5678,
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
      id: "mexico-city-base",
      name: "Phase 2: The Boys Join - Mexico City Immersion",
      description:
        "Meet the boys and fly to CDMX. Base out of a spacious Airbnb in Roma Norte or Condesa to explore history, architecture, and incredible food.",
      altitudeNote:
        "Mexico City sits at 2,240m (7,350ft). Take the first day a bit slower to acclimate.",
      blogs: [
        {
          title: "Mexico City Travel Guide (Eternal Spring)",
          url: "https://www.eternalspringcdmx.com/p/mexico-city-6-things-to-do-with-kids-zoo-park-balloon-boats-bikes",
        },{
          title: "Mexico City with Kids (Lametayel)",
          url: "https://www.lametayel.co.il/posts/olpdnx",
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=gaiZ50ffN1U",
        "https://www.youtube.com/watch?v=FLI0qrAffKk",
        "https://www.youtube.com/watch?v=GSFRsn9sDb8",
        "https://www.youtube.com/watch?v=evwCuGhN2lU",
        "https://www.youtube.com/watch?v=dNOR8eAnnEQ"
      ],
      days: [
        {
          day: 8,
          title: "Reunion & Roma Norte",
          summary:
            "Meet the boys and fly to CDMX (Mexico City). Head to your Airbnb in the leafy Roma or Condesa neighborhoods, and enjoy a relaxed evening of tacos and churros.",
          location: "Mexico City (Roma/Condesa)",
          travelMode: "flight & walk",
          photoUrl:
            "https://lp-cms-production.imgix.net/2024-12/shutterstock1185090598-RFE.jpg?auto=format,compress&q=72&fit=crop",
          note: "Uber is highly recommended for safe, easy transport for a large family from the airport.",
          photoAlt:
            "The lush, tree-lined walking path of Avenida Amsterdam in the Condesa neighborhood.",
          videoUrl: "https://www.youtube.com/watch?v=FLI0qrAffKk",
        },
        {
          day: 9,
          title: "Historic Core & Futuristic Stacks",
          summary:
            "Explore the Zocalo, the National Palace, and the Aztec ruins of Templo Mayor. Later, wander through the massive, suspended bookshelves of the Biblioteca Vasconcelos—a true architectural marvel and a sanctuary to get lost in the shelves.",
          location: "Centro Historico, CDMX",
          travelMode: "walk",
          photoUrl:
            "https://mexicocity.cdmx.gob.mx/wp-content/uploads/2021/06/Palacio-nacional-cdmx.jpg",
          photoAlt:
            "The massive central plaza of Mexico City with the Metropolitan Cathedral in the background.",
          videoUrl: "https://www.youtube.com/watch?v=GSFRsn9sDb8",
        },
        {
          day: 10,
          title: "Pyramids of Teotihuacan",
          summary:
            "Take a morning trip out to the ancient city of Teotihuacan to walk the Avenue of the Dead and see the massive Pyramids of the Sun and Moon. Return to the city for a fun, loud evening at Lucha Libre.",
          location: "Teotihuacan",
          travelMode: "van",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/2020-02-11_Teotihuacan_la_Avenida_de_los_Muertos_y_la_Pir%C3%A1mide_del_Sol.jpg",
          photoAlt:
            "The colossal stone Pyramid of the Sun rising above the ancient ruins.",
          videoUrl:
            "https://www.youtube.com/watch?v=evwCuGhN2lU",
        },
        {
          day: 11,
          title: "Chapultepec Park & History",
          summary:
            "Spend the day in the sprawling Chapultepec Park. Visit the hilltop Chapultepec Castle and the world-renowned National Museum of Anthropology to dive deep into Mesoamerican history.",
          location: "Chapultepec, CDMX",
          travelMode: "walk",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d8/Puerta_de_los_leones_en_Chapultepec_2.jpg",
          photoAlt:
            "The elegant Chapultepec Castle situated on a hill overlooking the city.",
          videoUrl:
            "https://www.youtube.com/watch?v=x64kMCLVMW0",
        },
        {
          day: 12,
          title: "Coyoacán, Kahlo, & The Beautiful Game",
          summary:
            "Wander the colorful colonial streets of Coyoacán and visit the Frida Kahlo Museum (book well in advance). In the afternoon, catch the electric atmosphere of a soccer match or take a tour at the legendary Estadio Azteca.",
          location: "Coyoacan, CDMX",
          travelMode: "walk",
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuLrAqIKlCwiSyi2Ez3l-PiRncPOnoiu71A&s",
          optional: true,
          photoAlt: "The massive, iconic bowl of Estadio Azteca.",
          videoUrl:
            "https://www.youtube.com/watch?v=dNOR8eAnnEQ",
        },
      ],
    },
    {
      id: "oaxaca-base",
      name: "Phase 3: The Cultural Heart of Oaxaca",
      description:
        "Trade the massive metropolis for the artisanal, historic charm of Oaxaca City. Base out of the Centro Histórico to explore ancient ruins, petrified waterfalls, and world-renowned culinary traditions.",
      altitudeNote:
        "Oaxaca sits at roughly 1,555m (5,100ft), a comfortable step down from Mexico City.",
      blogs: [
        {
          title: "Oaxaca Travel Guide (Adventurous Kate)",
          url: "https://www.adventurouskate.com/things-to-do-in-oaxaca-mexico/",
        },
        {
          title: "The Ultimate Guide to Oaxaca, Mexico",
          url: "https://www.bontraveler.com/oaxaca-mexico/",
        }
      ],
      videoUrls: ["https://www.youtube.com/watch?v=wu30KBibysc","https://www.youtube.com/watch?v=lhRDcfuGMHc"],
      days: [
        {
          day: 13,
          title: "Flight South & Santo Domingo",
          summary:
            "Fly from CDMX (MEX) to Oaxaca (OAX). Check into your Airbnb in the Centro Histórico, then walk to the stunning Templo de Santo Domingo and the lively Zócalo.",
          location: "Oaxaca City",
          travelMode: "flight & walk",
          photoUrl:
            "https://oaxacatraveltips.com/wp-content/uploads/2025/08/santo-domingo-centro-de-oaxaca-1024x631.jpg",
          note: "A quick 1-hour flight is the most efficient way to move the family south.",
          photoAlt:
            "The ornate facade and plaza of the Templo de Santo Domingo at golden hour.",
          videoUrl:
            "https://www.youtube.com/watch?v=wu30KBibysc",
        },
        {
          day: 14,
          title: "Monte Albán & Markets",
          summary:
            "Take a short van ride to the majestic Zapotec ruins of Monte Albán. Return to the city for lunch at the bustling Mercado 20 de Noviembre to try tlayudas and mole.",
          location: "Monte Albán",
          travelMode: "van",
          photoUrl:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c0/84/eb/vista-monte-alban.jpg?w=800&h=500&s=1",
          photoAlt:
            "The massive, flat-topped ancient pyramids and grand plaza of Monte Albán.",
          videoUrl:
            "https://www.youtube.com/watch?v=lhRDcfuGMHc",
        },
        {
          day: 15,
          title: "Hierve el Agua & Mitla",
          summary:
            "Head east to marvel at the petrified waterfalls and natural infinity pools of Hierve el Agua, followed by a stop at the intricate geometric ruins of Mitla.",
          location: "Oaxaca Valley",
          travelMode: "car",
          photoUrl:
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/ab/7e/23.jpg",
          photoAlt:
            "Mineral-rich, petrified rock formations cascading down a cliff face like a waterfall.",
          videoUrl:
            "https://www.youtube.com/watch?v=JgT_5ZIampk",
        },
        {
          day: 16,
          title: "Ancient Books & Artisan Crafts",
          summary:
            "Step into the historic Biblioteca Francisco de Burgoa to view its incredible collection of rare antique books, then spend the afternoon visiting nearby artisan villages for woven rugs and black clay pottery.",
          location: "Oaxaca City & Surroundings",
          travelMode: "walk",
          photoUrl:
            "https://www.cervantesvirtual.com/images/banners_portales/open_graph/biblioteca-francisco-de-burgoa-875325.jpg",
          photoAlt:
            "Colorful, hand-woven traditional textiles hanging in a local market.",
          videoUrl:
            "https://www.youtube.com/shorts/fmGxs6q4_IA",
        },
        {
          day: 17,
          title: "Journey Home",
          summary:
            "Pack your bags, grab a final Oaxacan coffee, and take a short taxi ride to the Oaxaca International Airport (OAX) for your connecting flights home.",
          location: "Oaxaca -> Airport",
          travelMode: "car & flight",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/ad/Aeropuerto_Internacional_de_Puerto_Escondido.jpg",
          note: "OAX is a small, easy-to-navigate airport, making departures smooth for the family.",
          photoAlt:
            "The exterior architecture of the Oaxaca International Airport.",        },
      ],
    },
  ],
};
export const allTripDays = nycMexicoTrip.phases.flatMap((phase) => phase.days);

if (allTripDays.length !== 17) {
  throw new Error(`Expected 17 itinerary days but found ${allTripDays.length}.`);
}

const daySequence = allTripDays.map((item) => item.day);
const expected = Array.from({ length: 17 }, (_, index) => index + 1);
if (daySequence.some((value, index) => value !== expected[index])) {
  throw new Error("Trip days must be sequential from Day 1 to Day 17.");
}
