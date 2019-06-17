const { info } = require('../infrastructure/logger')
const { contactsApiClient } = require('../infrastructure/sendinblue-api-client')

const formatFormResponse = require('../features/candidats/format-form-response')
const findCandidatFromFormResponse = require('../features/candidats/find-candidat-from-candidature-form')
const createCandidat = require('../features/candidats/create-candidat')
const subscribeCandidateToMailingContactLists = require('../features/candidats/subscribe-candidate-to-mailing-contact-lists')
const sendCandidatureToOffre = require('../features/candidature/send-candidature-to-offre')

module.exports = function (Candidat) {
  Candidat.formResponse = async (data) => {
    info(`New candidature received from Typeform`)
    const { candidat: formCandidat, offreId } = formatFormResponse(data)
    let candidat = await findCandidatFromFormResponse({ Candidat }, formCandidat)
    if (!candidat) {
      candidat = await createCandidat({ Candidat }, formCandidat)
      await subscribeCandidateToMailingContactLists({ contactsApiClient }, candidat)
    }
    await sendCandidatureToOffre(Candidat.app.models, offreId, candidat)
    return candidat
  }

  Candidat.remoteMethod('formResponse', {
    http: { path: '/form-response', verb: 'POST' },
    accepts: { arg: 'form_response', type: 'object' },
    returns: { arg: 'candidat', type: 'string', root: true }
  })

  Candidat.afterRemote('formResponse', async (context) => {
    context.res.statusCode = 201
  })
}