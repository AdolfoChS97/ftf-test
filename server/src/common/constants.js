const BAD_REQUEST = 400
const NOT_FOUND = 404
const INTERNAL_SERVER_ERROR = 500
const SUCCESS = 200
const UNAUTHORIZED = 401
const OK = 'OK'
const ISO_8601_REGEX = new RegExp('^\\d{4}-\\d{2}-\\d{2}$')

module.exports = {
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    SUCCESS,
    NOT_FOUND,
    UNAUTHORIZED,
    OK,
    ISO_8601_REGEX
}