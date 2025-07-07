const contenedorProducto = document.querySelector('.producto_contenedor')
console.log(contenedorProducto);

const datosProducto = []
const apiProducto = async () => {
  const data = await fetch("../db.json")
  const api = await data.json()

  for (let i = 0; i < api.producto.length; i++) {
    datosProducto.push(api.producto[i]);
  }
  inprimirProductos(datosProducto)
}
apiProducto()
const creaCard = (event) => {
  const { id, tag, nombre_producto, precio, img } = event
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.id = id
  const elementCard = `
      <img src="${img}" alt="img_${nombre_producto}">
      <p>${tag}</p>
      <h3>${nombre_producto}</h3>
      <h4>${precio}</h4>
    `
  cardDiv.innerHTML = elementCard
  return contenedorProducto.appendChild(cardDiv)
}

const inprimirProductos = (e) => {
  e.forEach(event => {
    creaCard(event)
  });
}
