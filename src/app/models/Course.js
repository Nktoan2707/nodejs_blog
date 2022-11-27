const mongoose = require("mongoose");
const schema = mongoose.Schema;

// tạo 1 scheme cho collection trong DB
const Course = new schema({
  title: { type: String, maxLength: 255 },
  description: { type: String, maxlength: 600 },
  image: { type: String, maxLength: 255 },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);
// mongoose tạo model, dựa vào 'Course' là tên model, mongoose sẽ theo quy ước
// snake case và ở dạng số nhiều (thêm s) để nhận biết đó là collection nào trong DB của chúng ta
// Nếu không có collection đó trong DB thì mongoose sẽ tạo theo y như quy ước đã nói

