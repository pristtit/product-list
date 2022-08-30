import validator from 'validator';

export const nameValidation = (attr) => {
    return !validator.isEmpty(String(attr))
}

export const costValidation = (attr) => {
    return !validator.isEmpty(String(attr))
}

export const srcImgValidation = (attr) => {
    return !validator.isEmpty(String(attr))
}
