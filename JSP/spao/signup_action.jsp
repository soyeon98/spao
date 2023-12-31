<%
    response.setHeader("Access-Control-Allow-Origin","*");
%>
<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "user.UserDAO" %>
<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="userDTO" class="user.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_birth"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_addr"/>
<jsp:setProperty name="userDTO" property="user_email"/>
<jsp:setProperty name="userDTO" property="user_receive"/>

<%
    UserDAO userDAO = new UserDAO();
    int result=userDAO.signup(userDTO);
%>

<%
    String jsonData = "{ \"result\": \"" + result + "\"" + "}";
    response.getWriter().write(jsonData);
%>