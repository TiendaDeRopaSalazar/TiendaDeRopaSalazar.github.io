const productos = {
  buzos: [
    { img: 'Prendas/buzos/IMG-20250415-WA0030.jpg', precio: '$15.000', talle: 'M/L/XL' },
    { img: 'Prendas/buzos/IMG-20250415-WA0031.jpg', precio: '$15.000', talle: 'M/L/XL' },
    { img: 'Prendas/buzos/IMG-20250415-WA0037.jpg', precio: '$15.000', talle: 'M/L/XL' },
  ],
  camperas: [
    { img: 'Prendas/camperas/IMG-20250415-WA0032.jpg', precio: '$40.000', talle: 'M/L/XL' },
    { img: 'Prendas/camperas/IMG-20250415-WA0033.jpg', precio: '$40.000', talle: 'M/L/XL' },
    { img: 'Prendas/camperas/IMG-20250415-WA0035.jpg', precio: '$40.000', talle: 'M/L/XL' },
  ],
  remeras: [
    { img: 'Prendas/remeras/IMG-20250415-WA0026.jpg', precio: '$7.000', talle: 'S/M/L/XL' },
    { img: 'Prendas/remeras/IMG-20250415-WA0027.jpg', precio: '$7.000', talle: 'S/M/L/XL' },
    { img: 'Prendas/remeras/IMG-20250415-WA0028.jpg', precio: '$7.000', talle: 'S/M/L/XL' },
    { img: 'Prendas/remeras/IMG-20250415-WA0029.jpg', precio: '$7.000', talle: 'S/M/L/XL' },
  ],
  pantalones: [
    { img: 'Prendas/pantalones/IMG-20250415-WA0021.jpg', precio: '$15.000', talle: '40' },
    { img: 'Prendas/pantalones/IMG-20250415-WA0022.jpg', precio: '$15.000', talle: '42' },
    { img: 'Prendas/pantalones/IMG-20250415-WA0023.jpg', precio: '$15.000', talle: '38' },
    { img: 'Prendas/pantalones/IMG-20250415-WA0024.jpg', precio: '$15.000', talle: '44' },
    { img: 'Prendas/pantalones/IMG-20250415-WA0025.jpg', precio: '$15.000', talle: '40' },
    { img: 'Prendas/pantalones/IMG-20250415-WA0034.jpg', precio: '$15.000', talle: '42' },
    { img: 'Prendas/pantalones/IMG-20250415-WA0036.jpg', precio: '$15.000', talle: '46' },
  ]
};

const indices = {
  buzos: 0,
  camperas: 0,
  remeras: 0,
  pantalones: 0
};

const carrito = [];

function mostrarProducto(categoria) {
  const producto = productos[categoria][indices[categoria]];
  document.getElementById(`img-${categoria}`).src = producto.img;
  document.getElementById(`info-${categoria}`).textContent = `Precio: ${producto.precio} - Talle: ${producto.talle}`;
}

function nextSlide(categoria) {
  indices[categoria] = (indices[categoria] + 1) % productos[categoria].length;
  mostrarProducto(categoria);
}

function prevSlide(categoria) {
  indices[categoria] = (indices[categoria] - 1 + productos[categoria].length) % productos[categoria].length;
  mostrarProducto(categoria);
}

function agregarAlCarrito(categoria) {
  const producto = productos[categoria][indices[categoria]];
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  carritoItems.innerHTML = "";
  let total = 0;

  carrito.forEach(producto => {
    const item = document.createElement("li");
    item.textContent = `Producto: ${producto.img.split('/').pop()} | ${producto.precio} | Talle: ${producto.talle}`;
    carritoItems.appendChild(item);
    
    // Convertir precio a número para sumar (remover $ y puntos)
    const precioNumerico = parseInt(producto.precio.replace('$', '').replace('.', '').replace('.', ''));
    total += precioNumerico;
  });

  document.getElementById("carrito-total").textContent = `Total: $${total.toLocaleString('es-AR')}`;
  document.getElementById("carrito-cantidad").textContent = carrito.length;
}

// Mostrar productos iniciales al cargar
window.onload = () => {
  Object.keys(productos).forEach(categoria => mostrarProducto(categoria));
};

// Comportamiento acordeón
document.querySelectorAll('.accordion').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const panel = document.querySelectorAll('.panel')[index];
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});
