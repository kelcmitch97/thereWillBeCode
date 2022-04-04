const { Location } = require('../models');

const locationData = [
  {
      id: 77,
      city_name: 'Toronto',
      location_name: 'High Park',
      location_address: '1873 Bloor St W, M8Z 3R3',
      venue_id: 100,
      venue: 'rink-outdoor',
      venue_id: 200,
      venue: 'baseball-diamond',
      venue_id: 300,
      venue: 'basketball-court',
      venue_id: 401,
      venue: 'sports-field',
      venue_id: 500,
      venue: 'tennis-courts'
  },
  {
      id: 167,
      city_name: 'Toronto',
      location_name: 'Ramsden Park',
      location_address: '1020 Yonge Street, M4W 2K1',
      venue_id: 100,
      venue_type: 'rink-outdoor'
    },
    {
      id: 196,
      city_name: 'Toronto',
      location_name: 'Christie Pits',
      location_address: '779 Crawford Ave W, M6G 3K4',
      venue_id: 100,
      venue_type: 'rink-outdoor',
      venue_id: 200,
      venue_type: 'baseball-diamond',
      venue_id: 300,
      venue_type: 'basketball-court',
      venue_id: 301,
      venue_type: 'outdoor-drypad',
      venue_id: 401,
      venue_type: 'sports-field',
    },
    {
      id: 241,
      city_name:'Toronto',
      location_name: 'Trinity Bellwoods Park',
      location_address: '790 Queen St W, M6J 1G3',
      venue_id: 100, 
      venue_type: 'rink-outdoor',
      venue_id: 200,
      venue_type: 'baseball-diamond', 
      venue_id: 301,
      venue_type: 'outdoor-drypad', 
      venue_id: 401, 
      venue_type: 'playing-field',
      venue_id: 500,
      venue_type: 'tennis-court'
    },
    {
      id: 306,
      city_name: 'Toronto',
      location_name: 'Withrow Park',
      location_address: '725 Logan Ave, M4K 3B9',
      venue_id: 100, 
      venue_type: 'rink-outdoor',
      venue_id: 200,
      venue_type: 'baseball-diamond', 
      venue_id: 301,
      venue_type: 'outdoor-drypad', 
      venue_id: 401, 
      venue_type: 'playing-field',
      venue_id: 500,
      venue_type: 'tennis-court'
    },
    {
      id: 508,
      city_name: 'Toronto',
      location_name: 'Weston Lions Park',
      location_address: '2125 Lawrence Ave W, M9N 1H7',
      venue_id: 101, 
      venue_type: 'indoor-arena', // adjacent to park
      venue_id: 200,
      venue_type: 'baseball-diamond', 
      venue_id: 301,
      venue_type: 'outdoor-drypad',
      venue_id: 400,
      venue: 'soccer-field',
      venue_id: 401, 
      venue_type: 'sports-field',
      venue_id: 500,
      venue_type: 'tennis-court'
    },
    {
      id: 514,
      city_name: 'Toronto',
      location_name: 'Earlscourt Park',
      location_address: '1200 Landsdowne Ave , M6H 3Z8',
      venue_id: 200,
      venue_type: 'baseball-diamond', 
      venue_id: 301,
      venue_type: 'outdoor-drypad',
      venue_id: 401, 
      venue_type: 'playing-field',
      venue_id: 500,
      venue_type: 'tennis-court'
    },
    {
      id: 585,
      city_name: 'Toronto',
      location_name: 'Flemingdon Park',
      location_address: '150 Grenoble Drive, M3C 1E3',
      venue_id: 101, 
      venue_type: 'indoor-arena', // adjacent to park Angela James Arena
      venue_id: 200,
      venue_type: 'baseball-diamond',
      venue_id: 300,
      venue_type: 'basketball-court',
      venue_id: 401, 
      venue_type: 'sports-field',
      venue_id: 500,
      venue_type: 'tennis-court'
    },

  ]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;