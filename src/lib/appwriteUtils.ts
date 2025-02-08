import { appwriteDatabases } from '@lib/appwrite';
import { Query } from 'appwrite';

export async function appwriteFetchData(databaseId: string, collectionId: string, limit: number) {
  try {
    const response = await appwriteDatabases.listDocuments(
      databaseId,
      collectionId,
      [
          Query.limit(limit),
          Query.offset(0)
      ]
    );
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


export async function updatePass(collection: string, document: string, attribute: string, value: any) {
  try {
    const data = {
      [attribute]: value // Usamos la sintaxis de corchetes para construir el objeto
    };

    const response = await appwriteDatabases.updateDocument(
      import.meta.env.PUBLIC_APPWRITE_DB_ID,
      collection,
      document,
      data
    );
    return response;
  } catch (error) {
    console.error('Error updating document in Appwrite:', error);
    throw error;
  }
}

