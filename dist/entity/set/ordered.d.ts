import { InMemoryEntitySet } from "../set";
export declare const OrderedInMemoryEntitySet: {
    new (...args: any[]): {
        entitySetType: string | undefined;
        readonly isOrderedSet: boolean;
        _json: import("../in_memory").AnyObject;
        prop<T = null>(name: string, defaultValue?: T | undefined): T;
        setProp(name: string, value: unknown): void;
        unsetProp(name: string): void;
        toJSON(exclude?: string[]): import("../in_memory").AnyObject;
        toJSONSafe(exclude?: string[]): import("../in_memory").AnyObject;
        toJSONQuick(exclude?: string[]): import("../in_memory").AnyObject;
        clone(extraContext?: object | undefined): any;
        validate(): void;
        clean(config: import("../in_memory").AnyObject): import("../in_memory").AnyObject;
        isValid(): boolean;
        id: string;
        readonly cls: string;
        getClsName(): string;
        readonly slug: string;
        readonly isSystemEntity: boolean;
        getAsEntityReference(byIdOnly?: boolean): import("@mat3ra/esse/lib/js/types").EntityReferenceSchema;
        getEntityByName(entities: import("..").InMemoryEntity[], entity: string, name: string): import("..").InMemoryEntity;
    };
} & {
    new (...args: any[]): {
        inSet: {
            _id?: string | undefined;
            cls?: string | undefined;
            slug?: string | undefined;
            type?: string | undefined;
            index?: number | undefined;
        }[];
        getIndexByIdInOrderedSet(setId: string): number;
        _json: import("../in_memory").AnyObject;
        prop<T = null>(name: string, defaultValue?: T | undefined): T;
        setProp(name: string, value: unknown): void;
        unsetProp(name: string): void;
        toJSON(exclude?: string[]): import("../in_memory").AnyObject;
        toJSONSafe(exclude?: string[]): import("../in_memory").AnyObject;
        toJSONQuick(exclude?: string[]): import("../in_memory").AnyObject;
        clone(extraContext?: object | undefined): any;
        validate(): void;
        clean(config: import("../in_memory").AnyObject): import("../in_memory").AnyObject;
        isValid(): boolean;
        id: string;
        readonly cls: string;
        getClsName(): string;
        readonly slug: string;
        readonly isSystemEntity: boolean;
        getAsEntityReference(byIdOnly?: boolean): import("@mat3ra/esse/lib/js/types").EntityReferenceSchema;
        getEntityByName(entities: import("..").InMemoryEntity[], entity: string, name: string): import("..").InMemoryEntity;
    };
} & typeof InMemoryEntitySet;