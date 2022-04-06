const API_KEY = '6198fc9a27db5eb6886fac2d238808fd';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
    - originais da netflix
    - recomendados (trending)
    - em alta (top rated)
    - ação
    - comédia
    - terror
    - romance
    - documentários
*/


const basicaFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {

    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicaFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicaFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicaFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicaFetch(`/discover/movie?with_genres=28&language=pt-Br&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicaFetch(`/discover/movie?with_genres=35&language=pt-Br&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicaFetch(`/discover/movie?with_genres=27&language=pt-Br&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicaFetch(`/discover/movie?with_genres=10749&language=pt-Br&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicaFetch(`/discover/movie?with_genres=99&language=pt-Br&api_key=${API_KEY}`)
            }
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicaFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicaFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
            }
        }

        return info;
    }
}