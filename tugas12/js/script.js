// 1. 
function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(username === 'ahmad2017' && password === 'integrity'){
        return  document.body.innerHTML = '<h1>Login Sukses</h1>'
    }
    else {
        return alert('Login Gagal')
    }
   
}
// 2.
function konversi(){
    let nilai = document.getElementById('nilai').value
    let valas = document.getElementById('valas').value
    let hasil = document.getElementById('hasil')

    if (valas == 'dollar_us'){
        hasil.innerHTML = nilai * 9915 
    }
    if (valas == 'dollar_sin'){
        hasil.innerHTML = nilai * 13472
        
    }
    if (valas == 'ringgit'){
        hasil.innerHTML = nilai * 874
    }
    
    if (valas == 'yen'){
        hasil.innerHTML = nilai * 120
        
    }
    if (valas == 'euro'){
        hasil.innerHTML = nilai * 15888
        
    }
    if (valas == 'riyal'){
        hasil.innerHTML = nilai * 3592

    }
}

// 3. 
function kirim(){
    let container = document.getElementById('container')
    let pesan = document.getElementById('pesan').value
    let teks = (pesan + '<br>')
    
    container.innerHTML += teks
    document.getElementById('pesan').value = ''
}

// 4. 
function gantiFoto() {
    let pilihFoto = document.getElementById("foto").value;     

    document.getElementById("kotakFoto").src = pilihFoto;
  }

// 5. 
const form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault()

    let nama = document.getElementById('nama').value
    let email = document.getElementById('email').value
    let jam = document.getElementById('jam').value
    let tujuan = document.getElementById('tujuan').value
    let tiket = document.getElementById('tiket').value

    document.getElementById('hasil_nama').innerHTML = nama
    document.getElementById('hasil_email').innerHTML = email
    document.getElementById('hasil_jam').innerHTML = jam
    document.getElementById('hasil_tujuan').innerHTML = tujuan
    document.getElementById('hasil_tiket').innerHTML = tiket
})