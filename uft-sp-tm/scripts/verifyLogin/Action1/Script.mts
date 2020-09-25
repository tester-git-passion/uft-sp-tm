Call Login()

'Verify username
x = W.WebElement("xpath:=//a[@id='nameofuser']").GetROProperty("name")

If Instr(x,userName) > 0 Then
	Reporter.ReportEvent micPass , "User Name displayed is correct" , ""
Else
	Reporter.ReportEvent micFail , "User Name displayed is not correct" , ""
End If

Call Logout()

