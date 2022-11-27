class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug: slug là 1 biến động, là 1 param trên url, lúc là path này lúc là path kia
  show(req, res) {
    // show chi tiết news
    res.send("NEWS DETAIL!!!");
  }
}

// phải có 1 dòng trống r mới tới dòng exports (quy ước thôi)
// tạo ra 1 instance và export ra ngoài
// ở file khác mà muốn sử dụng thì phải require
module.exports = new NewsController();

// Khi ở file khác: const newController = require('./NewsController')
// thì chúng ta sẽ require được cái exports ở trên
// bản chất của require mấy cái library như express cũng là require để lấy 1 instance exports
// trong file index.js (mặc định, kiểu entry point của package đấy)

// khi require không cần phải chỉ rõ tới index.js của package mà chỉ cần
// require tới folder của package đó, nó sẽ tự biết để vào file index.js
