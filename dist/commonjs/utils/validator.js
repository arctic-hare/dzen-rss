"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkItemParameters = exports.checkXmlOptions = void 0;
const xmlOptions = {
    title: {
        required: true,
        type: 'string',
    },
    link: {
        required: true,
        type: 'string',
    },
    language: {
        required: true,
        type: 'string',
    },
};
const itemParameters = {
    title: {
        required: true,
        type: 'string',
    },
    category: {
        required: true,
        validator: (category) => {
            if (!Array.isArray(category)) {
                return false;
            }
            return category.every((value) => [
                'native-draft',
                'format-article', 'format-post',
                'index', 'noindex',
                'comment-all', 'comment-subscribers', 'comment-none',
            ].includes(value));
        },
        errorMessage: '"category" must contain only valid values: native-draft, ' +
            'format-article, format-post, index, noindex, comment-all, ' +
            'comment-subscribers, comment-none.'
    },
    guid: {
        required: true,
        validator: (value) => typeof value === 'string' || typeof value === 'number',
        errorMessage: '"guid" must be a number or a string',
    },
    pubDate: {
        required: true,
        type: 'string',
    },
    enclosure: {
        required: false,
        validator: (value) => {
            if (!Array.isArray(value)) {
                return false;
            }
            return value.every((item) => (typeof item === 'object' && item !== null && 'url' in item && typeof item.url === 'string'));
        },
        errorMessage: '"enclosure" must contain only valid values - objects with the url parameter',
    },
    content_encoded: {
        required: true,
        type: 'string',
    },
    link: {
        required: true,
        type: 'string',
    },
    pdalink: {
        required: false,
        type: 'string',
    },
    description: {
        required: false,
        type: 'string',
    },
};
const checkData = (data, dataTemplate) => {
    if (typeof data !== 'object' || Array.isArray(data)) {
        throw new TypeError('Data should be an object.');
    }
    for (const parameter in dataTemplate) {
        if (dataTemplate[parameter].required && !Object.prototype.hasOwnProperty.call(data, parameter)) {
            throw new Error(`${parameter} is required.`);
        }
    }
    for (const parameter in data) {
        if (dataTemplate[parameter].validator && !dataTemplate[parameter].validator(data[parameter])) {
            throw new TypeError(dataTemplate[parameter].errorMessage);
        }
        else if (dataTemplate[parameter].type && typeof data[parameter] !== dataTemplate[parameter].type) {
            throw new TypeError(`${parameter} must be of type ${dataTemplate[parameter].type}.`);
        }
    }
    return true;
};
const checkXmlOptions = (data) => checkData(data, xmlOptions);
exports.checkXmlOptions = checkXmlOptions;
const checkItemParameters = (data) => data.every((item) => checkData(item, itemParameters));
exports.checkItemParameters = checkItemParameters;
//# sourceMappingURL=validator.js.map