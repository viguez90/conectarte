import { Client, Databases, Storage } from 'appwrite';

export const appwriteClient = new Client()
  .setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT) // URL de tu servidor Appwrite
  .setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID); // ID de tu proyecto

export const appwriteDatabases = new Databases(appwriteClient);
export const appwriteStorage = new Storage(appwriteClient);




