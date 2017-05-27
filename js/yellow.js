window.onload = function () {
    $('.j_yes').click(function(){
        if($("input").val()=='123456'){
            $('.header').css({'display':'block'})
            $('.focus').css({'display':'block'})
            $('.video').css({'display':'block'})
            $('.img').css({'display':'block'})
            $('.mima').css({'display':'none'})
            $('body').css({'background-color':'#fff'})
            window.location.href="homepage.html"
        }
    })
    /*
        1）设置ul宽度，达到水平排列的效果
        2）水平轮播效果
        3）移入移出，清除轮播效果
        4）添加分页效果
            * 点击分页切换
        5）无缝滚动
            * 把第一张复制到最后
            * 当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
     */
    
    var focus = document.getElementsByClassName('focus')[0];
    var ul = focus.children[0];

    // 复制第一张图片到最后
    var cloneLi = ul.firstElementChild.cloneNode(true);
    ul.appendChild(cloneLi);

    var index = 0;
    var len = ul.children.length;

    // 添加分页效果
    var page = document.createElement('div');
    page.className = 'page';
    for (var i = 1; i < len; i++) {
        var span = document.createElement('span');
        span.innerHTML = i;
        if (i === 1) {
            span.className = 'active';
        }
        page.appendChild(span);
    }
    focus.appendChild(page);

    // 点击分页切换
    page.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        // 重置index
        index = target.innerHTML - 1;

        showPic();
    }


    // 上一张，下一张



    // 设置ul宽度，达到水平排列的效果
    var h = document.body.clientWidth;
    $('.j_img').css({'width':(h+'px')})
    ul.style.width = len * h + 'px';

    // 2）水平轮播效果

    var timer = setInterval(carousel, 3000);


    // 3）移入移出，清除轮播效果
    focus.onmouseover = function () {
        clearInterval(timer);
    }

    focus.onmouseout = function () {
        timer = setInterval(carousel, 3000);
    }


    // 定时器函数
    function carousel() {
        index++;
        showPic();
    }

    function showPic() {
        var speed;
        // 滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
        if (index >= len) {
            ul.style.left = 0;
            index = 1;
        }

        // 嵌套定时器，实现滚动效果
        // 目标值
        // var currentLeft = ul.offsetLeft;//0
        var target = -index * h;//0



        clearInterval(ul.timer);
        ul.timer = setInterval(function () {
            var oldLeft = ul.offsetLeft;//-2430

            speed = (target - oldLeft) / 10;//243=>-73=>-66=>..=>-1=>0

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            // 如果速度过小，直接设置成目标值
            /*if(Math.abs(speed)<=1){
                oldLeft = target;
            }*/

            // 达到目标值时清除定时器
            if (oldLeft == target) {
                clearInterval(ul.timer);
                oldLeft = target - speed;
            }
            ul.style.left = oldLeft + speed + 'px';


        }, 50);


        // 当前高亮
        // 先去掉所有高亮，再给当前加高亮
        for (var i = 0; i < len - 1; i++) {
            page.children[i].className = '';
        }

        if (index < len - 1) {
            page.children[index].className = 'active';
        } else {
            page.children[0].className = 'active';
        }
    }
}