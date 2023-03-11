
setInterval(function() {
url="IOServer.htm";
$.getJSON(url, function(result){

$('#Temp_Value').text(result["Temp_Value"]+ "");
g1.refresh(result["Temp_Value"].trim());

$('#Analog_Value').text(result["Analog_Value"]+ "");
g2.refresh(result["Analog_Value"].trim());

$('#Drive_Frequency').text(result["Drive_Frequency"]+ "");
g3.refresh(result["Drive_Frequency"].trim());

$('#Operation_Hour').text(result["Operation_Hour"]+ "");
g4.refresh(result["Operation_Hour"].trim());

$('#Water_Consumption').text(result["Water_Consumption"]+ "");
g5.refresh(result["Water_Consumption"].trim());

$('#pH_Value').text(result["pH_Value"]+ " ");
g6.refresh(result["pH_Value"].trim());

$('#Drive_Status').text(result["Drive_Status"]+ "");
if(result["Drive_Status"]==0){
      $('#Status_Run').text("Stop");
      }
    else{
      $('#Status_Run').text("Running");
      }


//$('#meterChart').text(result["meterChart"]+ " ");
});

var d = new Date();
  var n = d.toLocaleDateString();
  var m = d.toLocaleTimeString();
  $('#DateNowTime').text(m);
  $('#DateNowDate').text(n);
},1000);

var g1 = new JustGage({
  id: 'g1',
  value: 0,
  min: 25,
  max: 55,
  decimals: 3,
  //showMinMax: false,
  valueMinFontSize: 10,
  label: "oC",	
//levelColors: ["#00fff6","#ff00fc","#1200ff"],	
  //textRenderer: customValue,
  symbol: '',
  pointer: true,
  gaugeWidthScale: 0.6,
  counter: true,
  relativeGaugeSize: true,
  //titleFontColor: "red",				
  valueFontColor: "blue",
  valueFontFamily: "Arial",
  labelFontColor: "black",
  //gaugeColor:	"red",
  shadowSize: "5",
  showInnerShadow: "false",
  donut: false
});
function customValueg1(val) {				
if (val < 4.5) {
return 'v-low';
      
} else if (val <= 5.5) {
return 'low';
}
else if (val <= 7.0) {
return 'normal';
}
else if (val <= 7.5) {
return 'high';
}
else {					
return 'v-high';
}
}				

var g2 = new JustGage({
  id: 'g2',
  value: 0,
  min: 0,
  max: 27648,
  //symbol: '',
  label:'0-27,648',
  pointer: true,
  pointerOptions: {
    toplength: -15,
    bottomlength: 10,
    bottomwidth: 12,
    color: '#000000',
    stroke: '#ffffff',
    stroke_width: 3,
    stroke_linecap: 'round'
  },
  gaugeWidthScale: 0.3,
  counter: true,
  relativeGaugeSize: true,
  donut: true,
  valueFontColor: "blue",
  valueFontFamily: "Arial",
  labelFontColor: "black",
});

var g3 = new JustGage({
  id: 'g3',
  value: 0,
  min: 0,
  max: 6000,
  symbol: '',
  label: 'Hz',
  pointer: true,
  gaugeWidthScale: 0.6,
  pointerOptions: {
    toplength: 10,
    bottomlength: 10,
    bottomwidth: 8,
    color: '#000'
  },
  counter: true,
  relativeGaugeSize: true,
  donut: false,
  valueFontColor: "blue",
  valueFontFamily: "Arial",
  labelFontColor: "black",
});

var g4 = new JustGage({
  id: 'g4',
  value: 0,
  min: 0,
  max: 10000,
  //symbol: ' Hrs',
  label:'0-10,000 Hrs',
  pointer: true,
  
  pointerOptions: {
    toplength: 8,
    bottomlength: -20,
    bottomwidth: 6,
    color: '#8e8e93'
  },
  gaugeWidthScale: 0.3,
  counter: true,
  relativeGaugeSize: true,
  donut: true,
  valueFontColor: "blue",
  valueFontFamily: "Arial",
  labelFontColor: "black",
});

var g5 = new JustGage({
  id: 'g5',
  value: 0,
  min: 0,
  max: 1000000,
  symbol: '',
  //label:'Gallon',
  label:'0-1,000,000 Gal',
  pointer: true,
 
  pointerOptions: {
    toplength: 8,
    bottomlength: -20,
    bottomwidth: 6,
    color: '#8e8e93'
  },
  gaugeWidthScale: 0.3,
  counter: true,
  relativeGaugeSize: true,
  donut: true,
  valueFontColor: "blue",
  valueFontFamily: "Arial",
  labelFontColor: "black",
});
var g6 = new JustGage({
  id: 'g6',
  value: 0.0,
  min: 2.0,
  max: 8.0,
  decimals: 3,
  //symbol: '',
  label:'2.00-8.00',
  textRenderer: customValueg6,
  pointer: true,
  pointerOptions: {
    toplength: 18,
    bottomlength: 5,
    bottomwidth: 6,
    color: '#8e8e93'
  },
  gaugeWidthScale: 0.6,
  counter: true,
  relativeGaugeSize: false,
  donut: false,
  valueFontColor: "blue",
  valueFontFamily: "Arial",
  labelFontColor: "black",
});
  function customValueg6(val) {				
  if (val < 3.50) {
  return 'very-low';     
  } 
  if (val < 5.50) {
  return 'low';     
  } 
  else if (val >= 5.51) {
  return 'normal';
  }
  else if (val <= 7.20) {
  return 'normal';
  }
  else if (val >= 7.21){					
  return 'high';
  }}				

  setInterval(function() {
  g1.refresh(getRandomInt(25, 55));
  g2.refresh(getRandomInt(0, 27648));
  g3.refresh(getRandomInt(0, 6000));
  g4.refresh(getRandomInt(0, 10000));
  g5.refresh(getRandomInt(0, 1000000));
  g6.refresh(getRandomInt(2, 8));
}, 5000); // update the charts every 5 seconds.

  function fn_ScreenChange(scr_1, scr_2, scr_3, scr_4, scr_5, scr_6, scr_7){
  document.getElementById(scr_1).style.visibility = 'visible';
  document.getElementById(scr_2).style.visibility = 'hidden';
  document.getElementById(scr_3).style.visibility = 'hidden';
  document.getElementById(scr_4).style.visibility = 'hidden';
  document.getElementById(scr_5).style.visibility = 'hidden';
  document.getElementById(scr_6).style.visibility = 'hidden';
  document.getElementById(scr_7).style.visibility = 'hidden';
}


