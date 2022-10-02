import { config as envConfig } from 'dotenv'
import { config } from '@keystone-6/core'
import UserList from './src/list/UserList'
import BlogList from './src/list/BlogList'
import ListKeys from './src/utils/ListKeys'
import CategoryList from './src/list/CategoryList'
import { LocalFileStorageConfig, LocalImgStorageConfig } from './src/utils/storage/LocalConfig'
import StorageKeys from './src/utils/StorageKeys'
import { isAdminLoggedIn, session, withAuth } from './src/auth/Auth'

envConfig()

export default config(
    withAuth(
        {
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
            },
            session: session,
            ui: {
                isAccessAllowed: (context) => {
                    // console.warn("Here we go: ", context.session?.data?.isAdmin);
                    // { id: 'cl8rjrurk0000j7yoriohlmbn', name: 'test', isAdmin: false }
                    return isAdminLoggedIn(context.session)
                },
            },
            graphql: {
                apolloConfig: {
                    persistedQueries: false,
                },
            }
        }
    )
)