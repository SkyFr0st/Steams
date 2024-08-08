document.getElementById('form').addEventListener('submit' , function(event){
    event.preventDefault();

    let username = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    let email = document.getElementById('email').value;
    let tel = document.getElementById('tel').value;

    if(password !== confirmpassword){
        alert ('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
        return;
    }
    if(username === '' || password === '' || email === '' || tel === ''){
        alert ('สมัครสมาชิกสำเร็จแล้ว');
    }
    alert('สมัครสมาชิกสำเร็จแล้ว')
});