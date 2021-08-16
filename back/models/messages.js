"use strict"

module.exports = (Sequelize , sequelize) => {
const Messages = sequelize.define(
    "Messages",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          idUSERS: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
          content: {
            allowNull: false,
            type: Sequelize.STRING
          },
          attachment: {
            allowNull: true,
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
          }
    },
    {
        sequelize,
        tableName: "Messages",
        timestamps: false,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: [{name: 'id'}]
            },
            {
                name: 'order',
                using: 'BTREE',
                fields: [{name: 'createdAt'}]
            },
            {
                name: 'fk_messages_users_idx',
                using: 'BTREE',
                fields: [{name: 'idUSERS'}]
            }
        ]
    }
);

return Messages;
}