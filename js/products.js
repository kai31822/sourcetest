let productslaptop = [
  {
    id: 1,
    type: "laptop",
    name: '2022 Newest HP ProBook 15.6" FHD IPS Notebook Business Laptop- Intel Core i7-1165G7 2.8GHz, 32GB RAM, 2TB PCIe SSD, Backlit Keyboard, Webcam, Windows 10Pro, 3in1 Accessories',
    price: "38,900",
    url: "https://m.media-amazon.com/images/I/61UmeWhX8IL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 2,
    type: "laptop",
    name: 'HP Pavilion Premium Laptop (2021 Model), 15.6" FHD Display, AMD Athlon N3050, AMD Radeon Graphics, 16GB RAM, 512GB SSD, Thin & Portable, Micro-Edge & Anti-Glare Screen, Long Battery Life, Win10',
    price: "15,000",
    url: "https://m.media-amazon.com/images/I/71Du0PqvF9L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    type: "laptop",
    name: 'ASUS Vivobook Laptop, 17.3" HD+ (1600x900) Non-Touch Display, Intel Core i5 Quad-Core Processor, 20GB DDR4 RAM, 1TB PCIe NVMe M.2 SSD, Webcam, HDMI, USB Type-C, Wi-Fi 5, Windows 11 Home, Silver',
    price: "17,400",
    url: "https://m.media-amazon.com/images/I/710hTvZsh3L._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 4,
    type: "laptop",
    name: 'SAMSUNG 13.3" Galaxy Chromebook Laptop Computer w/ 256GB Storage, 8GB RAM, 4K AMOLED Touchscreen Display, HD Intel Core I-5 Processor, Ultra Slim, US Warranty, Fiesta Red',
    price: "30,000",
    url: "https://m.media-amazon.com/images/I/81peks6yuTL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 5,
    type: "laptop",
    name: "ASUS TUF Gaming F15 (2022) Gaming Laptop, 15.6” 300Hz FHD Display, Intel Core i7-12700H, GeForce RTX 3060, 16GB DDR5, 1TB PCIe SSD, Thunderbolt 4, Wi-Fi 6, Windows 11 Home, Mecha Gray, FX507ZM-ES74",
    price: "42,920",
    url: "https://m.media-amazon.com/images/I/81Q-FwBZyYL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 6,
    type: "laptop",
    name: 'Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050Ti Laptop GPU | 17.3" FHD 144Hz IPS Display | 16GB DDR4 | 1TB NVMe SSD | Killer Wi-Fi 6 | Backlit KB | Win 11',
    price: "34,800",
    url: "https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UY327_QL65_.jpg",
  },
];

let itemsbox = document.querySelector(".newproducts-bot-item-right");
function displayproductslaptop(prod) {
  let displaylaptop = prod.map(function (item) {
    return `
    <div class="right-prod"  data-type="${item.type}">
        <div class="prod-img"><a href=""><img
                    src="${item.url}"
                    alt=""></a></div>
        <div class="prod-info">
            <div class="info-p">
                <a href="">${item.name}</a>
            </div>
            <div class="info-price">
                <b>$</b>
                <p>${item.price}</p>
            </div>
        </div>
    </div>
    `;
  });

  displaylaptop = displaylaptop.join("");
  itemsbox.innerHTML = displaylaptop;
}
window.addEventListener("DOMContentLoaded", function () {
  displayproductslaptop(productslaptop);
});

// let productssmartphones = [
//   {
//     id: 1,
//     type: "laptop",
//     name: '2022 Newest HP ProBook 15.6" FHD IPS Notebook Business Laptop- Intel Core i7-1165G7 2.8GHz, 32GB RAM, 2TB PCIe SSD, Backlit Keyboard, Webcam, Windows 10Pro, 3in1 Accessories',
//     price: "38,900",
//     url: "https://m.media-amazon.com/images/I/61UmeWhX8IL._AC_UY327_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 2,
//     type: "laptop",
//     name: 'HP Pavilion Premium Laptop (2021 Model), 15.6" FHD Display, AMD Athlon N3050, AMD Radeon Graphics, 16GB RAM, 512GB SSD, Thin & Portable, Micro-Edge & Anti-Glare Screen, Long Battery Life, Win10',
//     price: "15,000",
//     url: "https://m.media-amazon.com/images/I/71Du0PqvF9L._AC_UY327_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 3,
//     type: "laptop",
//     name: 'ASUS Vivobook Laptop, 17.3" HD+ (1600x900) Non-Touch Display, Intel Core i5 Quad-Core Processor, 20GB DDR4 RAM, 1TB PCIe NVMe M.2 SSD, Webcam, HDMI, USB Type-C, Wi-Fi 5, Windows 11 Home, Silver',
//     price: "17,400",
//     url: "https://m.media-amazon.com/images/I/710hTvZsh3L._AC_UY327_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 4,
//     type: "laptop",
//     name: 'SAMSUNG 13.3" Galaxy Chromebook Laptop Computer w/ 256GB Storage, 8GB RAM, 4K AMOLED Touchscreen Display, HD Intel Core I-5 Processor, Ultra Slim, US Warranty, Fiesta Red',
//     price: "30,000",
//     url: "https://m.media-amazon.com/images/I/81peks6yuTL._AC_UL480_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 5,
//     type: "laptop",
//     name: "ASUS TUF Gaming F15 (2022) Gaming Laptop, 15.6” 300Hz FHD Display, Intel Core i7-12700H, GeForce RTX 3060, 16GB DDR5, 1TB PCIe SSD, Thunderbolt 4, Wi-Fi 6, Windows 11 Home, Mecha Gray, FX507ZM-ES74",
//     price: "42,920",
//     url: "https://m.media-amazon.com/images/I/81Q-FwBZyYL._AC_UY327_FMwebp_QL65_.jpg",
//   },
//   {
//     id: 6,
//     type: "laptop",
//     name: 'Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050Ti Laptop GPU | 17.3" FHD 144Hz IPS Display | 16GB DDR4 | 1TB NVMe SSD | Killer Wi-Fi 6 | Backlit KB | Win 11',
//     price: "34,800",
//     url: "https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UY327_QL65_.jpg",
//   },
// ];
// let smartphones = document.querySelector("#smatrphones");
// function displayproductssmartphones(prod) {
//   let displaysmartphones = prod.map(function (item) {
//     return `
//     <div class="right-prod"  data-type="${item.type}">
//         <div class="prod-img"><a href=""><img
//                     src="${item.url}"
//                     alt=""></a></div>
//         <div class="prod-info">
//             <div class="info-p">
//                 <a href="">${item.name}</a>
//             </div>
//             <div class="info-price">
//                 <b>$</b>
//                 <p>${item.price}</p>
//             </div>
//         </div>
//     </div>
//     `;
//   });

//   displaysmartphones = displaysmartphones.join("");
//   smartphones.innerHTML = displaylaptop;
// }
// window.addEventListener("DOMContentLoaded", function () {
//   displayproductssmartphones(productssmartphones);
// });
