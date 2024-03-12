let BookInstance = require('../models/bookinstance');

exports.show_all_books_status =async function(res) {
  let books = await BookInstance.find({"status":"Available"},"title status").exec();
  return res.send([books]);
}