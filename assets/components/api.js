import axios from 'axios';

const API_URL = `${window.location.origin}/api/books`;

export const fetchBooks = async ({ seed, lang, likes, reviews, count }) => {
    const response = await axios.get(API_URL, {
        params: { seed, lang, likes, reviews, count }
    });
    return response.data;
};

