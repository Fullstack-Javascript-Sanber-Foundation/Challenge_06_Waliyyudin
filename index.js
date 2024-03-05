// Tebak Angka
// Tebak angka 1 sampai 9
let jawabanBenar = 8
let kesempatan = 10

let nilaiAwal = null

const jawab = (inputJawaban) => {
    nilaiAwal = 100
    console.log('Aplikasi Tebak angka 1 - 9 \n')
    if (inputJawaban == jawabanBenar) {
        console.log('Jawaban benar')
        console.log('Nilai: ' + nilaiAwal)
    } else if (inputJawaban == 10) {
        console.log('Silahkan tebak angka dari 1 - 9')
    } else if (inputJawaban != jawabanBenar) {
        if (kesempatan > 0) {
            kesempatan--
            if (inputJawaban < jawabanBenar) {
                nilai = nilaiAwal - 10
                console.log('Tebakan angka lebih kecil. Silahkan tebak kembali')
                // console.log('Nilai: ' + nilai)
            } else if (inputJawaban > jawabanBenar) {
                nilai = nilaiAwal - 10
                console.log('Tebakan angka lebih besar. Silahkan tebak kembali')
                // console.log('Nilai: ' + nilai)
            }
        }
    }
}

jawab(9)