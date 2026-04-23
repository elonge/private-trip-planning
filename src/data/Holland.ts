import type { TripPlan } from "../types/trip";

// export const frieslandFamilyTrip: TripPlan = {
//   title: "The Other Holland: A Friesland Family Adventure",
//   subtitle:
//     "A 5-day journey through the North's hidden gem. From interactive sea life and historic planetariums to island cycling and mudflat hiking.",
//   durationDays: 5,
//   heroPhotoUrl:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sneek_Waterpoort_2011.jpg/1200px-Sneek_Waterpoort_2011.jpg",
//   heroPhotoAlt:
//     "The iconic 17th-century Waterpoort (Water Gate) in the heart of Sneek.",
//   routeStops: [
//     { id: "leeuwarden", label: "Leeuwarden", lat: 53.2012, lng: 5.7999, order: 1 },
//     { id: "franeker", label: "Franeker", lat: 53.1861, lng: 5.5414, order: 2 },
//     { id: "sneek", label: "Sneek", lat: 53.0325, lng: 5.6601, order: 3 },
//     { id: "terherne", label: "Terherne", lat: 53.0345, lng: 5.7797, order: 4 },
//     { id: "ameland", label: "Ameland", lat: 53.4475, lng: 5.7663, order: 5 },
//     { id: "appelscha", label: "Appelscha", lat: 52.9547, lng: 6.3359, order: 6 }
//   ],
//   phases: [
//     {
//       id: "culture-and-canals",
//       name: "Phase 1: History, Stars & Waterways",
//       description: "Discover the capital of Friesland and the scientific wonders of its historic towns.",
//       altitudeNote: "Below sea level, very flat and bike-friendly.",
//       blogs: [
//         {
//             title: "3 Days in Leeuwarden: The Netherlands' Hidden Gem",
//             url: "https://wherewouldyougo.com/destinations/europe/3-days-leeuwarden-the-netherlands/"
//         },
//         { 
//           title: "Wandelen in Leeuwarden: 10 Highlights", 
//           url: "https://www.visitleeuwarden.com/en/blogs/wandelen-in-leeuwarden" 
//         }
//       ],
//       videoUrls: [
//         "https://www.youtube.com/watch?v=EOsAcAORYBg",
//         "https://www.youtube.com/watch?v=CTRXKZ4-xWs"
//       ],
//       days: [
//         {
//           day: 1,
//           title: "Aquatic Zoos & Leaning Towers",
//           summary:
//             "Start in Leeuwarden. Visit the Nature Museum Fryslân followed by AquaZoo to meet seals and penguins. End the day at the leaning Oldehove tower.",
//           location: "Leeuwarden",
//           travelMode: "car",
//           photoUrl:
//             "https://wherewouldyougo.com/wp-content/uploads/2018/06/Historische-Binnenstad-Leeuwarden-the-Netherlands.jpg",
//           photoAlt: "The leaning Oldehove tower of Leeuwarden.",
//           videoUrl: "https://www.youtube.com/watch?v=EOsAcAORYBg"
//         },
//         {
//           day: 2,
//           title: "The Oldest Planetarium & Naval History",
//           summary:
//             "Visit the Royal Eise Eisinga Planetarium in Franeker, then head to Sneek to see the famous Waterpoort and explore the Maritime Museum.",
//           location: "Franeker & Sneek",
//           travelMode: "car",
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Planetarium_Eise_Eisinga_Franeker.jpg/1200px-Planetarium_Eise_Eisinga_Franeker.jpg",
//           photoAlt: "Inside the oldest working planetarium in the world.",
//           videoUrl: "https://www.youtube.com/watch?v=jK-jP0zS8vM"
//         },
//         {
//           day: 3,
//           title: "Adventure Island",
//           summary:
//             "Spend the day at Kameleon Avonturen Eiland in Terherne. It's a rustic adventure island where kids can play in the mud and sail wooden boats.",
//           location: "Terherne",
//           travelMode: "car & boat",
//           photoUrl:
//             "http://googleusercontent.com/profile/picture/30",
//           photoAlt: "Kids playing in the water and mud on Kameleon Island.",
//           videoUrl: "https://www.youtube.com/watch?v=2T_zS6Z-Q1c"
//         }
//       ]
//     },
//     {
//       id: "islands-and-rides",
//       name: "Phase 2: Island Life & Amusement Parks",
//       description: "Escape to the Wadden Sea islands before wrapping up with classic amusement park fun.",
//       altitudeNote: "Sand dunes and coastal air.",
//       blogs: [
//         { 
//           title: "Exploring Ameland with Kids", 
//           url: "https://www.holland.com/global/tourism/destinations/islands/ameland.htm" 
//         }
//       ],
//       videoUrls: [
//         "https://www.youtube.com/watch?v=yW6XkXG4V6Y"
//       ],
//       days: [
//         {
//           day: 4,
//           title: "Cycling Ameland Island",
//           summary:
//             "Take the ferry to Ameland. Rent bikes to traverse the dunes, visit the red-and-white lighthouse, and enjoy the pristine North Sea beaches.",
//           location: "Ameland",
//           travelMode: "ferry & bike",
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vuurtoren_Ameland.jpg/800px-Vuurtoren_Ameland.jpg",
//           photoAlt: "The bright red lighthouse of Ameland rising above the dunes.",
//           videoUrl: "https://www.youtube.com/watch?v=yW6XkXG4V6Y"
//         },
//         {
//           day: 5,
//           title: "Amusement & All-Inclusive Fun",
//           summary:
//             "Final day at Duinen Zathe in Appelscha. An 'all-inclusive' park perfect for children ages 3-12, featuring rollercoasters and traffic schools.",
//           location: "Appelscha",
//           travelMode: "car",
//           photoUrl:
//             "http://googleusercontent.com/profile/picture/35",
//           photoAlt: "Rides and smiling faces at Duinen Zathe park.",
//           videoUrl: "https://www.youtube.com/watch?v=3-E6Vf0XQeM"
//         }
//       ]
//     }
//   ],
// };

