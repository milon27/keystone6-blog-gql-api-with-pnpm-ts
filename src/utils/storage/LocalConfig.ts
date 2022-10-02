import { StorageConfig } from "@keystone-6/core/types";

// manully create public/files, public/images folder before run the appplication

export const LocalImgStorageConfig = {
    kind: 'local',
    type: 'image',
    generateUrl: (path: string) => `${process.env.BASE_ADMIN_URL}/images${path}`,
    serverRoute: {
        path: '/images',
    },
    storagePath: 'public/images',
} as StorageConfig

export const LocalFileStorageConfig = {
    kind: 'local',
    type: 'file',
    generateUrl: (path: string) => `${process.env.BASE_ADMIN_URL}/files${path}`,
    serverRoute: {
        path: '/files',
    },
    storagePath: 'public/files',
} as StorageConfig