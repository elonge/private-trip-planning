import type { TripPlan } from "../types/trip";

// export const peruTrip: TripPlan = {
//   title: "The Altitude-Smart Peru Adventure",
//   subtitle:
//     "A 14-day family itinerary designed to keep energy high: coast first, Sacred Valley next, then Cusco once everyone is acclimated.",
//   durationDays: 14,
//   heroPhotoUrl:
//     "https://commons.wikimedia.org/wiki/Special:FilePath/Machu-Picchu.jpg",
//   heroPhotoAlt:
//     "The iconic citadel of Machu Picchu under a clear sky with Huayna Picchu towering in the background.",
//   routeStops: [
//     { id: "lima", label: "Lima", lat: -12.0464, lng: -77.0428, order: 1 },
//     { id: "sacred-valley", label: "Sacred Valley", lat: -13.3333, lng: -72.1667, order: 2 },
//     { id: "machu-picchu", label: "Machu Picchu", lat: -13.1631, lng: -72.5450, order: 3 },
//     { id: "cusco", label: "Cusco", lat: -13.5319, lng: -71.9675, order: 4 },
//     { id: "lima-return", label: "Lima Return", lat: -12.0464, lng: -77.0428, order: 5 }
//   ],
//   phases: [
//     {
//       id: "lima",
//       name: "Phase 1: Lima",
//       description: "A coastal warm-up with food, history, and easy walking before altitude.",
//       altitudeNote: "Near sea level: ideal for recovery from the flight and family pacing.",
//       days: [
//         {
//           day: 1,
//           title: "Coastal Welcome",
//           summary:
//             "Land in Lima, settle into Miraflores, and walk the Malecon for Pacific views and sunset air.",
//           location: "Miraflores, Lima",
//           travelMode: "walk",
//           // File:Miraflores-Lima.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Miraflores-Lima.jpg",
//           photoAlt:
//             "The green cliffs of the Miraflores boardwalk (Malecón) overlooking the Pacific Ocean."
//         },
//         {
//           day: 2,
//           title: "Culture and Catacombs",
//           summary:
//             "Visit Plaza de Armas and explore the San Francisco Monastery catacombs in the historic center.",
//           location: "Centro Historico, Lima",
//           travelMode: "walk",
//           // File:Convento_San_Francisco_en_Lima.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Convento_San_Francisco_en_Lima.jpg",
//           photoAlt:
//             "The yellow colonial facade of the San Francisco Monastery in downtown Lima."
//         },
//         {
//           day: 3,
//           title: "Barranco and Food",
//           summary:
//             "Explore Barranco street art, enjoy a classic Peruvian lunch, then fly to Cusco and transfer by van to the Sacred Valley.",
//           location: "Barranco -> Cusco -> Sacred Valley",
//           travelMode: "flight",
//           // File:Puente_de_los_Suspiros_Barranco.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Puente_de_los_Suspiros_Barranco.jpg",
//           note: "A pre-arranged van keeps arrival smooth for the whole family.",
//           photoAlt:
//             "The famous wooden 'Bridge of Sighs' (Puente de los Suspiros) in the bohemian district of Barranco."
//         }
//       ]
//     },
//     {
//       id: "sacred-valley",
//       name: "Phase 2: The Sacred Valley",
//       description: "Lower elevation exploration with big scenery and active days.",
//       altitudeNote:
//         "Lower than Cusco: this phase is the acclimatization bridge before higher elevations.",
//       days: [
//         {
//           day: 4,
//           title: "Pisac Ruins",
//           summary:
//             "Explore Incan terraces at Pisac and browse the market before a relaxed evening.",
//           location: "Pisac",
//           travelMode: "walk",
//           // File:Pisac_Perou.jpg
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/b/be/Pisac_Peru.JPG",
//           photoAlt:
//             "The dramatic curving agricultural terraces of the Pisac archaeological site on the mountainside."
//         },
//         {
//           day: 5,
//           title: "Maras and Moray",
//           summary:
//             "Visit the Maras Salt Mines and the circular terraces at Moray, with an optional ATV adventure.",
//           location: "Maras and Moray",
//           travelMode: "van",
//           // File:Salineras_de_Maras_(1).jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Salineras_de_Maras_(1).jpg",
//           note: "ATV option is great for older teens and young adults.",
//           photoAlt:
//             "Thousands of white and brown salt evaporation ponds clustered in the canyon at Maras."
//         },
//         {
//           day: 6,
//           title: "Ollantaytambo",
//           summary:
//             "Tour one of the best-preserved living Incan towns and its fortress ruins.",
//           location: "Ollantaytambo",
//           travelMode: "walk",
//           // File:Ollantaytambo_Peru.jpg
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/9/91/Ollantaytambo_-_Heiliges_Tal.jpg",
//           photoAlt:
//             "The massive stone terraces and Temple of the Sun at the Ollantaytambo fortress."
//         }
//       ]
//     },
//     {
//       id: "machu-picchu",
//       name: "Phase 3: Machu Picchu",
//       description: "A two-day peak experience centered on rail travel and an early citadel visit.",
//       altitudeNote: "Plan early starts and slower pacing to balance excitement and stamina.",
//       days: [
//         {
//           day: 7,
//           title: "The Train Journey",
//           summary:
//             "Ride from Ollantaytambo to Aguas Calientes, explore town, and prep for an early entry.",
//           location: "Ollantaytambo -> Aguas Calientes",
//           travelMode: "train",
//           // File:PeruRail_Vistadome.jpg
//           photoUrl:
//             "https://www.perurail.com/wp-content/uploads/2023/10/vistadome-perurail-tren-panoramico-machu-picchu-carrusel.jpg",
//           photoAlt:
//             "The PeruRail Vistadome train with panoramic windows winding through the Sacred Valley."
//         },
//         {
//           day: 8,
//           title: "The Lost City",
//           summary:
//             "Enter Machu Picchu early, with optional Huayna Picchu permits for fit hikers, then return by evening train toward Cusco.",
//           location: "Machu Picchu",
//           travelMode: "hike",
//           // File:Machu-Picchu.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Machu-Picchu.jpg",
//           note: "Huayna Picchu permits are limited and should be booked months ahead.",
//           photoAlt:
//             "A breathtaking view of the Inca citadel of Machu Picchu perched on the mountain ridge."
//         }
//       ]
//     },
//     {
//       id: "cusco",
//       name: "Phase 4: Cusco",
//       description: "Five days to settle in, explore history, and finish with local markets and music.",
//       altitudeNote: "About 3,400m: easier after Sacred Valley acclimatization.",
//       days: [
//         {
//           day: 9,
//           title: "Settling Into the Heights",
//           summary:
//             "Take a relaxed day at Plaza de Armas and ease into Cusco's higher elevation.",
//           location: "Cusco",
//           travelMode: "walk",
//           // File:The_Plaza_de_Armas_of_Cusco.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/The_Plaza_de_Armas_of_Cusco.jpg",
//           photoAlt:
//             "The Plaza de Armas in Cusco featuring the colonial Cathedral and central fountain."
//         },
//         {
//           day: 10,
//           title: "Saqsaywaman Fortress",
//           summary:
//             "Visit the monumental stone fortress above Cusco for sweeping views and dramatic family photos.",
//           location: "Saqsaywaman",
//           travelMode: "walk",
//           // File:Sacsayhuamán_walls.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Sacsayhuam%C3%A1n_walls.jpg",
//           photoAlt:
//             "The giant zig-zagging megalithic stone walls of the Saqsaywaman fortress."
//         },
//         {
//           day: 11,
//           title: "San Blas and Artisans",
//           summary:
//             "Wander San Blas lanes, browse workshops, and try a chocolate-making session.",
//           location: "San Blas, Cusco",
//           travelMode: "walk",
//           // File:Calle_Hatun_Rumiyoc_Cusco.jpg
//           photoUrl:
//             "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hatunrumiyoc_%287640968366%29.jpg",
//           photoAlt:
//             "The famous 12-angled stone on Hatun Rumiyoc street, leading up to the San Blas district."
//         },
//         {
//           day: 12,
//           title: "Adventure Day or Slow Day",
//           summary:
//             "Choose an early Rainbow Mountain hike or split the group for spa time and museum browsing.",
//           location: "Rainbow Mountain or Cusco",
//           travelMode: "hike",
//           // File:Rainbow_Mountain.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Rainbow_Mountain.jpg",
//           optional: true,
//           note: "Rainbow Mountain is optional and physically demanding due to altitude and early departure.",
//           photoAlt:
//             "The colorful mineral stripes of Vinicunca (Rainbow Mountain) under a bright blue sky."
//         },
//         {
//           day: 13,
//           title: "Final Shopping",
//           summary:
//             "Visit San Pedro Market for gifts and alpaca goods, then close with live Andean music over dinner.",
//           location: "San Pedro Market, Cusco",
//           travelMode: "walk",
//           // File:San_Pedro_Market_-_Cusco.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/San_Pedro_Market_-_Cusco.jpg",
//           photoAlt:
//             "The exterior and bustling entrance of the San Pedro Market in Cusco."
//         },
//         {
//           day: 14,
//           title: "Departure",
//           summary:
//             "Morning return flight from Cusco through Lima and onward home.",
//           location: "Cusco -> Lima -> Home",
//           travelMode: "flight",
//           // File:Aerial_photo_of_the_Andes.jpg
//           photoUrl:
//             "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_photo_of_the_Andes.jpg",
//           note: "Keep transfer windows comfortable for a smoother family departure.",
//           photoAlt:
//             "Aerial view of the snow-capped Andes mountains seen from an airplane window."
//         }
//       ]
//     }
//   ],
// };

