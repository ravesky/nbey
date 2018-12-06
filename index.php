    <?php  
    require("function.php");   
?>
<!DOCTYPE html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="format-detection" content="telephone=yes"/>
<!--Declare page as mobile friendly --> 
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0"/>
<!-- Declare page as iDevice WebApp friendly -->
<meta name="apple-mobile-web-app-capable" content="yes"/>
<!-- iDevice WebApp Splash Screen, Regular Icon, iPhone, iPad, iPod Retina Icons -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/splash/splash-icon.png"> 
<!-- iPhone 3, 3Gs -->
<link rel="apple-touch-startup-image" href="images/splash/splash-screen.png" 			media="screen and (max-device-width: 320px)" /> 
<!-- iPhone 4 -->
<link rel="apple-touch-startup-image" href="images/splash/splash-screen_402x.png" 		media="(max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)" /> 
<!-- iPhone 5 -->
<link rel="apple-touch-startup-image" sizes="640x1096" href="images/splash/splash-screen_403x.png" />

<!-- Page Title -->
<title>中国科学院大学宁波华美医院
(原宁波市第二医院)</title>

<!-- /** 
* @author 作者：21号床 E-mail:301092538@qq.com 
* @version 创建时间：2018-11-24
* 类说明 宁波市第二医院 骨四 手足踝外科
*/ -->
<!-- Stylesheet Load -->
<link href="styles/style.css"				rel="stylesheet" type="text/css">
<link href="styles/framework-style.css" 	rel="stylesheet" type="text/css">
<link href="styles/framework.css" 			rel="stylesheet" type="text/css">
<link href="styles/bxslider.css"			rel="stylesheet" type="text/css">
<link href="styles/swipebox.css"			rel="stylesheet" type="text/css">
<link href="styles/icons.css"				rel="stylesheet" type="text/css">
<link href="styles/retina.css" 				rel="stylesheet" type="text/css" media="only screen and (-webkit-min-device-pixel-ratio: 2)" />


<!--Page Scripts Load -->
<!-- <script src="../../../../www.paultrifa.com/analytics/flaty.js"></script> -->
<script src="scripts/jquery.min.js"		type="text/javascript"></script>	
<script src="scripts/hammer.js"			type="text/javascript"></script>	
<script src="scripts/jquery-ui-min.js"  type="text/javascript"></script>
<script src="scripts/subscribe.js"		type="text/javascript"></script>
<script src="scripts/contact.js"		type="text/javascript"></script>
<script src="scripts/jquery.swipebox.js" type="text/javascript"></script>
<script src="scripts/bxslider.js"		type="text/javascript"></script>
<!-- <script src="scripts/colorbox.js"		type="text/javascript"></script> -->
<script src="scripts/retina.js"			type="text/javascript"></script>
<script src="scripts/custom.js"			type="text/javascript"></script>
<script src="scripts/framework.js"		type="text/javascript"></script>

</head>
<body >

<div id="preloader">
	<div id="status">
    	<p class="center-text">
			Loading the content...
            <em>Loading depends on your connection speed!</em>
        </p>
    </div>
</div>

<div class="content">

	<div class="landing-logo">
    	<img  style="display: inline;float: left;border-radius: 50%" src="images/newlogo.jpg" alt="img" wwidth="70" height="70">
        
            <h4>中国科学院大学宁波华美医院</h4>
            <h4>(原宁波市第二医院)</h3>
                
                 </div>
        <div class="welcome-text">
        <h4>欢迎光临</h3>
  
        <h4>骨四科智慧教育平台</h4>  
   
    </div>
    </div>
    
    <script language="javascript">
function getCurDate()
{
var d = new Date();
var week;
switch (d.getDay()){
case 1: week="星期一"; break;
case 2: week="星期二"; break;
case 3: week="星期三"; break;
case 4: week="星期四"; break;
case 5: week="星期五"; break;
case 6: week="星期六"; break;
default: week="星期天";
}
var years = d.getFullYear();
var month = add_zero(d.getMonth()+1);
var days = add_zero(d.getDate());
var hours = add_zero(d.getHours());
var minutes = add_zero(d.getMinutes());
var seconds=add_zero(d.getSeconds());
var ndate = years+"年"+month+"月"+days+"日 "+hours+":"+minutes+":"+seconds+" "+week;
var divT=document.getElementById("logInfo");
divT.innerHTML= ndate;
}
function add_zero(temp)
{
if(temp<10) return "0"+temp;
else return temp;
}
setInterval("getCurDate()",1000);
</script>

<p id="logInfo" style="text-align:center"></p>
    <div class="navigation-icons" >
           <!--  <div style="float:left;">     
        <p>主页</p>  
    </div> -->
        <a  class="nav-link" href="http://wxwebsite.kingtsoft.com/home/hosindex?org_code=41952983">
            <span  class="nav-icon icon-red home-nav" ></span>
            <p class="nav-text" >医院微网</p>
        </a>
        <a  class="nav-link" href="doctor.html">
            <span  class="nav-icon icon-orange doctor-nav" ></span>
            <p class="nav-text" >医生介绍</p>
        <a  class="nav-link" href="nurse.html">
            <span  class="nav-icon icon-pink nurse-nav" ></span>
            <p class="nav-text">护士介绍</p>

        <a  class="nav-link" href="about.html">
            <span  class="nav-icon icon-blue about-nav" ></span>
            <p class="nav-text">饮食指导</p>
        </a>
       
        <a  class="nav-link" href="folio.html">
            <span  class="nav-icon icon-dblue folio-nav" ></span>
            <p class="nav-text">功能锻炼</p>
        </a>
         <a  class="nav-link" href="blog.html">
            <span  class="nav-icon icon-magenta blog-nav" ></span>
            <p class="nav-text">护患故事</p>
        </a>
        <a  class="nav-link" href="video.html">
            <span  class="nav-icon icon-green video-nav" ></span>
            <p class="nav-text">真实案例</p>
        </a>
        <a  class="nav-link" href="contact.html">
            <span  class="nav-icon icon-yellow mail-nav" ></span>
            <p class="nav-text">联系我们</p>
        </a>
    </div>
    
    <div class="small-navigation-icons">
    	
        <a href="tel:0574-83870243" class="small-nav-icon phone-nav">
        </a>
        <p>骨四科VIP热线<br>0574-83870243</p>
      
        <div class="clear"></div>
    </div>


    <p class="landing-copyright copyright"> 您是第<?php echo counter();?>位访客<br>COPYRIGHT  ALL RIGHTS RESERVED</p>   
</div>

</body>
</html>































