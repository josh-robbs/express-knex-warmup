
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', student => {
    student.increments()
    student.text('firstname')
    student.text('lastname')
    student.text('prevoccupation')
    student.text('hometown')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student')
};
