'use strict';

var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    // id: { type: DataTypes.INTEGER, required: true},
    authorId: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING, required: true },
    article: { type: DataTypes.TEXT, required: true },
    published: { type: DataTypes.DATE, required : false},
    featured: { type: DataTypes.BOOLEAN, defaultValue: false, required: true },



  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
    models.Blog.belongsTo(models.Author, {
      as: "author",
      foreignKey: "authorId",
      targetKey: "id"
    })
  };
  return Blog;
};