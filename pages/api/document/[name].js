import firebase from '../../../lib/firebase';

export default (req, res) => {
  if(req.query.name === undefined){
    return
  }
  console.log(req.query.name)
  firebase
    .collection('documents')
    .doc(req.query.name)
    .get()
    .then((doc) => {
      res.json(doc.data());
    })
    .catch((error) => {
      res.json({ error });
    });
};
