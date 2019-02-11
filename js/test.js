var fmname = ['test1', 'test2', 'test3', 'test4', 'test5', '家族1', '家族2', '家族3'];
        
        for (var i = 0; i < fmname.length; i++){
            var li = document.createElement('li');
            li.textContent = fmname[i];
            document.getElementById('fm').appendChild(li);
        }