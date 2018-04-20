'use strict';

var DataTypes = require('sequelize/lib/data-types');

module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    // id: { type: DataTypes.INTEGER, required: true},
    // authorId: { type: DataTypes.INTEGER, required: false },
    title: { type: DataTypes.STRING, required: true },
    article: { type: DataTypes.TEXT, required: true },
    published: { type: DataTypes.DATE, required : false},
    featured: { type: DataTypes.BOOLEAN, required: true },



  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
    Blog.belongsTo(models.Author)
  };
  return Blog;
};