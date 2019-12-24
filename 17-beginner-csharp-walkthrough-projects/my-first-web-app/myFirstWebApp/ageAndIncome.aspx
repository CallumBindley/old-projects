<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ageAndIncome.aspx.cs" Inherits="myFirstWebApp.ageAndIncome" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        	How old are you ?&nbsp;&nbsp;&nbsp;&nbsp;
			<asp:TextBox ID="ageInputBox" runat="server"></asp:TextBox>
			<br />
			<br />
			How much money do you have saved ?&nbsp;&nbsp;&nbsp;
			<asp:TextBox ID="moneyInputBox" runat="server"></asp:TextBox>
			<br />
			<br />
			<asp:Button ID="ageIncomeButton" runat="server" OnClick="ageIncomeButton_Click" Text="Click" />
			<br />
			<br />
			<asp:Label ID="resultAgeIncomeLabel" runat="server"></asp:Label>
        </div>
    </form>
</body>
</html>
