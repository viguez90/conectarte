import { appwriteFetchData } from "@lib/appwriteUtils";

export const getBoletaje = async (eventId: string) => {
    const boletajeDb = await appwriteFetchData(
        import.meta.env.PUBLIC_APPWRITE_DB_ID,
        import.meta.env.PUBLIC_APPWRITE_BOLETAJE_COLLECTION_ID,
        10
    );

    const boletaje = boletajeDb.filter(e => e.id === eventId);


    return boletaje[0]
}



export const getBoleto = async (eventId: string) => {

    const boletajeCollection = await getBoletaje(eventId);

    const resp = await appwriteFetchData(
        import.meta.env.PUBLIC_APPWRITE_DB_ID,
        boletajeCollection.acces,
        80
    );

    return resp
}

