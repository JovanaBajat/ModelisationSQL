const db = require ('./db')

module.exports = {

    /**
     * return a list of lists
     */

     getLists() {
         return db.asyncQuery('SELECT * FROM lists ORDER BY id')
     },
     createList(name) {
         return db.asyncQuery(`INSERT INTO lists(name) VALUES ('${name}')`)
     },
     updateList(name, id) {
        return db.asyncQuery(`UPDATE lists SET name ='${name}' WHERE id ='${id}'`)
    },
     deleteList(id) {
        return db.asyncQuery(`DELETE  FROM lists WHERE id ='${id}'`)
    }
}