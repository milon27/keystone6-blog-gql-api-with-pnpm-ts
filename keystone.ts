import { config as envConfig } from 'dotenv'
import { config } from '@keystone-6/core'
import UserList from './src/list/UserList'
import BlogList from './src/list/BlogList'
import ListKeys from './src/utils/ListKeys'
import CategoryList from './src/list/CategoryList'
import { LocalFileStorageConfig, LocalImgStorageConfig } from './src/utils/storage/LocalConfig'
import StorageKeys from './src/utils/StorageKeys'

envConfig()

export default config({
    db: {
        provider: "mysql",
        url: process.env.DB_URL!
    },
    lists: {
        [ListKeys.user]: UserList,
        [ListKeys.blog]: BlogList,
        [ListKeys.category]: CategoryList,
    },
    storage: {
        [StorageKeys.localImg]: LocalImgStorageConfig,
        [StorageKeys.localFile]: LocalFileStorageConfig,
    }
})