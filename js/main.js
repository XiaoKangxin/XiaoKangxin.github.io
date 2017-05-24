$(document).ready(function () {
            setTimeout(function () {
                $('.start').text('接下來讓我帶你進入Yellow World').css({ color: '#ffeb62' });
                $('.j_animated').removeClass('tada').addClass('bounceIn');
                next();
            }, 2500);
            var times
            function next() {
                setTimeout(function () {
                    $('.start').text('跟我倒數5個數').css({ color: '#f31207','font-size': '5rem' });
                    $('.j_animated').removeClass('bounceIn').addClass('flip');
                    countDown();
                }, 2500);
            }
            function countDown() {
                setTimeout(function () {
                    times = setInterval(countDown1, 1000);
                }, 1000);
            }
            var a = 5
            function countDown1() {
                if(a%2==1){
                    $('.start').text(a).css({ color: '#f31207', 'font-size': '15rem' });
                    $('.j_animated').removeClass('flip').addClass('bounceIn');
                }else{
                    $('.start').text(a).css({ color: '#f31207', 'font-size': '15rem' });
                    $('.j_animated').removeClass('bounceIn').addClass('flip');
                }
                --a
                if (a == -1) {
                    console.log(a)
                    clearInterval(times)
                    movie()
                }
            }
            function movie(){
                $('.start').text('接下来你将看到一部小电影').css({ color: '#ffeb62', 'font-size': '5rem' });
                $('.movie').css({'display':'block'})
                moviePlay()
            }
            function moviePlay(){
                $('.start').text('点击屏幕开始播放吧').css({ color: '#f31207', 'font-size': '5rem' });
                $('body').click(function(){
                    $('.start').text('0.0断网了。。。').css({ color: '#f31207', 'font-size': '5rem' });
                    $('.image').css({'display':'block'})
                    $('.movie').css({'display':'none'})
                })
            }
        });