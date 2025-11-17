if (window.location.href.includes("&list=") && window.location.href.endsWith("&start_radio=1")) {
    window.location.href = window.location.href.split('&')[0];
}
