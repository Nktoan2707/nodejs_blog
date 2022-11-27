class SiteController {
  // [GET] /home, để tên handler là index hay home cũng dc
  index(req, res) {
    res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();