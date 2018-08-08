exports.seed = function (knex, Promise) {
  return knex('jobs').del()
    .then(function () {
      return knex('jobs').insert([{
        id: 1,
        company: 'Fireplace Warehouse',
        title: 'Marketing/IT/Web Developer',
        employment_date: 'August 2017 - March 2018',
        details: [`Redesigned company website. yielding a 300% increase in traffic and 200% increase in lead conversions`, `Managed internal infrastructure hosted on seven Google Cloud servers, supporting 50 employees in three locations`, `Overhauled company eCommerce site, increasing eCommerce revenue by 57%`, `Managed SEM campaigns, increasing traffic by 150% while reducing SEM costs by over 20%`]
      }, {
        id: 2,
        company: 'Freelance',
        title: 'Web Developer/Designer',
        employment_date: 'April 2015 - August 2017',
        details: [`Created three separate client sites in WordPress, adhering to strict deadlines`, `Created and managed over 20 SEM and paid advertising campaigns, yielding a 57% increase in ad revenue for clients`]
      }, {
        id: 3,
        company: 'Hillside Software, Inc.',
        title: 'Full-Stack Web Developer',
        employment_date: 'April 2014 - March 2015',
        details: [`Developed a full-stack responsive web app`, `Utilized AngularJS, Node.js, Parse (MongoDB), Bootstrap, Jade/Pug and Grunt`]
      }, {
        id: 4,
        company: 'mGive',
        title: 'Mobile Campaign Strategist',
        employment_date: 'April 2013 - March 2014',
        details: [`Assisted a wide variety of non-profit organizations with over 50 fundraising and outreach campaigns`, `Managed over 20 fundraising campaigns responsible for raising over $30 million for clients`, `Responsible for creating and presenting financial reports to internal management, as well as clients`]
      }, {
        id: 5,
        company: 'Hillside Software, Inc.',
        title: 'Marketing and Training Manager',
        employment_date: 'December 2004 - March 2013',
        details: [`Trained current and prospective clients on using the software in both small and large settings with over 100 presentations delivered`, `Provided assistance to real estate agents on how to continuously implement the company’s products focused on their unique business needs`, `Worked closely with the development team on prioritizing bug fixes and new product development`, `Administered the execution of sales objectives and project progress`]
      }]);
    });
};