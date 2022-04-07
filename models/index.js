// Index for models including foreign keys

const EventCreated = require('./EventCreated');
const Location = require('./Location');
const MembersUser = require('./MemberUser');
const Sports = require('./Sports');
const User = require('./User');
const VenueType = require('./VenueType');
const LocationVenue = require('./LocationVenue');

//Association between User and the event - creation.
User.hasMany(EventCreated, {
    foreignKey: 'user_id'
});

EventCreated.belongsTo(User, {
    foreignKey: 'user_id'
});

//Association between Sports and the event - which sport is being played.
Sports.hasMany(EventCreated, {
    foreignKey: 'sport_id'
});

EventCreated.belongsTo(Sports, {
    foreignKey: 'sport_id'
});

//Association between Location and the event - where the event is taking place at.
Location.hasMany(EventCreated, {
    foreignKey: 'location_id'
});

EventCreated.belongsTo(Location, {
    foreignKey: 'location_id'
});

//Association between the venue and the location - Which venue is the event taking place at.
VenueType.belongsToMany(Location, {
    through: LocationVenue,
    foreignKey: 'venue_id'
});

Location.belongsToMany(VenueType, {
    through: LocationVenue,
    foreignKey: 'location_id'
});

//Association between users and event through MembersUser - for the users that want to participate.
User.belongsToMany(EventCreated, {
    through: MembersUser,
    foreignKey: 'user_id'
});

EventCreated.belongsToMany(User, {
    through: MembersUser,
    foreignKey: 'event_id'
});

module.exports = {
    EventCreated,
    Location,
    MembersUser,
    Sports,
    User,
    VenueType,
    LocationVenue
}