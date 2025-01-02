// WE WRITE ALL THE CONFIGURATION ABOUT THE CONNECTION BETWEEN THE CLOUD MEANS AWS 

const AWS = require("aws-sdk");

AWS.config.update({region:"eu-north-1"});

const s3 = new AWS.S3();

const S3_BUCKET = "sampleadarshbucket";

module.exports = {s3 , S3_BUCKET}
