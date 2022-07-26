export { compareEntitiesInOrderedSetForSorting } from "../entity/set/ordered/utils";
export { convertToCompactCSVArrayOfObjects, safeMakeArray } from "./array";
export { cloneClass, extendClass, extendClassStaticProps, extendThis } from "./class";
export { deepClone } from "./clone";
export { refreshCodeMirror } from "./codemirror";
export { formatFileSize, getProgrammingLanguageFromFileExtension } from "./file";
export {
    calculateHashFromObject,
    calculateHashFromString,
    removeTimestampableKeysFromConfig,
} from "./hash";
export {
    convertKeysToCamelCaseForObject,
    flattenObject,
    getOneMatchFromObject,
    renameKeysForObject,
    safeMakeObject,
    sortKeysDeepForObject,
    stringifyObject,
} from "./object";
export { getSearchQuerySelector } from "./selector";
export {
    randomAlphanumeric,
    removeCommentsFromSourceCode,
    removeEmptyLinesFromString,
    removeNewLinesAndExtraSpaces,
    toFixedLocale,
} from "./str";
export { getUUID } from "./uuid";

