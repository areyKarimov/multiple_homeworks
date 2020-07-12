export default (link, elem) => {
    let elemHeight = elem.offsetHeight;
    let toTop = elem.getBoundingClientRect().top;
    console.log(toTop + elemHeight)
    if (
        toTop <= 0 &&
        toTop + elemHeight >= 100
    ) {
        return true;
    } else {
        return false;
    }
}