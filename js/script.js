let chartakyu = document.getElementById('myChart').getContext('2d')
let dataChart = [10,80,10]
let labels = ['Soto', 'Bakmi', 'Nasgor']
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B']

let myChart = new Chart(chartakyu, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: dataChart,
                backgroundColor: colorHex,
            },
        ],
        labels: labels,
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
        },      
    }
})

let tambahButton = document.getElementById('tambah-makanan')
tambahButton.addEventListener('click', function(){
    let namaMakanan = document.getElementById('nama-makanan').value
    let jumlahMakanan = document.getElementById('jumlah-makanan').value
    let warnaMakanan = document.getElementById('warna-makanan').value
    dataChart.push(jumlahMakanan)
    labels.push(namaMakanan)
    colorHex.push(warnaMakanan)
    myChart.update();

    // Modal otomatis ditutup
    var exampleModal = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(exampleModal)
    modal.hide();

    // console.log(namaMakanan)
    // console.log(jumlahMakanan)
    // console.log(warnaMakanan)
})