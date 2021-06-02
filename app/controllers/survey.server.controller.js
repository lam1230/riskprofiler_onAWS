/**
 * survey.server.controller.js
 *
 * This controller module exposes two methods:
 *  - showForm is used for displaying the form
 *  - showResult is used for showing the results
 * The methods are not mapped to URL yet
 */

const { time } = require('console');


module.exports.showForm = function(req, res) {

    regions = req.app.locals.regions;
    latitude = req.app.locals.latitude;
    hairColour = req.app.locals.hairColour;
    skinType = req.app.locals.skinType;
    skinCancer = req.app.locals.skinCancer;
    familyHistory = req.app.locals.familyHistory;
    personalHistory = req.app.locals.personalHistory;
    sunburns = req.app.locals.sunburns;
    eyeColour = req.app.locals.eyeColour;
    moles = req.app.locals.moles;
    freckles = req.app.locals.freckles;
    age = req.app.locals.age;
    gender = req.app.locals.gender;
    risk_score = req.app.locals.risk_score;
    userName = req.app.locals.userName;
    SPF = req.app.locals.SPF;

    res.render('survey.ejs', {regions: regions,latitude: latitude,hairColour: hairColour,skinType: skinType,skinCancer: skinCancer,
        familyHistory: familyHistory,personalHistory: personalHistory,
        sunburns: sunburns,eyeColour: eyeColour,moles: moles,freckles: freckles,age: age,
        gender: gender,risk_score: risk_score,userName: userName,SPF: SPF});

};


