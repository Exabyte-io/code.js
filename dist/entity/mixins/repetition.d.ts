import { InMemoryEntityConstructor } from "../in_memory";
export interface HasRepetition {
    setRepetition: (repetition: number) => void;
}
type Units = HasRepetition[];
type Workflows = HasRepetition[];
type Subworkflows = HasRepetition[];
export declare function HasRepetitionMixin<T extends InMemoryEntityConstructor>(superclass: T): {
    new (...args: any[]): {
        _repetition: number;
        _totalRepetitions: number;
        units: Units;
        workflows: Workflows;
        subworkflows: Subworkflows;
        readonly repetition: number;
        setRepetition(repetition: number): void;
        readonly totalRepetitions: number;
        setTotalRepetitions(totalRepetition: number): void;
        _json: import("../in_memory").AnyObject;
        prop<T_1 = undefined>(name: string, defaultValue: T_1): T_1;
        prop<T_2 = undefined>(name: string): T_2 | undefined;
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
        getEntityByName(entities: import("../in_memory").InMemoryEntity[], entity: string, name: string): import("../in_memory").InMemoryEntity;
    };
} & T;
export {};
