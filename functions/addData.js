const { createClient } = require("@astrajs/collections");

const collection = "Users";
exports.handler = async function (event, context, callback) {
  // create an Astra client
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  });

  const usersCollection = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);
  //// Sample User Data
  const userdata = [
    {
      id: 0,
      fullName: "Payal Patra",
      email: "Payalpatra105@gmail.com",
      message: "Datastax is great to store massive data",
    },
    {
      id: 1,
      fullName: "Rashmita rani ",
      email: "Rashmitarani10@gmail.com",
      message: "Datastax with apache cassandra is really powerful",
    },
    {
      id: 2,
      fullName: "Sambid ",
      email: "Sambid90@gmail.com",
      message: "Datastax really made cassandra easy ",
    },
  ];

  try {
    for (let i = 0; i < userdata.length; i++) {
      await usersCollection.create("Users", event.body);

      return {
        statusCode: 200,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
