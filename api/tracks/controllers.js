const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM tracks`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {

    const id = req.params.id;
    console.log(id);


    const sql = `SELECT * FROM tracks  Where TrackId="${Number(id)}"`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  create: (req, res) => {
    // read row data from body
    const dataStringified = JSON.stringify(req.body);
    const dataParsed = JSON.parse(dataStringified);

    const sql = `
      INSERT INTO tracks (
                       Name,
                       AlbumId,
                       MediaTypeId,
                       GenreId,
                       Composer,
                       Milliseconds,
                       Bytes,
                       UnitPrice)
      VALUES( "${ dataParsed.Name}",
               ${ dataParsed.AlbumId },
               ${ dataParsed.MediaTypeId }, 
               ${ dataParsed.GenreId }, 
              "${ dataParsed.Composer}", 
               ${ dataParsed.Milliseconds }, 
               ${ dataParsed.Bytes }, 
               ${ dataParsed.UnitPrice })
      `;

    // Sample body for request
//     {
//       "Name": "New Value",
//       "AlbumId": 1,
//       "MediaTypeId": 1,
//       "GenreId": 1,
//       "Composer": "New Value",
//       "Milliseconds": 111,
//       "Bytes": 1111,
//       "UnitPrice": 1.10
// }

    db.run(sql, function (err) {
      if (err) {

        res.status(400).json({ "error": err.message });
        return; a
      }
      res.json({
        message: `A row has been inserted with TrackId: ${this.lastID}`
      });
    });

  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const dataStringified = JSON.stringify(req.body);
    const dataParsed = JSON.parse(dataStringified);
    const sql = `
      UPDATE tracks
      SET
          Name = "${ dataParsed.Name}",
          MediaTypeId  = ${ dataParsed.MediaTypeId}, 
          AlbumId = ${ dataParsed.AlbumId},
          GenreId  = ${ dataParsed.GenreId}, 
          Composer  =  "${ dataParsed.Composer}", 
          Milliseconds = ${ dataParsed.Milliseconds}, 
          Bytes = ${ dataParsed.Bytes}, 
          UnitPrice = ${ dataParsed.UnitPrice }
      WHERE TrackId = ${Number(id)}
      `;

//     {
//       "Name": "New Value Updated",
//       "AlbumId": 2,
//       "MediaTypeId": 2,
//       "GenreId": 2,
//       "Composer": "New Value Updated",
//       "Milliseconds": 112,
//       "Bytes": 1112,
//       "UnitPrice": 1.12
// }
    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      //return the last id if the table 
      res.json({ message: `Row(s) updated: ${this.changes}` });
    });


  },
  delete: (req, res) => {
    const id = req.params.id;

    const sql = `
      DELETE FROM tracks
      WHERE TrackId = "${Number(id)}"
      `;
    // console.log(sql);

    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      // console.log(this);

      res.json({ message: `Row(s) deleted: ${this.changes}` });
    });

  }
}

module.exports = controllers;
