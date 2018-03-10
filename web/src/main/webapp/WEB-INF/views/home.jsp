<%@ page language="java" contentType="text/html; charset=Utf8"
	pageEncoding="Utf8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tag" tagdir="/WEB-INF/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<tag:head title="home" />

<body class="theme-dark">
	<div id="page-wrapper">
		<div class="container">
			<div class="header">
				<h1>Brain Wars</h1>
			</div>
			<ul class="navigation">
				<li title="game" class="selected"><a href="#game"><span>Game</span></a></li>
				<li title="community"><a href="#community"><span>Community</span></a></li>
				<li title="news"><a href="#news"><span>News</span></a></li>
				<li title="forum"><a href="#forum"><span>Forum</span></a></li>
				<li title="market"><a href="#market"><span>Market</span></a></li>
			</ul>
	
			<div class="content game-page-content">
				<jsp:include page="content/shadows.jsp" />
			</div>
	
		</div>
		
		<jsp:include page="common/interactive.jsp" />
	
	</div>
	<div id="dialog-container">
	</div>
	<tag:footer />
</body>
</html>