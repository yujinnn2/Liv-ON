
// tab 
$(document).ready(function () {
  $('ul.tabs li').click(function () {
    let tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
})

// color tab
$(function () {
  $('.tab_01').click(function () {
    $('.bg').addClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_02').click(function () {
    $('.bg').addClass('bg2');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_03').click(function () {
    $('.bg').addClass('bg3');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_04').click(function () {
    $('.bg').addClass('bg4');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_05').click(function () {
    $('.bg').addClass('bg5');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_06').click(function () {
    $('.bg').addClass('bg6');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_07').click(function () {
    $('.bg').addClass('bg7');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_08').click(function () {
    $('.bg').addClass('bg8');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_09').click(function () {
    $('.bg').addClass('bg9');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_10').click(function () {
    $('.bg').addClass('bg10');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_11').click(function () {
    $('.bg').addClass('bg11');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_12').click(function () {
    $('.bg').addClass('bg12');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg13');
    $('.bg').removeClass('bg14');
  })
  $('.tab_13').click(function () {
    $('.bg').addClass('bg13');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg14');
  })
  $('.tab_14').click(function () {
    $('.bg').addClass('bg14');
    $('.bg').removeClass('bg1');
    $('.bg').removeClass('bg2');
    $('.bg').removeClass('bg3');
    $('.bg').removeClass('bg4');
    $('.bg').removeClass('bg5');
    $('.bg').removeClass('bg6');
    $('.bg').removeClass('bg7');
    $('.bg').removeClass('bg8');
    $('.bg').removeClass('bg9');
    $('.bg').removeClass('bg10');
    $('.bg').removeClass('bg11');
    $('.bg').removeClass('bg12');
    $('.bg').removeClass('bg13');
  })
})