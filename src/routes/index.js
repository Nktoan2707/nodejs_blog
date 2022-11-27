//require tất cả router con vào đây
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // truyền instance express tên app vào đây

    app.use('/news', newsRouter); // Những page thuộc danh mục news

    app.use('/', siteRouter); // những page không thuộc danh mục nào hết (nằm ở gốc như homepage) nên đặt ở cuối
}

module.exports = route;
