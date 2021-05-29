import { connectToDb } from './mongo-db';


export async function getAll(collection){
    let mongoClient;

    try { 
        mongoClient = await connectToDb();
    }catch(error){
        return {message:'Sorry try again later'}
    }
     
    const db = mongoClient.db();
    const documents = await db
    .collection(collection)
    .find()
    .toArray()

    return documents;
}