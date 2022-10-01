import { relationship, text } from "@keystone-6/core/fields";
import { LIST_TYPE } from "../utils/CommonTypes";

const CategoryList = {
    fields: {
        title: text({
            validation: { isRequired: true }
        })
    }
} as LIST_TYPE

export default CategoryList