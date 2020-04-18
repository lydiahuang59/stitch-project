
const fs = require('fs');
  
fs.readFile('text/genesis.txt', (err, data) => { 
    if (err) throw err; 
    console.log(data.toJSON()); 
}) 
/*
// Initialize the App Client
const client = stitch.Stitch.initializeDefaultAppClient("lydia_app-uabyv");
// Get a MongoDB Service Client
const mongodb = client.getServiceClient(
    stitch.RemoteMongoClient.factory,
    "mongodb-atlas"
);
// Get a reference to the blog database
const db = mongodb.db("blog");

function displayComments() {
    db.collection("comments")
    .find({}, {limit: 1000})
    .toArray()
    .then(docs => {
        const html = docs.map(doc => `<div>${doc.comment}</div>`);
        document.getElementById("comments").innerHTML = html;
    });
}
function displayCommentsOnLoad() {
  client.auth
    .loginWithCredential(new stitch.AnonymousCredential())
    .then(displayComments)
    .catch(console.error);
}
function addComment() {
    const newComment = document.getElementById("new_comment");
    console.log("add comment", client.auth.user.id)
    db.collection("comments")
      .insertOne({ owner_id : client.auth.user.id, comment: newComment.value })
      .then(displayComments);
    newComment.value = "";
  }*/