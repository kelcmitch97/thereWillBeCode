const { Location } = require('../models');

const locationData = [
    {
      id: 167,
      city_name: 'Toronto',
      location_name: 'Ramsden Park',
      location_address: '1020 Yonge Street, M4W 2K1',
      venue_type: 'rink-outdoor'
    },
    {
      id: 241,
      city_name: 'Toronto',
      location_name: 'Trinity Bellwoods Park',
      location_address: '790 Queen Street W, M6J 1G3',
      venue_type: 'rink-outdoor, baseball-diamond, playing-field, outdoor-drypad'
    },
    {
      id: 196,
      city_name: 'Toronto',
      location_name: 'Christie Pits',
      location_address: '779 Crawford Ave W, M6G 3K4',
      venue_type: 'baseball-diamond, rink-outdoor, outdoor-drypad, sports-field, basketball-court'
    },
    {
      id: 241,
      city_name:'Toronto',
      location_name: 'Trinity Bellwoods Park',
      location_address: '790 Queen St W, M6J 1G3',
      venue_type: 'rink-outdoor, sports-field, baseball-diamond, outdoor-drypad'
    },
    {
      id: 306,
      city_name: 'Toronto',
      location_name: 'Withrow Park',
      location_address: '725 Logan Ave, M4K 3B9',
      venue_type: 'rink-outdoor, baseball-diamond, outdoor-drypad, sports-field'
    },
    {
      id: 508,
      city_name: 'Toronto',
      location_name: 'Weston Lions Park',
      location_address: '2125 Lawrence Ave W, M9N 1H7',
      venue_type: 'baseball-diamond, sports-field, rink-indoor(arena-adjacent), basketball-court'
    },
    {
      id: 514,
      city_name: 'Toronto',
      location_name: 'Earlscourt Park',
      location_address: '1200 Landsdowne Ave , M6H 3Z8',
      venue_type: 'baseball-diamond, sports-field, rink-outdoor, basketball-court'
    },
    {
      id: 585,
      city_name: 'Toronto',
      location_name: 'Flemingdon Park',
      location_address: '150 Grenoble Drive, M3C 1E3',
      venue_type: 'sports-field, baseball-diamond, basketball-court, rink-indoor(arena-adjacent)'

    ]

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;