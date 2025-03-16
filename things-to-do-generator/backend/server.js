require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Activity = require('./models/Activity'); // Import the Activity model

const app = express();
app.use(express.json()); // Allows JSON requests
app.use(cors()); // Enables cross-origin requests

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// ✅ API Routes

// Get all activities (with optional category filter)
app.get('/api/activities', async (req, res) => {
  try {
    const category = req.query.category; // ?category=Creative
    const query = category ? { category } : {};
    const activities = await Activity.find(query);
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new activity
app.post('/api/activities', async (req, res) => {
  try {
    const { name, category } = req.body;
    if (!name || !category) {
      return res.status(400).json({ error: 'Name and category are required' });
    }
    const newActivity = new Activity({ name, category });
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));