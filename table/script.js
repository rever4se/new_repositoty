planets_info=[['Солнце', 'Звезда'],
    ['Меркурий', 'Ближайшая к солнцу планета'],['Венера', '"сестра" Земли'],
    ['Земля', 'Наша планета'],['Марс', 'Красная планета'],
    ['Юпитер', 'Газовый гигант'],['Сатурн', 'Планета с кольцами'],
    ['Уран', '"брат" Земли'],['Нептун', 'Ледяная планета']]

colorism = ['rgba(255, 217, 0, 0.24)',
    'rgba(239, 169, 102, 0.24)',
    'rgba(173, 175, 109, 0.24)',
    'rgba(59, 115, 15, 0.24)',
    'rgba(220, 17, 17, 0.24)',
    'rgba(98, 79, 35, 0.24)',
    'rgba(216, 241, 132, 0.24)',
    'rgba(33, 113, 161, 0.24)',
    'rgba(44, 204, 210, 0.24)'];

flag = 0;
check_click = 0;
check_another = "";
exit_code = 0;

function click_planet(id, num){
    document.getElementById("planet_name").innerText = "";
    document.getElementById("planet_info").innerText = "";
    planet_obj = document.getElementById(id);
    form = document.getElementById("form1");
    form.style.display = "block";
    form.style.background = colorism[num];

    if (check_click <= 0){
        exit_code = 0;
        var timerId = setInterval(() => hov(planet_obj, num, timerId), 1);
        check_click = check_click + 1;
    } else {
        exit_code = 1;
    }
}

function hov(planet_obj, num, timerId){
    if (exit_code == 0) {
        form = document.getElementById("form1");
        var c = planet_obj.getBoundingClientRect(),
            scrolltop = Math.round(document.body.scrollTop + c.top),
            scrollleft = Math.round(document.body.scrollLeft + c.left + 100);
        document.getElementById("planet_name").innerText = planets_info[num][0];
        document.getElementById("planet_info").innerText = planets_info[num][1];
        form.style.top = scrolltop;
        form.style.left = scrollleft;
    } else {
        clearInterval(timerId);
        form.style.display = "none";
        exit_code = 0;
        check_click = 0;
        check_another = 0;
    }
}
