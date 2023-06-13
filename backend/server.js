// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const carRouts = require('./routes/carRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// Enable CORS
app.use(cors());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then((data) => {
      console.log(
        `MongoDB successfully connected with server ${data.connection.host}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
// Verify the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Mount the user and car routers
app.use('/api/users', userRoutes);
app.use('/api', carRouts);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
