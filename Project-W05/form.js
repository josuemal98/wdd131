const products = [
  {
    id: "fc-1888",
    name: "Clearcoat DC2021",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Clearcoat SC300",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Euro Filler Automotive Filler",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "High Build Primer Surfacer",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "High solids Clearcoat",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", function() {
    
    const selectElement = document.getElementById("product-name");

    products.forEach(function(product) {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });


    const modificationElement = document.getElementById("lastModified");
    if (modificationElement) {
        modificationElement.textContent = document.lastModified;
    }
});