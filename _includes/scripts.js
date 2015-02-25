// Add thousands separators to numbers
var numbers = document.getElementsByClassName("separate-thousands");
for (var i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = numbers[i].innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46210978-1', 'auto');
ga('send', 'pageview');