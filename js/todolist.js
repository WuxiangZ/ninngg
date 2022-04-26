$(function () {
    loadData();
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            //先读取
            if ($(this).val() === "") {
                alert("请输入待办事项！");
            }
            else {
                var local = getData();
                var newTodo = {
                    title: $(this).val(), done: false
                };
                local.push(newTodo);
                //更新保存
                saveData(local);
                $(this).val("");
                loadData();
            }
        }
    });
    $('ol.demo-box,ul.demo-box').on("click", "a", function () {
        var data = getData();
        var index = $(this).attr('id');
        // console.log(index);

        data.splice(index, 1);
        saveData(data);
        loadData();
    });
    $('ol.demo-box,ul.demo-box').on("click", "input", function () {
        var data = getData();
        var index = $(this).siblings("a").attr("id");

        data[index].done = $(this).prop("checked");
        saveData(data);
        loadData();
    });
    $('ol.demo-box').on('dblclick','p',function(){
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges(): document.getSelection.empty();
        this.innerHTML = '<input type="text" />';
        console.log(this);
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e){
            if(e.keyCode===13){
                this.blur();
            }
        }
    });

    function getData() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            //格式转换
            return JSON.parse(data)
        }
        else {
            return [];
        }
    }
    function saveData(data) {
        JsonData = JSON.stringify(data);
        localStorage.setItem("todolist", JsonData);
    }
    function loadData() {
        var data = getData();
        $('ol.demo-box').html('');
        $('ul.demo-box').html('');
        var todoNum = 0;
        var doneNum = 0;
        $.each(data, function (i, elemt) {
            title = elemt.title;

            if (elemt.done) {
                var li = '<li> <input type="checkbox" checked="checked"> <p>' + title + '</p><a href="#" id=' + i + '></a></li>';
                $('ul.demo-box').prepend(li);
                doneNum++;
            }
            else {
                var li = '<li> <input type="checkbox"> <p>' + title + '</p><a href="#" id=' + i + '></a></li>';
                $('ol.demo-box').prepend(li);
                todoNum++;
            }
        })
        $('#donecount').text(doneNum);
        $('#todocount').text(todoNum);
    }
});