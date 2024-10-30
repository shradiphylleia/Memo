import { databases } from "./config";
import { ID } from "appwrite";

const collections = [
    {
        name: "users",
        id: import.meta.env.VITE_COLLECTION_USERS_ID,
    },
    {
        name:"eventImages",
        id:import.meta.env.VITE_COLLECTION_EVENTIMAGES_ID,
    },
    {
        name:"canvas",
        id:import.meta.env.VITE_COLLECTION_CANVAS_ID,
    }
];

const db = {};

collections.forEach((collection) => {
    db[collection.name] = {
        create: async (payload, id = ID.unique()) => {
            return await databases.createDocument(
                import.meta.env.VITE_DATABASE_ID,
                collection.id,
                id,
                payload
            );
        },
        update: async (id, payload) => {
            console.log("Updating:", id);
            return await databases.updateDocument(
                import.meta.env.VITE_DATABASE_ID,
                collection.id,
                id,
                payload
            );
        },
        delete: async (id) => {
            return await databases.deleteDocument(
                import.meta.env.VITE_DATABASE_ID,
                collection.id,
                id
            );
        },
        get: async (id) => {
            return await databases.getDocument(
                import.meta.env.VITE_DATABASE_ID,
                collection.id,
                id
            );
        },
        list: async (queries) => {
            return await databases.listDocuments(
                import.meta.env.VITE_DATABASE_ID,
                collection.id,
                queries
            );
        },
    };
});

export { db };