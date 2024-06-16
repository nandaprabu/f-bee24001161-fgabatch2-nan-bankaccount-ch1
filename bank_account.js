let saldo = 0;
let isConfirm = true;

while(isConfirm){
    let isSetor = confirm("Apakah anda ingin melakukan setor uang?");
    if(isSetor){
        tambahSaldo();
        isConfirm = confirm("Apakah anda ingin melakukan transaksi lain?");
    } else{
        let isTarik = confirm("Apakah anda ingin melakukan penarikan uang?")
        if(isTarik){
            kurangiSaldo();
            isConfirm = confirm("Apakah anda ingin melakukan transaksi lain?");
        } else {
            isConfirm = confirm("Apakah anda ingin melakukan transaksi lain?");
        }
    }
}

alert(`Saldo Anda Rp. ${saldo.toLocaleString()} -, Terimakasih telah menggunakan layanan kami`);

function tambahSaldo(){
    let userInput = prompt(`Saldo Anda Rp. ${saldo.toLocaleString()}-,\nMasukkan nominal uang yang akan anda setorkan!`);
    if (userInput === null || userInput.trim() === "") {
        alert(`Transaksi Gagal! Anda membatalkan transaksi atau tidak mengisi nominal.\nSaldo Anda Rp. ${saldo.toLocaleString()} -,`);
    } else {
        userInput = Number(userInput);
        if(typeof userInput === "number" && !isNaN(userInput)){
            saldo = saldo + userInput;
            alert(`Setoran Uang Berhasil! Saldo Anda Rp. ${saldo.toLocaleString()} -,`)
        } else {
            alert(`Transaksi Gagal! Mohon periksa kembali inputan anda\nSaldo Anda Rp. ${saldo.toLocaleString()} -,`);
        }
    }
    return saldo;
}

function kurangiSaldo(){
    let userInput = prompt(`Masukkan nominal uang yang ingin anda tarik!\nTotal harus kurang dari atau sama dengan Rp. ${saldo.toLocaleString()}-,`);
    if (userInput === null || userInput.trim() === "") {
        alert(`Transaksi Gagal! Anda membatalkan transaksi atau tidak mengisi nominal.\nSaldo Anda Rp. ${saldo.toLocaleString()} -,`);
    } else {
        userInput = Number(userInput);
        if(typeof userInput === "number" && !isNaN(userInput)){
            if(saldo < userInput){
                alert(`Transaksi Gagal! Jumlah saldo anda tidak mencukupi untuk melakukan transaksi\nSaldo Anda Rp. ${saldo.toLocaleString()} -,`)
            } else {
                saldo = saldo - userInput
                alert(`Penarikan Uang Berhasil! Saldo Anda Rp. ${saldo.toLocaleString()} -,`)
            }
        } else{
            alert(`Transaksi Gagal! Mohon periksa kembali inputan anda\nSaldo Anda Rp. ${saldo.toLocaleString()} -,`);
        }
    }
    return saldo;
}
