"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayRelation = exports.relation = exports.baz = exports.bar = exports.foo = void 0;
exports.foo = {
    id: '',
    title: '',
    description: '',
    type: 'PART_TIME',
    location: 'BANGKOK',
    salary: 1000000,
};
exports.bar = {
    title: '',
    description: '',
    type: 'CONTRACTOR',
    location: 'BANGKOK',
    salary: 50000,
    company: {
        id: '',
    },
};
exports.baz = {};
exports.relation = {
    id: '',
    title: '',
    description: '',
    type: 'FULL_TIME',
    location: 'BANGKOK',
    salary: 18000,
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
    },
};
exports.arrayRelation = [
    {
        id: '',
        title: '',
        description: '',
        type: 'FULL_TIME',
        location: 'BANGKOK',
        salary: 18000,
        company: {
            name: '',
            description: '',
            contactEmail: '',
            contactPhone: '',
        },
    },
    {
        id: '',
        title: '',
        description: '',
        type: 'FULL_TIME',
        location: 'BANGKOK',
        salary: 18000,
        company: {
            name: '',
            description: '',
            contactEmail: '',
            contactPhone: '',
        },
    },
];
//# sourceMappingURL=interface-dto-job.js.map