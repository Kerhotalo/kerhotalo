import crypto from 'crypto'

exports.createHash = password => {
    return crypto.createHmac('sha256', process.env.PROFILE_HASH_SECRET)
    .update(password)
    .digest('hex')
}