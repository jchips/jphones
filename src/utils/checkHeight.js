/**
   * Compares the scrollHeight (total height of element with scroll content added)
   * and clientHeight (height without counting scroll content). If the scrollHeight
   * is present, that means there's a scrollbar. If there's a scrollbar, set the visibility
   * of the expand button to 'visible' so users can expand the content.
   * @param {Element} ref - A reference to a pros or cons bubble on the page.
   * @param {Element} expandBtnRef - A reference to a expand button on the page.
   */
const checkHeight = (ref, expandBtnRef) => {
  if (ref && expandBtnRef) {
    if (ref.scrollHeight > ref.clientHeight) {
      expandBtnRef.style.visibility = 'visible';
    }
  }
}

export default checkHeight;
