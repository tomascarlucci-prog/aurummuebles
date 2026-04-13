// 1. Lógica del Slider Hero
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}
setInterval(nextSlide, 5000);

// 2. Base de Datos de Productos
const productos = [
    { nombre: "Philadelphia 2.20", precio: 1048222.11, img: "philadelphiahtml.jpg" },
    { nombre: "Rinc. Francia 180x180 + Butacón", precio: 1784362.81, img: "rinc.francia.jpg" },
    { nombre: "Sofá Bolton 2.20", precio: 829000, img: "sofabolton.jpg" },
    { nombre: "Sofá Castor 1.90", precio: 959137.02, img: "sofacastorhtml.jpg" },
    { nombre: "Rinc. Coralito 3.20 (1.70x1.70)", precio: 1590325.38, img: "sofacoralito.jpg" },
    { nombre: "Sofá Italiano", precio: 680000.00, img: "sofaitaliano.jpg" },
    { nombre: "Sofá Viena", precio: 1390561.48, img: "sofaviena.jpg" },
    { nombre: "Sofía Berlín 2.20", precio: 1110194.29, img: "sofiaberlinhtml.jpg" },
    { nombre: "Sofá Emma 2.10", precio: "Consultar", img: "sofiaemma.jpg" },
    { nombre: "Sofá Luna 2.20", precio: "Consultar", img: "sofialuna.jpg" },
    { nombre: "Poltrona Imperio", precio: 482161, img: "poltronaimperio.jpg" },
    { nombre: "Sofá Livorno 2.90 x 1.90 x 0.90", precio: 1047781.24, img: "sofalivorno.jpg" },
    { nombre: "Poltrona Cortes", precio: 566879, img: "poltronacortes.jpg" },
    { nombre: "Sofá Siena", precio: 1000965.11, img: "sofasiena.jpg" },
    { nombre: "Rinc. Victor", precio: 1792843.95, img: "rincvictor.jpg" },
    { nombre: "Rinc. Castor", precio: 534978.78, img: "rinccastor.jpg" },
    { nombre: "Rinc. Coral", precio: 2081185.01, img: "rinccoral.jpg" },
    { nombre: "Poltrona Castor", precio: 534978.78, img: "poltronacastor.jpg" },
    { nombre: "Rinc. Center", precio: 2654691.23, img: "rinccenter.jpg" },
    { nombre: "Sofá Victor", precio: 1089767.57, img: "sofavictor.jpg" }
];

const grid = document.getElementById('grid-productos');
const buscador = document.getElementById('buscador');

// Función para renderizar
function cargarProductos(lista) {
    if (!grid) return;
    grid.innerHTML = '';
    lista.forEach(p => {
        // CORRECCIÓN: Si el precio es "Consultar", no intentamos formatearlo como moneda
        const precioMostrar = (typeof p.precio === 'string') 
            ? p.precio 
            : new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(p.precio);

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}">
            <h3>${p.nombre}</h3>
            <p class="price">${precioMostrar}</p>
            <a href="https://wa.me/5491131456636?text=Hola!%20Quisiera%20info%20del%20producto:%20${p.nombre}" target="_blank" class="btn-wa-card">
                <i class="fab fa-whatsapp"></i> Consultar
            </a>
        `;
        grid.appendChild(card);
    });
}

// Inicializar
cargarProductos(productos);

// Buscador en vivo
if (buscador) {
    buscador.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(term));
        cargarProductos(filtrados);
    });
}