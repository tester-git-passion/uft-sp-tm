Call Login()

'Verify Add to cart
Browser("STORE_2").Page("STORE").Link("Laptops").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 2
Browser("STORE_2").Page("STORE").Image("sony_vaio_5").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 2
Browser("STORE_2").Page("STORE_2").Link("Add to cart").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 2
Browser("STORE_2").HandleDialog micOK @@ hightlight id_;_7734610_;_script infofile_;_ZIP::ssf4.xml_;_

Call Logout()

