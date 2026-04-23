import { url } from "inspector";
import type { TripPlan } from "../types/trip";

// export const nycMexicoTrip: TripPlan = {
//   title: "City Lights to Ancient Sites: NYC & Mexico",
//   subtitle:
//     "A 17-day family adventure starting September 16, 2026. A girls' week in NYC followed by a 10-day full-family exploration of Mexico's vibrant capital and Caribbean coast when the boys arrive.",
//   durationDays: 17,
//   heroPhotoUrl:
//     "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_Bellas_Artes,_Mexico_City.jpg",
//   heroPhotoAlt:
//     "The iconic orange-domed Palacio de Bellas Artes in Mexico City against a clear sky.",
//   routeStops: [
//     { id: "nyc", label: "New York City", lat: 40.7128, lng: -74.006, order: 1 },
//     {
//       id: "bear-mountain",
//       label: "Bear Mountain",
//       lat: 41.3126,
//       lng: -73.989,
//       order: 2,
//     },
//     {
//       id: "nyc-return",
//       label: "New York City",
//       lat: 40.7128,
//       lng: -74.006,
//       order: 3,
//     },
//     { id: "cdmx", label: "Mexico City", lat: 19.4326, lng: -99.1332, order: 4 },
//     {
//       id: "cancun",
//       label: "Cancun Airport",
//       lat: 21.0367,
//       lng: -86.877,
//       order: 5,
//     },
//     { id: "tulum", label: "Tulum", lat: 20.2114, lng: -87.4654, order: 6 },
//     {
//       id: "chichen-itza",
//       label: "Chichen Itza",
//       lat: 20.6843,
//       lng: -88.5678,
//       order: 7,
//     },
//   ],
//   phases: [
//     {
//       id: "nyc-girls-week",
//       name: "Phase 1: NYC Highlights & Hudson Valley Nature",
//       description:
//         "One week exploring the iconic sights of NYC with the parents and two girls (13 & 17), including a scenic escape to nature.",
//       altitudeNote: "Sea level, lots of walking around the city.",
//       blogs: [
//         {
//           title: "Things to do in NYC with teens (Mommy Gearest)",
//           url: "https://mommygearest.com/things-to-do-in-nyc-with-teens/",
//         },
//         {
//           title: "Bear Mountain State Park Guide (Hike the Hudson Valley)",
//           url: "https://hikethehudsonvalley.com/hikes/bear-mountain-state-park/",
//         },
//       ],
//       videoUrls: [
//         "https://www.youtube.com/watch?v=XnJZ90ha5oM",
//         "https://www.youtube.com/shorts/n2iuL9y74Gk",
//         "https://www.youtube.com/shorts/4eAYUQXdJLI",
//         "https://www.youtube.com/shorts/FTpjYmTQUcY",
//         "https://www.youtube.com/watch?v=RyvFc_Aht8Y",
//         "https://www.youtube.com/watch?v=TXiT9ci7Xsg",
//       ],
//       days: [
//         {
//           day: 1,
//           title: "Arrival in the Big Apple",
//           summary:
//             "Arrive in NYC on Sept 16, settle into your Manhattan base, and take an evening walk through the dazzling lights of Times Square.",
//           location: "Midtown Manhattan",
//           travelMode: "walk",
//           photos: [
//             {
//               url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/38/c7/one-of-my-favourite-places.jpg?w=900&h=500&s=1",
//               alt: "Bright billboards and taxis in Times Square."
//             },
//             {
//               url: "https://commons.wikimedia.org/wiki/Special:FilePath/Central_Park_New_York_City_New_York_23_cropped.jpg",
//               alt: "A scenic bridge surrounded by autumn trees in Central Park."
//             },
//             {
//               url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/ff/73/caption.jpg?w=1200&h=-1&s=1",
//               alt: "The Gothic arches and suspension cables of the Brooklyn Bridge."
//             }
//           ],
//           photoUrl:
//             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/38/c7/one-of-my-favourite-places.jpg?w=900&h=500&s=1",
//           photoAlt: "Bright billboards and taxis in Times Square.",
//           videoUrl: "https://www.youtube.com/watch?v=XnJZ90ha5oM",
//         },
//         {
//           day: 2,
//           title: "Central Park & Museums",
//           summary:
//             "Rent bikes to explore Central Park in the morning, followed by a visit to the American Museum of Natural History.",
//           location: "Central Park, NYC",
//           travelMode: "bike",
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Central_Park_New_York_City_New_York_23_cropped.jpg",
//           photoAlt:
//             "A scenic bridge surrounded by autumn trees in Central Park.",
//           videoUrl: "https://www.youtube.com/shorts/n2iuL9y74Gk",
//         },
//         {
//           day: 3,
//           title: "Downtown History & Views",
//           summary:
//             "Visit the 9/11 Memorial, explore the Financial District, and see the Oculus.",
//           location: "Lower Manhattan",
//           travelMode: "walk",
//           photoUrl:
//             "https://911groundzero.com/wp-content/uploads/2017/06/arthur-brognoli-bByNewj8uBI-unsplash-1-scaled-1-768x512.jpg",
//           photoAlt:
//             "The striking modern white architecture of the Oculus transportation hub.",
//           videoUrl: "https://www.youtube.com/shorts/4eAYUQXdJLI",
//         },
//         {
//           day: 4,
//           title: "Brooklyn Bridge & DUMBO",
//           summary:
//             "Walk across the iconic Brooklyn Bridge, grab pizza in DUMBO, and browse vintage shops.",
//           location: "Brooklyn, NYC",
//           travelMode: "walk",
//           photoUrl:
//             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/02/ff/73/caption.jpg?w=1200&h=-1&s=1",
//           photoAlt:
//             "The Gothic arches and suspension cables of the Brooklyn Bridge.",
//           videoUrl: "https://www.youtube.com/shorts/FTpjYmTQUcY",
//         },
//         {
//           day: 5,
//           title: "High Line & Hudson Yards",
//           summary:
//             "Walk the elevated High Line park, grab lunch at Chelsea Market, and view the city from the Edge at Hudson Yards.",
//           location: "West Side, NYC",
//           travelMode: "walk",
//           photoUrl:
//             "https://happier.place/wp-content/uploads/2018/10/HighLineNYC_HappierPlace_14_M.jpg?x77079",
//           photoAlt:
//             "The High Line elevated park with lush greenery and modern buildings.",
//           videoUrl: "https://www.youtube.com/watch?v=RyvFc_Aht8Y",
//         },
//         {
//           day: 6,
//           title: "Nature Escape: Bear Mountain",
//           summary:
//             "Rent a car for the day and drive ~1 hour north to Bear Mountain State Park for hiking, lake views, and a break from the city.",
//           location: "Bear Mountain State Park, NY",
//           travelMode: "car",
//           photoUrl:
//             "https://lh3.googleusercontent.com/proxy/e9U0oVnzm6fBKtzBhxyNPqmS0ID2lpA9AbCuDDVpwAp9KMlw_f0t-L9M-fH-5sSqODVYxCzzWgNnCoJ1zAxjDX63kHxCDrkIp2aI_H4Egd6FY976BqA",
//           note: "A great transition to nature before the Canada trip.",
//           photoAlt: "View of the Hudson River and Bear Mountain Bridge.",
//           videoUrl: "https://www.youtube.com/watch?v=TXiT9ci7Xsg",
//         },
//         {
//           day: 7,
//           title: "Broadway & Farewell NYC",
//           summary:
//             "Enjoy a relaxed morning shopping in SoHo and catch a Broadway matinee or evening show before packing up.",
//           location: "Theater District, NYC",
//           travelMode: "walk",
//           photoUrl:
//             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8a/c7/ff/broadway.jpg?w=1200&h=-1&s=1",
//           photoAlt: "Theaters lining Broadway in the heart of NYC.",
//           videoUrl: "https://www.youtube.com/shorts/OM7vOt2O6CU",
//         },
//       ],
//     },
//     {
//       id: "mexico-city-base",
//       name: "Phase 2: The Boys Join - Mexico City Immersion",
//       description:
//         "Meet the boys and fly to CDMX. Base out of a spacious Airbnb in Roma Norte or Condesa to explore history, architecture, and incredible food.",
//       altitudeNote:
//         "Mexico City sits at 2,240m (7,350ft). Take the first day a bit slower to acclimate.",
//       blogs: [
//         {
//           title: "Mexico City Travel Guide (Eternal Spring)",
//           url: "https://www.eternalspringcdmx.com/p/mexico-city-6-things-to-do-with-kids-zoo-park-balloon-boats-bikes",
//         },{
//           title: "Mexico City with Kids (Lametayel)",
//           url: "https://www.lametayel.co.il/posts/olpdnx",
//         }
//       ],
//       videoUrls: [
//         "https://www.youtube.com/watch?v=gaiZ50ffN1U",
//         "https://www.youtube.com/watch?v=FLI0qrAffKk",
//         "https://www.youtube.com/watch?v=GSFRsn9sDb8",
//         "https://www.youtube.com/watch?v=evwCuGhN2lU",
//         "https://www.youtube.com/watch?v=dNOR8eAnnEQ"
//       ],
//       days: [
//         {
//           day: 8,
//           title: "Reunion & Roma Norte",
//           summary:
//             "Meet the boys and fly to CDMX (Mexico City). Head to your Airbnb in the leafy Roma or Condesa neighborhoods, and enjoy a relaxed evening of tacos and churros.",
//           location: "Mexico City (Roma/Condesa)",
//           travelMode: "flight & walk",
//           photoUrl:
//             "https://lp-cms-production.imgix.net/2024-12/shutterstock1185090598-RFE.jpg?auto=format,compress&q=72&fit=crop",
//           note: "Uber is highly recommended for safe, easy transport for a large family from the airport.",
//           photoAlt:
//             "The lush, tree-lined walking path of Avenida Amsterdam in the Condesa neighborhood.",
//           videoUrl: "https://www.youtube.com/watch?v=FLI0qrAffKk",
//         },
//         {
//           day: 9,
//           title: "Historic Core & Futuristic Stacks",
//           summary:
//             "Explore the Zocalo, the National Palace, and the Aztec ruins of Templo Mayor. Later, wander through the massive, suspended bookshelves of the Biblioteca Vasconcelos—a true architectural marvel and a sanctuary to get lost in the shelves.",
//           location: "Centro Historico, CDMX",
//           travelMode: "walk",
//           photoUrl:
//             "https://mexicocity.cdmx.gob.mx/wp-content/uploads/2021/06/Palacio-nacional-cdmx.jpg",
//           photoAlt:
//             "The massive central plaza of Mexico City with the Metropolitan Cathedral in the background.",
//           videoUrl: "https://www.youtube.com/watch?v=GSFRsn9sDb8",
//         },
//         {
//           day: 10,
//           title: "Pyramids of Teotihuacan",
//           summary:
//             "Take a morning trip out to the ancient city of Teotihuacan to walk the Avenue of the Dead and see the massive Pyramids of the Sun and Moon. Return to the city for a fun, loud evening at Lucha Libre.",
//           location: "Teotihuacan",
//           travelMode: "van",
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/3/3b/2020-02-11_Teotihuacan_la_Avenida_de_los_Muertos_y_la_Pir%C3%A1mide_del_Sol.jpg",
//           photoAlt:
//             "The colossal stone Pyramid of the Sun rising above the ancient ruins.",
//           videoUrl:
//             "https://www.youtube.com/watch?v=evwCuGhN2lU",
//         },
//         {
//           day: 11,
//           title: "Chapultepec Park & History",
//           summary:
//             "Spend the day in the sprawling Chapultepec Park. Visit the hilltop Chapultepec Castle and the world-renowned National Museum of Anthropology to dive deep into Mesoamerican history.",
//           location: "Chapultepec, CDMX",
//           travelMode: "walk",
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/d/d8/Puerta_de_los_leones_en_Chapultepec_2.jpg",
//           photoAlt:
//             "The elegant Chapultepec Castle situated on a hill overlooking the city.",
//           videoUrl:
//             "https://www.youtube.com/watch?v=x64kMCLVMW0",
//         },
//         {
//           day: 12,
//           title: "Coyoacán, Kahlo, & The Beautiful Game",
//           summary:
//             "Wander the colorful colonial streets of Coyoacán and visit the Frida Kahlo Museum (book well in advance). In the afternoon, catch the electric atmosphere of a soccer match or take a tour at the legendary Estadio Azteca.",
//           location: "Coyoacan, CDMX",
//           travelMode: "walk",
//           photoUrl:
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuLrAqIKlCwiSyi2Ez3l-PiRncPOnoiu71A&s",
//           optional: true,
//           photoAlt: "The massive, iconic bowl of Estadio Azteca.",
//           videoUrl:
//             "https://www.youtube.com/watch?v=dNOR8eAnnEQ",
//         },
//       ],
//     },
//     {
//       id: "oaxaca-base",
//       name: "Phase 3: The Cultural Heart of Oaxaca",
//       description:
//         "Trade the massive metropolis for the artisanal, historic charm of Oaxaca City. Base out of the Centro Histórico to explore ancient ruins, petrified waterfalls, and world-renowned culinary traditions.",
//       altitudeNote:
//         "Oaxaca sits at roughly 1,555m (5,100ft), a comfortable step down from Mexico City.",
//       blogs: [
//         {
//           title: "Oaxaca Travel Guide (Adventurous Kate)",
//           url: "https://www.adventurouskate.com/things-to-do-in-oaxaca-mexico/",
//         },
//         {
//           title: "The Ultimate Guide to Oaxaca, Mexico",
//           url: "https://www.bontraveler.com/oaxaca-mexico/",
//         }
//       ],
//       videoUrls: ["https://www.youtube.com/watch?v=wu30KBibysc","https://www.youtube.com/watch?v=lhRDcfuGMHc"],
//       days: [
//         {
//           day: 13,
//           title: "Flight South & Santo Domingo",
//           summary:
//             "Fly from CDMX (MEX) to Oaxaca (OAX). Check into your Airbnb in the Centro Histórico, then walk to the stunning Templo de Santo Domingo and the lively Zócalo.",
//           location: "Oaxaca City",
//           travelMode: "flight & walk",
//           photoUrl:
//             "https://oaxacatraveltips.com/wp-content/uploads/2025/08/santo-domingo-centro-de-oaxaca-1024x631.jpg",
//           note: "A quick 1-hour flight is the most efficient way to move the family south.",
//           photoAlt:
//             "The ornate facade and plaza of the Templo de Santo Domingo at golden hour.",
//           videoUrl:
//             "https://www.youtube.com/watch?v=wu30KBibysc",
//         },
//         {
//           day: 14,
//           title: "Monte Albán & Markets",
//           summary:
//             "Take a short van ride to the majestic Zapotec ruins of Monte Albán. Return to the city for lunch at the bustling Mercado 20 de Noviembre to try tlayudas and mole.",
//           location: "Monte Albán",
//           travelMode: "van",
//           photoUrl:
//             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c0/84/eb/vista-monte-alban.jpg?w=800&h=500&s=1",
//           photoAlt:
//             "The massive, flat-topped ancient pyramids and grand plaza of Monte Albán.",
//           videoUrl:
//             "https://www.youtube.com/watch?v=lhRDcfuGMHc",
//         },
//         {
//           day: 15,
//           title: "Hierve el Agua & Mitla",
//           summary:
//             "Head east to marvel at the petrified waterfalls and natural infinity pools of Hierve el Agua, followed by a stop at the intricate geometric ruins of Mitla.",
//           location: "Oaxaca Valley",
//           travelMode: "car",
//           photoUrl:
//             "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/ab/7e/23.jpg",
//           photoAlt:
//             "Mineral-rich, petrified rock formations cascading down a cliff face like a waterfall.",
//           videoUrl:
//             "https://www.youtube.com/watch?v=JgT_5ZIampk",
//         },
//         {
//           day: 16,
//           title: "Ancient Books & Artisan Crafts",
//           summary:
//             "Step into the historic Biblioteca Francisco de Burgoa to view its incredible collection of rare antique books, then spend the afternoon visiting nearby artisan villages for woven rugs and black clay pottery.",
//           location: "Oaxaca City & Surroundings",
//           travelMode: "walk",
//           photoUrl:
//             "https://www.cervantesvirtual.com/images/banners_portales/open_graph/biblioteca-francisco-de-burgoa-875325.jpg",
//           photoAlt:
//             "Colorful, hand-woven traditional textiles hanging in a local market.",
//           videoUrl:
//             "https://www.youtube.com/shorts/fmGxs6q4_IA",
//         },
//         {
//           day: 17,
//           title: "Journey Home",
//           summary:
//             "Pack your bags, grab a final Oaxacan coffee, and take a short taxi ride to the Oaxaca International Airport (OAX) for your connecting flights home.",
//           location: "Oaxaca -> Airport",
//           travelMode: "car & flight",
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/a/ad/Aeropuerto_Internacional_de_Puerto_Escondido.jpg",
//           note: "OAX is a small, easy-to-navigate airport, making departures smooth for the family.",
//           photoAlt:
//             "The exterior architecture of the Oaxaca International Airport.",        },
//       ],
//     },
//   ],
// };
export const hollandMexicoTrip: TripPlan = {
  title: "From Frisian Lakes to Mexican Pyramids",
  subtitle:
    "A 17-day cross-continental family adventure. Start with 5 days exploring the aquatic wildlife and island magic of Holland's North, followed by a 12-day immersion into Mexico's vibrant capital and the stunning nature of Chiapas.",
  durationDays: 17,
  heroPhotoUrl:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_Bellas_Artes,_Mexico_City.jpg",
  heroPhotoAlt:
    "The iconic orange-domed Palacio de Bellas Artes in Mexico City against a clear sky.",
  routeStops: [
    { id: "heeg", label: "Heeg (Friesland Base)", lat: 52.9686, lng: 5.6067, order: 1 },
    { id: "leeuwarden", label: "Leeuwarden", lat: 53.2012, lng: 5.7999, order: 2 },
    { id: "cdmx-1", label: "Mexico City", lat: 19.4326, lng: -99.1332, order: 3 },
    { id: "san-cristobal", label: "San Cristóbal de las Casas", lat: 16.7370, lng: -92.6376, order: 4 },
    { id: "cdmx-2", label: "Mexico City (Return)", lat: 19.4326, lng: -99.1332, order: 5 }
  ],
  phases: [
    {
      id: "friesland-hub",
      name: "Phase 1: Frisian Lake District Base",
      description: "Based in Heeg, exploring the province's best family attractions within a 60-minute drive.",
      altitudeNote: "Sea level, flat terrain, perfect for cycling and boating.",
      blogs: [
        {
          title: "VVV Waterland van Friesland: Tips for Kids",
          url: "https://www.waterlandvanfriesland.nl/en/inspiration/tips-for-kids"
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=GAm04AP6nTI",
        "https://www.youtube.com/watch?v=CTRXKZ4-xWs"
      ],
      days: [
                {
          day: 1,
          title: "Welcome to Holland",
          summary:
            "Arrive in Amsterdam Schiphol Airport and take a scenic 1.5-hour drive to Heeg, a charming lakeside village in Friesland. Settle into your accommodation and enjoy a relaxing evening by the water.",
          location: "Heeg",
          travelMode: "flight",
          photos: [
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Amsterdam_Schiphol_Airport_entrance.jpg",
              alt: "The entrance of Amsterdam Schiphol Airport."
            },
            {
              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/79/6e/5a/afsluitdijk.jpg?w=1200&h=700&s=1",
              alt: "The Afsluitdijk, a major causeway in the Netherlands."
            },
          ],
          videoUrl: "https://www.youtube.com/watch?v=CTRXKZ4-xWs"
        },
        {
          day: 2,
          title: "Leeuwarden: Culture & Wildlife",
          summary:
            "Visit the Nature Museum Fryslân for the 'Underwater Safari' and explore AquaZoo Friesland to walk among lemurs and see polar bears.",
          location: "Leeuwarden",
          travelMode: "car",
          photos: [
            {
              url: "https://assets.plaece.nl/odp-friesland/image/0336f01bbef0a6a891db3f3d322e57ac440bce45_0198b4a9-869f-70c4-ad8d-a9d73d6ef48c.jpg",
              alt: "A child peering through the glass at the underwater exhibits in the Nature Museum Fryslân."
            },
            {
              url: "https://assets.plaece.nl/thumb/unejsX8w_gxRu6NS8O00_dp508vKD0rgm0GFtu0NfEo/resizing_type:fit/width:650/height:366/gravity:sm/aHR0cHM6Ly9hc3NldHMucGxhZWNlLm5sL29kcC1sZWV1d2FyZGVuL2ltYWdlL2xyLW9uZGVyd2F0ZXJzYWZhcmktMTJfNDA5NDczNjIyMi5qcGVn.jpeg",
              alt: "Animals roaming at AquaZoo Leeuwarden."
            },
            {
              url: "https://cdn.museum.nl/assets/906af423-1c12-44c3-b5d7-f4b7bbed88d8?w=3000&c=f4689782de3eaf46349bd1249a38765fe7cb327f6d7e6847eea02310ee852389",
              alt: "A family enjoying the interactive underwater exhibits at the Nature Museum Fryslân."
            }
          ],
          videoUrl: "https://www.youtube.com/watch?v=CTRXKZ4-xWs"
        },
        {
          day: 3,
          title: "Sneek & Franeker: Stars & Ships",
          summary:
            "Marvel at the world's oldest working planetarium in Franeker (UNESCO World Heritage) and discover maritime history at the children's museum in Sneek.",
          location: "Franeker & Sneek",
          travelMode: "car",
          photos: [
            {
              url: "https://commons.wikimedia.org/wiki/Special:FilePath/Planetarium_Eise_Eisinga_in_Franeker.jpg?width=1200",
              alt: "The intricate mechanical ceiling of the Eise Eisinga Planetarium."
            },
            {
              url: "https://amsterdamian.com/wp-content/uploads/2024/08/DSC01118-7.jpg",
              alt: "The historic harbor and boats of Sneek, a charming Frisian town."
            },
            {
              url: "https://c8.alamy.com/comp/AKPJM1/sneek-netherlands-friesland-fryslan-historic-history-town-city-holland-AKPJM1.jpg",
              alt: "The picturesque canals and historic buildings of Sneek, a key stop in the Frisian lake district."
            }
          ],
        },
        {
          day: 4,
          title: "Terherne: Adventure on the Water",
          summary:
            "Head to Kameleon Avonturen Eiland for mud trails, raft building, and old-fashioned outdoor play. Bring a change of clothes!",
          location: "Terherne",
          travelMode: "car",
          photoUrl:
            "https://www.gezinopreis.nl/wp-content/uploads/2016/09/kameleon-eiland-01.jpg",
          photoAlt: "The peaceful waterways of Terherne.",
          note: "Very high chance of getting wet/muddy. Recommended for ages 6+."
        },
        {
          day: 5,
          title: "Ameland: Island Escape",
          summary:
            "Take the ferry from Holwerd to Ameland. Rent bikes to see the red lighthouse, visit expansive beaches, and try mudflat hiking.",
          location: "Ameland Island",
          travelMode: "ferry & bike",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Vuurtoren_Ameland.jpg?width=800",
          photoAlt: "The bright red and white lighthouse of Ameland."
        },
        {
          day: 6,
          title: "Appelscha: Forests & Thrills",
          summary:
            "Enjoy the all-inclusive Duinen Zathe Amusement Park, then explore the massive sand dunes of Drents-Friese Wold National Park.",
          location: "Appelscha",
          travelMode: "car",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Aekingerzand_sand_dunes_2.jpg?width=1200",
          photoAlt: "Sandy dunes and heathland in the Drents-Friese Wold National Park.",
          note: "Amusement park covers all rides, food and drink."
        }
      ]
    },
    {
      id: "mexico-city-1",
      name: "Phase 2: Mexico City Highlights",
      description: "Settle into the high-altitude metropolis, exploring deep history, vibrant markets, and world-class museums.",
      altitudeNote: "Mexico City sits at 2,240m (7,350ft). Take the first day a bit slower.",
      blogs: [],
      videoUrls: [
        "https://www.youtube.com/watch?v=GSFRsn9sDb8",
        "https://www.youtube.com/watch?v=evwCuGhN2lU"
      ],
      days: [
        {
          day: 7,
          title: "Welcome to Mexico City",
          summary:
            "Fly to CDMX and settle into a recommended neighborhood like Polanco, Condesa, or Roma. If time permits, visit the green lungs of the city, Bosque de Chapultepec.",
          location: "Mexico City",
          travelMode: "flight & car",
          photos: [
            {
              url: "https://visitmexico.com/media/usercontent/6890d9e18e149-chapultepec_carusel_gmxdot_jpeg",
              alt: "El bosque de Chapultepec."
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Puerta_de_los_leones_en_Chapultepec_2.jpg",
              alt: "Chapultepec - Wikipedia."
            },
            {
              url: "https://bridgesandballoons.com/Images/2016/04/Things_to_do_in_Condesa-6.jpg",
              alt: "Condesa neighborhood - Bridges and Balloons."
            }
          ],
          photoUrl:
            "https://lp-cms-production.imgix.net/2024-12/shutterstock1185090598-RFE.jpg?auto=format,compress&q=72&fit=crop",
          note: "Uber is the safest and easiest way to travel from the airport (takes 45 mins to 2 hours).",
          photoAlt: "The lush, tree-lined walking path in the Condesa neighborhood."
        },
        {
          day: 8,
          title: "Historic Core Tour",
          summary:
            "Take a guided tour of the city center. Visit the Diego Rivera murals, the Zocalo, Templo Mayor ruins, and Palacio de Bellas Artes. Lunch at Azul Historico for tortilla soup.",
          location: "Centro Historico",
          travelMode: "walk & Guide",
          photos: [
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Palacio_Nacional_Murals_view.JPG",
              alt: "Diego Rivera murals at the Palacio Nacional."
            },
            {
              url: "https://mexicocity.cdmx.gob.mx/wp-content/uploads/2021/06/Palacio-nacional-cdmx.jpg",
              alt: "The massive central plaza of Mexico City with the Metropolitan Cathedral in the background."
            },
            {
              url: "https://www.historyhit.com/app/uploads/2020/11/Templo-Mayor.jpg",
              alt: "The ancient Aztec ruins of Templo Mayor in the heart of Mexico City."
            },
            {
              url: "https://globetotting.com/wp-content/uploads/2025/06/1-2.jpg",
              alt: "A view of the historic center of Mexico City."
            },
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Palacio_de_Bellas_Artes_-_Innenraum_1.jpg",
              alt: "The iconic Palacio de Bellas Artes in Mexico City."
            }
          ],
          photoUrl:
            "https://mexicocity.cdmx.gob.mx/wp-content/uploads/2021/06/Palacio-nacional-cdmx.jpg",
          photoAlt: "The massive central plaza of Mexico City with the Metropolitan Cathedral in the background."
        },
        {
          day: 9,
          title: "Museums & Gondolas",
          summary:
            "A packed Saturday! Visit the Anthropology Museum (1.5h) and Soumaya Museum. Shop at the exclusive weekend market El Bazar Sábado, see Frida Kahlo's Blue House in Coyoacán, and ride the Xochimilco gondolas. Dinner at Gabs.",
          location: "Coyoacán & Xochimilco",
          travelMode: "car & Guide",
          photos: [
            {
              url: "https://q-xx.bstatic.com/xdata/images/xphoto/800x800/204450206.jpg?k=188d4d616110daaabd23a311eb34b787db0be5aa0d2f28e4a1f4e46b788b3e56&o=",
              alt: "National Anthropology Museum."
            },
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuLrAqIKlCwiSyi2Ez3l-PiRncPOnoiu71A&s",
              alt: "The bright blue exterior of Frida Kahlo's house."
            },
            {
              url: "https://media.tacdn.com/media/attractions-splice-spp-360x240/16/3a/29/be.jpg",
              alt: "Soumaya Museum."
            },
            {
              url: "https://images.squarespace-cdn.com/content/v1/56c13cc00442627a08632989/e6feb067-a7de-4157-9d89-11d4d36ff40e/bazarsabadoresto.JPG",
              alt: "El Bazar Sábado market."
            },
            {
              url: "https://slightnorth.com/wp-content/uploads/2019/08/roberto-carlos-roman-_N6BAsuUqBc-unsplash-1280x640.jpg",
              alt: "Colorful gondolas in the canals of Xochimilco."
            }
          ],
          photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuLrAqIKlCwiSyi2Ez3l-PiRncPOnoiu71A&s",
          photoAlt: "The bright blue exterior of Frida Kahlo's house."
        },
        {
          day: 10,
          title: "Teotihuacan Pyramids & Guadalupe",
          summary:
            "Early guided start (leave by 5 AM if choosing the hot air balloon) to explore the colossal Teotihuacan pyramids. Focus on the Sun Pyramid (Gate 5) and Quetzalcoatl. Visit the Basilica of Guadalupe on the return.",
          location: "Teotihuacan",
          travelMode: "van & Guide",
          photos: [
            {
              url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/2020-02-11_Teotihuacan_la_Avenida_de_los_Muertos_y_la_Pir%C3%A1mide_del_Sol.jpg",
              alt: "The colossal stone Pyramid of the Sun rising above the ancient ruins."
            },
            {
              url: "https://cdn.mos.cms.futurecdn.net/6Txsk2q5k3Hxho7cVhdrbV.jpg",
              alt: "Teotihuacan pyramids."
            },
            {
              url: "https://culturestraveled.com/wp-content/uploads/2023/07/mexico-city-hot-air-balloon-teotihuacan-1024x576.jpg",
              alt: "The Pyramid of the Moon at Teotihuacan."
            },
            {
              url: "https://cdn-imgix.headout.com/media/images/2bf028f3ad9495a6bc7252361c85cf95-32246-15.jpg?auto=compress%2Cformat&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop",
              alt: "The Pyramid of Quetzalcoatl at Teotihuacan."
            },
              {
              url: "https://cdn.sanity.io/images/nxpteyfv/goguides/2d4e8ea19d1e8ba0d48b79673fb076d28f90e8a9-1600x1067.jpg",
              alt: "The Basilica of Our Lady of Guadalupe in Mexico City."
            }
          ],
          videoUrl: "https://www.youtube.com/watch?v=evwCuGhN2lU"
        },
        {
          day: 11,
          title: "Free Time in Roma & Condesa",
          summary:
            "Enjoy a free day to wander the hipster, tree-lined neighborhoods of Roma and Condesa, full of cafes and galleries, as well as Parque Chapultepec.",
          location: "Roma & Condesa",
          travelMode: "walk",
          photos: [
            {
              url: "https://getlostinmexicocity.com/wp-content/uploads/2024/05/Antara-Shopping-Centre-Polanco.jpg",
              alt: "Upscale shopping and dining in the Polanco neighborhood."
            },
            {
              url: "https://anearthlyparadise.com/wp-content/uploads/2024/08/bellas-artes-19.jpg",
              alt: "Roma neighborhood in Mexico City."
            },
            {
              url: "https://media.cntraveler.com/photos/5df7d21470aab000096fdd19/16:9/w_2560%2Cc_limit/Tiangis-Condesa_Leila-Ashtari_2019_TiangisCondesa_CNT_CDMX__DSF2722_FLAT.jpg",
              alt: "The vibrant Condesa neighborhood in Mexico City."
            },
            {
              url: "https://mymexicotrip.com/wp-content/uploads/2023/11/Condesa-market-cdmx-600x800.jpg",
              alt: "The vibrant market in the Condesa neighborhood."
            }
          ],
          videoUrl: "https://www.youtube.com/watch?v=x8OSPMnYiUc"
        }
      ]
    },
    {
      id: "san-cristobal",
      name: "Phase 3: Chiapas Nature & Villages",
      description: "Fly south to Chiapas to explore deep canyons, vibrant indigenous cultures, and multicolored lakes.",
      altitudeNote: "San Cristóbal sits at 2,200m (7,200ft) in a highland valley.",
      blogs: [],
      videoUrls: [],
      days: [
        {
          day: 12,
          title: "Flight to San Cristóbal & Sumidero Canyon",
          summary:
            "Take a 1 hour and 15-minute flight to Chiapas. From the aiport, Embark on a private or group boat tour through the towering Sumidero Canyon. Your guide will help spot local wildlife like crocodiles and monkeys.",
          location: "San Cristóbal de las Casas",
          travelMode: "flight & Van",
                    photos: [
            {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDzV_FEOV63LvUBncaZNxAz10As8aYT_IjA&s",
              alt: "The towering cliffs of Sumidero Canyon."
            },
            {
              url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/16/15/4f/ca.jpg",
              alt: "Sumidero Canyon boat tour."
            },
            {
              url: "https://i0.wp.com/curioussparrowtravel.com/wp-content/uploads/2024/03/Sumidero-Canyon-Mexico-5.jpg?resize=1024%2C681&ssl=1",
              alt: "The stunning natural beauty of Sumidero Canyon."
            }
          ],
        },
        {
          day: 13,
          title: "Indigenous Villages",
          summary:
            "Take a day trip to the surrounding indigenous villages, focusing on the fascinating traditions and unique church in San Juan Chamula.",
          location: "San Juan Chamula",
          travelMode: "van",
          photos: [
            {
              url: "https://www.mexperience.com/wp-content/uploads/Outdoors-View-Church-San-Juan-Chamula-Chiapas.jpg",
              alt: "Outdoor view of the church in San Juan Chamula."
            },
            {
              url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/af/3a/b9.jpg",
              alt: "San Juan Chamula."
            },
            {
              url: "https://eb3k7ewioxo.exactdn.com/wp-content/uploads/2021/05/San-Juan-Chamula.jpeg?strip=all",
              alt: "San Juan Chamula."
            }
          ],
        },
        {
          day: 14,
          title: "Lakes & Waterfalls",
          summary:
            "Explore Lagunas de Montebello National Park with its 50+ multicolored lakes ranging from bright turquoise to purple. Afterward, hike to the spectacular 120-meter 'Velo de Novia' waterfall at El Chiflón.",
          location: "Montebello & El Chiflón",
          travelMode: "hike",
          photos: [
            {
              url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d6/7c/e2/montebello.jpg?w=1200&h=-1&s=1",  
              alt: "The vibrant turquoise waters of Montebello Lakes."
            },
            {
              url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/91/47/22.jpg",
              alt: "The stunning natural beauty of Montebello Lakes."
            },
            {
              url: "https://www.leztravelforlife.com/wp-content/uploads/2021/09/El-Chiflon-2.jpg",
              alt: "The breathtaking Velo de Novia waterfall at El Chiflón."
            },
            {
              url: "https://cdn.getyourguide.com/img/tour/5949533d3f8eb.jpeg/68.jpg",
              alt: "The powerful cascade of the El Chiflón waterfall."
            }
          ],
        }
      ]
    },
    {
      id: "mexico-city-2",
      name: "Phase 4: Return & Day Trips",
      description: "Return to the capital for final excursions, weekend markets, and world-class dining.",
      altitudeNote: "Back to 2,240m in Mexico City.",
      blogs: [],
      videoUrls: [],
      days: [
        {
          day: 15,
          title: "Return to the Capital",
          summary:
            "Fly back to Mexico City. Spend the evening indulging in the city's world-class culinary scene—perhaps fine dining at Pujol, Quintonil, or Michelin-starred Cariñito Tacos.",
          location: "Mexico City",
          travelMode: "flight",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/San_Pedro_Market_-_Cusco.jpg",
          photoAlt: "Vibrant food and market scenes in the city."
        },
        {
          day: 16,
          title: "Tepoztlán Day Trip",
          summary:
            "Take a 2.5-hour drive to Tepoztlán. Enjoy the vibrant weekend-only market and take an hour-long hike up the mountain to the pyramid at the peak.",
          location: "Tepoztlán",
          travelMode: "Van",
          photos: [
            {
              url: "https://media.cntraveler.com/photos/5a92fdcdad2a7e3780f2e35e/master/pass/Tepozteco_2018_E3KWPT.jpg",
              alt: "A steep mountain hike to ancient ruins."
            },
            {
              url: "https://visitmexico.com/media/usercontent/67f9db9fbd1d7-20220908_225140790_iOS_gmxdot_png",
              alt: "The vibrant market scene in Tepoztlán."
            },
            {
              url: "https://static.dezeen.com/uploads/2026/04/tepoztlan-market-mexico-ramirez-suarez-arquitectos-and-laboratorio-regional-de-arquitectura_dezeen_2364_col_29-852x568.jpg",
              alt: "Tepoztlán market scene."
            }
          ],
        },
        {
          day: 17,
          title: "Departure",
          summary:
            "Enjoy a final morning in Mexico City (perhaps some pastries at Gala or breakfast at Lalo) before taking an Uber to the airport for your journey home.",
          location: "Mexico City Airport",
          travelMode: "flight & car",
          photoUrl:
            "https://s28477.pcdn.co/wp-content/uploads/2019/07/YUL_NewFront.jpg",
          photoAlt: "Airport departure gates.",
          note: "Factor in up to 2 hours for an Uber to the airport depending on CDMX traffic."
        }
      ]
    }
  ]
};

export const allTripDays = hollandMexicoTrip.phases.flatMap((phase) => phase.days);

if (allTripDays.length !== 17) {
  throw new Error(`Expected 17 itinerary days but found ${allTripDays.length}.`);
}

const daySequence = allTripDays.map((item) => item.day);
const expected = Array.from({ length: 17 }, (_, index) => index + 1);
if (daySequence.some((value, index) => value !== expected[index])) {
  throw new Error("Trip days must be sequential from Day 1 to Day 17.");
}