export const frieslandFamilyTrip: TripPlan = {
  title: "Friesland Family Star Trip",
  subtitle:
    "A 5-day family adventure based in Heeg, exploring the aquatic wildlife, maritime history, and island magic of the Dutch North.",
  durationDays: 5,
  heroPhotoUrl:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Waterpoort_Sneek.jpg?width=1200",
  heroPhotoAlt:
    "The iconic 17th-century Waterpoort in Sneek, a landmark of the Frisian lake district.",
  routeStops: [
    { id: "heeg", label: "Heeg (Base)", lat: 52.9686, lng: 5.6067, order: 1 },
    { id: "leeuwarden", label: "Leeuwarden", lat: 53.2012, lng: 5.7999, order: 2 },
    { id: "franeker", label: "Franeker", lat: 53.1861, lng: 5.5414, order: 3 },
    { id: "sneek", label: "Sneek", lat: 53.0325, lng: 5.6601, order: 4 },
    { id: "terherne", label: "Terherne", lat: 53.0345, lng: 5.7797, order: 5 },
    { id: "holwerd", label: "Holwerd (Ferry)", lat: 53.3855, lng: 5.8975, order: 6 },
    { id: "appelscha", label: "Appelscha", lat: 52.9547, lng: 6.3359, order: 7 }
  ],
  phases: [
    {
      id: "friesland-hub",
      name: "Star Trip: Frisian Lake District Base",
      description: "Based in a luxury water villa in Heeg, exploring the province's best family attractions within a 60-minute drive.",
      altitudeNote: "Sea level, flat terrain, perfect for cycling and boating.",
      blogs: [
        {
          // Updated to active VVV Waterland van Friesland family guide
          title: "VVV Waterland van Friesland: Tips for Kids",
          url: "https://www.waterlandvanfriesland.nl/en/inspiration/tips-for-kids"
        },
        {
          // Updated to active VVV Ameland portal
          title: "Ameland Island Tourism (Official)",
          url: "https://www.vvvameland.com"
        }
      ],
      videoUrls: [
        // Day 1 – AquaZoo Leeuwarden official channel
        "https://www.youtube.com/watch?v=GAm04AP6nTI",
        "https://www.youtube.com/watch?v=CTRXKZ4-xWs",
        // Day 2 – Eisinga Planetarium Franeker walkthrough
        "https://www.youtube.com/watch?v=nmvIenUg-9g",
        // Day 4 – Ameland island 4K holiday promo
        "https://www.youtube.com/watch?v=rR0WWR_mGF0"
      ],
      days: [
        {
          day: 1,
          title: "Leeuwarden: Culture & Wildlife",
          summary:
            "Visit the Nature Museum Fryslân for the 'Underwater Safari' and explore AquaZoo Friesland to walk among lemurs and see polar bears.",
          location: "Leeuwarden",
          travelMode: "car",
          photos: [
            {
              url: "https://commons.wikimedia.org/wiki/Special:FilePath/7196_Aquazoo.Leeuwarden.GroteWielen.jpg?width=1200",
              alt: "A polar bear at AquaZoo Leeuwarden, one of the highlights for kids."
            },
            {
              url: "https://assets.plaece.nl/thumb/jP-9XDADcdJY6f3Mp9ou404ln6_PHZh9rsQ62BAWPBo/resizing_type:fit/width:650/height:366/gravity:sm/aHR0cHM6Ly9hc3NldHMucGxhZWNlLm5sL29kcC1sZWV1d2FyZGVuL2ltYWdlL2xyLW9uZGVyd2F0ZXJzYWZhcmktMV8yNjY1MTc2NjQyLmpwZWc.jpeg",
              alt: "The Underwater Safari."
            }
          ],
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/7196_Aquazoo.Leeuwarden.GroteWielen.jpg?width=1200",
          photoAlt: "Animals roaming at AquaZoo Leeuwarden.",
          videoUrl: "https://www.youtube.com/watch?v=CTRXKZ4-xWs"
        },
        {
          day: 2,
          title: "Sneek & Franeker: Stars & Ships",
          summary:
            "Marvel at the world's oldest working planetarium in Franeker (now a UNESCO World Heritage Site) and discover maritime history at the dedicated children's museum in Sneek.",
          location: "Franeker & Sneek",
          travelMode: "car",
          photos: [
            {
              url: "https://commons.wikimedia.org/wiki/Special:FilePath/Planetarium_Eise_Eisinga_in_Franeker.jpg?width=1200",
              alt: "The intricate mechanical ceiling of the Eise Eisinga Planetarium."
            },
            {
              url: "https://cdn.museum.nl/assets/f99801e5-5305-41f3-b49a-de99acb1a33f?w=3000&c=67090f0b9fff61534911a548f5b5a02984790d4f96f60983781c5237c87c276f",
              alt: "The iconic Waterpoort in Sneek, a highlight for kids."
            }
          ],
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Planetarium_Eise_Eisinga_in_Franeker.jpg?width=1200",
          photoAlt: "The intricate mechanical ceiling of the Eise Eisinga Planetarium.",
          videoUrl: "https://www.youtube.com/watch?v=3hjtOh27rRU"
        },
        {
          day: 3,
          title: "Terherne: Adventure on the Water",
          summary:
            "Head to Kameleon Avonturen Eiland for mud trails, raft building, and old-fashioned outdoor play. Bring a change of clothes!",
          location: "Terherne",
          travelMode: "car",
          photoUrl:
            "https://www.gezinopreis.nl/wp-content/uploads/2016/09/kameleon-eiland-01.jpg",
          photoAlt: "The peaceful waterways of Terherne in the heart of the Frisian lake district.",
          note: "Very high chance of getting wet/muddy. Recommended for ages 6+.",
          videoUrl: "https://www.youtube.com/watch?v=x5nwuRa71JA"
        },
        {
          day: 4,
          title: "Ameland: Island Escape",
          summary:
            "Take the ferry from Holwerd to Ameland. Rent bikes to see the red lighthouse, visit expansive beaches, and try mudflat hiking.",
          location: "Ameland Island",
          travelMode: "ferry & bike",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Vuurtoren_Ameland.jpg?width=800",
          photoAlt: "The bright red and white lighthouse of Ameland rising from the dunes.",
          videoUrl: "https://www.youtube.com/watch?v=rR0WWR_mGF0"
        },
        {
          day: 5,
          title: "Appelscha: Forests & Thrills",
          summary:
            "Enjoy the all-inclusive Duinen Zathe Amusement Park, then explore the massive sand dunes of Drents-Friese Wold National Park.",
          location: "Appelscha",
          travelMode: "car",
          // Swapped Drentsche Aa image for the more accurate Aekingerzand dunes in Drents-Friese Wold
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Aekingerzand_sand_dunes_2.jpg?width=1200",
          photoAlt: "Sandy dunes and heathland in the Drents-Friese Wold National Park near Appelscha.",
          note: "Amusement park is best for kids up to age 12. All-inclusive entry covers all rides, food and drink."
        }
      ]
    }
  ],
};
export const allTripDays = frieslandFamilyTrip.phases.flatMap((phase) => phase.days);

const daySequence = allTripDays.map((item) => item.day);
const expected = Array.from({ length: 17 }, (_, index) => index + 1);
if (daySequence.some((value, index) => value !== expected[index])) {
  throw new Error("Trip days must be sequential from Day 1 to Day 17.");
}
