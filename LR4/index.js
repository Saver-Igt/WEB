var cls = 'Свой класс';
var name;
var date = '01.01.2002';
var tag = '';
var points = 3;
var strength = 3;
var agility = 3;
var intelligence = 3;
$(function(){
    $('#tabs').tabs();
    $("#date").datepicker({
        dateFormat: "dd.mm.yy"
    });
    //Подстановка класса
    $('#choosenClass').text("Класс: " + cls);
    //модальные окна
    $('#name').dialog({
        autoOpen: false
    });
    $('#confirm').dialog({
        autoOpen: false
    });
    $('#char').dialog({
        autoOpen: false
    });
    //Кнопки для модальных окон
    $('#open').click(function(){
        $('#name').dialog('open');
    });
    $('#end').click(function(){
        $('#name').dialog('close');
        name =  $('#name input').val();
        $('#confirm').dialog('open');
    });
    $('.close').click(function(){
        $('#confirm').dialog('close');
    });
    $('#close').click(function(){
        $('#char').dialog('close');
    });
    $('.finish').click(function(){
        $('#confirm').dialog('close');

        $('#charName').text("Имя: " + name);
        $('#charClass').text("Класс: " + cls);
        $('#charStrength').text("Сила: " + strength);
        $('#charAgility').text("Ловкость: " + agility);
        $('#charIntelligence').text("Интелект: " + intelligence);
        date = $('#date').val()
        $('#charDate').text("Дата рождения: " + date);
        tag = $('#tag').val()
        $('#charTag').text("Происхождение: " + tag);

        $('#char').dialog('open');
    });
    //Подсказка
    var avaiableTags = [
        "Варвар",
        "Дворянин",
        "Преступник",
        "Ученый",
        "Шутник",
        "Солдат",
        "Мистик"
    ];
    $('#tag').autocomplete({
        source: avaiableTags,
        minLength: 2
    });
    $( document ).tooltip();
    $( ".gonext" ).on( "click", function( event ) {
        $('#tabs').tabs({
            active: 2
        });
    });
});
//Дата
$('#date').change(function(){
    date = $('#date').val()
});
//Подстановка
$('#tag').change(function(){
    tag = $('#tag').val()
    if(tag === 'Варвар'){
        $('.tag-img').attr('src', 'assets/tags/barbarian.webp');
        $('.tag-name').attr('title', 'Вас называют дикарем, зверем. Но они не знают, каково это — сражаться, отдавая все свои силы, чтобы только выжить. А вы знаете.');
        $('.tag-desc').text("Варианты диалога, помеченные этим тегом, полезны в разговорах с гномами. А вот к людям и магистрам грубый тон лучше не применять.")
    }else if(tag === 'Дворянин'){
        $('.tag-img').attr('src', 'assets/tags/nobleman.webp');
        $('.tag-name').attr('title', 'Вас с детства окружали богатство и роскошь. Вы отличаетесь благородной осанкой, красноречием и изящными манерами.');
        $('.tag-desc').text("Благородному персонажу легче общаться и получать информацию от людей из высших кругов.")
    }else if(tag === 'Преступник'){
        $('.tag-img').attr('src', 'assets/tags/criminal.webp');
        $('.tag-name').attr('title','Темные переулки и городские крыши вы знаете как свои пять пальцев. Среди отбросов общества у вас хватает и друзей, и врагов.')
        $('.tag-desc').text('Используя варианты, помеченные этим тегом, в разговоре с заключенными, можно узнать о тайных проходах и зарытых сокровищах.')
    }else if(tag === 'Ученый'){
        $('.tag-img').attr('src', 'assets/tags/scientist.webp');
        $('.tag-name').attr('title','Вы умны и любознательны, и ваша жажда знаний намного превышает желание проливать кровь. Самые ценные ваши пожитки — книги и свитки.')
        $('.tag-desc').text('Ученый, как и солдат, может добывать интересную информацию, которую иначе никак не получить.')
    }else if(tag === 'Шутник'){
        $('.tag-img').attr('src', 'assets/tags/joker.webp');
        $('.tag-name').attr('title','Вы остры на язык и за песней в карман не полезете, ведь ваше призвание — развлекать окружающих. Вы можете и обезоружить слушателей своими непристойными байками, и заворожить страшными историями.')
        $('.tag-desc').text('Резкие и ироничные реплики. Рекомендуется использовать с осторожностью — далеко не у всех персонажей в игре есть чувство юмора.')
    }else if(tag === 'Солдат'){
        $('.tag-img').attr('src', 'assets/tags/soldier.webp');
        $('.tag-name').attr('title','Вы посвятили себя военному делу, и вас научили соблюдать дисциплину, подчиняться командирам и никогда не путать сортир с сержантом.')
        $('.tag-desc').text('Тег очень полезен при разговоре с охранниками, и зачастую позволяет добыть уникальную информацию.')
    }else if(tag === 'Мистик'){
        $('.tag-img').attr('src', 'assets/tags/mystic.webp');
        $('.tag-name').attr('title','Вас с детства окружали богатство и роскошь. Вы отличаетесь благородной осанкой, красноречием и изящными манерами.')
        $('.tag-desc').text('Благородному персонажу легче общаться и получать информацию от людей из высших кругов. ')
    }
    $('.tag-name').text(tag);
})
// Характеристики
$('#slider1').slider({
    max: 10,
    value: 3,
    min: 1
});
$('#slider2').slider({ 
    max: 10,
    value: 3,
    min: 1
});
$('#slider3').slider({
    max: 10,
    value: 3,
    min: 1
});
$( "#slider1" ).slider({
    change: function( event, ui ) {
        if(points >= 0){
            let value = ui.value;

            const difference = value-strength;

            if(difference <= points){
                points = points - difference;
                strength = value;
                $('.strength').text("Сила: " + strength);
            }else{
                $( "#slider1" ).slider( "option", "value", strength);
            }
        }
        $('.points').text("Количество очков: " + points);
    }
});
$( "#slider2" ).slider({
    change: function( event, ui ) {
        if(points >= 0){
            let value = ui.value;
            const difference = value-agility;

            if(difference <= points){
                points = points - difference;
                agility = value;
                $('.agility').text("Ловкость: " + agility);
            }else{
                $( "#slider2" ).slider( "option", "value", agility);
            }
        }
        $('.points').text("Количество очков: " + points);
    }
});
$( "#slider3" ).slider({
    change: function( event, ui ) {
        if(points >= 0){
            let value = ui.value;
            const difference = value-intelligence;

            if(difference <= points){
                points = points - difference;
                intelligence = value;
                $('.intelligence').text("Интелект: " + intelligence);
            }else{
                $( "#slider3" ).slider( "option", "value", intelligence);
            }
        }
        $('.points').text("Количество очков: " + points);
    }
});
function choose(text) {
    cls = text;
    $('#tabs').tabs({
        active: 1
    });
    $('#choosenClass').text("Класс: " + cls);
    if(cls === 'Свой класс'){
        $('.img-cls').attr('src', 'assets/unck.png')
        changeStats(3,3,3);
        points=3;
        $('.points').text("Количество очков: " + points);
    }else if(cls === 'Маг'){
        $('.img-cls').attr('src', 'assets/mag.png')
        changeStats(1,1,7);
        points=3;
        $('.points').text("Количество очков: " + points);
    }else if(cls === 'Стрелок'){
        $('.img-cls').attr('src', 'assets/hunt.png')
        changeStats(1,7,1);
        points=3;
        $('.points').text("Количество очков: " + points);
    }else{
        $('.img-cls').attr('src', 'assets/sword.png')
        changeStats(7,1,1);
        points=3;
        $('.points').text("Количество очков: " + points);
    }
}
function changeStats(s, a, i){
    strength = s;
    agility = a;
    intelligence = i;
    $('.strength').text("Сила: " + strength);
    $('#slider1').slider({value:strength});
    $('.agility').text("Ловкость: " + agility);
    $('#slider2').slider({value:agility});
    $('.intelligence').text("Интелект: " + intelligence);
    $('#slider3').slider({value:intelligence});
}