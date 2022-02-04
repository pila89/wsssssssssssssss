const express = require("express");
//import Router middleware
const router = express.Router();
//import the data
let Users = require("../data");

//@role: testing the server response
//@url : http://localhost:5000/api/users/test
router.get("/test", (req, res) => {
  res.send("it's working ");
});

//@role: getting the list of all the users
//@url : http://localhost:5000/api/users/all
router.get("/all", (req, res) => {
  res.send(Users);
});

//@role: Create a new  user
//@url : http://localhost:5000/api/users/add

router.post("/add", (req, res) => {
  //create a user
  const newUser = { ...req.body, id: Math.random() };
  //add the user to the array of users
  Users.push(newUser);

  res.status(200).json({ msg: `${newUser.name} has been added`, newUser });
});

//@role: delete a   user
//@url : http://localhost:5000/api/users/delete/:idt
router.delete("/delete/:idt", (req, res) => {
  //read the id of the specific user from the URL
  const idt = req.params.idt;

  Users = Users.filter((user) => user.id != idt);

  res.status(200).json(Users);
});

//@role: update a   user
//@url : http://localhost:5000/api/users/update/:idt
router.put("/update/:idt", (req, res) => {
  //read the id of the specific user from the URL
  const idt = req.params.idt;
  // find the user ot  update
  let user = Users.find((user) => user.id == idt);

  //create an updates user using the old user and the pauload data
  let updatedUser = { ...user, ...req.body };

  //replace the old user with the updated user in the array of users
  Users = Users.map((user) => (user.id == idt ? updatedUser : user));

  res.status(200).json({ msg: `   ${user.name} has been updated ` , updatedUser});
});

//export router middleware
module.exports = router;
// req={
//     Headers:"oqufhusdfhsudfg",
//     params:{ id:' k,f,v', name:'jsdn'},
//     body: {
//         name:"mahdi",
//         email:'jenhani '
//     }
// }