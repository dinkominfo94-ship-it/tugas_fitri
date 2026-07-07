let total = 0;

function tambah(nama, harga) {
    let list = document.getElementById("list");

    let item = document.createElement("li");
    item.innerText = nama + " - Rp" + harga;
    list.appendChild(item);

    total += harga;
    document.getElementById("total").innerText = total;
}
