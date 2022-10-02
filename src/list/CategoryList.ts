import { relationship, text } from "@keystone-6/core/fields";
import { LIST_TYPE } from "../utils/CommonTypes";
import ListKeys from "../utils/ListKeys";

const CategoryList = {
    fields: {
        title: text({
            validation: { isRequired: true }
        }),
        blogs: relationship({
            ref: `${ListKeys.blog}.categories`,
            many: true
        }),
    }
} as LIST_TYPE

export default CategoryList