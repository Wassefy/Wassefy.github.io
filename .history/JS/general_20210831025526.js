let menuToggle = document.querySelector('#menu-btn');
let container = document.querySelector('.container');
let navigation = document.querySelector('.navigation');
let navList = document.querySelector('.nav_list');
let search = document.querySelector('.bx-search');
let header = document.querySelector('.header')
menuToggle.onclick = function(e){
    container.classList.toggle('active');
    navigation.classList.toggle('active');
    navList.classList.toggle('active');
}
search.onclick = function(e){
    container.classList.toggle('active');
    navigation.classList.toggle('active');
    navList.classList.toggle('active');
}
let list = document.querySelectorAll('.list');
let content = document.querySelectorAll('.content');
const FuncName = [
    'Bảng điều khiển',
    'Hồ sơ sinh viên',
    'Đăng ký học phần',
    'Đăng ký lớp học',
    'Thời khóa biểu',
    'Kết quả học tập',
    'Công nợ học phí',
    'Đăng ký dich vụ'
];
for( let i= 0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while( j < list.length){
            let tmp = j++;
            list[tmp].className = 'list';
            content[tmp].className = 'content';
        }
        list[i].className = 'list active';
        content[i].className = 'content active';
        document.getElementById('func_select').innerHTML = `${FuncName[i]}`;
    }
}