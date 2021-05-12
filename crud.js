const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'riskprofiler'

MongoClient.connect(connectionURL,{useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connet to DB')
    }
    // console.log('Connected successfully!!!')
    const db = client.db(databaseName)
    console.log('Connected successfully!!!')
    db.collection('inputData').insertOne({
        age:age[vote11],
        gender:'Male',
        latitude:'North',
        hairColour:'Black',
        skinType:'Skin Type I',
        skinCancer:'Yes',
        familyHistory:'Yes',
        personalHistory:'Yes',
        sunburns:'1-2burns',
        eyeColour:'Dark',
        moles:'None',
        freckles:'None'
    },(err, res) => {
        if(err) {
            return console.log('Unable to connet to DB')
        }
        // console.log(res.ops)
        console.log('input successfully!!!')
    })
})