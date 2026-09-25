const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    let valid = true;

    // Bersihkan error
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("namaError").textContent = "";
    document.getElementById("tanggalLahirError").textContent = "";
    document.getElementById("alamatError").textContent = "";
    document.getElementById("teleponError").textContent = "";

    // Username
    if (username === "") {
        document.getElementById("usernameError").textContent =
            "Username tidak boleh kosong.";
        valid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").textContent =
            "Username minimal 3 karakter.";
        valid = false;
    }

    // Password
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password tidak boleh kosong.";
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password minimal 8 karakter.";
        valid = false;
    }

    // Nama
    if (nama === "") {
        document.getElementById("namaError").textContent =
            "Nama tidak boleh kosong.";
        valid = false;
    }

    // Tanggal lahir
    if (tanggalLahir === "") {
        document.getElementById("tanggalLahirError").textContent =
            "Tanggal lahir tidak boleh kosong.";
        valid = false;
    } else {
        const tanggal = new Date(tanggalLahir);
        const hariIni = new Date();

        hariIni.setHours(0, 0, 0, 0);

        if (tanggal > hariIni) {
            document.getElementById("tanggalLahirError").textContent =
                "Tanggal lahir tidak boleh tanggal masa depan.";
            valid = false;
        }
    }

    // Alamat
    if (alamat === "") {
        document.getElementById("alamatError").textContent =
            "Alamat tidak boleh kosong.";
        valid = false;
    }

    // Nomor telepon
    if (telepon === "") {
        document.getElementById("teleponError").textContent =
            "Nomor telepon tidak boleh kosong.";
        valid = false;
    } else if (!telepon.startsWith("62")) {
        document.getElementById("teleponError").textContent =
            "Nomor telepon harus berawalan 62.";
        valid = false;
    }

    // Jika semua valid
    if (valid) {
        window.location.href = "dashboard.html";
    }
});