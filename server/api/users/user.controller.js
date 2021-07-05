const{ create,
  getUserByUserId,
  getUser,
  updateUser,
  deleteUser,
  getUserByUserEmail,
  feed,
  getFeed,
  comment,
  getComment
} = require("./user.service");


const{ genSaltSync ,hashSync, compareSync } = require("bcrypt");
const {sign} = require("jsonwebtoken");


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.start(500).json({
success: 0,
message: "Database connection error"
                });
            }

    return res.status(200).json({
success:1,
data:results
    });
        });
    },
    


    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getUser: (req, res) => {
        getUser((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json(results);
        });
      },
      updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },



      deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            message: "user deleted successfully"
          });
        });
      },



      login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
          const result = compareSync(body.password, results.password);
          if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, "hackathon", {
              expiresIn: "1h"
            }); //define the key on env file later on
            return res.json({
              auth: true,
              success: 1,
              message: "login successfully",
              token: jsontoken,
              user: results


            }),
            console.log("login successfully");
          }

           else {
              
              return res.json({
              auth: false,
              success: 0,
              data: "Invalid email or password"
            }),
            console.log("login failed");
          }
        });
      },

createFeed: (req, res) => {
        const body = req.body;
        // const salt = genSaltSync(10);
        // body.password = hashSync(body.password, salt);
        feed(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.start(500).json({
success: 0,
message: "Database connection error"
                });
            }

    return res.status(200).json({
success:1,
data:results
    });
        });
    },

    getFeed: (req, res) => {
      getFeed((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json(
           results
        );
      });
    },



    
comment: (req, res) => {
  const body = req.body;
  // const salt = genSaltSync(10);
  // body.password = hashSync(body.password, salt);
  comment(body,(err,results)=>{
      if(err){
          console.log(err);
          return res.start(500).json({
success: 0,
message: "Database connection error"
          });
      }

return res.status(200).json({
success:1,
data:results
});
  });
},

getComment: (req, res) => {
  const id = req.params.id;
  getComment(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    results.password = undefined;
    return res.json(results);
  });
},


    };