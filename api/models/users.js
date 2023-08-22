const db = require("../config/index"); //this imprt the db con from config
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/authentication");

class Users {
    getUsers(req, res) {
        const query = `
            SELECT userID, firstName, lastName, userAge, gender, userRole,
            emailAdd, userPass, profileUrl
            FROM Users;
        `;
        db.query(query, (err, results) => {
          if (err) throw err;
          res.json({
            status: res.statusCode, // Corrected typo here
            results,
          });
        });
      }
      
  getUser(req, res) {
    const query = `
        SELECT userID, firstName, lastNmae,userAge, gender,userRole,
        emailAdd, profileUrl
        FROM Users
        WHERE userId = ${req.params.id};
        `;
    db.query(query, (err, result) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
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
      if (err) throw err;
      //create a token
      let token = createToken(user);
      res.json({
        status: res.statusCode,
        msg: "You are now registered.",
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPass } = req.body;
  
    const query = `
      SELECT userID, firstName, lastName, userAge, gender, userRole,
      emailAdd, profileUrl, userPass
      FROM Users
      WHERE emailAdd = ?;
    `;
  
    db.query(query, [emailAdd], async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email.",
        });
      } else {
        await compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          // Create a token
          const token = createToken({
            emailAdd,
            userPass,
          });
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered",
            });
          }
        });
      }
    });
  }
  

  updateUser(req, res) {
    const data = req.body;
    if (data.userPass) {
      data.userPass = hashSync(data.userPass, 15);
    }
    const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?
        `;
    db.query(query, [data, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record was updated.",
      });
    });
  }
  
  deleteUser(req, res) {
    const query = `DELETE FROM Users
        WHERE userID = ?`;
    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A user record was deleted.",
      });
    });
  }  
}
module.exports = Users;