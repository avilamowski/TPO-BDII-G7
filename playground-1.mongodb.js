use('ej1')

// b. Cuente la cantidad de álbumes por año y ordénelos de manera descendente
// (mostrando los años con mayor cantidad de álbumes al principio).
db.albums.aggregate(
  { $group: {_id: "$Year", count: {$sum: 1} } },
  { $sort : { count : -1 } }
)


// c. A cada documento, agregarle un nuevo atributo llamado 'score' que sea 501- Number.

// Forma 1:
db.albums.updateMany({}, [{ $set: { score: { $subtract: [501, "$Number"] } } }])

// Forma 2:
db.albums.find({}).forEach((doc) => {
    db.albums.updateOne(
        { _id: doc._id },
        { $set: { score: 501 - Number(doc.Number) } }
    )
}) 


// d. Realice una consulta que muestre el 'score' de cada artista.
use('ej1')

db.albums.aggregate(
  { $group: { _id: "$Artist", score: { $sum: "$score" } } },
  { $sort : { score : -1 } }
)