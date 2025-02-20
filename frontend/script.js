async function fetchMedicines() {
    try {
        let response = await fetch("http://localhost:8000/medicines");
        let data = await response.json();
        let medicines = data.medicines; 

        displayMedicines(medicines); // Use separate function to display
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}



// Search functionality
document.getElementById("search").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase();
    let items = document.querySelectorAll("#medicine-list li");

    items.forEach(item => {
        let medName = item.getAttribute("data-name");
        item.style.display = medName.includes(searchQuery) ? "block" : "none";
    });
});

document.getElementById("medicine-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;

    let response = await fetch("http://localhost:8000/create", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, price })
    });

    if (response.ok) {
        fetchMedicines();
    }
});

fetchMedicines();