const changes = [
'www.commodore.gen.tr/forum/index.php?action=search2" method="post" style="margin: 4px 0;">', 'google.com/search" method="get" target="_blank"><input type="hidden" name="sitesearch" value="https://www.commodore.gen.tr" />',
'class="profile_info', 'class="mprofile_info',
'size ait ', '',
'mesaj var', 'mesajın var, ',
'toplam süre:', 'toplam süre:<br>',
'name="search', 'name="q',
'id="logo', 'id="mlogo',
'id="useropts', 'id="museropts',
'id="rhino"', '',
'id="slider"', '',
'table width="468" height="60"', 'table width="0" height="0"',
'class="titlebg', 'class="mtitlebg',
'Gelişmiş Arama', '&emsp;Gelişmiş Arama',
'insanın içinde', '<br><br>İnsanın içinde',
'bir nevi', '<br>Bir nevi',
'(Arda)', '&emsp;(Arda) <br><br><a href="http://www.commodore.gen.tr/forum/index.php?action=profile;u=36862;sa=showPosts">Mesajlarımı Göster</a>',
'<form action="', '<br><br><form action="',
'width: 520px; height: 90px;', 'width: 520px; height: 0px;',
'http://www.commodore.gen.tr/images/_banner/adeks.jpg', '',
'http://www.commodore.gen.tr/images/_banner/x68000.jpg', '',
'http://www.commodore.gen.tr/images/_banner/amithlon.jpg', '',
'http://www.commodore.gen.tr/images/_banner/scartcade.jpg', '',
'http://www.commodore.gen.tr/images/_banner/neogeo_arcade.jpg', '',
'http://www.commodore.gen.tr/images/_banner/cgtr_oyun.png', '',
'Dokumantasyon', 'Dökümantasyon',
'<a href="http://www.simplemachines.org/"','<a href="https://github.com/emartisoft/extension-cgtr" target="_blank">Redesigned with extension by emarti, Murat Özdemir</a><br><a href="http://www.simplemachines.org/"'
];

for (let i = 0; i < changes.length; i+=2) {
    document.body.innerHTML = document.body.innerHTML.replace(changes[i], changes[i+1]);
}

var mdemo = document.getElementById('demo');
if(mdemo) mdemo.remove();
