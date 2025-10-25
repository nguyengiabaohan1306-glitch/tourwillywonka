$(document).ready(function(){
  // Ẩn mô tả khi trang vừa tải
  $(".mota").hide();

  // Khi click vào tên lịch trình -> ẩn/hiện phần mô tả
  $(".ten").click(function(){
    $(this).next(".mota").slideToggle(500); // hiệu ứng trượt mượt
  });
});