export const peruTrip: TripPlan = {
  title: "The Altitude-Smart Peru Adventure",
  subtitle:
    "A 14-day family itinerary designed to keep energy high: coast first, Sacred Valley next, then Cusco once everyone is acclimated.",
  durationDays: 14,
  heroPhotoUrl:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Machu-Picchu.jpg",
  heroPhotoAlt:
    "The iconic citadel of Machu Picchu under a clear sky with Huayna Picchu towering in the background.",
  routeStops: [
    { id: "lima", label: "Lima", lat: -12.0464, lng: -77.0428, order: 1 },
    { id: "sacred-valley", label: "Sacred Valley", lat: -13.3333, lng: -72.1667, order: 2 },
    { id: "machu-picchu", label: "Machu Picchu", lat: -13.1631, lng: -72.5450, order: 3 },
    { id: "cusco", label: "Cusco", lat: -13.5319, lng: -71.9675, order: 4 },
    { id: "lima-return", label: "Lima Return", lat: -12.0464, lng: -77.0428, order: 5 }
  ],
  phases: [
    {
      id: "lima",
      name: "Phase 1: Lima",
      description: "A coastal warm-up with food, history, and easy walking before altitude.",
      altitudeNote: "Near sea level: ideal for recovery from the flight and family pacing.",
      blogs: [
        { title: "Lima in 3 Days (Jane's Midlife Journey)", url: "https://janesmidlifejourney.uk/2023/11/14/lima-in-3-days/" },
        {
          title: "Lima Travel Guide (Heather Jasper)",
          url: "https://heatherjasper.com/peru-blogs-travel-tips/weekend-in-lima"
        },
        {
          title: "Top 7 things to do in Lima [video]",
          url: "https://www.youtube.com/watch?v=csgil74hrAI"
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=ou-QJmkwIz8",
        "https://www.youtube.com/shorts/4OwYuRVEP-0",
        "http://www.youtube.com/watch?v=cYDYMol2-SQ"
      ],
      days: [
        {
          day: 1,
          title: "Coastal Welcome",
          summary:
            "Land in Lima, settle into Miraflores, and walk the Malecon for Pacific views and sunset air.",
          location: "Miraflores, Lima",
          travelMode: "walk",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Miraflores-Lima.jpg",
          photoAlt:
            "The green cliffs of the Miraflores boardwalk (Malecón) overlooking the Pacific Ocean.",
          videoUrl: "https://www.youtube.com/watch?v=ou-QJmkwIz8" // Miraflores, Lima: A Perfect Day Exploring the Coast
        },
        {
          day: 2,
          title: "Culture and Catacombs",
          summary:
            "Visit Plaza de Armas and explore the San Francisco Monastery catacombs in the historic center.",
          location: "Centro Historico, Lima",
          travelMode: "walk",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Convento_San_Francisco_en_Lima.jpg",
          photoAlt:
            "The yellow colonial facade of the San Francisco Monastery in downtown Lima.",
          videoUrl: "https://www.youtube.com/shorts/4OwYuRVEP-0" // The Plaza Mayor de Lima or Plaza de Armas de Lima
        },
        {
          day: 3,
          title: "Barranco and Food",
          summary:
            "Explore Barranco street art, enjoy a classic Peruvian lunch, then fly to Cusco and transfer by van to the Sacred Valley.",
          location: "Barranco -> Cusco -> Sacred Valley",
          travelMode: "flight",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Puente_de_los_Suspiros_Barranco.jpg",
          note: "A pre-arranged van keeps arrival smooth for the whole family.",
          photoAlt:
            "The famous wooden 'Bridge of Sighs' (Puente de los Suspiros) in the bohemian district of Barranco.",
          videoUrl: "http://www.youtube.com/watch?v=cYDYMol2-SQ" // Lima’s coolest neighborhood? Barranco Guide (2026)
        }
      ]
    },
    {
      id: "sacred-valley",
      name: "Phase 2: The Sacred Valley",
      description: "Lower elevation exploration with big scenery and active days.",
      altitudeNote:
        "Lower than Cusco: this phase is the acclimatization bridge before higher elevations.",
      blogs: [
        { title: "Sacred Valley Travel Guide (Gypsy Sols)", url: "https://www.gypsysols.com/sacred-valley-travel-guide-a-3-day-itinerary/" },
        {
          title: "Sacred Valley Weekend Guide (Heather Jasper)",
          url: "https://heatherjasper.com/peru-blogs-travel-tips/sacred-valley-las-qolqas"
        },
        {
          title: "Top 7 Things to Do in the Sacred Valley [video]",
          url: "https://www.youtube.com/watch?v=5FlMw5QiQyM"
        }
      ],
      videoUrls: [
        "http://www.youtube.com/watch?v=KzC0tpoH3MI",
        "http://www.youtube.com/watch?v=jabBMPvoVa0",
        "http://www.youtube.com/watch?v=FZpwUFehRTQ"
      ],
      days: [
        {
          day: 4,
          title: "Pisac Ruins",
          summary:
            "Explore Incan terraces at Pisac and browse the market before a relaxed evening.",
          location: "Pisac",
          travelMode: "walk",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Pisac_Peru.JPG",
          photoAlt:
            "The dramatic curving agricultural terraces of the Pisac archaeological site on the mountainside.",
          videoUrl: "http://www.youtube.com/watch?v=KzC0tpoH3MI" // Ultimate Guide to Pisac Ruins
        },
        {
          day: 5,
          title: "Maras and Moray",
          summary:
            "Visit the Maras Salt Mines and the circular terraces at Moray, with an optional ATV adventure.",
          location: "Maras and Moray",
          travelMode: "van",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Salineras_de_Maras_(1).jpg",
          note: "ATV option is great for older teens and young adults.",
          photoAlt:
            "Thousands of white and brown salt evaporation ponds clustered in the canyon at Maras.",
          videoUrl: "http://www.youtube.com/watch?v=jabBMPvoVa0" // This Sacred Valley ATV Tour Was Absolutely WILD
        },
        {
          day: 6,
          title: "Ollantaytambo",
          summary:
            "Tour one of the best-preserved living Incan towns and its fortress ruins.",
          location: "Ollantaytambo",
          travelMode: "walk",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Ollantaytambo_-_Heiliges_Tal.jpg",
          photoAlt:
            "The massive stone terraces and Temple of the Sun at the Ollantaytambo fortress.",
          videoUrl: "http://www.youtube.com/watch?v=FZpwUFehRTQ" // Ollantaytambo Ruins Peru Guide
        }
      ]
    },
    {
      id: "machu-picchu",
      name: "Phase 3: Machu Picchu",
      description: "A two-day peak experience centered on rail travel and an early citadel visit.",
      altitudeNote: "Plan early starts and slower pacing to balance excitement and stamina.",
      blogs: [
        {
          title: "Machu Picchu Update (Heather Jasper)",
          url: "https://heatherjasper.com/peru-blogs-travel-tips/inca-trail-2026-update"
        },
      ],
      videoUrls: [
        "http://www.youtube.com/watch?v=wRgPh4fpJkI",
        "https://www.youtube.com/watch?v=XWhbhOTuaHs"
      ],
      days: [
        {
          day: 7,
          title: "The Train Journey",
          summary:
            "Ride from Ollantaytambo to Aguas Calientes, explore town, and prep for an early entry.",
          location: "Ollantaytambo -> Aguas Calientes",
          travelMode: "train",
          photoUrl:
            "https://www.perurail.com/wp-content/uploads/2023/10/vistadome-perurail-tren-panoramico-machu-picchu-carrusel.jpg",
          photoAlt:
            "The PeruRail Vistadome train with panoramic windows winding through the Sacred Valley.",
          videoUrl: "http://www.youtube.com/watch?v=wRgPh4fpJkI" // Everything you need to know about trains to Machu Picchu
        },
        {
          day: 8,
          title: "The Lost City",
          summary:
            "Enter Machu Picchu early, with optional Huayna Picchu permits for fit hikers, then return by evening train toward Cusco.",
          location: "Machu Picchu",
          travelMode: "hike",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Machu-Picchu.jpg",
          note: "Huayna Picchu permits are limited and should be booked months ahead.",
          photoAlt:
            "A breathtaking view of the Inca citadel of Machu Picchu perched on the mountain ridge.",
          videoUrl: "https://www.youtube.com/watch?v=XWhbhOTuaHs" // Machu Picchu Travel Guide: How to Visit the Lost City of the Incas
        }
      ]
    },
    {
      id: "cusco",
      name: "Phase 4: Cusco",
      description: "Five days to settle in, explore history, and finish with local markets and music.",
      altitudeNote: "About 3,400m: easier after Sacred Valley acclimatization.",
      blogs: [
        { title: "Top 10 Things to Do in Cusco [video]", url: "https://www.youtube.com/watch?v=PIvEUe_0R6Q" },
        {
          title: "Cusco Travel Guide (Heather Jasper)",
          url: "https://heatherjasper.com/cusco"
        }
      ],
      videoUrls: [
        "https://www.youtube.com/watch?v=cnu601-gAIA",
        "https://www.youtube.com/watch?v=vtTx4Dpa5xo",
        "http://www.youtube.com/watch?v=ool1S537PPM",
        "https://www.youtube.com/watch?v=w_zQAldcR5w",
        "https://www.youtube.com/watch?v=TXYVdKXxtP0",
        "http://www.youtube.com/watch?v=JM-XCMdV63U"
      ],
      days: [
        {
          day: 9,
          title: "Settling Into the Heights",
          summary:
            "Take a relaxed day at Plaza de Armas and ease into Cusco's higher elevation.",
          location: "Cusco",
          travelMode: "walk",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/The_Plaza_de_Armas_of_Cusco.jpg",
          photoAlt:
            "The Plaza de Armas in Cusco featuring the colonial Cathedral and central fountain.",
          videoUrl: "https://www.youtube.com/watch?v=cnu601-gAIA" // A Perfect Day in Cusco: Plaza de Armas, San Blas, and More
        },
        {
          day: 10,
          title: "Saqsaywaman Fortress",
          summary:
            "Visit the monumental stone fortress above Cusco for sweeping views and dramatic family photos.",
          location: "Saqsaywaman",
          travelMode: "walk",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sacsayhuam%C3%A1n_walls.jpg",
          photoAlt:
            "The giant zig-zagging megalithic stone walls of the Saqsaywaman fortress.",
          videoUrl: "https://www.youtube.com/watch?v=vtTx4Dpa5xo" // Inca Engineering & Seismic Secrets: Sacsayhuamán
        },
        {
          day: 11,
          title: "San Blas and Artisans",
          summary:
            "Wander San Blas lanes, browse workshops, and try a chocolate-making session.",
          location: "San Blas, Cusco",
          travelMode: "walk",
          photoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Hatunrumiyoc_%287640968366%29.jpg",
          photoAlt:
            "The famous 12-angled stone on Hatun Rumiyoc street, leading up to the San Blas district.",
          videoUrl: "http://www.youtube.com/watch?v=ool1S537PPM" // Perfect Day in San Blas
        },
        {
          day: 12,
          title: "Adventure Day or Slow Day",
          summary:
            "Choose an early Rainbow Mountain hike or split the group for spa time and museum browsing.",
          location: "Rainbow Mountain or Cusco",
          travelMode: "hike",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rainbow_Mountain.jpg",
          optional: true,
          note: "Rainbow Mountain is optional and physically demanding due to altitude and early departure.",
          photoAlt:
            "The colorful mineral stripes of Vinicunca (Rainbow Mountain) under a bright blue sky.",
          videoUrl: "https://www.youtube.com/watch?v=w_zQAldcR5w" // Rainbow Mountain Peru Hike Guide
        },
        {
          day: 13,
          title: "Final Shopping",
          summary:
            "Visit San Pedro Market for gifts and alpaca goods, then close with live Andean music over dinner.",
          location: "San Pedro Market, Cusco",
          travelMode: "walk",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/San_Pedro_Market_-_Cusco.jpg",
          photoAlt:
            "The exterior and bustling entrance of the San Pedro Market in Cusco.",
          videoUrl: "https://www.youtube.com/watch?v=TXYVdKXxtP0" // Peru Local Market STREET FOOD Tour of San Pedro Market
        },
        {
          day: 14,
          title: "Departure",
          summary:
            "Morning return flight from Cusco through Lima and onward home.",
          location: "Cusco -> Lima -> Home",
          travelMode: "flight",
          photoUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_photo_of_the_Andes.jpg",
          note: "Keep transfer windows comfortable for a smoother family departure.",
          photoAlt:
            "Aerial view of the snow-capped Andes mountains seen from an airplane window.",
          videoUrl: "http://www.youtube.com/watch?v=JM-XCMdV63U" // Scenic Flight: Cusco to Lima
        }
      ]
    }
  ],
};
export const allTripDays = peruTrip.phases.flatMap((phase) => phase.days);

if (allTripDays.length !== 14) {
  throw new Error(`Expected 14 itinerary days but found ${allTripDays.length}.`);
}

const daySequence = allTripDays.map((item) => item.day);
const expected = Array.from({ length: 14 }, (_, index) => index + 1);
if (daySequence.some((value, index) => value !== expected[index])) {
  throw new Error("Trip days must be sequential from Day 1 to Day 14.");
}
