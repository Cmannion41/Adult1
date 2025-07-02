export default {
  plugin: {
    initialize() {
      const originalRequest = wako.WakoBaseHttpService.request;
      wako.WakoBaseHttpService.request = function(request, ...args) {
        if (request.url.includes("https://api.themoviedb.org/3") && !request.url.includes("include_adult")) {
          request.url += (request.url.includes("?") ? "&" : "?") + "include_adult=true";
        }
        return originalRequest.call(this, request, ...args);
      };
      wako.wakoLog("TMDB Plugin initialized with include_adult=true");
    },

    afterInstall() {
      wako.wakoLog("TMDB Plugin installed");
    },

    afterUpdate() {
      wako.wakoLog("TMDB Plugin updated");
    }
  }
};
