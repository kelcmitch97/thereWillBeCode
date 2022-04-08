const { Location } = require('../models');

const locationData = [
    {
      city_name: 'Toronto',
      location_name: 'Ramsden Park',
      location_address: '1020 Yonge Street, M4W 2K1',
      venue_type_id: '1'
    },
    {
      city_name: 'Toronto',
      location_name: 'Christie Pits',
      location_address: '779 Crawford Ave W, M6G 3K4',
      venue_type_id: '2'
    },
    {
      city_name:'Toronto',
      location_name: 'Trinity Bellwoods Park',
      location_address: '790 Queen St W, M6J 1G3',
      venue_type_id: '1'
    },
    {
      city_name: 'Toronto',
      location_name: 'Withrow Park',
      location_address: '725 Logan Ave, M4K 3B9',
      venue_type_id: '3'
    },
    {
      city_name: 'Toronto',
      location_name: 'Weston Lions Park',
      location_address: '2125 Lawrence Ave W, M9N 1H7',
      venue_type_id: '5'
    },
    {
      city_name: 'Toronto',
      location_name: 'Earlscourt Park',
      location_address: '1200 Landsdowne Ave, M6H 3Z8',
      venue_type_id: '2'
    },
    {
      city_name: 'Toronto',
      location_name: 'Flemingdon Park',
      location_address: '150 Grenoble Drive, M3C 1E3',
      venue_type_id: '3'
    },

  ]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;