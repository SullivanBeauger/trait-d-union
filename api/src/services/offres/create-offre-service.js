module.exports = ({ Offre }) => async (offreToCreate) => {
  offreToCreate.status = 'published'
  return Offre.create(offreToCreate)
}
