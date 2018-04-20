'use strict';
var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, required: true },
    lastName: { type: DataTypes.STRING, required: true },
    email: { type: DataTypes.STRING, required: true }
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
    Author.hasMany(models.Blog, {
      as: "blogs",
      foreignKey: "authorId",
      sourceKey: "id"
    })
  };
  return Author;
};