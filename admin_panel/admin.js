document.addEventListener("DOMContentLoaded", function () {
    // Manejo del menú de navegación
    const menuItems = document.querySelectorAll(".sidebar nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    function showSection(sectionId) {
        document.querySelectorAll("main section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    }

    // Mostrar la primera sección por defecto
    const firstSection = document.querySelector("main section");
    if (firstSection) {
        firstSection.style.display = "block";
    }

    // Botón de cerrar sesión
    const logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            alert("Cerrando sesión...");
            window.location.href = "login.html";
        });
    }

    // Manejo de botones de acción en tablas
    document.querySelectorAll(".action-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert(`Acción realizada: ${this.dataset.action}`);
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const productosAdmin = [
        { nombre: "Alimento para perros", imagen: "alimento-perros.avif", precio: 50000, descripcion: "Nutrición completa para tu perro." },
        { nombre: "Alimento para gatos", imagen: "alimento-gatos.avif", precio: 45000, descripcion: "Alimento premium para gatos." },
        { nombre: "Juguete para perros", imagen: "juguete-perros.png", precio: 25000, descripcion: "Hueso resistente para morder." },
        { nombre: "Rascador para gatos", imagen: "rascador-gatos.webp", precio: 60000, descripcion: "Ideal para el entretenimiento de tu gato." },
        { nombre: "Shampoo para mascotas", imagen: "shampoo.jpg", precio: 30000, descripcion: "Limpieza profunda y protección." },
        { nombre: "Collar antipulgas", imagen: "collar-antipulgas.png", precio: 35000, descripcion: "Protección contra pulgas y garrapatas." },
        { nombre: "Medicamento desparasitante", imagen: "desparasitante.png", precio: 28000, descripcion: "Protege a tu mascota de parásitos internos." },
        { nombre: "Casa para perros", imagen: "casa-perros.png", precio: 120000, descripcion: "Espacio cómodo y seguro para tu perro." }
    ];

    const tablaProductos = document.getElementById("productos-admin");
    const formulario = document.getElementById("producto-form");

    // Función para mostrar productos en la tabla
    function mostrarProductos() {
        tablaProductos.innerHTML = "";
        productosAdmin.forEach((producto, index) => {
            const fila = `
                <tr>
                    <td><img src="./img/${producto.imagen}" alt="${producto.nombre}" width="80"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>$${producto.precio.toLocaleString()}</td>
                    <td>
    <button class="editar" onclick="editarProducto(${index})">
        <i class="fas fa-edit"></i> Editar
    </button>
    <button class="eliminar" onclick="eliminarProducto(${index})">
        <i class="fas fa-trash-alt"></i> Eliminar
    </button>
</td>
                </tr>
            `;
            tablaProductos.innerHTML += fila;
        });
    }

    // Función para agregar productos
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;
        const imagenInput = document.getElementById("imagen");
        const imagen = imagenInput.files[0] ? imagenInput.files[0].name : "default.jpg";

        const nuevoProducto = { nombre, descripcion, precio, imagen };
        productosAdmin.push(nuevoProducto);

        formulario.reset();
        mostrarProductos();
    });

    // Función para eliminar productos
    window.eliminarProducto = function (index) {
        productosAdmin.splice(index, 1);
        mostrarProductos();
    };

    // Función para editar productos
    window.editarProducto = function (index) {
        const producto = productosAdmin[index];
        document.getElementById("nombre").value = producto.nombre;
        document.getElementById("descripcion").value = producto.descripcion;
        document.getElementById("precio").value = producto.precio;

        productosAdmin.splice(index, 1); // Eliminar temporalmente el producto para editar
        mostrarProductos();
    };

    // Mostrar productos al cargar la página
    mostrarProductos();
});
