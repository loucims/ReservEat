export default function handleErrors(response) {
    // if (!response.ok) {
    //     response.text().then(text => {
    //        console.log(text)  
    //     })
    //     throw Error(response.statusText);
    // }
    // return response;

    if (!response.ok) {
        return Promise.reject(response);
        response.json().then(json => {
        const error = Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText,
        });

        return Promise.reject(error);
        });
    }
    return response;
}