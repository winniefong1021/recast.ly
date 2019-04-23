var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&videoType=any&key=${options.key}`,
    type: 'GET',
    data: {},
    contentType: 'application/json',
    success: callback,
    error: function (error) {
      console.error('Youtube: Failed to fetch video', error);
    }
  });
};

export default searchYouTube;
