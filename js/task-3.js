function getElementWidth(content, padding, border) {
    const value = content + padding * 2 + border * 2;
    console.log(value);
    return value;
 }   
getElementWidth(50, 8, 4);
getElementWidth(60, 12, 8.5);
getElementWidth(200, 0, 0);