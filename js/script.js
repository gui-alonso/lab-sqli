const TOTAL = 18;
  function toggle(el) {
    el.classList.toggle('done');
    const name = el.querySelector('.lab-name');
    if (el.classList.contains('done')) name.classList.add('lab-done-name');
    else name.classList.remove('lab-done-name');
    updateProgress();
  }
  function updateProgress() {
    const done = document.querySelectorAll('.lab.done').length;
    const pct = (done / TOTAL) * 100;
    document.getElementById('pfill').style.width = pct + '%';
    document.getElementById('pcount').textContent = done + ' / ' + TOTAL;
  }