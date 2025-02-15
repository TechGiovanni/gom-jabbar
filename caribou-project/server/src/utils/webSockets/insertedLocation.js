const log = require('../logger');
const mongoose = require('mongoose');

const socketIOLocationAddedHandler = io => {
  const listen = () => {
    log('info', `Listening for Locations Added`, 'index');

    mongoose.connection.once('open', () => {
      // Now I need to access the collection I will monitor for changes.
      const humanQuitChangeStream = mongoose.connection.collection('maps').watch();

      // Create a change stream by using Collection's watch()
      humanQuitChangeStream.on('change', change => {
        switch (change.operationType) {
          case 'insert':
            io.emit('location_added_broadcast', { message: `New location added` });
        }
      });
    });
  };

  return listen;
};

module.exports = { socketIOLocationAddedHandler };
