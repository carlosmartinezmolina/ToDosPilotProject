import API_BASE_URL from "../../config";

export const getData = async (url) => {
    var result;
    await fetch(`${API_BASE_URL}${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            result = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        return result;
};
export const postData = async (url,data={}) => {
    var result;
    await fetch(`${API_BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => {
            return response.json();
        })
        .then(data => result = data)
        .catch(error => console.error('Error:', error));
        return result;
};

export const deleteData = async (url,id) => {
    var result;
    console.log(id);
    await fetch(`${API_BASE_URL}${url}?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then(response => {
            return response.json();
        })
        .then(data => result = data)
        .catch(error => console.error('Error:', error));
        return result;
};