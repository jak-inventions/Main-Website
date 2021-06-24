// Nav stick code

const el = document.querySelector("#navigation")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

// Download function for wallpapers

function download(wallpaper, res) {
  res = $(window).width() < 850 ? 'Mobile' : res;
  let a = $('<a>')
    .attr('href', `assets/img/wallpapers/${wallpaper}/${wallpaper}-${res}.png`)
    .attr('download', wallpaper + '-' + res + '.png')
    .appendTo('body');
  a[0].click();
  a.remove();
}

function downloadSrc(wallpaper, extension) {
  let a = $('<a>')
    .attr('href', `assets/img/wallpapers/${wallpaper}/${wallpaper}.${extension}`)
    .attr('download', wallpaper + '.' + extension)
    .appendTo('body');
  a[0].click();
  a.remove();
}

