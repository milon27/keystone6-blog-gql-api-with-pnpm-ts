import { ListConfig, BaseFields } from "@keystone-6/core";
import { BaseListTypeInfo } from "@keystone-6/core/types";

export type ListType<T> = ListConfig<T & BaseListTypeInfo, BaseFields<T & BaseListTypeInfo>>