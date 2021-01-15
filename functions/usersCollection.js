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
  try {
    const res = await usersCollection.find();
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
