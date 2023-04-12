/*const { couldStartTrivia } = 
require("typescript");*/

const img = document.createElement('img');


const imgUrl = new URL ('../media/Unknown.jpeg',
 import.meta.url);

 console.log(imgUrl);
img.src = imgUrl.href;

document.body.append(img);

