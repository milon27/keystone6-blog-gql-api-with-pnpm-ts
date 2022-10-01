import { text } from "@keystone-6/core/fields";
import { document } from '@keystone-6/fields-document';
import { LIST_TYPE } from "../utils/CommonTypes";
import ListKeys from "../utils/ListKeys";

const BlogList = {
    fields: {
        title: text({
            label: "Title",
            validation: { isRequired: true }
        }),
        slug: text({
            hooks: {
                resolveInput: ({ operation, inputData, resolvedData }) => {
                    if (operation === 'create' && !inputData.slug) {
                        return inputData.title.toString().trim()
                            .toLowerCase()
                            .replace(/[^\w ]+/g, '')
                            .replace(/ +/g, '-')
                    }
                    return resolvedData.slug
                }
            }
        }),
        body: document({
            formatting: true,
            dividers: true,
            links: true,
            layouts: [
                [1, 1],
                [1, 1, 1],
            ],
            relationships: {
                mention: {
                    listKey: ListKeys.user,
                    label: 'Mention',
                    selection: 'id name',
                },
            },
        }),
    }
} as LIST_TYPE

export default BlogList