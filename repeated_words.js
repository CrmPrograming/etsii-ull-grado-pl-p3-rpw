"use strict"; // Use ECMAScript 5 strict mode in browsers that support it 
 
$(document).ready(function() {
   $("#fileinput").change(calculate); 
}); 

function generateOutput(contents) { 
  return contents.replace(/\W(\w+)\W(\1)/g,' $2'); 
  
} 


function calculate(evt) { 
  var f = evt.target.files[0];  
  var contents = ''; 
 
  if (f) { 
    var r = new FileReader(); 
    r.onload = function(e) {  
      contents = e.target.result;
      var escaped  = escapeHtml(contents); 
	  alert(escaped);
      var outdiv = document.getElementById("out"); 
      outdiv.className = 'unhidden'; 
      finaloutput.innerHTML = generateOutput(escaped); 
      initialinput.innerHTML = escaped; 
 
    } 
    r.readAsText(f); 
  } else {  
    alert("Failed to load file"); 
  } 
} 

var entityMap = { 
    "&": "&amp;", 
    "<": "&lt;", 
    ">": "&gt;", 
    '"': '&quot;', 
    "'": '&#39;', 
    "/": '&#x2F;' 
}; 
   
function escapeHtml(string) { 
  return String(string).replace(/&|<|>|"|'|\//g, function (s) { 
    return entityMap[s]; 
  });
}
