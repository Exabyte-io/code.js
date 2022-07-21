import mergeAllOf from "json-schema-merge-allof";
import { getSchemaById } from './JSONSchemasInterface';
import { schemas } from '@exabyte-io/esse.js/lib/js/esse/schemas.js';

const mainSchemas = {
    Material: "material",
    Entity: "system-entity",
    BankMaterial: "material",
    Workflow: "workflow",
    Subworkflow: "workflow-subworkflow",
    BankWorkflow: "workflow",
    Job: "job",
    AssertionUnit: "workflow-unit-assertion",
    AssignmentUnit: "workflow-unit-assignment",
    ConditionUnit: "workflow-unit-condition",
    ExecutionUnit: "workflow-unit-execution",
    IOUnit: "workflow-unit-io",
    MapUnit: "workflow-unit-map",
    ProcessingUnit: "workflow-unit-processing",
    ReduceUnit: "workflow-unit-reduce",
    SubworkflowUnit: "workflow-unit",
    Unit: "workflow-unit",
};

const materialMix = [
    'system-recalculated-hash',
];

const entityMix = [
    'system-description-object',
    'system-base-entity-set',
    'system-sharing',
    'system-metadata',
    'system-defaultable',
];

const subWorkflowMix = [
    'system-system-name',
    'system-is-multi-material'
];

const workflowMix = [
    'workflow-base-flowchart',
    'system-history',
    'system-is-outdated'
];

const bankMaterialMix = [
    'system-conventional',
    'system-creator-account'
];

const bankWorkflowMix = [
    'system-creator-account'
];

const jobMix = [
    'system-status',
    'system-job-extended'
];

const unitMix = [
    'system-unit-extended',
    'system-status',
    'workflow-unit-runtime-runtime-items'
];

const mixSchemas = {
    Entity: [
        ...entityMix
    ],
    Material: [
        ...entityMix,
        ...materialMix
    ],
    BankMaterial: [
        ...entityMix,
        ...materialMix,
        ...bankMaterialMix,
    ],
    Workflow: [
        ...entityMix,
        ...subWorkflowMix,
        ...workflowMix
    ],
    Subworkflow: [
        ...subWorkflowMix
    ],
    BankWorkflow: [
        ...entityMix,
        ...subWorkflowMix,
        ...workflowMix,
        ...bankWorkflowMix
    ],
    Job: [
        ...entityMix,
        ...jobMix
    ],
    // AssertionUnit: [
    //     ...unitMix
    // ],
    // AssignmentUnit: [
    //     ...unitMix
    // ],
    // ConditionUnit : [
    //     ...unitMix
    // ],
    // ExecutionUnit: [
    //     ...unitMix
    // ],
    // IOUnit: [
    //     ...unitMix
    // ],
    // MapUnit: [
    //     ...unitMix
    // ],
    // ProcessingUnit: [
    //     ...unitMix
    // ],
    // ReduceUnit: [
    //     ...unitMix
    // ],
    // SubworkflowUnit: [
    //     ...unitMix
    // ],
    // Unit: [
    //     ...unitMix
    // ]
};

export function getSchemaByClassName(className) {
    return mainSchemas[className] ? getSchemaById(mainSchemas[className]) : null;
}

export function getMixSchemasByClassName(className) {
    return mixSchemas[className] ? mixSchemas[className].map(schemaId => getSchemaById(schemaId)) : [];
}
