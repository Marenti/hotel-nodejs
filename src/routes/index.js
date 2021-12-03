const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');

const siteRouter = require('./site');

const loginRouter = require('./login');
const responseRouter = require('./response');
const serviceRouter = require('./service');
const roomRouter = require('./room');

const standardRouter = require('./standard');
const superviorRouter = require('./standard');
const delexuryRouter = require('./standard');
const suiteRouter = require('./standard');

const checkIORouter = require('./checkIO');
const billRouter = require('./bill');




function route(app){

    // app.use('/news', newsRouter);
    // app.use('/me', meRouter);
    // app.use('/courses', coursesRouter);

    app.use('/bill', billRouter); 
    app.use('/checkIO', checkIORouter); 

    app.use('/suite', suiteRouter); 
    app.use('/deluxury', delexuryRouter); 
    app.use('/supervior', superviorRouter); 
    app.use('/standard', standardRouter); 

    app.use('/login', loginRouter); 
    app.use('/response', responseRouter); 
    app.use('/service', serviceRouter); 
    app.use('/room', roomRouter);  
    
    app.use('/', siteRouter); 
}

module.exports = route;