module.exports.showResult = function(req, res) {

    // get vote index
    var voteIdx = req.body.vote;
    var voteIdx1 = req.body.vote1;
    var voteIdx2 = req.body.vote2;
    var voteIdx3 = req.body.vote3;
    var voteIdx4 = req.body.vote4;
    var voteIdx5 = req.body.vote5;
    var voteIdx6 = req.body.vote6;
    var voteIdx7 = req.body.vote7;
    var voteIdx8 = req.body.vote8;
    var voteIdx9 = req.body.vote9;
    var voteIdx10 = req.body.vote10;
    var voteIdx11 = req.body.vote11;
    var voteIdx12 = req.body.vote12;
    var voteIdxName = req.body.voteName;
    var voteIdxSPF = req.body.voteSPF;


    // 'req.app.locals' is used to share application scope variables from main file (server.js).
    // Each request object has a reference to the current running express application: req.app
    // This means that 'app.locals' can be used to store properties that are local variables
    // within the application (application scope data), you can refer to server.js and compare
    var regions = req.app.locals.regions;
    var latitude = req.app.locals.latitude;
    var hairColour = req.app.locals.hairColour;
    var skinType = req.app.locals.skinType;
    var skinCancer = req.app.locals.skinCancer;
    var familyHistory = req.app.locals.familyHistory;
    var personalHistory = req.app.locals.personalHistory;
    var sunburns = req.app.locals.sunburns;
    var eyeColour = req.app.locals.eyeColour;
    var moles = req.app.locals.moles;
    var freckles = req.app.locals.freckles;
    var age = req.app.locals.age;
    var gender1 = req.app.locals.gender;
    var risk_score = req.app.locals.risk_score;
    var userName = req.app.locals.userName;
    var SPF = req.app.locals.SPF;



    //calculate risk score
    var freckle_c = 0;
    var mole_c = 0;
    var eye_color_c = 0;
    var family_history_c = 0;
    var hair_color_c = 0;
    var sunburn_his_c = 0;
    var skin_type_c = 0;
    var riskScore = 0;
    var userName1 ='';

    var sunburnOnDiagram = 0;
    var skinTypeIndex = 0;



    // get session
    sess = req.session;

        // set sess['vote'] to voteIdx
        sess.vote = voteIdx
        sess.vote1 = voteIdx1


        if(skinType[voteIdx3] === "Skin Type I"){
            skin_type_c = 2.09;
            skinTypeIndex = 1;
        }else if(skinType[voteIdx3] === "Skin Type II"){
            skin_type_c = 1.84;
            skinTypeIndex = 1.25;
        }else if(skinType[voteIdx3] === "Skin Type III"){
            skin_type_c = 1.77;
            skinTypeIndex = 1.5;
        }else if(skinType[voteIdx3] === "Skin Type IV"){
            skin_type_c = 1;
            skinTypeIndex = 2.25;
        }else if(skinType[voteIdx3] === "Skin Type V"){
            skin_type_c = 1;
            skinTypeIndex = 3;
        }else
        {
            skin_type_c = 1;
            skinTypeIndex = 5;
        }

        if(sunburns[voteIdx7] === "None"){
            sunburn_his_c = 1;
        }else if (sunburns[voteIdx7] === "1-2burns")
        {
            sunburn_his_c = 1.28;
            sunburnOnDiagram = 2;
        }else if (sunburns[voteIdx7] === "3-5burns")
        {
            sunburn_his_c = 1.28;
            sunburnOnDiagram = 4;
        }else if (sunburns[voteIdx7] === "6-9burns")
        {
            sunburn_his_c = 1.28;
            sunburnOnDiagram = 8;
        }
        else
        {
            sunburn_his_c = 1.28;
            sunburnOnDiagram = 10;
        }

        if (hairColour[voteIdx2] === "Light Brown")
        {
            hair_color_c = 1.34;
        }else if (hairColour[voteIdx2] === "Blond")
        {
            hair_color_c = 1.65;
        }else if (hairColour[voteIdx2] === "Red")
        {
            hair_color_c = 2.86;
        }else
        {
            hair_color_c = 1;
        }

        if (familyHistory[voteIdx5] === "Yes")
        {
            family_history_c  = 1.74;
        }else
        {
            family_history_c  = 1;
        }

        if (eyeColour[voteIdx8] == "Dark")
        {
            eye_color_c = 1;
        }else if (eyeColour[voteIdx8] == "Medium"){
            eye_color_c = 1.31;
        }else
        {
            eye_color_c = 1.62;
        }

        if (moles[voteIdx9] === "None")
        {
            mole_c = 1;
        }else if (moles[voteIdx9] === "Few")
        {
            mole_c = 1.47;
        }else if (moles[voteIdx9] === "Some")
        {
            mole_c = 2.24;
        }else{
            mole_c = 3.26;
        }

        if (freckles[voteIdx10] === "None")
        {
            freckle_c = 1;
        }else
        {
            freckle_c = 2.32;
        }

        riskScore = freckle_c + mole_c + eye_color_c + family_history_c +
         hair_color_c + sunburn_his_c + skin_type_c;
         var numRisk = riskScore.toFixed(2);


    var fs = require('fs'); 
    var parse = require('csv-parse');
    var csvData=[];
    var array1 = []; // better to define using [] instead of new Array();
    var array2 = [];
    var array3 = [];
    var spf = 1;
    spf = req.body.voteSPF;

    fs.createReadStream('useful.csv')
        .pipe(parse({delimiter: ':'}))
        .on('data', function(csvrow) {
            // console.log(csvrow);
            for (var i = 0; i < csvrow.length; i++) {
                var split = csvrow[i].split(",");  // just split once
                // xlabels.push((time/60).toFixed(0) + "mins");
                array1.push((split[1]/60).toFixed(0) + "mins"); // before the dot
                array2.push(split[2]); // after the dot
                array3.push(split[2]); // after the dot
                // console.log(array2);
            }
            //do something with csvrow
            csvData.push(csvrow);        
        })
        .on('end',function() {
            //sunburn 
            for(var i =0;i<array2.length;i++){
                //history sunburn is 5
                // var x = 5; 
                array2[i] = (parseFloat(array2[i]) / parseInt(spf))+ parseInt(sunburnOnDiagram);
              }


              //history risk to get the new risk
              for(var i =0;i<array3.length;i++){
                //history risk is 8.6
                // var x = 8.6; 
                array3[i] = (parseFloat(array3[i]) / (parseInt(skinTypeIndex) * parseInt(spf))) + parseFloat(numRisk);
              }
            //   console.log(array2);
          //do something with csvData
        //   console.log(csvData);
        // console.log("array1", array1);
        // console.log("array2", array2);
        // res.render('showDiagram.ejs',{csvData:csvData,array1:array1,array2:array2,array3:array3});

        });



            const mongodb = require('mongodb')
            const MongoClient = mongodb.MongoClient
            const cloudConnectionURL = 'mongodb+srv://henry-admin:henry123456@cluster0.x8v4a.mongodb.net/riskprofiler';

            const connectionURL = 'mongodb://127.0.0.1:27017'
            const databaseName = 'riskprofiler'

            MongoClient.connect(cloudConnectionURL,{useUnifiedTopology: true}, (error, client) => {
                if(error) {
                    return console.log('Unable to connet to DB')
                }
                // console.log('Connected successfully!!!')
                const db = client.db(databaseName)
                console.log('Connected successfully!!!')

                var query = { userName:voteIdxName};

                db.collection("inputData").find(query).toArray((err,response) => {
                    if(err){
                        throw err;
                    }
                    if(response && response.length){
                db.collection('inputData').findOneAndUpdate({
                    userName:voteIdxName
                },{
                    $push:{
                        riskFactor:{age:age[voteIdx11],
                            gender:gender1[voteIdx12],
                            regions:regions[voteIdx],
                            latitude:latitude[voteIdx1],
                            hairColour:hairColour[voteIdx2],
                            skinType:skinType[voteIdx3],
                            skinCancer:skinCancer[voteIdx4],
                            familyHistory:familyHistory[voteIdx5],
                            personalHistory:personalHistory[voteIdx6],
                            sunburns:sunburns[voteIdx7],
                            eyeColour:eyeColour[voteIdx8],
                            moles:moles[voteIdx9],
                            freckles:freckles[voteIdx10],
                            SPF:voteIdxSPF,
                            riskScore:numRisk},
                            allRiskScore:{riskScore:numRisk}
                    }
                })
                console.log('Update and insert risk factor successfully!!!');

                    }
                    else{

                    db.collection('inputData').insertOne({
                        // _id:voteIdxName,
                        userName:voteIdxName,
                        riskFactor:[{age:age[voteIdx11],
                            gender:gender1[voteIdx12],
                            regions:regions[voteIdx],
                            latitude:latitude[voteIdx1],
                            hairColour:hairColour[voteIdx2],
                            skinType:skinType[voteIdx3],
                            skinCancer:skinCancer[voteIdx4],
                            familyHistory:familyHistory[voteIdx5],
                            personalHistory:personalHistory[voteIdx6],
                            sunburns:sunburns[voteIdx7],
                            eyeColour:eyeColour[voteIdx8],
                            moles:moles[voteIdx9],
                            freckles:freckles[voteIdx10],
                            SPF:voteIdxSPF,
                            riskScore:numRisk}],
                            allRiskScore:[{riskScore:numRisk}]
                    },(err, res) => {
                        if(err) {
                            return console.log('Unable to connet to DB')
                        }
                        // console.log(res.ops)
                        console.log('input successfully!!!')
                    })

                    }
                })
                db.collection('inputData').distinct(
                    "allRiskScore.riskScore",
                    query, // query object
                    (function(err, docs){
                         if(err){
                             return console.log(err);
                         }
                         if(docs){
                            //  console.log(docs);
                             res.render('surveyresult.ejs', {regions: regions,vote: voteIdx,latitude: latitude,vote1: voteIdx1
                                ,hairColour: hairColour,vote2: voteIdx2,skinType: skinType,vote3: voteIdx3,skinCancer: skinCancer,vote4: voteIdx4,familyHistory: familyHistory,vote5: voteIdx5
                                ,personalHistory: personalHistory,vote6: voteIdx6,sunburns: sunburns,vote7: voteIdx7,eyeColour: eyeColour,vote8: voteIdx8
                                ,moles: moles,vote9: voteIdx9,freckles: freckles,vote10: voteIdx10,age: age,vote11: voteIdx11,gender1: gender1,vote12: voteIdx12
                                ,risk_score: risk_score,vote13: numRisk,userName: userName,vote14: userName1
                                ,SPF:voteIdxSPF
                                ,newArray:docs,
                                csvData:csvData,array1:array1,array2:array2,array3:array3
                            });
                         }
                    })
                 );

            })
};
