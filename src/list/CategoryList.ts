import { relationship, text } from "@keystone-6/core/fields";
import { isUserLoggedIn } from "../auth/Auth";
import { ListType } from "../utils/CommonTypes";
import ListKeys from "../utils/ListKeys";
import { IBlog } from "./BlogList";

export interface ICategory {
    title: string
    blogs: IBlog[]
}

const CategoryList = {
    fields: {
        title: text({
            validation: { isRequired: true }
        }),
        blogs: relationship({
            ref: `${ListKeys.blog}.categories`,
            many: true
        }),
    }, access: {
        operation: {
            query: ({ session, context, listKey, operation }) => isUserLoggedIn(session),
            create: ({ session, context, listKey, operation }) => isUserLoggedIn(session),
            update: ({ session, context, listKey, operation }) => isUserLoggedIn(session),
            delete: ({ session, context, listKey, operation }) => isUserLoggedIn(session),
        }
    }
} as ListType<ICategory>

export default CategoryList