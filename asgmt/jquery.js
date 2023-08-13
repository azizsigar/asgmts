$(document).ready(function() {
    $("#img1").click(function() {
      $("#img4").hide(); // İkinci resmi görünür yap
      $(this).hide(); // İlk resmi gizle
    });$("#img3").click(function() {
      $("#img6").show(); // İkinci resmi görünür yap
      $(this).hide(); // İlk resmi gizle
    });  
    $("#img2").click(function() {
      $("#img4").show(); // İlk resmi görünür yap
      $(this).hide(); // İkinci resmi gizle
    });
  });
  