const database = require('./firebase.js').database;
const firestore = require('firebase/firestore');
const getDoc = firestore.getDoc;
const docRef = firestore.doc;

const test = async () => {
    let url = "/pdf-container/enA4fGWnQOAI0fFP0fTR"
    const gsReference = docRef(database, url);
    let data_url = await getDoc(gsReference)
    console.log(data_url.data())
    return data_url
}
test()