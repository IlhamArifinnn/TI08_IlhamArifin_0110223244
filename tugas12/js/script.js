// 1. 
function login(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(username === 'ahmad2017' && password === 'integrity'){
        // return  document.body.innerHTML = '<h1>Login Sukses</h1>'
        window.location = 'login success.html'
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

    hasil.innerHTML = nilai * valas
    
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