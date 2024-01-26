export default function colorIndicator(index) {
    const indicators = document.querySelectorAll('.indicator');

    indicators.forEach((indicator) => indicator.classList.remove('colored'));

    indicators[index].classList.toggle('colored');
}
