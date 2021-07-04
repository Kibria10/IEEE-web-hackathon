const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            
            `insert into registration(firstName, lastName, gender, email, password, number) values(?,?,?,?,?,?)`,

            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
            return callBack(null, results);
            }
        );
    },


    getUserByUserEmail: (email, callBack) => {
      pool.query(
        `select * from registration where email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },


    getUserByUserId: (id, callBack) => {
        pool.query(
          `select id,firstName,lastName,gender,email,number from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },


      getUser: callBack => {
        pool.query(
          `select id,firstName,lastName,gender,email,number from registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },



      updateUser: (data, callBack) => {
        pool.query(
          `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
          [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id,
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
    //delete
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      
    //Newsfeed

    feed: (data, callBack) => {
      pool.query(
          
          `insert into feed(name, title, img) values(?,?,?)`,

          [
              data.name,
              data.name,
              data.img,
            
          ],
          (error, results, fields) => {
              if(error) {
                  return callBack(error);
              }
          return callBack(null, results);
          }
      );
  },


  getFeed: callBack => {
    pool.query(
      `select name,title,img,time from feed  ORDER BY time DESC`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

    };
