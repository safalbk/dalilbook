import api from "../api/axios";

export const getAllNotes = async (
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
        const response = await api.get('/api/note', { params });
        return response.data;

    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};



export const createNote = async (data) => {
    try {
        const response = await api.post('/api/note', data);
        // console.log("Videos:", response.data);
        return response.data;

    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
};
export const getNoteById = async (id) => {
    try {
        const response = await api.get(`/api/note/${id}`);

        return response.data;

    } catch (error) {
        console.error('Error fetching note by id:', error);
        throw error;
    }
};

export const updateNote = async (id, data) => {
    try {
        const response = await api.put(`/api/note/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
};