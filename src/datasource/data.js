const products = [
  {
    id: 1,
    name: "ASPIRINETAS X 14",
    lab: "Bayer",
    category: "Farmacia",
    status: "Activo",
    barCodes: ["7790375261634"]
  },
  {
    id: 2,
    name: "MIGRAL X 10",
    lab: "MONTPELLIER S.A",
    category: "Farmacia",
    status: "Activo",
    barCodes: ["5261634779037"]
  },
  {
    id: 3,
    name: "Esmalte",
    lab: "Bayer",
    category: "Perfumeria",
    status: "Activo",
    barCodes: ["3752617790634", "3752617790635"]
  },
  {
    id: 4,
    name: "JOHNSONS COTONETES X 100",
    lab: "DROGUERIA SUIZO ARGENTINA",
    category: "Perfumeria",
    status: "Inactivo",
    barCodes: ["7790526163734"]
  },
];

export const getProducts = () => new Promise((resolve, reject) => setTimeout(() => resolve(products), 500));

export const filterProducts = (name) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))), 1000)
});

export const saveProduct = (product) => new Promise((resolve, reject) => {
  const newProduct = { ...product, id: products.length + 1 }
  resolve(setTimeout(() => {
    products.push(newProduct)
    return newProduct;
  }, 300));
})

export const findProduct = (id) => new Promise((resolve, reject) => setTimeout(() => resolve(products.find(product => product.id === parseInt(id)))));