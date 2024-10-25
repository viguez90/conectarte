import { appwriteDatabases } from '@lib/appwrite';

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


export async function createContact(contactData: { name: string; lastname: string; mail: string; phone: string; privacyAcept: boolean; message: string }) {
  try {
    const response = await appwriteDatabases.createDocument(
      import.meta.env.PUBLIC_APPWRITE_DB_ID,
      import.meta.env.PUBLIC_APPWRITE_CONTACT_COLLECTION_ID,
      'unique()', // Use 'unique()' to generate a unique ID for the document
      contactData
    );
    return response;
  } catch (error) {
    console.error('Error creating event in Appwrite:', error);
    throw error;
  }
}
