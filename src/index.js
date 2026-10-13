export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/reports") {
      url.pathname = "/reports/";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/reports/") {
      url.pathname = "/reports/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  },
};
