
exports.seed = function(knex, Promise) {
  return knex('student').del()
    .then(() => {
      return knex('student').insert([
        {id: 1, firstname: 'Will', lastname: 'Kirkhope', prevoccupation: 'Personal Trainer', hometown: 'San Diego'},
        {id: 2, firstname: 'Tom', lastname: 'Clukies', prevoccupation: 'Server', hometown: 'Denver'},
        {id: 3, firstname: 'Josh', lastname: 'Lovely', prevoccupation: 'Fortune Teller', hometown: 'Imaginationland'},
        {id: 4, firstname: 'Will', lastname: 'Kirkhope', prevoccupation: 'Personal Trainer', hometown: 'San Diego'},
        {id: 5, firstname: 'Tom', lastname: 'Clukies', prevoccupation: 'Server', hometown: 'Denver'},
        {id: 6, firstname: 'Josh', lastname: 'Lovely', prevoccupation: 'Fortune Teller', hometown: 'Imaginationland'},
        {id: 7, firstname: 'R.J.', lastname: 'Kirkhope', prevoccupation: 'Stuntman', hometown: 'San Diego'},
        {id: 8, firstname: 'Mark', lastname: 'Newcomb', prevoccupation: 'Already was a web developer yo', hometown: 'Hays'},
        {id: 9, firstname: 'Kim', lastname: 'Hermosillo', prevoccupation: 'Server', hometown: 'Denver'},
        {id: 10, firstname: 'Tom', lastname: 'Lee', prevoccupation: 'Sales Manager', hometown: 'Colorado Springs'},
        {id: 11, firstname: 'Ben',  lastname: 'Austin', prevoccupation: 'Social Work', hometown: 'Denver'},
        {id: 12, firstname: 'Josh', lastname: 'Robbs', prevoccupation: 'professional alligator wrangler', hometown: 'Poquoson'},
        {id: 13, firstname: 'Matt', lastname: 'Riach', prevoccupation: 'Map Seller', hometown: 'Liverpool'},
        {id: 14, firstname: 'Natalie', lastname: 'Todd', prevoccupation: 'Recruiter', hometown: 'Anchorage'},
        {id: 15, firstname: 'Michael', lastname: 'Coons', prevoccupation: 'Director of IT', hometown: 'Bloomington'},
        {id: 16, firstname: 'Danny', lastname: 'Pifer', prevoccupation: 'QA Tester', hometown: 'San Francisco'},
        {id: 17, firstname: 'Ryan', lastname: 'McCrory', prevoccupation: 'U.S. Army', hometown: 'Denver'}
      ]);
    })
  //   .then(() => {
  //     return knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 4;");
  // });
};
