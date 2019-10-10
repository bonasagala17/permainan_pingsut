function getPilihanComputer(){
    let pilihanComp = Math.random();      

    if(pilihanComp<0.34){
        return 'semut';
    }else if(pilihanComp>0.34 && pilihanComp<=0.64){
        return'orang';
    }else{
        return 'gajah';
    }
}

//rules/aturan
function getHasil(player, comp){
    if(player==comp){
        return 'SERI!';

    }else if(player == 'semut'){
        if(comp == 'orang'){
            return 'KALAH!';
        }else
            return 'MENANG!';

    }else if(player == 'orang'){
        if(comp == 'semut'){
            return 'MENANG!';
        }else 
            return 'KALAH!';

    }else if(player == 'gajah'){
        if(comp == 'orang'){
            return 'MENANG!';
        }else
            return 'KALAH!';
    }  
}

let info = document.querySelector('.info');
let imgComputer = document.querySelector('.img-komputer');

function putar(){
    let gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    let waktuMulai = new Date().getTime(); // untuk mendapatkan/menangkap waktu saat ini
    setInterval(function(){
        if(new Date().getTime() - waktuMulai>1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/'+gambar[i++]+'.png');
        if(i == gambar.length) i=0;
    }, 100)
}



// CARA DENGAN MENGGUNAKAN PERULANGAN DAN LEBIH EFEKTIF

//1 menyeleksi 3 gambar sekaligus
let pilihan = document.querySelectorAll('.area-player img');
//looping 3 image //untuk setiap image yang ada pada node list pilihan
pilihan.forEach(function(pil){
    let win = 0;
    let lose = 0;
    //pil untuk ambil 3 image
    pil.addEventListener('click', function(){
        
        let pilihanComputer = getPilihanComputer();
        let pilihanPlayer = pil.className;
        //menyimpan hasil dr fungsi hasil getHasil(player, comp)
        let hasil = getHasil (pilihanPlayer, pilihanComputer);
        putar();
        
        
        //menjalankan fungsi putar dahulu lalu maniplulasi elemen gambar
        setTimeout(function(){
            //manipulasi elemen gambar
            imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');

            //menampilkan hasil ke info
            info.innerHTML = hasil;

            // menambahkan skor
           
            const skorKomputer = document.querySelector('.skorKomputer');
            const skorPlayer = document.querySelector('.skorPlayer');

            if(hasil == 'MENANG!'){
                skorPlayer.innerHTML = win++;
            }
            else if(hasil == 'KALAH!'){
                skorKomputer.innerHTML = lose++;
            }

        },1000);

    });
    
});


// CARA YANG BIASA DAN TIDAK TERLALU EFEKTIF

//ambil elemen html
// let info = document.querySelector('.info');
// let imgComputer = document.querySelector('.img-komputer');

// let playerGajah = document.querySelector('.gajah');
// playerGajah.addEventListener('click', function(){
//     let pilihanComputer = getPilihanComputer();
//     let pilihanPlayer = playerGajah.className;
//     //menyimpan hasil dr fungsi hasil getHasil(player, comp)
//     let hasil = getHasil (pilihanPlayer, pilihanComputer);

//     //manipulasi elemen gambar
//     imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');

//     //menampilkan hasil ke info
//     info.innerHTML = hasil;

// });

// let playerOrang = document.querySelector('.orang');
// playerOrang.addEventListener('click', function(){
//     let pilihanComputer = getPilihanComputer();
//     let pilihanPlayer = playerOrang.className;
//     //menyimpan hasil dr fungsi hasil getHasil(player, comp)
//     let hasil = getHasil (pilihanPlayer, pilihanComputer);

//     //manipulasi elemen gambar
//     imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');

//     //menampilkan hasil ke info
//     info.innerHTML = hasil;

// });

// let playerSemut = document.querySelector('.semut');
// playerSemut.addEventListener('click', function(){
//     let pilihanComputer = getPilihanComputer();
//     let pilihanPlayer = playerSemut.className;
//     //menyimpan hasil dr fungsi hasil getHasil(player, comp)
//     let hasil = getHasil (pilihanPlayer, pilihanComputer);

//     //manipulasi elemen gambar
//     imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');

//     //menampilkan hasil ke info
//     info.innerHTML = hasil;

// });