(self.webpackChunkmovietrailer = self.webpackChunkmovietrailer || []).push([
    [955],
    {
        95: (e, t, i) => {
            "use strict";
            i.r(t),
                i.d(t, {
                    Trailer: () => a
                });
            var r = i(569);
            class a {
                constructor() {
                    this.trailerContainer = document.querySelector(".trailer-container"), this.content = this.trailerContainer.querySelector(".trailer-container .content"), this.loadBody = document.querySelector(".loading-body"), this.circleLoadBody = this.loadBody.querySelector(".circle"), this.loadBody.classList.add("show"), this.circleLoadBody.classList.add("spin")
                }
                async getTrailer(e) {
                    try {
                        const t = e.dataset.btn,
                            i = await new r.L({
                                path: "search",
                                query: t
                            }).trailer(),
                            a = await new r.L({
                                path: "search/multi",
                                query: t
                            }).movies();
                        this.showTrailerMovies(i, a[0])
                    } catch (e) {
                        console.log(e)
                    }
                }
                showTrailerMovies(e, t) {
                    this.trailerContainer.classList.add("full-height");
                    const i = e.items[0].id.videoId,
                        r = t.original_title ?? t.original_name,
                        a = t.overview;
                    this.content.innerHTML = this.templateTrailer(i, r, a), this.loadBody.classList.remove("show"), this.circleLoadBody.classList.remove("spin"), this.content.querySelector(".btn-back").addEventListener("click", (() => {
                        this.trailerContainer.classList.remove("full-height")
                    }))
                }
                templateTrailer(e, t, i) {
                    return `\n            <div class="trailer">\n                <iframe src="https://www.youtube.com/embed/${e}" frameborder="0" allowfullscreen></iframe>\n            </div>\n            <div class="description">\n                <h2>${t}</h2>\n                \n                <p>${i}</p>\n                <div class="btn-back">\n                    <a href="#">Back to Homepage</a>\n                </div>\n            </div>\n        `
                }
            }
        }
    }
]);
