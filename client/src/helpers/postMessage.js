import axios from 'axios';

export const postMessage = (payload) => {
    return axios
        .post('https://porfolio-victor-pinto.onrender.com/message', payload)
        .then((res) => {
            if (res.status === 200) {console.log('Message sent!')
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Error sending message');
        }
    );
};
        