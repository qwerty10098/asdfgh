(() => {
    var e, t, s = {
        819: e => {
            e.exports = "https://static1.anpoimages.com/wordpress/wp-content/uploads/2018/06/mx-player-thumb-icon.png?q=50&fit=contain&w=1500&h=&dpr=1.5"
        },
        344: e => {
            e.exports = "https://static1.anpoimages.com/wordpress/wp-content/uploads/2018/06/mx-player-thumb-icon.png?q=50&fit=contain&w=1500&h=&dpr=1.5"
        },
        569: (e, t, s) => {
            "use strict";
            s.d(t, {
                L: () => i
            });
            class i {
                constructor(e) {
                    const {
                        path: t,
                        query: s,
                        page: i
                    } = e;
                    this.path = t, this.query = s, this.page = i, this.url = "", this.api = "", this.apiKey = ""
                }
                async movies() {
                    this.api = "https://api.themoviedb.org/3/", this.apiKey = `1435e9957166a27ce5b8454de34e2591`;
                    const e = this.query,
                        t = this.page;
                    return this.url = `${this.api}${this.path}?api_key=${this.apiKey}&page=${t}&query=${e}`, "" === e && "" === t && this.url.includes("&query=") ? await fetch(this.url.replace("&page=&query=", "")).then((e => {
                        if (!e.ok) throw new Error(e.statusText);
                        return e.json()
                    })).then((e => e.results)) : await fetch(this.url).then((e => {
                        if (!e.ok) throw new Error(e.statusText);
                        return e.json()
                    })).then((e => e.results))
                }
                async trailer(e) {
                    this.api = "https://youtube.googleapis.com/youtube/v3/", this.apiKey = "AIzaSyCqsoYk6gWBrvtLCubO2-Ec0HhtDty_YW8";
                    const t = e;
                    return this.url = `${this.api}${this.path}?part=snippet&channelId=${t}&maxResults=1&q=${this.query}&type=video&key=${this.apiKey}`, await fetch(this.url).then((e => {
                        if (!e.ok) throw new Error(e.statusText);
                        return e.json()
                    }))
                }
            }
        }
    },
        i = {};

    function n(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            exports: {}
        };
        return s[e](t, t.exports, n), t.exports
    }
    n.m = s, n.d = (e, t) => {
        for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, s) => (n.f[s](e, t), t)), [])), n.u = e => "trailer.js", n.miniCssF = e => "../css/" + {
        179: "main",
        955: "trailer"
    }[e] + "-" + {
        179: "undefine",
        955: "31d6cfe0"
    }[e] + ".css", n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "movietrailer:", n.l = (s, i, a, r) => {
        if (e[s]) e[s].push(i);
        else {
            var o, l;
            if (void 0 !== a)
                for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                    var h = c[d];
                    if (h.getAttribute("src") == s || h.getAttribute("data-webpack") == t + a) {
                        o = h;
                        break
                    }
                }
            o || (l = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, n.nc && o.setAttribute("nonce", n.nc), o.setAttribute("data-webpack", t + a), o.src = s), e[s] = [i];
            var u = (t, i) => {
                o.onerror = o.onload = null, clearTimeout(p);
                var n = e[s];
                if (delete e[s], o.parentNode && o.parentNode.removeChild(o), n && n.forEach((e => e(i))), t) return t(i)
            },
                p = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: o
                }), 12e4);
            o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), l && document.head.appendChild(o)
        }
    }, n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        n.g.importScripts && (e = n.g.location + "");
        var t = n.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var s = t.getElementsByTagName("script");
            s.length && (e = s[s.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
    })(), (() => {
        var e = {
            179: 0
        };
        n.f.j = (t, s) => {
            var i = n.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i) s.push(i[2]);
                else {
                    var a = new Promise(((s, n) => {
                        i = e[t] = [s, n]
                    }));
                    s.push(i[2] = a);
                    var r = n.p + n.u(t),
                        o = new Error;
                    n.l(r, (s => {
                        if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                            var a = s && ("load" === s.type ? "missing" : s.type),
                                r = s && s.target && s.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")", o.name = "ChunkLoadError", o.type = a, o.request = r, i[1](o)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, s) => {
            for (var i, a, [r, o, l] = s, c = 0, d = []; c < r.length; c++) a = r[c], n.o(e, a) && e[a] && d.push(e[a][0]), e[a] = 0;
            for (i in o) n.o(o, i) && (n.m[i] = o[i]);
            for (l && l(n), t && t(s); d.length;) d.shift()()
        },
            s = self.webpackChunkmovietrailer = self.webpackChunkmovietrailer || [];
        s.forEach(t.bind(null, 0)), s.push = t.bind(null, s.push.bind(s))
    })(), (() => {
        "use strict";
        var e = n(569);
        class t extends class {
            constructor() {
                this.loading = document.querySelectorAll(".loading .circle"), this.containerPopularMovies = document.querySelector(".content-popular"), this.containerGenresMovies = document.querySelector("section#genre .movies"), this.containerFeaturedMovies = document.querySelector("section#featured .featured-movies"), this.linkGenre = document.querySelectorAll(".genre-nav a"), this.search = document.querySelector(".input-search"), this.genreNav = document.querySelectorAll(".genre-nav li"), this.ul = document.querySelector(".genre-nav ul"), this.next = document.querySelector(".next"), this.iconSearch = document.querySelector(".icon-search"), this.hamburger = document.querySelector("nav .hamburger")
            }
        } {
            constructor() {
                super(), this.scrollLeft, this.onMouseDown = !1, this.startX = 0, this.scroll = 0, this.slideIndex = 0, this.page = 1, this.loading.forEach((e => {
                    e.classList.add("spin")
                })), this.getPopularMovies(), this.event()
            }
            async searchMovies(s) {
                if ("Enter" == s.key) try {
                    const s = this.value,
                        i = await new e.L({
                            path: "search/multi",
                            query: s
                        }).movies();
                    (new t).updateUISection(i)
                } catch (e) {
                    console.log(e)
                }
            }
            updateUISection(e) {
                const t = document.querySelectorAll("section"),
                    s = document.querySelector(".result-search"),
                    i = s.querySelector("button"),
                    n = document.querySelector(".popular-movies"),
                    a = document.querySelector("header");
                i.addEventListener("click", (() => {
                    t.forEach((e => {
                        e.style.display = "block"
                    })), a.style.cssText = "height: auto;", n.style.display = "block", s.style.display = "none"
                })), a.style.cssText = "height: 50px;", n.style.display = "none", s.style.display = "block", t.forEach((e => {
                    e.style.display = "none"
                })), this.showResultMovies(e, s)
            }
            showResultMovies(e, t) {
                let s = "";
                const i = t.querySelector(".cards");
                e.forEach((e => {
                    console.log(e), s += this.templateGenres(e)
                })), i.innerHTML = s
            }
            clickingButtonPlay(e) {
                e.path.some((e => {
                    if ("next-pop" === e.className || "card-title" === e.className) n.e(955).then(n.bind(n, 95)).then((t => {
                        (new t.Trailer).getTrailer(e)
                    }));
                    else if ("icon-search" == e.className) {
                        const t = e.previousElementSibling;
                        t.classList.add("show"), t.focus(), e.classList.add("hide"), t.addEventListener("focusout", (() => {
                            t.classList.remove("show"), e.classList.remove("hide"), t.value = ""
                        }))
                    }
                }))
            }
            async getPopularMovies() {
                try {
                    const t = await new e.L({
                        path: "trending/movie/week",
                        query: ""
                    }).movies();
                    this.updateUIPopularMovies(t), this.removeClassSpin()
                } catch (e) {
                    console.log(e)
                }
            }
            removeClassSpin() {
                this.loading.forEach((e => {
                    e.classList.remove("spin"), e.parentElement.style.display = "none"
                }))
            }
            updateUIPopularMovies(e) {
                let t = "";
                e.forEach((e => {
                    t += this.templatePopular(e)
                })), this.containerPopularMovies.innerHTML = t, this.checkWidthUserBrowser()
            }
            checkWidthUserBrowser() {
                if (window.innerWidth <= 576) {
                    const e = this.containerPopularMovies.querySelectorAll(".card"),
                        t = document.getElementsByClassName("dot"),
                        s = document.querySelector("section#genre"),
                        i = s.querySelector("h3");
                    s.style.marginTop = "1rem", i.textContent = "Recommended Movies", this.ul.style.display = "none", this.showSlides(e, t)
                }
                if (window.innerWidth <= 992) {
                    const e = document.querySelector(".page-featured .next-page"),
                        t = document.querySelector(".page-featured .page-currently"),
                        s = document.querySelector(".page-featured .prev-page");
                    e.addEventListener("click", (() => {
                        this.page++, this.getFeaturedMovies(this.page), t.textContent = `Page ${this.page}`
                    })), s.addEventListener("click", (() => {
                        this.page--, this.page <= 0 && (this.page = 1), t.textContent = `Page ${this.page}`, this.getFeaturedMovies(this.page)
                    })), this.getFeaturedMovies()
                }
            }
            async getFeaturedMovies(t) {
                const s = await new e.L({
                    path: "trending/all/week",
                    query: "",
                    page: t
                }).movies();
                this.updateUIFeaturedMovies(s)
            }
            updateUIFeaturedMovies(e) {
                let t = "";
                e.forEach((e => {
                    t += this.templateGenres(e)
                })), this.containerFeaturedMovies.innerHTML = t
            }
            browseByGenre() {
                const e = this.dataset.genre;
                (new s).checkActiveClass(), this.classList.add("active"), (new s).checkGenreId(e)
            }
            event() {
                this.containerPopularMovies.addEventListener("mousedown", this.mouseDown), this.containerPopularMovies.addEventListener("mousemove", this.mouseMove), this.containerPopularMovies.addEventListener("mouseup", this.mouseUp), this.containerPopularMovies.addEventListener("mouseleave", this.mouseUp), this.containerGenresMovies.addEventListener("mousedown", this.mouseDown), this.containerGenresMovies.addEventListener("mousemove", this.mouseMove), this.containerGenresMovies.addEventListener("mouseup", this.mouseUp), this.containerGenresMovies.addEventListener("mouseleave", this.mouseUp), this.ul.addEventListener("mousedown", this.mouseDown), this.ul.addEventListener("mousemove", this.mouseMove), this.ul.addEventListener("mouseup", this.mouseUp), this.ul.addEventListener("mouseleave", this.mouseUp), this.search.addEventListener("keydown", this.searchMovies), document.addEventListener("click", this.clickingButtonPlay), this.hamburger.addEventListener("click", this.openMenu)
            }
            openMenu() {
                const e = this.nextElementSibling.nextElementSibling;
                if (e.classList.contains("open-menu")) return this.classList.remove("fixed"), void e.classList.remove("open-menu");
                e.classList.add("open-menu"), this.classList.add("fixed")
            }
            mouseDown(e) {
                e.preventDefault(), t.onMouseDown = !0, t.startX = e.clientX, t.scrollLeft = this.scrollLeft
            }
            mouseMove(e) {
                if (e.preventDefault(), !t.onMouseDown) return;
                let s = e.clientX;
                t.scroll = s - t.startX, "content-popular" == this.className ? (this.scrollLeft = t.scrollLeft - t.scroll, this.scrollLeft == this.scrollWidth - this.clientWidth ? this.nextElementSibling.style.cssText = "opacity: 1" : this.nextElementSibling.style.cssText = "opacity: 0") : ("movies" == this.className || "links" == this.className) && (this.scrollLeft = t.scrollLeft - t.scroll)
            }
            mouseUp() {
                t.onMouseDown = !1
            }
            templatePopular(e) {
                return `<div class="card fade">\n                <div class="thumbnail">\n                    <img loading="lazy" src="https://image.tmdb.org/t/p/w400${e.backdrop_path}" alt="Thumbnail" >\n                    <button class="next-pop" data-btn='${e.title}'>\n                        <img loading="lazy" src="${n(819)}" alt="Trailer" data-btn='${e.title}'>\n                    </button>\n                </div>\n                <div class="card-title" data-btn="${"movie" == e.media_type ? e.title : e.name}">\n                    <h3>${e.title}</h3>\n                    <span>${e.release_date}</span>\n                </div>\n                <div class="rating">\n                    <div>\n                        <img loading="lazy" src="${n(344)}" alt="Star"'>\n                        <p>${e.vote_average}</p>\n                    </div>\n                </div>\n            </div>`
            }
            templateGenres(e) {
                return `<div class="card">\n                <div class="thumbnail" >\n                    <img loading="lazy" src="https://image.tmdb.org/t/p/w200${e.poster_path}" alt="Thumbnail">\n                </div>\n                <div class="card-title" data-btn="${"movie" == e.media_type ? e.title : e.name}">\n                    <h3>${"movie" == e.media_type ? e.title : e.name ?? e.original_title}</h3>\n                    <span>${e.release_date}</span>\n                    <div>\n                        <img loading="lazy" src="${n(344)}" alt="Star"'>\n                        <p>${e.vote_average}</p>\n                    </div>\n                </div>\n            </div>`
            }
            showSlides(e, t) {
                for (let t = 0; t < 4; t++) e[t].style.display = "none";
                this.slideIndex++, this.slideIndex >= 4 && (this.slideIndex = 1);
                for (let e = 0; e < t.length; e++) t[e].className = t[e].className.replace(" active", "");
                e[this.slideIndex - 1].style.display = "block", t[this.slideIndex - 1].className += " active", setTimeout((() => {
                    this.showSlides(e, t)
                }), 3e3)
            }
        }
        class s extends t {
            constructor() {
                super(), this.event(), this.pageGenre = 1, this.clickingPagination()
            }
            clickingPagination() {
                const e = document.querySelector(".page-genres .next-page"),
                    t = document.querySelector(".page-genres .page-currently"),
                    s = document.querySelector(".page-genres .prev-page");
                e.addEventListener("click", (() => {
                    this.pageGenre++, this.checkGenreId("all", this.pageGenre), t.textContent = `Page ${this.pageGenre}`
                })), s.addEventListener("click", (() => {
                    this.pageGenre--, this.pageGenre <= 0 && (this.pageGenre = 1), t.textContent = `Page ${this.pageGenre}`, this.checkGenreId("all", this.pageGenre)
                }))
            }
            event() {
                this.genreNav.forEach((e => e.addEventListener("click", this.browseByGenre))), this.linkGenre.forEach((e => e.addEventListener("click", (e => e.preventDefault()))))
            }
            checkActiveClass() {
                return this.genreNav.forEach((e => {
                    e.classList.contains("active") && e.classList.remove("active")
                }))
            }
            async checkGenreId(t, s) {
                try {
                    const i = await new e.L({
                        path: "trending/movie/day",
                        query: "",
                        page: s
                    }).movies();
                    this.updateUIGenreMovies(i, t)
                } catch (e) {
                    console.log(e)
                }
            }
            updateUIGenreMovies(e, t) {
                let s = "";
                e.reverse().forEach((e => {
                    e.genre_ids.includes(parseInt(t)) && (s += this.templateGenres(e)), "all" == t && (s += this.templateGenres(e))
                })), this.containerGenresMovies.innerHTML = s
            }
        }
        window.innerWidth <= 576 ? (new s).checkGenreId("all") : (new s).checkGenreId(28), new t
    })()
})();
