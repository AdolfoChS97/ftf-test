const Joi = require('joi')
const { ISO_8601_REGEX } = require('../../../common/constants')

const schema = Joi.object({
    owner: Joi.string().required().messages({
        'string.empty': 'Owner is required',
        'any.required': 'Owner is required',
    }),
    repo: Joi.string().required().messages({
        'string.empty': 'Repo is required',
        'any.required': 'Repo is required',
    }),
    author: Joi.string().optional().messages({
        'string.empty': 'Author must be a string',
    }),
    since: Joi.string().regex(ISO_8601_REGEX).optional().messages({
    }),
    until: Joi.string().regex(ISO_8601_REGEX).optional().messages({
    }),
    page: Joi.number().integer().optional().messages({
        'number.base': 'Page must be a number',
    }),
    perPage: Joi.number().integer().optional().messages({
        'number.base': 'Per page must be a number',
    })
})

module.exports = schema