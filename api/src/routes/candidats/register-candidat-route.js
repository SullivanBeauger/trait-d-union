const Models = require('../../models')
const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'))
const niveauxEtude = require('../../models/enums/niveaux-etude')
const deStatuses = require('../../models/enums/de-statuses')

const logger = require('../../utils/logger')
const { promisify } = require('util')
const Boom = require('@hapi/boom')

module.exports.createRoute = (pathPrefix) => ({
  method: 'POST',
  path: `${pathPrefix}/candidats/register`,
  options: {
    validate: {
      payload: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        niveauEtude: Joi.string().only()
          .allow(...niveauxEtude),
        phoneNumber: Joi.string(),
        zipCode: Joi.string(),
        deStatus: Joi.string().only()
          .allow(...deStatuses),
        birthdate: Joi.date()
          .format('YYYY-MM-DD')
          .raw()
      })
    },
    description: 'Register new candidat',
    tags: ['api', 'candidat'],
    plugins: {
      'hapi-swaggered': {
        responses: {
          204: { description: 'No Content' },
          400: { description: 'Bad Request' }
        }
      }
    }
  },
  handler: async (request, h) => {
    const { payload } = request
    const { Candidat } = Models
    const userToCreate = new Candidat({
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      niveauEtude: payload.niveauEtude,
      phoneNumber: payload.phoneNumber,
      zipCode: payload.zipCode,
      birthdate: payload.birthdate,
      deStatus: payload.deStatus
    })

    const registerUser = promisify(Candidat.register)
    try {
      const { id } = await registerUser.call(Candidat, userToCreate, payload.password)
      request.cookieAuth.set({ id })
      return h.response().code(204)
    } catch (err) {
      logger().error(`Register new candidat errored: ${err}`)
      if (err.message.startsWith('User already exists with ')) {
        throw Boom.conflict(err.message)
      }
      throw Boom.badImplementation(err.message, err)
    }
  }
})
