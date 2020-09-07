import { getCaptureBlob } from "./capture";

export {uploadBlob};


// See https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
// https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage
//
// https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples


/*
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline
} = require('@azure/storage-blob');
*/

// It is possible that for large files it may be necessary to call blob.slice() and
// upload in parts.
async function uploadBlob(name:string){
  let vblob : Blob = getCaptureBlob();
  console.log("Video blob size", vblob.size);
  let response =  await fetch('api/uploadTest?name='+name+'&exten=webm', {method:'POST',body:vblob});

  return response.text();
}

