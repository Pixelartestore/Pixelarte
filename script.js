const productos = [
  {
    nombre: 'GRAMERA SF400',
    precio: '$30.000',
    descripcion: 'Ideal para cocina y porciones exactas.',
    descripcionCompleta: 'Mide tus ingredientes con precisión. Funciona con 2 pilas AA. Soporta hasta 10kg.',
    imagen: './imagenes/gramera.jpg'
  },
  {
    nombre: 'ZAPATERO PERCHERO ESQUINERO',
    precio: '$15.000',
    descripcion: 'Maximiza el espacio en cualquier esquina.',
    descripcionCompleta: 'Diseñado para adaptarse a cualquier esquina y brindar almacenamiento adicional para ropa, zapatos, bolsos y otros artículos de uso diario.',
    imagen: './imagenes/zapateroperchero.jpg'
  },
  {
    nombre: 'AFILADOR DE CUCHILLOS',
    precio: '$10.000',
    descripcion: 'Obtén filos perfectos para tu cocina.',
    descripcionCompleta: 'Afila tus cuchillos de forma segura y eficiente.Hoja de acero inoxidable. Mango de plástico. Es apto para lavavajillas.',
    imagen: './imagenes/afilador.jpg'
  }
];

function mostrar(seccion) {
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById(seccion).style.display = 'flex';
  document.querySelectorAll('.volver').forEach(b => b.style.display = 'block');
}

function volverInicio() {
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById('inicio').style.display = 'flex';
  document.querySelectorAll('.volver').forEach(b => b.style.display = 'none');
}

function renderProductos(lista = productos) {
  const contenedor = document.getElementById('lista-productos');
  contenedor.innerHTML = '';
  lista.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" />
      <h3>${p.nombre}</h3>
      <p>${p.precio}</p>
      <p class="breve-descripcion">${p.descripcion}</p>
      <button class="boton" onclick="verDetalles(${i})">Detalles</button>
      <button class="boton" onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}

function mostrarCarrito() {
  document.getElementById('carrito-modal').style.display = 'flex';
}

function cerrarCarrito() {
  document.getElementById('carrito-modal').style.display = 'none';
}

function verDetalles(index) {
  const p = productos[index];
  const modal = document.getElementById('modal');
  const contenido = document.getElementById('modal-content');
  contenido.innerHTML = `
    <h2 class="titulo-detalle">${p.nombre}</h2>
    <img src="${p.imagen}" alt="${p.nombre}" style="width:100%; border-radius:8px;" />
    <p class="detalle-descripcion">${p.descripcionCompleta}</p>
    <h3 style="margin-top:0.5rem;">Precio: ${p.precio}</h3>
    <button class="boton" onclick="cerrarModal()">Cerrar</button>
  `;
  modal.style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

function buscarProducto(valor) {
  const filtrado = productos.filter(p =>
    p.nombre.toLowerCase().includes(valor.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(valor.toLowerCase())
  );
  renderProductos(filtrado);
}

// Inicializar productos al cargar
renderProductos();
