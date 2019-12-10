const hotels = require('../mocks/hotels');

exports.getHotels = (req, res) => {
  const params = req.query;
  let filteredHotels = hotels;
  if (params.name) {
    filteredHotels = hotels.filter(hotel => hotel.name === params.name);
  }

  if (params.stars && params.stars.length) {
    filteredHotels = hotels.filter(hotel => params.stars.indexOf(hotel.stars.toString()) !== -1);
  }

  res.send(filteredHotels);
}

exports.getHotel = (req, res) => {
  const id = req.query.id;
  const hotel = hotels.find(hotel => hotel.id === id);
  if (hotel) {
    res.send(hotel);
  } else {
    res.status(404).send({ message: 'Hotel not found' });
  }
}
