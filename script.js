let users = [];
function addData() {
    const name = document.getElementById("name").value;
    const petugas = document.getElementById("petugas").value;
    const telp = document.getElementById("telp").value;
    const kelas = document.getElementById("kelas").value;
    const barang = document.getElementById("barang").value;
    const Tp = document.getElementById("Tp").value;
    const jam = document.getElementById("jam").value;

    if(name && petugas && telp && kelas && barang && Tp && jam) {
        users.push({name , petugas , telp , kelas , barang , Tp , jam});
        document.getElementById("name").value = '';
        document.getElementById("petugas").value = '';
        document.getElementById("telp").value = '';
        document.getElementById("kelas").value = '';
        document.getElementById("barang").value = '';
        document.getElementById("Tp").value = '';
        document.getElementById("jam").value = '';
        displayData();
    } else {
        alert("Harap isi semua data");
    }
}

function displayData() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = '';
    users.forEach((user, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.petugas}</td>
            <td>${user.telp}</td>
            <td>${user.kelas}</td>
            <td>${user.barang}</td>
            <td>${user.Tp}</td>
            <td>${user.jam}</td>
            <td>
                <button onclick="editData(${index})">Edit</button>
                <button onclick="deleteData(${index})">Hapus</button>
                <button onclick="printStruk(${index})">Cetak Struk</button>
            </td>
        </tr>
        `;
    });
}
function editData(index) {
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("petugas").value = user.petugas;
    document.getElementById("telp").value = user.telp;
    document.getElementById("kelas").value = user.kelas;
    document.getElementById("barang").value = user.barang;
    document.getElementById("Tp").value = user.Tp;
    document.getElementById("jam").value = user.jam;

    deleteData(index);
}

function deleteData(index){
    users.splice(index, 1);
    displayData();
}
