import { config } from 'dotenv'
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import ListKeys from '../utils/ListKeys';

config()

const { withAuth } = createAuth({
    listKey: ListKeys.user,
    identityField: 'email',
    sessionData: 'id name isAdmin',
    secretField: 'password',
    initFirstItem: {
        fields: ["name", "email", "password"],
        itemData: {
            isAdmin: true
        },
        skipKeystoneWelcome: true
    },
});


let sessionSecret = `${process.env.SESSION_SECRET}`;
let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

interface ISesssionData {
    id: string, name: string, isAdmin: boolean
}
const session = statelessSessions<ISesssionData>({
    maxAge: sessionMaxAge,
    secret: sessionSecret,
});

const isAdminLoggedIn = (session: any) => {
    // console.log("has user:", session?.data);
    return !!session?.data && !!session?.data.isAdmin
}

const isUserLoggedIn = (session: any) => {
    return !!session?.data
}

export { withAuth, session, isAdminLoggedIn, isUserLoggedIn };