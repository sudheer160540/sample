var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var config = require('../tsconfig.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var transactionDetails = {};

router.post('/addTransaction', function (req, res, next) {

    var userTransactionDetails = req.body;
    console.log('utd: ' + JSON.stringify(userTransactionDetails));

    transactionDetails[userTransactionDetails['id']] = userTransactionDetails['userInfo'];
    res.send({ 'id': userTransactionDetails['id'] });

});
router.get('/getConfigDetails',function (req,res,next) {
    console.log("enterrrrrrrrrrrrrrrrr"+JSON.stringify(config));
    res.send(config);

});


router.get('/payURedirect', function (req, res, next) {


    var id = req['query'].td;
    console.log("transactionDetails" + id);
    var userInfo = transactionDetails[id];
    console.log('User Info:.................. ' + JSON.stringify(userInfo));
    subscriptionDetails = {};
    subscriptionDetails['key'] = userInfo['key'];
    subscriptionDetails['service_provider'] = 'payu_paisa';
    subscriptionDetails['txnid'] = uuid.v1();
    subscriptionDetails['surl'] = "http://localhost:3354/payUCallBack";
    subscriptionDetails['furl'] = "http://localhost:3354/payUCallBackFailure";
    //subscriptionDetails['surl'] = "http://localhost/payUCallBack";
    ////subscriptionDetails['furl'] = "http://localhost/payUCallBackFailure";
    subscriptionDetails['amount'] = userInfo['amount'];
    subscriptionDetails['email'] = userInfo['email'];
    subscriptionDetails['phone'] = userInfo['phone'];
    subscriptionDetails['firstname'] = userInfo['firstname'];
    subscriptionDetails['productinfo'] = "foodAbhi";
    subscriptionDetails['udf1'] = userInfo['udf1'];
    subscriptionDetails['udf2'] = userInfo['udf2'];
    //subscriptionDetails['udf3'] = userInfo['udf3'];
    subscriptionDetails['hashstring'] = "";
    subscriptionDetails['salt'] = userInfo['salt'];
    //console.log(subscriptionDetails['txnid']);
    // generate a hash from string
    var crypto = require('crypto'),
    //key = 'Pb1vR1|'+subscriptionDetails['txnid']+'|'+userInfo['amount']+"|CremeVille|"+userInfo['name']+"|"+userInfo['email']+"|"+userInfo['udf1']+"||||||||C1Bc2yl8";
        key = userInfo['key'] + "|" + subscriptionDetails['txnid'] + "|" + userInfo['amount'] + "|foodAbhi|" + userInfo['firstname'] + "|" + userInfo['email'] + "|" + userInfo['udf1'] + "|" + userInfo['udf2'] + "|||||||||" + userInfo['salt'];



    // create hahs
    var hash = crypto.createHash('sha512');
    hash.update(key);
    var value = hash.digest('hex');

    // print result
    //console.log("crypto key: "+value);
    subscriptionDetails['hash'] = value.toLowerCase();

    res.render('payURedirect', subscriptionDetails);

});
router.get('/**', function (req, res, next) {


    console.log("hello " + req.url);
    res.render('index', {});

});

router.use('/payUCallBack', function (req, res, next) {
    console.log("request body" + JSON.stringify(req.body));
    console.log("res body" + res.body);
    console.log("res body" + res.body);
    res.render('payUCallBack', req.body);
});

router.use('/payUCallBackFailure', function (req, res, next) {
    console.log("request body" + JSON.stringify(req.body));
    console.log("res body" + res.body);
    res.render('payUCallBackFailure', req.body);
});

module.exports = router;
