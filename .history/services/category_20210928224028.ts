import {
    clientGet
} from './URLApi';

export const getCategories = async (query = {}) => {
    const data = await clientGet('fee-assessment-categories', query);
    console.log("🚀 ~ file: category.ts ~ line 7 ~ getCategories ~ data", data)
}

