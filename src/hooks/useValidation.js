import validator from 'validator';
import {ref, computed} from 'vue'

const _nameValidation = (attr) => {
    if (validator.isEmpty(String(attr))) return 'Поле является обязательным'
    else if (!validator.isLength(String(attr), {min:3, max: 16})) return 'Длина текста от 3 до 16 символов'

    return false
}

const _costValidation = (attr) => {
    if (validator.isEmpty(String(attr))) return 'Поле является обязательным'
    else if (!validator.isNumeric(String(attr))) return 'Допускаются только цифры'
    else if (!validator.isLength(String(attr), {min: undefined, max: 8})) return 'Не больше 1 млрд. руб.'

    return false
}

const _srcImgValidation = (attr) => {
    if (validator.isEmpty(String(attr))) return 'Поле является обязательным'
    else if (
        !validator.isURL(String(attr)) ||
        !['jpg', 'jpeg', 'png'].includes(String(attr).split('.').at(-1))
    ) return 'Ссылка не верна'

    return false
}

const _descriptionValidation = (attr) => {
    if (!validator.isLength(String(attr), {min:undefined, max: 80})) return 'Не больше 80 символов'

    return false
}

export default function useProductValid() {
    let typeNameValid = ref(true);
    let typeDescriptionValid = ref(true);
    let typeCostValid = ref(true);
    let typeSrcImgValid = ref(true);

    let showNameValid = ref(false);
    let showDescriptionValid = ref(false);
    let showCostValid = ref(false);
    let showSrcImgValid = ref(false);

    let isFormValid = computed(() => {
        return (
            !typeNameValid.value &&
            !typeDescriptionValid.value &&
            !typeSrcImgValid.value &&
            !typeCostValid.value
        )
    });

    const isNameValid = function(event) {
        this.typeNameValid = _nameValidation(this.product.name);

        if (this.typeNameValid) {
            event.target.focus();
            this.showNameValid = true;
        } else {
            this.showNameValid = false;
        }
    };
    
    const isDescriptionValid = function(event) {
        this.typeDescriptionValid = _descriptionValidation(this.product.description);

        if (this.typeDescriptionValid) {
            event.target.focus();
            this.showDescriptionValid = true;
        } else {
            this.showDescriptionValid = false;
        }
    };
    
    const isSrcImgValid = function(event) {
        this.typeSrcImgValid = _srcImgValidation(this.product.srcImg);

        if (this.typeSrcImgValid) {
            event.target.focus();
            this.showSrcImgValid = true;
        } else {
            this.showSrcImgValid = false;
        }
    };
    
    const isCostValid = function(event) {
        this.typeCostValid = _costValidation(this.product.cost);

        if (this.typeCostValid) {
            event.target.focus();
            this.showCostValid = true;
        } else {
            this.showCostValid = false;
        }
    };

    return {
        typeNameValid,
        typeDescriptionValid,
        typeCostValid,
        typeSrcImgValid,
        isFormValid,
        showNameValid,
        showDescriptionValid,
        showCostValid,
        showSrcImgValid,
        isNameValid,
        isDescriptionValid,
        isSrcImgValid,
        isCostValid,
    }
}
