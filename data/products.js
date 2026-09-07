const products = [
  // =========================
  // CPU
  // =========================
  {
    id: 1,
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    price: 34999,
    brand: "AMD",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
  },

  // =========================
  // GPU
  // =========================
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4070",
    category: "GPU",
    price: 58999,
    brand: "NVIDIA",
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",
  },

  // =========================
  // MOTHERBOARD
  // =========================
  {
    id: 3,
    name: "ASUS TUF Gaming B650",
    category: "Motherboard",
    price: 18999,
    brand: "ASUS",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
  },

  // =========================
  // RAM
  // =========================
  {
    id: 4,
    name: "Corsair Vengeance 32GB DDR5",
    category: "RAM",
    price: 9999,
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600",
  },

  // =========================
  // STORAGE
  // =========================
  {
    id: 5,
    name: "Samsung 990 EVO 1TB SSD",
    category: "Storage",
    price: 8499,
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600",
  },

  {
    id: 6,
    name: "WD Black SN850X 1TB SSD",
    category: "Storage",
    price: 8999,
    brand: "Western Digital",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600",
  },

  // =========================
  // PSU
  // =========================
  {
    id: 7,
    name: "Corsair RM750e 750W",
    category: "PSU",
    price: 9999,
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600",
  },

  // =========================
  // PC CASE
  // =========================
  {
    id: 8,
    name: "NZXT H5 Flow",
    category: "Case",
    price: 8999,
    brand: "NZXT",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
  },

  {
    id: 9,
    name: "Corsair 4000D Airflow",
    category: "Case",
    price: 8499,
    brand: "Corsair",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
  },

  // =========================
  // COOLER
  // =========================
  {
    id: 10,
    name: "DeepCool AK620",
    category: "Cooler",
    price: 5999,
    brand: "DeepCool",
    image:
      "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600",
  },

  {
    id: 11,
    name: "Cooler Master Hyper 212",
    category: "Cooler",
    price: 3999,
    brand: "Cooler Master",
    image:
      "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=600",
  },

  // =========================
  // FANS
  // =========================
  {
    id: 12,
    name: "Cooler Master 120mm RGB Fan",
    category: "Fans",
    price: 1499,
    brand: "Cooler Master",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
  },

  {
    id: 13,
    name: "DeepCool 120mm Case Fan",
    category: "Fans",
    price: 999,
    brand: "DeepCool",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
  },

  // =========================
  // MONITORS
  // =========================
  {
    id: 14,
    name: "LG UltraGear 27-inch Gaming Monitor",
    category: "Monitor",
    price: 24999,
    brand: "LG",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
  },

  {
    id: 15,
    name: "Samsung Odyssey G5 27-inch",
    category: "Monitor",
    price: 27999,
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600",
  },

  {
    id: 16,
    name: "Acer Nitro 24-inch Gaming Monitor",
    category: "Monitor",
    price: 14999,
    brand: "Acer",
    image:
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=600",
  },

  // =========================
  // ACCESSORIES
  // =========================
  {
    id: 17,
    name: "Mechanical RGB Gaming Keyboard",
    category: "Accessories",
    price: 3499,
    brand: "Redragon",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
  },

  {
    id: 18,
    name: "Wireless RGB Gaming Mouse",
    category: "Accessories",
    price: 1999,
    brand: "Logitech",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
  },

  {
    id: 19,
    name: "HyperX Gaming Headset",
    category: "Accessories",
    price: 5999,
    brand: "HyperX",
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=600",
  },

  {
    id: 20,
    name: "Full HD USB Webcam",
    category: "Accessories",
    price: 2999,
    brand: "Logitech",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
  },

  {
    id: 21,
    name: "RGB Gaming Speaker Set",
    category: "Accessories",
    price: 4499,
    brand: "Zebronics",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600",
  },
];

export default products;