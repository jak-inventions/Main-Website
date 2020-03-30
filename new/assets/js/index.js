
function downloadWallpaper(wallpaper){
  wallpaper += ($(window).width() < 850 ? 'Mobile' : '');
  let a = $('<a>')
    .attr('href', 'assets/img/wallpapers/' + wallpaper + '.png')
    .attr('download', wallpaper + '.png')
    .appendTo('body');
  a[0].click();
  a.remove();
}

function downloadWallpaperSource(wallpaper){
  wallpaper += ($(window).width() < 850 ? 'Mobile' : '');
  let a = $('<a>')
    .attr('href', 'assets/img/wallpapers/' + wallpaper + '.xcf')
    .attr('download', wallpaper + '.xcf')
    .appendTo('body');
  a[0].click();
  a.remove();
}
