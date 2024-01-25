export default function colorImageIndicator(index) {
    const indicators = document.querySelectorAll('.indicator');

    indicators.forEach((indicator) => {
        if (indicator.classList.contains('colored')) {
            indicator.classList.toggle('colored');
        }
    });

    indicators[index].classList.toggle('colored');

}