<%@ page language="java" contentType="text/html; charset=Utf8" pageEncoding="Utf8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="tag" tagdir="/WEB-INF/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<tag:head title="THE BRAIN WARS" />
<div class="page">
			<div class="header">
				<p style="font-size: 52px;">Hello stranger!</p>
				<p style="font-size: 52px;">and welcome to</p>
				<p style="font-size: 145px;">THE BRAIN WARS</p>
			</div>
			<form class="entry"method="post" action="j_spring_security_check">
				<P>What is your name?</P>
				<input type="text" class="user-name" name="j_username" placeholder="   user name"/>
				<input type="password" class="user-password" name="j_password" placeholder="   password"/>
				<input type="submit" class="log-in" value="let's go"/>
			</form>
		</div>
<tag:footer />
</html>