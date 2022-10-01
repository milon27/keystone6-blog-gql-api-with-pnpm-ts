import { text, password, checkbox } from '@keystone-6/core/fields'
import { LIST_TYPE } from '../utils/CommonTypes'

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
        isAdmin: checkbox({ defaultValue: false })
    }
} as LIST_TYPE

export default UserList