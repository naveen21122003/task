const products = [
    { name: "DELL", price: 29000, category: "Laptops", image: "laptop1.jpg" },
    { name: "ASUS", price: 40000, category: "Laptops", image: "laptop2.jpg" },
    { name: "POCO M2 Pro", price: 10000, category: "Mobiles", image: "mobile1.jpg" },
    { name: "VIVO Y100", price: 25000, category: "Mobiles", image: "mobile2.jpg" },
    { name: "SAMSUNG S24 Ultra", price: 70000, category: "Mobiles", image: "mobile3.jpg" },
    { name: "AIRPODS i2", price: 250, category: "Headsets", image: "headset1.jpg" },
    { name: "HEADSET Pro", price: 900, category: "Headsets", image: "headset2.jpg" },
    { name: "APPLE AIRPODS Pro", price: 1500, category: "Headsets", image: "headset3.jpg" },
    { name: "HP", price: 45000, category: "Laptops", image: "laptop3.jpg" },
    { name: "ACER", price: 65000, category: "Laptops", image: "laptop4.jpg" },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const filterBtn = document.getElementById("filterBtn");

function populatePriceOptions(category) {
    const priceOptions = {
        Laptops: [
            { label: "Below ₹30,000", min: 0, max: 30000 },
            { label: "₹30,000 - ₹50,000", min: 30000, max: 50000 },
            { label: "Above ₹50,000", min: 50000, max: Infinity },
        ],
        Mobiles: [
            { label: "Below ₹15,000", min: 0, max: 15000 },
            { label: "₹15,000 - ₹30,000", min: 15000, max: 30000 },
            { label: "Above ₹30,000", min: 30000, max: Infinity },
        ],
        Headsets: [
            { label: "Below ₹300", min: 0, max: 300 },
            { label: "₹300 - ₹1,000", min: 300, max: 1000 },
            { label: "Above ₹1,000", min: 1000, max: Infinity },
        ],
    };

    priceFilter.innerHTML = `<option value="">All Prices</option>`;
    if (priceOptions[category]) {
        priceOptions[category].forEach(option => {
            const opt = document.createElement("option");
            opt.value = `${option.min}-${option.max}`;
            opt.textContent = option.label;
            priceFilter.appendChild(opt);
        });
    }
}

function displayProducts(filteredProducts) {
    productGrid.innerHTML = "";
    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Category: ${product.category}</p>
        `;
        productGrid.appendChild(productCard);
    });
}

categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;
    populatePriceOptions(selectedCategory);
});

filterBtn.addEventListener("click", () => {
    const selectedCategory = categoryFilter.value;
    const priceRange = priceFilter.value.split("-").map(Number);
    const minPrice = priceRange[0] || 0;
    const maxPrice = priceRange[1] || Infinity;

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    displayProducts(filteredProducts);
});

// Initial display
displayProducts(products);
