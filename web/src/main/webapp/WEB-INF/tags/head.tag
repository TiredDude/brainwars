<%@ tag language="java" pageEncoding="utf8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 

<%@ attribute name="title" required="true" type="java.lang.String" description="page title" %>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>${title}</title>
<!-- <link rel="stylesheet" href="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.css"> -->
<link rel="stylesheet" type="text/css" href="/brainwars/resources/css/style.css"></link>
<link rel="stylesheet" type="text/css" href="/brainwars/resources/css/jquery-ui-1.9.2.custom.css"></link>
<link rel="stylesheet" type="text/css" href="/brainwars/resources/css/theme_dark.css"></link>
<link rel="stylesheet" type="text/css" href="/brainwars/resources/css/theme_light.css"></link>
<link rel="stylesheet" type="text/css" href="/brainwars/resources/css/login.css"></link>
<style type="text/css"></style>
</head>

<!-- <audio autoplay="autoplay" loop="loop" id="audio_empire"> -->
<!--   <source src="/brainwars/resources/audio/empire.mp3" type="audio/mpeg"></source> -->
<!-- </audio> -->
<!-- <video id="video_rain" loop="loop" preload="auto" autoplay="autoplay"> -->
<!--     <source src="/brainwars/resources/video/rain.webm" type='video/webm' ></source> -->
<!-- </video> -->