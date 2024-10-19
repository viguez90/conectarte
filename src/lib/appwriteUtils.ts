import { appwriteDatabases } from './appwrite';

export async function appwriteFetchData(databaseId: string, collectionId: string) {
  try {
    const response = await appwriteDatabases.listDocuments(databaseId, collectionId);
    const docsResult = response.documents.map(async (doc) => {
      return doc;
    });
    return await Promise.all(docsResult);
  } catch (error) {
    console.error('Error fetching data from Appwrite:', error);
    throw error;
  }
}
