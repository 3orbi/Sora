// === ARTIST IMAGES via Deezer API (public redirects, no key needed) ===
// Format: https://api.deezer.com/artist/{DEEZER_ID}/image?size=big

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  monthlyListeners: string;
  verified: boolean;
  bio?: string;
}

export interface Album {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  cover: string;
  year: number;
  genre: string;
}

export interface Track {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  album: string;
  albumId: string;
  duration: string;
  durationMs: number;
  cover: string;
  audioUrl: string;
  genre: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  tracks: string[];
  cover: string;
  isUserCreated?: boolean;
}

// ── ARTISTS (30) ──
export const artists: Artist[] = [
  { id: "plk", name: "PLK", genre: "Rap FR", image: "https://api.deezer.com/artist/11266307/image?size=big", monthlyListeners: "6 544 546", verified: true, bio: "French rapper from Meaux, known for his melodic flow and introspective lyrics." },
  { id: "raye", name: "RAYE", genre: "Pop / R&B", image: "https://api.deezer.com/artist/5765728/image?size=big", monthlyListeners: "12 830 000", verified: true, bio: "British singer-songwriter blending pop, R&B, and dance music." },
  { id: "kanye", name: "Kanye West", genre: "Rap", image: "https://api.deezer.com/artist/230/image?size=big", monthlyListeners: "58 200 000", verified: true, bio: "Legendary hip-hop producer and rapper, reshaping music culture." },
  { id: "drake", name: "Drake", genre: "Rap / R&B", image: "https://api.deezer.com/artist/246791/image?size=big", monthlyListeners: "73 400 000", verified: true, bio: "Canadian rapper and singer dominating the charts since 2009." },
  { id: "kendrick", name: "Kendrick Lamar", genre: "Rap", image: "https://api.deezer.com/artist/1188226/image?size=big", monthlyListeners: "44 500 000", verified: true, bio: "Pulitzer Prize-winning rapper from Compton." },
  { id: "weeknd", name: "The Weeknd", genre: "R&B / Pop", image: "https://api.deezer.com/artist/4050205/image?size=big", monthlyListeners: "94 100 000", verified: true, bio: "Canadian singer known for dark R&B and synth-pop anthems." },
  { id: "daftpunk", name: "Daft Punk", genre: "Electro", image: "https://api.deezer.com/artist/27/image?size=big", monthlyListeners: "33 800 000", verified: true, bio: "Legendary French electronic duo. Disbanded in 2021." },
  { id: "pnl", name: "PNL", genre: "Rap FR", image: "https://api.deezer.com/artist/5765900/image?size=big", monthlyListeners: "8 200 000", verified: true, bio: "French rap duo from Corbeil-Essonnes, known for cloud rap aesthetics." },
  { id: "stromae", name: "Stromae", genre: "Electro Pop", image: "https://api.deezer.com/artist/1562681/image?size=big", monthlyListeners: "15 600 000", verified: true, bio: "Belgian singer-songwriter blending electronic music with African rhythms." },
  { id: "rihanna", name: "Rihanna", genre: "Pop / R&B", image: "https://api.deezer.com/artist/564/image?size=big", monthlyListeners: "62 700 000", verified: true, bio: "Barbadian pop icon and global superstar." },
  { id: "jcole", name: "J. Cole", genre: "Rap", image: "https://api.deezer.com/artist/1538236/image?size=big", monthlyListeners: "38 500 000", verified: true, bio: "Rapper, singer, and producer from North Carolina." },
  { id: "kaytranada", name: "KAYTRANADA", genre: "Electronic", image: "https://api.deezer.com/artist/4860761/image?size=big", monthlyListeners: "5 200 000", verified: true, bio: "Haitian-Canadian DJ and producer blending house, R&B, and hip-hop." },
  { id: "josman", name: "Josman", genre: "Rap FR", image: "https://api.deezer.com/artist/12113024/image?size=big", monthlyListeners: "4 100 000", verified: true, bio: "French rapper known for smooth delivery and bilingual lyrics." },
  { id: "naika", name: "Naïka", genre: "Indie Pop", image: "https://api.deezer.com/artist/64218342/image?size=big", monthlyListeners: "520 000", verified: false, bio: "Haitian-American singer blending indie pop with R&B." },
  { id: "tellier", name: "Sébastien Tellier", genre: "Electro", image: "https://api.deezer.com/artist/4109/image?size=big", monthlyListeners: "1 800 000", verified: true, bio: "French musician known for romantic electro-pop." },
  // 15 NEW ARTISTS
  { id: "tyler", name: "Tyler, The Creator", genre: "Rap / Neo-Soul", image: "https://api.deezer.com/artist/1196944/image?size=big", monthlyListeners: "35 600 000", verified: true, bio: "Rapper, producer, and fashion icon from Los Angeles." },
  { id: "sza", name: "SZA", genre: "R&B", image: "https://api.deezer.com/artist/4967940/image?size=big", monthlyListeners: "45 800 000", verified: true, bio: "R&B singer known for vulnerable lyrics and ethereal vocals." },
  { id: "billie", name: "Billie Eilish", genre: "Pop / Alt", image: "https://api.deezer.com/artist/9635624/image?size=big", monthlyListeners: "68 200 000", verified: true, bio: "Genre-defying artist known for whispery vocals and dark pop." },
  { id: "travis", name: "Travis Scott", genre: "Rap / Trap", image: "https://api.deezer.com/artist/4468936/image?size=big", monthlyListeners: "52 300 000", verified: true, bio: "Houston rapper known for psychedelic trap and massive live shows." },
  { id: "frank", name: "Frank Ocean", genre: "R&B / Soul", image: "https://api.deezer.com/artist/58919/image?size=big", monthlyListeners: "28 400 000", verified: true, bio: "Enigmatic R&B visionary and cultural icon." },
  { id: "childish", name: "Childish Gambino", genre: "Rap / Funk", image: "https://api.deezer.com/artist/2093760/image?size=big", monthlyListeners: "22 100 000", verified: true, bio: "Multi-talented artist, actor, and creator." },
  { id: "dua", name: "Dua Lipa", genre: "Pop / Dance", image: "https://api.deezer.com/artist/9635624/image?size=big", monthlyListeners: "71 500 000", verified: true, bio: "British-Albanian pop star dominating dance-pop." },
  { id: "aya", name: "Aya Nakamura", genre: "Pop / Afro", image: "https://api.deezer.com/artist/10840449/image?size=big", monthlyListeners: "18 200 000", verified: true, bio: "Most-streamed French-speaking female artist globally." },
  { id: "ninho", name: "Ninho", genre: "Rap FR", image: "https://api.deezer.com/artist/9266972/image?size=big", monthlyListeners: "11 400 000", verified: true, bio: "French rapper from Essonne, king of French rap certifications." },
  { id: "arctic", name: "Arctic Monkeys", genre: "Rock / Indie", image: "https://api.deezer.com/artist/92/image?size=big", monthlyListeners: "42 300 000", verified: true, bio: "British rock band fronted by Alex Turner." },
  { id: "tame", name: "Tame Impala", genre: "Psychedelic Pop", image: "https://api.deezer.com/artist/4503610/image?size=big", monthlyListeners: "24 600 000", verified: true, bio: "Kevin Parker's psychedelic pop project from Perth." },
  { id: "rosalia", name: "Rosalía", genre: "Pop / Flamenco", image: "https://api.deezer.com/artist/4498029/image?size=big", monthlyListeners: "19 800 000", verified: true, bio: "Spanish singer blending flamenco with electronic and urban music." },
  { id: "bad", name: "Bad Bunny", genre: "Reggaeton / Latin", image: "https://api.deezer.com/artist/10583405/image?size=big", monthlyListeners: "84 200 000", verified: true, bio: "Puerto Rican artist reshaping Latin music worldwide." },
  { id: "mac", name: "Mac Miller", genre: "Rap / Jazz", image: "https://api.deezer.com/artist/1523467/image?size=big", monthlyListeners: "22 500 000", verified: true, bio: "Late Pittsburgh rapper known for introspective, genre-blending music." },
  { id: "burna", name: "Burna Boy", genre: "Afrobeats", image: "https://api.deezer.com/artist/3328952/image?size=big", monthlyListeners: "16 900 000", verified: true, bio: "Nigerian Afrobeats superstar and Grammy winner." },
];

