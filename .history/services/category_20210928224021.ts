import {
    clientGet
} from './URLApi';

export const getCategories = async (query = {}) => {
    const data = await clientGet('fee-assessment-categories', query);
}

