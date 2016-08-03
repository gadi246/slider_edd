

var imgArr = document.querySelectorAll('img');
console.log(imgArr);
var rightBtn = document.querySelector('.right');
var leftBtn = document.querySelector('.left');

var imgArrSrc = ['http://www.106fm.co.il/images/cache/170x95/2016-08/f1942e7e59e5b3797e51590301b0bd0b.jpg?1470134269' ,'http://www.106fm.co.il/images/cache/170x95/2016-07/530c26359a40f63ddafbbcdea1e2249a.jpg?1469837557','http://www.106fm.co.il/images/cache/170x95/2016-07/397469cb1c45ba24d47246ccaea159a7.jpg?1469534907','http://www.106fm.co.il/images/cache/170x95/2016-06/655a8ae6d7eda2c1dcb88c0fd244d370.jpg?1466755490','http://www.106fm.co.il/images/cache/170x95/2016-08/f1942e7e59e5b3797e51590301b0bd0b.jpg?1470134269']
var index=2;

var slider = (function(){

    function switchImgRight (e) {
        if (index < imgArrSrc.length - 1) {
        index += e.detail.index;
        console.log(index);
            render(index);
    }
    }
    function switchImgLeft (e) {
        if (index > 0) {
            index += e.detail.index;
            console.log(index);
            render(index);
        }
    }
    function render(index) {
        var z = -1;
        imgArr.forEach(function(el,ind,arr){
            el.src = imgArrSrc[index + z];
            z++;
        });
    }
         
    return {
        switchImgRight : switchImgRight,
        switchImgLeft : switchImgLeft,
        render: render
    }
})();

document.addEventListener('right', slider.switchImgRight);
var rightEvt = new CustomEvent('right', {
    detail:{
        index:1
    }
});
document.addEventListener('left', slider.switchImgLeft);
var leftEvt = new CustomEvent('left', {
    detail:{
        index:-1
    }
});
rightBtn.addEventListener('click', function(){
    document.dispatchEvent(rightEvt);
});
leftBtn.addEventListener('click', function(){
    document.dispatchEvent(leftEvt);
});
