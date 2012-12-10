/**
//
//  fileName
//  projectPS
//
//    This is the Amazon AWS S3 file storage
//
//  Created by Salvatore D'Agostino on 2012-12-09 14:51
//  Copyright 2012. All rights reserved.
//
**/

/**
+   \brief createBucket
+
+       This function will create a bucket in amazon S3
+
+   \author Salvatore D'Agostino
+   \date  2012-12-09 15:58
+   \param s3         (CONN)    The contents of the file
+   \param bucketName (STRING)  The name of the bucket
+   \param callBack   (FUNC)    callback function
+
+   \return True if pass, False otherwise
**/
function createBucket(s3,bucketName,callBack)
{
    s3.client.createBucket({Bucket: bucketName}).done(function(resp) {
      console.log("S3 SUCCESS: Bucket "+bucketName+" CREATED!");
      callBack(true);
    }).fail(function(resp) {
      console.log(resp.error);
      callBack(false);
    });
    
}// END function createBucket
exports.createBucket = createBucket;

/**
+   \brief createFolder
+
+       This function will create a folder in a given bucket
+
+   \author Salvatore D'Agostino
+   \date  2012-12-09 16:44
+   \param s3           (CONN)    The contents of the file
+   \param bucketName   (STRING)  The name of the bucket
+   \param folderName   (STRING)  The name of the folder
+   \param callBack     (FUNC)    callback function
+
+   \return True if pass, False otherwise
**/
// function createFolder(s3,bucketName,folderName,callBack)
// {
//     var data = {Bucket: bucketName, Key: "projectPS/test"};

//     s3.client.putObject(data).done(function(resp) {
//         console.log("Successfully uploaded data to myBucket/myKey");
//         callBack(true);
//     });
    
// }// END function createFolder
// exports.createFolder = createFolder;

/**
+   \brief upload
+
+       This function will upload a file to the S3 storage
+
+   \author Salvatore D'Agostino
+   \date  2012-12-09 14:57
+   \param s3       instance of aws connection
+   \param bucket   the name of the bucket
+   \param fileName the name of the file
+   \param fileData the file contents
+
+   \return True if success, False otherwise
**/
function upload(s3,bucket,fileName,fileData)
{
    var data = {Bucket: bucket, Key: fileName, Body: fileData};
    
    s3.client.putObject(data).done(function(resp) {
        console.log("Successfully uploaded data to myBucket/myKey");
    });
    
}// END function upload
exports.upload = upload;