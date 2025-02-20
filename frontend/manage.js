async function fetchMedicines() {
    try {
        let response = await fetch("http://localhost:8000/medicines");
        let data = await response.json();
        let medicines = data.medicines || [];
        displayMedicines(medicines);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayMedicines(medicines) {
    let medicineGrid = document.getElementById("medicine-grid");
    medicineGrid.innerHTML = ""; // Clear previous content

    medicines.forEach((med, index) => {
        let name = med.name ? med.name : "Unknown Medicine";
        let price = med.price ? `$${med.price}` : "Price not available";

        let card = document.createElement("div");
        card.classList.add("card", "medicine-card");
        card.setAttribute("data-name", name.toLowerCase()); // For search filtering
        card.innerHTML = `
            <h2>${name}</h2>
            <p class="number">${price}</p>
            <p>Price</p>
        `;

        medicineGrid.appendChild(card);
    });

    // Ensure the footer stays at the bottom
    adjustFooter();
}




// Search functionality - FIXED
document.getElementById("search").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase();
    let items = document.querySelectorAll("#medicine-grid .medicine-card");

    items.forEach(item => {
        let medName = item.querySelector("h2").innerText.toLowerCase();
        item.style.display = medName.includes(searchQuery) ? "block" : "none";
    });
});

// Handle form submission
document.getElementById("medicine-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let price = document.getElementById("price").value.trim();

    if (!name || !price) {
        alert("Please enter both medicine name and price.");
        return;
    }

    let priceValue = parseFloat(price); // Convert price to float
    if (isNaN(priceValue)) {
        alert("Please enter a valid number for price.");
        return;
    }

    let response = await fetch("http://localhost:8000/create", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, price: priceValue }) // Send price as a float
    });

    if (response.ok) {
        fetchMedicines();
        document.getElementById("medicine-form").reset();
    } else {
        alert("Error adding medicine.");
    }
});

// Adjust footer position
function adjustFooter() {
    let bodyHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    let footer = document.querySelector(".footer");

    if (bodyHeight < windowHeight) {
        footer.style.position = "absolute";
    } else {
        footer.style.position = "relative";
    }
}

fetchMedicines();
