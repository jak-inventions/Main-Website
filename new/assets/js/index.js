
function downloadWallpaper(wallpaper){
  var a = $('<a>')
    .attr('href', 'assets/img/wallpapers/' + wallpaper + ($(window).width() < 850 ? 'Mobile' : '') + '.png')
    .attr('download', wallpaper + ($(window).width() < 850 ? 'Mobile' : '') + '.png')
    .appendTo('body');
  a[0].click();
  a.remove();
}

function downloadWallpaperSource(wallpaper){
  var a = $('<a>')
    .attr('href', 'assets/img/wallpapers/' + wallpaper + ($(window).width() < 850 ? 'Mobile' : '') + '.xcf')
    .attr('download', wallpaper + ($(window).width() < 850 ? 'Mobile' : '') + '.xcf')
    .appendTo('body');
  a[0].click();
  a.remove();
}
