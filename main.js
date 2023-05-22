const tabs = document.querySelectorAll('.tab');
const tabContainer = document.querySelector('.tabs');
const articles = document.querySelectorAll('article');

tabContainer.addEventListener('click', (e) => {
    for (let i = 0; i < tabs.length; i++) {
        if (e.target.innerHTML === tabs[i].innerHTML) {
            tabs[i].classList.add('active-btn');
           articles[i].classList.add('active-article');
        } else {
            tabs[i].classList.remove('active-btn');
            articles[i].classList.remove('active-article');
        }

    }
});












