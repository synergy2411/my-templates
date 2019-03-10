module.exports.logger = function(req, res, next){
    var start = Date.now();
    res.on("finish", ()=>{
        console.log("Duration : " + (Date.now() - start));
    })
    next();
}