const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const stoneImage = [
  "https://cdn.jostens.com/dA/c8d63e23-91b1-4cbb-93b8-1786a517d8c2/4f4df1e9-7415-4b32-891b-a5cc7d5d0c1f.png",
  "https://images.jdmagicbox.com/quickquotes/images_main/natural-amethyst-crystal-gemstone-386130535-bz6d7.png",
  "https://www.gemhype.com/cdn/shop/products/A99045_Edelsteingrosshandel_Idar_Oberstein.png?v=1676559305",
  "https://atjewels.in/cdn/shop/products/Diamond-PNG.png?v=1567696099",
  "https://kwiat.com/wp-content/uploads/KW-R-30101-350-DIA-EMER-1-FS-1280x850px-1.png",
  "https://rauantiques.com/cdn/shop/products/31-5280_1_89ff92e8-5c7e-43f8-99a2-128e3303e6cd.png?v=1697185368",
  "https://heritagegemsandjewels.com/cdn/shop/products/FrontRuby2.53cts_1200x1200.png?v=1635825505",
  "https://www.veerasakgems.com/wp-content/uploads/2023/08/1200.webp",
  "https://omigems.com/wp-content/uploads/2020/08/SA2215-2-edited.png",
  "https://australianopalcutters.com/cdn/shop/collections/icon_loose.png?v=1608527866",
  "https://static.vecteezy.com/system/resources/previews/026/772/609/original/topaz-with-ai-generated-free-png.png",
  "https://static.vecteezy.com/system/resources/previews/028/283/663/original/tanzanite-rare-precious-natural-geological-stone-on-a-transparent-background-ai-generated-png.png"
];

const date = new Date();
const month = date.getMonth();

document.getElementById("stone-month").innerHTML = monthNames[month];
document.getElementById("sImage").src = stoneImage[month];


for (let i = 0; i < monthNames.length; i++) {
  let div = document.createElement('div');
  div.className = "flex flex-col gap- justify-center items-center cursor-pointer flex-1"; 

  let img = document.createElement('img');
  img.src = stoneImage[i];
  img.alt = `${monthNames[i]} Stone`; 
  img.className = "h-24 w-24";
  
  
  let label = document.createElement('label');
  label.textContent = monthNames[i];
  label.className = "text-center";
  
  div.appendChild(img);
  div.appendChild(label);

  document.getElementById("stone-img").appendChild(div);
}
