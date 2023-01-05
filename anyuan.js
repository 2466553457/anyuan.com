$("#img").click(function () {
  //传入图片id时注意形式，前面一个#号
  $(this).toggleClass("min");
  $(this).toggleClass("max");
});