// ── ALBUMS (40) ──
export const albums: Album[] = [
  // PLK
  { id: "al1", title: "Grand Garçon", artistId: "plk", artistName: "PLK", cover: "https://api.deezer.com/album/302377237/image?size=big", year: 2023, genre: "Rap FR" },
  { id: "al2", title: "Enna", artistId: "plk", artistName: "PLK", cover: "https://api.deezer.com/album/185729542/image?size=big", year: 2021, genre: "Rap FR" },
  // RAYE
  { id: "al3", title: "My 21st Century Blues", artistId: "raye", artistName: "RAYE", cover: "https://api.deezer.com/album/399901057/image?size=big", year: 2023, genre: "Pop" },
  // Drake
  { id: "al4", title: "Views", artistId: "drake", artistName: "Drake", cover: "https://api.deezer.com/album/12645764/image?size=big", year: 2016, genre: "Rap" },
  { id: "al5", title: "Scorpion", artistId: "drake", artistName: "Drake", cover: "https://api.deezer.com/album/63248551/image?size=big", year: 2018, genre: "Rap" },
  // Kendrick
  { id: "al6", title: "DAMN.", artistId: "kendrick", artistName: "Kendrick Lamar", cover: "https://api.deezer.com/album/15941022/image?size=big", year: 2017, genre: "Rap" },
  { id: "al7", title: "good kid, m.A.A.d city", artistId: "kendrick", artistName: "Kendrick Lamar", cover: "https://api.deezer.com/album/6575789/image?size=big", year: 2012, genre: "Rap" },
  // The Weeknd
  { id: "al8", title: "After Hours", artistId: "weeknd", artistName: "The Weeknd", cover: "https://api.deezer.com/album/131568622/image?size=big", year: 2020, genre: "R&B" },
  { id: "al9", title: "Starboy", artistId: "weeknd", artistName: "The Weeknd", cover: "https://api.deezer.com/album/12266608/image?size=big", year: 2016, genre: "R&B" },
  // Daft Punk
  { id: "al10", title: "Random Access Memories", artistId: "daftpunk", artistName: "Daft Punk", cover: "https://api.deezer.com/album/6899858/image?size=big", year: 2013, genre: "Electro" },
  { id: "al11", title: "Homework", artistId: "daftpunk", artistName: "Daft Punk", cover: "https://api.deezer.com/album/302127/image?size=big", year: 1997, genre: "Electro" },
  // PNL
  { id: "al12", title: "Deux Frères", artistId: "pnl", artistName: "PNL", cover: "https://api.deezer.com/album/90913832/image?size=big", year: 2019, genre: "Rap FR" },
  // Stromae
  { id: "al13", title: "Cheese", artistId: "stromae", artistName: "Stromae", cover: "https://api.deezer.com/album/1109731/image?size=big", year: 2010, genre: "Electro Pop" },
  { id: "al14", title: "Racine carrée", artistId: "stromae", artistName: "Stromae", cover: "https://api.deezer.com/album/6899858/image?size=big", year: 2013, genre: "Electro Pop" },
  // Rihanna
  { id: "al15", title: "Unapologetic", artistId: "rihanna", artistName: "Rihanna", cover: "https://api.deezer.com/album/6324564/image?size=big", year: 2012, genre: "Pop" },
  { id: "al16", title: "Good Girl Gone Bad", artistId: "rihanna", artistName: "Rihanna", cover: "https://api.deezer.com/album/303117/image?size=big", year: 2007, genre: "Pop" },
  // J. Cole
  { id: "al17", title: "2014 Forest Hills Drive", artistId: "jcole", artistName: "J. Cole", cover: "https://api.deezer.com/album/9238947/image?size=big", year: 2014, genre: "Rap" },
  // Kanye
  { id: "al18", title: "Graduation", artistId: "kanye", artistName: "Kanye West", cover: "https://api.deezer.com/album/302127/image?size=big", year: 2007, genre: "Rap" },
  { id: "al19", title: "My Beautiful Dark Twisted Fantasy", artistId: "kanye", artistName: "Kanye West", cover: "https://api.deezer.com/album/793758/image?size=big", year: 2010, genre: "Rap" },
  // KAYTRANADA
  { id: "al20", title: "99.9%", artistId: "kaytranada", artistName: "KAYTRANADA", cover: "https://api.deezer.com/album/12590402/image?size=big", year: 2016, genre: "Electronic" },
  // Josman
  { id: "al21", title: "J.O.$", artistId: "josman", artistName: "Josman", cover: "https://api.deezer.com/album/298147477/image?size=big", year: 2022, genre: "Rap FR" },
  // Tyler
  { id: "al22", title: "IGOR", artistId: "tyler", artistName: "Tyler, The Creator", cover: "https://api.deezer.com/album/97940892/image?size=big", year: 2019, genre: "Neo-Soul" },
  { id: "al23", title: "CALL ME IF YOU GET LOST", artistId: "tyler", artistName: "Tyler, The Creator", cover: "https://api.deezer.com/album/232683092/image?size=big", year: 2021, genre: "Rap" },
  // SZA
  { id: "al24", title: "SOS", artistId: "sza", artistName: "SZA", cover: "https://api.deezer.com/album/373469057/image?size=big", year: 2022, genre: "R&B" },
  { id: "al25", title: "Ctrl", artistId: "sza", artistName: "SZA", cover: "https://api.deezer.com/album/44779901/image?size=big", year: 2017, genre: "R&B" },
  // Billie
  { id: "al26", title: "WHEN WE ALL FALL ASLEEP", artistId: "billie", artistName: "Billie Eilish", cover: "https://api.deezer.com/album/85701312/image?size=big", year: 2019, genre: "Pop" },
  { id: "al27", title: "Happier Than Ever", artistId: "billie", artistName: "Billie Eilish", cover: "https://api.deezer.com/album/239405092/image?size=big", year: 2021, genre: "Pop" },
  // Travis
  { id: "al28", title: "ASTROWORLD", artistId: "travis", artistName: "Travis Scott", cover: "https://api.deezer.com/album/71783272/image?size=big", year: 2018, genre: "Trap" },
  // Frank Ocean
  { id: "al29", title: "Blonde", artistId: "frank", artistName: "Frank Ocean", cover: "https://api.deezer.com/album/12590402/image?size=big", year: 2016, genre: "R&B" },
  { id: "al30", title: "Channel Orange", artistId: "frank", artistName: "Frank Ocean", cover: "https://api.deezer.com/album/12590402/image?size=big", year: 2012, genre: "R&B" },
  // Aya Nakamura
  { id: "al31", title: "Nakamura", artistId: "aya", artistName: "Aya Nakamura", cover: "https://api.deezer.com/album/72936542/image?size=big", year: 2018, genre: "Pop" },
  // Ninho
  { id: "al32", title: "Jefe", artistId: "ninho", artistName: "Ninho", cover: "https://api.deezer.com/album/244780132/image?size=big", year: 2021, genre: "Rap FR" },
  // Arctic Monkeys
  { id: "al33", title: "AM", artistId: "arctic", artistName: "Arctic Monkeys", cover: "https://api.deezer.com/album/7091546/image?size=big", year: 2013, genre: "Rock" },
  // Tame Impala
  { id: "al34", title: "Currents", artistId: "tame", artistName: "Tame Impala", cover: "https://api.deezer.com/album/10426862/image?size=big", year: 2015, genre: "Psychedelic Pop" },
  // Rosalía
  { id: "al35", title: "MOTOMAMI", artistId: "rosalia", artistName: "Rosalía", cover: "https://api.deezer.com/album/298147477/image?size=big", year: 2022, genre: "Pop" },
  // Bad Bunny
  { id: "al36", title: "Un Verano Sin Ti", artistId: "bad", artistName: "Bad Bunny", cover: "https://api.deezer.com/album/316995327/image?size=big", year: 2022, genre: "Reggaeton" },
  // Mac Miller
  { id: "al37", title: "Swimming", artistId: "mac", artistName: "Mac Miller", cover: "https://api.deezer.com/album/71783272/image?size=big", year: 2018, genre: "Rap" },
  { id: "al38", title: "Circles", artistId: "mac", artistName: "Mac Miller", cover: "https://api.deezer.com/album/120929162/image?size=big", year: 2020, genre: "Rap" },
  // Burna Boy
  { id: "al39", title: "African Giant", artistId: "burna", artistName: "Burna Boy", cover: "https://api.deezer.com/album/107782272/image?size=big", year: 2019, genre: "Afrobeats" },
  // Childish Gambino
  { id: "al40", title: "Awaken, My Love!", artistId: "childish", artistName: "Childish Gambino", cover: "https://api.deezer.com/album/14747438/image?size=big", year: 2016, genre: "Funk" },
];

