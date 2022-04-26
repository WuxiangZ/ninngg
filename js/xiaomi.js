window.onload = function () {
    var index = 0;

    var but1 = document.querySelector(".prev");
    var but2 = document.querySelector(".next");
    var point1 = document.getElementsByClassName("pointer-rush")[0];
    var point2 = document.getElementsByClassName("pointer-rush")[1];
    var point3 = document.getElementsByClassName("pointer-rush")[2];
    var point4 = document.getElementsByClassName("pointer-rush")[3];
    var point5 = document.getElementsByClassName("pointer-rush")[4];
    var imgSource = document.querySelector(".banner-picture");


    imgArray = ["./Mipics/banner1.jpg", "./Mipics/banner2.jpg", "./Mipics/banner3.jpg", "./Mipics/banner6.png", "./Mipics/banner7.png"];
    imgAlt = ["Redmi K20 Pro", "小米CC9", "小米七夕节", "小米电视E55A", "RedmiBook 14"];
    pointArray = [point1, point2, point3, point4, point5]

    // 改变图片函数
    function Change_img(imgid) {
        index = imgid;
        imgSource.src = imgArray[index];
    };

    // 改变颜色函数
    function Chang_color(point) {
        point.style.backgroundColor = "rgba(255, 255, 255, .4)";
        point.style.borderColor = "rgba(0, 0, 0,.4)";
    };

    // 清空颜色函数
    function Return_color(point) {
        point.style.backgroundColor = "rgba(0, 0, 0,.4)";
        point.style.borderColor = "rgba(255, 255, 255, .4)";
    }

    // 清楚其他点的颜色
    function searchIndex() {
        for (var i = 0; i < pointArray.length; i++) {
            Return_color(pointArray[i]);
        }
    }

    function totalFun(pointindex) {
        Change_img(pointindex);
        searchIndex();
        Chang_color(this);
    }

    var timer;
    //创建一个函数，用来开启自动切换图片
    function autoChange() {
        //开启一个定时器，用来定时去切换图片
        timer = setInterval(function () {
            //使索引自增
            index++;
            if (index > imgArray.length - 1) {
                index = 0;
            }
            searchIndex();
            Chang_color(pointArray[index]);
            imgSource.src = imgArray[index];
            imgSource.alt = imgAlt[index];
        }, 5000);

    }
    autoChange();
    point1.onmousemove = function () {
        var pointindex = 0;
        Change_img(pointindex);
        searchIndex();
        Chang_color(this);
    }
    point2.onmousemove = function () {
        var pointindex = 1;
        Change_img(pointindex);
        searchIndex();
        Chang_color(this);
    }
    point3.onmousemove = function () {
        var pointindex = 2;
        Change_img(pointindex);
        searchIndex();
        Chang_color(this);
    }
    point4.onmousemove = function () {
        var pointindex = 3;
        Change_img(pointindex);
        searchIndex();
        Chang_color(this);
    }
    point5.onmousemove = function () {
        var pointindex = 4;
        Change_img(pointindex);
        searchIndex();
        Chang_color(this);
    }



    but1.onclick = function () {
        index--;
        if (index < 0) {
            index = imgArray.length - 1;
        }

        imgSource.src = imgArray[index];
        searchIndex();
        Chang_color(pointArray[index]);
        imgSource.alt = imgAlt[index];
        // aSource.href = HrefArray[index];
    };

    but2.onclick = function () {

        index++;
        if (index > imgArray.length - 1) {
            index = 0;
        }
        searchIndex();
        Chang_color(pointArray[index]);
        imgSource.src = imgArray[index];
        imgSource.alt = imgAlt[index];
    };

    var landInTexts = document.querySelectorAll('.landIn');
    console.log(landInTexts.length);
    landInTexts.forEach(function (landInText) {
        var letters = landInText.textContent.split("");
        landInText.textContent = "";
        letters.forEach(function (letter, i) {
            var span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = i * 0.08 + "s";
            landInText.append(span);
        });
    });
};