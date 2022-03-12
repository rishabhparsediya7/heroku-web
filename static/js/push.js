const admin = require("firebase-admin");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db=getFirestore();
const heading=document.getElementById('heading-session');
const imageUrl=document.getElementById('linkforimage')
const data = {
    heading:heading,
    imageUrl:imageUrl
  };
  async function writeData(){
  const res = await db.collection('ywc-posts').doc('posts1').set(data);
  }
  writeData();