const mongoose = require('mongoose');


mongoose.connect(
  // add our db
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cardGenieDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;