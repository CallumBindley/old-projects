<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Identity.aspx.cs" Inherits="myFirstWebApp.Identity" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body style="height: 20px">
    <form id="form1" runat="server">
        <div>
        	What is Your First name ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<asp:TextBox ID="firstNameBox" runat="server"></asp:TextBox>
			<br />
			<br />
			What is Your Last name ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:TextBox ID="lastNameBox" runat="server"></asp:TextBox>
			<br />
			<br />
			<asp:Button ID="okButton" runat="server" OnClick="okButton_Click" Text="Click Me Please" />
			<br />
			<br />
			<asp:Label ID="resultLabel" runat="server"></asp:Label>
        </div>
    </form>
</body>
</html>
