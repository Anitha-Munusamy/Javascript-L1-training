window.onload=function(){
var elem=document.getElementById('test')
elem.addEventListener('click',function(){

var str = document.getElementById('strintxt').value;
var count = 0, total_vowels="";
for (var i = 0; i < str.length; i++) {
if (str.charAt(i).match(/[a-zA-Z]/) != null) {
if (str.charAt(i).match(/[aeiouAEIOU]/))
{
total_vowels = total_vowels +str.charAt(i);
count++;
}
}
}
alert(total_vowels);
alert( count);
},true);
}