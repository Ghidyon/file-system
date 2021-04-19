const http = require('http');
const fs = require('fs');

/* 
    * .get() takes two arguments
    *   - URL string
    *   - response callback function
*/

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {

    let jsonData = '';
    
    res.on('data', chunk_of_data => {
        jsonData += chunk_of_data;
    });

    res.on('end', () => {
        try {            
            // * Create result folder
            fs.mkdir('result', () => {
                // * Create json file and write json data into it
                fs.writeFile('./result/post.json', jsonData, err => {
                    if (err) throw err;
                    console.log('Added data successfully.')
                });
            });
        } catch (error) {
            console.error(error.message);
        }
    });
}).on('error', (err) => console.error(err.message));