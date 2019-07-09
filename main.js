const clickHeadings = document.querySelectorAll('.clickable-heading');

// document.addEventListener('DOMContentLoaded', () => {
//   clickHeadings[3].nextElementSibling.style.display = 'block';
//   clickHeadings[3].nextElementSibling.classList.add('open');
// });

clickHeadings.forEach(el => {
  el.addEventListener('click', toggleOpenClose);
});

function toggleOpenClose(e) {
  const collapsible = e.target.nextElementSibling;
  const styles = getComputedStyle(collapsible);
  const time = styles.getPropertyValue('--time').replace('ms', '');

  if (collapsible.classList.contains('open')) {
    setTimeout(() => {
      collapsible.style.display = 'none';
    }, time);
    collapsible.classList.remove('open');
  } else {
    collapsible.style.display = 'block';
    collapsible.classList.add('open');
  }

}