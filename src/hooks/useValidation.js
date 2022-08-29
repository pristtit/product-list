import validator from 'validator';

export const nameValidation = (attr) => {
    return !validator.isEmpty(String(attr)) && validator.isLength(String(attr), {min:3, max: 16})
}

export const costValidation = (attr) => {
    return !validator.isEmpty(String(attr)) && validator.isNumeric(String(attr))
}

export const srcImgValidation = (attr) => {
    return !validator.isEmpty(String(attr))
}
