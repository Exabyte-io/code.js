import lodash from "lodash";

// import { ESSE } from "@exabyte-io/esse.js";

import { deepClone } from "../utils/clone";

// TODO: https://exabyte.atlassian.net/browse/SOF-5946
// const schemas = new ESSE().schemas;


export class InMemoryEntity {

    static create(config) {
        return new this.prototype.constructor(config);
    }

    constructor(config) {
        this._json = deepClone(config || {});
    }

    /**
     * @summary Return a prop or the default
     * @param name {String}
     * @param defaultValue {*}
     * @returns {*}
     */
    prop(name, defaultValue = null) {
        // `lodash.get` gets `null` when the value is `null`, but we still want a default value in this case, hence `||`
        return lodash.get(this._json, name, defaultValue) || defaultValue;
    }

    /**
     * @summary Set a prop
     * @param name {String}
     * @param value {*}
     */
    setProp(name, value) {
        this._json[name] = value;
    }

    /**
     * @summary Remove a prop
     * @param name {String}
     */
    unsetProp(name) {
        delete this._json[name];
    }

    /**
     * @summary Array of fields to exclude from resulted JSON
     * @param exclude {String[]}
     */
    toJSON(exclude = []) {
        const config = deepClone(lodash.omit(this._json, exclude));
        return this.clean(config);
    }

    /**
     * @summary Clone this entity
     * @param extraContext {Object}
     * @returns {*}
     */
    clone(extraContext = {}) {
        return new this.constructor(Object.assign({}, this.toJSON(), extraContext));
    }

    // override upon inheritance
    get schema() {
        if (this._schema) return this._schema;
    }

    set schema(schema) {
        this._schema = schema;
    }

    /**
     * @summary Validate entity contents against schema
     */
    validate() {
        if (this.schema) {
            this.schema.validate(this.toJSON());
        }
    }

    clean(config) {
        if (this.isSystemEntity) {
            return config;
        }
        return this.schema ? this.schema.clean(config) : config;
    }

    isValid() {
        const ctx = this.schema.newContext();
        ctx.validate(this.toJSON());

        if (!ctx.isValid()) {
            console.log(JSON.stringify(this.toJSON()));
            if (ctx.getErrorObject) {
                console.log(ctx.getErrorObject());
            }
            if (ctx.validationErrors) {
                console.log(ctx.validationErrors());
            }
        }

        return ctx.isValid();
    }

    get id() {return this.prop('_id', '')}

    set id(id) {this.setProp('_id', id)}

    static get cls() {return this.prototype.constructor.name}

    get cls() {return this.constructor.name}

    // TODO: figure out why the above getter for `cls` returns `null` and use only one
    getClsName() {return this.constructor.name}

    get slug() {return this.prop('slug')}

    get isSystemEntity() {
        return this.prop("systemName", false);
    }

    /**
     * @summary get small identifying payload of object
     * @param byIdOnly {boolean} if true, return only the id
     * @returns {Object} identifying data
     */
    getAsEntityReference(byIdOnly = false) {
        if (byIdOnly) {
            return { _id: this.id }
        }
        return {
            _id: this.id,
            slug: this.slug,
            cls: this.getClsName(),
        }
    }

    /**
     * @summary Pluck an entity from a collection by name.
     *          If no name is provided and no entity has prop isDefault, return the first entity
     * @param entities {Array} the entities
     * @param entity {string} the kind of entities
     * @param name {string} the name of the entity to choose
     * @returns {*}
     */
    getEntityByName(entities, entity, name) {
        let filtered;
        if (!name) {
            filtered = entities.filter(entity => entity.prop("isDefault") === true);
            if (!filtered.length) filtered = [entities[0]];
        } else {
            filtered = entities.filter(entity => entity.prop("name") === name);
        }
        if (filtered.length !== 1) {
            console.log(`found ${filtered.length} entity ${entity} with name ${name} expected 1`);
        }
        return filtered[0];
    }

}
