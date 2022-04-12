
function ANDY_Function1()
{
	var Pi = 3.1415926535897932;
	var in1 = document.getElementById('fld1').value;
	var in2 = document.getElementById('fld2').value;
	var in3 = document.getElementById('fld3').value;
    var in4 = document.getElementById('fld4').value;

	var val1 = Number(in1);
	var val2 = Number(in2);
	var val3 = Number(in3);	
    var val4 = Number(in4);	

    var A=val1-(2*val2);

    //Converting all to Meters

    var B = A * 0.0254; //ID(inches - M)
    var C = val3 * 1000; //Length

    //Breaking down the formula
    var D = Math.pow(B,2)
    var E = (Pi * D)/4; //Area or Volume per Meter

	var res=val1-(2*val2);
    var res1= C * E * 6.28981;
    var res2= (val4/6.28981) /  (E * 60);
    var res3= C /  (E * 60);
    




	document.getElementById('res').innerHTML= "Internal Diameter: <b>" + formatNumeric(res) + " inches</b>";
   
	document.getElementById('res11').innerHTML= "Line Volume: <b>" + formatNumeric(res1) + " barrel</b>";
    
	document.getElementById('res12').innerHTML= "Velocity: <b>" + formatNumeric(res2) + " m/s</b>";

    document.getElementById('res13').innerHTML= "Pig Run Duration: <b>" + formatNumeric(res3) + " minutes</b>";

	
}


function formatNumeric(strValue)
{
	strValue = strValue.toString().replace(/$|,/g,'');
	dblValue = parseFloat(strValue);
	blnSign = (dblValue == (dblValue = Math.abs(dblValue)));
	dblValue = Math.floor(dblValue*100+0.50000000001);
	intCents = dblValue%100;
	strCents = intCents.toString();
	dblValue = Math.floor(dblValue/100).toString();
	if(intCents<10)
		strCents = "0" + strCents;
	for (var i = 0; i < Math.floor((dblValue.length-(1+i))/3); i++)
		dblValue = dblValue.substring(0,dblValue.length-(4*i+3))+','+
		dblValue.substring(dblValue.length-(4*i+3));
	return (((blnSign)?'':'-') + dblValue + '.' + strCents);
}

// Convert mins to hms
function secondsToHms(res13)
{
        res13 = Number(res13)
        var h = Math.floor(res13 / 3600);
        var m = Math.floor(res13 % 3600 / 60);
        var s = Math.floor(res13 % 3600 % 60);
    
        var hDisplay = h > 0 ? h +(h == 1 ? "hour,": "hours,"): "";
        var mDisplay = m > 0 ? m +(m == 1 ? "minute,": "minutes,"): "";
        var hDisplay = s > 0 ? s +(s == 1 ? "second,": "seconds,"): "";
        return hDisplay + mDisplay + sDisplay;
}

// Convert mins to hms1
function timeConvert(res3)
{
        res4 = Number(res3)
        var h = Math.floor(res3 / 3600);
        var m = Math.floor(res3 % 3600 / 60);
        var s = Math.floor(res3 % 3600 % 60);
    
        return hDisplay + mDisplay + sDisplay;
}
		console.log(timeConvert(res3))

$("#Reset").click(function(){
	document.location.reload(true);

});