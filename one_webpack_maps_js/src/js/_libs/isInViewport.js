/**
 * Check if element in viewport
 * @param el
 * @param offset - Adjustable offset value when element becomes visible
 * @returns {boolean}
 */
export default (el, offset = 100) => {

    if ( !el ) return false;

    const scroll    = window.scrollY || window.pageYOffset;
    const boundsTop = el.getBoundingClientRect().top + offset + scroll;

    const viewport = {
        top   : scroll,
        bottom: scroll + window.innerHeight,
    };

    const bounds = {
        top   : boundsTop,
        bottom: boundsTop + el.clientHeight,
    };

    return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom )
        || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );

}