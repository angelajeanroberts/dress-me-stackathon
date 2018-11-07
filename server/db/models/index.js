const User = require('./user')
const Inquiry = require('./inquiry')
const Reply = require('./reply')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 User.hasMany(Inquiry)
 Inquiry.belongsTo(User)

 User.hasMany(Reply)
 Reply.belongsTo(User)

 Inquiry.hasMany(Reply)
 Reply.belongsTo(Inquiry)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Inquiry,
  Reply
}
