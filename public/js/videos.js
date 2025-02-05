document.addEventListener("DOMContentLoaded", function () {
    // Arrays de videos
    const historiaGamingVideos = [
        "scOmWO5bBHs",  // ¿Cómo Playstation DESTRUYÓ Japan Studio
        "do6qdr3qEmg",  // El día que murió Satoru Iwata
        "HTiePOvlRmw",  // Cómo Nintendo salvó la industria de los videojuegos
        "QrZ0lsmH0UA",  // Crisis del 83
        "ujbM99g9Ae8",  // Cómo Gamecube Arruinó Nintendo
        "KZ1RhLgwnYk",  // El día que Nintendo creó sus rivales
        "1irNBVll_-I",  // El destino de Super Mario RPG
        "kY0i220FGQw",  // Por qué PS Vita fue un FRACASO
        "fDIkbz1rbNo",  // Pelea entre Nintendo y Square
        "by91MhBARKY",  // Playstation All Stars
        "e9zpSb72stA",  // Monolith Soft Historia
        "VIwWUf-n6hU",  // Por qué MS. Pacman desapareció
        "ddAY04F2ALY",  // Masahiro Sakurai
        "gzPrWZ9ZHmQ",  // Satoru Iwata
        "d5z8zTa08qM",  // Scott Cawthon

    ];

    const comoSeHizoVideos = [
        "VtosJRYzMR0",  // DKC
        "_MAHpje3zeg",  // Luigi's Mansion
        "axLaf9OPPyk",  // Mario Wonder
        "5g-ea8ODH1A",  // TOTK
        "h5pSw1LNW6I",  // PVZ
        "tKzydzUEnk4",  // Undertale
        "i-yd8QrqX8c",  // Cuphead
        "YfG1AHsCDIM",  // DKC Returns
    ];

    // Función para crear un carousel dinámico
    function createCarousel(videos, carouselInnerSelector) {
        const carouselInner = document.querySelector(carouselInnerSelector);
        carouselInner.innerHTML = "";  // Limpiar contenido anterior

        // Agrupar videos en slides de tres
        for (let i = 0; i < videos.length; i += 3) {
            const item = document.createElement("div");
            item.className = "carousel-item";
            if (i === 0) item.classList.add("active");  // Hacer el primer grupo activo

            const row = document.createElement("div");
            row.className = "row";

            videos.slice(i, i + 3).forEach((videoId) => {
                const col = document.createElement("div");
                col.className = "col-md-4";
                col.innerHTML = `
                    <iframe width="100%" src="https://www.youtube.com/embed/${videoId}" title="Video" frameborder="0" allowfullscreen></iframe>
                `;
                row.appendChild(col);
            });

            item.appendChild(row);
            carouselInner.appendChild(item);
        }
    }

    // Crear ambos carouseles
    createCarousel(historiaGamingVideos, "#gamingCarousel .carousel-inner");
    createCarousel(comoSeHizoVideos, "#hizoCarousel .carousel-inner");
});