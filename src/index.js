const path = require('path'); //built in library
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express(); // trả về 1 instance của express, dùng để xây dựng app
const port = 3000; // muốn run website ở port nào
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); //mỗi khi truy cập file static, express sẽ kiểm tra các folder được cung cấp (bằng cách truyền vào đây)

app.use(
    express.urlencoded({
        extended: true, //bỏ vào object có thuộc tính yêu cầu từ warning: body-parser deprecated undefined extended: provide extended option src\index.js:11:17
    }),
); //middleware để xử lý từ form submit dùng method post (form data)
app.use(express.json()); //trường hợp các library js như XHLHttpRequest, fetch, axios,... sử dụng method get, post để gửi data thay vì form submit

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        // app này sẽ dùng engine là gì, ném engine thư viện đó vào
        extname: '.hbs', // truyền config vào, ở đây là đổi đuôi .handlebars thành .hbs
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // set lại path của thư mục views

// định nghĩa, khởi t route(tuyến đường)
route(app); // để việc config routes qua folder routes làm

// 127.0.0.1 = local host
// localhost:3000 -> 127.0.0.1:3000 : địa chỉ ip local chạy ở portal 3000
app.listen(port, () => {
    //arrow function app sẽ listen trên port khai báo ở trên
    // console.log(`Example app listening on port ${port}`);
});

//=> file index.js này là entry point: khi mà user truy cập vào web này, những code trong đây sẽ được chạy (khởi tạo biến app là instance của express, muốn chạy trên port nào
//sau đó cho biến app listen port này) lúc đó web mới hoạt động (nếu file không chạy nữa thì không có app.listen() -> web không chạy)
