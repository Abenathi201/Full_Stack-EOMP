const db = require("../config/index"); //this imprt the db con from config
const { bcrypt, compare, hashSync } = require("bcrypt");
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
            res.json({ status: res.statusCode, results });
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

        try {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(data.userPass, salt);

            const userData = {
                emailAdd: data.emailAdd,
                userPass: passwordHash
            };

            const query = `
                INSERT INTO Users
                SET ?;
            `;

            // Execute query
            db.query(query, [userData], (err) => {
                if (err) {
                    res.status(500).send(err.toString());
                } else {
                    res.json({ status: res.statusCode, msg: "You are now registered." });
                }
            });
        } catch (e) {
            res.status(500).send(e.toString());
        }
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