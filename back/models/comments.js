'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Comments.belongsTo/models.Users, {
        foreignKey: {
          allowNull: false
        }
      }
    }
  };
  Comments.init({
    idMESSAGES: DataTypes.INTEGER,
    idUSERS: DataTypes.INTEGER,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};