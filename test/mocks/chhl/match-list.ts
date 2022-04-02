import { AmateurHockeyBotMatchListResponse } from '../../../src/types';

export const MATCH_LIST_HTML = `
<!DOCTYPE HTML>
<html>

<head>
  <title>Choceňská Hokejová Liga</title>
  <meta name="description" content="Choceňská Hokejová Liga" />
  <meta name="keywords" content="hokejova liga chocen, chocen, hokej, liga, amateri, amatersky hokej, neregistrovana liga" />
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />

  <link rel="stylesheet" type="text/css" href="style/style.css" />

  <script src="js/jquery-1.8.2.js"></script>
  <script src="js/prettify.min.js"></script>
  <script src="js/readmore.min.js"></script>
  <script>
    setTimeout(function() {
      $('.news').readmore({
        moreLink: '<span style=\"text-align: center; margin-top: 5px; margin-bottom: 15px\"><a href="#">Zobrazit celou aktualitu</a></span>',
        lessLink: '<span style=\"text-align: center; margin-top: -25px; margin-bottom: 15px\"><a href="#">Zavřít aktualitu</a></span>',
        maxHeight: 95
      });
    }, 100);

  </script>

  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84659730-1', 'auto');
  ga('send', 'pageview');

  </script>
</head>

<body>
  <div id="main">
    <div id="header">
      <a title="Choceňská hokejová liga" href="index.php"><div id="logo"> </div></a>
      <div id="menubar">
        <ul id="menu">
          <!-- put class="selected" in the li tag for the selected page - to highlight which page you're on -->
          <li ><a href='index.php'>Home</a></li><li  class='selected'><a href='zapasy.php'>Zápasy</a></li><li ><a href='tabulky.php'>Tabulky</a></li><li ><a href='soupisky.php'>Soupisky</a></li><li ><a href='statistiky.php'>Statistiky</a></li><li ><a href='tresty.php'>Tresty</a></li><li ><a href='transfery.php'>Transfery</a></li><li ><a href='zobraz.php?stranka=soutezni_rad'>Pravidla</a></li><li ><a href='zobraz.php?stranka=historie'>Historie</a></li><li ><a href='zobraz.php?stranka=kontakty'>Kontakty</a></li>        </ul>
      </div>
    </div>
    <div id="site_content">
      <div id="sidebar_container">

        <div class="sidebar">
          <table style='width: 100%; font-size: 100%'>
            <tr>
              <th colspan='4' style='font-variant: small-caps; text-align: center; font-size: 120%'>Partner webu</th>
            </tr>
            <tr><td style="text-align: center">
              <a href="https://link.blockfolio.com/9dzp/8d3af34e" target=_self>
              <img src="reklamy/05.png" width="200" border=0 />
              </a>
            </td></tr>
          </table>
        </div>

        <div class="sidebar">
          <table style='width: 100%; font-size: 100%'>
            <tr>
              <th colspan='4' style='font-variant: small-caps; text-align: center; font-size: 120%'>Partner soutěže</th>
            </tr>
            <tr><td style="text-align: center">
              <a target="_blank" href="http://www.chocen-mesto.cz">
              <img src="reklamy/mesto_chocen.png" width="146" border=0 />
              </a>
            </td></tr>
          </table>
        </div>

        <div class="sidebar">
          <table style='width: 100%; font-size: 100%'>
            <tr>
              <th colspan='4' style='font-variant: small-caps; text-align: center; font-size: 120%'>Aktuality</th>
            </tr>
            <tr><td>

              <h4>Poslední utkání sezóny 2021/22</h4>
              <h5>12.03.2022, Jiří Nepraš ml.</h5>
              <p class='news'>Sezóna 2021/22 bude dohrána v neděli 13.3. zápasem skupiny o 9.-13.místo mezi mužstvy HC Hasiči ZL a Bejky Koldín od 18:30 hod.</p>

              <h4>Je rozhodnuto o pořadí na 1.-8.místě</h4>
              <h5>12.03.2022, Jiří Nepraš ml.</h5>
              <p class='news'>Dnes byly odehrány odvetné zápasy o umístění na 1. až 8. místě. Vlci Sudislav - HC Dlouhoňovice 4:3 stanovil pořadí 7. Vlci Sudislav, 8. HC Dlouhoňovice.
Stará garda - TJ Voděrady 4:11 posunul pokračování do samostatných nájezdů. V těch byla úspěšnější Stará garda 3:2 (rozhodující nájezd v deváté sérii proměnil Aleš Vích). Garda obsadila 5.místo, TJ Voděrady místo šesté.
Ve finále porazila Pohoda Kujebáky 7:5 a stala se vítězem letošního ročníku.
Kujebáci obsadili 2.místo.
V utkání o 3.místo porazili Sršni Záměl SKGB Běstovice 8:4 a získali pohár za 3.místo. SKGB Běstovice končí na 4.místě.</p>

              <h4>Doplnění termínů</h4>
              <h5>25.01.2022, Jiří Nepraš ml.</h5>
              <p class='news'>Do přehledu zápasů byly vloženy termíny pro první utkání čtvrtfinále play off (skupina D) a 1.kolo pro skupinu E (o umístění na 9. až 13.místě).</p>
                          </td></tr>
          </table>
        </div>

        <div class="sidebar">
          <table style='width: 100%; font-size: 100%'>
            <tr>
              <th colspan='4' style='font-variant: small-caps; text-align: center; font-size: 120%'>Návštěvnost</th>
            </tr>
            <tr><td style="text-align: center">
              <a href="http://www.toplist.cz/stat/1721009"><script language="JavaScript" type="text/javascript">
              <!--
              document.write('<img src="https://toplist.cz/count.asp?id=1721009&amp;logo=mc&amp;http='+escape(document.referrer)+'&amp;t='+escape(document.title)+
              '&amp;wi='+escape(window.screen.width)+'&amp;he='+escape(window.screen.height)+'&amp;cd='+escape(window.screen.colorDepth)+'" width="88" height="60" border=0 alt="TOPlist" />');
              //--></script></a><noscript><img src="https://toplist.cz/count.asp?id=1721009&amp;logo=mc" border="0"
              alt="TOPlist" width="88" height="60" /></noscript>
            </td></tr>
          </table>
        </div>

        <!--
        <div class="sidebar">
          <table style='width: 100%; font-size: 100%'>
            <tr>
              <th colspan='4' style='font-variant: small-caps; text-align: center; font-size: 120%'>Reklama</th>
            </tr>
            <tr><td style="text-align: center">
              <a href="http://clicks.fortunaaffiliates.com/afs/come.php?id=1317&cid=2038&atype=1&ctgid=3" target=_self>
              <img src="http://ads.fortunaaffiliates.com/afs/show.php?id=1317&cid=2038&ctgid=3" width="200" height="200" border=0>
              </a>
            </td></tr>
          </table>
        </div>
       -->

      </div>
<div id="content">

	<div class='submenu'><div class='submenu_in'><a href='?sezona=11'>2021/22 A</a>
<a href='?sezona=12'>2021/22 B</a>
<a href='?sezona=13'>2021/22 C</a>
<a href='?sezona=14'>2021/22 D</a>
<a href='?sezona=15'>2021/22 E</a>
</div></div><h2>Přehled zápasů skupina A 2016/17</h2>
    <table>
        <tr>
          <th style='text-align: center'>Č.</th>
          <th style='text-align: center'>Datum</th>
          <th style='text-align: center'>Začátek</th>
          <th>Domácí</th>
          <th>Hosté</th>
          <th style='text-align: center'>Výsledek</th>
        </tr>
    <tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>1. kolo</b></td></tr><tr>
<td style='text-align: center'>1</td>
<td style='text-align: center'>24.09.2016</td>
<td style='text-align: center'>14:30</td>
<td><a href='zapasy.php?sezona=1&klub=6'>POHODA</a></td>
<td><a href='zapasy.php?sezona=1&klub=7'>HC SRŠNI ZÁMĚL</a></td>
<td  style='text-align: center;'><a href='?report=1'>8:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>2</td>
<td style='text-align: center'>24.09.2016</td>
<td style='text-align: center'>16:00</td>
<td><a href='zapasy.php?sezona=1&klub=3'>TJ SOKOL TISOVÁ</a></td>
<td><a href='zapasy.php?sezona=1&klub=10'>VYSOKÉ MÝTO</a></td>
<td  style='text-align: center;'><a href='?report=2'>9:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>3</td>
<td style='text-align: center'>24.09.2016</td>
<td style='text-align: center'>17:30</td>
<td><a href='zapasy.php?sezona=1&klub=5'>BEJCI KOLDÍN</a></td>
<td><a href='zapasy.php?sezona=1&klub=8'>TYGŘI CHOCEŇ</a></td>
<td  style='text-align: center;'><a href='?report=3'>1:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>4</td>
<td style='text-align: center'>25.09.2016</td>
<td style='text-align: center'>10:15</td>
<td><a href='zapasy.php?sezona=1&klub=2'>KUJEBÁCI</a></td>
<td><a href='zapasy.php?sezona=1&klub=11'>HC HASIČI</a></td>
<td  style='text-align: center;'><a href='?report=4'>7:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>5</td>
<td style='text-align: center'>25.09.2016</td>
<td style='text-align: center'>11:45</td>
<td><a href='zapasy.php?sezona=1&klub=1'>SKGB BĚSTOVICE</a></td>
<td><a href='zapasy.php?sezona=1&klub=12'>SEŠLOST</a></td>
<td  style='text-align: center;'><a href='?report=5'>11:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>6</td>
<td style='text-align: center'>25.09.2016</td>
<td style='text-align: center'>13:15</td>
<td><a href='zapasy.php?sezona=1&klub=4'>STARÁ GARDA</a></td>
<td><a href='zapasy.php?sezona=1&klub=9'>VLCI SUDISLAV</a></td>
<td  style='text-align: center;'><a href='?report=6'>6:2</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>2. kolo</b></td></tr><tr>
<td style='text-align: center'>7</td>
<td style='text-align: center'>28.09.2016</td>
<td style='text-align: center'>10:00</td>
<td>SKGB BĚSTOVICE</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=7'>1:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>8</td>
<td style='text-align: center'>28.09.2016</td>
<td style='text-align: center'>11:30</td>
<td>TYGŘI CHOCEŇ</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=8'>4:5sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>9</td>
<td style='text-align: center'>28.09.2016</td>
<td style='text-align: center'>15:30</td>
<td>VYSOKÉ MÝTO</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=9'>2:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>10</td>
<td style='text-align: center'>28.09.2016</td>
<td style='text-align: center'>17:00</td>
<td>VLCI SUDISLAV</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=10'>4:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>11</td>
<td style='text-align: center'>28.09.2016</td>
<td style='text-align: center'>18:30</td>
<td>SEŠLOST</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=11'>1:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>12</td>
<td style='text-align: center'>28.09.2016</td>
<td style='text-align: center'>20:00</td>
<td>HC HASIČI</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=12'>3:5</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>3. kolo</b></td></tr><tr>
<td style='text-align: center'>13</td>
<td style='text-align: center'>01.10.2016</td>
<td style='text-align: center'>13:00</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=13'>12:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>14</td>
<td style='text-align: center'>01.10.2016</td>
<td style='text-align: center'>14:30</td>
<td>TJ SOKOL TISOVÁ</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=14'>2:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>15</td>
<td style='text-align: center'>02.10.2016</td>
<td style='text-align: center'>09:00</td>
<td>BEJCI KOLDÍN</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=15'>3:0</a>  </td>
</tr>

<tr>
<td style='text-align: center'>16</td>
<td style='text-align: center'>02.10.2016</td>
<td style='text-align: center'>10:30</td>
<td>POHODA</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=16'>10:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>17</td>
<td style='text-align: center'>02.10.2016</td>
<td style='text-align: center'>12:00</td>
<td>STARÁ GARDA</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=17'>6:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>18</td>
<td style='text-align: center'>02.10.2016</td>
<td style='text-align: center'>13:30</td>
<td>KUJEBÁCI</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=18'>7:1</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>4. kolo</b></td></tr><tr>
<td style='text-align: center'>19</td>
<td style='text-align: center'>08.10.2016</td>
<td style='text-align: center'>10:00</td>
<td>VLCI SUDISLAV</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=19'>4:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>20</td>
<td style='text-align: center'>08.10.2016</td>
<td style='text-align: center'>11:30</td>
<td>SKGB BĚSTOVICE</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=20'>4:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>21</td>
<td style='text-align: center'>08.10.2016</td>
<td style='text-align: center'>14:15</td>
<td>KUJEBÁCI</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=21'>5:4sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>22</td>
<td style='text-align: center'>08.10.2016</td>
<td style='text-align: center'>15:45</td>
<td>SEŠLOST</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=22'>3:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>23</td>
<td style='text-align: center'>09.10.2016</td>
<td style='text-align: center'>13:00</td>
<td>HC HASIČI</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=23'>3:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>24</td>
<td style='text-align: center'>09.10.2016</td>
<td style='text-align: center'>14:30</td>
<td>VYSOKÉ MÝTO</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=24'>1:2</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>5. kolo</b></td></tr><tr>
<td style='text-align: center'>25</td>
<td style='text-align: center'>15.10.2016</td>
<td style='text-align: center'>10:00</td>
<td>TYGŘI CHOCEŇ</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=25'>6:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>26</td>
<td style='text-align: center'>15.10.2016</td>
<td style='text-align: center'>11:30</td>
<td>STARÁ GARDA</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=26'>4:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>27</td>
<td style='text-align: center'>15.10.2016</td>
<td style='text-align: center'>14:15</td>
<td>POHODA</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=27'>6:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>28</td>
<td style='text-align: center'>16.10.2016</td>
<td style='text-align: center'>11:30</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=28'>7:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>29</td>
<td style='text-align: center'>16.10.2016</td>
<td style='text-align: center'>13:00</td>
<td>TJ SOKOL TISOVÁ</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=29'>4:8</a>  </td>
</tr>

<tr>
<td style='text-align: center'>30</td>
<td style='text-align: center'>16.10.2016</td>
<td style='text-align: center'>14:30</td>
<td>BEJCI KOLDÍN</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=30'>0:6</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>6. kolo</b></td></tr><tr>
<td style='text-align: center'>31</td>
<td style='text-align: center'>22.10.2016</td>
<td style='text-align: center'>15:15</td>
<td>VYSOKÉ MÝTO</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=31'>3:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>32</td>
<td style='text-align: center'>23.10.2016</td>
<td style='text-align: center'>08:45</td>
<td>SEŠLOST</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=32'>2:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>33</td>
<td style='text-align: center'>23.10.2016</td>
<td style='text-align: center'>14:45</td>
<td>KUJEBÁCI</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=33'>11:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>34</td>
<td style='text-align: center'>23.10.2016</td>
<td style='text-align: center'>16:15</td>
<td>TJ SOKOL TISOVÁ</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=34'>5:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>35</td>
<td style='text-align: center'>23.10.2016</td>
<td style='text-align: center'>17:45</td>
<td>SKGB BĚSTOVICE</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=35'>8:0</a>  </td>
</tr>

<tr>
<td style='text-align: center'>36</td>
<td style='text-align: center'>23.10.2016</td>
<td style='text-align: center'>19:15</td>
<td>HC HASIČI</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=36'>4:8</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>7. kolo</b></td></tr><tr>
<td style='text-align: center'>37</td>
<td style='text-align: center'>29.10.2016</td>
<td style='text-align: center'>14:30</td>
<td>TYGŘI CHOCEŇ</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=37'>5:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>38</td>
<td style='text-align: center'>30.10.2016</td>
<td style='text-align: center'>10:00</td>
<td>VLCI SUDISLAV</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=38'>5:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>39</td>
<td style='text-align: center'>30.10.2016</td>
<td style='text-align: center'>11:30</td>
<td>BEJCI KOLDÍN</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=39'>2:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>40</td>
<td style='text-align: center'>30.10.2016</td>
<td style='text-align: center'>13:00</td>
<td>STARÁ GARDA</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=40'>10:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>41</td>
<td style='text-align: center'>30.10.2016</td>
<td style='text-align: center'>14:30</td>
<td>POHODA</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=41'>3:8</a>  </td>
</tr>

<tr>
<td style='text-align: center'>42</td>
<td style='text-align: center'>30.10.2016</td>
<td style='text-align: center'>16:00</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=42'>4:5sn</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>8. kolo</b></td></tr><tr>
<td style='text-align: center'>43</td>
<td style='text-align: center'>05.11.2016</td>
<td style='text-align: center'>08:30</td>
<td>HC HASIČI</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=43'>2:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>44</td>
<td style='text-align: center'>05.11.2016</td>
<td style='text-align: center'>10:00</td>
<td>TJ SOKOL TISOVÁ</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=44'>5:10</a>  </td>
</tr>

<tr>
<td style='text-align: center'>45</td>
<td style='text-align: center'>05.11.2016</td>
<td style='text-align: center'>11:30</td>
<td>KUJEBÁCI</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=45'>9:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>46</td>
<td style='text-align: center'>05.11.2016</td>
<td style='text-align: center'>16:30</td>
<td>SKGB BĚSTOVICE</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=46'>4:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>47</td>
<td style='text-align: center'>05.11.2016</td>
<td style='text-align: center'>18:00</td>
<td>SEŠLOST</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=47'>5:4sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>48</td>
<td style='text-align: center'>06.11.2016</td>
<td style='text-align: center'>08:45</td>
<td>STARÁ GARDA</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=48'>5:3</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>9. kolo</b></td></tr><tr>
<td style='text-align: center'>49</td>
<td style='text-align: center'>11.11.2016</td>
<td style='text-align: center'>20:30</td>
<td>VYSOKÉ MÝTO</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=49'>9:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>50</td>
<td style='text-align: center'>11.11.2016</td>
<td style='text-align: center'>22:00</td>
<td>VLCI SUDISLAV</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=50'>2:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>51</td>
<td style='text-align: center'>13.11.2016</td>
<td style='text-align: center'>08:30</td>
<td>TYGŘI CHOCEŇ</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=51'>4:8</a>  </td>
</tr>

<tr>
<td style='text-align: center'>52</td>
<td style='text-align: center'>13.11.2016</td>
<td style='text-align: center'>11:15</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=52'>5:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>53</td>
<td style='text-align: center'>13.11.2016</td>
<td style='text-align: center'>12:45</td>
<td>POHODA</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=53'>6:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>54</td>
<td style='text-align: center'>13.11.2016</td>
<td style='text-align: center'>20:15</td>
<td>BEJCI KOLDÍN</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=54'>5:3</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>10. kolo</b></td></tr><tr>
<td style='text-align: center'>55</td>
<td style='text-align: center'>19.11.2016</td>
<td style='text-align: center'>08:30</td>
<td>BEJCI KOLDÍN</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=55'>4:8</a>  </td>
</tr>

<tr>
<td style='text-align: center'>56</td>
<td style='text-align: center'>19.11.2016</td>
<td style='text-align: center'>10:00</td>
<td>TJ SOKOL TISOVÁ</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=56'>5:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>57</td>
<td style='text-align: center'>19.11.2016</td>
<td style='text-align: center'>11:30</td>
<td>SEŠLOST</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=57'>3:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>58</td>
<td style='text-align: center'>20.11.2016</td>
<td style='text-align: center'>08:30</td>
<td>SKGB BĚSTOVICE</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=58'>5:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>59</td>
<td style='text-align: center'>20.11.2016</td>
<td style='text-align: center'>11:15</td>
<td>KUJEBÁCI</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=59'>12:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>60</td>
<td style='text-align: center'>20.11.2016</td>
<td style='text-align: center'>12:45</td>
<td>STARÁ GARDA</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=60'>3:5</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>11. kolo</b></td></tr><tr>
<td style='text-align: center'>61</td>
<td style='text-align: center'>26.11.2016</td>
<td style='text-align: center'>07:30</td>
<td>VYSOKÉ MÝTO</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=61'>1:10</a>  </td>
</tr>

<tr>
<td style='text-align: center'>62</td>
<td style='text-align: center'>26.11.2016</td>
<td style='text-align: center'>16:30</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=62'>8:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>63</td>
<td style='text-align: center'>26.11.2016</td>
<td style='text-align: center'>18:00</td>
<td>HC HASIČI</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=63'>2:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>64</td>
<td style='text-align: center'>27.11.2016</td>
<td style='text-align: center'>07:00</td>
<td>TYGŘI CHOCEŇ</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=64'>3:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>65</td>
<td style='text-align: center'>27.11.2016</td>
<td style='text-align: center'>08:30</td>
<td>VLCI SUDISLAV</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=65'>6:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>66</td>
<td style='text-align: center'>27.11.2016</td>
<td style='text-align: center'>10:00</td>
<td>POHODA</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=66'>7:4</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>12. kolo</b></td></tr><tr>
<td style='text-align: center'>67</td>
<td style='text-align: center'>03.12.2016</td>
<td style='text-align: center'>08:00</td>
<td>SEŠLOST</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=67'>2:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>68</td>
<td style='text-align: center'>03.12.2016</td>
<td style='text-align: center'>09:30</td>
<td>HC HASIČI</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=68'>0:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>69</td>
<td style='text-align: center'>03.12.2016</td>
<td style='text-align: center'>11:00</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=69'>4:8</a>  </td>
</tr>

<tr>
<td style='text-align: center'>70</td>
<td style='text-align: center'>03.12.2016</td>
<td style='text-align: center'>12:30</td>
<td>VYSOKÉ MÝTO</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=70'>3:10</a>  </td>
</tr>

<tr>
<td style='text-align: center'>71</td>
<td style='text-align: center'>03.12.2016</td>
<td style='text-align: center'>17:30</td>
<td>TYGŘI CHOCEŇ</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=71'>4:3sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>72</td>
<td style='text-align: center'>04.12.2016</td>
<td style='text-align: center'>16:15</td>
<td>VLCI SUDISLAV</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=72'>8:2</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>13. kolo</b></td></tr><tr>
<td style='text-align: center'>73</td>
<td style='text-align: center'>09.12.2016</td>
<td style='text-align: center'>22:00</td>
<td>KUJEBÁCI</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=73'>1:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>74</td>
<td style='text-align: center'>10.12.2016</td>
<td style='text-align: center'>08:30</td>
<td>BEJCI KOLDÍN</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=74'>1:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>75</td>
<td style='text-align: center'>11.12.2016</td>
<td style='text-align: center'>08:00</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=75'>4:5sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>76</td>
<td style='text-align: center'>11.12.2016</td>
<td style='text-align: center'>09:30</td>
<td>POHODA</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=76'>6:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>77</td>
<td style='text-align: center'>11.12.2016</td>
<td style='text-align: center'>11:00</td>
<td>STARÁ GARDA</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=77'>7:0</a>  </td>
</tr>

<tr>
<td style='text-align: center'>78</td>
<td style='text-align: center'>11.12.2016</td>
<td style='text-align: center'>12:30</td>
<td>TJ SOKOL TISOVÁ</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=78'>4:1</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>14. kolo</b></td></tr><tr>
<td style='text-align: center'>79</td>
<td style='text-align: center'>17.12.2016</td>
<td style='text-align: center'>07:30</td>
<td>VLCI SUDISLAV</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=79'>5:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>80</td>
<td style='text-align: center'>17.12.2016</td>
<td style='text-align: center'>13:00</td>
<td>VYSOKÉ MÝTO</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=80'>9:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>81</td>
<td style='text-align: center'>18.12.2016</td>
<td style='text-align: center'>07:15</td>
<td>SKGB BĚSTOVICE</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=81'>3:2sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>82</td>
<td style='text-align: center'>18.12.2016</td>
<td style='text-align: center'>08:45</td>
<td>HC HASIČI</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=82'>3:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>83</td>
<td style='text-align: center'>18.12.2016</td>
<td style='text-align: center'>16:15</td>
<td>TYGŘI CHOCEŇ</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=83'>6:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>84</td>
<td style='text-align: center'>18.12.2016</td>
<td style='text-align: center'>17:45</td>
<td>SEŠLOST</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=84'>0:6</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>15. kolo</b></td></tr><tr>
<td style='text-align: center'>85</td>
<td style='text-align: center'>07.01.2017</td>
<td style='text-align: center'>07:45</td>
<td>TJ SOKOL TISOVÁ</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=85'>0:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>86</td>
<td style='text-align: center'>07.01.2017</td>
<td style='text-align: center'>09:15</td>
<td>TYGŘI CHOCEŇ</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=86'>3:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>87</td>
<td style='text-align: center'>07.01.2017</td>
<td style='text-align: center'>16:30</td>
<td>STARÁ GARDA</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=87'>3:4sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>88</td>
<td style='text-align: center'>07.01.2017</td>
<td style='text-align: center'>18:00</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=88'>2:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>89</td>
<td style='text-align: center'>08.01.2017</td>
<td style='text-align: center'>08:45</td>
<td>BEJCI KOLDÍN</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=89'>2:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>90</td>
<td style='text-align: center'>08.01.2017</td>
<td style='text-align: center'>18:45</td>
<td>POHODA</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=90'>7:2</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>16. kolo</b></td></tr><tr>
<td style='text-align: center'>91</td>
<td style='text-align: center'>10.01.2017</td>
<td style='text-align: center'>20:15</td>
<td>SEŠLOST</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=91'>0:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>92</td>
<td style='text-align: center'>11.01.2017</td>
<td style='text-align: center'>20:45</td>
<td>KUJEBÁCI</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=92'>4:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>93</td>
<td style='text-align: center'>12.01.2017</td>
<td style='text-align: center'>20:15</td>
<td>VLCI SUDISLAV</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=93'>4:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>94</td>
<td style='text-align: center'>12.01.2017</td>
<td style='text-align: center'>21:45</td>
<td>SKGB BĚSTOVICE</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=94'>4:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>95</td>
<td style='text-align: center'>14.01.2017</td>
<td style='text-align: center'>07:30</td>
<td>VYSOKÉ MÝTO</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=95'>2:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>96</td>
<td style='text-align: center'>15.01.2017</td>
<td style='text-align: center'>07:30</td>
<td>HC HASIČI</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=96'>1:5</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>17. kolo</b></td></tr><tr>
<td style='text-align: center'>97</td>
<td style='text-align: center'>20.01.2017</td>
<td style='text-align: center'>21:45</td>
<td>STARÁ GARDA</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=97'>3:4sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>98</td>
<td style='text-align: center'>21.01.2017</td>
<td style='text-align: center'>08:30</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=98'>5:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>99</td>
<td style='text-align: center'>21.01.2017</td>
<td style='text-align: center'>10:00</td>
<td>VLCI SUDISLAV</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=99'>5:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>100</td>
<td style='text-align: center'>21.01.2017</td>
<td style='text-align: center'>11:30</td>
<td>BEJCI KOLDÍN</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=100'>2:13</a>  </td>
</tr>

<tr>
<td style='text-align: center'>101</td>
<td style='text-align: center'>22.01.2017</td>
<td style='text-align: center'>18:30</td>
<td>POHODA</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=101'>3:4sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>102</td>
<td style='text-align: center'>22.01.2017</td>
<td style='text-align: center'>20:00</td>
<td>TYGŘI CHOCEŇ</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=102'>8:7sn</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>18. kolo</b></td></tr><tr>
<td style='text-align: center'>103</td>
<td style='text-align: center'>28.01.2017</td>
<td style='text-align: center'>16:30</td>
<td>SEŠLOST</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=103'>1:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>104</td>
<td style='text-align: center'>28.01.2017</td>
<td style='text-align: center'>18:00</td>
<td>SKGB BĚSTOVICE</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=104'>5:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>105</td>
<td style='text-align: center'>29.01.2017</td>
<td style='text-align: center'>16:15</td>
<td>VYSOKÉ MÝTO</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=105'>0:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>106</td>
<td style='text-align: center'>29.01.2017</td>
<td style='text-align: center'>17:45</td>
<td>KUJEBÁCI</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=106'>7:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>107</td>
<td style='text-align: center'>29.01.2017</td>
<td style='text-align: center'>19:15</td>
<td>HC HASIČI</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=107'>1:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>108</td>
<td style='text-align: center'>29.01.2017</td>
<td style='text-align: center'>20:45</td>
<td>TJ SOKOL TISOVÁ</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=108'>5:4</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>19. kolo</b></td></tr><tr>
<td style='text-align: center'>109</td>
<td style='text-align: center'>03.02.2017</td>
<td style='text-align: center'>20:30</td>
<td>BEJCI KOLDÍN</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=109'>7:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>110</td>
<td style='text-align: center'>04.02.2017</td>
<td style='text-align: center'>07:30</td>
<td>VYSOKÉ MÝTO</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=110'>3:8</a>  </td>
</tr>

<tr>
<td style='text-align: center'>111</td>
<td style='text-align: center'>05.02.2017</td>
<td style='text-align: center'>08:45</td>
<td>POHODA</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=111'>1:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>112</td>
<td style='text-align: center'>05.02.2017</td>
<td style='text-align: center'>10:15</td>
<td>VLCI SUDISLAV</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=112'>6:4</a>  </td>
</tr>

<tr>
<td style='text-align: center'>113</td>
<td style='text-align: center'>05.02.2017</td>
<td style='text-align: center'>19:30</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=113'>1:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>114</td>
<td style='text-align: center'>05.02.2017</td>
<td style='text-align: center'>21:00</td>
<td>TYGŘI CHOCEŇ</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=114'>0:8</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>20. kolo</b></td></tr><tr>
<td style='text-align: center'>115</td>
<td style='text-align: center'>10.02.2017</td>
<td style='text-align: center'>20:30</td>
<td>SEŠLOST</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=115'>5:6sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>116</td>
<td style='text-align: center'>10.02.2017</td>
<td style='text-align: center'>22:00</td>
<td>STARÁ GARDA</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=116'>9:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>117</td>
<td style='text-align: center'>11.02.2017</td>
<td style='text-align: center'>08:00</td>
<td>HC HASIČI</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=117'>1:3</a>  </td>
</tr>

<tr>
<td style='text-align: center'>118</td>
<td style='text-align: center'>11.02.2017</td>
<td style='text-align: center'>09:30</td>
<td>TJ SOKOL TISOVÁ</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=118'>6:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>119</td>
<td style='text-align: center'>12.02.2017</td>
<td style='text-align: center'>08:00</td>
<td>SKGB BĚSTOVICE</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=119'>6:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>120</td>
<td style='text-align: center'>12.02.2017</td>
<td style='text-align: center'>09:30</td>
<td>KUJEBÁCI</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=120'>8:2</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>21. kolo</b></td></tr><tr>
<td style='text-align: center'>121</td>
<td style='text-align: center'>17.02.2017</td>
<td style='text-align: center'>20:45</td>
<td>POHODA</td>
<td>BEJCI KOLDÍN</td>
<td  style='text-align: center;'><a href='?report=121'>2:3sn</a>  </td>
</tr>

<tr>
<td style='text-align: center'>122</td>
<td style='text-align: center'>18.02.2017</td>
<td style='text-align: center'>11:00</td>
<td>HC HASIČI</td>
<td>SEŠLOST</td>
<td  style='text-align: center;'><a href='?report=122'>8:1</a>  </td>
</tr>

<tr>
<td style='text-align: center'>123</td>
<td style='text-align: center'>18.02.2017</td>
<td style='text-align: center'>12:30</td>
<td>HC SRŠNI ZÁMĚL</td>
<td>STARÁ GARDA</td>
<td  style='text-align: center;'><a href='?report=123'>3:6</a>  </td>
</tr>

<tr>
<td style='text-align: center'>124</td>
<td style='text-align: center'>19.02.2017</td>
<td style='text-align: center'>09:30</td>
<td>VYSOKÉ MÝTO</td>
<td>SKGB BĚSTOVICE</td>
<td  style='text-align: center;'><a href='?report=124'>2:10</a>  </td>
</tr>

<tr>
<td style='text-align: center'>125</td>
<td style='text-align: center'>19.02.2017</td>
<td style='text-align: center'>11:00</td>
<td>TYGŘI CHOCEŇ</td>
<td>TJ SOKOL TISOVÁ</td>
<td  style='text-align: center;'><a href='?report=125'>1:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>126</td>
<td style='text-align: center'>19.02.2017</td>
<td style='text-align: center'>12:30</td>
<td>VLCI SUDISLAV</td>
<td>KUJEBÁCI</td>
<td  style='text-align: center;'><a href='?report=126'>2:6</a>  </td>
</tr>

<tr><td style='background: #CCC' colspan='2'><b style='padding-left: 10px'>22. kolo</b></td></tr><tr>
<td style='text-align: center'>127</td>
<td style='text-align: center'>24.02.2017</td>
<td style='text-align: center'>19:15</td>
<td>SKGB BĚSTOVICE</td>
<td>HC HASIČI</td>
<td  style='text-align: center;'><a href='?report=127'>6:2</a>  </td>
</tr>

<tr>
<td style='text-align: center'>128</td>
<td style='text-align: center'>24.02.2017</td>
<td style='text-align: center'>20:45</td>
<td>BEJCI KOLDÍN</td>
<td>HC SRŠNI ZÁMĚL</td>
<td  style='text-align: center;'><a href='?report=128'>5:7</a>  </td>
</tr>

<tr>
<td style='text-align: center'>129</td>
<td style='text-align: center'>25.02.2017</td>
<td style='text-align: center'>07:30</td>
<td>STARÁ GARDA</td>
<td>TYGŘI CHOCEŇ</td>
<td  style='text-align: center;'><a href='?report=129'>8:5</a>  </td>
</tr>

<tr>
<td style='text-align: center'>130</td>
<td style='text-align: center'>26.02.2017</td>
<td style='text-align: center'>08:30</td>
<td>SEŠLOST</td>
<td>POHODA</td>
<td  style='text-align: center;'><a href='?report=130'>0:11</a>  </td>
</tr>

<tr>
<td style='text-align: center'>131</td>
<td style='text-align: center'>26.02.2017</td>
<td style='text-align: center'>19:00</td>
<td>KUJEBÁCI</td>
<td>VYSOKÉ MÝTO</td>
<td  style='text-align: center;'><a href='?report=131'>13:0</a>  </td>
</tr>

<tr>
<td style='text-align: center'>132</td>
<td style='text-align: center'>26.02.2017</td>
<td style='text-align: center'>20:30</td>
<td>TJ SOKOL TISOVÁ</td>
<td>VLCI SUDISLAV</td>
<td  style='text-align: center;'><a href='?report=132'>3:1</a>  </td>
</tr>

</table>
</div>

</div>
    <div id="footer">
      <p>
      <a href="index.php">Home</a> |
      <a href="zapasy.php">Zápasy</a> |
      <a href="tabulky.php">Tabulky</a> |
      <a href="statistiky.php">Statistiky</a> |
      <a href="tresty.php">Tresty</a> |
      <a href="transfery.php">Transfery</a> |
      <a href="zobraz.php?stranka=soutezni_rad">Soutěžní řád</a> |
      <a href="zobraz.php?stranka=historie">Historie</a> |
      <a href="zobraz.php?stranka=kontakty">Kontakty</a>

      <p>Copyright &copy; 2015 - 2022 | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.html5webtemplates.co.uk">HTML templates</a></p>
    </div>
    <p>&nbsp; </p>

    <div style="text-align: center">
      <span class="logo_zoom"><a href="https://link.blockfolio.com/9dzp/8d3af34e"><img src="reklamy/05.png" alt="" border="0" /></a></span> &nbsp;
      <span class="logo_zoom"><a href="http://www.onlajny.com/"><img src="reklamy/01.png" alt="" border="0" /></a></span> &nbsp;
      <span class="logo_zoom"><a href="http://clicks.fortunaaffiliates.com/afs/come.php?id=1150&cid=1770&atype=1&ctgid=3"><img src="reklamy/02.png" alt="" border="0" /></a></span> &nbsp;
      <span class="logo_zoom"><a href="http://www.klubweb.cz/"><img src="reklamy/03.png" alt="" border="0" /></a></span>
      <br /><br />
    </div>
  </div>
</body>
</html>
`;

