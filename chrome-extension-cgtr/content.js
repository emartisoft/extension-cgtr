

document.body.innerHTML = document.body.innerHTML.replace('class="profile_info', 'class="mprofile_info');
document.body.innerHTML = document.body.innerHTML.replace('size ait ', '');
document.body.innerHTML = document.body.innerHTML.replace('mesaj var', 'mesajın var, ');
document.body.innerHTML = document.body.innerHTML.replace('toplam süre:', 'toplam süre:<br>');
document.body.innerHTML = document.body.innerHTML.replace('<form action="https://www.commodore.gen.tr/forum/index.php?action=search2" method="post" style="margin: 4px 0;">', '<br><br><form action="https://google.com/search" method="get" target="_blank"><input type="hidden" name="sitesearch" value="https://www.commodore.gen.tr" />');
document.body.innerHTML = document.body.innerHTML.replace('name="search', 'name="q');
document.body.innerHTML = document.body.innerHTML.replace('id="logo', 'id="mlogo');
document.body.innerHTML = document.body.innerHTML.replace('id="rhino"', '');
document.body.innerHTML = document.body.innerHTML.replace('id="slider"', '');
document.body.innerHTML = document.body.innerHTML.replace('table width="468', 'table width="0');
document.body.innerHTML = document.body.innerHTML.replace('class="titlebg', 'class="mtitlebg');
document.body.innerHTML = document.body.innerHTML.replace('Gelişmiş Arama', '&emsp;Gelişmiş Arama');
document.body.innerHTML = document.body.innerHTML.replace('insanın içinde', '<br><br>İnsanın içinde');
document.body.innerHTML = document.body.innerHTML.replace('bir nevi', '<br>Bir nevi');
document.body.innerHTML = document.body.innerHTML.replace('(Arda)', '&emsp;(Arda)');

document.body.innerHTML = document.body.innerHTML.replace('http://www.commodore.gen.tr/images/_banner/adeks.jpg', '');
document.body.innerHTML = document.body.innerHTML.replace('http://www.commodore.gen.tr/images/_banner/x68000.jpg', '');
document.body.innerHTML = document.body.innerHTML.replace('http://www.commodore.gen.tr/images/_banner/amithlon.jpg', '');
document.body.innerHTML = document.body.innerHTML.replace('http://www.commodore.gen.tr/images/_banner/scartcade.jpg', '');
document.body.innerHTML = document.body.innerHTML.replace('http://www.commodore.gen.tr/images/_banner/neogeo_arcade.jpg', '');
document.body.innerHTML = document.body.innerHTML.replace('http://www.commodore.gen.tr/images/_banner/cgtr_oyun.png', '');

var mdemo = document.getElementById('demo');
if(mdemo) mdemo.remove();


