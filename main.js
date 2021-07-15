let copy = () => {
    let textArea = document.createElement("textarea");
    textArea.value = '0x0fd1F6A619c1890BcC6DAe01B212Ea19ADAE4383'
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert('Adress copied!')
}

let checkBox = document.getElementById('toggler');

checkBox.addEventListener('change', e => {
    if(e.target.checked) {
        document.getElementsByTagName('body')[0].style = 'background-color: #100D26'
    } else {
        document.getElementsByTagName('body')[0].style = 'background-color: #DFF2EB'
    }
})

let checkDate = () => {
    let time = new Date().getHours()
    
    if (time < 7 || time >= 18) {
        checkBox.checked = true
        document.getElementsByTagName('body')[0].style = 'background-color: #100D26'
    } else {
        document.getElementsByTagName('body')[0].style = 'background-color: #DFF2EB'
    }
}
checkDate()