export const MATCH_LIST_DATA: AmateurHockeyBotMatchListResponse = {
  ok: true,
  data: [
    { id: '1', teamHome: 'POHODA', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-09-24T12:30:00.000Z' },
    { id: '2', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-09-24T14:00:00.000Z' },
    { id: '3', teamHome: 'BEJCI KOLDÍN', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-09-24T15:30:00.000Z' },
    { id: '4', teamHome: 'KUJEBÁCI', teamAway: 'HC HASIČI', datetime: '2016-09-25T08:15:00.000Z' },
    { id: '5', teamHome: 'SKGB BĚSTOVICE', teamAway: 'SEŠLOST', datetime: '2016-09-25T09:45:00.000Z' },
    { id: '6', teamHome: 'STARÁ GARDA', teamAway: 'VLCI SUDISLAV', datetime: '2016-09-25T11:15:00.000Z' },
    { id: '7', teamHome: 'SKGB BĚSTOVICE', teamAway: 'KUJEBÁCI', datetime: '2016-09-28T08:00:00.000Z' },
    { id: '8', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'POHODA', datetime: '2016-09-28T09:30:00.000Z' },
    { id: '9', teamHome: 'VYSOKÉ MÝTO', teamAway: 'STARÁ GARDA', datetime: '2016-09-28T13:30:00.000Z' },
    { id: '10', teamHome: 'VLCI SUDISLAV', teamAway: 'BEJCI KOLDÍN', datetime: '2016-09-28T15:00:00.000Z' },
    { id: '11', teamHome: 'SEŠLOST', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-09-28T16:30:00.000Z' },
    { id: '12', teamHome: 'HC HASIČI', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-09-28T18:00:00.000Z' },
    { id: '13', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-10-01T11:00:00.000Z' },
    { id: '14', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-10-01T12:30:00.000Z' },
    { id: '15', teamHome: 'BEJCI KOLDÍN', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-10-02T07:00:00.000Z' },
    { id: '16', teamHome: 'POHODA', teamAway: 'VLCI SUDISLAV', datetime: '2016-10-02T08:30:00.000Z' },
    { id: '17', teamHome: 'STARÁ GARDA', teamAway: 'HC HASIČI', datetime: '2016-10-02T10:00:00.000Z' },
    { id: '18', teamHome: 'KUJEBÁCI', teamAway: 'SEŠLOST', datetime: '2016-10-02T11:30:00.000Z' },
    { id: '19', teamHome: 'VLCI SUDISLAV', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-10-08T08:00:00.000Z' },
    { id: '20', teamHome: 'SKGB BĚSTOVICE', teamAway: 'STARÁ GARDA', datetime: '2016-10-08T09:30:00.000Z' },
    { id: '21', teamHome: 'KUJEBÁCI', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-10-08T12:15:00.000Z' },
    { id: '22', teamHome: 'SEŠLOST', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-10-08T13:45:00.000Z' },
    { id: '23', teamHome: 'HC HASIČI', teamAway: 'BEJCI KOLDÍN', datetime: '2016-10-09T11:00:00.000Z' },
    { id: '24', teamHome: 'VYSOKÉ MÝTO', teamAway: 'POHODA', datetime: '2016-10-09T12:30:00.000Z' },
    { id: '25', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'VLCI SUDISLAV', datetime: '2016-10-15T08:00:00.000Z' },
    { id: '26', teamHome: 'STARÁ GARDA', teamAway: 'KUJEBÁCI', datetime: '2016-10-15T09:30:00.000Z' },
    { id: '27', teamHome: 'POHODA', teamAway: 'HC HASIČI', datetime: '2016-10-15T12:15:00.000Z' },
    { id: '28', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-10-16T09:30:00.000Z' },
    { id: '29', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'SEŠLOST', datetime: '2016-10-16T11:00:00.000Z' },
    { id: '30', teamHome: 'BEJCI KOLDÍN', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-10-16T12:30:00.000Z' },
    { id: '31', teamHome: 'VYSOKÉ MÝTO', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-10-22T13:15:00.000Z' },
    { id: '32', teamHome: 'SEŠLOST', teamAway: 'VLCI SUDISLAV', datetime: '2016-10-23T06:45:00.000Z' },
    { id: '33', teamHome: 'KUJEBÁCI', teamAway: 'BEJCI KOLDÍN', datetime: '2016-10-23T12:45:00.000Z' },
    { id: '34', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'STARÁ GARDA', datetime: '2016-10-23T14:15:00.000Z' },
    { id: '35', teamHome: 'SKGB BĚSTOVICE', teamAway: 'POHODA', datetime: '2016-10-23T15:45:00.000Z' },
    { id: '36', teamHome: 'HC HASIČI', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-10-23T17:15:00.000Z' },
    { id: '37', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'HC HASIČI', datetime: '2016-10-29T12:30:00.000Z' },
    { id: '38', teamHome: 'VLCI SUDISLAV', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-10-30T09:00:00.000Z' },
    { id: '39', teamHome: 'BEJCI KOLDÍN', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-10-30T10:30:00.000Z' },
    { id: '40', teamHome: 'STARÁ GARDA', teamAway: 'SEŠLOST', datetime: '2016-10-30T12:00:00.000Z' },
    { id: '41', teamHome: 'POHODA', teamAway: 'KUJEBÁCI', datetime: '2016-10-30T13:30:00.000Z' },
    { id: '42', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-10-30T15:00:00.000Z' },
    { id: '43', teamHome: 'HC HASIČI', teamAway: 'VLCI SUDISLAV', datetime: '2016-11-05T07:30:00.000Z' },
    { id: '44', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'POHODA', datetime: '2016-11-05T09:00:00.000Z' },
    { id: '45', teamHome: 'KUJEBÁCI', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-11-05T10:30:00.000Z' },
    { id: '46', teamHome: 'SKGB BĚSTOVICE', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-11-05T15:30:00.000Z' },
    { id: '47', teamHome: 'SEŠLOST', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-11-05T17:00:00.000Z' },
    { id: '48', teamHome: 'STARÁ GARDA', teamAway: 'BEJCI KOLDÍN', datetime: '2016-11-06T07:45:00.000Z' },
    { id: '49', teamHome: 'VYSOKÉ MÝTO', teamAway: 'HC HASIČI', datetime: '2016-11-11T19:30:00.000Z' },
    { id: '50', teamHome: 'VLCI SUDISLAV', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-11-11T21:00:00.000Z' },
    { id: '51', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'KUJEBÁCI', datetime: '2016-11-13T07:30:00.000Z' },
    { id: '52', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-11-13T10:15:00.000Z' },
    { id: '53', teamHome: 'POHODA', teamAway: 'STARÁ GARDA', datetime: '2016-11-13T11:45:00.000Z' },
    { id: '54', teamHome: 'BEJCI KOLDÍN', teamAway: 'SEŠLOST', datetime: '2016-11-13T19:15:00.000Z' },
    { id: '55', teamHome: 'BEJCI KOLDÍN', teamAway: 'POHODA', datetime: '2016-11-19T07:30:00.000Z' },
    { id: '56', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-11-19T09:00:00.000Z' },
    { id: '57', teamHome: 'SEŠLOST', teamAway: 'HC HASIČI', datetime: '2016-11-19T10:30:00.000Z' },
    { id: '58', teamHome: 'SKGB BĚSTOVICE', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-11-20T07:30:00.000Z' },
    { id: '59', teamHome: 'KUJEBÁCI', teamAway: 'VLCI SUDISLAV', datetime: '2016-11-20T10:15:00.000Z' },
    { id: '60', teamHome: 'STARÁ GARDA', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-11-20T11:45:00.000Z' },
    { id: '61', teamHome: 'VYSOKÉ MÝTO', teamAway: 'KUJEBÁCI', datetime: '2016-11-26T06:30:00.000Z' },
    { id: '62', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'BEJCI KOLDÍN', datetime: '2016-11-26T15:30:00.000Z' },
    { id: '63', teamHome: 'HC HASIČI', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-11-26T17:00:00.000Z' },
    { id: '64', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'STARÁ GARDA', datetime: '2016-11-27T06:00:00.000Z' },
    { id: '65', teamHome: 'VLCI SUDISLAV', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-11-27T07:30:00.000Z' },
    { id: '66', teamHome: 'POHODA', teamAway: 'SEŠLOST', datetime: '2016-11-27T09:00:00.000Z' },
    { id: '67', teamHome: 'SEŠLOST', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-12-03T07:00:00.000Z' },
    { id: '68', teamHome: 'HC HASIČI', teamAway: 'KUJEBÁCI', datetime: '2016-12-03T08:30:00.000Z' },
    { id: '69', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'POHODA', datetime: '2016-12-03T10:00:00.000Z' },
    { id: '70', teamHome: 'VYSOKÉ MÝTO', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-12-03T11:30:00.000Z' },
    { id: '71', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'BEJCI KOLDÍN', datetime: '2016-12-03T16:30:00.000Z' },
    { id: '72', teamHome: 'VLCI SUDISLAV', teamAway: 'STARÁ GARDA', datetime: '2016-12-04T15:15:00.000Z' },
    { id: '73', teamHome: 'KUJEBÁCI', teamAway: 'SKGB BĚSTOVICE', datetime: '2016-12-09T21:00:00.000Z' },
    { id: '74', teamHome: 'BEJCI KOLDÍN', teamAway: 'VLCI SUDISLAV', datetime: '2016-12-10T07:30:00.000Z' },
    { id: '75', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'SEŠLOST', datetime: '2016-12-11T07:00:00.000Z' },
    { id: '76', teamHome: 'POHODA', teamAway: 'TYGŘI CHOCEŇ', datetime: '2016-12-11T08:30:00.000Z' },
    { id: '77', teamHome: 'STARÁ GARDA', teamAway: 'VYSOKÉ MÝTO', datetime: '2016-12-11T10:00:00.000Z' },
    { id: '78', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'HC HASIČI', datetime: '2016-12-11T11:30:00.000Z' },
    { id: '79', teamHome: 'VLCI SUDISLAV', teamAway: 'POHODA', datetime: '2016-12-17T06:30:00.000Z' },
    { id: '80', teamHome: 'VYSOKÉ MÝTO', teamAway: 'BEJCI KOLDÍN', datetime: '2016-12-17T12:00:00.000Z' },
    { id: '81', teamHome: 'SKGB BĚSTOVICE', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2016-12-18T06:15:00.000Z' },
    { id: '82', teamHome: 'HC HASIČI', teamAway: 'STARÁ GARDA', datetime: '2016-12-18T07:45:00.000Z' },
    { id: '83', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-12-18T15:15:00.000Z' },
    { id: '84', teamHome: 'SEŠLOST', teamAway: 'KUJEBÁCI', datetime: '2016-12-18T16:45:00.000Z' },
    { id: '85', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'KUJEBÁCI', datetime: '2017-01-07T06:45:00.000Z' },
    { id: '86', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'SEŠLOST', datetime: '2017-01-07T08:15:00.000Z' },
    { id: '87', teamHome: 'STARÁ GARDA', teamAway: 'SKGB BĚSTOVICE', datetime: '2017-01-07T15:30:00.000Z' },
    { id: '88', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'VLCI SUDISLAV', datetime: '2017-01-07T17:00:00.000Z' },
    { id: '89', teamHome: 'BEJCI KOLDÍN', teamAway: 'HC HASIČI', datetime: '2017-01-08T07:45:00.000Z' },
    { id: '90', teamHome: 'POHODA', teamAway: 'VYSOKÉ MÝTO', datetime: '2017-01-08T17:45:00.000Z' },
    { id: '91', teamHome: 'SEŠLOST', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2017-01-10T19:15:00.000Z' },
    { id: '92', teamHome: 'KUJEBÁCI', teamAway: 'STARÁ GARDA', datetime: '2017-01-11T19:45:00.000Z' },
    { id: '93', teamHome: 'VLCI SUDISLAV', teamAway: 'TYGŘI CHOCEŇ', datetime: '2017-01-12T19:15:00.000Z' },
    { id: '94', teamHome: 'SKGB BĚSTOVICE', teamAway: 'BEJCI KOLDÍN', datetime: '2017-01-12T20:45:00.000Z' },
    { id: '95', teamHome: 'VYSOKÉ MÝTO', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2017-01-14T06:30:00.000Z' },
    { id: '96', teamHome: 'HC HASIČI', teamAway: 'POHODA', datetime: '2017-01-15T06:30:00.000Z' },
    { id: '97', teamHome: 'STARÁ GARDA', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2017-01-20T20:45:00.000Z' },
    { id: '98', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'HC HASIČI', datetime: '2017-01-21T07:30:00.000Z' },
    { id: '99', teamHome: 'VLCI SUDISLAV', teamAway: 'SEŠLOST', datetime: '2017-01-21T09:00:00.000Z' },
    { id: '100', teamHome: 'BEJCI KOLDÍN', teamAway: 'KUJEBÁCI', datetime: '2017-01-21T10:30:00.000Z' },
    { id: '101', teamHome: 'POHODA', teamAway: 'SKGB BĚSTOVICE', datetime: '2017-01-22T17:30:00.000Z' },
    { id: '102', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'VYSOKÉ MÝTO', datetime: '2017-01-22T19:00:00.000Z' },
    { id: '103', teamHome: 'SEŠLOST', teamAway: 'STARÁ GARDA', datetime: '2017-01-28T15:30:00.000Z' },
    { id: '104', teamHome: 'SKGB BĚSTOVICE', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2017-01-28T17:00:00.000Z' },
    { id: '105', teamHome: 'VYSOKÉ MÝTO', teamAway: 'VLCI SUDISLAV', datetime: '2017-01-29T15:15:00.000Z' },
    { id: '106', teamHome: 'KUJEBÁCI', teamAway: 'POHODA', datetime: '2017-01-29T16:45:00.000Z' },
    { id: '107', teamHome: 'HC HASIČI', teamAway: 'TYGŘI CHOCEŇ', datetime: '2017-01-29T18:15:00.000Z' },
    { id: '108', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'BEJCI KOLDÍN', datetime: '2017-01-29T19:45:00.000Z' },
    { id: '109', teamHome: 'BEJCI KOLDÍN', teamAway: 'STARÁ GARDA', datetime: '2017-02-03T19:30:00.000Z' },
    { id: '110', teamHome: 'VYSOKÉ MÝTO', teamAway: 'SEŠLOST', datetime: '2017-02-04T06:30:00.000Z' },
    { id: '111', teamHome: 'POHODA', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2017-02-05T07:45:00.000Z' },
    { id: '112', teamHome: 'VLCI SUDISLAV', teamAway: 'HC HASIČI', datetime: '2017-02-05T09:15:00.000Z' },
    { id: '113', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'KUJEBÁCI', datetime: '2017-02-05T18:30:00.000Z' },
    { id: '114', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'SKGB BĚSTOVICE', datetime: '2017-02-05T20:00:00.000Z' },
    { id: '115', teamHome: 'SEŠLOST', teamAway: 'BEJCI KOLDÍN', datetime: '2017-02-10T19:30:00.000Z' },
    { id: '116', teamHome: 'STARÁ GARDA', teamAway: 'POHODA', datetime: '2017-02-10T21:00:00.000Z' },
    { id: '117', teamHome: 'HC HASIČI', teamAway: 'VYSOKÉ MÝTO', datetime: '2017-02-11T07:00:00.000Z' },
    { id: '118', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2017-02-11T08:30:00.000Z' },
    { id: '119', teamHome: 'SKGB BĚSTOVICE', teamAway: 'VLCI SUDISLAV', datetime: '2017-02-12T07:00:00.000Z' },
    { id: '120', teamHome: 'KUJEBÁCI', teamAway: 'TYGŘI CHOCEŇ', datetime: '2017-02-12T08:30:00.000Z' },
    { id: '121', teamHome: 'POHODA', teamAway: 'BEJCI KOLDÍN', datetime: '2017-02-17T19:45:00.000Z' },
    { id: '122', teamHome: 'HC HASIČI', teamAway: 'SEŠLOST', datetime: '2017-02-18T10:00:00.000Z' },
    { id: '123', teamHome: 'HC SRŠNI ZÁMĚL', teamAway: 'STARÁ GARDA', datetime: '2017-02-18T11:30:00.000Z' },
    { id: '124', teamHome: 'VYSOKÉ MÝTO', teamAway: 'SKGB BĚSTOVICE', datetime: '2017-02-19T08:30:00.000Z' },
    { id: '125', teamHome: 'TYGŘI CHOCEŇ', teamAway: 'TJ SOKOL TISOVÁ', datetime: '2017-02-19T10:00:00.000Z' },
    { id: '126', teamHome: 'VLCI SUDISLAV', teamAway: 'KUJEBÁCI', datetime: '2017-02-19T11:30:00.000Z' },
    { id: '127', teamHome: 'SKGB BĚSTOVICE', teamAway: 'HC HASIČI', datetime: '2017-02-24T18:15:00.000Z' },
    { id: '128', teamHome: 'BEJCI KOLDÍN', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2017-02-24T19:45:00.000Z' },
    { id: '129', teamHome: 'STARÁ GARDA', teamAway: 'TYGŘI CHOCEŇ', datetime: '2017-02-25T06:30:00.000Z' },
    { id: '130', teamHome: 'SEŠLOST', teamAway: 'POHODA', datetime: '2017-02-26T07:30:00.000Z' },
    { id: '131', teamHome: 'KUJEBÁCI', teamAway: 'VYSOKÉ MÝTO', datetime: '2017-02-26T18:00:00.000Z' },
    { id: '132', teamHome: 'TJ SOKOL TISOVÁ', teamAway: 'VLCI SUDISLAV', datetime: '2017-02-26T19:30:00.000Z' }
  ]
};
