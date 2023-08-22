const db = require("../config/index"); //this imprt the db con from config
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/authentication");

class Users {
    // Get all users
    getUsers(req, res) {
        const query = `
            SELECT userID, firstName, lastName, userAge, Gender, userRole,
            emailAdd, userPass, userProfile
            FROM Users;
        `;
        db.query(query, (err, results) => {
          if (err) {
            throw err
        } else {
            res.json({ status: res.statusCode });
        }
        });
      }

    // Get a single user
    getUser(req, res) {
        const query = `
            SELECT userID, firstName, lastName,userAge, Gender,userRole,
            emailAdd, userProfile
            FROM Users
            WHERE userId = ${req.params.id};
            `;
        db.query(query, (err, result) => {
          if (err) {
            throw err;
        } else {
            res.json({ status: res.statusCode,  result });
        }
        });
    } 

    // Register a user
    async register(req, res) {
        const data = req.body;
        //encrypt password
        data.userPass = await hash(data.userPass, 15);
        
        const user = {
          emailAdd: data.emailAdd,
          userPass
          : data.userPass,
        };
        //query
        const query = `
          INSERT INTO Users
          SET ?; 
          `;
        db.query(query, [data], (err) => {
          if (err) {
            throw err
        } else {
            //create a token
          let token = createToken(user);
          res.json({ status: res.statusCode, msg: "You are now registered." });
            }
        });
    }
  
    // Login with a user
    login(req, res) {
      const { emailAdd, userPass } = req.body;
    
      const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole,
        emailAdd, userPass, userProfile
        FROM Users
        WHERE emailAdd = ?;
      `;
    
      db.query(query, [emailAdd], async (err, result) => {
        if (err) throw err;
        if (!result?.length) {
          res.json({ status: res.statusCode, msg: "You provided a wrong email." });
        } else {
          compare(userPass, result[0].userPass, (cErr, cResult) => {
            if (cErr) throw cErr;
            // Create a token
            const token = createToken({
              emailAdd,
              userPass
            });
            if (cResult) {
              res.json({ msg: "Logged in", token, result: result[0], });
            } else {
              res.json({ status: res.statusCode, msg: "Invalid password or you have not registered" });
            }
          });
        }
      });
    }
  
    // Update a user
    updateUser(req, res) {
      const data = req.body;
      if (data.userPass) {
        data.userPass = hashSync(data.userPass, 15);
      }
      const query = `
          UPDATE Users
          SET ?
          WHERE userID = ?
          `
      db.query(query, [data, req.params.id], (err) => {
        if (err) {
          throw err
      } else {
          res.json({ status: res.statusCode, msg: "The user record was updated." });
      }
      });
    }

    // Delete a user
    deleteUser(req, res) {
      const query = `
      DELETE FROM Users
      WHERE userID = ${req.params.id};
      `
      db.query(query, (err) => {
          if(err) {
              throw err
          } else {
              res.json({ status: res.statusCode, msg: "User deleted!" })
          } 
      })
    } 
}
module.exports = Users;