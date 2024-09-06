const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://supriyo:admin@cluster0.oar3xze.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Movie Schema
const movieSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  longDescription: String,
  image: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Routes
app.get('/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
