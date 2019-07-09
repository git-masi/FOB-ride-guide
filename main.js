if (window.innerWidth >= 600) {
  const clickHeadings = document.querySelectorAll('.clickable-heading');
  clickHeadings.forEach(el => {
    el.addEventListener('click', toggleOpenClose);
  });

  function toggleOpenClose(e) {
    const parent = e.target.parentElement;
    const content = e.target.nextElementSibling;

    if (parent.style.maxHeight == '') {
      parent.style.maxHeight = content.scrollHeight + 'px';
    } else {
      parent.style.maxHeight = '';
    }
  }
}

// doesn't trigger resize when using windows hot keys
window.addEventListener('resize', () => {
  if (window.innerWidth >= 600) {
    const clickHeadings = document.querySelectorAll('.clickable-heading');
    clickHeadings.forEach(el => {
      el.addEventListener('click', toggleOpenClose);
    });
  
    function toggleOpenClose(e) {
      const parent = e.target.parentElement;
      const content = e.target.nextElementSibling;
  
      if (parent.style.maxHeight == '') {
        parent.style.maxHeight = content.scrollHeight + 'px';
      } else {
        parent.style.maxHeight = '';
      }
    }
  }
});