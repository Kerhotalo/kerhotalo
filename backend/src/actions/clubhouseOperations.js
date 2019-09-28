import Clubhouse from '../db/models/clubhouseModel'

exports.createClubhouse = async (args, user) => {
    let clubhouse = {
        createdBy: user._id,
        title: args.clubhouse.title,
        description: args.clubhouse.description,
        shortDescription: args.clubhouse.shortDescription,
        address: args.clubhouse.address,
        city: args.clubhouse.city,
        contact: args.clubhouse.contact,
        price: args.clubhouse.price,
        ageRestriction: args.clubhouse.ageRestriction,
        levelRestriction: args.clubhouse.levelRestriction
    }
    return Clubhouse.create(clubhouse)
}