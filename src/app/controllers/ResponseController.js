

class ResponseController{

    // [GET] /service
    showResponse(req, res){
        res.render('response');
    }

    // //[GET] /news/:slug
    // show(req, res){
    //     res.render('search');
    // }
}

module.exports = new ResponseController;