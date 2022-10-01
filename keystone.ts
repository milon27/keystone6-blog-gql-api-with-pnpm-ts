import { config as envConfig } from 'dotenv'
import { config } from '@keystone-6/core'
import UserList from './src/list/UserList'
import BlogList from './src/list/BlogList'
import ListKeys from './src/utils/ListKeys'

envConfig()

export default config({
    db: {
        provider: "mysql",
        url: process.env.DB_URL!
    },
    lists: {
        [ListKeys.user]: UserList,
        [ListKeys.blog]: BlogList
    }
})