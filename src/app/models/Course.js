const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

// tạo 1 scheme cho collection trong DB
const Course = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String },
		image: { type: String },
		videoId: { type: String, required: true },
		level: { type: String },
		slug: { type: String, slug: 'name', unique: true },
	},
	{ timestamps: true },
);

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
// mongoose tạo model, dựa vào 'Course' là tên model, mongoose sẽ theo quy ước
// snake case và ở dạng số nhiều (thêm s) để nhận biết đó là collection nào trong DB của chúng ta
// Nếu không có collection đó trong DB thì mongoose sẽ tạo theo y như quy ước đã nói
