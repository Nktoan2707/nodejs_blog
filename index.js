const express = require("express");
const app = express(); // trả về 1 instance của express, dùng để xây dựng app
const port = 3000; // muốn run website ở port nào

// định nghĩa route(tuyến đường) 
app.get("/", (req, res) => { // arrow(=>) function, khi đi vào trang chủ(/) thì sẽ return 1 cặp req,res
  res.send("Hello World!"); // có thể ghi thêm return ở đầu
});

// 127.0.0.1 = local host

app.listen(port, () => { //arrow function app sẽ listen trên port khai báo ở trên
  console.log(`Example app listening on port ${port}`);
});


//=> file index.js này là entry point: khi mà user truy cập vào web này, những code trong đây sẽ được chạy (khởi tạo biến app là instance của express, muốn chạy trên port nào 
//sau đó cho biến app listen port này) lúc đó web mới hoạt động (nếu file không chạy nữa thì không có app để listen -> web không chạy)