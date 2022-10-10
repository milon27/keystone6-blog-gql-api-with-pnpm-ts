import { text, password, checkbox } from '@keystone-6/core/fields'
import { isAdminLoggedIn, isUserLoggedIn } from '../auth/Auth'
import { ListType } from '../utils/CommonTypes'

export interface IUser {
    name: string
    email: string
    password: string
    isAdmin: boolean
}

const UserList = {
    fields: {
        name: text({
            label: "Name",
            validation: { isRequired: true },
            db: { nativeType: 'VarChar(40)' },
        }),
        email: text({
            label: "Email",
            validation: {
                isRequired: true, match: { regex: new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+"), explanation: "Enter valid email!" }
            },
            isIndexed: "unique"
        }),
        password: password({
            label: "Password",
            validation: {
                isRequired: true,
                length: { min: 6 }
            }
        }),
        isAdmin: checkbox({ defaultValue: false }),
        // not get any auto suggestion for the field names
    },
    access: {
        operation: {
            query: ({ session, context, listKey, operation }) => {
                // can't define session type here
                return isAdminLoggedIn(session)
            },
            create: ({ session, context, listKey, operation }) => isAdminLoggedIn(session),
            update: ({ session, context, listKey, operation }) => isAdminLoggedIn(session),
            delete: ({ session, context, listKey, operation }) => isAdminLoggedIn(session),
        }
    }
} as ListType<IUser>

export default UserList