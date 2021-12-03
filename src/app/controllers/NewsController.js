class NewsController {
    // Get /news
    index(req, res) {
        res.render('news');
    }

    // Get /news/:slug (slug - LÀ BIẾN ĐỘNG)
    show(req, res) {
        res.send('More details');
    }
}

module.exports = new NewsController();
