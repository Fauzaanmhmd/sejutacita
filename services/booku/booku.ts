import {
    clientGet
} from './URLApi';

export const getBookus = async (query = {}) => {
    const buku = await clientGet('fee-assessment-books', query);
    return buku
}