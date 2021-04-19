const http = require('http');
const fs = require('fs');

/* 
    * .get() takes two arguments
    *   - URL string
    *   - response callback function
*/

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
    if (res.statusCode !== 200) console.log(`Error ${res.statusCode}`);

    let body = '';
    
    res.on('data', chunk_of_data => {
        body += chunk_of_data;
    });

    res.on('end', () => {
        try {
            let json = JSON.parse(body);
            
            // * Move json data into file
            console.log(json);
            
        } catch (error) {
            console.error(error.message);
        }
    })
}).on('error', error => console.error(error.message));