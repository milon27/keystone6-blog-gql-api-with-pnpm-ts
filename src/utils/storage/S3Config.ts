import { StorageConfig } from "@keystone-6/core/types";

const bucketName = process.env.bucketName
const region = process.env.region
const accessKeyId = process.env.accessKeyId
const secretAccessKey = process.env.secretAccessKey

export const S3ImgStorageConfig = {
    kind: 's3',
    type: 'image',
    bucketName,
    region,
    accessKeyId,
    secretAccessKey,
    // signed: { expiry: 5000 },
} as StorageConfig

export const S3FileStorageConfig = {
    kind: 's3',
    type: 'file',
    bucketName,
    region,
    accessKeyId,
    secretAccessKey,
    // signed: { expiry: 5000 },
} as StorageConfig