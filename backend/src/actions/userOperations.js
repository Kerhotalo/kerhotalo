import User from '../db/models/userModel'
import { AuthenticationError, UserInputError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import { createHash } from '../helpers/authentication'

exports.createUser = async (args) => {
    const hash = createHash(args.user.password)
    let existingUser = await User.findOne({ username: args.user.username })
    if(existingUser) {
        return new UserInputError('Käyttäjänimi on jo olemassa.')
    } else {
        let user = {
            username: args.user.username,
            password: hash,
            email: args.user.email,
            emailConfirmed: false
        }
        return User.create(user)
    }
}

exports.login = async (username, password) => {

    return User.findOne({username: username, 
                            password: createHash(password)})
                    .select('-password')
    .then((result) => {
        if(result) {
            //TODO: Skip emailconfirmation for now
            //if(!result.emailConfirmed) {
            //    throw new AuthenticationError(`Sähköposti on vahvistettava ennen kirjautumista. Vahvistus on lähetetty sähköpostiisi (${result.email})`)
            //}
            var token = jwt.sign({user: result}, process.env.PROFILE_JWT_SECRET)
            let resultUser = result
            resultUser['token'] = token.toString()
            return resultUser
        } else {
            throw new AuthenticationError('Virheellinen käyttäjätunnus tai salasana')
        }
    })
}