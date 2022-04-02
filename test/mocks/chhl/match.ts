import { AmateurHockeyBotMatchPlayerPosition, AmateurHockeyBotMatchResponse } from '../../../src/types';

export const MATCH_HTML = `

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

	<div style='float: right; margin: 6px 55px 12px 0'><a href='javascript: history.go(-1)'>zpět k přehledu utkání</a></div>
        <table style='width: 548px; border: 1px solid black'>
          <tr>
            <td style='width: 224px; font-weight: 700; font-size: 16px; color: #122530; text-align: center'>POHODA</td>
            <td style='width: 100px; font-weight: 700; font-size: 28px; color: #B60000; text-align: center; line-height: 32px;'>8:2</td>
            <td style='width: 224px; font-weight: 700; font-size: 16px; color: #122530; text-align: center'>HC SRŠNI ZÁMĚL</td>
          </tr>
        </table>

        <div style='text-align: center; margin: -12px auto 26px auto; background: gray; width: 548px; padding: 18px 0 18px 0; background: #3B3B3B;'>
        <a href='https://link.blockfolio.com/9dzp/8d3af34e' target=_self>
        <img src='reklamy/ftx_banner.png' width='468' height='60' border=0>
        </a>
        </div>

        <table style='margin-top: -10px'>
          <tr>
            <th colspan='3' style='text-align: center'>1. kolo | 24.09.2016 | 14:30</th>
          </tr>
          <tr>
            <td style='vertical-align: middle; text-align: right; padding-right: 10px'><img src='admin/image/udalosti_cas.png' /></td>
            <td style='text-align: center'>00:01</td>
            <td>Utkání právě začalo</td>
          </tr>

              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Tomáš ZAVŘEL</b> </div>
                  <div style='float: right; margin-top: 3px'>Petr ŠEDA, Robert ŠVEC
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>05:46</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'>Petr ŠEDA</div>
                  <div style='float: right; margin-top: 3px'>trest 2 min.</div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>06:10</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>07:45</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'>Jiří SRŠEŇ</div>
                  <div style='float: left; margin-top: 3px'>trest 2 min.</div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Tomáš ZAVŘEL</b> </div>
                  <div style='float: right; margin-top: 3px'>Miroslav st. VÁNĚ, Robert ŠVEC
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>10:19</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Tomáš ZAVŘEL</b> </div>
                  <div style='float: right; margin-top: 3px'>Petr ŠEDA, Robert ŠVEC
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>11:53</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Petr ŠEDA</b> </div>
                  <div style='float: right; margin-top: 3px'>Robert ŠVEC
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>12:07</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Tomáš ZAVŘEL</b> </div>
                  <div style='float: right; margin-top: 3px'>Petr ŠEDA
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>16:18</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>17:53</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'>Jaroslav KEPRTA</div>
                  <div style='float: left; margin-top: 3px'>trest 2 min.</div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>19:24</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'>Filip VEČEŘ</div>
                  <div style='float: left; margin-top: 3px'>trest 2 min.</div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Josef SEJTKO</b> </div>
                  <div style='float: right; margin-top: 3px'>bez asistence
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>22:04</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>24:37</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'>Tomáš DIBLIK</div>
                  <div style='float: left; margin-top: 3px'>trest 2 min.</div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Petr ŠEDA</b> </div>
                  <div style='float: right; margin-top: 3px'>Tomáš ZAVŘEL, František LÁSKA
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>29:00</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>32:05</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'>Tomáš DIBLIK</div>
                  <div style='float: left; margin-top: 3px'>trest 2 min.</div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>32:17</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'> <b>Jaroslav KEPRTA</b> </div>
                  <div style='float: left; margin-top: 3px'>Leoš DOSTÁL
                  </div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'>Josef SEJTKO</div>
                  <div style='float: right; margin-top: 3px'>trest 2 min.</div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>34:21</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_trest.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'>Leoš st. KAŇKA</div>
                  <div style='float: right; margin-top: 3px'>trest 2 min.</div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: pink'>35:06</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle'> </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>35:34</td>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: left; margin-right: 10px; margin-left: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: left; vertical-align: top; width: 200px; text-align: left'> <b>David BABÁK</b> </div>
                  <div style='float: left; margin-top: 3px'>Tomáš DIBLIK, Filip VEČEŘ
                  </div>
                </td>
              </tr>
              <tr>
                <td style='width: 250px; vertical-align: middle; text-align: right;'>
                  <div style='float: right; margin-left: 10px; margin-right: 7px; padding-top: 7px'><img src='admin/image/udalosti_branka.png' /></div>
                  <div style='float: right; vertical-align: top; width: 195px'> <b>Petr ŠEDA</b> </div>
                  <div style='float: right; margin-top: 3px'>Tomáš ZAVŘEL
                  </div>
                </td>
                <td style='width: 48px; vertical-align: middle; text-align: center; background: lightgreen'>37:30</td>
                <td style='width: 250px; vertical-align: middle'> </td>
              </tr>
            <tr>
              <td style='vertical-align: middle; text-align: right; padding-right: 10px'><img src='admin/image/udalosti_cas.png' /></td>
              <td style='text-align: center'>40:00</td>
              <td>Konec utkání</td>
            </tr>
          </table><div style='width: 548px; margin: -20px auto 0 auto;'>
      <table style='width: 270px; float: left'>
        <tr>
          <th colspan='7' style='text-align: center'>POHODA</th>
        </tr>
        <tr style='font-weight: bold'>
          <td style='text-align: center'>#</td>
          <td style='text-align: center'>P</td>
          <td>Hráč</td>
          <td style='text-align: center'>G</td>
          <td style='text-align: center'>A</td>
          <td style='text-align: center'>KB</td>
          <td style='text-align: center'>TM</td>
        </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>44</td>
            <td style='text-align: center'>O</td>
            <td><a href='detail_hrace.php?id=102'>KAŇKA Leoš st.</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>2</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>7</td>
            <td style='text-align: center'>O</td>
            <td><a href='detail_hrace.php?id=105'>LÁSKA František</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>1</td>
            <td style='text-align: center'>1</td>
            <td style='text-align: center'>-</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>17</td>
            <td style='text-align: center'>O</td>
            <td><a href='detail_hrace.php?id=118'>VÁNĚ Miroslav st.</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>1</td>
            <td style='text-align: center'>1</td>
            <td style='text-align: center'>-</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>81</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=101'>KAŇKA Leoš ml.</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>10</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=107'>RŮŽIČKA Jiří</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>11</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=108'>SEJTKO Josef</a></td>
            <td style='text-align: center'>1</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>1</td>
            <td style='text-align: center'>2</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>13</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=109'>SIMON Lukáš</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>-</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>18</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=114'>ŠEDA Petr</a></td>
            <td style='text-align: center'>3</td>
            <td style='text-align: center'>3</td>
            <td style='text-align: center'>6</td>
            <td style='text-align: center'>2</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>53</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=115'>ŠVEC Robert</a></td>
            <td style='text-align: center'>-</td>
            <td style='text-align: center'>4</td>
            <td style='text-align: center'>4</td>
            <td style='text-align: center'>-</td>
          </tr>

          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>92</td>
            <td style='text-align: center'>U</td>
            <td><a href='detail_hrace.php?id=119'>ZAVŘEL Tomáš</a></td>
            <td style='text-align: center'>4</td>
            <td style='text-align: center'>2</td>
            <td style='text-align: center'>6</td>
            <td style='text-align: center'>-</td>
          </tr>

        <tr style='font-weight: bold'>
          <td style='text-align: center'>#</td>
          <td style='text-align: center'>P</td>
          <td>Brankář</td>
          <td colspan='2' style='text-align: center'>MIN</td>
          <td style='text-align: center'>OG</td>
          <td style='text-align: center'>TM</td>
        </tr>
          <tr style='background: #f0f5fc; padding-bottom: 5px'>
            <td style='text-align: center'>35</td>
            <td style='text-align: center'>B</td>
            <td><a href='detail_hrace.php?id=106'>MAZAL Radek</a></td>
            <td colspan='2' style='text-align: center'>40</td>
            <td style='text-align: center'>2</td>
            <td style='text-align: center'>-</td>
          </tr>
        </table>
      <table style='width: 270px; float: right'>
        <tr>
          <th colspan='7' style='text-align: center'>HC SRŠNI ZÁMĚL</th>
        </tr>
        <tr style='font-weight: bold'>
          <td style='text-align: center'>#</td>
          <td style='text-align: center'>P</td>
          <td>Hráč</td>
          <td style='text-align: center'>G</td>
          <td style='text-align: center'>A</td>
          <td style='text-align: center'>KB</td>
          <td style='text-align: center'>TM</td>
        </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>30</td>
              <td style='text-align: center'>O</td>
              <td><a href='detail_hrace.php?id=122'>DIBLIK Tomáš</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>4</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>17</td>
              <td style='text-align: center'>O</td>
              <td><a href='detail_hrace.php?id=128'>KRÁL Vlastimil</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>23</td>
              <td style='text-align: center'>O</td>
              <td><a href='detail_hrace.php?id=135'>SRŠEŇ Jiří</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>2</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>5</td>
              <td style='text-align: center'>O</td>
              <td><a href='detail_hrace.php?id=138'>ŠVEC Radek</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>16</td>
              <td style='text-align: center'>U</td>
              <td><a href='detail_hrace.php?id=121'>BABÁK David</a></td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>-</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>13</td>
              <td style='text-align: center'>U</td>
              <td><a href='detail_hrace.php?id=123'>DOSTÁL Leoš</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>-</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>8</td>
              <td style='text-align: center'>U</td>
              <td><a href='detail_hrace.php?id=125'>DYTRT Jiří</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>32</td>
              <td style='text-align: center'>U</td>
              <td><a href='detail_hrace.php?id=127'>KEPRTA Jaroslav</a></td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>2</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>21</td>
              <td style='text-align: center'>U</td>
              <td><a href='detail_hrace.php?id=131'>PETRÁŠEK Tomáš st.</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>-</td>
            </tr>

            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>10</td>
              <td style='text-align: center'>U</td>
              <td><a href='detail_hrace.php?id=141'>VEČEŘ Filip</a></td>
              <td style='text-align: center'>-</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>1</td>
              <td style='text-align: center'>2</td>
            </tr>

          <tr style='font-weight: bold'>
            <td style='text-align: center'>#</td>
            <td style='text-align: center'>P</td>
            <td>Brankář</td>
            <td colspan='2' style='text-align: center'>MIN</td>
            <td style='text-align: center'>OG</td>
            <td style='text-align: center'>TM</td>
          </tr>
            <tr style='background: #f0f5fc; padding-bottom: 5px'>
              <td style='text-align: center'>9</td>
              <td style='text-align: center'>B</td>
              <td><a href='detail_hrace.php?id=124'>DUŠEK Jan</a></td>
              <td colspan='2' style='text-align: center'>40</td>
              <td style='text-align: center'>8</td>
              <td style='text-align: center'>-</td>
            </tr>
          </table></div><div style='width: 548px; margin: 0 auto 0 auto;'>
          <table style='width: 548px; float: left; margin-top: -10px;'>
          <tr>
            <th style='text-align: center'>Rozhodčí 1</th>
            <th style='text-align: center'>Rozhodčí 2</th>
            <th style='text-align: center'>Zapisovatel</th>
          </tr>
          <tr>
            <td style='text-align: center'>Knytl Jakub</td>
            <td style='text-align: center'>Škorpil Ondřej</td>
            <td style='text-align: center'>Nepraš Jiří ml.</td>
          </tr>
          </table></div>

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

export const MATCH_DATA: AmateurHockeyBotMatchResponse = {
  ok: true,
  data: {
    info: { teamHome: 'POHODA', teamAway: 'HC SRŠNI ZÁMĚL', datetime: '2016-09-24T12:30:00.000Z' },
    results: { scoreTotalHome: 8, scoreTotalAway: 2, scoreResultHome: 'W', scoreResultAway: 'L' },
    homePlayers: [
      { jerseyNumber: 44, name: 'Kaňka Leoš St.', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER },
      { jerseyNumber: 7, name: 'Láska František', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER, assists: 1 },
      { jerseyNumber: 17, name: 'Váně Miroslav St.', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER, assists: 1 },
      { jerseyNumber: 81, name: 'Kaňka Leoš Ml.', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER },
      { jerseyNumber: 10, name: 'Růžička Jiří', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER },
      { jerseyNumber: 11, name: 'Sejtko Josef', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, goals: 1 },
      { jerseyNumber: 13, name: 'Simon Lukáš', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER },
      { jerseyNumber: 18, name: 'Šeda Petr', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, goals: 3, assists: 3 },
      { jerseyNumber: 53, name: 'Švec Robert', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, assists: 4 },
      { jerseyNumber: 92, name: 'Zavřel Tomáš', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, goals: 4, assists: 2 },
      { jerseyNumber: 35, name: 'Mazal Radek', position: AmateurHockeyBotMatchPlayerPosition.GOALKEEPER, goals: 0, assists: 0 }
    ],
    awayPlayers: [
      { jerseyNumber: 30, name: 'Diblik Tomáš', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER, assists: 1 },
      { jerseyNumber: 17, name: 'Král Vlastimil', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER },
      { jerseyNumber: 23, name: 'Sršeň Jiří', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER },
      { jerseyNumber: 5, name: 'Švec Radek', position: AmateurHockeyBotMatchPlayerPosition.DEFENDER },
      { jerseyNumber: 16, name: 'Babák David', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, goals: 1 },
      { jerseyNumber: 13, name: 'Dostál Leoš', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, assists: 1 },
      { jerseyNumber: 8, name: 'Dytrt Jiří', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER },
      { jerseyNumber: 32, name: 'Keprta Jaroslav', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, goals: 1 },
      { jerseyNumber: 21, name: 'Petrášek Tomáš St.', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER },
      { jerseyNumber: 10, name: 'Večeř Filip', position: AmateurHockeyBotMatchPlayerPosition.ATTACKER, assists: 1 },
      { jerseyNumber: 9, name: 'Dušek Jan', position: AmateurHockeyBotMatchPlayerPosition.GOALKEEPER, goals: 0, assists: 0 }
    ]
  }
};
