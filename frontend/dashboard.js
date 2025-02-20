async function fetchDashboardStats() {
    try {
        let response = await fetch("http://localhost:8000/medicines");
        let data = await response.json();
        let medicines = data.medicines || [];

        // Calculate total medicines and average price
        document.getElementById("medicine-count").textContent = medicines.length;

        let totalPrice = medicines.reduce((sum, med) => sum + (med.price || 0), 0);
        let avgPrice = medicines.length ? (totalPrice / medicines.length).toFixed(2) : 0;

        document.getElementById("average-price-value").textContent = `$${avgPrice}`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDashboardStats();
