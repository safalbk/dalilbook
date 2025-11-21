import api from "../api/axios";


export const getallImages = async (
    pageNo = 1,
    pageSize = 10,
    sortBy = 'title',
    sortDir = 'asc',
    search = ""
) => {
    
    let params = {
        pageNo,
        pageSize,
        sortBy,
        sortDir
    };

    // Add search only when not empty
    if (search !== "") {
        params.search = search;
    }

    try {
        const response = await api.get('/api/image', { params });
        return response.data;

    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};
export const createImage  = async (data) => {
    try {

       
        const response = await api.post('/api/image/create', data);
        console.log("Images:", response.data);

        return response.data;

    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};