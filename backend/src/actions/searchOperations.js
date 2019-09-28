import Clubhouse from '../db/models/clubhouseModel'
import User from '../db/models/userModel'

import { UserInputError } from 'apollo-server'
exports.searchClubhouses = async (args) => {
    if(!args.search.keywords) {
        throw new UserInputError('Vähintään yksi hakusana annettava')
    }
    if(args.search.city) {
        return Clubhouse.find({ $and: [
           { $text : { $search : args.search.keywords }},
           { city: args.search.city}
        ]}).populate({path: 'createdBy', model: User})
    }
    else {
        return Clubhouse.find({ 
            $text : { $search : args.search.keywords}
        }).populate({path: 'createdBy', model: User})
    }
}