import {
    clientGet
} from './URLApi';

export const getCategories = async (query = {}) => {
    return await clientGet('fee-assessment-categories', query);
}

