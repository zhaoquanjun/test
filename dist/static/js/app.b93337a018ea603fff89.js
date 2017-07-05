webpackJsonp([0], [, function (t, e, s) {
  "use strict";
  var n = s(32), i = s.n(n), a = s(33), r = s.n(a), o = s(34), c = s.n(o), l = s(35), u = s.n(l), m = s(3),
    p = (s.n(m), s(5)), g = (s.n(p), s(6)), d = s.n(g), f = s(4);
  s.n(f);
  s.d(e, "a", function () {
    return i.a
  }), s.d(e, "c", function () {
    return r.a
  }), s.d(e, "b", function () {
    return c.a
  }), s.d(e, "d", function () {
    return u.a
  }), s.d(e, "e", function () {
    return d.a
  })
}, , function (t, e, s) {
  var n = s(0)(s(15), s(46), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(null, s(45), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(19), s(47), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(20), s(44), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  "use strict";
  var n = s(36), i = s.n(n), a = s(31), r = s.n(a), o = s(1);
  e.a = [{
    path: "/",
    component: i.a,
    children: [{path: "/GroomNav", component: o.a}, {path: "/SongSheet", component: o.b}]
  }, {path: "/Hello", component: r.a}]
}, function (t, e, s) {
  function n(t) {
    s(25)
  }

  var i = s(0)(s(13), s(48), n, null, null);
  t.exports = i.exports
}, , , function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
    name: "swiper-slide", data: function () {
      return {slideClass: "swiper-slide"}
    }, ready: function () {
      this.update()
    }, mounted: function () {
      this.update(), this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass)
    }, updated: function () {
      this.update()
    }, attached: function () {
      this.update()
    }, methods: {
      update: function () {
        this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop())
      }
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = "undefined" != typeof window;
  n && (window.Swiper = s(2), s(24)), e.default = {
    name: "swiper",
    props: {
      options: {
        type: Object, default: function () {
          return {autoplay: 3500}
        }
      }
    },
    data: function () {
      return {defaultSwiperClasses: {wrapperClass: "swiper-wrapper"}}
    },
    ready: function () {
      !this.swiper && n && (this.swiper = new Swiper(this.$el, this.options))
    },
    mounted: function () {
      var t = this, e = function () {
        if (!t.swiper && n) {
          delete t.options.notNextTick;
          var e = !1;
          for (var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s) && t.options[s] && (e = !0, t.defaultSwiperClasses[s] = t.options[s]);
          var i = function () {
            t.swiper = new Swiper(t.$el, t.options)
          };
          e ? t.$nextTick(i) : i()
        }
      };
      this.options.notNextTick ? e() : this.$nextTick(e)
    },
    updated: function () {
      this.swiper && this.swiper.update()
    },
    beforeDestroy: function () {
      this.swiper && (this.swiper.destroy(), delete this.swiper)
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = {components: {}}
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
    name: "hello", data: function () {
      return {msg: "Welcome to Your Vue.js App"}
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(28);
  s.n(n);
  e.default = {
    data: function () {
      var t = this;
      return {
        images: [{
          img: "/static/images/banner_01.jpg",
          url: "http://y.qq.com/msa/luhani/index_new.html?g_f=yqqjiaodian",
          id: 1
        }, {
          img: "/static/images/banner_02.jpg",
          url: "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2127545#index/fans",
          id: 2
        }, {
          img: "/static/images/banner_03.jpg",
          url: "https://y.qq.com/w/album.html?albummid=004ZsFlR3XjpE0&ADTAG=myqq&from=myqq&channel=10007100",
          id: 3
        }, {
          img: "/static/images/banner_04.jpg",
          url: "https://y.qq.com/msa/215/0_3810.html?ADTAG=myqq&from=myqq&channel=10007100",
          id: 4
        }, {
          img: "/static/images/banner_05.jpg",
          url: "https://y.qq.com/w/album.html?albummid=003gWRvo0Pc8R1&ADTAG=myqq&from=myqq&channel=10007100",
          id: 5
        }, {
          img: "/static/images/banner_06.jpg",
          url: "https://y.qq.com/w/singer.html?singermid=000aHmbL2aPXWH&ADTAG=myqq&from=myqq&channel=10007100",
          id: 6
        }],
        swiperOption: {
          autoplay: 3e3,
          pagination: ".swiper-pagination",
          slidesPerView: "auto",
          centeredSlides: !0,
          paginationClickable: !0,
          onSlideChangeEnd: function (e) {
            t.page = e.realIndex + 1, t.index = e.realIndex
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }, components: {swiper: n.swiper, swiperSlide: n.swiperSlide}, methods: {
      onSlideChangeStart: function (t) {
      }, onSlideChangeEnd: function (t) {
      }
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
    data: function () {
      return {
        songSheets: [{
          img: "/static/images/songsheets_01.jpg",
          title: "直戳泪点｜哭腔与感情的融合竟如此虐心",
          author: "Tyrone"
        }, {
          img: "/static/images/songsheets_02.jpg",
          title: "超燃神曲：这些小提琴挑动你每一条神经",
          author: "Fatalism"
        }, {
          img: "/static/images/songsheets_03.jpg",
          title: "人生所有的酒，都不如听民谣一首",
          author: "念安娜"
        }, {
          img: "/static/images/songsheets_04.jpg",
          title: "因为这些偶像剧，所以我们青春过",
          author: "开心地笑"
        }, {
          img: "/static/images/songsheets_05.jpg",
          title: "韩式R&B，魅惑男声挑逗你的听觉",
          author: "繁华的夏"
        }, {
          img: "/static/images/songsheets_06.jpg",
          title: "后摇人声采样，通往心灵的独白",
          author: "清凉暖夏"
        }, {
          img: "/static/images/songsheets_07.jpg",
          title: "暑假必备：和闺蜜一起在夏日里闹腾",
          author: "念葳蕊"
        }, {
          img: "/static/images/songsheets_08.jpg",
          title: "这才是游戏：芯片电子掀起的复古情怀",
          author: "Fatalism"
        }, {
          img: "/static/images/songsheets_09.jpg",
          title: "伴你到最后的不是旧人的手，而是伤喉的酒",
          author: "岸浪情拍"
        }, {
          img: "/static/images/songsheets_10.jpg",
          title: "东方同人曲｜东方梦，沁人心",
          author: "鹿泺"
        }, {
          img: "/static/images/songsheets_11.jpg",
          title: "一曲揾酒年少狂，一人独看风霜雪",
          author: "鹿尔"
        }, {img: "/static/images/songsheets_12.jpg", title: "百首ACG｜久听不腻的清新小调", author: "L岺"}]
      }
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(4), i = s.n(n);
  e.default = {
    data: function () {
      return {
        msg: "搜索歌曲/专辑/歌手",
        isTrue: !1,
        favourites: [{
          name: "齐天大圣",
          num: "36.6万",
          href: "http://music.163.com/m/song/442869498?autoplay=true"
        }, {name: "少年西游行", num: "25.6万", href: "http://music.163.com/m/song?id=487190457"}, {
          name: "微光",
          num: "12.4万",
          href: "http://music.163.com/m/song?id=482386220"
        }, {name: "离人殇", num: "10.6万", href: "http://music.163.com/m/song?id=485960291"}]
      }
    }, methods: {
      cLength: function () {
        this.isTrue = !0
      }, disAppear: function () {
        this.isTrue = !1
      }
    }, components: {ShadowFloor: i.a}
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(5), i = s.n(n);
  e.default = {
    data: function () {
      return {
        categories: [{item: "巅峰榜·福特新蒙迪欧·流行指数", img: "/static/images/groom_01.jpg"}, {
          item: "巅峰榜·热歌",
          img: "/static/images/groom_02.jpg"
        }, {item: "巅峰榜·新歌", img: "/static/images/groom_03.jpg"}, {
          item: "巅峰榜·网络歌曲",
          img: "/static/images/groom_04.jpg"
        }, {item: "巅峰榜·内地", img: "/static/images/groom_05.jpg"}, {
          item: "巅峰榜·港台",
          img: "/static/images/groom_06.jpg"
        }, {item: "巅峰榜·欧美", img: "/static/images/groom_07.jpg"}, {
          item: "巅峰榜·韩国",
          img: "/static/images/groom_08.jpg"
        }, {item: "巅峰榜·日本", img: "/static/images/groom_09.jpg"}, {
          item: "巅峰榜·MV",
          img: "/static/images/groom_10.jpg"
        }, {item: "巅峰榜·音乐人", img: "/static/images/groom_11.jpg"}, {
          item: "巅峰榜·K歌金曲",
          img: "/static/images/groom_12.jpg"
        }],
        songInfos: [{name: "1 追光者", singer: "-岑宁儿"}, {name: "2 那个男孩", singer: "--汪苏泷"}, {
          name: "3 拜托 (Live)",
          singer: "--孙晨"
        }]
      }
    }, components: {Item: i.a}
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(6), i = s.n(n), a = s(27), r = s.n(a), o = r.a;
  document.onscroll = function () {
    var t = document.body.scrollTop, e = Number(t / 37.5 * .1);
    e = e.toFixed(2), e < 1 ? o(".header").css("background", "rgba(178, 83, 122," + e + ")") : o(".header").css("background", "rgba(178, 83, 122,1)")
  }, e.default = {
    data: function () {
      return {
        img: "/assets/images/songsheets_01.jpg",
        infos: [{name: "Fantastic Baby", singer: "BingBang", url: "/static/music/fantastic_baby.m4a"}, {
          name: "The Dawn",
          singer: "Dreamtale",
          url: "/static/music/Dreamtale - Intro：The Dawn.mp3"
        }, {name: "一剪梅·舟过吴江", singer: "毛泽少", url: "/static/music/一剪梅·舟过吴江.mp3"}, {
          name: "雪(独唱版)",
          singer: "韩雪",
          url: "/static/music/雪(独唱版).mp3"
        }, {name: "我很快乐", singer: "刘惜君", url: "/static/music/我很快乐.mp3"}, {
          name: "雪（独唱版）",
          singer: "杜雯媞",
          url: "/static/music/雪(独唱版).mp3"
        }, {name: "让我留在你身边 (原唱作版)", singer: "唐汉霄", url: "/static/music/让我留在你身边 (原唱作版).mp3"}, {
          name: "Jar Of Love",
          singer: "曲婉婷",
          url: "/static/music/Jar Of Love.mp3"
        }, {name: "寻水的鱼", singer: "许飞", url: "/static/music/寻水的鱼.mp3"}, {
          name: "Victory",
          singer: "Two Steps From Hell",
          url: "/static/music/Victory.mp3"
        }, {name: "说散就散", singer: "JC", url: "/static/music/说散就散.mp3"}, {
          name: "离人殇",
          singer: "赵方婧,音阙诗听 ",
          url: "/static/music/离人殇.mp3"
        }, {name: "微光", singer: "蔚雨芯", url: "/static/music/微光.mp3"}, {
          name: "下一站茶山刘",
          singer: "房东的猫",
          url: "/static/music/下一站茶山刘.mp3"
        }]
      }
    }, components: {Controller: i.a}, watch: {}, methods: {
      bgChange: function () {
        alert(1)
      }, audioPlay: function (t) {
        var e = t.currentTarget, s = o(e).children("audio"), n = s[0], i = o("audio").not(s), a = [];
        if (i.each(function (t, e) {
            a.push(e)
          }), n.paused) {
          n.play();
          for (var r = 0; r < a.length; r++)a[r].pause()
        } else n.pause()
      }
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
    data: function () {
      return {flag: !1}
    }, methods: {
      startOrEnd: function () {
        this.flag = !this.flag, this.flag ? this.src = this.endImg : this.src = this.startImg
      }
    }
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(51), i = s.n(n), a = s(3), r = s.n(a), o = s(1);
  e.default = {
    data: function () {
      return {}
    }, components: {GroomNav: o.a, SongSheet: o.b, Banner: r.a, Swiper: i.a}, methods: {}
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(1);
  e.default = {
    data: function () {
      return {}
    }, created: function () {
    }, methods: {}, components: {Search: n.c, GroomNav: n.a, SongSheet: n.b, TabBtn: n.d, Controller: n.e}
  }
}, function (t, e, s) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var n = s(10), i = s(9), a = s(8), r = s.n(a), o = s(7);
  n.a.config.productionTip = !1, n.a.use(i.a);
  var c = new i.a({routes: o.a});
  new n.a({
    router: c, render: function (t) {
      return t(r.a)
    }
  }).$mount("#app")
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, , , function (t, e, s) {
  var n = s(0)(s(11), s(39), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(12), s(43), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  function n(t) {
    s(26)
  }

  var i = s(0)(s(14), s(49), n, "data-v-f6162b3c", null);
  t.exports = i.exports
}, function (t, e, s) {
  var n = s(0)(s(16), s(37), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(17), s(42), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(18), s(40), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(21), s(38), null, null, null);
  t.exports = n.exports
}, function (t, e, s) {
  var n = s(0)(s(22), s(41), null, null, null);
  t.exports = n.exports
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("ul", {staticClass: "tab-navList"}, [s("p", {staticClass: "song-sheet"}, [t._v("热门歌单")]), t._v(" "), s("a", {attrs: {href: ""}}, t._l(t.songSheets, function (e) {
        return s("li", [s("router-link", {attrs: {to: "/Item"}}, [s("img", {
          attrs: {
            src: "src",
            alt: "",
            src: e.img
          }
        }), t._v(" "), s("p", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), s("p", {staticClass: "author"}, [t._v(t._s(e.author))])])], 1)
      }))])
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "tab-nav"}, [s("div", {staticClass: "tab-title"}, [s("div", {staticClass: "groom"}, [s("router-link", {attrs: {to: "/GroomNav"}}, [t._v("推荐")])], 1), t._v(" "), s("div", {staticClass: "topList"}, [s("router-link", {attrs: {to: "/SongSheet"}}, [t._v("排行榜")])], 1)]), t._v(" "), s("banner"), t._v(" "), s("div", {staticClass: "tabs"}, [s("router-view")], 1)], 1)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement;
      return (t._self._c || e)("div", {class: t.slideClass}, [t._t("default")], 2)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("ul", {staticClass: "songSheetContainer"}, [s("router-link", {attrs: {to: "/Item"}}, t._l(t.categories, function (e) {
        return s("li", {staticClass: "songSheetItem"}, [s("div", {staticClass: "imgContainer"}, [s("img", {
          attrs: {
            src: "src",
            alt: "",
            src: e.img
          }
        })]), t._v(" "), s("ul", {staticClass: "infoList"}, [s("h3", [t._v(t._s(e.item))]), t._v(" "), t._l(t.songInfos, function (e) {
          return s("li", [t._v(t._s(e.name) + "  "), s("p", [t._v(t._s(e.singer))])])
        })], 2)])
      }))], 1)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "view"}, [s("search"), t._v(" "), s("tabBtn"), t._v(" "), s("controller")], 1)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "view"}, [s("div", {staticClass: "search"}, [s("input", {
        class: {focus: t.isTrue},
        attrs: {
          type: "search",
          placeholder: "搜索歌曲/专辑/歌手",
          onfocus: "this.setAttribute('placeholder','');",
          onblur: "this.setAttribute('placeholder','搜索歌曲/专辑/歌手')"
        },
        on: {
          click: function (e) {
            t.cLength()
          }
        }
      }), t._v(" "), s("div", {
        class: {cancelBtn: !0, visible: t.isTrue}, on: {
          click: function (e) {
            t.disAppear()
          }
        }
      }, [t._v("取消")])]), t._v(" "), t.isTrue ? s("ul", {staticClass: "searchList"}, t._l(t.favourites, function (e) {
        return s("li", [s("a", {attrs: {href: e.href}}, [s("p", [t._v(t._s(e.name))]), s("p", [t._v(t._s(e.num))])])])
      })) : t._e(), t._v(" "), t.isTrue ? s("shadowFloor") : t._e()], 1)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "swiper-container"}, [t._t("parallax-bg"), t._v(" "), s("div", {class: t.defaultSwiperClasses.wrapperClass}, [t._t("default")], 2), t._v(" "), t._t("pagination"), t._v(" "), t._t("button-prev"), t._v(" "), t._t("button-next"), t._v(" "), t._t("scrollbar")], 2)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "controler-bar"}, [t._m(0), t._v(" "), s("p", {staticClass: "songName"}, [t._v("Fantastic Baby")]), t._v(" "), s("div", {
        staticClass: "controler-barBtn",
        attrs: {flag: t.flag},
        on: {
          click: function (e) {
            t.startOrEnd()
          }
        }
      }, [t.flag ? s("img", {
        attrs: {
          src: "/static/images/stop_btn_01.png",
          alt: ""
        }
      }) : s("img", {attrs: {src: "/static/images/start_btn_01.png", alt: ""}})])])
    }, staticRenderFns: [function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "controler-barImg"}, [s("img", {
        attrs: {
          src: "/static/images/controller.png",
          alt: ""
        }
      })])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement;
      return (t._self._c || e)("div", {staticClass: "shadow"})
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("swiper", {
        staticClass: "swiper-container",
        attrs: {mySwiper: t.swiperOption}
      }, [t._l(t.images, function (t) {
        return s("swiper-slide", {
          key: t.id,
          staticClass: "swiper-slide"
        }, [s("a", {attrs: {href: t.url}}, [s("img", {attrs: {src: "src", src: t.img}})])])
      }), t._v(" "), s("div", {staticClass: "swiper-pagination swiper-pagination-bullets", slot: "pagination"})], 2)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {
        staticClass: "view",
        attrs: {id: "view", onscroll: "bgChange()"}
      }, [s("div", {
        staticClass: "header",
        attrs: {onclick: "window.history.back()"}
      }, [t._v(" < 歌单 ")]), t._v(" "), s("div", {staticClass: "singerPhoto"}, [s("img", {
        attrs: {
          src: t.img,
          alt: ""
        }
      })]), t._v(" "), t._m(0), t._v(" "), s("div", {staticClass: "sheetContent"}, [s("ul", t._l(t.infos, function (e) {
        return s("li", {staticClass: "contentItem"}, [s("div", {
          staticClass: "content_left", on: {
            click: function (e) {
              t.audioPlay(e)
            }
          }
        }, [s("audio", {
          attrs: {
            src: "src",
            src: e.url,
            name: e.name
          }
        }), t._v(" "), s("h2", [t._v(t._s(e.name))]), t._v(" "), s("p", [t._v(t._s(e.singer))])]), t._v(" "), t._m(1, !0)])
      }))]), t._v(" "), s("div", {staticClass: "space"}), t._v(" "), s("controller")], 1)
    }, staticRenderFns: [function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "sheetTitle"}, [s("div", {staticClass: "sheetTitle_left"}, [s("h1", [t._v("2017走心歌曲 | 敲击人类心灵最深处")]), t._v(" "), s("p", [t._v("44.6万播放 来自：Carlton")])]), t._v(" "), s("div", {staticClass: "sheetTitle_right"}, [s("div", {staticClass: "sheetTitle_inner"}, [s("img", {
        attrs: {
          src: "/src/assets/images/start_btn_01.png",
          alt: ""
        }
      })])])])
    }, function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "content_right"}, [s("span"), s("span"), s("span")])
    }]
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", [s("router-view", {
        staticClass: "view",
        attrs: {"keep-alive": "", transition: "", "transition-mode": "out-in"}
      })], 1)
    }, staticRenderFns: []
  }
}, function (t, e) {
  t.exports = {
    render: function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("div", {staticClass: "hello"}, [s("h1", [t._v(t._s(t.msg))]), t._v(" "), s("h2", [t._v("Essential Links")]), t._v(" "), t._m(0), t._v(" "), s("h2", [t._v("Ecosystem")]), t._v(" "), t._m(1)])
    }, staticRenderFns: [function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("ul", [s("li", [s("a", {
        attrs: {
          href: "https://vuejs.org",
          target: "_blank"
        }
      }, [t._v("Core Docs")])]), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "https://forum.vuejs.org",
          target: "_blank"
        }
      }, [t._v("Forum")])]), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "https://gitter.im/vuejs/vue",
          target: "_blank"
        }
      }, [t._v("Gitter Chat")])]), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "https://twitter.com/vuejs",
          target: "_blank"
        }
      }, [t._v("Twitter")])]), t._v(" "), s("br"), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "http://vuejs-templates.github.io/webpack/",
          target: "_blank"
        }
      }, [t._v("Docs for This Template")])])])
    }, function () {
      var t = this, e = t.$createElement, s = t._self._c || e;
      return s("ul", [s("li", [s("a", {
        attrs: {
          href: "http://router.vuejs.org/",
          target: "_blank"
        }
      }, [t._v("vue-router")])]), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "http://vuex.vuejs.org/",
          target: "_blank"
        }
      }, [t._v("vuex")])]), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "http://vue-loader.vuejs.org/",
          target: "_blank"
        }
      }, [t._v("vue-loader")])]), t._v(" "), s("li", [s("a", {
        attrs: {
          href: "https://github.com/vuejs/awesome-vue",
          target: "_blank"
        }
      }, [t._v("awesome-vue")])])])
    }]
  }
}], [23]);
//# sourceMappingURL=app.b93337a018ea603fff89.js.map