// ── FREE AUDIO from SoundHelix (royalty-free demo MP3s) ──
const a = (n: number) => `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

// ── TRACKS (104) ──
export const tracks: Track[] = [
  // PLK (5)
  { id: "t1", title: "Pocahontas", artistId: "plk", artistName: "PLK", album: "Grand Garçon", albumId: "al1", duration: "3:24", durationMs: 204000, cover: "https://api.deezer.com/album/302377237/image?size=big", audioUrl: a(1), genre: "Rap FR" },
  { id: "t2", title: "Sex Model", artistId: "plk", artistName: "PLK", album: "Grand Garçon", albumId: "al1", duration: "2:48", durationMs: 168000, cover: "https://api.deezer.com/album/302377237/image?size=big", audioUrl: a(2), genre: "Rap FR" },
  { id: "t3", title: "Tu dors?", artistId: "plk", artistName: "PLK", album: "Grand Garçon", albumId: "al1", duration: "3:12", durationMs: 192000, cover: "https://api.deezer.com/album/302377237/image?size=big", audioUrl: a(3), genre: "Rap FR" },
  { id: "t100", title: "Pilote", artistId: "plk", artistName: "PLK", album: "Enna", albumId: "al2", duration: "3:05", durationMs: 185000, cover: "https://api.deezer.com/album/185729542/image?size=big", audioUrl: a(4), genre: "Rap FR" },
  { id: "t101", title: "Pas les mêmes", artistId: "plk", artistName: "PLK", album: "Enna", albumId: "al2", duration: "2:55", durationMs: 175000, cover: "https://api.deezer.com/album/185729542/image?size=big", audioUrl: a(5), genre: "Rap FR" },

  // RAYE (4)
  { id: "t4", title: "Escapism", artistId: "raye", artistName: "RAYE", album: "My 21st Century Blues", albumId: "al3", duration: "3:30", durationMs: 210000, cover: "https://api.deezer.com/album/399901057/image?size=big", audioUrl: a(4), genre: "Pop" },
  { id: "t5", title: "Oscar Winning Tears", artistId: "raye", artistName: "RAYE", album: "My 21st Century Blues", albumId: "al3", duration: "3:05", durationMs: 185000, cover: "https://api.deezer.com/album/399901057/image?size=big", audioUrl: a(5), genre: "Pop" },
  { id: "t102", title: "Ice Cream Man", artistId: "raye", artistName: "RAYE", album: "My 21st Century Blues", albumId: "al3", duration: "3:48", durationMs: 228000, cover: "https://api.deezer.com/album/399901057/image?size=big", audioUrl: a(6), genre: "Pop" },
  { id: "t103", title: "Hard Out Here", artistId: "raye", artistName: "RAYE", album: "My 21st Century Blues", albumId: "al3", duration: "4:12", durationMs: 252000, cover: "https://api.deezer.com/album/399901057/image?size=big", audioUrl: a(7), genre: "Pop" },

  // Drake (5)
  { id: "t6", title: "Hotline Bling", artistId: "drake", artistName: "Drake", album: "Views", albumId: "al4", duration: "4:27", durationMs: 267000, cover: "https://api.deezer.com/album/12645764/image?size=big", audioUrl: a(6), genre: "Rap" },
  { id: "t7", title: "God's Plan", artistId: "drake", artistName: "Drake", album: "Scorpion", albumId: "al5", duration: "3:18", durationMs: 198000, cover: "https://api.deezer.com/album/63248551/image?size=big", audioUrl: a(7), genre: "Rap" },
  { id: "t104", title: "One Dance", artistId: "drake", artistName: "Drake", album: "Views", albumId: "al4", duration: "2:54", durationMs: 174000, cover: "https://api.deezer.com/album/12645764/image?size=big", audioUrl: a(8), genre: "Rap" },
  { id: "t105", title: "Nice For What", artistId: "drake", artistName: "Drake", album: "Scorpion", albumId: "al5", duration: "3:30", durationMs: 210000, cover: "https://api.deezer.com/album/63248551/image?size=big", audioUrl: a(9), genre: "Rap" },
  { id: "t106", title: "In My Feelings", artistId: "drake", artistName: "Drake", album: "Scorpion", albumId: "al5", duration: "3:37", durationMs: 217000, cover: "https://api.deezer.com/album/63248551/image?size=big", audioUrl: a(10), genre: "Rap" },

  // Kendrick Lamar (4)
  { id: "t8", title: "HUMBLE.", artistId: "kendrick", artistName: "Kendrick Lamar", album: "DAMN.", albumId: "al6", duration: "2:57", durationMs: 177000, cover: "https://api.deezer.com/album/15941022/image?size=big", audioUrl: a(8), genre: "Rap" },
  { id: "t9", title: "Money Trees", artistId: "kendrick", artistName: "Kendrick Lamar", album: "good kid, m.A.A.d city", albumId: "al7", duration: "6:26", durationMs: 386000, cover: "https://api.deezer.com/album/6575789/image?size=big", audioUrl: a(9), genre: "Rap" },
  { id: "t107", title: "DNA.", artistId: "kendrick", artistName: "Kendrick Lamar", album: "DAMN.", albumId: "al6", duration: "3:05", durationMs: 185000, cover: "https://api.deezer.com/album/15941022/image?size=big", audioUrl: a(11), genre: "Rap" },
  { id: "t108", title: "Swimming Pools", artistId: "kendrick", artistName: "Kendrick Lamar", album: "good kid, m.A.A.d city", albumId: "al7", duration: "5:13", durationMs: 313000, cover: "https://api.deezer.com/album/6575789/image?size=big", audioUrl: a(12), genre: "Rap" },

  // The Weeknd (5)
  { id: "t10", title: "Blinding Lights", artistId: "weeknd", artistName: "The Weeknd", album: "After Hours", albumId: "al8", duration: "3:20", durationMs: 200000, cover: "https://api.deezer.com/album/131568622/image?size=big", audioUrl: a(10), genre: "Pop" },
  { id: "t11", title: "Starboy", artistId: "weeknd", artistName: "The Weeknd", album: "Starboy", albumId: "al9", duration: "3:50", durationMs: 230000, cover: "https://api.deezer.com/album/12266608/image?size=big", audioUrl: a(11), genre: "Pop" },
  { id: "t109", title: "Save Your Tears", artistId: "weeknd", artistName: "The Weeknd", album: "After Hours", albumId: "al8", duration: "3:35", durationMs: 215000, cover: "https://api.deezer.com/album/131568622/image?size=big", audioUrl: a(12), genre: "Pop" },
  { id: "t110", title: "After Hours", artistId: "weeknd", artistName: "The Weeknd", album: "After Hours", albumId: "al8", duration: "6:01", durationMs: 361000, cover: "https://api.deezer.com/album/131568622/image?size=big", audioUrl: a(13), genre: "R&B" },
  { id: "t111", title: "Die For You", artistId: "weeknd", artistName: "The Weeknd", album: "Starboy", albumId: "al9", duration: "4:01", durationMs: 241000, cover: "https://api.deezer.com/album/12266608/image?size=big", audioUrl: a(14), genre: "R&B" },

  // Daft Punk (4)
  { id: "t12", title: "Get Lucky", artistId: "daftpunk", artistName: "Daft Punk", album: "Random Access Memories", albumId: "al10", duration: "6:09", durationMs: 369000, cover: "https://api.deezer.com/album/6899858/image?size=big", audioUrl: a(12), genre: "Electro" },
  { id: "t13", title: "Around the World", artistId: "daftpunk", artistName: "Daft Punk", album: "Homework", albumId: "al11", duration: "7:09", durationMs: 429000, cover: "https://api.deezer.com/album/302127/image?size=big", audioUrl: a(13), genre: "Electro" },
  { id: "t112", title: "Instant Crush", artistId: "daftpunk", artistName: "Daft Punk", album: "Random Access Memories", albumId: "al10", duration: "5:37", durationMs: 337000, cover: "https://api.deezer.com/album/6899858/image?size=big", audioUrl: a(15), genre: "Electro" },
  { id: "t113", title: "One More Time", artistId: "daftpunk", artistName: "Daft Punk", album: "Homework", albumId: "al11", duration: "5:20", durationMs: 320000, cover: "https://api.deezer.com/album/302127/image?size=big", audioUrl: a(16), genre: "Electro" },

  // PNL (4)
  { id: "t14", title: "Au DD", artistId: "pnl", artistName: "PNL", album: "Deux Frères", albumId: "al12", duration: "3:42", durationMs: 222000, cover: "https://api.deezer.com/album/90913832/image?size=big", audioUrl: a(14), genre: "Rap FR" },
  { id: "t15", title: "À l'ammoniaque", artistId: "pnl", artistName: "PNL", album: "Deux Frères", albumId: "al12", duration: "4:01", durationMs: 241000, cover: "https://api.deezer.com/album/90913832/image?size=big", audioUrl: a(15), genre: "Rap FR" },
  { id: "t114", title: "Onizuka", artistId: "pnl", artistName: "PNL", album: "Deux Frères", albumId: "al12", duration: "3:33", durationMs: 213000, cover: "https://api.deezer.com/album/90913832/image?size=big", audioUrl: a(16), genre: "Rap FR" },
  { id: "t115", title: "Blanka", artistId: "pnl", artistName: "PNL", album: "Deux Frères", albumId: "al12", duration: "3:18", durationMs: 198000, cover: "https://api.deezer.com/album/90913832/image?size=big", audioUrl: a(1), genre: "Rap FR" },

  // Stromae (4)
  { id: "t16", title: "Alors on danse", artistId: "stromae", artistName: "Stromae", album: "Cheese", albumId: "al13", duration: "3:28", durationMs: 208000, cover: "https://api.deezer.com/album/1109731/image?size=big", audioUrl: a(16), genre: "Electro Pop" },
  { id: "t17", title: "Papaoutai", artistId: "stromae", artistName: "Stromae", album: "Racine carrée", albumId: "al14", duration: "3:53", durationMs: 233000, cover: "https://api.deezer.com/album/6899858/image?size=big", audioUrl: a(1), genre: "Electro Pop" },
  { id: "t116", title: "Formidable", artistId: "stromae", artistName: "Stromae", album: "Racine carrée", albumId: "al14", duration: "3:22", durationMs: 202000, cover: "https://api.deezer.com/album/6899858/image?size=big", audioUrl: a(2), genre: "Electro Pop" },
  { id: "t117", title: "Tous les mêmes", artistId: "stromae", artistName: "Stromae", album: "Racine carrée", albumId: "al14", duration: "3:25", durationMs: 205000, cover: "https://api.deezer.com/album/6899858/image?size=big", audioUrl: a(3), genre: "Electro Pop" },

  // Rihanna (4)
  { id: "t18", title: "Diamonds", artistId: "rihanna", artistName: "Rihanna", album: "Unapologetic", albumId: "al15", duration: "3:45", durationMs: 225000, cover: "https://api.deezer.com/album/6324564/image?size=big", audioUrl: a(2), genre: "Pop" },
  { id: "t19", title: "Umbrella", artistId: "rihanna", artistName: "Rihanna", album: "Good Girl Gone Bad", albumId: "al16", duration: "4:36", durationMs: 276000, cover: "https://api.deezer.com/album/303117/image?size=big", audioUrl: a(3), genre: "Pop" },
  { id: "t118", title: "We Found Love", artistId: "rihanna", artistName: "Rihanna", album: "Unapologetic", albumId: "al15", duration: "3:36", durationMs: 216000, cover: "https://api.deezer.com/album/6324564/image?size=big", audioUrl: a(4), genre: "Pop" },
  { id: "t119", title: "Stay", artistId: "rihanna", artistName: "Rihanna", album: "Unapologetic", albumId: "al15", duration: "4:00", durationMs: 240000, cover: "https://api.deezer.com/album/6324564/image?size=big", audioUrl: a(5), genre: "Pop" },

  // J. Cole (3)
  { id: "t20", title: "No Role Modelz", artistId: "jcole", artistName: "J. Cole", album: "2014 Forest Hills Drive", albumId: "al17", duration: "4:52", durationMs: 292000, cover: "https://api.deezer.com/album/9238947/image?size=big", audioUrl: a(4), genre: "Rap" },
  { id: "t120", title: "Middle Child", artistId: "jcole", artistName: "J. Cole", album: "2014 Forest Hills Drive", albumId: "al17", duration: "3:33", durationMs: 213000, cover: "https://api.deezer.com/album/9238947/image?size=big", audioUrl: a(6), genre: "Rap" },
  { id: "t121", title: "Wet Dreamz", artistId: "jcole", artistName: "J. Cole", album: "2014 Forest Hills Drive", albumId: "al17", duration: "4:13", durationMs: 253000, cover: "https://api.deezer.com/album/9238947/image?size=big", audioUrl: a(7), genre: "Rap" },

  // Kanye (5)
  { id: "t21", title: "Stronger", artistId: "kanye", artistName: "Kanye West", album: "Graduation", albumId: "al18", duration: "5:11", durationMs: 311000, cover: "https://api.deezer.com/album/302127/image?size=big", audioUrl: a(5), genre: "Rap" },
  { id: "t22", title: "Runaway", artistId: "kanye", artistName: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", albumId: "al19", duration: "9:07", durationMs: 547000, cover: "https://api.deezer.com/album/793758/image?size=big", audioUrl: a(6), genre: "Rap" },
  { id: "t122", title: "Flashing Lights", artistId: "kanye", artistName: "Kanye West", album: "Graduation", albumId: "al18", duration: "3:57", durationMs: 237000, cover: "https://api.deezer.com/album/302127/image?size=big", audioUrl: a(8), genre: "Rap" },
  { id: "t123", title: "Power", artistId: "kanye", artistName: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", albumId: "al19", duration: "4:52", durationMs: 292000, cover: "https://api.deezer.com/album/793758/image?size=big", audioUrl: a(9), genre: "Rap" },
  { id: "t124", title: "Gold Digger", artistId: "kanye", artistName: "Kanye West", album: "Graduation", albumId: "al18", duration: "3:28", durationMs: 208000, cover: "https://api.deezer.com/album/302127/image?size=big", audioUrl: a(10), genre: "Rap" },

  // KAYTRANADA (3)
  { id: "t23", title: "GLOWED UP", artistId: "kaytranada", artistName: "KAYTRANADA", album: "99.9%", albumId: "al20", duration: "3:45", durationMs: 225000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(7), genre: "Electronic" },
  { id: "t125", title: "LITE SPOTS", artistId: "kaytranada", artistName: "KAYTRANADA", album: "99.9%", albumId: "al20", duration: "4:08", durationMs: 248000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(11), genre: "Electronic" },
  { id: "t126", title: "YOU'RE THE ONE", artistId: "kaytranada", artistName: "KAYTRANADA", album: "99.9%", albumId: "al20", duration: "3:30", durationMs: 210000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(12), genre: "Electronic" },

  // Josman (3)
  { id: "t24", title: "J'ai pas le temps", artistId: "josman", artistName: "Josman", album: "J.O.$", albumId: "al21", duration: "3:02", durationMs: 182000, cover: "https://api.deezer.com/album/298147477/image?size=big", audioUrl: a(8), genre: "Rap FR" },
  { id: "t127", title: "Samedi soir", artistId: "josman", artistName: "Josman", album: "J.O.$", albumId: "al21", duration: "3:18", durationMs: 198000, cover: "https://api.deezer.com/album/298147477/image?size=big", audioUrl: a(13), genre: "Rap FR" },
  { id: "t128", title: "My G", artistId: "josman", artistName: "Josman", album: "J.O.$", albumId: "al21", duration: "2:45", durationMs: 165000, cover: "https://api.deezer.com/album/298147477/image?size=big", audioUrl: a(14), genre: "Rap FR" },

  // Tyler, The Creator (4)
  { id: "t30", title: "EARFQUAKE", artistId: "tyler", artistName: "Tyler, The Creator", album: "IGOR", albumId: "al22", duration: "3:10", durationMs: 190000, cover: "https://api.deezer.com/album/97940892/image?size=big", audioUrl: a(1), genre: "Neo-Soul" },
  { id: "t31", title: "See You Again", artistId: "tyler", artistName: "Tyler, The Creator", album: "IGOR", albumId: "al22", duration: "3:00", durationMs: 180000, cover: "https://api.deezer.com/album/97940892/image?size=big", audioUrl: a(2), genre: "Neo-Soul" },
  { id: "t32", title: "LEMONHEAD", artistId: "tyler", artistName: "Tyler, The Creator", album: "CALL ME IF YOU GET LOST", albumId: "al23", duration: "3:45", durationMs: 225000, cover: "https://api.deezer.com/album/232683092/image?size=big", audioUrl: a(3), genre: "Rap" },
  { id: "t33", title: "WUSYANAME", artistId: "tyler", artistName: "Tyler, The Creator", album: "CALL ME IF YOU GET LOST", albumId: "al23", duration: "2:41", durationMs: 161000, cover: "https://api.deezer.com/album/232683092/image?size=big", audioUrl: a(4), genre: "Rap" },

  // SZA (5)
  { id: "t34", title: "Kill Bill", artistId: "sza", artistName: "SZA", album: "SOS", albumId: "al24", duration: "2:33", durationMs: 153000, cover: "https://api.deezer.com/album/373469057/image?size=big", audioUrl: a(5), genre: "R&B" },
  { id: "t35", title: "Shirt", artistId: "sza", artistName: "SZA", album: "SOS", albumId: "al24", duration: "3:15", durationMs: 195000, cover: "https://api.deezer.com/album/373469057/image?size=big", audioUrl: a(6), genre: "R&B" },
  { id: "t36", title: "Snooze", artistId: "sza", artistName: "SZA", album: "SOS", albumId: "al24", duration: "3:21", durationMs: 201000, cover: "https://api.deezer.com/album/373469057/image?size=big", audioUrl: a(7), genre: "R&B" },
  { id: "t37", title: "Love Galore", artistId: "sza", artistName: "SZA", album: "Ctrl", albumId: "al25", duration: "5:17", durationMs: 317000, cover: "https://api.deezer.com/album/44779901/image?size=big", audioUrl: a(8), genre: "R&B" },
  { id: "t38", title: "The Weekend", artistId: "sza", artistName: "SZA", album: "Ctrl", albumId: "al25", duration: "3:30", durationMs: 210000, cover: "https://api.deezer.com/album/44779901/image?size=big", audioUrl: a(9), genre: "R&B" },

  // Billie Eilish (4)
  { id: "t39", title: "bad guy", artistId: "billie", artistName: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP", albumId: "al26", duration: "3:14", durationMs: 194000, cover: "https://api.deezer.com/album/85701312/image?size=big", audioUrl: a(10), genre: "Pop" },
  { id: "t40", title: "bury a friend", artistId: "billie", artistName: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP", albumId: "al26", duration: "3:13", durationMs: 193000, cover: "https://api.deezer.com/album/85701312/image?size=big", audioUrl: a(11), genre: "Pop" },
  { id: "t41", title: "Happier Than Ever", artistId: "billie", artistName: "Billie Eilish", album: "Happier Than Ever", albumId: "al27", duration: "4:58", durationMs: 298000, cover: "https://api.deezer.com/album/239405092/image?size=big", audioUrl: a(12), genre: "Pop" },
  { id: "t42", title: "Therefore I Am", artistId: "billie", artistName: "Billie Eilish", album: "Happier Than Ever", albumId: "al27", duration: "2:54", durationMs: 174000, cover: "https://api.deezer.com/album/239405092/image?size=big", audioUrl: a(13), genre: "Pop" },

  // Travis Scott (4)
  { id: "t43", title: "SICKO MODE", artistId: "travis", artistName: "Travis Scott", album: "ASTROWORLD", albumId: "al28", duration: "5:12", durationMs: 312000, cover: "https://api.deezer.com/album/71783272/image?size=big", audioUrl: a(14), genre: "Trap" },
  { id: "t44", title: "goosebumps", artistId: "travis", artistName: "Travis Scott", album: "ASTROWORLD", albumId: "al28", duration: "4:03", durationMs: 243000, cover: "https://api.deezer.com/album/71783272/image?size=big", audioUrl: a(15), genre: "Trap" },
  { id: "t45", title: "STARGAZING", artistId: "travis", artistName: "Travis Scott", album: "ASTROWORLD", albumId: "al28", duration: "4:31", durationMs: 271000, cover: "https://api.deezer.com/album/71783272/image?size=big", audioUrl: a(16), genre: "Trap" },
  { id: "t46", title: "BUTTERFLY EFFECT", artistId: "travis", artistName: "Travis Scott", album: "ASTROWORLD", albumId: "al28", duration: "3:10", durationMs: 190000, cover: "https://api.deezer.com/album/71783272/image?size=big", audioUrl: a(1), genre: "Trap" },

  // Frank Ocean (4)
  { id: "t47", title: "Nights", artistId: "frank", artistName: "Frank Ocean", album: "Blonde", albumId: "al29", duration: "5:07", durationMs: 307000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(2), genre: "R&B" },
  { id: "t48", title: "Pink + White", artistId: "frank", artistName: "Frank Ocean", album: "Blonde", albumId: "al29", duration: "3:04", durationMs: 184000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(3), genre: "R&B" },
  { id: "t49", title: "Thinkin Bout You", artistId: "frank", artistName: "Frank Ocean", album: "Channel Orange", albumId: "al30", duration: "3:20", durationMs: 200000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(4), genre: "R&B" },
  { id: "t50", title: "Pyramids", artistId: "frank", artistName: "Frank Ocean", album: "Channel Orange", albumId: "al30", duration: "9:53", durationMs: 593000, cover: "https://api.deezer.com/album/12590402/image?size=big", audioUrl: a(5), genre: "R&B" },

  // Childish Gambino (3)
  { id: "t51", title: "Redbone", artistId: "childish", artistName: "Childish Gambino", album: "Awaken, My Love!", albumId: "al40", duration: "5:27", durationMs: 327000, cover: "https://api.deezer.com/album/14747438/image?size=big", audioUrl: a(6), genre: "Funk" },
  { id: "t52", title: "This Is America", artistId: "childish", artistName: "Childish Gambino", album: "Awaken, My Love!", albumId: "al40", duration: "3:45", durationMs: 225000, cover: "https://api.deezer.com/album/14747438/image?size=big", audioUrl: a(7), genre: "Rap" },
  { id: "t53", title: "Feels Like Summer", artistId: "childish", artistName: "Childish Gambino", album: "Awaken, My Love!", albumId: "al40", duration: "3:56", durationMs: 236000, cover: "https://api.deezer.com/album/14747438/image?size=big", audioUrl: a(8), genre: "R&B" },

  // Aya Nakamura (3)
  { id: "t54", title: "Djadja", artistId: "aya", artistName: "Aya Nakamura", album: "Nakamura", albumId: "al31", duration: "2:58", durationMs: 178000, cover: "https://api.deezer.com/album/72936542/image?size=big", audioUrl: a(9), genre: "Pop" },
  { id: "t55", title: "Pookie", artistId: "aya", artistName: "Aya Nakamura", album: "Nakamura", albumId: "al31", duration: "3:05", durationMs: 185000, cover: "https://api.deezer.com/album/72936542/image?size=big", audioUrl: a(10), genre: "Pop" },
  { id: "t56", title: "Comportement", artistId: "aya", artistName: "Aya Nakamura", album: "Nakamura", albumId: "al31", duration: "2:48", durationMs: 168000, cover: "https://api.deezer.com/album/72936542/image?size=big", audioUrl: a(11), genre: "Pop" },

  // Ninho (4)
  { id: "t57", title: "Lettre à une femme", artistId: "ninho", artistName: "Ninho", album: "Jefe", albumId: "al32", duration: "3:42", durationMs: 222000, cover: "https://api.deezer.com/album/244780132/image?size=big", audioUrl: a(12), genre: "Rap FR" },
  { id: "t58", title: "Maman ne le sait pas", artistId: "ninho", artistName: "Ninho", album: "Jefe", albumId: "al32", duration: "3:15", durationMs: 195000, cover: "https://api.deezer.com/album/244780132/image?size=big", audioUrl: a(13), genre: "Rap FR" },
  { id: "t59", title: "La vie qu'on mène", artistId: "ninho", artistName: "Ninho", album: "Jefe", albumId: "al32", duration: "3:28", durationMs: 208000, cover: "https://api.deezer.com/album/244780132/image?size=big", audioUrl: a(14), genre: "Rap FR" },
  { id: "t60", title: "Tout ira bien", artistId: "ninho", artistName: "Ninho", album: "Jefe", albumId: "al32", duration: "3:50", durationMs: 230000, cover: "https://api.deezer.com/album/244780132/image?size=big", audioUrl: a(15), genre: "Rap FR" },

  // Arctic Monkeys (3)
  { id: "t61", title: "Do I Wanna Know?", artistId: "arctic", artistName: "Arctic Monkeys", album: "AM", albumId: "al33", duration: "4:32", durationMs: 272000, cover: "https://api.deezer.com/album/7091546/image?size=big", audioUrl: a(16), genre: "Rock" },
  { id: "t62", title: "R U Mine?", artistId: "arctic", artistName: "Arctic Monkeys", album: "AM", albumId: "al33", duration: "3:21", durationMs: 201000, cover: "https://api.deezer.com/album/7091546/image?size=big", audioUrl: a(1), genre: "Rock" },
  { id: "t63", title: "505", artistId: "arctic", artistName: "Arctic Monkeys", album: "AM", albumId: "al33", duration: "4:13", durationMs: 253000, cover: "https://api.deezer.com/album/7091546/image?size=big", audioUrl: a(2), genre: "Rock" },

  // Tame Impala (3)
  { id: "t64", title: "The Less I Know The Better", artistId: "tame", artistName: "Tame Impala", album: "Currents", albumId: "al34", duration: "3:36", durationMs: 216000, cover: "https://api.deezer.com/album/10426862/image?size=big", audioUrl: a(3), genre: "Psychedelic Pop" },
  { id: "t65", title: "Let It Happen", artistId: "tame", artistName: "Tame Impala", album: "Currents", albumId: "al34", duration: "7:47", durationMs: 467000, cover: "https://api.deezer.com/album/10426862/image?size=big", audioUrl: a(4), genre: "Psychedelic Pop" },
  { id: "t66", title: "Feels Like We Only Go Backwards", artistId: "tame", artistName: "Tame Impala", album: "Currents", albumId: "al34", duration: "3:12", durationMs: 192000, cover: "https://api.deezer.com/album/10426862/image?size=big", audioUrl: a(5), genre: "Psychedelic Pop" },

  // Rosalía (3)
  { id: "t67", title: "MALAMENTE", artistId: "rosalia", artistName: "Rosalía", album: "MOTOMAMI", albumId: "al35", duration: "2:30", durationMs: 150000, cover: "https://api.deezer.com/album/298147477/image?size=big", audioUrl: a(6), genre: "Pop" },
  { id: "t68", title: "SAOKO", artistId: "rosalia", artistName: "Rosalía", album: "MOTOMAMI", albumId: "al35", duration: "2:21", durationMs: 141000, cover: "https://api.deezer.com/album/298147477/image?size=big", audioUrl: a(7), genre: "Pop" },
  { id: "t69", title: "DESPECHÁ", artistId: "rosalia", artistName: "Rosalía", album: "MOTOMAMI", albumId: "al35", duration: "2:44", durationMs: 164000, cover: "https://api.deezer.com/album/298147477/image?size=big", audioUrl: a(8), genre: "Pop" },

  // Bad Bunny (4)
  { id: "t70", title: "Tití Me Preguntó", artistId: "bad", artistName: "Bad Bunny", album: "Un Verano Sin Ti", albumId: "al36", duration: "4:03", durationMs: 243000, cover: "https://api.deezer.com/album/316995327/image?size=big", audioUrl: a(9), genre: "Reggaeton" },
  { id: "t71", title: "Me Porto Bonito", artistId: "bad", artistName: "Bad Bunny", album: "Un Verano Sin Ti", albumId: "al36", duration: "2:58", durationMs: 178000, cover: "https://api.deezer.com/album/316995327/image?size=big", audioUrl: a(10), genre: "Reggaeton" },
  { id: "t72", title: "Ojitos Lindos", artistId: "bad", artistName: "Bad Bunny", album: "Un Verano Sin Ti", albumId: "al36", duration: "4:18", durationMs: 258000, cover: "https://api.deezer.com/album/316995327/image?size=big", audioUrl: a(11), genre: "Reggaeton" },
  { id: "t73", title: "Callaíta", artistId: "bad", artistName: "Bad Bunny", album: "Un Verano Sin Ti", albumId: "al36", duration: "3:16", durationMs: 196000, cover: "https://api.deezer.com/album/316995327/image?size=big", audioUrl: a(12), genre: "Reggaeton" },

  // Mac Miller (4)
  { id: "t74", title: "Self Care", artistId: "mac", artistName: "Mac Miller", album: "Swimming", albumId: "al37", duration: "5:44", durationMs: 344000, cover: "https://api.deezer.com/album/71783272/image?size=big", audioUrl: a(13), genre: "Rap" },
  { id: "t75", title: "Good News", artistId: "mac", artistName: "Mac Miller", album: "Circles", albumId: "al38", duration: "5:42", durationMs: 342000, cover: "https://api.deezer.com/album/120929162/image?size=big", audioUrl: a(14), genre: "Rap" },
  { id: "t76", title: "Blue World", artistId: "mac", artistName: "Mac Miller", album: "Circles", albumId: "al38", duration: "3:29", durationMs: 209000, cover: "https://api.deezer.com/album/120929162/image?size=big", audioUrl: a(15), genre: "Rap" },
  { id: "t77", title: "Ladders", artistId: "mac", artistName: "Mac Miller", album: "Swimming", albumId: "al37", duration: "4:22", durationMs: 262000, cover: "https://api.deezer.com/album/71783272/image?size=big", audioUrl: a(16), genre: "Rap" },

  // Burna Boy (3)
  { id: "t78", title: "Last Last", artistId: "burna", artistName: "Burna Boy", album: "African Giant", albumId: "al39", duration: "3:41", durationMs: 221000, cover: "https://api.deezer.com/album/107782272/image?size=big", audioUrl: a(1), genre: "Afrobeats" },
  { id: "t79", title: "On the Low", artistId: "burna", artistName: "Burna Boy", album: "African Giant", albumId: "al39", duration: "3:22", durationMs: 202000, cover: "https://api.deezer.com/album/107782272/image?size=big", audioUrl: a(2), genre: "Afrobeats" },
  { id: "t80", title: "Ye", artistId: "burna", artistName: "Burna Boy", album: "African Giant", albumId: "al39", duration: "3:18", durationMs: 198000, cover: "https://api.deezer.com/album/107782272/image?size=big", audioUrl: a(3), genre: "Afrobeats" },

  // Naïka (2)
  { id: "t81", title: "Ride", artistId: "naika", artistName: "Naïka", album: "Singles", albumId: "al3", duration: "3:15", durationMs: 195000, cover: "https://api.deezer.com/artist/64218342/image?size=big", audioUrl: a(4), genre: "Indie Pop" },
  { id: "t82", title: "Got It", artistId: "naika", artistName: "Naïka", album: "Singles", albumId: "al3", duration: "2:58", durationMs: 178000, cover: "https://api.deezer.com/artist/64218342/image?size=big", audioUrl: a(5), genre: "Indie Pop" },

  // Sébastien Tellier (2)
  { id: "t83", title: "La Ritournelle", artistId: "tellier", artistName: "Sébastien Tellier", album: "Politics", albumId: "al20", duration: "6:26", durationMs: 386000, cover: "https://api.deezer.com/artist/4109/image?size=big", audioUrl: a(6), genre: "Electro" },
  { id: "t84", title: "Sexuality", artistId: "tellier", artistName: "Sébastien Tellier", album: "Sexuality", albumId: "al20", duration: "4:04", durationMs: 244000, cover: "https://api.deezer.com/artist/4109/image?size=big", audioUrl: a(7), genre: "Electro" },

  // Dua Lipa (3)
  { id: "t85", title: "Levitating", artistId: "dua", artistName: "Dua Lipa", album: "Future Nostalgia", albumId: "al26", duration: "3:23", durationMs: 203000, cover: "https://api.deezer.com/album/131568622/image?size=big", audioUrl: a(8), genre: "Pop" },
  { id: "t86", title: "Don't Start Now", artistId: "dua", artistName: "Dua Lipa", album: "Future Nostalgia", albumId: "al26", duration: "3:03", durationMs: 183000, cover: "https://api.deezer.com/album/131568622/image?size=big", audioUrl: a(9), genre: "Pop" },
  { id: "t87", title: "Physical", artistId: "dua", artistName: "Dua Lipa", album: "Future Nostalgia", albumId: "al26", duration: "3:13", durationMs: 193000, cover: "https://api.deezer.com/album/131568622/image?size=big", audioUrl: a(10), genre: "Pop" },
];

// ── PLAYLISTS (10) ──
export const playlists: Playlist[] = [
  {
    id: "pl1", name: "Top Hits 2024", description: "The biggest tracks right now",
    tracks: ["t10", "t6", "t8", "t18", "t4", "t16", "t12", "t34", "t39", "t43", "t54", "t70"],
    cover: "https://api.deezer.com/album/131568622/image?size=big",
  },
  {
    id: "pl2", name: "Rap FR Essentials", description: "Le meilleur du rap français",
    tracks: ["t1", "t2", "t3", "t14", "t15", "t24", "t57", "t58", "t100", "t114", "t127"],
    cover: "https://api.deezer.com/album/302377237/image?size=big",
  },
  {
    id: "pl3", name: "Chill Vibes", description: "Relax and unwind with these smooth tracks",
    tracks: ["t23", "t11", "t5", "t20", "t17", "t47", "t48", "t75", "t64", "t125"],
    cover: "https://api.deezer.com/album/12590402/image?size=big",
  },
  {
    id: "pl4", name: "Classics Forever", description: "Timeless tracks that never get old",
    tracks: ["t12", "t13", "t19", "t21", "t22", "t113", "t112", "t9", "t83"],
    cover: "https://api.deezer.com/album/302127/image?size=big",
  },
  {
    id: "pl5", name: "R&B Mood", description: "Smooth R&B for every mood",
    tracks: ["t34", "t35", "t36", "t37", "t47", "t48", "t49", "t51", "t109", "t111"],
    cover: "https://api.deezer.com/album/373469057/image?size=big",
  },
  {
    id: "pl6", name: "Workout Energy", description: "High-energy tracks to push your limits",
    tracks: ["t8", "t43", "t44", "t39", "t107", "t21", "t123", "t61", "t78"],
    cover: "https://api.deezer.com/album/15941022/image?size=big",
  },
  {
    id: "pl7", name: "Late Night Drive", description: "Perfect soundtrack for midnight drives",
    tracks: ["t10", "t110", "t47", "t64", "t65", "t30", "t74", "t66", "t63"],
    cover: "https://api.deezer.com/album/131568622/image?size=big",
  },
  {
    id: "pl8", name: "Electronic Dreams", description: "Electronic music from ambient to dance",
    tracks: ["t12", "t13", "t112", "t113", "t23", "t125", "t126", "t16", "t83", "t84"],
    cover: "https://api.deezer.com/album/6899858/image?size=big",
  },
  {
    id: "pl9", name: "Global Sounds", description: "Music from around the world",
    tracks: ["t54", "t55", "t67", "t68", "t70", "t71", "t78", "t79", "t80", "t17"],
    cover: "https://api.deezer.com/album/72936542/image?size=big",
  },
  {
    id: "pl10", name: "Indie & Alternative", description: "Discover your new favorite indie tracks",
    tracks: ["t61", "t62", "t63", "t64", "t65", "t66", "t30", "t31", "t81", "t82"],
    cover: "https://api.deezer.com/album/7091546/image?size=big",
  },
];

// ── HELPERS ──
export const getArtist = (id: string) => artists.find((a) => a.id === id);
export const getTrack = (id: string) => tracks.find((t) => t.id === id);
export const getAlbum = (id: string) => albums.find((al) => al.id === id);
export const getArtistTracks = (artistId: string) => tracks.filter((t) => t.artistId === artistId);
export const getArtistAlbums = (artistId: string) => albums.filter((al) => al.artistId === artistId);
export const getAlbumTracks = (albumId: string) => tracks.filter((t) => t.albumId === albumId);
export const getPlaylistTracks = (playlistId: string) => {
  const pl = playlists.find((p) => p.id === playlistId);
  if (!pl) return [];
  return pl.tracks.map(getTrack).filter(Boolean) as Track[];
};

// Genre categories for Discover page
export const genres = [
  { id: "all", name: "All", color: "#1DB954" },
  { id: "rap", name: "Rap", color: "#E13300" },
  { id: "rapfr", name: "Rap FR", color: "#8400E7" },
  { id: "pop", name: "Pop", color: "#1E90FF" },
  { id: "rnb", name: "R&B", color: "#E91E63" },
  { id: "electro", name: "Electronic", color: "#00BCD4" },
  { id: "rock", name: "Rock", color: "#FF5722" },
  { id: "latin", name: "Latin", color: "#FF9800" },
  { id: "afro", name: "Afrobeats", color: "#4CAF50" },
];
