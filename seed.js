const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://supriyo:admin@cluster0.oar3xze.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const movieSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  longDescription: String,
  image: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const movies = [
//   // Add 20 movies here
// ];

const movies = [
  {
    title: "Inception",
    shortDescription: "A thief who steals corporate secrets through dream-sharing technology.",
    longDescription: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable.",
    image: "https://example.com/inception.jpg"
  },
  {
    title: "The Shawshank Redemption",
    shortDescription: "Two imprisoned men bond over a number of years.",
    longDescription: "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison.",
    image: "https://example.com/shawshank.jpg"
  },
  {
    title: "The Godfather",
    shortDescription: "The aging patriarch of an organized crime dynasty transfers control.",
    longDescription: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael.",
    image: "https://example.com/godfather.jpg"
  },
  {
    title: "The Dark Knight",
    shortDescription: "Batman faces the Joker, a criminal mastermind.",
    longDescription: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    image: "https://example.com/dark_knight.jpg"
  },
  {
    title: "Pulp Fiction",
    shortDescription: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.",
    longDescription: "The film's narrative is told out of chronological order and follows three main interrelated stories.",
    image: "https://example.com/pulp_fiction.jpg"
  },
  {
    title: "Schindler's List",
    shortDescription: "A businessman saves over a thousand Polish Jews during the Holocaust.",
    longDescription: "Oskar Schindler becomes an unlikely humanitarian, spending his entire fortune to help save 1,100 Jews from Auschwitz during World War II.",
    image: "https://example.com/schindlers_list.jpg"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    shortDescription: "The final confrontation between the forces of good and evil.",
    longDescription: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image: "https://example.com/lotr_return_of_the_king.jpg"
  },
  {
    title: "Fight Club",
    shortDescription: "An insomniac office worker forms an underground fight club.",
    longDescription: "The story focuses on an unnamed narrator who is discontented with his white-collar job.",
    image: "https://example.com/fight_club.jpg"
  },
  {
    title: "Forrest Gump",
    shortDescription: "Forrest Gump, a man with a low IQ, has accomplished great things in his life.",
    longDescription: "Forrest Gump, while not intelligent, has accidentally been present at many historic moments.",
    image: "https://example.com/forrest_gump.jpg"
  },
  {
    title: "The Matrix",
    shortDescription: "A computer hacker learns about the true nature of his reality.",
    longDescription: "Neo, a computer hacker, learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    image: "https://example.com/matrix.jpg"
  },
  {
    title: "Goodfellas",
    shortDescription: "The story of Henry Hill and his life in the mob.",
    longDescription: "Henry Hill and his friends work their way up through the mob hierarchy.",
    image: "https://example.com/goodfellas.jpg"
  },
  {
    title: "The Silence of the Lambs",
    shortDescription: "A young FBI cadet seeks the help of a cannibalistic serial killer.",
    longDescription: "Clarice Starling, a top student at the FBI's training academy, seeks the advice of Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath.",
    image: "https://example.com/silence_of_the_lambs.jpg"
  },
  {
    title: "Se7en",
    shortDescription: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    longDescription: "Detective David Mills and his partner Somerset are on a desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins.",
    image: "https://example.com/seven.jpg"
  },
  {
    title: "Gladiator",
    shortDescription: "A former Roman General sets out to exact vengeance against the corrupt emperor.",
    longDescription: "Maximus Decimus Meridius, a once-powerful general, is forced to become a common gladiator.",
    image: "https://example.com/gladiator.jpg"
  },
  {
    title: "Interstellar",
    shortDescription: "A team of explorers travel through a wormhole in space.",
    longDescription: "A team of explorers undertakes the most important mission in human history; traveling beyond this galaxy to discover whether mankind has a future among the stars.",
    image: "https://example.com/interstellar.jpg"
  },
  {
    title: "Parasite",
    shortDescription: "A poor family schemes to become employed by a wealthy family.",
    longDescription: "The Kim family, struggling with poverty, manipulates their way into the lives of the wealthy Park family.",
    image: "https://example.com/parasite.jpg"
  },
  {
    title: "Whiplash",
    shortDescription: "A promising young drummer enrolls at a cut-throat music conservatory.",
    longDescription: "Andrew Neiman, a young and ambitious jazz drummer, enrolls at a prestigious music academy where he is mentored by Terence Fletcher, a ruthless instructor.",
    image: "https://example.com/whiplash.jpg"
  },
  {
    title: "The Social Network",
    shortDescription: "The story of Facebook's creation and the resulting lawsuits.",
    longDescription: "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea.",
    image: "https://example.com/social_network.jpg"
  },
  {
    title: "The Lion King",
    shortDescription: "A young lion prince flees his kingdom after the murder of his father.",
    longDescription: "Simba, a young lion, is to succeed his father, Mufasa, as king. However, after Mufasa is killed by Simba's treacherous uncle Scar, Simba flees the kingdom.",
    image: "https://example.com/lion_king.jpg"
  },
  {
    title: "Django Unchained",
    shortDescription: "A freed slave sets out to rescue his wife from a brutal plantation owner.",
    longDescription: "With the help of a German bounty-hunter, Django, a freed slave, sets out to rescue his wife from a brutal Mississippi plantation owner.",
    image: "https://example.com/django_unchained.jpg"
  }
];


Movie.insertMany(movies)
  .then(() => {
    console.log('Data seeded');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error(error);
  });
