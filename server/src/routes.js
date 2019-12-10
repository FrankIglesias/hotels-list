const hotel = require("./controllers/hotel");

exports.init = app => {
  app.get('/hotels', hotel.getHotels);
  app.get('/hotel', hotel.getHotel);
  app.get('*', function (req, res) {
    res.status(404).send('');
  });
};
