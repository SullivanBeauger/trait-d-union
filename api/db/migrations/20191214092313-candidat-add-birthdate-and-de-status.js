const deStatuses = require('../../src/models/enums/de-statuses')
const { dropEnum } = require('sequelize-replace-enum-postgres')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('candidats', 'birthdate', {
        type: Sequelize.DATEONLY,
        allowNull: true
      })
      await queryInterface.addColumn('candidats', 'deStatus', {
        type: Sequelize.ENUM(deStatuses),
        allowNull: true
      })
    } catch (error) {
      return true
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('candidats', 'deStatus')
    await queryInterface.removeColumn('candidats', 'birthdate')
    return dropEnum({
      queryInterface,
      enumName: 'enum_candidats_deStatus'
    })
  }
}
