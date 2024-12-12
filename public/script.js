const btns = document.querySelectorAll('.tab');
const active = document.querySelector('.active');

for (let i = 0; i < btns.length; i++) {
  btns[i].onClick = () => {
    const move = (100 / btns.length) * 1;
    active.style.left = move + '%';
  };
}
