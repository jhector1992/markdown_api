var mongoose = require('mongoose')
var Schema = mongoose.Schema

var markdownSchema = new Schema({
  title:  String,
  author: String,
  type: {
    id:     Number,
    name:   String
  },
  code: {
    html:   String,
    markdown: String
  },
  created: { type: Date, default: Date.now },
  hidden: Boolean
})


var Markdown = mongoose.model('Markdown', markdownSchema);
module.exports = Markdown;