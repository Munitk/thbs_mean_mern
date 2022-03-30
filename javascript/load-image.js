function sendApiCall(url, resolve, reject) {
    // send api call to get image from XmlHttpRquestObject 
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    // When the request loads, check whether it was successful
    request.onload = function () {

        if (request.status === 200) {

            // If successful, resolve the promise by passing back the request response
            resolve(request.response);
        } else {

            // If it fails, reject the promise with a error message
            reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
    };

    request.onerror = function () {
        // Also deal with the case when the entire request fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
    };

    // Send the request
    request.send();
};
function loadImage(imageurl) {
    console.log(`sending Api call to image ${imageurl}`);
    let myImageLoadPromise = new Promise((resolve, reject) => {
        sendApiCall(imageurl, resolve, reject);
    });
    return myImageLoadPromise;
}
function addImageToBody(imageResponse) {
    let body = document.querySelector('body');
    let myImage = document.createElement('img');
    let myImgUrl = URL.createObjectURL(imageResponse);
    myImage.src = myImgUrl;
    myImage.width = 300
    myImage.height = 200
    body.append(myImage);
}
    loadImage(`https://mdn.github.io/js-examples/promises-test/myLittleVader.jpg`)
        .then(
            (sucessfull) => {
                addImageToBody(sucessfull);
            },
            (failied) => {

            });

