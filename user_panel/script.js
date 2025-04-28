document.addEventListener("DOMContentLoaded", () => {
    // --- CARRUSEL ---
    const images = document.querySelectorAll(".carousel-item");
    let index = 0;

    function showNextImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(showNextImage, 3000);

    // --- TABLA DE CITAS ---
    const appointments = [
        { date: "2025-04-01", time: "10:00 AM", patient: "Luna", service: "Vacunación", status: "Confirmada" },
        { date: "2025-04-02", time: "3:00 PM", patient: "Max", service: "Baño y Peluquería", status: "Pendiente" },
        { date: "2025-04-03", time: "12:00 PM", patient: "Bella", service: "Consulta General", status: "Atendida" }
    ];

    const tableBody = document.getElementById("appointmentsTable");

    if (tableBody) {
        appointments.forEach(appointment => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td>${appointment.patient}</td>
                <td>${appointment.service}</td>
                <td>${appointment.status}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // --- PRODUCTOS ---
    const productos = [
        { nombre: "Alimento para perros", imagen: "alimento-perros.avif", precio: 50000, descripcion: "Nutrición completa para tu perro." },
        { nombre: "Alimento para gatos", imagen: "alimento-gatos.avif", precio: 45000, descripcion: "Alimento premium para gatos." },
        { nombre: "Juguete para perros", imagen: "juguete-perros.png", precio: 25000, descripcion: "Hueso resistente para morder." },
        { nombre: "Rascador para gatos", imagen: "rascador-gatos.webp", precio: 60000, descripcion: "Ideal para el entretenimiento de tu gato." },
        { nombre: "Shampoo para mascotas", imagen: "shampoo.jpg", precio: 30000, descripcion: "Limpieza profunda y protección." },
        { nombre: "Collar antipulgas", imagen: "collar-antipulgas.png", precio: 35000, descripcion: "Protección contra pulgas y garrapatas." },
        { nombre: "Medicamento desparasitante", imagen: "desparasitante.png", precio: 28000, descripcion: "Protege a tu mascota de parásitos internos." },
        { nombre: "Casa para perros", imagen: "casa-perros.png", precio: 120000, descripcion: "Espacio cómodo y seguro para tu perro." }
    ];

    const contenedor = document.getElementById("productos-container");

    if (contenedor) {
        productos.forEach(producto => {
            const productoHTML = `
                <div class="producto">
                    <img src="img/${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p class="precio">$${producto.precio.toLocaleString()}</p>
                    <input type="number" min="1" value="1">
                    <button>Comprar</button>
                </div>
            `;
            contenedor.insertAdjacentHTML("beforeend", productoHTML);
        });
    } else {
        console.error("No se encontró el contenedor de productos.");
    }

    // --- BOTONES DE AUTENTICACIÓN ---
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            alert('Aquí irá la página de inicio de sesión');
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function () {
            alert('Aquí irá la página de registro');
        });
    }
});

function buscarProductos() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        const nombre = producto.querySelector("h3").innerText.toLowerCase();
        if (nombre.includes(input)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}