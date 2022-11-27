const express = require("express");
const morgan = require("morgan");
const handlebars = require('express-handlebars');
const path = require('path'); //built in library

const app = express(); // trả về 1 instance của express, dùng để xây dựng app
const port = 3000; // muốn run website ở port nào

app.use(express.static(path.join(__dirname, "public"))); //mỗi khi truy cập file static, express sẽ kiểm tra các folder được cung cấp bằng cách truyền vào đây

//HTTP logger
app.use(morgan('combined'))

//Template engine
 app.engine('hbs', handlebars.engine({ // app này sẽ dùng engine là gì, ném engine thư viện đó vào
    extname: '.hbs' // truyền config vào, ở đây là đổi đuôi .handlebars thành .hbs
 })); 
 app.set('view engine', 'hbs');
 app.set('views', path.join(__dirname, 'resources/views')); // set lại path của thư mục views

// định nghĩa route(tuyến đường) 
app.get("/", (req, res) => { // arrow(=>) function, khi đi vào trang chủ(/) thì sẽ return 1 cặp req,res
  res.render('home'); // có thể ghi thêm return ở đầu
  //render file home.handlebars kết hợp file layout main.handlebars
});

app.get("/news", (req, res) => {
  res.render('news');   //render file news.handlebars kết hợp file layout main.handlebars
});


// 127.0.0.1 = local host
app.listen(port, () => { //arrow function app sẽ listen trên port khai báo ở trên
  console.log(`Example app listening on port ${port}`);
});


//=> file index.js này là entry point: khi mà user truy cập vào web này, những code trong đây sẽ được chạy (khởi tạo biến app là instance của express, muốn chạy trên port nào 
//sau đó cho biến app listen port này) lúc đó web mới hoạt động (nếu file không chạy nữa thì không có app để listen -> web không chạy)