function getProvider() {
    return 'pragprog.com/cloud';
}

/**
 * This function creates a URL using a few different sources of information. This could get 
 * very messy if the URL was longer. Instead we should use Template literals (see below. )
 *  
 * @param{string} image The name of the image
 * @param{double} width The width of the image, may be a double
 * @returns a url
 */
function generateLink(image, width) {
    const widthInt = parseInt(width, 10);
    return 'https://' + getProvider() + '/' + image + '?width=' + widthInt;
}

const image = 'foo';
const width = 200.5;
console.log('Not Using Template Literal: ' + generateLink(image,width));
/**
 * This function uses Template Literals to create the String. Much shorter/more elegant than above.
 * 
 * @param{string} image The name of the image
 * @param{double} width The width of the image, may be a double
 * @returns a url
*/
function generateLinkTemplateLiteral(image, width) {
    return `https://${getProvider()}/${image}?width=${parseInt(width, 10)}`;
}

const image2 = 'foo';
const width2 = 200.5;
console.log('Using Template Literal: ' + generateLinkTemplateLiteral(image2, width2));