const express = require("express");
const router = express.Router();

let dbusers = [
  { us: "kenny", ps: 1 },
  { us: "ab", ps: 2 },
];
//getAllClients
router.get("/", (req, res) => {
  res.json(dbusers.map((val) => val.us));
});
//createNewUser
router.put("/", (req, res) => {
  let us = false;
  for (let client of dbusers) {
    if (req.body.us && req.body.us == client.us) {
      us = true;
      break;
    }
  }
  if (us) {
    res.json({ err: "user already exist" });
  } else {
    dbusers = [...dbusers, { us: req.body.us, ps: req.body.ps }];
    res.json({ msg: "user added" });
  }
});
//updateUser
router.post("/", (req, res) => {
  let us;
  console.log(req.body);
  for (let client of dbusers) {
    if (req.body.us && req.body.us == client.us) {
      us = client;
      break;
    }
  }
  if (us) {
    us.us = req.body.nus;
    us.ps = req.body.ps;
    res.json({ msg: "user updated" });
  } else {
    res.json({ err: "user not exist" });
  }
});
//deleteUser
router.delete("/", (req, res) => {
  dbusers = dbusers.filter((item) => item.us != req.body.us);
  res.json({ msg: "user delete" });
});

module.exports = router;
