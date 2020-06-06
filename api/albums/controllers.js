const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM albums`;

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
    

    const sql = `SELECT * FROM albums  Where AlbumId="${Number(id)}"`;

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
      INSERT INTO albums (Title, ArtistId )
      VALUES ("${dataParsed.Title}", ${dataParsed.ArtistId})
      `;
    
    // Sample body for request
    // {
    //   "Title": "New Album",
    //    "ArtistId": 247
    // }

    db.run(sql, function (err) {
      if (err) {

        res.status(400).json({ "error": err.message });
        return; a
      }
      res.send(`A row has been inserted with rowid: ${this.lastID}
                \nRows inserted: ${this.changes}`);
    });

  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const dataStringified = JSON.stringify(req.body);
    const dataParsed = JSON.parse(dataStringified);
    const sql = `
      UPDATE albums
      SET Title = "${dataParsed.Title}", ArtistId = ${dataParsed.ArtistId}
      WHERE AlbumId = ${Number(id)}
      `;

    // Sample body for request
    // {
    //   "Title": "New Album Updated",
    //   "ArtistId": 247
    // }
    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      //return the last id if the table 
      res.send(`Row(s) updated: ${this.changes}`);
    });


  },
  delete: (req, res) => {
    const id = req.params.id;

    const sql = `
      DELETE FROM albums
      WHERE AlbumId = "${Number(id)}"
      `;
    // console.log(sql);

    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      // console.log(this);
      
      res.send(`Row(s) deleted: ${this.changes}`);
    });

  }
}

module.exports = controllers;
