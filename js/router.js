let pageUrls = {
    azure: '/index.html?azure',
    flask:'/index.html?flask',
    bootstrap:'/index.html?bootstrap'
}
function OnStartUp(params) {
    popStateHandler();
}
OnStartUp();
document.querySelector('#azure-link').addEventListener('click', (event) => {
    let stateObj = {
        page: 'azure'
    }
    document.title = 'Azure';
    history.pushState(stateObj, "azure", "?azure");
    RenderAzurePage();
});
document.querySelector('#flask-link').addEventListener('click', (event) => {
    let stateObj = {page: 'flask'
}
document.title = 'Flask';
history.pushState(stateObj, "flask", "?flask");
RenderFlaskPage();
});

document.querySelector('#bootstrap-link').addEventListener('click', (event) => {
    let stateObj = {page: 'bootstrap'
}
document.title = 'Bootstrap';
history.pushState(stateObj, "bootstrap", "?bootstrap");
RenderBootstrapPage();
});
function RenderAzurePage(params) {document.querySelector('main').innerHTML =
`<h1 class="title">Azure</h1>
<div>
<img src="logoazure.png" class="w-50" alt="Microsoft Azure">
</div>
<p>Microsoft Azure (wcześniej: Azure Services Platform, Windows Azure) – 
platforma chmurowa firmy Microsoft stworzona w modelu PaaS (Platform as a Service). 
Udostępnia ona mechanizmy pozwalające przetwarzać dane (Windows Azure Compute), 
a także je składować (Windows Azure Storage, SQL Azure). 
Platforma Windows Azure występowała pod nazwą kodową „Red Dog”.W trakcie konferencji PDC 2008 w Los 
Angeles nastąpiła pierwsza prezentacja Platformy Windows Azure i jej udostępnienie w wersji CTP tylko dla uczestników tej konferencji. 
1 lutego 2010 nastąpiła publiczna premiera tej platformy i udostępnienie jej do użytku komercyjnego.
<a href="https://pl.wikipedia.org/wiki/Microsoft_Azure">Źródło Wikipedia.pl</a>  </p>`;
}
function RenderFlaskPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">Flask</h1>
    <div>
        <img src="Flasklogo.png" class="w-50" alt="Microsoft Azure">
    </div>
    <p>Flask – mikro framework aplikacji webowych napisany w języku Python.
    Jest sklasyfikowany jako micro-framework(ang.), 
    ponieważ nie wymaga określonych narzędzi ani bibliotek. 
    Nie ma warstwy abstrakcji bazy danych, sprawdzania poprawności formularzy ani żadnych innych komponentów, 
    w których istniejące biblioteki stron trzecich zapewniają wspólne funkcje. 
    Jednak obsługuje rozszerzenia, które mogą dodawać funkcje aplikacji tak, 
    jakby były zaimplementowane w samym Flasku. 
    Istnieją rozszerzenia maperów obiektowo-relacyjnych, sprawdzania poprawności formularzy, 
    obsługi przesyłania, różnych otwartych technologii uwierzytelniania i kilku popularnych narzędzi związanych ze strukturami. 
    Rozszerzenia są aktualizowane znacznie częściej niż sam Flask.
    Aplikacje korzystające ze środowiska Flask to Pinterest, 
    LinkedIn,  
    oraz strona internetowa społeczności dla samego Flask.
    <a href="https://pl.wikipedia.org/wiki/Flask_(framework)">Źródło Wikipedia.pl</a> </p>`;
}
function RenderBootstrapPage(params) {document.querySelector('main').innerHTML =
`<h1 class="title">Bootstrap</h1>
<div>
    <img src="Bootstrap_logopng.svg" class="w-50" alt="Microsoft Azure">
</div>
<p>Bootstrap - biblioteka CSS, 
rozwijana przez programistów Twittera, wydawany na licencji MIT. 
Zawiera zestaw przydatnych narzędzi ułatwiających tworzenie interfejsu graficznego stron oraz aplikacji internetowych. 
Bazuje głównie na gotowych rozwiązaniach HTML oraz CSS (kompilowanych z plików Less) i 
może być stosowany m.in. do stylizacji takich elementów jak teksty, formularze, przyciski, wykresy, nawigacje i 
innych komponentów wyświetlanych na stronie. Biblioteka korzysta także z języka JavaScript.
<a href="https://pl.wikipedia.org/wiki/Bootstrap_(framework)">Źródło Wikipedia.pl</a> </p>`;
}
function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.flask){
        RenderFlaskPage();
    }
    if(loc === pageUrls.azure){
        RenderAzurePage();
    }
    if(loc === pageUrls.bootstrap){
        RenderBootstrapPage();
    }
}
window.onpopstate =popStateHandler;