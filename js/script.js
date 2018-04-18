// JavaScript Document

function redeemCode(promoCode,licenseNumber,theme)
{
	if(!licenseNumber || 0 === licenseNumber.length)
	{ alert("License Number cannot be empty."); }
	
	else
	{
		if(!promoCode || 0 === promoCode.length)
		{ alert("Promo code cannot be empty."); }	
		else
		{
			var url = "http://reststaging.simplyture.com/api/v1/PromoCodeRedeem";
			var apiKey = "BF68FB33-41A2-491E-8330-65472156FFF1";
			var xhr = new XMLHttpRequest();
		
			xhr.open('POST',url, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.setRequestHeader('Authorization', 'Basic ' + btoa( apiKey + ':' + apiKey ));
			xhr.send(JSON.stringify({
    			BusinessUserID: 122, 
				ParkingTransactionID: 247447, 
				PromoCode: promoCode, 
				LocationUsed: 'nowhere'
				}));
				
			xhr.onreadystatechange = function() {
    			if(xhr.readyState == 4) 
				{ 
					if(xhr.status == 200) 
					{
        				var data = JSON.parse(xhr.responseText);
  						alert(data.ReturnCode);
						if(data.ReturnCode > 0)
							{NavigateToSuccess(theme);}
						else
							{NavigateToError(theme);}
					}
					else
					{
						NavigateToError(theme);
					}
					xhr.abort();
    			}
			}  		
		}
	}
}

function NavigateToSuccess(theme) 
{
	if(theme === "light")
   		{ location.href = 'lightSuccess.html'}
	else
		{ location.href = 'DarkSuccess.html'}
}

function NavigateToError(theme) 
{
	if(theme === "light")
   		{ location.href = 'lightError.html'}
	else
		{ location.href = 'DarkError.html'}
}

function NavigateToPage(relativeLocation) 
{
   location.href = relativeLocation;
}