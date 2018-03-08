(function() {
    var b = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document: {},
        l = "undefined" !== typeof module && module.exports,
        k = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var d, a = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], m = 0, f = a.length, h = {}; m < f; m++) if ((d = a[m]) && d[1] in b) {
                for (m = 0; m < d.length; m++) h[a[0][m]] = d[m];
                return h
            }
            return ! 1
        } (),
        h = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        f = {
            request: function(f) {
                var a = d.requestFullscreen;
                f = f || b.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[a]();
                else f[a](k && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                b[d.exitFullscreen]()
            },
            toggle: function(d) {
                this.isFullscreen ? this.exit() : this.request(d)
            },
            onchange: function(d) {
                this.on("change", d)
            },
            onerror: function(d) {
                this.on("error", d)
            },
            on: function(d, a) {
                var f = h[d];
                f && b.addEventListener(f, a, !1)
            },
            off: function(d, a) {
                var f = h[d];
                f && b.removeEventListener(f, a, !1)
            },
            raw: d
        };
    d ? (Object.defineProperties(f, {
        isFullscreen: {
            get: function() {
                return !! b[d.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return b[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !! b[d.fullscreenEnabled]
            }
        }
    }), l ? module.exports = f: window.screenfull = f) : l ? module.exports = !1 : window.screenfull = !1
})();
var s_iScaleFactor = 1,
    s_bIsIphone = !1,
    s_iOffsetX, s_iOffsetY; (function(b) { (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function trace(b) {
    console.log(b)
}
function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}
function isIOS() {
    var b = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for ( - 1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); b.length;) if (navigator.platform === b.pop()) return ! 0;
    return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function getSize(b) {
    var l = b.toLowerCase(),
        k = window.document,
        d = k.documentElement;
    if (void 0 === window["inner" + b]) b = d["client" + b];
    else if (window["inner" + b] != d["client" + b]) {
        var h = k.createElement("body");
        h.id = "vpw-test-b";
        h.style.cssText = "overflow:scroll";
        var f = k.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + l + ":" + d["client" + b] + "px){body#vpw-test-b div#vpw-test-d{" + l + ":7px!important}}</style>";
        h.appendChild(f);
        d.insertBefore(h, k.head);
        b = 7 == f["offset" + b] ? d["client" + b] : window["inner" + b];
        d.removeChild(h)
    } else b = window["inner" + b];
    return b
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var b = (0 === window.orientation ? screen.height: screen.width) - getIOSWindowHeight();
    return 1 < b ? b: 0
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var b = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var l = getSize("Width");
        _checkOrientation(l, b);
        s_iScaleFactor = Math.min(b / CANVAS_HEIGHT, l / CANVAS_WIDTH);
        var k = CANVAS_WIDTH * s_iScaleFactor,
            d = CANVAS_HEIGHT * s_iScaleFactor;
        if (d < b) {
            var h = b - d;
            d += h;
            k += CANVAS_WIDTH / CANVAS_HEIGHT * h
        } else k < l && (h = l - k, k += h, d += CANVAS_HEIGHT / CANVAS_WIDTH * h);
        h = b / 2 - d / 2;
        var f = l / 2 - k / 2,
            n = CANVAS_WIDTH / k;
        if (f * n < -EDGEBOARD_X || h * n < -EDGEBOARD_Y) s_iScaleFactor = Math.min(b / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), l / (CANVAS_WIDTH - 2 * EDGEBOARD_X)),
            k = CANVAS_WIDTH * s_iScaleFactor,
            d = CANVAS_HEIGHT * s_iScaleFactor,
            h = (b - d) / 2,
            f = (l - k) / 2,
            n = CANVAS_WIDTH / k;
        s_iOffsetX = -1 * f * n;
        s_iOffsetY = -1 * h * n;
        0 <= h && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oTeamChoose && s_oTeamChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oHelpPanel && s_oHelpPanel.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oCongratulations && s_oCongratulations.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oVsPanel && s_oVsPanel.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * k, s_oStage.canvas.height = 2 * d, canvas.style.width = k + "px", canvas.style.height = d + "px", s_oStage.scaleX = s_oStage.scaleY = 2 * Math.min(k / CANVAS_WIDTH, d / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", k + "px"), $("#canvas").css("height", d + "px")) : (s_oStage.canvas.width = k, s_oStage.canvas.height = d, s_iScaleFactor = Math.min(k / CANVAS_WIDTH, d / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > h ? $("#canvas").css("top", h + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", f + "px");
        fullscreenHandler()
    }
}
function createBitmap(b, l, k) {
    var d = new createjs.Bitmap(b),
        h = new createjs.Shape;
    l && k ? h.graphics.beginFill("#fff").drawRect( - l / 2, -k / 2, l, k) : h.graphics.beginFill("#ff0").drawRect(0, 0, b.width, b.height);
    d.hitArea = h;
    return d
}
function createSprite(b, l, k, d, h, f) {
    b = null !== l ? new createjs.Sprite(b, l) : new createjs.Sprite(b);
    l = new createjs.Shape;
    l.graphics.beginFill("#000000").drawRect( - k, -d, h, f);
    b.hitArea = l;
    return b
}
function _checkOrientation(b, l) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (b > l ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}
function inIframe() {
    try {
        return window.self !== window.top
    } catch(b) {
        return ! 0
    }
}
function randomFloatBetween(b, l, k) {
    "undefined" === typeof k && (k = 2);
    return parseFloat(Math.min(b + Math.random() * (l - b), l).toFixed(k))
}
function shuffle(b) {
    for (var l = b.length,
             k, d; 0 !== l;) d = Math.floor(Math.random() * l),
        --l,
        k = b[l],
        b[l] = b[d],
        b[d] = k;
    return b
}
function formatTime(b) {
    b /= 1E3;
    var l = Math.floor(b / 60);
    b = parseFloat(b - 60 * l).toFixed(1);
    var k = "";
    k = 10 > l ? k + ("0" + l + ":") : k + (l + ":");
    return 10 > b ? k + ("0" + b) : k + b
}
function degreesToRadians(b) {
    return b * Math.PI / 180
}
function checkRectCollision(b, l) {
    var k = getBounds(b, .9);
    var d = getBounds(l, .98);
    return calculateIntersection(k, d)
}
function calculateIntersection(b, l) {
    var k, d, h, f;
    var n = b.x + (k = b.width / 2);
    var a = b.y + (d = b.height / 2);
    var m = l.x + (h = l.width / 2);
    var y = l.y + (f = l.height / 2);
    n = Math.abs(n - m) - (k + h);
    a = Math.abs(a - y) - (d + f);
    return 0 > n && 0 > a ? (n = Math.min(Math.min(b.width, l.width), -n), a = Math.min(Math.min(b.height, l.height), -a), {
        x: Math.max(b.x, l.x),
        y: Math.max(b.y, l.y),
        width: n,
        height: a,
        rect1: b,
        rect2: l
    }) : null
}
function getBounds(b, l) {
    var k = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (b instanceof createjs.Container) {
        k.x2 = -Infinity;
        k.y2 = -Infinity;
        var d = b.children,
            h = d.length,
            f;
        for (f = 0; f < h; f++) {
            var n = getBounds(d[f], 1);
            n.x < k.x && (k.x = n.x);
            n.y < k.y && (k.y = n.y);
            n.x + n.width > k.x2 && (k.x2 = n.x + n.width);
            n.y + n.height > k.y2 && (k.y2 = n.y + n.height)
        }
        Infinity == k.x && (k.x = 0);
        Infinity == k.y && (k.y = 0);
        Infinity == k.x2 && (k.x2 = 0);
        Infinity == k.y2 && (k.y2 = 0);
        k.width = k.x2 - k.x;
        k.height = k.y2 - k.y;
        delete k.x2;
        delete k.y2
    } else {
        if (b instanceof createjs.Bitmap) {
            h = b.sourceRect || b.image;
            f = h.width * l;
            var a = h.height * l
        } else if (b instanceof createjs.Sprite) if (b.spriteSheet._frames && b.spriteSheet._frames[b.currentFrame] && b.spriteSheet._frames[b.currentFrame].image) {
            h = b.spriteSheet.getFrame(b.currentFrame);
            f = h.rect.width;
            a = h.rect.height;
            d = h.regX;
            var m = h.regY
        } else k.x = b.x || 0,
            k.y = b.y || 0;
        else k.x = b.x || 0,
                k.y = b.y || 0;
        d = d || 0;
        f = f || 0;
        m = m || 0;
        a = a || 0;
        k.regX = d;
        k.regY = m;
        h = b.localToGlobal(0 - d, 0 - m);
        n = b.localToGlobal(f - d, a - m);
        f = b.localToGlobal(f - d, 0 - m);
        d = b.localToGlobal(0 - d, a - m);
        k.x = Math.min(Math.min(Math.min(h.x, n.x), f.x), d.x);
        k.y = Math.min(Math.min(Math.min(h.y, n.y), f.y), d.y);
        k.width = Math.max(Math.max(Math.max(h.x, n.x), f.x), d.x) - k.x;
        k.height = Math.max(Math.max(Math.max(h.y, n.y), f.y), d.y) - k.y
    }
    return k
}
function NoClickDelay(b) {
    this.element = b;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(b) {
        switch (b.type) {
            case "touchstart":
                this.onTouchStart(b);
                break;
            case "touchmove":
                this.onTouchMove(b);
                break;
            case "touchend":
                this.onTouchEnd(b)
        }
    },
    onTouchStart: function(b) {
        b.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(b) {
        this.moved = !0
    },
    onTouchEnd: function(b) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            b = document.elementFromPoint(b.changedTouches[0].clientX, b.changedTouches[0].clientY);
            3 == b.nodeType && (b = b.parentNode);
            var l = document.createEvent("MouseEvents");
            l.initEvent("click", !0, !0);
            b.dispatchEvent(l)
        }
    }
}; (function() {
    function b(b) {
        var d = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        b = b || window.event;
        b.type in d ? document.body.className = d[b.type] : (document.body.className = this[l] ? "hidden": "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var l = "hidden";
    l in document ? document.addEventListener("visibilitychange", b) : (l = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", b) : (l = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", b) : (l = "msHidden") in document ? document.addEventListener("msvisibilitychange", b) : "onfocusin" in document ? document.onfocusin = document.onfocusout = b: window.onpageshow = window.onpagehide = window.onfocus = window.onblur = b
})();
function playSound(b, l, k) {
    return ! 1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[b].play(), s_aSounds[b].volume(l), s_aSounds[b].loop(k), s_aSounds[b]) : null
}
function stopSound(b) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].stop()
}
function setVolume(b, l) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].volume(l)
}
function setMute(b, l) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[b].mute(l)
}
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(b) {
    for (var l = window.location.search.substring(1).split("&"), k = 0; k < l.length; k++) {
        var d = l[k].split("=");
        if (d[0] == b) return d[1]
    }
}
function distanceV2(b, l) {
    var k = b.x - l.x,
        d = b.y - l.y;
    return Math.sqrt(k * k + d * d)
}
function randomRange(b, l) {
    return Math.floor(Math.random() * (l - b)) + b
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && !inIframe() && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change",
    function() {
        s_bFullscreen = screenfull.isFullscreen;
        null !== s_oInterface && s_oInterface.resetFullscreenBut();
        null !== s_oMenu && s_oMenu.resetFullscreenBut();
        null !== s_oTeamChoose && s_oTeamChoose.resetFullscreenBut()
    });
function extractHostname(b) {
    b = -1 < b.indexOf("://") ? b.split("/")[2] : b.split("/")[0];
    b = b.split(":")[0];
    return b = b.split("?")[0]
}
function extractRootDomain(b) {
    b = extractHostname(b);
    var l = b.split("."),
        k = l.length;
    2 < k && (b = l[k - 2] + "." + l[k - 1]);
    return b
}
var getClosestTop = function() {
        var b = window,
            l = !1;
        try {
            for (; b.parent.document !== b.document;) if (b.parent.document) b = b.parent;
            else {
                l = !0;
                break
            }
        } catch(k) {
            l = !0
        }
        return {
            topFrame: b,
            err: l
        }
    },
    getBestPageUrl = function(b) {
        var l = b.topFrame,
            k = "";
        if (b.err) try {
            try {
                k = window.top.location.href
            } catch(h) {
                var d = window.location.ancestorOrigins;
                k = d[d.length - 1]
            }
        } catch(h) {
            k = l.document.referrer
        } else k = l.location.href;
        return k
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
    for (var b = extractRootDomain(PAGE_URL), l = [String.fromCharCode(99, 111, 100, 101, 116, 104, 105, 115, 108, 97, 98, 46, 99, 111, 109), String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116)], k = 0; k < l.length; k++) if (l[k] === b) return ! 0;
    // return ! 1
    return 1;
}
function CSpriteLibrary() {
    var b, l, k, d, h, f;
    this.init = function(n, a, m) {
        k = l = 0;
        d = n;
        h = a;
        f = m;
        b = {}
    };
    this.addSprite = function(d, a) {
        b.hasOwnProperty(d) || (b[d] = {
            szPath: a,
            oSprite: new Image
        },
            l++)
    };
    this.getSprite = function(d) {
        return b.hasOwnProperty(d) ? b[d].oSprite: null
    };
    this._onSpritesLoaded = function() {
        h.call(f)
    };
    this._onSpriteLoaded = function() {
        d.call(f); ++k == l && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var d in b) b[d].oSprite.oSpriteLibrary = this,
            b[d].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            b[d].oSprite.src = b[d].szPath
    };
    this.getNumSprites = function() {
        return l
    }
}
var CANVAS_WIDTH = 1360,
    CANVAS_HEIGHT = 840,
    EDGEBOARD_X = 120,
    EDGEBOARD_Y = 122,
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME = "bd_cartoon_shoutregular",
    TEXT_COLOR = "#ffd800",
    FPS_TIME = 1E3 / 24,
    TIME_STEP_BOX2D = 1 / 60,
    ITINERATION_BOX2D = 10,
    POSITION_ITINERATION_BOX2D = 10,
    TOT_TEAM = 8,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    TWEEN_END_MACTH_Y = .5 * CANVAS_HEIGHT,
    MAX_ASSIGNED_STAR = 3,
    LEVEL_DIAGRAM, GOAL_AREA = 0,
    GOAL_AREA_ENEMY = 1,
    WALL = 2,
    POLE = 3,
    PLAYER = 4,
    LEG = 5,
    BALL = 6,
    HEAD_SHOOT = 7,
    HEEL = 8,
    OPPONENT = 9,
    TIME_TRY_TO_SHOT_BALL_OPPONENT = .7,
    BALL_CATEGORY_COLLISION = 1,
    FIELD_CATEGORY_COLLISION = 2,
    JOINT_CATEGORY_COLLISION = 3,
    OPPONENT_CATEGORY_COLLISION = 4,
    PLAYER_CATEGORY_COLLISION = 5,
    TIME_DESPAWN_HEAD = .2,
    STOP_WALK_DISTANCE_PLAYER = 80,
    CLIMB_PART, BALL_DENSITY = 1,
    BALL_FRICTION = .4,
    BALL_RESTITUTION = .8,
    BALL_LINEAR_DAMPING = .5,
    BALL_LINEAR_DAMPING_GOAL = 2,
    OBJECT, SUPPORTERS_FRAMES = 31,
    SUPPORTERS_POS = {
        x: 0,
        y: 120
    },
    START_TIME_FLAG_TIME = 200,
    STOP_BACK_WALK_POSITION = .5 * CANVAS_WIDTH + CANVAS_WIDTH / 5,
    OFFSET_LEG_POS = {
        x: 10,
        y: 30
    },
    OFFSET_HEAD_POS = {
        x: 15,
        y: -40
    },
    OFFSET_HEEL_POS = {
        x: -5,
        y: 40
    },
    OFFSET_LEG_POS_OPPONENT = {
        x: -10,
        y: 30
    },
    OFFSET_HEAD_POS_OPPONENT = {
        x: -15,
        y: -40
    },
    OFFSET_HEEL_POS_OPPONENT = {
        x: 5,
        y: 40
    },
    MIN_DISTANCE_BETWEEN_PLAYER = 150,
    GO_TO_DISTANCE = 230,
    DISTANCE_START_SHOOT_OPPONENT = 95,
    HEEL_SHOOT_DISTANCE_OPPONENT = 100,
    OFFSET_OPPONENT_FORWOARD_BALL = 40,
    WALL_DENSITY = 1,
    WALL_FRICTION = 1,
    WALL_RESTITUTION = .7,
    WORLD_SCALE = 30,
    TWEEN_CROWD_ON_Y = -170,
    DELETE_LEG_ANGLE_PLAYER = 70,
    DELETE_HEEL_ANGLE_PLAYER = -70,
    DELETE_LEG_ANGLE_OPPONENT = -70,
    DELETE_HEEL_ANGLE_OPPONENT = 70,
    FORCE_AFTER_GOAL_PLAYER = {
        x: .02,
        y: 0
    },
    FORCE_AFTER_GOAL_OPPONENT = {
        x: -.02,
        y: 0
    },
    BALL_POSITION = {
        x: .5 * CANVAS_WIDTH,
        y: 180
    },
    USER_PLAYER_START_POS = {
        x: .5 * CANVAS_WIDTH - 250,
        y: .5 * CANVAS_HEIGHT + 59
    },
    OPPONENT_START_POS = {
        x: .5 * CANVAS_WIDTH + 250,
        y: .5 * CANVAS_HEIGHT + 59
    },
    GOAL_AREA_VERTEX = [{
        x: 0,
        y: 7
    },
        {
            x: 0,
            y: 231
        },
        {
            x: 89,
            y: 231
        },
        {
            x: 89,
            y: 7
        }],
    PLAYER_POLYGON = [[{
        x: 22.5,
        y: 16
    },
        {
            x: -16.5,
            y: 53
        },
        {
            x: -35,
            y: 23
        },
        {
            x: 36.5,
            y: -26
        },
        {
            x: 44.5,
            y: -10
        }], [{
        x: -2.5,
        y: -68
    },
        {
            x: 30.5,
            y: -68
        },
        {
            x: 36.5,
            y: -64
        },
        {
            x: -13.5,
            y: -11
        },
        {
            x: -20.5,
            y: -24
        },
        {
            x: -20.5,
            y: -50
        }], [{
        x: -25.5,
        y: 79
    },
        {
            x: -26.5,
            y: 68
        },
        {
            x: -16.5,
            y: 53
        },
        {
            x: 10.5,
            y: 70
        },
        {
            x: 14.5,
            y: 80
        }], [{
        x: -16.5,
        y: 53
    },
        {
            x: 22.5,
            y: 16
        },
        {
            x: 17.5,
            y: 62
        },
        {
            x: 10.5,
            y: 70
        }], [{
        x: -35.5,
        y: 23
    },
        {
            x: -35,
            y: 15
        },
        {
            x: -13.5,
            y: -11
        },
        {
            x: 36.5,
            y: -64
        },
        {
            x: 36.5,
            y: -26
        }]],
    OPPONENT_POLYGON = [[{
        x: 36,
        y: 8
    },
        {
            x: 18,
            y: 42
        },
        {
            x: 14,
            y: -20
        }], [{
        x: -13.5,
        y: 69.5
    },
        {
            x: -21.5,
            y: 5.5
        },
        {
            x: 18,
            y: 42
        },
        {
            x: 27,
            y: 60
        },
        {
            x: 26.167,
            y: 68.833
        }], [{
        x: 21,
        y: -61
    },
        {
            x: 22,
            y: -37
        },
        {
            x: 14,
            y: -20
        },
        {
            x: -28.5,
            y: -79.5
        },
        {
            x: -.5,
            y: -79.5
        }], [{
        x: -44.5,
        y: -24.5
    },
        {
            x: -37,
            y: -37
        },
        {
            x: -21.5,
            y: 5.5
        }], [{
        x: 14,
        y: -20
    },
        {
            x: 18,
            y: 42
        },
        {
            x: -21.5,
            y: 5.5
        },
        {
            x: -37,
            y: -37
        },
        {
            x: -28.5,
            y: -79.5
        }], [{
        x: -37,
        y: -73
    },
        {
            x: -28.5,
            y: -79.5
        },
        {
            x: -37,
            y: -37
        }]],
    OFFSET_FIELD_Y = 35,
    OFFSET_FIELD_X = 35,
    FIELD_DIAGRAM = [[{
        x: 120,
        y: -200
    },
        {
            x: 120,
            y: 560
        }], [{
        x: 120,
        y: 560
    },
        {
            x: 1240,
            y: 560
        }], [{
        x: 1240,
        y: 560
    },
        {
            x: 1240,
            y: -200
        }], [{
        x: 1240,
        y: -200
    },
        {
            x: 120,
            y: -200
        }]];
OBJECT = [[{
    x: 142,
    y: 324,
    angle: 0,
    density: 0,
    friction: 0,
    restitution: 0,
    offset_front: {
        x: 0,
        y: 0
    },
    sensor: !0,
    offset_back: {
        x: 30,
        y: 0
    },
    info: {
        type: GOAL_AREA_ENEMY
    },
    vertex: GOAL_AREA_VERTEX
}], [{
    x: 1128,
    y: 324,
    angle: 0,
    density: 0,
    friction: 0,
    restitution: 0,
    offset_front: {
        x: 90,
        y: 0
    },
    sensor: !0,
    offset_back: {
        x: 60,
        y: 0
    },
    info: {
        type: GOAL_AREA
    },
    vertex: GOAL_AREA_VERTEX
}], [{
    x: 142,
    y: 300,
    width: 120,
    height: 3,
    angle: 15,
    density: 0,
    friction: .5,
    restitution: 1,
    sensor: !1,
    info: {
        type: POLE
    }
}], [{
    x: 1218,
    y: 300,
    width: 120,
    height: 3,
    angle: -15,
    density: 0,
    friction: .5,
    restitution: 1,
    sensor: !1,
    info: {
        type: POLE
    }
}]];
var PLAYERS_COLLISION = {
        x: USER_PLAYER_START_POS.x,
        y: USER_PLAYER_START_POS.y,
        angle: 0,
        density: 70,
        friction: .1,
        restitution: .1,
        rec_offset: {
            x: -30,
            y: 40
        },
        sensor: !1,
        info: {
            type: PLAYER
        },
        recWidth: 24,
        recHeight: 40,
        rec_center_width: 12,
        radius: 32,
        sph_offset: {
            x: -12,
            y: -35
        },
        rec_neck: {
            x: -50,
            y: -13,
            width: 4,
            height: 7,
            angle: 45
        }
    },
    PLAYER_LEG = {
        width: 2,
        height: 20,
        density: 50,
        pivotX: 0,
        pivotY: -24,
        friction: .5,
        restitution: 2,
        radius: 10,
        info: {
            type: LEG
        },
        lowerAngle: 0,
        upperAngle: DELETE_LEG_ANGLE_PLAYER,
        power: 2E3,
        speed: 8
    },
    PLAYER_HEEL = {
        width: 2,
        height: 25,
        density: 50,
        pivotX: -4,
        pivotY: -26,
        friction: .5,
        restitution: 2,
        radius: 10,
        info: {
            type: HEEL
        },
        lowerAngle: DELETE_HEEL_ANGLE_PLAYER,
        upperAngle: 0,
        power: 2E3,
        speed: -8
    },
    PLAYER_HEAD = {
        radius: 30,
        density: 50,
        friction: .5,
        restitution: 4,
        info: {
            type: HEAD_SHOOT
        },
        distance: 20 / WORLD_SCALE,
        power: 4E3,
        speed: 5,
        mov_allowed: {
            x: 1,
            y: .1
        }
    },
    OPPONENT_COLLISION = {
        x: OPPONENT_START_POS.x,
        y: OPPONENT_START_POS.y,
        angle: 0,
        density: 100,
        friction: .1,
        restitution: .1,
        rec_offset: {
            x: 30,
            y: 40
        },
        sensor: !1,
        info: {
            type: OPPONENT
        },
        recWidth: 24,
        recHeight: 40,
        rec_center_width: -12,
        radius: 32,
        sph_offset: {
            x: 12,
            y: -35
        },
        rec_neck: {
            x: 50,
            y: -13,
            width: 4,
            height: 7,
            angle: -45
        }
    },
    OPPONENT_LEG = {
        width: 2,
        height: 20,
        density: 50,
        pivotX: -4,
        pivotY: -24,
        friction: .5,
        restitution: 2,
        radius: 10,
        info: {
            type: LEG
        },
        lowerAngle: DELETE_LEG_ANGLE_OPPONENT,
        upperAngle: 0,
        power: 2E3,
        speed: -8
    },
    OPPONENT_HEEL = {
        width: 2,
        height: 25,
        density: 50,
        pivotX: 4,
        pivotY: -26,
        friction: .5,
        restitution: 2,
        radius: 10,
        info: {
            type: HEEL
        },
        lowerAngle: 0,
        upperAngle: DELETE_HEEL_ANGLE_OPPONENT,
        power: 2E3,
        speed: 8
    },
    OPPONENT_HEAD = {
        radius: 30,
        density: 50,
        friction: .5,
        restitution: 2,
        info: {
            type: HEAD_SHOOT
        },
        distance: 50 / WORLD_SCALE,
        power: 4E3,
        speed: 5,
        mov_allowed: {
            x: -1,
            y: .1
        }
    },
    FLAG_POSITION = [{
        x: 691,
        y: 285
    },
        {
            x: 896,
            y: 330
        },
        {
            x: 978,
            y: 458
        },
        {
            x: 890,
            y: 574
        },
        {
            x: 691,
            y: 619
        },
        {
            x: 492,
            y: 567
        },
        {
            x: 390,
            y: 448
        },
        {
            x: 495,
            y: 321
        }],
    TIME_RESET_BALL,
    REGULAR_MATCH_TIME,
    EXTENDED_MATCH_TIME,
    OPPONENT_SPEEDS,
    CHARACTER_SPEED,
    OPPONENT_DISTANCE_PROTECTION,
    OPPONENT_DISTANCE_PROTECTION_WHEN_SHOT,
    OPPONENT_DISTANCE_PROTECTION_AGG,
    OPPONENT_DISTANCE_PROTECTION_WHEN_SHOT_AGG,
    REACT_OPP_FOR_HEEL_SHOOT,
    BALL_VELOCITY_X_REACTION,
    BALL_VELOCITY_X_REACTION_ATTACK,
    BALL_AND_CHARACTER_DISTANCE_PROTECTION,
    TIME_REACTION_FROM_SAVE_TO_GO,
    TIME_OPP_BECOME_AGGRESSIVE,
    TIME_AFTER_REACTION,
    TIME_INTERVAL_SHOOT,
    TIME_IN_PROTECT_STATE,
    SCORE_PLAYER_GOAL,
    SCORE_OPPONENT_GOAL,
    SCORE_WIN,
    SCORE_TIE,
    NUM_LEVEL_FOR_ADS,
    ENABLE_FULLSCREEN,
    ENABLE_CHECK_ORIENTATION;
TEXT_GAMEOVER = "GAME OVER";
TEXT_TEAM_0 = "ARGENTINA";
TEXT_TEAM_1 = "BRASIL";
TEXT_TEAM_2 = "ENGLAND";
TEXT_TEAM_3 = "FRANCE";
TEXT_TEAM_4 = "GERMANY";
TEXT_TEAM_5 = "ITALY";
TEXT_TEAM_6 = "NETHERLAND";
TEXT_TEAM_7 = "SPAIN";
TEXT_COMMANDS = "CONTROLS";
TEXT_COMPLETE = "COMPLETE";
TEXT_ALL_COMPLETE = "ALL LEVEL COMPLETE";
TEXT_SELECT_A_LEVEL = "SELECT A LEVEL";
TEXT_TIME = "TIME";
TEXT_TIME_EXT = "EXT TIME";
TEXT_VS = "VS";
TEXT_TEAM_CODE_0 = "ARG";
TEXT_TEAM_CODE_1 = "BRA";
TEXT_TEAM_CODE_2 = "ENG";
TEXT_TEAM_CODE_3 = "FRA";
TEXT_TEAM_CODE_4 = "GER";
TEXT_TEAM_CODE_5 = "ITA";
TEXT_TEAM_CODE_6 = "NED";
TEXT_TEAM_CODE_7 = "ESP";
TEXT_FINISH = "FINAL WHISTLE";
TEXT_SELECT_YOUR_TEAM = "SELECT YOUR TEAM";
TEXT_CREDITS_DEVELOPED = "Developed by";
TEXT_LINK1 = "www.codethislab.com";
TEXT_WIN = "YOU WON";
TEXT_LOSE = "YOU LOSE";
TEXT_SCORES = "SCORES";
TEXT_TIME_EXTENDED = "TIME EXTENDED";
TEXT_SCORE_GOAL_PLAYER = "SCORE PLAYER GOAL";
TEXT_SCORE_GOAL_OPPONENT = "SCORE OPPONENT GOAL";
TEXT_MACTH_SCORE = "SCORE MATCH";
TEXT_TOTAL_SCORE = "TOTAL SCORE";
TEXT_CONGRATULATIONS = "CONGRATULATIONS YOU WON ALL MATCH!";
TEXT_SCORE_PLAYER_GOAL = "Score player goal";
TEXT_SCORE_OPPONENT_GOAL = "Score opponent goal";
TEXT_SCORE_DRAW_MATCH = "Score match draw";
TEXT_SCOR_WON_MATCH = "Score match won";
TEXT_MATCH = "MATCH";
TEXT_KICK_OFF = "KICK OFF";
TEXT_PAUSE = "PAUSE";
TEXT_ARE_SURE = "ARE SURE?";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";
function CPreloader() {
    var b, l, k, d, h, f, n;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        n = new createjs.Container;
        s_oStage.addChild(n)
    };
    this.unload = function() {
        n.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
                createjs.Tween.get(f).to({
                        alpha: 1
                    },
                    500).call(function() {
                    a.unload();
                    s_oMain.gotoMenu()
                })
            },
            1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        n.addChild(a);
        a = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(a);
        d.x = CANVAS_WIDTH / 2 - a.width / 2;
        d.y = CANVAS_HEIGHT - 200;
        n.addChild(d);
        b = a.width;
        l = a.height;
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, 1, l);
        n.addChild(h);
        d.mask = h;
        k = new createjs.Text("", "30px " + FONT_GAME, "#fff");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT - 200;
        k.shadow = new createjs.Shadow("#000", 2, 2, 2);
        k.textBaseline = "alphabetic";
        k.textAlign = "center";
        n.addChild(k);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        n.addChild(f)
    };
    this.refreshLoader = function(a) {
        k.text = a + "%";
        h.graphics.clear();
        a = Math.floor(a * b / 100);
        h.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, a, l)
    };
    this._init()
}
function CMain(b) {
    var l, k = 0,
        d = 0,
        h = STATE_LOADING,
        f, n;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_oStage.preventSelection = !1;
        a.opacity = .5;
        s_bMobile = jQuery.browser.mobile; ! 1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas",
            function(a) {
                return ! 1
            }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        seekAndDestroy() ? f = new CPreloader: window.location.href = "http://www.codethislab.com/contact-us.html";
        // f = new CPreloader;
        l = !0
    };
    this.soundLoaded = function() {
        k++;
        f.refreshLoader(Math.floor(k / d * 100));
        k === d && this._allResourcesLoaded()
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "crowd",
            loop: !0,
            volume: 1,
            ingamename: "crowd"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "goal",
            loop: !0,
            volume: 1,
            ingamename: "goal"
        });
        a.push({
            path: "./sounds/",
            filename: "gameover",
            loop: !1,
            volume: 1,
            ingamename: "gameover"
        });
        a.push({
            path: "./sounds/",
            filename: "kick",
            loop: !1,
            volume: 1,
            ingamename: "kick"
        });
        a.push({
            path: "./sounds/",
            filename: "kick_off",
            loop: !1,
            volume: 1,
            ingamename: "kick_off"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        d += a.length;
        s_aSounds = [];
        for (var f = 0; f < a.length; f++) s_aSounds[a[f].ingamename] = new Howl({
            src: [a[f].path + a[f].filename + ".mp3", a[f].path + a[f].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[f].loop,
            volume: a[f].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_head", "./sprites/but_head.png");
        s_oSpriteLibrary.addSprite("but_kick", "./sprites/but_kick.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_restart_small", "./sprites/but_restart_small.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_continue_big", "./sprites/but_continue_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_select_team", "./sprites/bg_select_team.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("goal_front", "./sprites/goal_front.png");
        s_oSpriteLibrary.addSprite("goal_back", "./sprites/goal_back.png");
        s_oSpriteLibrary.addSprite("keyboard", "./sprites/keyboard.png");
        s_oSpriteLibrary.addSprite("key_head", "./sprites/key_head.png");
        s_oSpriteLibrary.addSprite("key_kick", "./sprites/key_kick.png");
        s_oSpriteLibrary.addSprite("score_board", "./sprites/score_board.png");
        s_oSpriteLibrary.addSprite("time_board", "./sprites/time_board.png");
        s_oSpriteLibrary.addSprite("contact_ball", "./sprites/contact_ball.png");
        s_oSpriteLibrary.addSprite("goal_text", "./sprites/goal_text.png");
        s_oSpriteLibrary.addSprite("crowd_off", "./sprites/crowd_off.png");
        s_oSpriteLibrary.addSprite("crowd_on", "./sprites/crowd_on.png");
        s_oSpriteLibrary.addSprite("bg_congratulations", "./sprites/bg_congratulations.jpg");
        s_oSpriteLibrary.addSprite("flag_selection", "./sprites/flag_selection.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        for (var a = 0; a < TOT_TEAM; a++) s_oSpriteLibrary.addSprite("team_" + a, "./sprites/team_" + a + ".png"),
            s_oSpriteLibrary.addSprite("flag_" + a, "./sprites/flag_" + a + ".png"),
            s_oSpriteLibrary.addSprite("character_pose_" + a, "./sprites/character_pose_" + a + ".png");
        for (a = 0; a < SUPPORTERS_FRAMES; a++) s_oSpriteLibrary.addSprite("supporters_" + a, "./sprites/supporters/supporters_" + a + ".png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        k++;
        f.refreshLoader(Math.floor(k / d * 100));
        k === d && this._allResourcesLoaded()
    };
    this._onAllImagesLoaded = function() {};
    this.preloaderReady = function() {
        this._loadImages(); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        l = !0
    };
    this._allResourcesLoaded = function() {
        f.unload();
        isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
        s_oMain.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        h = STATE_MENU
    };
    this.gotoTeamChoose = function() {
        new CTeamChoose;
        h = STATE_MENU
    };
    this.gotoGame = function(d) {
        n = new CGame(a, d);
        h = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        h = STATE_HELP
    };
    this.gotoCongratulations = function(a, d) {
        new CCongratulations(a, d);
        h = STATE_MENU
    };
    this.stopUpdate = function() {
        l = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block"); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        l = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none"); (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== l) {
            var d = (new Date).getTime();
            s_iTimeElaps = d - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = d;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            h === STATE_GAME && n.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var a = b;
    ENABLE_FULLSCREEN = b.fullscreen;
    ENABLE_CHECK_ORIENTATION = b.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_bFullscreen = !1,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oPhysicsController, s_oAdsLevel = 1,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_aSounds;
function CTextButton(b, l, k, d, h, f, n, a) {
    var m, y, u;
    this._init = function(a, d, f, b, e, h, v) {
        m = [];
        y = [];
        var k = createBitmap(f),
            A = Math.ceil(v / 20),
            l = new createjs.Text(b, "bold " + v + "px " + e, "#000000");
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        var r = l.getBounds();
        l.x = f.width / 2 + A;
        l.y = Math.floor(f.height / 2) + r.height / 3 + A;
        b = new createjs.Text(b, "bold " + v + "px " + e, h);
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        r = b.getBounds();
        b.x = f.width / 2;
        b.y = Math.floor(f.height / 2) + r.height / 3;
        u = new createjs.Container;
        u.x = a;
        u.y = d;
        u.regX = f.width / 2;
        u.regY = f.height / 2;
        u.addChild(k, l, b);
        s_bMobile || (u.cursor = "pointer");
        B.addChild(u);
        this._initListener()
    };
    this.unload = function() {
        u.off("mousedown");
        u.off("pressup");
        B.removeChild(u)
    };
    this.setVisible = function(a) {
        u.visible = a
    };
    this._initListener = function() {
        oParent = this;
        u.on("mousedown", this.buttonDown);
        u.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, d, f) {
        m[a] = d;
        y[a] = f
    };
    this.buttonRelease = function() {
        u.scaleX = 1;
        u.scaleY = 1;
        playSound("click", 1, !1);
        m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(y[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        u.scaleX = .9;
        u.scaleY = .9;
        m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(y[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, d) {
        u.x = a;
        u.y = d
    };
    this.setX = function(a) {
        u.x = a
    };
    this.setY = function(a) {
        u.y = a
    };
    this.getButtonImage = function() {
        return u
    };
    this.getX = function() {
        return u.x
    };
    this.getY = function() {
        return u.y
    };
    var B = a;
    this._init(b, l, k, d, h, f, n);
    return this
}
function CToggle(b, l, k, d, h) {
    var f, n, a, m;
    this._init = function(d, b, h, k) {
        n = [];
        a = [];
        var l = new createjs.SpriteSheet({
            images: [h],
            frames: {
                width: h.width / 2,
                height: h.height,
                regX: h.width / 2 / 2,
                regY: h.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = k;
        m = createSprite(l, "state_" + f, h.width / 2 / 2, h.height / 2, h.width / 2, h.height);
        m.x = d;
        m.y = b;
        m.stop();
        s_bMobile || (m.cursor = "pointer");
        y.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown", this.buttonDown);
        m.off("pressup", this.buttonRelease);
        y.removeChild(m)
    };
    this._initListener = function() {
        m.on("mousedown", this.buttonDown);
        m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(d, f, b) {
        n[d] = f;
        a[d] = b
    };
    this.setCursorType = function(a) {
        m.cursor = a
    };
    this.setActive = function(a) {
        f = a;
        m.gotoAndStop("state_" + f)
    };
    this.buttonRelease = function() {
        m.scaleX = 1;
        m.scaleY = 1;
        playSound("click", 1, !1);
        f = !f;
        m.gotoAndStop("state_" + f);
        n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(a[ON_MOUSE_UP], f)
    };
    this.buttonDown = function() {
        m.scaleX = .9;
        m.scaleY = .9;
        n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(a[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, d) {
        m.x = a;
        m.y = d
    };
    var y = h;
    this._init(b, l, k, d)
}
function CGfxButton(b, l, k, d) {
    var h, f, n, a, m, y, u = !1;
    this._init = function(a, d, b) {
        h = [];
        f = [];
        n = createBitmap(b);
        n.x = a;
        n.y = d;
        y = m = 1;
        n.regX = b.width / 2;
        n.regY = b.height / 2;
        s_bMobile || (n.cursor = "pointer");
        B.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        n.off("mousedown", this.buttonDown);
        n.off("pressup", this.buttonRelease);
        B.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this.setCursorType = function(a) {
        n.cursor = a
    };
    this._initListener = function() {
        n.on("mousedown", this.buttonDown);
        n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, d, b) {
        h[a] = d;
        f[a] = b
    };
    this.addEventListenerWithParams = function(d, b, m, e) {
        h[d] = b;
        f[d] = m;
        a = e
    };
    this.buttonRelease = function() {
        u || (n.scaleX = 0 < m ? 1 : -1, n.scaleY = 1, playSound("click", 1, !1), h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(f[ON_MOUSE_UP], a))
    };
    this.buttonDown = function() {
        u || (n.scaleX = 0 < m ? .9 : -.9, n.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], a))
    };
    this.rotation = function(a) {
        n.rotation = a
    };
    this.getButton = function() {
        return n
    };
    this.setPosition = function(a, d) {
        n.x = a;
        n.y = d
    };
    this.setX = function(a) {
        n.x = a
    };
    this.setY = function(a) {
        n.y = a
    };
    this.getButtonImage = function() {
        return n
    };
    this.block = function(a) {
        u = a;
        n.scaleX = m;
        n.scaleY = y
    };
    this.setScaleX = function(a) {
        m = n.scaleX = a
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(n).to({
                scaleX: .9 * m,
                scaleY: .9 * y
            },
            850, createjs.Ease.quadOut).to({
                scaleX: m,
                scaleY: y
            },
            650, createjs.Ease.quadIn).call(function() {
            t.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(n).to({
                rotation: 5
            },
            75, createjs.Ease.quadOut).to({
                rotation: -5
            },
            140, createjs.Ease.quadIn).to({
                rotation: 0
            },
            75, createjs.Ease.quadIn).wait(750).call(function() {
            t.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(n)
    };
    var B = d;
    this._init(b, l, k);
    var t = this;
    return this
}
function CMenu() {
    var b, l, k, d, h, f, n, a, m, y, u, B, t, r, F = null,
        G = null;
    this._init = function() {
        m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(m);
        var e = s_oSpriteLibrary.getSprite("but_play");
        h = CANVAS_WIDTH / 2;
        f = CANVAS_HEIGHT - 90;
        y = new CGfxButton(h, f, e, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        y.pulseAnimation();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e = s_oSpriteLibrary.getSprite("audio_icon"),
            n = CANVAS_WIDTH - e.height / 2 - 10,
            a = e.height / 2 + 10,
            t = new CToggle(n, a, e, s_bAudioActive, s_oStage),
            t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var A = s_oSpriteLibrary.getSprite("but_info");
        k = e.height / 2 + 10;
        d = e.height / 2 + 10;
        u = new CGfxButton(k, d, A, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
        e = window.document;
        A = e.documentElement;
        F = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
        G = e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen; ! 1 === ENABLE_FULLSCREEN && (F = !1);
        F && !1 === inIframe() && (e = s_oSpriteLibrary.getSprite("but_fullscreen"), b = k + e.width / 2 + 10, l = d, r = new CToggle(b, l, e, s_bFullscreen, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        B = new createjs.Shape;
        B.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(B);
        createjs.Tween.get(B).to({
                alpha: 0
            },
            1E3).call(function() {
            B.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(e, m) {
        y.setPosition(h, f - m);
        u.setPosition(k + e, d + m); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(n - e, m + a);
        F && !1 === inIframe() && r.setPosition(b + s_iOffsetX, l + s_iOffsetY)
    };
    this.unload = function() {
        y.unload();
        y = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(),
            t = null;
        F && !1 === inIframe() && r.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        r.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? G.call(window.document) : F.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButInfoRelease = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, !0));
        s_oMain.gotoTeamChoose()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function CGame(b, l) {
    function k(c) { ! 0 === f && (88 === c.keyCode ? s_oGame.shot() : 90 !== c.keyCode || a || s_oGame.headShot(), n || (37 === c.keyCode ? s_oGame.moveLeft() : 39 === c.keyCode && s_oGame.moveRight()));
        c.preventDefault();
        return ! 1
    }
    function d(c) {
        if (!0 === f) {
            if (37 === c.keyCode) s_oGame.onCommandLeftUp();
            else if (39 === c.keyCode) s_oGame.onCommandRightUp();
            if (90 === c.keyCode || 88 === c.keyCode) s_oGame.onCommandActionUp()
        }
    }
    var h = !0,
        f = !1,
        n = !1,
        a = !1,
        m = !1,
        y = !1,
        u = !1,
        B = !0,
        t = !1,
        r, F, G, e, A, v, M, E, P, z, O, K, N, J, L, g, q, I, x, C, Q, R, c, p, D, w;
    this._init = function() {
        $(s_oMain).trigger("start_session");
        h = !1;
        F = r = 0;
        M = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(M);
        s_oPhysicsController = new CPhysicsController;
        z = new CPhysicsObject;
        z.createAContactListener();
        Q = [];
        R = [];
        c = [];
        this.createSupporters();
        var H = s_oSpriteLibrary.getSprite("team_" + l);
        x = new CGoal;
        var g = s_oSpriteLibrary.getSprite("ball");
        this._createBall(g, BALL_POSITION.x, BALL_POSITION.y, BALL_DENSITY, BALL_FRICTION, BALL_RESTITUTION);
        this._createPlayer(H, USER_PLAYER_START_POS.x, USER_PLAYER_START_POS.y, s_oStage);
        this.createLevel();
        G = l;
        p = this._createRandomOpponentTeamOrder();
        q = this._createOpponentCollision();
        this.createOpponent(p[F], OPPONENT_START_POS.x, OPPONENT_START_POS.y, s_oStage);
        x.createGoalFront();
        D = e = A = 0;
        playSound("crowd", 1, !0);
        v = new CInterface(l, p[F]);
        v.refreshResult(e, A);
        w = REGULAR_MATCH_TIME;
        v.refreshTime(TEXT_TIME + ": " + Math.ceil(w)); ! 1 === s_bMobile && (document.onkeydown = k, document.onkeyup = d)
    };
    this._createRandomOpponentTeamOrder = function() {
        for (var c = [], w = 0, g = 0; g < TOT_TEAM; g++) G !== g && (c[w] = g, w++);
        return c = shuffle(c)
    };
    this.createLevel = function() {
        for (var c = FIELD_DIAGRAM,
                 w = 0; w < c.length; w++) Q[w] = z.addLine(0, 0, c[w][0], c[w][1], 0, WALL_DENSITY, WALL_FRICTION, WALL_RESTITUTION);
        c = OBJECT;
        for (w = 0; w < c.length; w++) for (var g = 0; g < c[w].length; g++) c[w][g].info.type !== POLE ? R[w] = {
            object: z.addPolygon(c[w][g]),
            type: "polygon"
        }: c[w][g].info.type === POLE && (R[w] = {
            object: z.addRectangle(c[w][g], void 0),
            type: "polygon"
        }),
            this.createSpriteObject(c[w][g])
    };
    this.onCommandLeftUp = function() {
        n = !1;
        J.setDirection(0);
        _bPressedKeyLeft = !1;
        J.changeState("idle")
    };
    this.onCommandRightUp = function() {
        n = !1;
        J.setDirection(0);
        _bPressedKeyRight = !1;
        J.changeState("idle")
    };
    this.onCommandActionUp = function() {
        a = !1
    };
    this.shot = function() { ! 1 === J.getHeadShoot() && !1 === J.getHeelShoot() && !1 === J.getLegShoot() && (B ? (J.createPlayerLeg(z), J.changeState("shot")) : (J.createHeel(z), J.changeState("heel_shot")))
    };
    this.headShot = function() { ! 1 === J.getHeadShoot() && !1 === J.getHeelShoot() && !1 === J.getLegShoot() && (J.createPlayerHead(z), 0 === J.getDirection() ? J.changeState("head_shot_idle") : ( - 1 === J.getDirection() || 1 === J.getDirection()) && J.changeState("head_shot_run"))
    };
    this.moveLeft = function() {
        n = !0;
        J.setDirection( - 1);
        J.changeState("reverse")
    };
    this.moveRight = function() {
        n = !0;
        J.setDirection(1);
        J.changeState("run");
        J.rotate(1)
    };
    this.createSpriteObject = function(c) {
        c.info.type !== GOAL_AREA && c.info.type !== GOAL_AREA_ENEMY && c.info.type === WALL && this.createGraphicsWallObject(c)
    };
    this.setBallLinearDamping = function(c) {
        s_oPhysicsController.setElementLinearDamping(O, c)
    };
    this.unload = function() {
        h = !1;
        P && (P.unload(), P = null);
        E && (E.unload(), E = null);
        v.unload();
        K.unload();
        this.destroyEnginePhysics();
        J.unload();
        L.unload();
        stopSound("crowd");
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens(); ! 1 === s_bMobile && (document.onkeydown = null, document.onkeyup = null)
    };
    this.destroyEnginePhysics = function() {
        s_oPhysicsController.destroyAllJoint();
        s_oPhysicsController.destroyAllBody();
        s_oPhysicsController.destroyWorld();
        s_oPhysicsController = null
    };
    this._createPlayer = function(c, w, p, a) {
        J = new CCharacter(w, p, c, CHARACTER_SPEED, a);
        g = z.addCollisionShape(PLAYERS_COLLISION);
        J.update(g)
    };
    this.createOpponent = function(c, w, g, p) {
        c = s_oSpriteLibrary.getSprite("team_" + c);
        L = new COpponent(w, g, c, OPPONENT_SPEEDS[F], z, q, p);
        L.setDistanceProtection(OPPONENT_DISTANCE_PROTECTION[F])
    };
    this._createOpponentCollision = function() {
        return z.addCollisionShape(OPPONENT_COLLISION)
    };
    this.resetPlayersPos = function() {
        J.setPosition(USER_PLAYER_START_POS.x, USER_PLAYER_START_POS.y);
        var c = {
                x: J.getX() + PLAYERS_COLLISION.rec_offset.x,
                y: J.getY() + PLAYERS_COLLISION.rec_offset.y
            },
            w = {
                x: J.getX() + PLAYERS_COLLISION.sph_offset.x,
                y: J.getY() + PLAYERS_COLLISION.sph_offset.y
            };
        s_oPhysicsController.setElementPosition(g.fixture1, c);
        s_oPhysicsController.setElementPosition(g.fixture2, w);
        f = !0
    };
    this.resetOpponentPos = function() {
        L.setPosition(OPPONENT_START_POS.x, OPPONENT_START_POS.y);
        var c = {
                x: L.getX() + OPPONENT_COLLISION.rec_offset.x,
                y: L.getY() + OPPONENT_COLLISION.rec_offset.y
            },
            w = {
                x: L.getX() + OPPONENT_COLLISION.sph_offset.x,
                y: L.getY() + OPPONENT_COLLISION.sph_offset.y
            };
        s_oPhysicsController.setElementPosition(q.fixture1, c);
        s_oPhysicsController.setElementPosition(q.fixture2, w)
    };
    this.removeLeg = function(c) {
        s_oPhysicsController.destroyJoint(c.jointLeg);
        s_oPhysicsController.destroyJoint(c.jointFoot);
        s_oPhysicsController.destroyBody(c.fixture1);
        s_oPhysicsController.destroyBody(c.fixture2);
        s_oPhysicsController.destroyBody(c.fixture3)
    };
    this.removeHead = function(c) {
        s_oPhysicsController.destroyJoint(c.joint);
        s_oPhysicsController.destroyBody(c.fixture1);
        s_oPhysicsController.destroyBody(c.fixture2)
    };
    this._createBall = function(c, w, g, p, a, e) {
        O = z.addBall(c.width / 2, w, g, p, a, e);
        K = new CBall(w, g, c)
    };
    this.getBallSpritePos = function() {
        return {
            x: K.getX(),
            y: K.getY()
        }
    };
    this.getCharacterPos = function() {
        return {
            x: J.getX(),
            y: J.getY()
        }
    };
    this.getPlayerTeam = function() {
        return G
    };
    this.getOpponentTeam = function() {
        return p[F]
    };
    this.addImpulseToBall = function(c) {
        s_oPhysicsController.applyImpulse(O, c)
    };
    this.setBallLinearDamping = function(c) {
        s_oPhysicsController.setElementLinearDamping(O, c)
    };
    this.playerGoal = function() {
        y || m || (e++, v.crowdEffectOn(), C.startAnimation(1), this.afterGoal(), playSound("goal", 1, !1), I = FORCE_AFTER_GOAL_PLAYER)
    };
    this.createSupporters = function() {
        C = new CSpriteAnimator;
        for (var c = 0; c < SUPPORTERS_FRAMES; c++) C.loadSprites(s_oSpriteLibrary.getSprite("supporters_" + c), SUPPORTERS_POS.x, SUPPORTERS_POS.y, 0, 0)
    };
    this.opponentGoal = function() {
        y || m || (A++, this.afterGoal(), playSound("gameover", 1, !1), I = FORCE_AFTER_GOAL_OPPONENT)
    };
    this.playKickSound = function() {
        m || playSound("kick", 1, !1)
    };
    this.afterGoal = function() {
        v.refreshResult(e, A);
        y = !0;
        D = TIME_RESET_BALL;
        v.createGoalText(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT - 150);
        this.blockMatch();
        this.setBallLinearDamping(BALL_LINEAR_DAMPING_GOAL)
    };
    this.blockMatch = function() {
        f = !1;
        J.setDirection(0);
        J.changeState("idle");
        L.move(0);
        _bPressedKeyRight = _bPressedKeyLeft = !1;
        u = !0;
        n = !1;
        s_bMobile && v.blockCommand(!0)
    };
    this.restartBallPos = function() {
        var c = {
            x: BALL_POSITION.x,
            y: BALL_POSITION.y
        };
        s_oPhysicsController.setElementPosition(O, c);
        s_oPhysicsController.setElementLinearVelocity(O, {
            x: 0,
            y: 0
        });
        s_oPhysicsController.setElementAngularVelocity(O, 0);
        0 >= s_oPhysicsController.getElementPosition(O).x && s_oPhysicsController.setElementPosition(O, c);
        this.moveBall();
        this.setBallLinearDamping(BALL_LINEAR_DAMPING)
    };
    this.resetState = function() {
        u = y = !1
    };
    this.addObjectToStage = function(c, w, g) {
        c.x = w.x;
        c.y = w.y;
        c.regX = g.width / 2;
        c.regY = g.height / 2;
        s_oStage.addChild(c)
    };
    this.onExit = function() {
        this.unload();
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        setVolume("soundtrack", 1);
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        v.onExitFromHelp()
    };
    this._onExitVsPanel = function() {
        v._onExitVsPanel();
        v.createStartMatchText();
        $(s_oMain).trigger("start_level", F)
    };
    this.startMatch = function() {
        f = h = !0;
        this.resetState();
        t = m = !1;
        v.blockAllButton(!1);
        s_bMobile && v.blockCommand(!1);
        setVolume("soundtrack", .3);
        playSound("kick_off", 1, !1)
    };
    this.moveBall = function() {
        var c = s_oPhysicsController.getElementPosition(O);
        K.setPosition(c.x, c.y);
        K.setAngle(c.angle)
    };
    this.addHitEffect = function(c) {
        if (!m) {
            var w = s_oSpriteLibrary.getSprite("contact_ball");
            var g = createBitmap(w);
            g.x = c.x;
            g.y = c.y;
            g.regX = .5 * w.width;
            g.regY = .5 * w.height;
            s_oStage.addChild(g);
            createjs.Tween.get(g).wait(100).call(function() {
                s_oStage.removeChild(g)
            })
        }
    };
    this.unloadLevel = function() {
        for (var c = 0; c < Q.length; c++) s_oPhysicsController.destroyBody(Q[c]);
        for (c = 0; c < R.length; c++) if ("polygon" === R[c].type) s_oPhysicsController.destroyBody(R[c].object);
        else if ("line" === R[c].type) for (var w = R[c].object, g = 0; g < w.length; g++) s_oPhysicsController.destroyBody(w[g]);
        Q = [];
        R = []
    };
    this.onContinue = function(c) {
        F++;
        this.nextLevel();
        this.restartBallPos();
        this.resetOpponentPos();
        this.resetPlayersPos();
        this.resetResult();
        f = h = !1;
        s_bMobile && v.blockCommand(!0);
        J.update(g, L.getX());
        s_oPhysicsController.update();
        var w = s_oSpriteLibrary.getSprite("msg_box");
        v.createVsPanel(w, G, p[F], c, F, 750)
    };
    this.unpause = function(c) {
        h = c; ! 0 === c ? (J.playAnimation(), L.playAnimation()) : (J.stopAnimation(), L.stopAnimation())
    };
    this.nextLevel = function() {
        var c = L.getChildIndex();
        L.unload();
        this.createOpponent(p[F], OPPONENT_START_POS.x, OPPONENT_START_POS.y, s_oStage);
        L.setChildIndex(c);
        v.setTeams(G, p[F]);
        v.setTeamsFlagScoreBoard(G, p[F])
    };
    this.restartLevel = function() {
        this.resetResult();
        this.restartBallPos();
        this.resetPlayersPos();
        this.resetOpponentPos();
        this.resetState();
        v.blockAllButton(!1);
        s_bMobile && v.blockCommand(!1);
        m = t = !1;
        playSound("kick_off", 1, !1)
    };
    this.resetResult = function() {
        w = REGULAR_MATCH_TIME;
        v.refreshTime(TEXT_TIME + ": " + Math.ceil(w));
        e = A = 0;
        v.refreshResult(e, A)
    };
    this.ballForwoardPlayer = function() {
        B = J.getX() > K.getX() ? !1 : !0
    };
    this.matchTime = function(c) {
        0 < w ? (w -= c, v.refreshTime(!1 === t ? TEXT_TIME + ": " + Math.ceil(w) : TEXT_TIME_EXT + ": " + Math.ceil(w)), this.changeOpponentStrategy()) : this.finishTime()
    };
    this.changeOpponentStrategy = function() {
        A < e && w < TIME_OPP_BECOME_AGGRESSIVE ? L.getAggressive() || L.setAggressive(!0, F) : L.getAggressive() && L.setAggressive(!1, F)
    };
    this.extendTime = function() {
        this.restartBallPos();
        this.resetPlayersPos();
        this.resetState();
        this.resetOpponentPos();
        w = EXTENDED_MATCH_TIME;
        v.refreshTime(TEXT_TIME_EXT + ": " + Math.ceil(w));
        m = !1;
        s_bMobile && v.blockCommand(!1);
        playSound("kick_off", 1, !1)
    };
    this.finishTime = function() {
        this.blockMatch();
        J.changeState("idle");
        L.changeState("idle");
        m = !0;
        if (e === A && !1 === t) v.createExtendedTimeText(),
            t = !0;
        else {
            var c = !1;
            L.removeAllComponent();
            var w = this.calculateNewScore();
            if (e > A) {
                var g = !0;
                playSound("goal", 1, !1);
                r = w.new_score;
                this.storesResult();
                F === TOT_TEAM - 2 && (c = !0)
            } else g = !1,
                playSound("gameover", 1, !1);
            $(s_oMain).trigger("end_level", F);
            v.createEndMatchText(e, A, g, w, c);
            v.blockAllButton(!0)
        }
    };
    this.storesResult = function() {
        c[F] = {
            player_team: G,
            opponent_team: p[F],
            result: v.getScoreBoardResult()
        }
    };
    this._onEnd = function() {
        this.unload();
        $(s_oMain).trigger("end_session");
        setVolume("soundtrack", 1);
        s_oMain.gotoCongratulations(c, r)
    };
    this.calculateNewScore = function() {
        var c = {
            score: r,
            player_goal_score: 0,
            opponent_goal_score: 0,
            score_match: 0,
            new_score: 0
        };
        c.player_goal_score = e * SCORE_PLAYER_GOAL;
        c.opponent_goal_score = A * SCORE_OPPONENT_GOAL;
        c.score_match = t ? SCORE_TIE: SCORE_WIN;
        c.new_score = c.score + c.player_goal_score + c.opponent_goal_score + c.score_match;
        return c
    };
    this.startGameAfterGoal = function() {
        this.restartBallPos();
        this.resetPlayersPos();
        this.resetState();
        this.resetOpponentPos();
        playSound("kick_off", 1, !1);
        s_bMobile && v.blockCommand(!1);
        this.addImpulseToBall(I)
    };
    this.update = function() {
        if (h) {
            var c = 1 / createjs.Ticker.framerate;
            this.moveBall();
            N = s_oPhysicsController.getElementVelocity(O);
            if (y) C.getStateAnimation() && C.update(),
                D -= c,
            0 >= D && this.startGameAfterGoal();
            else {
                if (!u) {
                    var w = {
                        x: J.getX(),
                        y: J.getY()
                    };
                    L.update(q, N, w, F)
                }
                m || this.matchTime(c)
            }
            this.ballForwoardPlayer();
            J.update(g, L.getX());
            s_oPhysicsController.update()
        }
    };
    s_oGame = this;
    TIME_RESET_BALL = b.time_reset_ball;
    REGULAR_MATCH_TIME = b.regular_match_time;
    EXTENDED_MATCH_TIME = b.extend_match_time;
    SCORE_PLAYER_GOAL = b.add_score_player_goal;
    SCORE_OPPONENT_GOAL = b.remove_score_opponent_goal;
    SCORE_WIN = b.score_win;
    SCORE_TIE = b.score_tie;
    OPPONENT_SPEEDS = b.opponent_speeds;
    CHARACTER_SPEED = b.character_speed;
    OPPONENT_DISTANCE_PROTECTION = b.opponent_distance_protection;
    OPPONENT_DISTANCE_PROTECTION_WHEN_SHOT = b.opponent_distance_protection_after_shoot;
    OPPONENT_DISTANCE_PROTECTION_AGG = b.opponent_distance_protection_aggressive;
    OPPONENT_DISTANCE_PROTECTION_WHEN_SHOT_AGG = b.opponent_distance_protection_after_shoot_aggressive;
    REACT_OPP_FOR_HEEL_SHOOT = b.reactivity_opponent_for_hell_shoot;
    BALL_AND_CHARACTER_DISTANCE_PROTECTION = b.ball_and_character_distance_protection;
    BALL_VELOCITY_X_REACTION = b.ball_velocity_x_reaction;
    BALL_VELOCITY_X_REACTION_ATTACK = b.ball_velocity_x_reaction_attack;
    TIME_REACTION_FROM_SAVE_TO_GO = b.time_reaction_from_save_to_go;
    TIME_OPP_BECOME_AGGRESSIVE = b.time_opp_become_aggressive;
    TIME_AFTER_REACTION = b.time_after_reaction;
    TIME_INTERVAL_SHOOT = b.time_interval_shoot;
    TIME_IN_PROTECT_STATE = b.time_in_protection_state;
    TIME_REFRESH_AI = b.time_refresh_AI;
    NUM_LEVEL_FOR_ADS = b.num_levels_for_ads;
    this._init()
}
var s_oGame;
function CInterface(b, l) {
    var k, d, h, f, n, a, m, y, u, B, t, r, F, G = null,
        e = null,
        A, v, M, E, P, z, O, K, N, J, L, g;
    this._init = function(q, b) {
        this.setTeams(q, b);
        var x = s_oSpriteLibrary.getSprite("score_board");
        E = new CScoreBoard(x, .5 * CANVAS_WIDTH, .5 * x.height, N, J, L, g);
        x = s_oSpriteLibrary.getSprite("time_board");
        P = new CTimeBoard(x, 10, .5 * x.height - 4);
        x = s_oSpriteLibrary.getSprite("crowd_off");
        z = new CCrowd(x, 0, CANVAS_HEIGHT - .5 * x.height);
        s_bMobile && (O = new CController, this.blockCommand(!0));
        x = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - x.height / 2 - 10;
        f = x.height / 2 + 10;
        u = new CGfxButton(h, f, x, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onExit, this);
        x = s_oSpriteLibrary.getSprite("but_pause");
        k = h - x.height - 10;
        d = f;
        B = new CGfxButton(k, d, x, s_oStage);
        B.addEventListener(ON_MOUSE_UP, this._onPause, this);
        this.blockAllButton(!0); ! 1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (x = s_oSpriteLibrary.getSprite("audio_icon"), m = k - x.height - 10, y = f, r = new CToggle(m, y, x, s_bAudioActive, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), x = s_oSpriteLibrary.getSprite("but_fullscreen"), n = m - x.width / 2 - 10, a = y) : (x = s_oSpriteLibrary.getSprite("but_fullscreen"), n = k - x.height - 10, a = f);
        var C = window.document,
            I = C.documentElement;
        G = I.requestFullscreen || I.mozRequestFullScreen || I.webkitRequestFullScreen || I.msRequestFullscreen;
        e = C.exitFullscreen || C.mozCancelFullScreen || C.webkitExitFullscreen || C.msExitFullscreen; ! 1 === ENABLE_FULLSCREEN && (G = !1);
        G && !1 === inIframe() && (F = new CToggle(n, a, x, s_bFullscreen, s_oStage), F.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new CHelpPanel(0, 0, s_oSpriteLibrary.getSprite("bg_help"), L);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.setTeams = function(a, e) {
        N = eval("TEXT_TEAM_CODE_" + a);
        J = eval("TEXT_TEAM_CODE_" + e);
        L = a;
        g = e
    };
    this.setTeamsFlagScoreBoard = function(g, a) {
        E.changeTeamsFlag(g, a)
    };
    this.refreshButtonPos = function(g, e) {
        u.setPosition(h - g, e + f);
        B.setPosition(k - g, e + d); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(m - g, e + y);
        G && !1 === inIframe() && F.setPosition(n - s_iOffsetX, a + s_iOffsetY);
        var q = E.getStartPosition();
        E.setPosition(q.x, q.y + e);
        q = P.getStartPosition();
        P.setPosition(q.x + g, q.y + e);
        s_bMobile && this.controllerPos(g, e)
    };
    this.controllerPos = function(g, a) {
        var e = O.getStartPositionRightSide(),
            q = O.getStartPositionLeftSide();
        O.setPositionLeftSide(q.x - g, q.y - a);
        O.setPositionRightSide(e.x + g, e.y - a)
    };
    this.unload = function() {
        u.unload();
        u = null;
        t && t.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(),
            r = null;
        G && !1 === inIframe() && F.unload();
        s_bMobile && O.unload();
        s_oInterface = null
    };
    this.refreshResult = function(g, a) {
        E.refresh(N + " " + g + " - " + a + " " + J)
    };
    this.refreshTime = function(g) {
        P.refresh(g)
    };
    this.onExitFromHelp = function() {
        this.createVsPanel(null, L, g, null, null, 0)
    };
    this.crowdEffectOn = function() {
        var g = z.getPosition(),
            a = s_oSpriteLibrary.getSprite("crowd_on");
        g.y += .3 * a.height;
        z.crowOn(s_oSpriteLibrary.getSprite("crowd_on"), g.x, g.y, 750)
    };
    this.createEndMatchText = function(g, a, e, d, f) {
        var q = new createjs.Container;
        q.x = .5 * CANVAS_WIDTH;
        q.y = -50;
        var c = new createjs.Text(TEXT_FINISH, "50px " + FONT_GAME, "#000000");
        c.x = 0;
        c.y = 0;
        c.textAlign = "center";
        c.outline = 5;
        q.addChild(c);
        c = new createjs.Text(TEXT_FINISH, "50px " + FONT_GAME, TEXT_COLOR);
        c.x = 0;
        c.y = 0;
        c.textAlign = "center";
        q.addChild(c);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
                y: TWEEN_END_MACTH_Y
            },
            1250, createjs.Ease.elasticOut).call(function() {
            createjs.Tween.get(q).to({
                    scaleX: 0,
                    scaleY: 0
                },
                500, createjs.Ease.quartIn).call(function() {
                e ? s_oInterface.createWinPanel(g, a, d, f) : s_oInterface.createLosePanel(g, a, d);
                setVolume("soundtrack", 1);
                s_oStage.removeChild(q)
            })
        })
    };
    this.createExtendedTimeText = function() {
        var g = new createjs.Container;
        g.x = -100;
        g.y = .5 * CANVAS_HEIGHT;
        var a = new createjs.Text(TEXT_TIME_EXTENDED, "50px " + FONT_GAME, "#000000");
        a.x = 0;
        a.y = 0;
        a.textAlign = "center";
        a.outline = 5;
        g.addChild(a);
        a = new createjs.Text(TEXT_TIME_EXTENDED, "50px " + FONT_GAME, TEXT_COLOR);
        a.x = 0;
        a.y = 0;
        a.textAlign = "center";
        g.addChild(a);
        s_oStage.addChild(g);
        createjs.Tween.get(g).to({
                x: .5 * CANVAS_WIDTH
            },
            750, createjs.Ease.cubicOut).call(function() {
            createjs.Tween.get(g).to({
                    x: CANVAS_WIDTH + 100
                },
                750, createjs.Ease.cubicIn).call(function() {
                s_oGame.extendTime();
                s_oStage.removeChild(g)
            })
        })
    };
    this.createLosePanel = function(a, e) {
        v = new CLosePanel(s_oSpriteLibrary.getSprite("bg_congratulations"));
        v.show(a, e, L, g)
    };
    this.createWinPanel = function(a, e, x, d) {
        M = new CWinPanel(s_oSpriteLibrary.getSprite("bg_congratulations"), d);
        M.show(a, e, L, g, x)
    };
    this.createVsPanel = function(g, a, e, d, f, b) {
        A = new CVsPanel(g, a, e, f, b);
        null !== d && A.setChildIndex(d)
    };
    this.blockAllButton = function(g) {
        u.block(g);
        B.block(g)
    };
    this.getScoreBoardResult = function() {
        return E.getResult()
    };
    this.unloadHelpPanel = function() {
        t && (t.unload(), t = null)
    };
    this.createGoalText = function(g, a) {
        var e = s_oSpriteLibrary.getSprite("goal_text");
        var q = createBitmap(e);
        q.regX = .5 * e.width;
        q.regY = .5 * e.height;
        q.x = g;
        q.y = a;
        q.scaleX = 0;
        q.scaleY = 0;
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
                scaleX: 1,
                scaleY: 1
            },
            500, createjs.Ease.quadOut).call(function() {
            createjs.Tween.get(q).wait(500).to({
                    scaleX: 0,
                    scaleY: 0,
                    alpha: 0
                },
                500, createjs.Ease.quadOut).call(function() {
                s_oStage.removeChild(q)
            })
        })
    };
    this._onExitVsPanel = function() {
        A.unload();
        A = null
    };
    this.createStartMatchText = function() {
        var g = new createjs.Container;
        g.x = .5 * CANVAS_WIDTH;
        g.y = -50;
        var a = new createjs.Text(TEXT_KICK_OFF, "50px " + FONT_GAME, "#000000");
        a.x = 0;
        a.y = 0;
        a.textAlign = "center";
        a.outline = 5;
        g.addChild(a);
        a = new createjs.Text(TEXT_KICK_OFF, "50px " + FONT_GAME, TEXT_COLOR);
        a.x = 0;
        a.y = 0;
        a.textAlign = "center";
        g.addChild(a);
        s_oStage.addChild(g);
        createjs.Tween.get(g).to({
                y: TWEEN_END_MACTH_Y
            },
            1250, createjs.Ease.elasticOut).call(function() {
            createjs.Tween.get(g).to({
                    scaleX: 0,
                    scaleY: 0
                },
                500, createjs.Ease.quartIn).call(function() {
                s_oGame.startMatch();
                s_oStage.removeChild(g)
            })
        })
    };
    this.createPauseInterface = function() {
        K = new CPause
    };
    this.unloadPause = function() {
        K.unload();
        K = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() { (new CAreYouSurePanel(s_oStage)).show()
    };
    this.blockCommand = function(g) {
        s_bMobile && O.block(g)
    };
    this._onPause = function() {
        s_oGame.unpause(!1);
        this.createPauseInterface()
    };
    this.resetFullscreenBut = function() {
        F.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? e.call(window.document) : G.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(b, l);
    return this
}
var s_oInterface = null;
function CHelpPanel(b, l, k, d) {
    var h, f, n, a = !1,
        m, y, u, B, t, r, F;
    this._init = function(a, e, d, f) {
        m = createBitmap(d);
        y = new createjs.Container;
        y.x = a;
        y.y = e;
        y.addChild(m);
        s_oStage.addChild(y);
        this.page1();
        y.on("pressup",
            function() {
                var a = {
                    container: u,
                    next_page: 3
                }; ! 0 !== u.visible && !0 === B.visible && (a.container = B);
                t ? t.block(!0) : r && (r.block(!0), F.block(!0));
                s_oHelpPanel.onButPress(a)
            },
            null, !0);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.page1 = function() {
        if (u) u.visible = !0,
            createjs.Tween.get(u).to({
                    alpha: 1
                },
                750, createjs.Ease.cubicOut);
        else {
            u = new createjs.Container;
            u.alpha = 0;
            var a = new createjs.Text(TEXT_COMMANDS, "40px " + FONT_GAME, "#000000");
            a.textAlign = "center";
            a.lineWidth = 600;
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT - 150;
            a.outline = 5;
            u.addChild(a);
            a = new createjs.Text(TEXT_COMMANDS, "40px " + FONT_GAME, TEXT_COLOR);
            a.textAlign = "center";
            a.lineWidth = 600;
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT - 150;
            u.addChild(a);
            this._createPlayer(d, "run", .5 * CANVAS_WIDTH - 220, .5 * CANVAS_HEIGHT - 20, u);
            this._createPlayer(d, "shot_help", .5 * CANVAS_WIDTH + 220, .5 * CANVAS_HEIGHT - 20, u);
            this._createPlayer(d, "head_help", .5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT - 20, u);
            if (s_bMobile) {
                a = s_oSpriteLibrary.getSprite("arrow");
                var e = createBitmap(a);
                e.regX = .5 * a.width;
                e.regY = .5 * a.height;
                e.x = .5 * CANVAS_WIDTH - 270;
                e.y = .5 * CANVAS_HEIGHT + 110;
                e.scaleX = -.7;
                e.scaleY = .7;
                u.addChild(e);
                e = createBitmap(a);
                e.regX = .5 * a.width;
                e.regY = .5 * a.height;
                e.x = .5 * CANVAS_WIDTH - 170;
                e.y = .5 * CANVAS_HEIGHT + 110;
                e.scaleX = .7;
                e.scaleY = .7;
                u.addChild(e);
                a = s_oSpriteLibrary.getSprite("but_kick");
                e = createBitmap(a);
                e.regX = .5 * a.width;
                e.regY = .5 * a.height;
                e.x = .5 * CANVAS_WIDTH + 220;
                e.y = .5 * CANVAS_HEIGHT + 110;
                e.scaleX = .6;
                e.scaleY = .6;
                u.addChild(e);
                a = s_oSpriteLibrary.getSprite("but_head");
                e = createBitmap(a);
                e.regX = .5 * a.width;
                e.regY = .5 * a.height;
                e.x = .5 * CANVAS_WIDTH;
                e.y = .5 * CANVAS_HEIGHT + 110;
                e.scaleX = .6;
                e.scaleY = .6
            } else a = s_oSpriteLibrary.getSprite("keyboard"),
                e = createBitmap(a),
                e.regX = .5 * a.width,
                e.regY = .5 * a.height,
                e.x = .5 * CANVAS_WIDTH - 220,
                e.y = .5 * CANVAS_HEIGHT + 130,
                u.addChild(e),
                a = s_oSpriteLibrary.getSprite("key_kick"),
                e = createBitmap(a),
                e.regX = .5 * a.width,
                e.regY = .5 * a.height,
                e.x = .5 * CANVAS_WIDTH + 220,
                e.y = .5 * CANVAS_HEIGHT + 130,
                u.addChild(e),
                a = s_oSpriteLibrary.getSprite("key_head"),
                e = createBitmap(a),
                e.regX = .5 * a.width,
                e.regY = .5 * a.height,
                e.x = .5 * CANVAS_WIDTH,
                e.y = .5 * CANVAS_HEIGHT + 130;
            u.addChild(e);
            createjs.Tween.get(u).to({
                    alpha: 1
                },
                750, createjs.Ease.cubicOut);
            h = {
                x: .5 * CANVAS_WIDTH + 600,
                y: .5 * CANVAS_HEIGHT + 340
            };
            t = this.createButtonSwitchPage(h, u, this.onButPress, 1, {
                container: u,
                next_page: 2
            });
            t.pulseAnimation();
            s_oStage.addChild(u)
        }
    };
    this.page2 = function() {
        if (B) B.visible = !0,
            createjs.Tween.get(B).to({
                    alpha: 1
                },
                750, createjs.Ease.cubicOut);
        else {
            B = new createjs.Container;
            B.alpha = 0;
            var a = new createjs.Text(TEXT_SCORES, "40px " + FONT_GAME, "#000000");
            a.textAlign = "center";
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT - 150;
            a.outline = 5;
            B.addChild(a);
            var e = new createjs.Text(TEXT_SCORES, "40px " + FONT_GAME, TEXT_COLOR);
            e.textAlign = "center";
            e.lineWidth = 600;
            e.x = a.x;
            e.y = a.y;
            B.addChild(e);
            a = new createjs.Text(TEXT_SCORE_PLAYER_GOAL + " +" + SCORE_PLAYER_GOAL, "24px " + FONT_GAME, "#000000");
            a.textAlign = "center";
            a.lineWidth = 600;
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT - 60;
            a.outline = 5;
            B.addChild(a);
            e = new createjs.Text(a.text, "24px " + FONT_GAME, TEXT_COLOR);
            e.textAlign = "center";
            e.lineWidth = 600;
            e.x = a.x;
            e.y = a.y;
            B.addChild(e);
            a = new createjs.Text(TEXT_SCORE_OPPONENT_GOAL + " " + SCORE_OPPONENT_GOAL, "24px " + FONT_GAME, "#000000");
            a.textAlign = "center";
            a.lineWidth = 600;
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT;
            a.outline = 5;
            B.addChild(a);
            e = new createjs.Text(a.text, "24px " + FONT_GAME, TEXT_COLOR);
            e.textAlign = "center";
            e.lineWidth = 600;
            e.x = a.x;
            e.y = a.y;
            B.addChild(e);
            a = new createjs.Text(TEXT_SCORE_DRAW_MATCH + " +" + SCORE_TIE, "24px " + FONT_GAME, "#000000");
            a.textAlign = "center";
            a.lineWidth = 600;
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT + 60;
            a.outline = 5;
            B.addChild(a);
            e = new createjs.Text(a.text, "24px " + FONT_GAME, TEXT_COLOR);
            e.textAlign = "center";
            e.lineWidth = 600;
            e.x = a.x;
            e.y = a.y;
            B.addChild(e);
            a = new createjs.Text(TEXT_SCOR_WON_MATCH + " +" + SCORE_WIN, "24px " + FONT_GAME, "#000000");
            a.textAlign = "center";
            a.lineWidth = 600;
            a.x = .5 * CANVAS_WIDTH;
            a.y = .5 * CANVAS_HEIGHT + 120;
            a.outline = 5;
            B.addChild(a);
            e = new createjs.Text(a.text, "24px " + FONT_GAME, TEXT_COLOR);
            e.textAlign = "center";
            e.lineWidth = 600;
            e.x = a.x;
            e.y = a.y;
            B.addChild(e);
            createjs.Tween.get(B).to({
                    alpha: 1
                },
                750, createjs.Ease.cubicOut);
            f = {
                x: .5 * CANVAS_WIDTH - 600,
                y: .5 * CANVAS_HEIGHT + 340
            };
            r = this.createButtonSwitchPage(f, B, this.onButPress, -1, {
                container: B,
                next_page: 1
            });
            n = {
                x: .5 * CANVAS_WIDTH + 600,
                y: .5 * CANVAS_HEIGHT + 340
            };
            F = this.createButtonSwitchPage(n, B, this.onButPress, 1, {
                container: B,
                next_page: 3
            });
            F.pulseAnimation();
            s_oStage.addChild(B);
            this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
        }
    };
    this.onButPress = function(d) {
        1 === d.next_page ? (F.block(!0), r.block(!0), t.block(!1)) : 2 === d.next_page ? (t.block(!0), r && (F.block(!1), r.block(!1))) : 3 === d.next_page && (r && (F.block(!0), r.block(!0)), t.block(!0));
        createjs.Tween.get(d.container).to({
                alpha: 0
            },
            800).call(function() {
            d.container.visible = !1;
            1 === d.next_page ? s_oHelpPanel.page1() : 2 === d.next_page ? s_oHelpPanel.page2() : 3 !== d.next_page || a || s_oHelpPanel._onExitHelp()
        })
    };
    this._createPlayer = function(a, e, d, f, b) {
        a = s_oSpriteLibrary.getSprite("team_" + a);
        d = new CCharacter(d, f, a, 1, b);
        d.changeState(e);
        return d
    };
    this.createButtonSwitchPage = function(a, e, d, f, b) {
        var h = s_oSpriteLibrary.getSprite("but_continue");
        a = new CGfxButton(a.x, a.y, h, e);
        a.addEventListenerWithParams(ON_MOUSE_UP, d, this, b);
        a.setScaleX(f);
        return a
    };
    this.refreshButtonPos = function(a, e) {
        t.setPosition(h.x - a, h.y - e);
        r && r.setPosition(f.x + a, f.y - e);
        F && F.setPosition(n.x - a, n.y - e)
    };
    this.unload = function() {
        createjs.Tween.get(y).to({
                alpha: 0
            },
            700, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(y)
        })
    };
    this._onExitHelp = function() {
        a = !0;
        s_oStage.removeChild(u);
        s_oStage.removeChild(B);
        s_oGame._onExitHelp()
    };
    s_oHelpPanel = this;
    this._init(b, l, k, d)
}
var s_oHelpPanel = null;
function CLosePanel(b) {
    var l, k, d, h, f, n, a, m, y;
    this._init = function(b) {
        n = new createjs.Container;
        n.alpha = 1;
        n.visible = !1;
        n.y = CANVAS_HEIGHT;
        l = createBitmap(b);
        n.addChild(l);
        k = new createjs.Text("", "32px " + FONT_GAME, "#000000");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 150;
        k.textAlign = "center";
        k.outline = 5;
        n.addChild(k);
        d = new createjs.Text("", "32px " + FONT_GAME, TEXT_COLOR);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 150;
        d.textAlign = "center";
        n.addChild(d);
        h = new createjs.Text("", "50px " + FONT_GAME, "#000000");
        h.x = CANVAS_WIDTH / 2;
        h.y = 174;
        h.textAlign = "center";
        h.outline = 5;
        n.addChild(h);
        f = new createjs.Text("", "50px " + FONT_GAME, TEXT_COLOR);
        f.x = CANVAS_WIDTH / 2;
        f.y = 174;
        f.textAlign = "center";
        n.addChild(f);
        m = new createjs.Container;
        n.addChild(m);
        s_oStage.addChild(n);
        b = s_oSpriteLibrary.getSprite("but_home");
        a = new CGfxButton(.5 * CANVAS_WIDTH - 200, .5 * CANVAS_HEIGHT + 175, b, n);
        a.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        b = s_oSpriteLibrary.getSprite("but_restart");
        y = new CGfxButton(.5 * CANVAS_WIDTH + 200, .5 * CANVAS_HEIGHT + 175, b, n);
        y.addEventListener(ON_MOUSE_DOWN, this._onRestart, this);
        y.pulseAnimation()
    };
    this.unload = function() {
        createjs.Tween.get(n).to({
                alpha: 0
            },
            500, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(n);
            a.unload();
            a = null;
            y.unload();
            y = null
        })
    };
    this.show = function(a, b, l, r) {
        var t = eval("TEXT_TEAM_CODE_" + l),
            y = eval("TEXT_TEAM_CODE_" + r);
        d.text = t + " " + a + " - " + b + " " + y;
        k.text = t + " " + a + " - " + b + " " + y;
        h.text = TEXT_LOSE;
        f.text = TEXT_LOSE;
        a = s_oSpriteLibrary.getSprite("flag_" + l);
        b = createBitmap(a);
        b.x = d.x - 180;
        b.y = d.y + 15;
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        b.scaleX = .4;
        b.scaleY = .4;
        m.addChild(b);
        a = s_oSpriteLibrary.getSprite("flag_" + r);
        b = createBitmap(a);
        b.x = d.x + 180;
        b.y = d.y + 15;
        b.regX = .5 * a.width;
        b.regY = .5 * a.height;
        b.scaleX = .4;
        b.scaleY = .4;
        m.addChild(b);
        a = s_oSpriteLibrary.getSprite("character_pose_" + l);
        b = {
            images: [a],
            frames: {
                width: a.width / 3,
                height: a.height,
                regX: a.width / 2 / 3,
                regY: a.height / 2
            },
            animations: {
                angry: [0],
                win: [1],
                champion: [2]
            }
        };
        b = new createjs.SpriteSheet(b);
        l = createSprite(b, "angry", a.width / 2 / 3, a.height / 2, a.width / 3, a.height);
        a = s_oSpriteLibrary.getSprite("character_pose_" + r);
        b = {
            images: [a],
            frames: {
                width: a.width / 3,
                height: a.height,
                regX: a.width / 2 / 3,
                regY: a.height / 2
            },
            animations: {
                angry: [0],
                win: [1],
                champion: [2]
            }
        };
        b = new createjs.SpriteSheet(b);
        r = createSprite(b, "win", a.width / 2 / 3, a.height / 2, a.width / 3, a.height);
        r.x = .5 * CANVAS_WIDTH + 440;
        r.y = .5 * CANVAS_HEIGHT + 91;
        r.scaleX = -1;
        n.addChild(r);
        l.x = .5 * CANVAS_WIDTH - 440;
        l.y = .5 * CANVAS_HEIGHT + 91;
        n.addChild(l);
        n.visible = !0;
        createjs.Tween.get(n).to({
                y: 0
            },
            1250, createjs.Ease.elasticOut).call(function() {
            s_oAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_oAdsLevel = 1) : s_oAdsLevel++
        })
    };
    this._onRestart = function() {
        this.unload();
        s_oGame.restartLevel()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.onExit()
    };
    this._init(b);
    return this
}
function CWinPanel(b, l) {
    var k, d, h, f, n, a, m, y, u, B, t, r, F, G, e, A, v;
    this._init = function(b, l) {
        G = new createjs.Container;
        G.alpha = 1;
        G.visible = !1;
        G.y = -CANVAS_HEIGHT;
        k = createBitmap(b);
        G.addChild(k);
        f = new createjs.Text("", "50px " + FONT_GAME, "#000000");
        f.x = CANVAS_WIDTH / 2;
        f.y = 174;
        f.textAlign = "center";
        f.outline = 5;
        G.addChild(f);
        n = new createjs.Text("", "50px " + FONT_GAME, TEXT_COLOR);
        n.x = CANVAS_WIDTH / 2;
        n.y = 174;
        n.textAlign = "center";
        G.addChild(n);
        d = new createjs.Text("", "32px " + FONT_GAME, "#000000");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 150;
        d.textAlign = "center";
        d.outline = 5;
        G.addChild(d);
        h = new createjs.Text("", "32px " + FONT_GAME, TEXT_COLOR);
        h.x = CANVAS_WIDTH / 2;
        h.y = CANVAS_HEIGHT / 2 - 150;
        h.textAlign = "center";
        G.addChild(h);
        a = new createjs.Text("", "24px " + FONT_GAME, "#000000");
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 70;
        a.textAlign = "center";
        a.outline = 5;
        G.addChild(a);
        m = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        m.x = CANVAS_WIDTH / 2;
        m.y = CANVAS_HEIGHT / 2 - 70;
        m.textAlign = "center";
        G.addChild(m);
        y = new createjs.Text("", "24px " + FONT_GAME, "#000000");
        y.x = CANVAS_WIDTH / 2;
        y.y = CANVAS_HEIGHT / 2 - 10;
        y.textAlign = "center";
        y.outline = 5;
        G.addChild(y);
        u = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        u.x = CANVAS_WIDTH / 2;
        u.y = CANVAS_HEIGHT / 2 - 10;
        u.textAlign = "center";
        G.addChild(u);
        B = new createjs.Text("", "24px " + FONT_GAME, "#000000");
        B.x = CANVAS_WIDTH / 2;
        B.y = CANVAS_HEIGHT / 2 + 50;
        B.textAlign = "center";
        B.outline = 5;
        G.addChild(B);
        t = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        t.x = CANVAS_WIDTH / 2;
        t.y = CANVAS_HEIGHT / 2 + 50;
        t.textAlign = "center";
        G.addChild(t);
        r = new createjs.Text("", "24px " + FONT_GAME, "#000000");
        r.x = CANVAS_WIDTH / 2;
        r.y = CANVAS_HEIGHT / 2 + 110;
        r.textAlign = "center";
        r.outline = 5;
        G.addChild(r);
        F = new createjs.Text("", "24px " + FONT_GAME, TEXT_COLOR);
        F.x = CANVAS_WIDTH / 2;
        F.y = CANVAS_HEIGHT / 2 + 110;
        F.textAlign = "center";
        G.addChild(F);
        var E = s_oSpriteLibrary.getSprite("but_continue_big");
        A = new CGfxButton(.5 * CANVAS_WIDTH + 250, .5 * CANVAS_HEIGHT + 175, E, G);
        A.pulseAnimation(); ! 1 === l ? (E = s_oSpriteLibrary.getSprite("but_home"), e = new CGfxButton(.5 * CANVAS_WIDTH - 250, .5 * CANVAS_HEIGHT + 175, E, G), e.addEventListener(ON_MOUSE_DOWN, this._onExit, this), A.addEventListener(ON_MOUSE_DOWN, this._onContinue, this)) : A.addEventListener(ON_MOUSE_DOWN, this._onEnd, this);
        v = new createjs.Container;
        G.addChild(v);
        s_oStage.addChild(G)
    };
    this.unload = function() {
        s_oStage.removeChild(G);
        e && (e.unload(), e = null);
        A && (A.unload(), A = null)
    };
    this.show = function(e, b, k, l, A) {
        var z = eval("TEXT_TEAM_CODE_" + k),
            E = eval("TEXT_TEAM_CODE_" + l);
        h.text = z + " " + e + " - " + b + " " + E;
        d.text = z + " " + e + " - " + b + " " + E;
        f.text = TEXT_WIN;
        n.text = TEXT_WIN;
        a.text = TEXT_SCORE_GOAL_PLAYER + " " + A.player_goal_score;
        m.text = TEXT_SCORE_GOAL_PLAYER + " " + A.player_goal_score;
        y.text = TEXT_SCORE_GOAL_OPPONENT + " " + A.opponent_goal_score;
        u.text = TEXT_SCORE_GOAL_OPPONENT + " " + A.opponent_goal_score;
        B.text = TEXT_MACTH_SCORE + ": " + A.score_match;
        t.text = TEXT_MACTH_SCORE + ": " + A.score_match;
        r.text = TEXT_TOTAL_SCORE + ": " + A.new_score;
        F.text = TEXT_TOTAL_SCORE + ": " + A.new_score;
        e = s_oSpriteLibrary.getSprite("flag_" + k);
        b = createBitmap(e);
        b.x = h.x - 180;
        b.y = h.y + 15;
        b.regX = .5 * e.width;
        b.regY = .5 * e.height;
        b.scaleX = .4;
        b.scaleY = .4;
        v.addChild(b);
        e = s_oSpriteLibrary.getSprite("flag_" + l);
        b = createBitmap(e);
        b.x = h.x + 180;
        b.y = h.y + 15;
        b.regX = .5 * e.width;
        b.regY = .5 * e.height;
        b.scaleX = .4;
        b.scaleY = .4;
        v.addChild(b);
        k = s_oSpriteLibrary.getSprite("character_pose_" + k);
        e = {
            images: [k],
            frames: {
                width: k.width / 3,
                height: k.height,
                regX: k.width / 2 / 3,
                regY: k.height / 2
            },
            animations: {
                angry: [0],
                win: [1],
                champion: [2]
            }
        };
        e = new createjs.SpriteSheet(e);
        k = createSprite(e, "win", k.width / 2 / 3, k.height / 2, k.width / 3, k.height);
        k.x = .5 * CANVAS_WIDTH - 440;
        k.y = .5 * CANVAS_HEIGHT + 91;
        G.addChild(k);
        k = s_oSpriteLibrary.getSprite("character_pose_" + l);
        e = {
            images: [k],
            frames: {
                width: k.width / 3,
                height: k.height,
                regX: k.width / 2 / 3,
                regY: k.height / 2
            },
            animations: {
                angry: [0],
                win: [1],
                champion: [2]
            }
        };
        e = new createjs.SpriteSheet(e);
        l = createSprite(e, "angry", k.width / 2 / 3, k.height / 2, k.width / 3, k.height);
        l.x = .5 * CANVAS_WIDTH + 440;
        l.y = .5 * CANVAS_HEIGHT + 91;
        l.scaleX = -1;
        G.addChild(l);
        G.visible = !0;
        createjs.Tween.get(G).to({
                y: 0
            },
            1250, createjs.Ease.elasticOut).call(function() {
            s_oAdsLevel === NUM_LEVEL_FOR_ADS ? ($(s_oMain).trigger("show_interlevel_ad"), s_oAdsLevel = 1) : s_oAdsLevel++
        });
        $(s_oMain).trigger("save_score", A.new_score);
        $(s_oMain).trigger("share_event", A.new_score)
    };
    this._onContinue = function() {
        var a = this;
        createjs.Tween.get(G).to({
                y: CANVAS_HEIGHT
            },
            750, createjs.Ease.quartIn).call(function() {
            a.unload()
        });
        A.block(!0);
        e.block(!0);
        s_oGame.onContinue(s_oStage.getChildIndex(G))
    };
    this._onEnd = function() {
        A.block(!0);
        this.unload();
        s_oGame._onEnd()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.onExit()
    };
    this._init(b, l);
    return this
}
function CPhysicsController() {
    var b = Box2D.Common.Math.b2Vec2,
        l = Box2D.Dynamics.b2World,
        k = Box2D.Dynamics.b2DebugDraw,
        d, h, f = this,
        n = document.getElementById("canvas").getContext("2d");
    this.init = function() {
        d = new b(0, 9.81);
        h = new l(d, !0);
        h.Step(TIME_STEP_BOX2D, ITINERATION_BOX2D, POSITION_ITINERATION_BOX2D);
        var a = new k;
        a.SetSprite(n);
        a.SetDrawScale(30);
        a.SetFillAlpha(.5);
        a.SetLineThickness(1);
        a.SetFlags(k.e_shapeBit | k.e_jointBit);
        h.SetDebugDraw(a)
    };
    this.startComputing = function(a) {
        a.GetBody().SetActive(!0)
    };
    this.applyImpulse = function(a, d) {
        a.GetBody().ApplyImpulse(d, a.GetBody().GetWorldCenter())
    };
    this.applyForce = function(a, d) {
        a.GetBody().ApplyForce(d, a.GetBody().GetWorldCenter())
    };
    this.decreaseSpeedRotation = function(a) {
        var d = .99 * a.GetBody().GetAngularVelocity();
        a.GetBody().SetAngularVelocity(d)
    };
    this.destroyAllBody = function() {
        for (var a = h.GetBodyList(); a.GetNext();) {
            var d = a.GetNext();
            h.DestroyBody(d)
        }
    };
    this.destroyAllJoint = function() {
        for (var a = h.GetJointList(); a.GetNext();) {
            var d = a.GetNext();
            h.DestroyJoint(d)
        }
    };
    this.destroyWorld = function() {
        h = null
    };
    this.getSpeedRotation = function(a) {
        return a.GetBody().GetAngularVelocity()
    };
    this.moveObject = function(a, d, b) {
        d = {
            x: d / WORLD_SCALE,
            y: b / WORLD_SCALE
        };
        a.GetBody().SetPosition(d)
    };
    this.destroyBody = function(a) {
        h.DestroyBody(a.GetBody())
    };
    this.destroyJoint = function(a) {
        h.DestroyJoint(a)
    };
    this.getJointAngle = function(a) {
        return a.GetJointAngle() * (180 / Math.PI)
    };
    this.getInstance = function() {
        null === f && (f = new CPhysicsController);
        return f
    };
    this.getJointTranslation = function(a) {
        return a.GetJointTranslation()
    };
    this.update = function() {
        h.Step(.05, 3, 3);
        h.ClearForces()
    };
    this.upadteDrawDebug = function() {
        h.DrawDebugData()
    };
    this.getWorld = function() {
        return h
    };
    this.setElementLinearDamping = function(a, d) {
        a.GetBody().SetLinearDamping(d)
    };
    this.setElementAngularVelocity = function(a, d) {
        a.GetBody().SetAngularVelocity(d)
    };
    this.setElementPosition = function(a, d) {
        var b = {
            x: d.x / WORLD_SCALE,
            y: d.y / WORLD_SCALE
        };
        a.GetBody().SetPosition(b)
    };
    this.getElementPosition = function(a) {
        var d = a.GetBody().GetPosition();
        return {
            x: d.x * WORLD_SCALE,
            y: d.y * WORLD_SCALE,
            angle: 180 * a.GetBody().GetAngle() / Math.PI
        }
    };
    this.setElementAngle = function(a, d) {
        a.GetBody().SetAngle(d * Math.PI / 180)
    };
    this.getElementAngle = function(a) {
        return 180 * a.GetBody().GetAngle() / Math.PI
    };
    this.getElementVelocity = function(a) {
        return a.GetBody().GetLinearVelocity()
    };
    this.setElementLinearVelocity = function(a, d) {
        return a.GetBody().SetLinearVelocity(d)
    };
    this.init()
}
function CPhysicsObject() {
    var b = Box2D.Common.Math.b2Vec2,
        l = Box2D.Dynamics.b2BodyDef,
        k = Box2D.Dynamics.b2Body,
        d = Box2D.Dynamics.b2FixtureDef,
        h = Box2D.Collision.Shapes.b2PolygonShape,
        f = Box2D.Collision.Shapes.b2CircleShape,
        n = Box2D.Dynamics.Joints.b2RevoluteJointDef,
        a = Box2D.Dynamics.Joints.b2WeldJointDef,
        m = Box2D.Dynamics.Joints.b2PrismaticJointDef,
        y = Box2D.Collision.b2WorldManifold,
        u, B;
    this.init = function() {
        B = s_oPhysicsController.getInstance();
        u = B.getWorld()
    };
    this.addWall = function(a, b, f, m, e, A, v, n) {
        var r = new d;
        r.density = A;
        r.friction = v;
        r.restitution = n;
        A = new l;
        A.type = k.b2_staticBody;
        r.shape = new h;
        r.shape.SetAsBox(a / WORLD_SCALE, b / WORLD_SCALE);
        A.position.Set(f / WORLD_SCALE, m / WORLD_SCALE);
        A.angle = e * Math.PI / 180;
        u.CreateBody(A).CreateFixture(r)
    };
    this.addLine = function(a, f, m, n, e, A, v, M) {
        var r = new d;
        r.density = A;
        r.friction = v;
        r.restitution = M;
        r.filter.categoryBits = FIELD_CATEGORY_COLLISION;
        r.filter.maskBits = -1;
        r.filter.groupIndex = 1;
        A = new l;
        A.type = k.b2_staticBody;
        A.position.Set(a / WORLD_SCALE, f / WORLD_SCALE);
        A.angle = e * Math.PI / 180;
        A.userData = {
            type: WALL
        };
        r.shape = new h;
        a = [];
        f = new b;
        f.Set(m.x / WORLD_SCALE, m.y / WORLD_SCALE);
        a.push(f);
        m = new b;
        m.Set(n.x / WORLD_SCALE, n.y / WORLD_SCALE);
        a.push(m);
        r.shape.SetAsBox(200, .3);
        r.shape.SetAsArray(a, a.length);
        return u.CreateBody(A).CreateFixture(r)
    };
    this.addPolygon = function(a) {
        var f = new d;
        f.density = a.density;
        f.friction = a.friction;
        f.restitution = a.restitution;
        f.isSensor = a.sensor;
        f.filter.categoryBits = 3;
        f.filter.maskBits = 1;
        f.filter.groupIndex = 1;
        var m = new l;
        m.type = k.b2_staticBody;
        m.position.Set(a.x / WORLD_SCALE, a.y / WORLD_SCALE);
        m.angle = a.angle * Math.PI / 180;
        m.userData = a.info;
        f.shape = new h;
        a = a.vertex;
        for (var t = [], e = 0; e < a.length; e++) {
            var A = new b;
            A.Set(a[e].x / WORLD_SCALE, a[e].y / WORLD_SCALE);
            t.push(A)
        }
        f.shape.SetAsArray(t, t.length);
        return u.CreateBody(m).CreateFixture(f)
    };
    this.addCollisionPolygon = function(a) {
        var f = new d;
        f.density = a.density;
        f.friction = a.friction;
        f.restitution = a.restitution;
        a.info.type === PLAYER ? (f.filter.categoryBits = FIELD_CATEGORY_COLLISION, f.filter.maskBits = BALL_CATEGORY_COLLISION, f.filter.groupIndex = 1) : a.info.type === OPPONENT && (f.filter.categoryBits = OPPONENT_CATEGORY_COLLISION, f.filter.maskBits = BALL_CATEGORY_COLLISION, f.filter.groupIndex = 1);
        var m = new l;
        m.type = k.b2_kinematicBody;
        m.position.Set(a.x / WORLD_SCALE, a.y / WORLD_SCALE);
        m.angle = a.angle * Math.PI / 180;
        m.userData = a.info;
        f.shape = new h;
        for (var n = a.vertex,
                 e = [], A = 0; A < n.length; A++) {
            for (var v = [], t = 0; t < n[A].length; t++) {
                var E = new b;
                a.info.type === OPPONENT ? E.Set(n[A][t].x / WORLD_SCALE, (n[A][t].y + 11) / WORLD_SCALE) : E.Set(n[A][t].x / WORLD_SCALE, n[A][t].y / WORLD_SCALE);
                v.push(E)
            }
            f.shape.SetAsArray(v, v.length);
            e[A] = u.CreateBody(m).CreateFixture(f)
        }
        return e
    };
    this.addCollisionShape = function(a) {
        var b = new d;
        b.density = a.density;
        b.friction = a.friction;
        b.restitution = a.restitution;
        b.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
        b.filter.maskBits = BALL_CATEGORY_COLLISION;
        b.filter.groupIndex = 1;
        var m = new l;
        m.type = k.b2_dynamicBody;
        b.shape = new h;
        b.shape.SetAsBox(a.recWidth / WORLD_SCALE, a.recHeight / WORLD_SCALE);
        m.position.Set((a.x + a.rec_offset.x) / WORLD_SCALE, (a.y + a.rec_offset.y) / WORLD_SCALE);
        m.fixedRotation = !0;
        var t = u.CreateBody(m),
            e = t.CreateFixture(b);
        m = new l;
        var A = new d;
        A.density = a.density;
        A.friction = a.friction;
        A.restitution = a.restitution;
        A.filter.categoryBits = OPPONENT_CATEGORY_COLLISION;
        A.filter.maskBits = -1;
        A.filter.groupIndex = 1;
        m.type = k.b2_dynamicBody;
        A.shape = new f(a.radius / WORLD_SCALE);
        m.position.x = (a.x + a.sph_offset.x) / WORLD_SCALE;
        m.position.y = (a.y + a.sph_offset.y) / WORLD_SCALE;
        m.fixedRotation = !0;
        m.allowSleep = !1;
        m.bullet = !0;
        var v = u.CreateBody(m);
        A = v.CreateFixture(A);
        m = new l;
        m.type = k.b2_dynamicBody;
        b.shape = new h;
        b.shape.SetAsBox(a.rec_neck.width / WORLD_SCALE, a.rec_neck.height / WORLD_SCALE);
        m.position.Set((a.x + a.rec_neck.x) / WORLD_SCALE, (a.y + a.rec_neck.y) / WORLD_SCALE);
        m.angle = Math.PI / 180 * a.rec_neck.angle;
        m.fixedRotation = !0;
        a = u.CreateBody(m);
        b = a.CreateFixture(b);
        m = new n;
        m.Initialize(t, v, v.GetWorldCenter());
        v = u.CreateJoint(m);
        m = new n;
        m.Initialize(t, a, a.GetWorldCenter());
        t = u.CreateJoint(m);
        return {
            fixture1: e,
            fixture2: A,
            fixture3: b,
            jointA: v,
            jointB: t
        }
    };
    this.createAContactListener = function() {
        var a = new Box2D.Dynamics.b2ContactListener;
        a.BeginContact = function(a) {
            var d = a.GetFixtureA().GetBody().GetUserData(),
                b = a.GetFixtureB().GetBody().GetUserData();
            if (null !== d && null !== b) if (d.type === GOAL_AREA && b.type === BALL) s_oGame.playerGoal();
            else if (d.type === GOAL_AREA_ENEMY && b.type === BALL) s_oGame.opponentGoal();
            else if (d.type === HEAD_SHOOT || d.type === HEEL || d.type === LEG && b.type === BALL) d = new y,
                a.GetWorldManifold(d),
                s_oGame.addHitEffect({
                    x: d.m_points[0].x * WORLD_SCALE,
                    y: d.m_points[0].y * WORLD_SCALE
                }),
                s_oGame.playKickSound()
        };
        u.SetContactListener(a)
    };
    this.addBall = function(a, b, h, m, e, A) {
        var v = new d;
        v.density = m;
        v.friction = e;
        v.restitution = A;
        v.filter.categoryBits = BALL_CATEGORY_COLLISION;
        v.filter.maskBits = -1;
        v.filter.groupIndex = 1;
        m = new l;
        m.type = k.b2_dynamicBody;
        v.shape = new f(a / WORLD_SCALE);
        m.allowSleep = !1;
        m.userData = {
            type: BALL
        };
        m.position.x = b / WORLD_SCALE;
        m.position.y = h / WORLD_SCALE;
        m.linearDamping = BALL_LINEAR_DAMPING;
        m.bullet = !0;
        return u.CreateBody(m).CreateFixture(v)
    };
    this.addCircle = function(a, b, h, m, e, A) {
        var v = new d;
        v.density = m;
        v.friction = e;
        v.restitution = A;
        m = new l;
        m.type = k.b2_staticBody;
        v.shape = new f(a / WORLD_SCALE);
        m.position.x = b / WORLD_SCALE;
        m.position.y = h / WORLD_SCALE;
        return u.CreateBody(m).CreateFixture(v)
    };
    this.addHead = function(a, b) {
        var h = new d;
        h.density = b.density;
        h.friction = b.friction;
        h.restitution = b.restitution;
        h.filter.categoryBits = JOINT_CATEGORY_COLLISION;
        h.filter.maskBits = BALL_CATEGORY_COLLISION;
        h.filter.groupIndex = -1;
        var n = new l;
        n.type = k.b2_dynamicBody;
        h.shape = new f(b.radius / WORLD_SCALE);
        n.position.x = a.x / WORLD_SCALE;
        n.position.y = a.y / WORLD_SCALE;
        n.userData = {
            type: b.info.type
        };
        n = u.CreateBody(n);
        h = n.CreateFixture(h);
        var e = new d;
        e.density = 3;
        e.friction = 1;
        e.restitution = .1;
        e.filter.categoryBits = JOINT_CATEGORY_COLLISION;
        e.filter.maskBits = BALL_CATEGORY_COLLISION;
        e.filter.groupIndex = -1;
        var A = new l;
        A.type = k.b2_staticBody;
        e.shape = new f(2 / WORLD_SCALE);
        A.position.Set(a.x / WORLD_SCALE, a.y / WORLD_SCALE);
        A = u.CreateBody(A);
        e = A.CreateFixture(e);
        var v = new m;
        v.Initialize(A, n, A.GetWorldCenter(), b.mov_allowed);
        v.lowerTranslation = 0;
        v.upperTranslation = b.distance;
        v.enableLimit = !0;
        v.maxMotorForce = b.power;
        v.motorSpeed = b.speed;
        v.enableMotor = !0;
        n = u.CreateJoint(v);
        return {
            fixture1: h,
            fixture2: e,
            joint: n
        }
    };
    this.addStaticCircle = function(a, b, h, m, e, A) {
        var v = new d;
        v.density = m;
        v.friction = e;
        v.restitution = A;
        m = new l;
        m.type = k.b2_staticBody;
        v.shape = new f(a / WORLD_SCALE);
        m.position.x = b / WORLD_SCALE;
        m.position.y = h / WORLD_SCALE;
        return u.CreateBody(m).CreateFixture(v)
    };
    this.addLeg = function(m, r) {
        var t = new d;
        t.density = r.density;
        t.friction = r.friction;
        t.restitution = r.restitution;
        t.filter.categoryBits = JOINT_CATEGORY_COLLISION;
        t.filter.maskBits = BALL_CATEGORY_COLLISION;
        t.filter.groupIndex = -1;
        var y = new l;
        y.type = k.b2_dynamicBody;
        t.shape = new h;
        t.shape.SetAsBox(r.width / WORLD_SCALE, r.height / WORLD_SCALE);
        y.position.Set(m.x / WORLD_SCALE, m.y / WORLD_SCALE);
        var e = u.CreateBody(y),
            A = e.CreateFixture(t),
            v = new d;
        v.density = 3;
        v.friction = 1;
        v.restitution = .1;
        v.filter.categoryBits = JOINT_CATEGORY_COLLISION;
        v.filter.maskBits = BALL_CATEGORY_COLLISION;
        v.filter.groupIndex = -1;
        var M = new l;
        M.type = k.b2_staticBody;
        v.shape = new f(2 / WORLD_SCALE);
        M.position.Set((m.x + r.pivotX) / WORLD_SCALE, (m.y + r.pivotY) / WORLD_SCALE);
        M = u.CreateBody(M);
        v = M.CreateFixture(v);
        t = new n;
        t.Initialize(e, M, M.GetWorldCenter());
        t.lowerAngle = Math.PI / 180 * r.lowerAngle;
        t.upperAngle = Math.PI / 180 * r.upperAngle;
        t.enableLimit = !0;
        t.maxMotorTorque = r.power;
        t.motorSpeed = r.speed;
        t.enableMotor = !0;
        M = u.CreateJoint(t);
        t = new d;
        t.density = r.density;
        t.friction = r.friction;
        t.restitution = r.restitution;
        t.filter.categoryBits = JOINT_CATEGORY_COLLISION;
        t.filter.maskBits = BALL_CATEGORY_COLLISION;
        t.filter.groupIndex = -1;
        y = new l;
        y.type = k.b2_dynamicBody;
        t.shape = new f(10 / WORLD_SCALE);
        y.position.x = (m.x + 4 * r.width) / WORLD_SCALE;
        y.position.y = (m.y + r.height) / WORLD_SCALE;
        y.userData = r.info;
        y = u.CreateBody(y);
        var E = y.CreateFixture(t);
        t = new a;
        t.bodyA = e;
        t.bodyB = y;
        t.localAnchorA = new b(r.width / WORLD_SCALE, r.height / WORLD_SCALE);
        t.localAnchorB = new b(.1 / WORLD_SCALE, .1 / WORLD_SCALE);
        e = u.CreateJoint(t);
        return {
            fixture1: A,
            fixture2: v,
            jointLeg: M,
            fixture3: E,
            jointFoot: e
        }
    };
    this.addRectangle = function(a) {
        var b = new d;
        b.density = a.density;
        b.friction = a.friction;
        b.restitution = a.restitution;
        b.isSensor = a.sensor;
        b.filter.categoryBits = 3;
        b.filter.maskBits = 1;
        b.filter.groupIndex = 1;
        var f = new l;
        f.type = k.b2_staticBody;
        b.shape = new h;
        b.shape.SetAsBox(a.width / WORLD_SCALE, a.height / WORLD_SCALE);
        f.position.Set(a.x / WORLD_SCALE, a.y / WORLD_SCALE);
        f.angle = a.angle * Math.PI / 180;
        return u.CreateBody(f).CreateFixture(b)
    };
    this.setRotation = function(a) {
        this.rotation = a
    };
    this._update = function(a) {};
    this.init()
}
var Box2D = {}; (function(b, l) {
    function k() {} ! (Object.prototype.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function(b, h, f) {
        f.get instanceof Function && b.__defineGetter__(h, f.get);
        f.set instanceof Function && b.__defineSetter__(h, f.set)
    });
    b.inherit = function(b, h) {
        k.prototype = h.prototype;
        b.prototype = new k;
        b.prototype.constructor = b
    };
    b.generateCallback = function(b, h) {
        return function() {
            h.apply(b, arguments)
        }
    };
    b.NVector = function(b) {
        b === l && (b = 0);
        for (var d = Array(b || 0), f = 0; f < b; ++f) d[f] = 0;
        return d
    };
    b.is = function(b, h) {
        return null === b ? !1 : h instanceof Function && b instanceof h || b.constructor.__implements != l && b.constructor.__implements[h] ? !0 : !1
    };
    b.parseUInt = function(b) {
        return Math.abs(parseInt(b))
    }
})(Box2D);
var Vector = Array,
    Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {}); (function() {
    function b() {
        b.b2AABB.apply(this, arguments)
    }
    function l() {
        l.b2Bound.apply(this, arguments)
    }
    function k() {
        k.b2BoundValues.apply(this, arguments);
        this.constructor === k && this.b2BoundValues.apply(this, arguments)
    }
    function d() {
        d.b2Collision.apply(this, arguments)
    }
    function h() {
        h.b2ContactID.apply(this, arguments);
        this.constructor === h && this.b2ContactID.apply(this, arguments)
    }
    function f() {
        f.b2ContactPoint.apply(this, arguments)
    }
    function n() {
        n.b2Distance.apply(this, arguments)
    }
    function a() {
        a.b2DistanceInput.apply(this, arguments)
    }
    function m() {
        m.b2DistanceOutput.apply(this, arguments)
    }
    function y() {
        y.b2DistanceProxy.apply(this, arguments)
    }
    function u() {
        u.b2DynamicTree.apply(this, arguments);
        this.constructor === u && this.b2DynamicTree.apply(this, arguments)
    }
    function B() {
        B.b2DynamicTreeBroadPhase.apply(this, arguments)
    }
    function t() {
        t.b2DynamicTreeNode.apply(this, arguments)
    }
    function r() {
        r.b2DynamicTreePair.apply(this, arguments)
    }
    function F() {
        F.b2Manifold.apply(this, arguments);
        this.constructor === F && this.b2Manifold.apply(this, arguments)
    }
    function G() {
        G.b2ManifoldPoint.apply(this, arguments);
        this.constructor === G && this.b2ManifoldPoint.apply(this, arguments)
    }
    function e() {
        e.b2Point.apply(this, arguments)
    }
    function A() {
        A.b2RayCastInput.apply(this, arguments);
        this.constructor === A && this.b2RayCastInput.apply(this, arguments)
    }
    function v() {
        v.b2RayCastOutput.apply(this, arguments)
    }
    function M() {
        M.b2Segment.apply(this, arguments)
    }
    function E() {
        E.b2SeparationFunction.apply(this, arguments)
    }
    function P() {
        P.b2Simplex.apply(this, arguments);
        this.constructor === P && this.b2Simplex.apply(this, arguments)
    }
    function z() {
        z.b2SimplexCache.apply(this, arguments)
    }
    function O() {
        O.b2SimplexVertex.apply(this, arguments)
    }
    function K() {
        K.b2TimeOfImpact.apply(this, arguments)
    }
    function N() {
        N.b2TOIInput.apply(this, arguments)
    }
    function J() {
        J.b2WorldManifold.apply(this, arguments);
        this.constructor === J && this.b2WorldManifold.apply(this, arguments)
    }
    function L() {
        L.ClipVertex.apply(this, arguments)
    }
    function g() {
        g.Features.apply(this, arguments)
    }
    function q() {
        q.b2CircleShape.apply(this, arguments);
        this.constructor === q && this.b2CircleShape.apply(this, arguments)
    }
    function I() {
        I.b2EdgeChainDef.apply(this, arguments);
        this.constructor === I && this.b2EdgeChainDef.apply(this, arguments)
    }
    function x() {
        x.b2EdgeShape.apply(this, arguments);
        this.constructor === x && this.b2EdgeShape.apply(this, arguments)
    }
    function C() {
        C.b2MassData.apply(this, arguments)
    }
    function Q() {
        Q.b2PolygonShape.apply(this, arguments);
        this.constructor === Q && this.b2PolygonShape.apply(this, arguments)
    }
    function R() {
        R.b2Shape.apply(this, arguments);
        this.constructor === R && this.b2Shape.apply(this, arguments)
    }
    function c() {
        c.b2Color.apply(this, arguments);
        this.constructor === c && this.b2Color.apply(this, arguments)
    }
    function p() {
        p.b2Settings.apply(this, arguments)
    }
    function D() {
        D.b2Mat22.apply(this, arguments);
        this.constructor === D && this.b2Mat22.apply(this, arguments)
    }
    function w() {
        w.b2Mat33.apply(this, arguments);
        this.constructor === w && this.b2Mat33.apply(this, arguments)
    }
    function H() {
        H.b2Math.apply(this, arguments)
    }
    function S() {
        S.b2Sweep.apply(this, arguments)
    }
    function T() {
        T.b2Transform.apply(this, arguments);
        this.constructor === T && this.b2Transform.apply(this, arguments)
    }
    function U() {
        U.b2Vec2.apply(this, arguments);
        this.constructor === U && this.b2Vec2.apply(this, arguments)
    }
    function V() {
        V.b2Vec3.apply(this, arguments);
        this.constructor === V && this.b2Vec3.apply(this, arguments)
    }
    function W() {
        W.b2Body.apply(this, arguments);
        this.constructor === W && this.b2Body.apply(this, arguments)
    }
    function X() {
        X.b2BodyDef.apply(this, arguments);
        this.constructor === X && this.b2BodyDef.apply(this, arguments)
    }
    function Fa() {
        Fa.b2ContactFilter.apply(this, arguments)
    }
    function Ga() {
        Ga.b2ContactImpulse.apply(this, arguments)
    }
    function Ha() {
        Ha.b2ContactListener.apply(this, arguments)
    }
    function Y() {
        Y.b2ContactManager.apply(this, arguments);
        this.constructor === Y && this.b2ContactManager.apply(this, arguments)
    }
    function Z() {
        Z.b2DebugDraw.apply(this, arguments);
        this.constructor === Z && this.b2DebugDraw.apply(this, arguments)
    }
    function Ia() {
        Ia.b2DestructionListener.apply(this, arguments)
    }
    function Ja() {
        Ja.b2FilterData.apply(this, arguments)
    }
    function aa() {
        aa.b2Fixture.apply(this, arguments);
        this.constructor === aa && this.b2Fixture.apply(this, arguments)
    }
    function ba() {
        ba.b2FixtureDef.apply(this, arguments);
        this.constructor === ba && this.b2FixtureDef.apply(this, arguments)
    }
    function ca() {
        ca.b2Island.apply(this, arguments);
        this.constructor === ca && this.b2Island.apply(this, arguments)
    }
    function Ka() {
        Ka.b2TimeStep.apply(this, arguments)
    }
    function da() {
        da.b2World.apply(this, arguments);
        this.constructor === da && this.b2World.apply(this, arguments)
    }
    function La() {
        La.b2CircleContact.apply(this, arguments)
    }
    function ea() {
        ea.b2Contact.apply(this, arguments);
        this.constructor === ea && this.b2Contact.apply(this, arguments)
    }
    function fa() {
        fa.b2ContactConstraint.apply(this, arguments);
        this.constructor === fa && this.b2ContactConstraint.apply(this, arguments)
    }
    function Ma() {
        Ma.b2ContactConstraintPoint.apply(this, arguments)
    }
    function Na() {
        Na.b2ContactEdge.apply(this, arguments)
    }
    function ha() {
        ha.b2ContactFactory.apply(this, arguments);
        this.constructor === ha && this.b2ContactFactory.apply(this, arguments)
    }
    function Oa() {
        Oa.b2ContactRegister.apply(this, arguments)
    }
    function Pa() {
        Pa.b2ContactResult.apply(this, arguments)
    }
    function ia() {
        ia.b2ContactSolver.apply(this, arguments);
        this.constructor === ia && this.b2ContactSolver.apply(this, arguments)
    }
    function Qa() {
        Qa.b2EdgeAndCircleContact.apply(this, arguments)
    }
    function ja() {
        ja.b2NullContact.apply(this, arguments);
        this.constructor === ja && this.b2NullContact.apply(this, arguments)
    }
    function Ra() {
        Ra.b2PolyAndCircleContact.apply(this, arguments)
    }
    function Sa() {
        Sa.b2PolyAndEdgeContact.apply(this, arguments)
    }
    function Ta() {
        Ta.b2PolygonContact.apply(this, arguments)
    }
    function ka() {
        ka.b2PositionSolverManifold.apply(this, arguments);
        this.constructor === ka && this.b2PositionSolverManifold.apply(this, arguments)
    }
    function Ua() {
        Ua.b2BuoyancyController.apply(this, arguments)
    }
    function Va() {
        Va.b2ConstantAccelController.apply(this, arguments)
    }
    function Wa() {
        Wa.b2ConstantForceController.apply(this, arguments)
    }
    function Xa() {
        Xa.b2Controller.apply(this, arguments)
    }
    function Ya() {
        Ya.b2ControllerEdge.apply(this, arguments)
    }
    function Za() {
        Za.b2GravityController.apply(this, arguments)
    }
    function $a() {
        $a.b2TensorDampingController.apply(this, arguments)
    }
    function la() {
        la.b2DistanceJoint.apply(this, arguments);
        this.constructor === la && this.b2DistanceJoint.apply(this, arguments)
    }
    function ma() {
        ma.b2DistanceJointDef.apply(this, arguments);
        this.constructor === ma && this.b2DistanceJointDef.apply(this, arguments)
    }
    function na() {
        na.b2FrictionJoint.apply(this, arguments);
        this.constructor === na && this.b2FrictionJoint.apply(this, arguments)
    }
    function oa() {
        oa.b2FrictionJointDef.apply(this, arguments);
        this.constructor === oa && this.b2FrictionJointDef.apply(this, arguments)
    }
    function pa() {
        pa.b2GearJoint.apply(this, arguments);
        this.constructor === pa && this.b2GearJoint.apply(this, arguments)
    }
    function qa() {
        qa.b2GearJointDef.apply(this, arguments);
        this.constructor === qa && this.b2GearJointDef.apply(this, arguments)
    }
    function ab() {
        ab.b2Jacobian.apply(this, arguments)
    }
    function ra() {
        ra.b2Joint.apply(this, arguments);
        this.constructor === ra && this.b2Joint.apply(this, arguments)
    }
    function sa() {
        sa.b2JointDef.apply(this, arguments);
        this.constructor === sa && this.b2JointDef.apply(this, arguments)
    }
    function bb() {
        bb.b2JointEdge.apply(this, arguments)
    }
    function ta() {
        ta.b2LineJoint.apply(this, arguments);
        this.constructor === ta && this.b2LineJoint.apply(this, arguments)
    }
    function ua() {
        ua.b2LineJointDef.apply(this, arguments);
        this.constructor === ua && this.b2LineJointDef.apply(this, arguments)
    }
    function va() {
        va.b2MouseJoint.apply(this, arguments);
        this.constructor === va && this.b2MouseJoint.apply(this, arguments)
    }
    function wa() {
        wa.b2MouseJointDef.apply(this, arguments);
        this.constructor === wa && this.b2MouseJointDef.apply(this, arguments)
    }
    function xa() {
        xa.b2PrismaticJoint.apply(this, arguments);
        this.constructor === xa && this.b2PrismaticJoint.apply(this, arguments)
    }
    function ya() {
        ya.b2PrismaticJointDef.apply(this, arguments);
        this.constructor === ya && this.b2PrismaticJointDef.apply(this, arguments)
    }
    function za() {
        za.b2PulleyJoint.apply(this, arguments);
        this.constructor === za && this.b2PulleyJoint.apply(this, arguments)
    }
    function Aa() {
        Aa.b2PulleyJointDef.apply(this, arguments);
        this.constructor === Aa && this.b2PulleyJointDef.apply(this, arguments)
    }
    function Ba() {
        Ba.b2RevoluteJoint.apply(this, arguments);
        this.constructor === Ba && this.b2RevoluteJoint.apply(this, arguments)
    }
    function Ca() {
        Ca.b2RevoluteJointDef.apply(this, arguments);
        this.constructor === Ca && this.b2RevoluteJointDef.apply(this, arguments)
    }
    function Da() {
        Da.b2WeldJoint.apply(this, arguments);
        this.constructor === Da && this.b2WeldJoint.apply(this, arguments)
    }
    function Ea() {
        Ea.b2WeldJointDef.apply(this, arguments);
        this.constructor === Ea && this.b2WeldJointDef.apply(this, arguments)
    }
    Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
    Box2D.Collision.b2AABB = b;
    Box2D.Collision.b2Bound = l;
    Box2D.Collision.b2BoundValues = k;
    Box2D.Collision.b2Collision = d;
    Box2D.Collision.b2ContactID = h;
    Box2D.Collision.b2ContactPoint = f;
    Box2D.Collision.b2Distance = n;
    Box2D.Collision.b2DistanceInput = a;
    Box2D.Collision.b2DistanceOutput = m;
    Box2D.Collision.b2DistanceProxy = y;
    Box2D.Collision.b2DynamicTree = u;
    Box2D.Collision.b2DynamicTreeBroadPhase = B;
    Box2D.Collision.b2DynamicTreeNode = t;
    Box2D.Collision.b2DynamicTreePair = r;
    Box2D.Collision.b2Manifold = F;
    Box2D.Collision.b2ManifoldPoint = G;
    Box2D.Collision.b2Point = e;
    Box2D.Collision.b2RayCastInput = A;
    Box2D.Collision.b2RayCastOutput = v;
    Box2D.Collision.b2Segment = M;
    Box2D.Collision.b2SeparationFunction = E;
    Box2D.Collision.b2Simplex = P;
    Box2D.Collision.b2SimplexCache = z;
    Box2D.Collision.b2SimplexVertex = O;
    Box2D.Collision.b2TimeOfImpact = K;
    Box2D.Collision.b2TOIInput = N;
    Box2D.Collision.b2WorldManifold = J;
    Box2D.Collision.ClipVertex = L;
    Box2D.Collision.Features = g;
    Box2D.Collision.Shapes.b2CircleShape = q;
    Box2D.Collision.Shapes.b2EdgeChainDef = I;
    Box2D.Collision.Shapes.b2EdgeShape = x;
    Box2D.Collision.Shapes.b2MassData = C;
    Box2D.Collision.Shapes.b2PolygonShape = Q;
    Box2D.Collision.Shapes.b2Shape = R;
    Box2D.Common.b2internal = "Box2D.Common.b2internal";
    Box2D.Common.b2Color = c;
    Box2D.Common.b2Settings = p;
    Box2D.Common.Math.b2Mat22 = D;
    Box2D.Common.Math.b2Mat33 = w;
    Box2D.Common.Math.b2Math = H;
    Box2D.Common.Math.b2Sweep = S;
    Box2D.Common.Math.b2Transform = T;
    Box2D.Common.Math.b2Vec2 = U;
    Box2D.Common.Math.b2Vec3 = V;
    Box2D.Dynamics.b2Body = W;
    Box2D.Dynamics.b2BodyDef = X;
    Box2D.Dynamics.b2ContactFilter = Fa;
    Box2D.Dynamics.b2ContactImpulse = Ga;
    Box2D.Dynamics.b2ContactListener = Ha;
    Box2D.Dynamics.b2ContactManager = Y;
    Box2D.Dynamics.b2DebugDraw = Z;
    Box2D.Dynamics.b2DestructionListener = Ia;
    Box2D.Dynamics.b2FilterData = Ja;
    Box2D.Dynamics.b2Fixture = aa;
    Box2D.Dynamics.b2FixtureDef = ba;
    Box2D.Dynamics.b2Island = ca;
    Box2D.Dynamics.b2TimeStep = Ka;
    Box2D.Dynamics.b2World = da;
    Box2D.Dynamics.Contacts.b2CircleContact = La;
    Box2D.Dynamics.Contacts.b2Contact = ea;
    Box2D.Dynamics.Contacts.b2ContactConstraint = fa;
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Ma;
    Box2D.Dynamics.Contacts.b2ContactEdge = Na;
    Box2D.Dynamics.Contacts.b2ContactFactory = ha;
    Box2D.Dynamics.Contacts.b2ContactRegister = Oa;
    Box2D.Dynamics.Contacts.b2ContactResult = Pa;
    Box2D.Dynamics.Contacts.b2ContactSolver = ia;
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = Qa;
    Box2D.Dynamics.Contacts.b2NullContact = ja;
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = Ra;
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = Sa;
    Box2D.Dynamics.Contacts.b2PolygonContact = Ta;
    Box2D.Dynamics.Contacts.b2PositionSolverManifold = ka;
    Box2D.Dynamics.Controllers.b2BuoyancyController = Ua;
    Box2D.Dynamics.Controllers.b2ConstantAccelController = Va;
    Box2D.Dynamics.Controllers.b2ConstantForceController = Wa;
    Box2D.Dynamics.Controllers.b2Controller = Xa;
    Box2D.Dynamics.Controllers.b2ControllerEdge = Ya;
    Box2D.Dynamics.Controllers.b2GravityController = Za;
    Box2D.Dynamics.Controllers.b2TensorDampingController = $a;
    Box2D.Dynamics.Joints.b2DistanceJoint = la;
    Box2D.Dynamics.Joints.b2DistanceJointDef = ma;
    Box2D.Dynamics.Joints.b2FrictionJoint = na;
    Box2D.Dynamics.Joints.b2FrictionJointDef = oa;
    Box2D.Dynamics.Joints.b2GearJoint = pa;
    Box2D.Dynamics.Joints.b2GearJointDef = qa;
    Box2D.Dynamics.Joints.b2Jacobian = ab;
    Box2D.Dynamics.Joints.b2Joint = ra;
    Box2D.Dynamics.Joints.b2JointDef = sa;
    Box2D.Dynamics.Joints.b2JointEdge = bb;
    Box2D.Dynamics.Joints.b2LineJoint = ta;
    Box2D.Dynamics.Joints.b2LineJointDef = ua;
    Box2D.Dynamics.Joints.b2MouseJoint = va;
    Box2D.Dynamics.Joints.b2MouseJointDef = wa;
    Box2D.Dynamics.Joints.b2PrismaticJoint = xa;
    Box2D.Dynamics.Joints.b2PrismaticJointDef = ya;
    Box2D.Dynamics.Joints.b2PulleyJoint = za;
    Box2D.Dynamics.Joints.b2PulleyJointDef = Aa;
    Box2D.Dynamics.Joints.b2RevoluteJoint = Ba;
    Box2D.Dynamics.Joints.b2RevoluteJointDef = Ca;
    Box2D.Dynamics.Joints.b2WeldJoint = Da;
    Box2D.Dynamics.Joints.b2WeldJointDef = Ea
})();
Box2D.postDefs = []; (function() {
    var b = Box2D.Collision.Shapes.b2CircleShape,
        l = Box2D.Collision.Shapes.b2PolygonShape,
        k = Box2D.Collision.Shapes.b2Shape,
        d = Box2D.Common.b2Settings,
        h = Box2D.Common.Math.b2Math,
        f = Box2D.Common.Math.b2Sweep,
        n = Box2D.Common.Math.b2Transform,
        a = Box2D.Common.Math.b2Vec2,
        m = Box2D.Collision.b2AABB,
        y = Box2D.Collision.b2Bound,
        u = Box2D.Collision.b2BoundValues,
        B = Box2D.Collision.b2Collision,
        t = Box2D.Collision.b2ContactID,
        r = Box2D.Collision.b2ContactPoint,
        F = Box2D.Collision.b2Distance,
        G = Box2D.Collision.b2DistanceInput,
        e = Box2D.Collision.b2DistanceOutput,
        A = Box2D.Collision.b2DistanceProxy,
        v = Box2D.Collision.b2DynamicTree,
        M = Box2D.Collision.b2DynamicTreeBroadPhase,
        E = Box2D.Collision.b2DynamicTreeNode,
        P = Box2D.Collision.b2DynamicTreePair,
        z = Box2D.Collision.b2Manifold,
        O = Box2D.Collision.b2ManifoldPoint,
        K = Box2D.Collision.b2Point,
        N = Box2D.Collision.b2RayCastInput,
        J = Box2D.Collision.b2RayCastOutput,
        L = Box2D.Collision.b2Segment,
        g = Box2D.Collision.b2SeparationFunction,
        q = Box2D.Collision.b2Simplex,
        I = Box2D.Collision.b2SimplexCache,
        x = Box2D.Collision.b2SimplexVertex,
        C = Box2D.Collision.b2TimeOfImpact,
        Q = Box2D.Collision.b2TOIInput,
        R = Box2D.Collision.b2WorldManifold,
        c = Box2D.Collision.ClipVertex,
        p = Box2D.Collision.Features,
        D = Box2D.Collision.IBroadPhase;
    m.b2AABB = function() {
        this.lowerBound = new a;
        this.upperBound = new a
    };
    m.prototype.IsValid = function() {
        var c = this.upperBound.y - this.lowerBound.y;
        return 0 <= this.upperBound.x - this.lowerBound.x && 0 <= c && this.lowerBound.IsValid() && this.upperBound.IsValid()
    };
    m.prototype.GetCenter = function() {
        return new a((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
    };
    m.prototype.GetExtents = function() {
        return new a((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
    };
    m.prototype.Contains = function(c) {
        var a;
        return a = (a = (a = (a = this.lowerBound.x <= c.lowerBound.x) && this.lowerBound.y <= c.lowerBound.y) && c.upperBound.x <= this.upperBound.x) && c.upperBound.y <= this.upperBound.y
    };
    m.prototype.RayCast = function(c, a) {
        var w = -Number.MAX_VALUE,
            g = Number.MAX_VALUE,
            p = a.p1.x,
            e = a.p1.y,
            H = a.p2.x - a.p1.x,
            b = a.p2.y - a.p1.y,
            d = Math.abs(b),
            D = c.normal;
        if (Math.abs(H) < Number.MIN_VALUE) {
            if (p < this.lowerBound.x || this.upperBound.x < p) return ! 1
        } else {
            var q = 1 / H;
            H = (this.lowerBound.x - p) * q;
            p = (this.upperBound.x - p) * q;
            q = -1;
            H > p && (q = H, H = p, p = q, q = 1);
            H > w && (D.x = q, D.y = 0, w = H);
            g = Math.min(g, p);
            if (w > g) return ! 1
        }
        if (d < Number.MIN_VALUE) {
            if (e < this.lowerBound.y || this.upperBound.y < e) return ! 1
        } else if (q = 1 / b, H = (this.lowerBound.y - e) * q, p = (this.upperBound.y - e) * q, q = -1, H > p && (q = H, H = p, p = q, q = 1), H > w && (D.y = q, D.x = 0, w = H), g = Math.min(g, p), w > g) return ! 1;
        c.fraction = w;
        return ! 0
    };
    m.prototype.TestOverlap = function(c) {
        var a = c.lowerBound.y - this.upperBound.y,
            w = this.lowerBound.y - c.upperBound.y;
        return 0 < c.lowerBound.x - this.upperBound.x || 0 < a || 0 < this.lowerBound.x - c.upperBound.x || 0 < w ? !1 : !0
    };
    m.Combine = function(c, a) {
        var w = new m;
        w.Combine(c, a);
        return w
    };
    m.prototype.Combine = function(c, a) {
        this.lowerBound.x = Math.min(c.lowerBound.x, a.lowerBound.x);
        this.lowerBound.y = Math.min(c.lowerBound.y, a.lowerBound.y);
        this.upperBound.x = Math.max(c.upperBound.x, a.upperBound.x);
        this.upperBound.y = Math.max(c.upperBound.y, a.upperBound.y)
    };
    y.b2Bound = function() {};
    y.prototype.IsLower = function() {
        return 0 == (this.value & 1)
    };
    y.prototype.IsUpper = function() {
        return 1 == (this.value & 1)
    };
    y.prototype.Swap = function(c) {
        var a = this.value,
            w = this.proxy,
            g = this.stabbingCount;
        this.value = c.value;
        this.proxy = c.proxy;
        this.stabbingCount = c.stabbingCount;
        c.value = a;
        c.proxy = w;
        c.stabbingCount = g
    };
    u.b2BoundValues = function() {};
    u.prototype.b2BoundValues = function() {
        this.lowerValues = new Vector_a2j_Number;
        this.lowerValues[0] = 0;
        this.lowerValues[1] = 0;
        this.upperValues = new Vector_a2j_Number;
        this.upperValues[0] = 0;
        this.upperValues[1] = 0
    };
    B.b2Collision = function() {};
    B.ClipSegmentToLine = function(c, a, g, p) {
        void 0 === p && (p = 0);
        var w = 0;
        var e = a[0];
        var H = e.v;
        e = a[1];
        var b = e.v,
            d = g.x * H.x + g.y * H.y - p;
        e = g.x * b.x + g.y * b.y - p;
        0 >= d && c[w++].Set(a[0]);
        0 >= e && c[w++].Set(a[1]);
        0 > d * e && (g = d / (d - e), e = c[w], e = e.v, e.x = H.x + g * (b.x - H.x), e.y = H.y + g * (b.y - H.y), e = c[w], e.id = (0 < d ? a[0] : a[1]).id, ++w);
        return w
    };
    B.EdgeSeparation = function(c, a, g, p, e) {
        void 0 === g && (g = 0);
        parseInt(c.m_vertexCount);
        var w = c.m_vertices,
            H = c.m_normals;
        c = parseInt(p.m_vertexCount);
        p = p.m_vertices;
        var b = a.R;
        var d = H[g];
        H = b.col1.x * d.x + b.col2.x * d.y;
        var q = b.col1.y * d.x + b.col2.y * d.y;
        b = e.R;
        var D = b.col1.x * H + b.col1.y * q;
        b = b.col2.x * H + b.col2.y * q;
        for (var f = 0,
                 x = Number.MAX_VALUE,
                 S = 0; S < c; ++S) d = p[S],
            d = d.x * D + d.y * b,
        d < x && (x = d, f = S);
        d = w[g];
        b = a.R;
        g = a.position.x + (b.col1.x * d.x + b.col2.x * d.y);
        a = a.position.y + (b.col1.y * d.x + b.col2.y * d.y);
        d = p[f];
        b = e.R;
        return (e.position.x + (b.col1.x * d.x + b.col2.x * d.y) - g) * H + (e.position.y + (b.col1.y * d.x + b.col2.y * d.y) - a) * q
    };
    B.FindMaxSeparation = function(c, a, g, p, e) {
        var w = parseInt(a.m_vertexCount),
            b = a.m_normals;
        var H = e.R;
        var d = p.m_centroid;
        var q = e.position.x + (H.col1.x * d.x + H.col2.x * d.y),
            D = e.position.y + (H.col1.y * d.x + H.col2.y * d.y);
        H = g.R;
        d = a.m_centroid;
        q -= g.position.x + (H.col1.x * d.x + H.col2.x * d.y);
        D -= g.position.y + (H.col1.y * d.x + H.col2.y * d.y);
        H = q * g.R.col1.x + D * g.R.col1.y;
        D = q * g.R.col2.x + D * g.R.col2.y;
        q = 0;
        for (var f = -Number.MAX_VALUE,
                 x = 0; x < w; ++x) d = b[x],
            d = d.x * H + d.y * D,
        d > f && (f = d, q = x);
        b = B.EdgeSeparation(a, g, q, p, e);
        f = parseInt(0 <= q - 1 ? q - 1 : w - 1);
        H = B.EdgeSeparation(a, g, f, p, e);
        x = parseInt(q + 1 < w ? q + 1 : 0);
        D = B.EdgeSeparation(a, g, x, p, e);
        if (H > b && H > D) d = -1;
        else if (D > b) d = 1,
            f = x,
            H = D;
        else return c[0] = q,
                b;
        for (;;) if (q = -1 == d ? 0 <= f - 1 ? f - 1 : w - 1 : f + 1 < w ? f + 1 : 0, b = B.EdgeSeparation(a, g, q, p, e), b > H) f = q,
            H = b;
        else break;
        c[0] = f;
        return H
    };
    B.FindIncidentEdge = function(c, a, g, p, e, b) {
        void 0 === p && (p = 0);
        parseInt(a.m_vertexCount);
        var w = a.m_normals,
            H = parseInt(e.m_vertexCount);
        a = e.m_vertices;
        e = e.m_normals;
        var d = g.R;
        g = w[p];
        w = d.col1.x * g.x + d.col2.x * g.y;
        var q = d.col1.y * g.x + d.col2.y * g.y;
        d = b.R;
        g = d.col1.x * w + d.col1.y * q;
        q = d.col2.x * w + d.col2.y * q;
        w = g;
        d = 0;
        for (var D = Number.MAX_VALUE,
                 f = 0; f < H; ++f) g = e[f],
            g = w * g.x + q * g.y,
        g < D && (D = g, d = f);
        e = parseInt(d);
        w = parseInt(e + 1 < H ? e + 1 : 0);
        H = c[0];
        g = a[e];
        d = b.R;
        H.v.x = b.position.x + (d.col1.x * g.x + d.col2.x * g.y);
        H.v.y = b.position.y + (d.col1.y * g.x + d.col2.y * g.y);
        H.id.features.referenceEdge = p;
        H.id.features.incidentEdge = e;
        H.id.features.incidentVertex = 0;
        H = c[1];
        g = a[w];
        d = b.R;
        H.v.x = b.position.x + (d.col1.x * g.x + d.col2.x * g.y);
        H.v.y = b.position.y + (d.col1.y * g.x + d.col2.y * g.y);
        H.id.features.referenceEdge = p;
        H.id.features.incidentEdge = w;
        H.id.features.incidentVertex = 1
    };
    B.MakeClipPointVector = function() {
        var a = new Vector(2);
        a[0] = new c;
        a[1] = new c;
        return a
    };
    B.CollidePolygons = function(c, a, g, p, e) {
        c.m_pointCount = 0;
        var w = a.m_radius + p.m_radius;
        B.s_edgeAO[0] = 0;
        var b = B.FindMaxSeparation(B.s_edgeAO, a, g, p, e);
        var H = B.s_edgeAO[0];
        if (! (b > w)) {
            B.s_edgeBO[0] = 0;
            var q = B.FindMaxSeparation(B.s_edgeBO, p, e, a, g);
            var D = B.s_edgeBO[0];
            if (! (q > w)) {
                q > .98 * b + .001 ? (b = p, p = a, a = e, e = D, c.m_type = z.e_faceB, H = 1) : (b = a, a = g, g = e, e = H, c.m_type = z.e_faceA, H = 0);
                D = B.s_incidentEdge;
                B.FindIncidentEdge(D, b, a, e, p, g);
                q = parseInt(b.m_vertexCount);
                b = b.m_vertices;
                p = b[e];
                var f = e + 1 < q ? b[parseInt(e + 1)] : b[0];
                b = B.s_localTangent;
                b.Set(f.x - p.x, f.y - p.y);
                b.Normalize();
                q = B.s_localNormal;
                q.x = b.y;
                q.y = -b.x;
                var x = B.s_planePoint;
                x.Set(.5 * (p.x + f.x), .5 * (p.y + f.y));
                var S = B.s_tangent;
                e = a.R;
                S.x = e.col1.x * b.x + e.col2.x * b.y;
                S.y = e.col1.y * b.x + e.col2.y * b.y;
                var h = B.s_tangent2;
                h.x = -S.x;
                h.y = -S.y;
                b = B.s_normal;
                b.x = S.y;
                b.y = -S.x;
                var m = B.s_v11,
                    C = B.s_v12;
                m.x = a.position.x + (e.col1.x * p.x + e.col2.x * p.y);
                m.y = a.position.y + (e.col1.y * p.x + e.col2.y * p.y);
                C.x = a.position.x + (e.col1.x * f.x + e.col2.x * f.y);
                C.y = a.position.y + (e.col1.y * f.x + e.col2.y * f.y);
                a = b.x * m.x + b.y * m.y;
                e = S.x * C.x + S.y * C.y + w;
                f = B.s_clipPoints1;
                p = B.s_clipPoints2;
                D = B.ClipSegmentToLine(f, D, h, -S.x * m.x - S.y * m.y + w);
                if (! (2 > D || (D = B.ClipSegmentToLine(p, f, S, e), 2 > D))) {
                    c.m_localPlaneNormal.SetV(q);
                    c.m_localPoint.SetV(x);
                    for (x = q = 0; x < d.b2_maxManifoldPoints; ++x) D = p[x],
                    b.x * D.v.x + b.y * D.v.y - a <= w && (S = c.m_points[q], e = g.R, h = D.v.x - g.position.x, m = D.v.y - g.position.y, S.m_localPoint.x = h * e.col1.x + m * e.col1.y, S.m_localPoint.y = h * e.col2.x + m * e.col2.y, S.m_id.Set(D.id), S.m_id.features.flip = H, ++q);
                    c.m_pointCount = q
                }
            }
        }
    };
    B.CollideCircles = function(c, a, g, e, p) {
        c.m_pointCount = 0;
        var w = g.R;
        var b = a.m_p;
        var H = g.position.x + (w.col1.x * b.x + w.col2.x * b.y);
        g = g.position.y + (w.col1.y * b.x + w.col2.y * b.y);
        w = p.R;
        b = e.m_p;
        H = p.position.x + (w.col1.x * b.x + w.col2.x * b.y) - H;
        p = p.position.y + (w.col1.y * b.x + w.col2.y * b.y) - g;
        w = a.m_radius + e.m_radius;
        H * H + p * p > w * w || (c.m_type = z.e_circles, c.m_localPoint.SetV(a.m_p), c.m_localPlaneNormal.SetZero(), c.m_pointCount = 1, c.m_points[0].m_localPoint.SetV(e.m_p), c.m_points[0].m_id.key = 0)
    };
    B.CollidePolygonAndCircle = function(c, a, g, e, p) {
        c.m_pointCount = 0;
        var w = p.R;
        var b = e.m_p;
        var H = p.position.y + (w.col1.y * b.x + w.col2.y * b.y);
        var d = p.position.x + (w.col1.x * b.x + w.col2.x * b.y) - g.position.x;
        var q = H - g.position.y;
        w = g.R;
        g = d * w.col1.x + q * w.col1.y;
        w = d * w.col2.x + q * w.col2.y;
        var D = 0;
        p = -Number.MAX_VALUE;
        H = a.m_radius + e.m_radius;
        var f = parseInt(a.m_vertexCount),
            x = a.m_vertices;
        a = a.m_normals;
        for (var h = 0; h < f; ++h) {
            b = x[h];
            d = g - b.x;
            q = w - b.y;
            b = a[h];
            b = b.x * d + b.y * q;
            if (b > H) return;
            b > p && (p = b, D = h)
        }
        b = parseInt(D);
        q = parseInt(b + 1 < f ? b + 1 : 0);
        d = x[b];
        x = x[q];
        if (p < Number.MIN_VALUE) c.m_pointCount = 1,
            c.m_type = z.e_faceA,
            c.m_localPlaneNormal.SetV(a[D]),
            c.m_localPoint.x = .5 * (d.x + x.x),
            c.m_localPoint.y = .5 * (d.y + x.y);
        else if (p = (g - x.x) * (d.x - x.x) + (w - x.y) * (d.y - x.y), 0 >= (g - d.x) * (x.x - d.x) + (w - d.y) * (x.y - d.y)) {
            if ((g - d.x) * (g - d.x) + (w - d.y) * (w - d.y) > H * H) return;
            c.m_pointCount = 1;
            c.m_type = z.e_faceA;
            c.m_localPlaneNormal.x = g - d.x;
            c.m_localPlaneNormal.y = w - d.y;
            c.m_localPlaneNormal.Normalize();
            c.m_localPoint.SetV(d)
        } else if (0 >= p) {
            if ((g - x.x) * (g - x.x) + (w - x.y) * (w - x.y) > H * H) return;
            c.m_pointCount = 1;
            c.m_type = z.e_faceA;
            c.m_localPlaneNormal.x = g - x.x;
            c.m_localPlaneNormal.y = w - x.y;
            c.m_localPlaneNormal.Normalize();
            c.m_localPoint.SetV(x)
        } else {
            D = .5 * (d.x + x.x);
            x = .5 * (d.y + x.y);
            p = (g - D) * a[b].x + (w - x) * a[b].y;
            if (p > H) return;
            c.m_pointCount = 1;
            c.m_type = z.e_faceA;
            c.m_localPlaneNormal.x = a[b].x;
            c.m_localPlaneNormal.y = a[b].y;
            c.m_localPlaneNormal.Normalize();
            c.m_localPoint.Set(D, x)
        }
        c.m_points[0].m_localPoint.SetV(e.m_p);
        c.m_points[0].m_id.key = 0
    };
    B.TestOverlap = function(c, a) {
        var g = a.lowerBound,
            w = c.upperBound,
            p = g.x - w.x,
            e = g.y - w.y;
        g = c.lowerBound;
        w = a.upperBound;
        var b = g.y - w.y;
        return 0 < p || 0 < e || 0 < g.x - w.x || 0 < b ? !1 : !0
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Collision.s_incidentEdge = B.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints1 = B.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints2 = B.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_localTangent = new a;
        Box2D.Collision.b2Collision.s_localNormal = new a;
        Box2D.Collision.b2Collision.s_planePoint = new a;
        Box2D.Collision.b2Collision.s_normal = new a;
        Box2D.Collision.b2Collision.s_tangent = new a;
        Box2D.Collision.b2Collision.s_tangent2 = new a;
        Box2D.Collision.b2Collision.s_v11 = new a;
        Box2D.Collision.b2Collision.s_v12 = new a;
        Box2D.Collision.b2Collision.b2CollidePolyTempVec = new a;
        Box2D.Collision.b2Collision.b2_nullFeature = 255
    });
    t.b2ContactID = function() {
        this.features = new p
    };
    t.prototype.b2ContactID = function() {
        this.features._m_id = this
    };
    t.prototype.Set = function(c) {
        this.key = c._key
    };
    t.prototype.Copy = function() {
        var c = new t;
        c.key = this.key;
        return c
    };
    Object.defineProperty(t.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._key
        }
    });
    Object.defineProperty(t.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        set: function(c) {
            void 0 === c && (c = 0);
            this._key = c;
            this.features._referenceEdge = this._key & 255;
            this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
            this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
            this.features._flip = (this._key & 4278190080) >> 24 & 255
        }
    });
    r.b2ContactPoint = function() {
        this.position = new a;
        this.velocity = new a;
        this.normal = new a;
        this.id = new t
    };
    F.b2Distance = function() {};
    F.Distance = function(c, g, p) {++F.b2_gjkCalls;
        var w = p.proxyA,
            e = p.proxyB,
            b = p.transformA,
            H = p.transformB,
            q = F.s_simplex;
        q.ReadCache(g, w, b, e, H);
        var D = q.m_vertices,
            x = F.s_saveA,
            f = F.s_saveB;
        q.GetClosestPoint().LengthSquared();
        for (var m, C, S = 0; 20 > S;) {
            var k = q.m_count;
            for (m = 0; m < k; m++) x[m] = D[m].indexA,
                f[m] = D[m].indexB;
            switch (q.m_count) {
                case 1:
                    break;
                case 2:
                    q.Solve2();
                    break;
                case 3:
                    q.Solve3();
                    break;
                default:
                    d.b2Assert(!1)
            }
            if (3 == q.m_count) break;
            C = q.GetClosestPoint();
            C.LengthSquared();
            m = q.GetSearchDirection();
            if (m.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
            C = D[q.m_count];
            C.indexA = w.GetSupport(h.MulTMV(b.R, m.GetNegative()));
            C.wA = h.MulX(b, w.GetVertex(C.indexA));
            C.indexB = e.GetSupport(h.MulTMV(H.R, m));
            C.wB = h.MulX(H, e.GetVertex(C.indexB));
            C.w = h.SubtractVV(C.wB, C.wA); ++S; ++F.b2_gjkIters;
            var I = !1;
            for (m = 0; m < k; m++) if (C.indexA == x[m] && C.indexB == f[m]) {
                I = !0;
                break
            }
            if (I) break; ++q.m_count
        }
        F.b2_gjkMaxIters = h.Max(F.b2_gjkMaxIters, S);
        q.GetWitnessPoints(c.pointA, c.pointB);
        c.distance = h.SubtractVV(c.pointA, c.pointB).Length();
        c.iterations = S;
        q.WriteCache(g);
        p.useRadii && (g = w.m_radius, e = e.m_radius, c.distance > g + e && c.distance > Number.MIN_VALUE ? (c.distance -= g + e, p = h.SubtractVV(c.pointB, c.pointA), p.Normalize(), c.pointA.x += g * p.x, c.pointA.y += g * p.y, c.pointB.x -= e * p.x, c.pointB.y -= e * p.y) : (C = new a, C.x = .5 * (c.pointA.x + c.pointB.x), C.y = .5 * (c.pointA.y + c.pointB.y), c.pointA.x = c.pointB.x = C.x, c.pointA.y = c.pointB.y = C.y, c.distance = 0))
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Distance.s_simplex = new q;
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
    });
    G.b2DistanceInput = function() {};
    e.b2DistanceOutput = function() {
        this.pointA = new a;
        this.pointB = new a
    };
    A.b2DistanceProxy = function() {};
    A.prototype.Set = function(c) {
        switch (c.GetType()) {
            case k.e_circleShape:
                c = c instanceof b ? c: null;
                this.m_vertices = new Vector(1, !0);
                this.m_vertices[0] = c.m_p;
                this.m_count = 1;
                this.m_radius = c.m_radius;
                break;
            case k.e_polygonShape:
                c = c instanceof l ? c: null;
                this.m_vertices = c.m_vertices;
                this.m_count = c.m_vertexCount;
                this.m_radius = c.m_radius;
                break;
            default:
                d.b2Assert(!1)
        }
    };
    A.prototype.GetSupport = function(c) {
        for (var a = 0,
                 g = this.m_vertices[0].x * c.x + this.m_vertices[0].y * c.y, w = 1; w < this.m_count; ++w) {
            var p = this.m_vertices[w].x * c.x + this.m_vertices[w].y * c.y;
            p > g && (a = w, g = p)
        }
        return a
    };
    A.prototype.GetSupportVertex = function(c) {
        for (var a = 0,
                 g = this.m_vertices[0].x * c.x + this.m_vertices[0].y * c.y, w = 1; w < this.m_count; ++w) {
            var p = this.m_vertices[w].x * c.x + this.m_vertices[w].y * c.y;
            p > g && (a = w, g = p)
        }
        return this.m_vertices[a]
    };
    A.prototype.GetVertexCount = function() {
        return this.m_count
    };
    A.prototype.GetVertex = function(c) {
        void 0 === c && (c = 0);
        d.b2Assert(0 <= c && c < this.m_count);
        return this.m_vertices[c]
    };
    v.b2DynamicTree = function() {};
    v.prototype.b2DynamicTree = function() {
        this.m_freeList = this.m_root = null;
        this.m_insertionCount = this.m_path = 0
    };
    v.prototype.CreateProxy = function(c, a) {
        var g = this.AllocateNode(),
            p = d.b2_aabbExtension,
            w = d.b2_aabbExtension;
        g.aabb.lowerBound.x = c.lowerBound.x - p;
        g.aabb.lowerBound.y = c.lowerBound.y - w;
        g.aabb.upperBound.x = c.upperBound.x + p;
        g.aabb.upperBound.y = c.upperBound.y + w;
        g.userData = a;
        this.InsertLeaf(g);
        return g
    };
    v.prototype.DestroyProxy = function(c) {
        this.RemoveLeaf(c);
        this.FreeNode(c)
    };
    v.prototype.MoveProxy = function(c, a, g) {
        d.b2Assert(c.IsLeaf());
        if (c.aabb.Contains(a)) return ! 1;
        this.RemoveLeaf(c);
        var p = d.b2_aabbExtension + d.b2_aabbMultiplier * (0 < g.x ? g.x: -g.x);
        g = d.b2_aabbExtension + d.b2_aabbMultiplier * (0 < g.y ? g.y: -g.y);
        c.aabb.lowerBound.x = a.lowerBound.x - p;
        c.aabb.lowerBound.y = a.lowerBound.y - g;
        c.aabb.upperBound.x = a.upperBound.x + p;
        c.aabb.upperBound.y = a.upperBound.y + g;
        this.InsertLeaf(c);
        return ! 0
    };
    v.prototype.Rebalance = function(c) {
        void 0 === c && (c = 0);
        if (null != this.m_root) for (var a = 0; a < c; a++) {
            for (var g = this.m_root,
                     p = 0; 0 == g.IsLeaf();) g = this.m_path >> p & 1 ? g.child2: g.child1,
                p = p + 1 & 31; ++this.m_path;
            this.RemoveLeaf(g);
            this.InsertLeaf(g)
        }
    };
    v.prototype.GetFatAABB = function(c) {
        return c.aabb
    };
    v.prototype.GetUserData = function(c) {
        return c.userData
    };
    v.prototype.Query = function(c, a) {
        if (null != this.m_root) {
            var g = new Vector,
                p = 0;
            for (g[p++] = this.m_root; 0 < p;) {
                var e = g[--p];
                if (e.aabb.TestOverlap(a)) if (e.IsLeaf()) {
                    if (!c(e)) break
                } else g[p++] = e.child1,
                    g[p++] = e.child2
            }
        }
    };
    v.prototype.RayCast = function(c, a) {
        if (null != this.m_root) {
            var g = a.p1,
                p = a.p2,
                e = h.SubtractVV(g, p);
            e.Normalize();
            e = h.CrossFV(1, e);
            var w = h.AbsV(e),
                b = a.maxFraction,
                d = new m;
            var q = g.x + b * (p.x - g.x);
            b = g.y + b * (p.y - g.y);
            d.lowerBound.x = Math.min(g.x, q);
            d.lowerBound.y = Math.min(g.y, b);
            d.upperBound.x = Math.max(g.x, q);
            d.upperBound.y = Math.max(g.y, b);
            var H = new Vector,
                D = 0;
            for (H[D++] = this.m_root; 0 < D;) if (q = H[--D], 0 != q.aabb.TestOverlap(d)) {
                b = q.aabb.GetCenter();
                var x = q.aabb.GetExtents();
                if (! (0 < Math.abs(e.x * (g.x - b.x) + e.y * (g.y - b.y)) - w.x * x.x - w.y * x.y)) if (q.IsLeaf()) {
                    b = new N;
                    b.p1 = a.p1;
                    b.p2 = a.p2;
                    b.maxFraction = a.maxFraction;
                    b = c(b, q);
                    if (0 == b) break;
                    0 < b && (q = g.x + b * (p.x - g.x), b = g.y + b * (p.y - g.y), d.lowerBound.x = Math.min(g.x, q), d.lowerBound.y = Math.min(g.y, b), d.upperBound.x = Math.max(g.x, q), d.upperBound.y = Math.max(g.y, b))
                } else H[D++] = q.child1,
                    H[D++] = q.child2
            }
        }
    };
    v.prototype.AllocateNode = function() {
        if (this.m_freeList) {
            var c = this.m_freeList;
            this.m_freeList = c.parent;
            c.parent = null;
            c.child1 = null;
            c.child2 = null;
            return c
        }
        return new E
    };
    v.prototype.FreeNode = function(c) {
        c.parent = this.m_freeList;
        this.m_freeList = c
    };
    v.prototype.InsertLeaf = function(c) {++this.m_insertionCount;
        if (null == this.m_root) this.m_root = c,
            this.m_root.parent = null;
        else {
            var a = c.aabb.GetCenter(),
                g = this.m_root;
            if (0 == g.IsLeaf()) {
                do {
                    var p = g.child1;
                    g = g.child2;
                    g = Math.abs((p.aabb.lowerBound.x + p.aabb.upperBound.x) / 2 - a.x) + Math.abs((p.aabb.lowerBound.y + p.aabb.upperBound.y) / 2 - a.y) < Math.abs((g.aabb.lowerBound.x + g.aabb.upperBound.x) / 2 - a.x) + Math.abs((g.aabb.lowerBound.y + g.aabb.upperBound.y) / 2 - a.y) ? p: g
                } while ( 0 == g . IsLeaf ())
            }
            a = g.parent;
            p = this.AllocateNode();
            p.parent = a;
            p.userData = null;
            p.aabb.Combine(c.aabb, g.aabb);
            if (a) {
                g.parent.child1 == g ? a.child1 = p: a.child2 = p;
                p.child1 = g;
                p.child2 = c;
                g.parent = p;
                c.parent = p;
                do {
                    if (a.aabb.Contains(p.aabb)) break;
                    a.aabb.Combine(a.child1.aabb, a.child2.aabb);
                    p = a;
                    a = a.parent
                } while ( a )
            } else p.child1 = g,
                p.child2 = c,
                g.parent = p,
                this.m_root = c.parent = p
        }
    };
    v.prototype.RemoveLeaf = function(c) {
        if (c == this.m_root) this.m_root = null;
        else {
            var a = c.parent,
                g = a.parent;
            c = a.child1 == c ? a.child2: a.child1;
            if (g) for (g.child1 == a ? g.child1 = c: g.child2 = c, c.parent = g, this.FreeNode(a); g;) {
                a = g.aabb;
                g.aabb = m.Combine(g.child1.aabb, g.child2.aabb);
                if (a.Contains(g.aabb)) break;
                g = g.parent
            } else this.m_root = c,
                c.parent = null,
                this.FreeNode(a)
        }
    };
    M.b2DynamicTreeBroadPhase = function() {
        this.m_tree = new v;
        this.m_moveBuffer = new Vector;
        this.m_pairBuffer = new Vector;
        this.m_pairCount = 0
    };
    M.prototype.CreateProxy = function(c, a) {
        var g = this.m_tree.CreateProxy(c, a); ++this.m_proxyCount;
        this.BufferMove(g);
        return g
    };
    M.prototype.DestroyProxy = function(c) {
        this.UnBufferMove(c); --this.m_proxyCount;
        this.m_tree.DestroyProxy(c)
    };
    M.prototype.MoveProxy = function(c, a, g) {
        this.m_tree.MoveProxy(c, a, g) && this.BufferMove(c)
    };
    M.prototype.TestOverlap = function(c, a) {
        var g = this.m_tree.GetFatAABB(c),
            p = this.m_tree.GetFatAABB(a);
        return g.TestOverlap(p)
    };
    M.prototype.GetUserData = function(c) {
        return this.m_tree.GetUserData(c)
    };
    M.prototype.GetFatAABB = function(c) {
        return this.m_tree.GetFatAABB(c)
    };
    M.prototype.GetProxyCount = function() {
        return this.m_proxyCount
    };
    M.prototype.UpdatePairs = function(c) {
        var a = this,
            g = a.m_pairCount = 0;
        for (g = 0; g < a.m_moveBuffer.length; ++g) {
            var p = a.m_moveBuffer[g];
            var e = a.m_tree.GetFatAABB(p);
            a.m_tree.Query(function(c) {
                    if (c == p) return ! 0;
                    a.m_pairCount == a.m_pairBuffer.length && (a.m_pairBuffer[a.m_pairCount] = new P);
                    var g = a.m_pairBuffer[a.m_pairCount];
                    g.proxyA = c < p ? c: p;
                    g.proxyB = c >= p ? c: p; ++a.m_pairCount;
                    return ! 0
                },
                e)
        }
        for (g = a.m_moveBuffer.length = 0; g < a.m_pairCount;) {
            e = a.m_pairBuffer[g];
            var w = a.m_tree.GetUserData(e.proxyA),
                b = a.m_tree.GetUserData(e.proxyB);
            c(w, b);
            for (++g; g < a.m_pairCount;) {
                w = a.m_pairBuffer[g];
                if (w.proxyA != e.proxyA || w.proxyB != e.proxyB) break; ++g
            }
        }
    };
    M.prototype.Query = function(c, a) {
        this.m_tree.Query(c, a)
    };
    M.prototype.RayCast = function(c, a) {
        this.m_tree.RayCast(c, a)
    };
    M.prototype.Validate = function() {};
    M.prototype.Rebalance = function(c) {
        void 0 === c && (c = 0);
        this.m_tree.Rebalance(c)
    };
    M.prototype.BufferMove = function(c) {
        this.m_moveBuffer[this.m_moveBuffer.length] = c
    };
    M.prototype.UnBufferMove = function(c) {
        c = parseInt(this.m_moveBuffer.indexOf(c));
        this.m_moveBuffer.splice(c, 1)
    };
    M.prototype.ComparePairs = function(c, a) {
        return 0
    };
    M.__implements = {};
    M.__implements[D] = !0;
    E.b2DynamicTreeNode = function() {
        this.aabb = new m
    };
    E.prototype.IsLeaf = function() {
        return null == this.child1
    };
    P.b2DynamicTreePair = function() {};
    z.b2Manifold = function() {
        this.m_pointCount = 0
    };
    z.prototype.b2Manifold = function() {
        this.m_points = new Vector(d.b2_maxManifoldPoints);
        for (var c = 0; c < d.b2_maxManifoldPoints; c++) this.m_points[c] = new O;
        this.m_localPlaneNormal = new a;
        this.m_localPoint = new a
    };
    z.prototype.Reset = function() {
        for (var c = 0; c < d.b2_maxManifoldPoints; c++)(this.m_points[c] instanceof O ? this.m_points[c] : null).Reset();
        this.m_localPlaneNormal.SetZero();
        this.m_localPoint.SetZero();
        this.m_pointCount = this.m_type = 0
    };
    z.prototype.Set = function(c) {
        this.m_pointCount = c.m_pointCount;
        for (var a = 0; a < d.b2_maxManifoldPoints; a++)(this.m_points[a] instanceof O ? this.m_points[a] : null).Set(c.m_points[a]);
        this.m_localPlaneNormal.SetV(c.m_localPlaneNormal);
        this.m_localPoint.SetV(c.m_localPoint);
        this.m_type = c.m_type
    };
    z.prototype.Copy = function() {
        var c = new z;
        c.Set(this);
        return c
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Manifold.e_circles = 1;
        Box2D.Collision.b2Manifold.e_faceA = 2;
        Box2D.Collision.b2Manifold.e_faceB = 4
    });
    O.b2ManifoldPoint = function() {
        this.m_localPoint = new a;
        this.m_id = new t
    };
    O.prototype.b2ManifoldPoint = function() {
        this.Reset()
    };
    O.prototype.Reset = function() {
        this.m_localPoint.SetZero();
        this.m_tangentImpulse = this.m_normalImpulse = 0;
        this.m_id.key = 0
    };
    O.prototype.Set = function(c) {
        this.m_localPoint.SetV(c.m_localPoint);
        this.m_normalImpulse = c.m_normalImpulse;
        this.m_tangentImpulse = c.m_tangentImpulse;
        this.m_id.Set(c.m_id)
    };
    K.b2Point = function() {
        this.p = new a
    };
    K.prototype.Support = function(c, a, g) {
        return this.p
    };
    K.prototype.GetFirstVertex = function(c) {
        return this.p
    };
    N.b2RayCastInput = function() {
        this.p1 = new a;
        this.p2 = new a
    };
    N.prototype.b2RayCastInput = function(c, a, g) {
        void 0 === c && (c = null);
        void 0 === a && (a = null);
        void 0 === g && (g = 1);
        c && this.p1.SetV(c);
        a && this.p2.SetV(a);
        this.maxFraction = g
    };
    J.b2RayCastOutput = function() {
        this.normal = new a
    };
    L.b2Segment = function() {
        this.p1 = new a;
        this.p2 = new a
    };
    L.prototype.TestSegment = function(c, a, g, p) {
        void 0 === p && (p = 0);
        var e = g.p1,
            b = g.p2.x - e.x,
            w = g.p2.y - e.y;
        g = this.p2.y - this.p1.y;
        var d = -(this.p2.x - this.p1.x),
            q = 100 * Number.MIN_VALUE,
            D = -(b * g + w * d);
        if (D > q) {
            var x = e.x - this.p1.x,
                f = e.y - this.p1.y;
            e = x * g + f * d;
            if (0 <= e && e <= p * D && (p = -b * f + w * x, -q * D <= p && p <= D * (1 + q))) return p = Math.sqrt(g * g + d * d),
                c[0] = e / D,
                a.Set(g / p, d / p),
                !0
        }
        return ! 1
    };
    L.prototype.Extend = function(c) {
        this.ExtendForward(c);
        this.ExtendBackward(c)
    };
    L.prototype.ExtendForward = function(c) {
        var a = this.p2.x - this.p1.x,
            g = this.p2.y - this.p1.y;
        c = Math.min(0 < a ? (c.upperBound.x - this.p1.x) / a: 0 > a ? (c.lowerBound.x - this.p1.x) / a: Number.POSITIVE_INFINITY, 0 < g ? (c.upperBound.y - this.p1.y) / g: 0 > g ? (c.lowerBound.y - this.p1.y) / g: Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + a * c;
        this.p2.y = this.p1.y + g * c
    };
    L.prototype.ExtendBackward = function(c) {
        var a = -this.p2.x + this.p1.x,
            g = -this.p2.y + this.p1.y;
        c = Math.min(0 < a ? (c.upperBound.x - this.p2.x) / a: 0 > a ? (c.lowerBound.x - this.p2.x) / a: Number.POSITIVE_INFINITY, 0 < g ? (c.upperBound.y - this.p2.y) / g: 0 > g ? (c.lowerBound.y - this.p2.y) / g: Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + a * c;
        this.p1.y = this.p2.y + g * c
    };
    g.b2SeparationFunction = function() {
        this.m_localPoint = new a;
        this.m_axis = new a
    };
    g.prototype.Initialize = function(c, p, e, b, q) {
        this.m_proxyA = p;
        this.m_proxyB = b;
        p = parseInt(c.count);
        d.b2Assert(0 < p && 3 > p);
        if (1 == p) {
            this.m_type = g.e_points;
            var w = this.m_proxyA.GetVertex(c.indexA[0]);
            var D = this.m_proxyB.GetVertex(c.indexB[0]);
            var x = w;
            var f = e.R;
            w = e.position.x + (f.col1.x * x.x + f.col2.x * x.y);
            e = e.position.y + (f.col1.y * x.x + f.col2.y * x.y);
            x = D;
            f = q.R;
            D = q.position.x + (f.col1.x * x.x + f.col2.x * x.y);
            q = q.position.y + (f.col1.y * x.x + f.col2.y * x.y);
            this.m_axis.x = D - w;
            this.m_axis.y = q - e;
            this.m_axis.Normalize()
        } else if (c.indexB[0] == c.indexB[1]) this.m_type = g.e_faceA,
            p = this.m_proxyA.GetVertex(c.indexA[0]),
            b = this.m_proxyA.GetVertex(c.indexA[1]),
            D = this.m_proxyB.GetVertex(c.indexB[0]),
            this.m_localPoint.x = .5 * (p.x + b.x),
            this.m_localPoint.y = .5 * (p.y + b.y),
            this.m_axis = h.CrossVF(h.SubtractVV(b, p), 1),
            this.m_axis.Normalize(),
            x = this.m_axis,
            f = e.R,
            p = f.col1.x * x.x + f.col2.x * x.y,
            b = f.col1.y * x.x + f.col2.y * x.y,
            x = this.m_localPoint,
            f = e.R,
            w = e.position.x + (f.col1.x * x.x + f.col2.x * x.y),
            e = e.position.y + (f.col1.y * x.x + f.col2.y * x.y),
            x = D,
            f = q.R,
            D = q.position.x + (f.col1.x * x.x + f.col2.x * x.y),
            q = q.position.y + (f.col1.y * x.x + f.col2.y * x.y),
        0 > (D - w) * p + (q - e) * b && this.m_axis.NegativeSelf();
        else if (c.indexA[0] == c.indexA[0]) this.m_type = g.e_faceB,
            f = this.m_proxyB.GetVertex(c.indexB[0]),
            x = this.m_proxyB.GetVertex(c.indexB[1]),
            w = this.m_proxyA.GetVertex(c.indexA[0]),
            this.m_localPoint.x = .5 * (f.x + x.x),
            this.m_localPoint.y = .5 * (f.y + x.y),
            this.m_axis = h.CrossVF(h.SubtractVV(x, f), 1),
            this.m_axis.Normalize(),
            x = this.m_axis,
            f = q.R,
            p = f.col1.x * x.x + f.col2.x * x.y,
            b = f.col1.y * x.x + f.col2.y * x.y,
            x = this.m_localPoint,
            f = q.R,
            D = q.position.x + (f.col1.x * x.x + f.col2.x * x.y),
            q = q.position.y + (f.col1.y * x.x + f.col2.y * x.y),
            x = w,
            f = e.R,
            w = e.position.x + (f.col1.x * x.x + f.col2.x * x.y),
            e = e.position.y + (f.col1.y * x.x + f.col2.y * x.y),
        0 > (w - D) * p + (e - q) * b && this.m_axis.NegativeSelf();
        else {
            p = this.m_proxyA.GetVertex(c.indexA[0]);
            b = this.m_proxyA.GetVertex(c.indexA[1]);
            f = this.m_proxyB.GetVertex(c.indexB[0]);
            x = this.m_proxyB.GetVertex(c.indexB[1]);
            h.MulX(e, w);
            w = h.MulMV(e.R, h.SubtractVV(b, p));
            h.MulX(q, D);
            c = h.MulMV(q.R, h.SubtractVV(x, f));
            q = w.x * w.x + w.y * w.y;
            D = c.x * c.x + c.y * c.y;
            var H = h.SubtractVV(c, w);
            e = w.x * H.x + w.y * H.y;
            H = c.x * H.x + c.y * H.y;
            w = w.x * c.x + w.y * c.y;
            var m = q * D - w * w;
            c = 0;
            0 != m && (c = h.Clamp((w * H - e * D) / m, 0, 1));
            0 > (w * c + H) / D && (c = h.Clamp((w - e) / q, 0, 1));
            w = new a;
            w.x = p.x + c * (b.x - p.x);
            w.y = p.y + c * (b.y - p.y);
            D = new a;
            D.x = f.x + c * (x.x - f.x);
            D.y = f.y + c * (x.y - f.y);
            0 == c || 1 == c ? (this.m_type = g.e_faceB, this.m_axis = h.CrossVF(h.SubtractVV(x, f), 1), this.m_axis.Normalize(), this.m_localPoint = D) : (this.m_type = g.e_faceA, this.m_axis = h.CrossVF(h.SubtractVV(b, p), 1), this.m_localPoint = w);
            0 > c && this.m_axis.NegativeSelf()
        }
    };
    g.prototype.Evaluate = function(c, a) {
        var p;
        switch (this.m_type) {
            case g.e_points:
                var e = h.MulTMV(c.R, this.m_axis);
                var b = h.MulTMV(a.R, this.m_axis.GetNegative());
                e = this.m_proxyA.GetSupportVertex(e);
                b = this.m_proxyB.GetSupportVertex(b);
                e = h.MulX(c, e);
                b = h.MulX(a, b);
                return p = (b.x - e.x) * this.m_axis.x + (b.y - e.y) * this.m_axis.y;
            case g.e_faceA:
                return p = h.MulMV(c.R, this.m_axis),
                    e = h.MulX(c, this.m_localPoint),
                    b = h.MulTMV(a.R, p.GetNegative()),
                    b = this.m_proxyB.GetSupportVertex(b),
                    b = h.MulX(a, b),
                    p = (b.x - e.x) * p.x + (b.y - e.y) * p.y;
            case g.e_faceB:
                return p = h.MulMV(a.R, this.m_axis),
                    b = h.MulX(a, this.m_localPoint),
                    e = h.MulTMV(c.R, p.GetNegative()),
                    e = this.m_proxyA.GetSupportVertex(e),
                    e = h.MulX(c, e),
                    p = (e.x - b.x) * p.x + (e.y - b.y) * p.y;
            default:
                return d.b2Assert(!1),
                    0
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2SeparationFunction.e_points = 1;
        Box2D.Collision.b2SeparationFunction.e_faceA = 2;
        Box2D.Collision.b2SeparationFunction.e_faceB = 4
    });
    q.b2Simplex = function() {
        this.m_v1 = new x;
        this.m_v2 = new x;
        this.m_v3 = new x;
        this.m_vertices = new Vector(3)
    };
    q.prototype.b2Simplex = function() {
        this.m_vertices[0] = this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3
    };
    q.prototype.ReadCache = function(c, a, g, p, e) {
        d.b2Assert(0 <= c.count && 3 >= c.count);
        this.m_count = c.count;
        for (var b = this.m_vertices,
                 w = 0; w < this.m_count; w++) {
            var q = b[w];
            q.indexA = c.indexA[w];
            q.indexB = c.indexB[w];
            var D = a.GetVertex(q.indexA);
            var x = p.GetVertex(q.indexB);
            q.wA = h.MulX(g, D);
            q.wB = h.MulX(e, x);
            q.w = h.SubtractVV(q.wB, q.wA);
            q.a = 0
        }
        1 < this.m_count && (c = c.metric, q = this.GetMetric(), q < .5 * c || 2 * c < q || q < Number.MIN_VALUE) && (this.m_count = 0);
        0 == this.m_count && (q = b[0], q.indexA = 0, q.indexB = 0, D = a.GetVertex(0), x = p.GetVertex(0), q.wA = h.MulX(g, D), q.wB = h.MulX(e, x), q.w = h.SubtractVV(q.wB, q.wA), this.m_count = 1)
    };
    q.prototype.WriteCache = function(c) {
        c.metric = this.GetMetric();
        c.count = Box2D.parseUInt(this.m_count);
        for (var a = this.m_vertices,
                 g = 0; g < this.m_count; g++) c.indexA[g] = Box2D.parseUInt(a[g].indexA),
            c.indexB[g] = Box2D.parseUInt(a[g].indexB)
    };
    q.prototype.GetSearchDirection = function() {
        switch (this.m_count) {
            case 1:
                return this.m_v1.w.GetNegative();
            case 2:
                var c = h.SubtractVV(this.m_v2.w, this.m_v1.w);
                return 0 < h.CrossVV(c, this.m_v1.w.GetNegative()) ? h.CrossFV(1, c) : h.CrossVF(c, 1);
            default:
                return d.b2Assert(!1),
                    new a
        }
    };
    q.prototype.GetClosestPoint = function() {
        switch (this.m_count) {
            case 0:
                return d.b2Assert(!1),
                    new a;
            case 1:
                return this.m_v1.w;
            case 2:
                return new a(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                return d.b2Assert(!1),
                    new a
        }
    };
    q.prototype.GetWitnessPoints = function(c, a) {
        switch (this.m_count) {
            case 0:
                d.b2Assert(!1);
                break;
            case 1:
                c.SetV(this.m_v1.wA);
                a.SetV(this.m_v1.wB);
                break;
            case 2:
                c.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                c.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                a.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                a.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;
            case 3:
                a.x = c.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                a.y = c.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;
            default:
                d.b2Assert(!1)
        }
    };
    q.prototype.GetMetric = function() {
        switch (this.m_count) {
            case 0:
                return d.b2Assert(!1),
                    0;
            case 1:
                return 0;
            case 2:
                return h.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
            case 3:
                return h.CrossVV(h.SubtractVV(this.m_v2.w, this.m_v1.w), h.SubtractVV(this.m_v3.w, this.m_v1.w));
            default:
                return d.b2Assert(!1),
                    0
        }
    };
    q.prototype.Solve2 = function() {
        var c = this.m_v1.w,
            a = this.m_v2.w,
            g = h.SubtractVV(a, c);
        c = -(c.x * g.x + c.y * g.y);
        0 >= c ? this.m_count = this.m_v1.a = 1 : (a = a.x * g.x + a.y * g.y, 0 >= a ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : (g = 1 / (a + c), this.m_v1.a = a * g, this.m_v2.a = c * g, this.m_count = 2))
    };
    q.prototype.Solve3 = function() {
        var c = this.m_v1.w,
            a = this.m_v2.w,
            g = this.m_v3.w,
            p = h.SubtractVV(a, c),
            e = h.Dot(c, p),
            b = h.Dot(a, p);
        e = -e;
        var q = h.SubtractVV(g, c),
            d = h.Dot(c, q),
            D = h.Dot(g, q);
        d = -d;
        var x = h.SubtractVV(g, a),
            f = h.Dot(a, x);
        x = h.Dot(g, x);
        f = -f;
        q = h.CrossVV(p, q);
        p = q * h.CrossVV(a, g);
        g = q * h.CrossVV(g, c);
        c = q * h.CrossVV(c, a);
        0 >= e && 0 >= d ? this.m_count = this.m_v1.a = 1 : 0 < b && 0 < e && 0 >= c ? (D = 1 / (b + e), this.m_v1.a = b * D, this.m_v2.a = e * D, this.m_count = 2) : 0 < D && 0 < d && 0 >= g ? (b = 1 / (D + d), this.m_v1.a = D * b, this.m_v3.a = d * b, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= b && 0 >= f ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= D && 0 >= x ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < x && 0 < f && 0 >= p ? (b = 1 / (x + f), this.m_v2.a = x * b, this.m_v3.a = f * b, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (b = 1 / (p + g + c), this.m_v1.a = p * b, this.m_v2.a = g * b, this.m_v3.a = c * b, this.m_count = 3)
    };
    I.b2SimplexCache = function() {
        this.indexA = new Vector_a2j_Number(3);
        this.indexB = new Vector_a2j_Number(3)
    };
    x.b2SimplexVertex = function() {};
    x.prototype.Set = function(c) {
        this.wA.SetV(c.wA);
        this.wB.SetV(c.wB);
        this.w.SetV(c.w);
        this.a = c.a;
        this.indexA = c.indexA;
        this.indexB = c.indexB
    };
    C.b2TimeOfImpact = function() {};
    C.TimeOfImpact = function(c) {++C.b2_toiCalls;
        var a = c.proxyA,
            g = c.proxyB,
            p = c.sweepA,
            e = c.sweepB;
        d.b2Assert(p.t0 == e.t0);
        d.b2Assert(1 - p.t0 > Number.MIN_VALUE);
        var b = a.m_radius + g.m_radius;
        c = c.tolerance;
        var q = 0,
            D = 0,
            w = 0;
        C.s_cache.count = 0;
        for (C.s_distanceInput.useRadii = !1;;) {
            p.GetTransform(C.s_xfA, q);
            e.GetTransform(C.s_xfB, q);
            C.s_distanceInput.proxyA = a;
            C.s_distanceInput.proxyB = g;
            C.s_distanceInput.transformA = C.s_xfA;
            C.s_distanceInput.transformB = C.s_xfB;
            F.Distance(C.s_distanceOutput, C.s_cache, C.s_distanceInput);
            if (0 >= C.s_distanceOutput.distance) {
                q = 1;
                break
            }
            C.s_fcn.Initialize(C.s_cache, a, C.s_xfA, g, C.s_xfB);
            var x = C.s_fcn.Evaluate(C.s_xfA, C.s_xfB);
            if (0 >= x) {
                q = 1;
                break
            }
            0 == D && (w = x > b ? h.Max(b - c, .75 * b) : h.Max(x - c, .02 * b));
            if (x - w < .5 * c) {
                if (0 == D) {
                    q = 1;
                    break
                }
                break
            }
            var f = q,
                m = q,
                k = 1;
            p.GetTransform(C.s_xfA, k);
            e.GetTransform(C.s_xfB, k);
            var I = C.s_fcn.Evaluate(C.s_xfA, C.s_xfB);
            if (I >= w) {
                q = 1;
                break
            }
            for (var Q = 0;;) {
                var l = Q & 1 ? m + (w - x) * (k - m) / (I - x) : .5 * (m + k);
                p.GetTransform(C.s_xfA, l);
                e.GetTransform(C.s_xfB, l);
                var v = C.s_fcn.Evaluate(C.s_xfA, C.s_xfB);
                if (h.Abs(v - w) < .025 * c) {
                    f = l;
                    break
                }
                v > w ? (m = l, x = v) : (k = l, I = v); ++Q; ++C.b2_toiRootIters;
                if (50 == Q) break
            }
            C.b2_toiMaxRootIters = h.Max(C.b2_toiMaxRootIters, Q);
            if (f < (1 + 100 * Number.MIN_VALUE) * q) break;
            q = f;
            D++; ++C.b2_toiIters;
            if (1E3 == D) break
        }
        C.b2_toiMaxIters = h.Max(C.b2_toiMaxIters, D);
        return q
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.s_cache = new I;
        Box2D.Collision.b2TimeOfImpact.s_distanceInput = new G;
        Box2D.Collision.b2TimeOfImpact.s_xfA = new n;
        Box2D.Collision.b2TimeOfImpact.s_xfB = new n;
        Box2D.Collision.b2TimeOfImpact.s_fcn = new g;
        Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new e
    });
    Q.b2TOIInput = function() {
        this.proxyA = new A;
        this.proxyB = new A;
        this.sweepA = new f;
        this.sweepB = new f
    };
    R.b2WorldManifold = function() {
        this.m_normal = new a
    };
    R.prototype.b2WorldManifold = function() {
        this.m_points = new Vector(d.b2_maxManifoldPoints);
        for (var c = 0; c < d.b2_maxManifoldPoints; c++) this.m_points[c] = new a
    };
    R.prototype.Initialize = function(c, a, g, p, e) {
        void 0 === g && (g = 0);
        void 0 === e && (e = 0);
        if (0 != c.m_pointCount) switch (c.m_type) {
            case z.e_circles:
                var b = a.R;
                var q = c.m_localPoint;
                var d = a.position.x + b.col1.x * q.x + b.col2.x * q.y;
                a = a.position.y + b.col1.y * q.x + b.col2.y * q.y;
                b = p.R;
                q = c.m_points[0].m_localPoint;
                c = p.position.x + b.col1.x * q.x + b.col2.x * q.y;
                p = p.position.y + b.col1.y * q.x + b.col2.y * q.y;
                q = c - d;
                b = p - a;
                var D = q * q + b * b;
                D > Number.MIN_VALUE * Number.MIN_VALUE ? (D = Math.sqrt(D), this.m_normal.x = q / D, this.m_normal.y = b / D) : (this.m_normal.x = 1, this.m_normal.y = 0);
                q = a + g * this.m_normal.y;
                p -= e * this.m_normal.y;
                this.m_points[0].x = .5 * (d + g * this.m_normal.x + (c - e * this.m_normal.x));
                this.m_points[0].y = .5 * (q + p);
                break;
            case z.e_faceA:
                b = a.R;
                q = c.m_localPlaneNormal;
                D = b.col1.x * q.x + b.col2.x * q.y;
                var x = b.col1.y * q.x + b.col2.y * q.y;
                b = a.R;
                q = c.m_localPoint;
                var f = a.position.x + b.col1.x * q.x + b.col2.x * q.y;
                var w = a.position.y + b.col1.y * q.x + b.col2.y * q.y;
                this.m_normal.x = D;
                this.m_normal.y = x;
                for (d = 0; d < c.m_pointCount; d++) {
                    b = p.R;
                    q = c.m_points[d].m_localPoint;
                    var m = p.position.x + b.col1.x * q.x + b.col2.x * q.y;
                    q = p.position.y + b.col1.y * q.x + b.col2.y * q.y;
                    this.m_points[d].x = m + .5 * (g - (m - f) * D - (q - w) * x - e) * D;
                    this.m_points[d].y = q + .5 * (g - (m - f) * D - (q - w) * x - e) * x
                }
                break;
            case z.e_faceB:
                for (b = p.R, q = c.m_localPlaneNormal, D = b.col1.x * q.x + b.col2.x * q.y, x = b.col1.y * q.x + b.col2.y * q.y, b = p.R, q = c.m_localPoint, f = p.position.x + b.col1.x * q.x + b.col2.x * q.y, w = p.position.y + b.col1.y * q.x + b.col2.y * q.y, this.m_normal.x = -D, this.m_normal.y = -x, d = 0; d < c.m_pointCount; d++) b = a.R,
                    q = c.m_points[d].m_localPoint,
                    m = a.position.x + b.col1.x * q.x + b.col2.x * q.y,
                    q = a.position.y + b.col1.y * q.x + b.col2.y * q.y,
                    this.m_points[d].x = m + .5 * (e - (m - f) * D - (q - w) * x - g) * D,
                    this.m_points[d].y = q + .5 * (e - (m - f) * D - (q - w) * x - g) * x
        }
    };
    c.ClipVertex = function() {
        this.v = new a;
        this.id = new t
    };
    c.prototype.Set = function(c) {
        this.v.SetV(c.v);
        this.id.Set(c.id)
    };
    p.Features = function() {};
    Object.defineProperty(p.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._referenceEdge
        }
    });
    Object.defineProperty(p.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(c) {
            void 0 === c && (c = 0);
            this._referenceEdge = c;
            this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
        }
    });
    Object.defineProperty(p.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentEdge
        }
    });
    Object.defineProperty(p.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(c) {
            void 0 === c && (c = 0);
            this._incidentEdge = c;
            this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
        }
    });
    Object.defineProperty(p.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentVertex
        }
    });
    Object.defineProperty(p.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        set: function(c) {
            void 0 === c && (c = 0);
            this._incidentVertex = c;
            this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680
        }
    });
    Object.defineProperty(p.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._flip
        }
    });
    Object.defineProperty(p.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        set: function(c) {
            void 0 === c && (c = 0);
            this._flip = c;
            this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
        }
    })
})(); (function() {
    var b = Box2D.Common.b2Settings,
        l = Box2D.Collision.Shapes.b2CircleShape,
        k = Box2D.Collision.Shapes.b2EdgeChainDef,
        d = Box2D.Collision.Shapes.b2EdgeShape,
        h = Box2D.Collision.Shapes.b2MassData,
        f = Box2D.Collision.Shapes.b2PolygonShape,
        n = Box2D.Collision.Shapes.b2Shape,
        a = Box2D.Common.Math.b2Mat22,
        m = Box2D.Common.Math.b2Math,
        y = Box2D.Common.Math.b2Transform,
        u = Box2D.Common.Math.b2Vec2,
        B = Box2D.Collision.b2Distance,
        t = Box2D.Collision.b2DistanceInput,
        r = Box2D.Collision.b2DistanceOutput,
        F = Box2D.Collision.b2DistanceProxy,
        G = Box2D.Collision.b2SimplexCache;
    Box2D.inherit(l, Box2D.Collision.Shapes.b2Shape);
    l.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    l.b2CircleShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.m_p = new u
    };
    l.prototype.Copy = function() {
        var a = new l;
        a.Set(this);
        return a
    };
    l.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        Box2D.is(a, l) && this.m_p.SetV((a instanceof l ? a: null).m_p)
    };
    l.prototype.TestPoint = function(a, b) {
        var e = a.R,
            d = a.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y);
        e = a.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y);
        d = b.x - d;
        e = b.y - e;
        return d * d + e * e <= this.m_radius * this.m_radius
    };
    l.prototype.RayCast = function(a, b, d) {
        var e = d.R,
            f = b.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
        d = b.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
        e = b.p2.x - b.p1.x;
        var m = b.p2.y - b.p1.y,
            h = f * e + d * m,
            k = e * e + m * m,
            l = h * h - k * (f * f + d * d - this.m_radius * this.m_radius);
        if (0 > l || k < Number.MIN_VALUE) return ! 1;
        h = -(h + Math.sqrt(l));
        return 0 <= h && h <= b.maxFraction * k ? (h /= k, a.fraction = h, a.normal.x = f + h * e, a.normal.y = d + h * m, a.normal.Normalize(), !0) : !1
    };
    l.prototype.ComputeAABB = function(a, b) {
        var e = b.R,
            d = b.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y);
        e = b.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y);
        a.lowerBound.Set(d - this.m_radius, e - this.m_radius);
        a.upperBound.Set(d + this.m_radius, e + this.m_radius)
    };
    l.prototype.ComputeMass = function(a, d) {
        void 0 === d && (d = 0);
        a.mass = d * b.b2_pi * this.m_radius * this.m_radius;
        a.center.SetV(this.m_p);
        a.I = a.mass * (.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
    };
    l.prototype.ComputeSubmergedArea = function(a, b, d, f) {
        void 0 === b && (b = 0);
        d = m.MulX(d, this.m_p);
        var e = -(m.Dot(a, d) - b);
        if (e < -this.m_radius + Number.MIN_VALUE) return 0;
        if (e > this.m_radius) return f.SetV(d),
        Math.PI * this.m_radius * this.m_radius;
        b = this.m_radius * this.m_radius;
        var h = e * e;
        e = b * (Math.asin(e / this.m_radius) + Math.PI / 2) + e * Math.sqrt(b - h);
        b = -2 / 3 * Math.pow(b - h, 1.5) / e;
        f.x = d.x + a.x * b;
        f.y = d.y + a.y * b;
        return e
    };
    l.prototype.GetLocalPosition = function() {
        return this.m_p
    };
    l.prototype.SetLocalPosition = function(a) {
        this.m_p.SetV(a)
    };
    l.prototype.GetRadius = function() {
        return this.m_radius
    };
    l.prototype.SetRadius = function(a) {
        void 0 === a && (a = 0);
        this.m_radius = a
    };
    l.prototype.b2CircleShape = function(a) {
        void 0 === a && (a = 0);
        this.__super.b2Shape.call(this);
        this.m_type = n.e_circleShape;
        this.m_radius = a
    };
    k.b2EdgeChainDef = function() {};
    k.prototype.b2EdgeChainDef = function() {
        this.vertexCount = 0;
        this.isALoop = !0;
        this.vertices = []
    };
    Box2D.inherit(d, Box2D.Collision.Shapes.b2Shape);
    d.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    d.b2EdgeShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.s_supportVec = new u;
        this.m_v1 = new u;
        this.m_v2 = new u;
        this.m_coreV1 = new u;
        this.m_coreV2 = new u;
        this.m_normal = new u;
        this.m_direction = new u;
        this.m_cornerDir1 = new u;
        this.m_cornerDir2 = new u
    };
    d.prototype.TestPoint = function(a, b) {
        return ! 1
    };
    d.prototype.RayCast = function(a, b, d) {
        var e = b.p2.x - b.p1.x,
            f = b.p2.y - b.p1.y;
        var m = d.R;
        var h = d.position.x + (m.col1.x * this.m_v1.x + m.col2.x * this.m_v1.y),
            k = d.position.y + (m.col1.y * this.m_v1.x + m.col2.y * this.m_v1.y),
            l = d.position.y + (m.col1.y * this.m_v2.x + m.col2.y * this.m_v2.y) - k;
        d = -(d.position.x + (m.col1.x * this.m_v2.x + m.col2.x * this.m_v2.y) - h);
        m = 100 * Number.MIN_VALUE;
        var v = -(e * l + f * d);
        if (v > m) {
            h = b.p1.x - h;
            var A = b.p1.y - k;
            k = h * l + A * d;
            if (0 <= k && k <= b.maxFraction * v && (b = -e * A + f * h, -m * v <= b && b <= v * (1 + m))) return a.fraction = k / v,
                b = Math.sqrt(l * l + d * d),
                a.normal.x = l / b,
                a.normal.y = d / b,
                !0
        }
        return ! 1
    };
    d.prototype.ComputeAABB = function(a, b) {
        var e = b.R,
            d = b.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
            f = b.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
            m = b.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y);
        e = b.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y);
        d < m ? (a.lowerBound.x = d, a.upperBound.x = m) : (a.lowerBound.x = m, a.upperBound.x = d);
        f < e ? (a.lowerBound.y = f, a.upperBound.y = e) : (a.lowerBound.y = e, a.upperBound.y = f)
    };
    d.prototype.ComputeMass = function(a, b) {
        a.mass = 0;
        a.center.SetV(this.m_v1);
        a.I = 0
    };
    d.prototype.ComputeSubmergedArea = function(a, b, d, f) {
        void 0 === b && (b = 0);
        var e = new u(a.x * b, a.y * b),
            h = m.MulX(d, this.m_v1);
        d = m.MulX(d, this.m_v2);
        var k = m.Dot(a, h) - b;
        a = m.Dot(a, d) - b;
        if (0 < k) {
            if (0 < a) return 0;
            h.x = -a / (k - a) * h.x + k / (k - a) * d.x;
            h.y = -a / (k - a) * h.y + k / (k - a) * d.y
        } else 0 < a && (d.x = -a / (k - a) * h.x + k / (k - a) * d.x, d.y = -a / (k - a) * h.y + k / (k - a) * d.y);
        f.x = (e.x + h.x + d.x) / 3;
        f.y = (e.y + h.y + d.y) / 3;
        return.5 * ((h.x - e.x) * (d.y - e.y) - (h.y - e.y) * (d.x - e.x))
    };
    d.prototype.GetLength = function() {
        return this.m_length
    };
    d.prototype.GetVertex1 = function() {
        return this.m_v1
    };
    d.prototype.GetVertex2 = function() {
        return this.m_v2
    };
    d.prototype.GetCoreVertex1 = function() {
        return this.m_coreV1
    };
    d.prototype.GetCoreVertex2 = function() {
        return this.m_coreV2
    };
    d.prototype.GetNormalVector = function() {
        return this.m_normal
    };
    d.prototype.GetDirectionVector = function() {
        return this.m_direction
    };
    d.prototype.GetCorner1Vector = function() {
        return this.m_cornerDir1
    };
    d.prototype.GetCorner2Vector = function() {
        return this.m_cornerDir2
    };
    d.prototype.Corner1IsConvex = function() {
        return this.m_cornerConvex1
    };
    d.prototype.Corner2IsConvex = function() {
        return this.m_cornerConvex2
    };
    d.prototype.GetFirstVertex = function(a) {
        var b = a.R;
        return new u(a.position.x + (b.col1.x * this.m_coreV1.x + b.col2.x * this.m_coreV1.y), a.position.y + (b.col1.y * this.m_coreV1.x + b.col2.y * this.m_coreV1.y))
    };
    d.prototype.GetNextEdge = function() {
        return this.m_nextEdge
    };
    d.prototype.GetPrevEdge = function() {
        return this.m_prevEdge
    };
    d.prototype.Support = function(a, b, d) {
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        var e = a.R,
            f = a.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
            m = a.position.y + (e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
            h = a.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
        a = a.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
        f * b + m * d > h * b + a * d ? (this.s_supportVec.x = f, this.s_supportVec.y = m) : (this.s_supportVec.x = h, this.s_supportVec.y = a);
        return this.s_supportVec
    };
    d.prototype.b2EdgeShape = function(a, d) {
        this.__super.b2Shape.call(this);
        this.m_type = n.e_edgeShape;
        this.m_nextEdge = this.m_prevEdge = null;
        this.m_v1 = a;
        this.m_v2 = d;
        this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
        this.m_length = this.m_direction.Normalize();
        this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
        this.m_coreV1.Set( - b.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -b.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
        this.m_coreV2.Set( - b.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -b.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
        this.m_cornerDir1 = this.m_normal;
        this.m_cornerDir2.Set( - this.m_normal.x, -this.m_normal.y)
    };
    d.prototype.SetPrevEdge = function(a, b, d, f) {
        this.m_prevEdge = a;
        this.m_coreV1 = b;
        this.m_cornerDir1 = d;
        this.m_cornerConvex1 = f
    };
    d.prototype.SetNextEdge = function(a, b, d, f) {
        this.m_nextEdge = a;
        this.m_coreV2 = b;
        this.m_cornerDir2 = d;
        this.m_cornerConvex2 = f
    };
    h.b2MassData = function() {
        this.mass = 0;
        this.center = new u(0, 0);
        this.I = 0
    };
    Box2D.inherit(f, Box2D.Collision.Shapes.b2Shape);
    f.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    f.b2PolygonShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
    };
    f.prototype.Copy = function() {
        var a = new f;
        a.Set(this);
        return a
    };
    f.prototype.Set = function(a) {
        this.__super.Set.call(this, a);
        if (Box2D.is(a, f)) {
            a = a instanceof f ? a: null;
            this.m_centroid.SetV(a.m_centroid);
            this.m_vertexCount = a.m_vertexCount;
            this.Reserve(this.m_vertexCount);
            for (var b = 0; b < this.m_vertexCount; b++) this.m_vertices[b].SetV(a.m_vertices[b]),
                this.m_normals[b].SetV(a.m_normals[b])
        }
    };
    f.prototype.SetAsArray = function(a, b) {
        void 0 === b && (b = 0);
        var e = new Vector,
            d;
        for (d = 0; d < a.length; ++d) {
            var f = a[d];
            e.push(f)
        }
        this.SetAsVector(e, b)
    };
    f.AsArray = function(a, b) {
        void 0 === b && (b = 0);
        var e = new f;
        e.SetAsArray(a, b);
        return e
    };
    f.prototype.SetAsVector = function(a, d) {
        void 0 === d && (d = 0);
        0 == d && (d = a.length);
        b.b2Assert(2 <= d);
        this.m_vertexCount = d;
        this.Reserve(d);
        var e;
        for (e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(a[e]);
        for (e = 0; e < this.m_vertexCount; ++e) {
            var h = parseInt(e),
                k = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0);
            h = m.SubtractVV(this.m_vertices[k], this.m_vertices[h]);
            b.b2Assert(h.LengthSquared() > Number.MIN_VALUE);
            this.m_normals[e].SetV(m.CrossVF(h, 1));
            this.m_normals[e].Normalize()
        }
        this.m_centroid = f.ComputeCentroid(this.m_vertices, this.m_vertexCount)
    };
    f.AsVector = function(a, b) {
        void 0 === b && (b = 0);
        var e = new f;
        e.SetAsVector(a, b);
        return e
    };
    f.prototype.SetAsBox = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set( - a, -b);
        this.m_vertices[1].Set(a, -b);
        this.m_vertices[2].Set(a, b);
        this.m_vertices[3].Set( - a, b);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set( - 1, 0);
        this.m_centroid.SetZero()
    };
    f.AsBox = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        var e = new f;
        e.SetAsBox(a, b);
        return e
    };
    f.prototype.SetAsOrientedBox = function(a, b, d, f) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === d && (d = null);
        void 0 === f && (f = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set( - a, -b);
        this.m_vertices[1].Set(a, -b);
        this.m_vertices[2].Set(a, b);
        this.m_vertices[3].Set( - a, b);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set( - 1, 0);
        this.m_centroid = d;
        a = new y;
        a.position = d;
        a.R.Set(f);
        for (d = 0; d < this.m_vertexCount; ++d) this.m_vertices[d] = m.MulX(a, this.m_vertices[d]),
            this.m_normals[d] = m.MulMV(a.R, this.m_normals[d])
    };
    f.AsOrientedBox = function(a, b, d, m) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === d && (d = null);
        void 0 === m && (m = 0);
        var e = new f;
        e.SetAsOrientedBox(a, b, d, m);
        return e
    };
    f.prototype.SetAsEdge = function(a, b) {
        this.m_vertexCount = 2;
        this.Reserve(2);
        this.m_vertices[0].SetV(a);
        this.m_vertices[1].SetV(b);
        this.m_centroid.x = .5 * (a.x + b.x);
        this.m_centroid.y = .5 * (a.y + b.y);
        this.m_normals[0] = m.CrossVF(m.SubtractVV(b, a), 1);
        this.m_normals[0].Normalize();
        this.m_normals[1].x = -this.m_normals[0].x;
        this.m_normals[1].y = -this.m_normals[0].y
    };
    f.AsEdge = function(a, b) {
        var e = new f;
        e.SetAsEdge(a, b);
        return e
    };
    f.prototype.TestPoint = function(a, b) {
        var e = a.R;
        for (var d = b.x - a.position.x,
                 f = b.y - a.position.y,
                 m = d * e.col1.x + f * e.col1.y,
                 h = d * e.col2.x + f * e.col2.y,
                 k = 0; k < this.m_vertexCount; ++k) if (e = this.m_vertices[k], d = m - e.x, f = h - e.y, e = this.m_normals[k], 0 < e.x * d + e.y * f) return ! 1;
        return ! 0
    };
    f.prototype.RayCast = function(a, b, d) {
        var e = 0,
            f = b.maxFraction;
        var m = b.p1.x - d.position.x;
        var h = b.p1.y - d.position.y;
        var k = d.R;
        var l = m * k.col1.x + h * k.col1.y,
            n = m * k.col2.x + h * k.col2.y;
        m = b.p2.x - d.position.x;
        h = b.p2.y - d.position.y;
        k = d.R;
        b = m * k.col1.x + h * k.col1.y - l;
        k = m * k.col2.x + h * k.col2.y - n;
        for (var r = -1,
                 t = 0; t < this.m_vertexCount; ++t) {
            var g = this.m_vertices[t];
            m = g.x - l;
            h = g.y - n;
            g = this.m_normals[t];
            m = g.x * m + g.y * h;
            h = g.x * b + g.y * k;
            if (0 == h) {
                if (0 > m) return ! 1
            } else 0 > h && m < e * h ? (e = m / h, r = t) : 0 < h && m < f * h && (f = m / h);
            if (f < e - Number.MIN_VALUE) return ! 1
        }
        return 0 <= r ? (a.fraction = e, k = d.R, g = this.m_normals[r], a.normal.x = k.col1.x * g.x + k.col2.x * g.y, a.normal.y = k.col1.y * g.x + k.col2.y * g.y, !0) : !1
    };
    f.prototype.ComputeAABB = function(a, b) {
        for (var e = b.R,
                 d = this.m_vertices[0], f = b.position.x + (e.col1.x * d.x + e.col2.x * d.y), m = b.position.y + (e.col1.y * d.x + e.col2.y * d.y), h = f, k = m, l = 1; l < this.m_vertexCount; ++l) {
            d = this.m_vertices[l];
            var n = b.position.x + (e.col1.x * d.x + e.col2.x * d.y);
            d = b.position.y + (e.col1.y * d.x + e.col2.y * d.y);
            f = f < n ? f: n;
            m = m < d ? m: d;
            h = h > n ? h: n;
            k = k > d ? k: d
        }
        a.lowerBound.x = f - this.m_radius;
        a.lowerBound.y = m - this.m_radius;
        a.upperBound.x = h + this.m_radius;
        a.upperBound.y = k + this.m_radius
    };
    f.prototype.ComputeMass = function(a, b) {
        void 0 === b && (b = 0);
        if (2 == this.m_vertexCount) a.center.x = .5 * (this.m_vertices[0].x + this.m_vertices[1].x),
            a.center.y = .5 * (this.m_vertices[0].y + this.m_vertices[1].y),
            a.mass = 0,
            a.I = 0;
        else {
            for (var e = 0,
                     d = 0,
                     f = 0,
                     m = 0,
                     h = 1 / 3,
                     k = 0; k < this.m_vertexCount; ++k) {
                var l = this.m_vertices[k],
                    n = k + 1 < this.m_vertexCount ? this.m_vertices[parseInt(k + 1)] : this.m_vertices[0],
                    r = l.x - 0,
                    t = l.y - 0,
                    g = n.x - 0,
                    q = n.y - 0,
                    I = r * q - t * g,
                    x = .5 * I;
                f += x;
                e += x * h * (0 + l.x + n.x);
                d += x * h * (0 + l.y + n.y);
                l = r;
                m += I * (h * (.25 * (l * l + g * l + g * g) + (0 * l + 0 * g)) + 0 + (h * (.25 * (t * t + q * t + q * q) + (0 * t + 0 * q)) + 0))
            }
            a.mass = b * f;
            a.center.Set(1 / f * e, 1 / f * d);
            a.I = b * m
        }
    };
    f.prototype.ComputeSubmergedArea = function(a, b, d, f) {
        void 0 === b && (b = 0);
        var e = m.MulTMV(d.R, a),
            k = b - m.Dot(a, d.position),
            l = new Vector_a2j_Number,
            n = 0,
            r = -1;
        b = -1;
        var t = !1;
        for (a = 0; a < this.m_vertexCount; ++a) {
            l[a] = m.Dot(e, this.m_vertices[a]) - k;
            var v = l[a] < -Number.MIN_VALUE;
            0 < a && (v ? t || (r = a - 1, n++) : t && (b = a - 1, n++));
            t = v
        }
        switch (n) {
            case 0:
                return t ? (a = new h, this.ComputeMass(a, 1), f.SetV(m.MulX(d, a.center)), a.mass) : 0;
            case 1:
                -1 == r ? r = this.m_vertexCount - 1 : b = this.m_vertexCount - 1
        }
        a = parseInt((r + 1) % this.m_vertexCount);
        e = parseInt((b + 1) % this.m_vertexCount);
        k = (0 - l[r]) / (l[a] - l[r]);
        l = (0 - l[b]) / (l[e] - l[b]);
        r = new u(this.m_vertices[r].x * (1 - k) + this.m_vertices[a].x * k, this.m_vertices[r].y * (1 - k) + this.m_vertices[a].y * k);
        b = new u(this.m_vertices[b].x * (1 - l) + this.m_vertices[e].x * l, this.m_vertices[b].y * (1 - l) + this.m_vertices[e].y * l);
        l = 0;
        k = new u;
        for (n = this.m_vertices[a]; a != e;) a = (a + 1) % this.m_vertexCount,
            t = a == e ? b: this.m_vertices[a],
            v = .5 * ((n.x - r.x) * (t.y - r.y) - (n.y - r.y) * (t.x - r.x)),
            l += v,
            k.x += v * (r.x + n.x + t.x) / 3,
            k.y += v * (r.y + n.y + t.y) / 3,
            n = t;
        k.Multiply(1 / l);
        f.SetV(m.MulX(d, k));
        return l
    };
    f.prototype.GetVertexCount = function() {
        return this.m_vertexCount
    };
    f.prototype.GetVertices = function() {
        return this.m_vertices
    };
    f.prototype.GetNormals = function() {
        return this.m_normals
    };
    f.prototype.GetSupport = function(a) {
        for (var b = 0,
                 e = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, d = 1; d < this.m_vertexCount; ++d) {
            var f = this.m_vertices[d].x * a.x + this.m_vertices[d].y * a.y;
            f > e && (b = d, e = f)
        }
        return b
    };
    f.prototype.GetSupportVertex = function(a) {
        for (var b = 0,
                 e = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, d = 1; d < this.m_vertexCount; ++d) {
            var f = this.m_vertices[d].x * a.x + this.m_vertices[d].y * a.y;
            f > e && (b = d, e = f)
        }
        return this.m_vertices[b]
    };
    f.prototype.Validate = function() {
        return ! 1
    };
    f.prototype.b2PolygonShape = function() {
        this.__super.b2Shape.call(this);
        this.m_type = n.e_polygonShape;
        this.m_centroid = new u;
        this.m_vertices = new Vector;
        this.m_normals = new Vector
    };
    f.prototype.Reserve = function(a) {
        void 0 === a && (a = 0);
        for (var b = parseInt(this.m_vertices.length); b < a; b++) this.m_vertices[b] = new u,
            this.m_normals[b] = new u
    };
    f.ComputeCentroid = function(a, b) {
        void 0 === b && (b = 0);
        for (var e = new u,
                 d = 0,
                 f = 1 / 3,
                 m = 0; m < b; ++m) {
            var h = a[m],
                k = m + 1 < b ? a[parseInt(m + 1)] : a[0],
                l = .5 * ((h.x - 0) * (k.y - 0) - (h.y - 0) * (k.x - 0));
            d += l;
            e.x += l * f * (0 + h.x + k.x);
            e.y += l * f * (0 + h.y + k.y)
        }
        e.x *= 1 / d;
        e.y *= 1 / d;
        return e
    };
    f.ComputeOBB = function(a, b, d) {
        void 0 === d && (d = 0);
        var e, f = new Vector(d + 1);
        for (e = 0; e < d; ++e) f[e] = b[e];
        f[d] = f[0];
        b = Number.MAX_VALUE;
        for (e = 1; e <= d; ++e) {
            var m = f[parseInt(e - 1)],
                h = f[e].x - m.x,
                k = f[e].y - m.y,
                l = Math.sqrt(h * h + k * k);
            h /= l;
            k /= l;
            for (var n = -k,
                     r = h,
                     t = l = Number.MAX_VALUE,
                     g = -Number.MAX_VALUE,
                     q = -Number.MAX_VALUE,
                     I = 0; I < d; ++I) {
                var x = f[I].x - m.x,
                    C = f[I].y - m.y,
                    Q = h * x + k * C;
                x = n * x + r * C;
                Q < l && (l = Q);
                x < t && (t = x);
                Q > g && (g = Q);
                x > q && (q = x)
            }
            I = (g - l) * (q - t);
            I < .95 * b && (b = I, a.R.col1.x = h, a.R.col1.y = k, a.R.col2.x = n, a.R.col2.y = r, h = .5 * (l + g), k = .5 * (t + q), n = a.R, a.center.x = m.x + (n.col1.x * h + n.col2.x * k), a.center.y = m.y + (n.col1.y * h + n.col2.y * k), a.extents.x = .5 * (g - l), a.extents.y = .5 * (q - t))
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new a
    });
    n.b2Shape = function() {};
    n.prototype.Copy = function() {
        return null
    };
    n.prototype.Set = function(a) {
        this.m_radius = a.m_radius
    };
    n.prototype.GetType = function() {
        return this.m_type
    };
    n.prototype.TestPoint = function(a, b) {
        return ! 1
    };
    n.prototype.RayCast = function(a, b, d) {
        return ! 1
    };
    n.prototype.ComputeAABB = function(a, b) {};
    n.prototype.ComputeMass = function(a, b) {};
    n.prototype.ComputeSubmergedArea = function(a, b, d, f) {
        return 0
    };
    n.TestOverlap = function(a, b, d, f) {
        var e = new t;
        e.proxyA = new F;
        e.proxyA.Set(a);
        e.proxyB = new F;
        e.proxyB.Set(d);
        e.transformA = b;
        e.transformB = f;
        e.useRadii = !0;
        a = new G;
        a.count = 0;
        b = new r;
        B.Distance(b, a, e);
        return b.distance < 10 * Number.MIN_VALUE
    };
    n.prototype.b2Shape = function() {
        this.m_type = n.e_unknownShape;
        this.m_radius = b.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
        Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
        Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
        Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
        Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
        Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
        Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
        Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
    })
})(); (function() {
    var b = Box2D.Common.b2Color,
        l = Box2D.Common.b2Settings,
        k = Box2D.Common.Math.b2Math;
    b.b2Color = function() {
        this._b = this._g = this._r = 0
    };
    b.prototype.b2Color = function(b, h, f) {
        void 0 === b && (b = 0);
        void 0 === h && (h = 0);
        void 0 === f && (f = 0);
        this._r = Box2D.parseUInt(255 * k.Clamp(b, 0, 1));
        this._g = Box2D.parseUInt(255 * k.Clamp(h, 0, 1));
        this._b = Box2D.parseUInt(255 * k.Clamp(f, 0, 1))
    };
    b.prototype.Set = function(b, h, f) {
        void 0 === b && (b = 0);
        void 0 === h && (h = 0);
        void 0 === f && (f = 0);
        this._r = Box2D.parseUInt(255 * k.Clamp(b, 0, 1));
        this._g = Box2D.parseUInt(255 * k.Clamp(h, 0, 1));
        this._b = Box2D.parseUInt(255 * k.Clamp(f, 0, 1))
    };
    Object.defineProperty(b.prototype, "r", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._r = Box2D.parseUInt(255 * k.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "g", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._g = Box2D.parseUInt(255 * k.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "b", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._b = Box2D.parseUInt(255 * k.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "color", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._r << 16 | this._g << 8 | this._b
        }
    });
    l.b2Settings = function() {};
    l.b2MixFriction = function(b, h) {
        void 0 === b && (b = 0);
        void 0 === h && (h = 0);
        return Math.sqrt(b * h)
    };
    l.b2MixRestitution = function(b, h) {
        void 0 === b && (b = 0);
        void 0 === h && (h = 0);
        return b > h ? b: h
    };
    l.b2Assert = function(b) {
        if (!b) throw "Assertion Failed";
    };
    Box2D.postDefs.push(function() {
        Box2D.Common.b2Settings.VERSION = "2.1alpha";
        Box2D.Common.b2Settings.USHRT_MAX = 65535;
        Box2D.Common.b2Settings.b2_pi = Math.PI;
        Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
        Box2D.Common.b2Settings.b2_aabbExtension = .1;
        Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
        Box2D.Common.b2Settings.b2_polygonRadius = 2 * l.b2_linearSlop;
        Box2D.Common.b2Settings.b2_linearSlop = .005;
        Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * l.b2_pi;
        Box2D.Common.b2Settings.b2_toiSlop = 8 * l.b2_linearSlop;
        Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
        Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
        Box2D.Common.b2Settings.b2_velocityThreshold = 1;
        Box2D.Common.b2Settings.b2_maxLinearCorrection = .2;
        Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * l.b2_pi;
        Box2D.Common.b2Settings.b2_maxTranslation = 2;
        Box2D.Common.b2Settings.b2_maxTranslationSquared = l.b2_maxTranslation * l.b2_maxTranslation;
        Box2D.Common.b2Settings.b2_maxRotation = .5 * l.b2_pi;
        Box2D.Common.b2Settings.b2_maxRotationSquared = l.b2_maxRotation * l.b2_maxRotation;
        Box2D.Common.b2Settings.b2_contactBaumgarte = .2;
        Box2D.Common.b2Settings.b2_timeToSleep = .5;
        Box2D.Common.b2Settings.b2_linearSleepTolerance = .01;
        Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * l.b2_pi
    })
})(); (function() {
    var b = Box2D.Common.Math.b2Mat22,
        l = Box2D.Common.Math.b2Mat33,
        k = Box2D.Common.Math.b2Math,
        d = Box2D.Common.Math.b2Sweep,
        h = Box2D.Common.Math.b2Transform,
        f = Box2D.Common.Math.b2Vec2,
        n = Box2D.Common.Math.b2Vec3;
    b.b2Mat22 = function() {
        this.col1 = new f;
        this.col2 = new f
    };
    b.prototype.b2Mat22 = function() {
        this.SetIdentity()
    };
    b.FromAngle = function(a) {
        void 0 === a && (a = 0);
        var d = new b;
        d.Set(a);
        return d
    };
    b.FromVV = function(a, d) {
        var f = new b;
        f.SetVV(a, d);
        return f
    };
    b.prototype.Set = function(a) {
        void 0 === a && (a = 0);
        var b = Math.cos(a);
        a = Math.sin(a);
        this.col1.x = b;
        this.col2.x = -a;
        this.col1.y = a;
        this.col2.y = b
    };
    b.prototype.SetVV = function(a, b) {
        this.col1.SetV(a);
        this.col2.SetV(b)
    };
    b.prototype.Copy = function() {
        var a = new b;
        a.SetM(this);
        return a
    };
    b.prototype.SetM = function(a) {
        this.col1.SetV(a.col1);
        this.col2.SetV(a.col2)
    };
    b.prototype.AddM = function(a) {
        this.col1.x += a.col1.x;
        this.col1.y += a.col1.y;
        this.col2.x += a.col2.x;
        this.col2.y += a.col2.y
    };
    b.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 1
    };
    b.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 0
    };
    b.prototype.GetAngle = function() {
        return Math.atan2(this.col1.y, this.col1.x)
    };
    b.prototype.GetInverse = function(a) {
        var b = this.col1.x,
            d = this.col2.x,
            f = this.col1.y,
            h = this.col2.y,
            k = b * h - d * f;
        0 != k && (k = 1 / k);
        a.col1.x = k * h;
        a.col2.x = -k * d;
        a.col1.y = -k * f;
        a.col2.y = k * b;
        return a
    };
    b.prototype.Solve = function(a, b, d) {
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        var f = this.col1.x,
            h = this.col2.x,
            m = this.col1.y,
            k = this.col2.y,
            l = f * k - h * m;
        0 != l && (l = 1 / l);
        a.x = l * (k * b - h * d);
        a.y = l * (f * d - m * b);
        return a
    };
    b.prototype.Abs = function() {
        this.col1.Abs();
        this.col2.Abs()
    };
    l.b2Mat33 = function() {
        this.col1 = new n;
        this.col2 = new n;
        this.col3 = new n
    };
    l.prototype.b2Mat33 = function(a, b, d) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        void 0 === d && (d = null);
        a || b || d ? (this.col1.SetV(a), this.col2.SetV(b), this.col3.SetV(d)) : (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero())
    };
    l.prototype.SetVVV = function(a, b, d) {
        this.col1.SetV(a);
        this.col2.SetV(b);
        this.col3.SetV(d)
    };
    l.prototype.Copy = function() {
        return new l(this.col1, this.col2, this.col3)
    };
    l.prototype.SetM = function(a) {
        this.col1.SetV(a.col1);
        this.col2.SetV(a.col2);
        this.col3.SetV(a.col3)
    };
    l.prototype.AddM = function(a) {
        this.col1.x += a.col1.x;
        this.col1.y += a.col1.y;
        this.col1.z += a.col1.z;
        this.col2.x += a.col2.x;
        this.col2.y += a.col2.y;
        this.col2.z += a.col2.z;
        this.col3.x += a.col3.x;
        this.col3.y += a.col3.y;
        this.col3.z += a.col3.z
    };
    l.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 1;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 1
    };
    l.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 0;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 0
    };
    l.prototype.Solve22 = function(a, b, d) {
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        var f = this.col1.x,
            h = this.col2.x,
            m = this.col1.y,
            k = this.col2.y,
            l = f * k - h * m;
        0 != l && (l = 1 / l);
        a.x = l * (k * b - h * d);
        a.y = l * (f * d - m * b);
        return a
    };
    l.prototype.Solve33 = function(a, b, d, f) {
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        void 0 === f && (f = 0);
        var h = this.col1.x,
            m = this.col1.y,
            k = this.col1.z,
            l = this.col2.x,
            n = this.col2.y,
            e = this.col2.z,
            y = this.col3.x,
            v = this.col3.y,
            u = this.col3.z,
            E = h * (n * u - e * v) + m * (e * y - l * u) + k * (l * v - n * y);
        0 != E && (E = 1 / E);
        a.x = E * (b * (n * u - e * v) + d * (e * y - l * u) + f * (l * v - n * y));
        a.y = E * (h * (d * u - f * v) + m * (f * y - b * u) + k * (b * v - d * y));
        a.z = E * (h * (n * f - e * d) + m * (e * b - l * f) + k * (l * d - n * b));
        return a
    };
    k.b2Math = function() {};
    k.IsValid = function(a) {
        void 0 === a && (a = 0);
        return isFinite(a)
    };
    k.Dot = function(a, b) {
        return a.x * b.x + a.y * b.y
    };
    k.CrossVV = function(a, b) {
        return a.x * b.y - a.y * b.x
    };
    k.CrossVF = function(a, b) {
        void 0 === b && (b = 0);
        return new f(b * a.y, -b * a.x)
    };
    k.CrossFV = function(a, b) {
        void 0 === a && (a = 0);
        return new f( - a * b.y, a * b.x)
    };
    k.MulMV = function(a, b) {
        return new f(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y)
    };
    k.MulTMV = function(a, b) {
        return new f(k.Dot(b, a.col1), k.Dot(b, a.col2))
    };
    k.MulX = function(a, b) {
        var d = k.MulMV(a.R, b);
        d.x += a.position.x;
        d.y += a.position.y;
        return d
    };
    k.MulXT = function(a, b) {
        var d = k.SubtractVV(b, a.position),
            f = d.x * a.R.col1.x + d.y * a.R.col1.y;
        d.y = d.x * a.R.col2.x + d.y * a.R.col2.y;
        d.x = f;
        return d
    };
    k.AddVV = function(a, b) {
        return new f(a.x + b.x, a.y + b.y)
    };
    k.SubtractVV = function(a, b) {
        return new f(a.x - b.x, a.y - b.y)
    };
    k.Distance = function(a, b) {
        var d = a.x - b.x,
            f = a.y - b.y;
        return Math.sqrt(d * d + f * f)
    };
    k.DistanceSquared = function(a, b) {
        var d = a.x - b.x,
            f = a.y - b.y;
        return d * d + f * f
    };
    k.MulFV = function(a, b) {
        void 0 === a && (a = 0);
        return new f(a * b.x, a * b.y)
    };
    k.AddMM = function(a, d) {
        return b.FromVV(k.AddVV(a.col1, d.col1), k.AddVV(a.col2, d.col2))
    };
    k.MulMM = function(a, d) {
        return b.FromVV(k.MulMV(a, d.col1), k.MulMV(a, d.col2))
    };
    k.MulTMM = function(a, d) {
        var h = new f(k.Dot(a.col1, d.col1), k.Dot(a.col2, d.col1)),
            m = new f(k.Dot(a.col1, d.col2), k.Dot(a.col2, d.col2));
        return b.FromVV(h, m)
    };
    k.Abs = function(a) {
        void 0 === a && (a = 0);
        return 0 < a ? a: -a
    };
    k.AbsV = function(a) {
        return new f(k.Abs(a.x), k.Abs(a.y))
    };
    k.AbsM = function(a) {
        return b.FromVV(k.AbsV(a.col1), k.AbsV(a.col2))
    };
    k.Min = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return a < b ? a: b
    };
    k.MinV = function(a, b) {
        return new f(k.Min(a.x, b.x), k.Min(a.y, b.y))
    };
    k.Max = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return a > b ? a: b
    };
    k.MaxV = function(a, b) {
        return new f(k.Max(a.x, b.x), k.Max(a.y, b.y))
    };
    k.Clamp = function(a, b, d) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        return a < b ? b: a > d ? d: a
    };
    k.ClampV = function(a, b, d) {
        return k.MaxV(b, k.MinV(a, d))
    };
    k.Swap = function(a, b) {
        var d = a[0];
        a[0] = b[0];
        b[0] = d
    };
    k.Random = function() {
        return 2 * Math.random() - 1
    };
    k.RandomRange = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return (b - a) * Math.random() + a
    };
    k.NextPowerOfTwo = function(a) {
        void 0 === a && (a = 0);
        a |= a >> 1 & 2147483647;
        a |= a >> 2 & 1073741823;
        a |= a >> 4 & 268435455;
        a |= a >> 8 & 16777215;
        return (a | a >> 16 & 65535) + 1
    };
    k.IsPowerOfTwo = function(a) {
        void 0 === a && (a = 0);
        return 0 < a && 0 == (a & a - 1)
    };
    Box2D.postDefs.push(function() {
        Box2D.Common.Math.b2Math.b2Vec2_zero = new f(0, 0);
        Box2D.Common.Math.b2Math.b2Mat22_identity = b.FromVV(new f(1, 0), new f(0, 1));
        Box2D.Common.Math.b2Math.b2Transform_identity = new h(k.b2Vec2_zero, k.b2Mat22_identity)
    });
    d.b2Sweep = function() {
        this.localCenter = new f;
        this.c0 = new f;
        this.c = new f
    };
    d.prototype.Set = function(a) {
        this.localCenter.SetV(a.localCenter);
        this.c0.SetV(a.c0);
        this.c.SetV(a.c);
        this.a0 = a.a0;
        this.a = a.a;
        this.t0 = a.t0
    };
    d.prototype.Copy = function() {
        var a = new d;
        a.localCenter.SetV(this.localCenter);
        a.c0.SetV(this.c0);
        a.c.SetV(this.c);
        a.a0 = this.a0;
        a.a = this.a;
        a.t0 = this.t0;
        return a
    };
    d.prototype.GetTransform = function(a, b) {
        void 0 === b && (b = 0);
        a.position.x = (1 - b) * this.c0.x + b * this.c.x;
        a.position.y = (1 - b) * this.c0.y + b * this.c.y;
        a.R.Set((1 - b) * this.a0 + b * this.a);
        var d = a.R;
        a.position.x -= d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y;
        a.position.y -= d.col1.y * this.localCenter.x + d.col2.y * this.localCenter.y
    };
    d.prototype.Advance = function(a) {
        void 0 === a && (a = 0);
        if (this.t0 < a && 1 - this.t0 > Number.MIN_VALUE) {
            var b = (a - this.t0) / (1 - this.t0);
            this.c0.x = (1 - b) * this.c0.x + b * this.c.x;
            this.c0.y = (1 - b) * this.c0.y + b * this.c.y;
            this.a0 = (1 - b) * this.a0 + b * this.a;
            this.t0 = a
        }
    };
    h.b2Transform = function() {
        this.position = new f;
        this.R = new b
    };
    h.prototype.b2Transform = function(a, b) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        a && (this.position.SetV(a), this.R.SetM(b))
    };
    h.prototype.Initialize = function(a, b) {
        this.position.SetV(a);
        this.R.SetM(b)
    };
    h.prototype.SetIdentity = function() {
        this.position.SetZero();
        this.R.SetIdentity()
    };
    h.prototype.Set = function(a) {
        this.position.SetV(a.position);
        this.R.SetM(a.R)
    };
    h.prototype.GetAngle = function() {
        return Math.atan2(this.R.col1.y, this.R.col1.x)
    };
    f.b2Vec2 = function() {};
    f.prototype.b2Vec2 = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.x = a;
        this.y = b
    };
    f.prototype.SetZero = function() {
        this.y = this.x = 0
    };
    f.prototype.Set = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.x = a;
        this.y = b
    };
    f.prototype.SetV = function(a) {
        this.x = a.x;
        this.y = a.y
    };
    f.prototype.GetNegative = function() {
        return new f( - this.x, -this.y)
    };
    f.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y
    };
    f.Make = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return new f(a, b)
    };
    f.prototype.Copy = function() {
        return new f(this.x, this.y)
    };
    f.prototype.Add = function(a) {
        this.x += a.x;
        this.y += a.y
    };
    f.prototype.Subtract = function(a) {
        this.x -= a.x;
        this.y -= a.y
    };
    f.prototype.Multiply = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a
    };
    f.prototype.MulM = function(a) {
        var b = this.x;
        this.x = a.col1.x * b + a.col2.x * this.y;
        this.y = a.col1.y * b + a.col2.y * this.y
    };
    f.prototype.MulTM = function(a) {
        var b = k.Dot(this, a.col1);
        this.y = k.Dot(this, a.col2);
        this.x = b
    };
    f.prototype.CrossVF = function(a) {
        void 0 === a && (a = 0);
        var b = this.x;
        this.x = a * this.y;
        this.y = -a * b
    };
    f.prototype.CrossFV = function(a) {
        void 0 === a && (a = 0);
        var b = this.x;
        this.x = -a * this.y;
        this.y = a * b
    };
    f.prototype.MinV = function(a) {
        this.x = this.x < a.x ? this.x: a.x;
        this.y = this.y < a.y ? this.y: a.y
    };
    f.prototype.MaxV = function(a) {
        this.x = this.x > a.x ? this.x: a.x;
        this.y = this.y > a.y ? this.y: a.y
    };
    f.prototype.Abs = function() {
        0 > this.x && (this.x = -this.x);
        0 > this.y && (this.y = -this.y)
    };
    f.prototype.Length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    f.prototype.LengthSquared = function() {
        return this.x * this.x + this.y * this.y
    };
    f.prototype.Normalize = function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y);
        if (a < Number.MIN_VALUE) return 0;
        var b = 1 / a;
        this.x *= b;
        this.y *= b;
        return a
    };
    f.prototype.IsValid = function() {
        return k.IsValid(this.x) && k.IsValid(this.y)
    };
    n.b2Vec3 = function() {};
    n.prototype.b2Vec3 = function(a, b, d) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        this.x = a;
        this.y = b;
        this.z = d
    };
    n.prototype.SetZero = function() {
        this.x = this.y = this.z = 0
    };
    n.prototype.Set = function(a, b, d) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        this.x = a;
        this.y = b;
        this.z = d
    };
    n.prototype.SetV = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z
    };
    n.prototype.GetNegative = function() {
        return new n( - this.x, -this.y, -this.z)
    };
    n.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    };
    n.prototype.Copy = function() {
        return new n(this.x, this.y, this.z)
    };
    n.prototype.Add = function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z
    };
    n.prototype.Subtract = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z
    };
    n.prototype.Multiply = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a;
        this.z *= a
    }
})(); (function() {
    var b = Box2D.Common.Math.b2Math,
        l = Box2D.Common.Math.b2Sweep,
        k = Box2D.Common.Math.b2Transform,
        d = Box2D.Common.Math.b2Vec2,
        h = Box2D.Common.b2Color,
        f = Box2D.Common.b2Settings,
        n = Box2D.Collision.b2AABB,
        a = Box2D.Collision.b2ContactPoint,
        m = Box2D.Collision.b2DynamicTreeBroadPhase,
        y = Box2D.Collision.b2RayCastInput,
        u = Box2D.Collision.b2RayCastOutput,
        B = Box2D.Collision.Shapes.b2CircleShape,
        t = Box2D.Collision.Shapes.b2EdgeShape,
        r = Box2D.Collision.Shapes.b2MassData,
        F = Box2D.Collision.Shapes.b2PolygonShape,
        G = Box2D.Collision.Shapes.b2Shape,
        e = Box2D.Dynamics.b2Body,
        A = Box2D.Dynamics.b2BodyDef,
        v = Box2D.Dynamics.b2ContactFilter,
        M = Box2D.Dynamics.b2ContactImpulse,
        E = Box2D.Dynamics.b2ContactListener,
        P = Box2D.Dynamics.b2ContactManager,
        z = Box2D.Dynamics.b2DebugDraw,
        O = Box2D.Dynamics.b2DestructionListener,
        K = Box2D.Dynamics.b2FilterData,
        N = Box2D.Dynamics.b2Fixture,
        J = Box2D.Dynamics.b2FixtureDef,
        L = Box2D.Dynamics.b2Island,
        g = Box2D.Dynamics.b2TimeStep,
        q = Box2D.Dynamics.b2World,
        I = Box2D.Dynamics.Contacts.b2Contact,
        x = Box2D.Dynamics.Contacts.b2ContactFactory,
        C = Box2D.Dynamics.Contacts.b2ContactSolver,
        Q = Box2D.Dynamics.Joints.b2Joint,
        R = Box2D.Dynamics.Joints.b2PulleyJoint;
    e.b2Body = function() {
        this.m_xf = new k;
        this.m_sweep = new l;
        this.m_linearVelocity = new d;
        this.m_force = new d
    };
    e.prototype.connectEdges = function(c, a, g) {
        void 0 === g && (g = 0);
        var p = Math.atan2(a.GetDirectionVector().y, a.GetDirectionVector().x);
        g = b.MulFV(Math.tan(.5 * (p - g)), a.GetDirectionVector());
        g = b.SubtractVV(g, a.GetNormalVector());
        g = b.MulFV(f.b2_toiSlop, g);
        g = b.AddVV(g, a.GetVertex1());
        var d = b.AddVV(c.GetDirectionVector(), a.GetDirectionVector());
        d.Normalize();
        var e = 0 < b.Dot(c.GetDirectionVector(), a.GetNormalVector());
        c.SetNextEdge(a, g, d, e);
        a.SetPrevEdge(c, g, d, e);
        return p
    };
    e.prototype.CreateFixture = function(c) {
        if (1 == this.m_world.IsLocked()) return null;
        var a = new N;
        a.Create(this, this.m_xf, c);
        this.m_flags & e.e_activeFlag && a.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
        a.m_next = this.m_fixtureList;
        this.m_fixtureList = a; ++this.m_fixtureCount;
        a.m_body = this;
        0 < a.m_density && this.ResetMassData();
        this.m_world.m_flags |= q.e_newFixture;
        return a
    };
    e.prototype.CreateFixture2 = function(c, a) {
        void 0 === a && (a = 0);
        var b = new J;
        b.shape = c;
        b.density = a;
        return this.CreateFixture(b)
    };
    e.prototype.DestroyFixture = function(c) {
        if (1 != this.m_world.IsLocked()) {
            for (var a = this.m_fixtureList,
                     b = null; null != a;) {
                if (a == c) {
                    b ? b.m_next = c.m_next: this.m_fixtureList = c.m_next;
                    break
                }
                b = a;
                a = a.m_next
            }
            for (a = this.m_contactList; a;) {
                b = a.contact;
                a = a.next;
                var g = b.GetFixtureA(),
                    d = b.GetFixtureB();
                c != g && c != d || this.m_world.m_contactManager.Destroy(b)
            }
            this.m_flags & e.e_activeFlag && c.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
            c.Destroy();
            c.m_body = null;
            c.m_next = null; --this.m_fixtureCount;
            this.ResetMassData()
        }
    };
    e.prototype.SetPositionAndAngle = function(c, a) {
        void 0 === a && (a = 0);
        if (1 != this.m_world.IsLocked()) {
            this.m_xf.R.Set(a);
            this.m_xf.position.SetV(c);
            var b = this.m_xf.R;
            var g = this.m_sweep.localCenter;
            this.m_sweep.c.x = b.col1.x * g.x + b.col2.x * g.y;
            this.m_sweep.c.y = b.col1.y * g.x + b.col2.y * g.y;
            this.m_sweep.c.x += this.m_xf.position.x;
            this.m_sweep.c.y += this.m_xf.position.y;
            this.m_sweep.c0.SetV(this.m_sweep.c);
            this.m_sweep.a0 = this.m_sweep.a = a;
            g = this.m_world.m_contactManager.m_broadPhase;
            for (b = this.m_fixtureList; b; b = b.m_next) b.Synchronize(g, this.m_xf, this.m_xf);
            this.m_world.m_contactManager.FindNewContacts()
        }
    };
    e.prototype.SetTransform = function(c) {
        this.SetPositionAndAngle(c.position, c.GetAngle())
    };
    e.prototype.GetTransform = function() {
        return this.m_xf
    };
    e.prototype.GetPosition = function() {
        return this.m_xf.position
    };
    e.prototype.SetPosition = function(c) {
        this.SetPositionAndAngle(c, this.GetAngle())
    };
    e.prototype.GetAngle = function() {
        return this.m_sweep.a
    };
    e.prototype.SetAngle = function(c) {
        void 0 === c && (c = 0);
        this.SetPositionAndAngle(this.GetPosition(), c)
    };
    e.prototype.GetWorldCenter = function() {
        return this.m_sweep.c
    };
    e.prototype.GetLocalCenter = function() {
        return this.m_sweep.localCenter
    };
    e.prototype.SetLinearVelocity = function(c) {
        this.m_type != e.b2_staticBody && this.m_linearVelocity.SetV(c)
    };
    e.prototype.GetLinearVelocity = function() {
        return this.m_linearVelocity
    };
    e.prototype.SetAngularVelocity = function(c) {
        void 0 === c && (c = 0);
        this.m_type != e.b2_staticBody && (this.m_angularVelocity = c)
    };
    e.prototype.GetAngularVelocity = function() {
        return this.m_angularVelocity
    };
    e.prototype.GetDefinition = function() {
        var c = new A;
        c.type = this.GetType();
        c.allowSleep = (this.m_flags & e.e_allowSleepFlag) == e.e_allowSleepFlag;
        c.angle = this.GetAngle();
        c.angularDamping = this.m_angularDamping;
        c.angularVelocity = this.m_angularVelocity;
        c.fixedRotation = (this.m_flags & e.e_fixedRotationFlag) == e.e_fixedRotationFlag;
        c.bullet = (this.m_flags & e.e_bulletFlag) == e.e_bulletFlag;
        c.awake = (this.m_flags & e.e_awakeFlag) == e.e_awakeFlag;
        c.linearDamping = this.m_linearDamping;
        c.linearVelocity.SetV(this.GetLinearVelocity());
        c.position = this.GetPosition();
        c.userData = this.GetUserData();
        return c
    };
    e.prototype.ApplyForce = function(c, a) {
        this.m_type == e.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += c.x, this.m_force.y += c.y, this.m_torque += (a.x - this.m_sweep.c.x) * c.y - (a.y - this.m_sweep.c.y) * c.x)
    };
    e.prototype.ApplyTorque = function(c) {
        void 0 === c && (c = 0);
        this.m_type == e.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_torque += c)
    };
    e.prototype.ApplyImpulse = function(c, a) {
        this.m_type == e.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * c.x, this.m_linearVelocity.y += this.m_invMass * c.y, this.m_angularVelocity += this.m_invI * ((a.x - this.m_sweep.c.x) * c.y - (a.y - this.m_sweep.c.y) * c.x))
    };
    e.prototype.Split = function(c) {
        for (var a = this.GetLinearVelocity().Copy(), g = this.GetAngularVelocity(), d = this.GetWorldCenter(), e = this.m_world.CreateBody(this.GetDefinition()), q, f = this.m_fixtureList; f;) if (c(f)) {
            var x = f.m_next;
            q ? q.m_next = x: this.m_fixtureList = x;
            this.m_fixtureCount--;
            f.m_next = e.m_fixtureList;
            e.m_fixtureList = f;
            e.m_fixtureCount++;
            f.m_body = e;
            f = x
        } else q = f,
            f = f.m_next;
        this.ResetMassData();
        e.ResetMassData();
        q = this.GetWorldCenter();
        c = e.GetWorldCenter();
        q = b.AddVV(a, b.CrossFV(g, b.SubtractVV(q, d)));
        a = b.AddVV(a, b.CrossFV(g, b.SubtractVV(c, d)));
        this.SetLinearVelocity(q);
        e.SetLinearVelocity(a);
        this.SetAngularVelocity(g);
        e.SetAngularVelocity(g);
        this.SynchronizeFixtures();
        e.SynchronizeFixtures();
        return e
    };
    e.prototype.Merge = function(c) {
        var a;
        for (a = c.m_fixtureList; a;) {
            var b = a.m_next;
            c.m_fixtureCount--;
            a.m_next = this.m_fixtureList;
            this.m_fixtureList = a;
            this.m_fixtureCount++;
            a.m_body = d;
            a = b
        }
        g.m_fixtureCount = 0;
        var g = this,
            d = c;
        g.GetWorldCenter();
        d.GetWorldCenter();
        g.GetLinearVelocity().Copy();
        d.GetLinearVelocity().Copy();
        g.GetAngularVelocity();
        d.GetAngularVelocity();
        g.ResetMassData();
        this.SynchronizeFixtures()
    };
    e.prototype.GetMass = function() {
        return this.m_mass
    };
    e.prototype.GetInertia = function() {
        return this.m_I
    };
    e.prototype.GetMassData = function(c) {
        c.mass = this.m_mass;
        c.I = this.m_I;
        c.center.SetV(this.m_sweep.localCenter)
    };
    e.prototype.SetMassData = function(c) {
        f.b2Assert(0 == this.m_world.IsLocked());
        if (1 != this.m_world.IsLocked() && this.m_type == e.b2_dynamicBody) {
            this.m_invI = this.m_I = this.m_invMass = 0;
            this.m_mass = c.mass;
            0 >= this.m_mass && (this.m_mass = 1);
            this.m_invMass = 1 / this.m_mass;
            0 < c.I && 0 == (this.m_flags & e.e_fixedRotationFlag) && (this.m_I = c.I - this.m_mass * (c.center.x * c.center.x + c.center.y * c.center.y), this.m_invI = 1 / this.m_I);
            var a = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c.center);
            this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - a.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - a.x)
        }
    };
    e.prototype.ResetMassData = function() {
        this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
        this.m_sweep.localCenter.SetZero();
        if (this.m_type != e.b2_staticBody && this.m_type != e.b2_kinematicBody) {
            for (var c = d.Make(0, 0), a = this.m_fixtureList; a; a = a.m_next) if (0 != a.m_density) {
                var g = a.GetMassData();
                this.m_mass += g.mass;
                c.x += g.center.x * g.mass;
                c.y += g.center.y * g.mass;
                this.m_I += g.I
            }
            0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, c.x *= this.m_invMass, c.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
            0 < this.m_I && 0 == (this.m_flags & e.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (c.x * c.x + c.y * c.y), this.m_I *= this.m_inertiaScale, f.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
            a = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c);
            this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - a.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - a.x)
        }
    };
    e.prototype.GetWorldPoint = function(c) {
        var a = this.m_xf.R;
        c = new d(a.col1.x * c.x + a.col2.x * c.y, a.col1.y * c.x + a.col2.y * c.y);
        c.x += this.m_xf.position.x;
        c.y += this.m_xf.position.y;
        return c
    };
    e.prototype.GetWorldVector = function(c) {
        return b.MulMV(this.m_xf.R, c)
    };
    e.prototype.GetLocalPoint = function(c) {
        return b.MulXT(this.m_xf, c)
    };
    e.prototype.GetLocalVector = function(c) {
        return b.MulTMV(this.m_xf.R, c)
    };
    e.prototype.GetLinearVelocityFromWorldPoint = function(c) {
        return new d(this.m_linearVelocity.x - this.m_angularVelocity * (c.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (c.x - this.m_sweep.c.x))
    };
    e.prototype.GetLinearVelocityFromLocalPoint = function(c) {
        var a = this.m_xf.R;
        c = new d(a.col1.x * c.x + a.col2.x * c.y, a.col1.y * c.x + a.col2.y * c.y);
        c.x += this.m_xf.position.x;
        c.y += this.m_xf.position.y;
        return new d(this.m_linearVelocity.x - this.m_angularVelocity * (c.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (c.x - this.m_sweep.c.x))
    };
    e.prototype.GetLinearDamping = function() {
        return this.m_linearDamping
    };
    e.prototype.SetLinearDamping = function(c) {
        void 0 === c && (c = 0);
        this.m_linearDamping = c
    };
    e.prototype.GetAngularDamping = function() {
        return this.m_angularDamping
    };
    e.prototype.SetAngularDamping = function(c) {
        void 0 === c && (c = 0);
        this.m_angularDamping = c
    };
    e.prototype.SetType = function(c) {
        void 0 === c && (c = 0);
        if (this.m_type != c) for (this.m_type = c, this.ResetMassData(), this.m_type == e.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0, c = this.m_contactList; c; c = c.next) c.contact.FlagForFiltering()
    };
    e.prototype.GetType = function() {
        return this.m_type
    };
    e.prototype.SetBullet = function(c) {
        this.m_flags = c ? this.m_flags | e.e_bulletFlag: this.m_flags & ~e.e_bulletFlag
    };
    e.prototype.IsBullet = function() {
        return (this.m_flags & e.e_bulletFlag) == e.e_bulletFlag
    };
    e.prototype.SetSleepingAllowed = function(c) {
        c ? this.m_flags |= e.e_allowSleepFlag: (this.m_flags &= ~e.e_allowSleepFlag, this.SetAwake(!0))
    };
    e.prototype.SetAwake = function(c) {
        c ? (this.m_flags |= e.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~e.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
    };
    e.prototype.IsAwake = function() {
        return (this.m_flags & e.e_awakeFlag) == e.e_awakeFlag
    };
    e.prototype.SetFixedRotation = function(c) {
        this.m_flags = c ? this.m_flags | e.e_fixedRotationFlag: this.m_flags & ~e.e_fixedRotationFlag;
        this.ResetMassData()
    };
    e.prototype.IsFixedRotation = function() {
        return (this.m_flags & e.e_fixedRotationFlag) == e.e_fixedRotationFlag
    };
    e.prototype.SetActive = function(c) {
        if (c != this.IsActive()) {
            var a;
            if (c) for (this.m_flags |= e.e_activeFlag, c = this.m_world.m_contactManager.m_broadPhase, a = this.m_fixtureList; a; a = a.m_next) a.CreateProxy(c, this.m_xf);
            else {
                this.m_flags &= ~e.e_activeFlag;
                c = this.m_world.m_contactManager.m_broadPhase;
                for (a = this.m_fixtureList; a; a = a.m_next) a.DestroyProxy(c);
                for (c = this.m_contactList; c;) a = c,
                    c = c.next,
                    this.m_world.m_contactManager.Destroy(a.contact);
                this.m_contactList = null
            }
        }
    };
    e.prototype.IsActive = function() {
        return (this.m_flags & e.e_activeFlag) == e.e_activeFlag
    };
    e.prototype.IsSleepingAllowed = function() {
        return (this.m_flags & e.e_allowSleepFlag) == e.e_allowSleepFlag
    };
    e.prototype.GetFixtureList = function() {
        return this.m_fixtureList
    };
    e.prototype.GetJointList = function() {
        return this.m_jointList
    };
    e.prototype.GetControllerList = function() {
        return this.m_controllerList
    };
    e.prototype.GetContactList = function() {
        return this.m_contactList
    };
    e.prototype.GetNext = function() {
        return this.m_next
    };
    e.prototype.GetUserData = function() {
        return this.m_userData
    };
    e.prototype.SetUserData = function(c) {
        this.m_userData = c
    };
    e.prototype.GetWorld = function() {
        return this.m_world
    };
    e.prototype.b2Body = function(c, a) {
        this.m_flags = 0;
        c.bullet && (this.m_flags |= e.e_bulletFlag);
        c.fixedRotation && (this.m_flags |= e.e_fixedRotationFlag);
        c.allowSleep && (this.m_flags |= e.e_allowSleepFlag);
        c.awake && (this.m_flags |= e.e_awakeFlag);
        c.active && (this.m_flags |= e.e_activeFlag);
        this.m_world = a;
        this.m_xf.position.SetV(c.position);
        this.m_xf.R.Set(c.angle);
        this.m_sweep.localCenter.SetZero();
        this.m_sweep.t0 = 1;
        this.m_sweep.a0 = this.m_sweep.a = c.angle;
        var b = this.m_xf.R,
            g = this.m_sweep.localCenter;
        this.m_sweep.c.x = b.col1.x * g.x + b.col2.x * g.y;
        this.m_sweep.c.y = b.col1.y * g.x + b.col2.y * g.y;
        this.m_sweep.c.x += this.m_xf.position.x;
        this.m_sweep.c.y += this.m_xf.position.y;
        this.m_sweep.c0.SetV(this.m_sweep.c);
        this.m_contactList = this.m_controllerList = this.m_jointList = null;
        this.m_controllerCount = 0;
        this.m_next = this.m_prev = null;
        this.m_linearVelocity.SetV(c.linearVelocity);
        this.m_angularVelocity = c.angularVelocity;
        this.m_linearDamping = c.linearDamping;
        this.m_angularDamping = c.angularDamping;
        this.m_force.Set(0, 0);
        this.m_sleepTime = this.m_torque = 0;
        this.m_type = c.type;
        this.m_invMass = this.m_type == e.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
        this.m_invI = this.m_I = 0;
        this.m_inertiaScale = c.inertiaScale;
        this.m_userData = c.userData;
        this.m_fixtureList = null;
        this.m_fixtureCount = 0
    };
    e.prototype.SynchronizeFixtures = function() {
        var c = e.s_xf1;
        c.R.Set(this.m_sweep.a0);
        var a = c.R,
            b = this.m_sweep.localCenter;
        c.position.x = this.m_sweep.c0.x - (a.col1.x * b.x + a.col2.x * b.y);
        c.position.y = this.m_sweep.c0.y - (a.col1.y * b.x + a.col2.y * b.y);
        b = this.m_world.m_contactManager.m_broadPhase;
        for (a = this.m_fixtureList; a; a = a.m_next) a.Synchronize(b, c, this.m_xf)
    };
    e.prototype.SynchronizeTransform = function() {
        this.m_xf.R.Set(this.m_sweep.a);
        var c = this.m_xf.R,
            a = this.m_sweep.localCenter;
        this.m_xf.position.x = this.m_sweep.c.x - (c.col1.x * a.x + c.col2.x * a.y);
        this.m_xf.position.y = this.m_sweep.c.y - (c.col1.y * a.x + c.col2.y * a.y)
    };
    e.prototype.ShouldCollide = function(c) {
        if (this.m_type != e.b2_dynamicBody && c.m_type != e.b2_dynamicBody) return ! 1;
        for (var a = this.m_jointList; a; a = a.next) if (a.other == c && 0 == a.joint.m_collideConnected) return ! 1;
        return ! 0
    };
    e.prototype.Advance = function(c) {
        void 0 === c && (c = 0);
        this.m_sweep.Advance(c);
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_sweep.a = this.m_sweep.a0;
        this.SynchronizeTransform()
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Body.s_xf1 = new k;
        Box2D.Dynamics.b2Body.e_islandFlag = 1;
        Box2D.Dynamics.b2Body.e_awakeFlag = 2;
        Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
        Box2D.Dynamics.b2Body.e_bulletFlag = 8;
        Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
        Box2D.Dynamics.b2Body.e_activeFlag = 32;
        Box2D.Dynamics.b2Body.b2_staticBody = 0;
        Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
        Box2D.Dynamics.b2Body.b2_dynamicBody = 2
    });
    A.b2BodyDef = function() {
        this.position = new d;
        this.linearVelocity = new d
    };
    A.prototype.b2BodyDef = function() {
        this.userData = null;
        this.position.Set(0, 0);
        this.angle = 0;
        this.linearVelocity.Set(0, 0);
        this.angularDamping = this.linearDamping = this.angularVelocity = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = e.b2_staticBody;
        this.active = !0;
        this.inertiaScale = 1
    };
    v.b2ContactFilter = function() {};
    v.prototype.ShouldCollide = function(c, a) {
        var b = c.GetFilterData(),
            g = a.GetFilterData();
        return b.groupIndex == g.groupIndex && 0 != b.groupIndex ? 0 < b.groupIndex: 0 != (b.maskBits & g.categoryBits) && 0 != (b.categoryBits & g.maskBits)
    };
    v.prototype.RayCollide = function(c, a) {
        return c ? this.ShouldCollide(c instanceof N ? c: null, a) : !0
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new v
    });
    M.b2ContactImpulse = function() {
        this.normalImpulses = new Vector_a2j_Number(f.b2_maxManifoldPoints);
        this.tangentImpulses = new Vector_a2j_Number(f.b2_maxManifoldPoints)
    };
    E.b2ContactListener = function() {};
    E.prototype.BeginContact = function(c) {};
    E.prototype.EndContact = function(c) {};
    E.prototype.PreSolve = function(c, a) {};
    E.prototype.PostSolve = function(c, a) {};
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new E
    });
    P.b2ContactManager = function() {};
    P.prototype.b2ContactManager = function() {
        this.m_world = null;
        this.m_contactCount = 0;
        this.m_contactFilter = v.b2_defaultFilter;
        this.m_contactListener = E.b2_defaultListener;
        this.m_contactFactory = new x(this.m_allocator);
        this.m_broadPhase = new m
    };
    P.prototype.AddPair = function(a, b) {
        var c = a instanceof N ? a: null,
            g = b instanceof N ? b: null,
            d = c.GetBody(),
            e = g.GetBody();
        if (d != e) {
            for (var p = e.GetContactList(); p;) {
                if (p.other == d) {
                    var q = p.contact.GetFixtureA(),
                        f = p.contact.GetFixtureB();
                    if (q == c && f == g || q == g && f == c) return
                }
                p = p.next
            }
            0 != e.ShouldCollide(d) && 0 != this.m_contactFilter.ShouldCollide(c, g) && (p = this.m_contactFactory.Create(c, g), c = p.GetFixtureA(), g = p.GetFixtureB(), d = c.m_body, e = g.m_body, p.m_prev = null, p.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = p), this.m_world.m_contactList = p, p.m_nodeA.contact = p, p.m_nodeA.other = e, p.m_nodeA.prev = null, p.m_nodeA.next = d.m_contactList, null != d.m_contactList && (d.m_contactList.prev = p.m_nodeA), d.m_contactList = p.m_nodeA, p.m_nodeB.contact = p, p.m_nodeB.other = d, p.m_nodeB.prev = null, p.m_nodeB.next = e.m_contactList, null != e.m_contactList && (e.m_contactList.prev = p.m_nodeB), e.m_contactList = p.m_nodeB, ++this.m_world.m_contactCount)
        }
    };
    P.prototype.FindNewContacts = function() {
        this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
    };
    P.prototype.Destroy = function(c) {
        var a = c.GetFixtureA(),
            b = c.GetFixtureB();
        a = a.GetBody();
        b = b.GetBody();
        c.IsTouching() && this.m_contactListener.EndContact(c);
        c.m_prev && (c.m_prev.m_next = c.m_next);
        c.m_next && (c.m_next.m_prev = c.m_prev);
        c == this.m_world.m_contactList && (this.m_world.m_contactList = c.m_next);
        c.m_nodeA.prev && (c.m_nodeA.prev.next = c.m_nodeA.next);
        c.m_nodeA.next && (c.m_nodeA.next.prev = c.m_nodeA.prev);
        c.m_nodeA == a.m_contactList && (a.m_contactList = c.m_nodeA.next);
        c.m_nodeB.prev && (c.m_nodeB.prev.next = c.m_nodeB.next);
        c.m_nodeB.next && (c.m_nodeB.next.prev = c.m_nodeB.prev);
        c.m_nodeB == b.m_contactList && (b.m_contactList = c.m_nodeB.next);
        this.m_contactFactory.Destroy(c); --this.m_contactCount
    };
    P.prototype.Collide = function() {
        for (var a, b = this.m_world.m_contactList; b;) {
            a = b.GetFixtureA();
            var g = b.GetFixtureB(),
                d = a.GetBody(),
                e = g.GetBody();
            if (0 == d.IsAwake() && 0 == e.IsAwake()) b = b.GetNext();
            else {
                if (b.m_flags & I.e_filterFlag) {
                    if (0 == e.ShouldCollide(d)) {
                        a = b;
                        b = a.GetNext();
                        this.Destroy(a);
                        continue
                    }
                    if (0 == this.m_contactFilter.ShouldCollide(a, g)) {
                        a = b;
                        b = a.GetNext();
                        this.Destroy(a);
                        continue
                    }
                    b.m_flags &= ~I.e_filterFlag
                }
                0 == this.m_broadPhase.TestOverlap(a.m_proxy, g.m_proxy) ? (a = b, b = a.GetNext(), this.Destroy(a)) : (b.Update(this.m_contactListener), b = b.GetNext())
            }
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new a
    });
    z.b2DebugDraw = function() {};
    z.prototype.b2DebugDraw = function() {};
    z.prototype.SetFlags = function(a) {};
    z.prototype.GetFlags = function() {};
    z.prototype.AppendFlags = function(a) {};
    z.prototype.ClearFlags = function(a) {};
    z.prototype.SetSprite = function(a) {};
    z.prototype.GetSprite = function() {};
    z.prototype.SetDrawScale = function(a) {};
    z.prototype.GetDrawScale = function() {};
    z.prototype.SetLineThickness = function(a) {};
    z.prototype.GetLineThickness = function() {};
    z.prototype.SetAlpha = function(a) {};
    z.prototype.GetAlpha = function() {};
    z.prototype.SetFillAlpha = function(a) {};
    z.prototype.GetFillAlpha = function() {};
    z.prototype.SetXFormScale = function(a) {};
    z.prototype.GetXFormScale = function() {};
    z.prototype.DrawPolygon = function(a, b, g) {};
    z.prototype.DrawSolidPolygon = function(a, b, g) {};
    z.prototype.DrawCircle = function(a, b, g) {};
    z.prototype.DrawSolidCircle = function(a, b, g, d) {};
    z.prototype.DrawSegment = function(a, b, g) {};
    z.prototype.DrawTransform = function(a) {};
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
        Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
        Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
        Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
        Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
        Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
    });
    O.b2DestructionListener = function() {};
    O.prototype.SayGoodbyeJoint = function(a) {};
    O.prototype.SayGoodbyeFixture = function(a) {};
    K.b2FilterData = function() {
        this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0
    };
    K.prototype.Copy = function() {
        var a = new K;
        a.categoryBits = this.categoryBits;
        a.maskBits = this.maskBits;
        a.groupIndex = this.groupIndex;
        return a
    };
    N.b2Fixture = function() {
        this.m_filter = new K
    };
    N.prototype.GetType = function() {
        return this.m_shape.GetType()
    };
    N.prototype.GetShape = function() {
        return this.m_shape
    };
    N.prototype.SetSensor = function(a) {
        if (this.m_isSensor != a && (this.m_isSensor = a, null != this.m_body)) for (a = this.m_body.GetContactList(); a;) {
            var c = a.contact,
                b = c.GetFixtureA(),
                g = c.GetFixtureB();
            b != this && g != this || c.SetSensor(b.IsSensor() || g.IsSensor());
            a = a.next
        }
    };
    N.prototype.IsSensor = function() {
        return this.m_isSensor
    };
    N.prototype.SetFilterData = function(a) {
        this.m_filter = a.Copy();
        if (!this.m_body) for (a = this.m_body.GetContactList(); a;) {
            var c = a.contact,
                b = c.GetFixtureA(),
                g = c.GetFixtureB();
            b != this && g != this || c.FlagForFiltering();
            a = a.next
        }
    };
    N.prototype.GetFilterData = function() {
        return this.m_filter.Copy()
    };
    N.prototype.GetBody = function() {
        return this.m_body
    };
    N.prototype.GetNext = function() {
        return this.m_next
    };
    N.prototype.GetUserData = function() {
        return this.m_userData
    };
    N.prototype.SetUserData = function(a) {
        this.m_userData = a
    };
    N.prototype.TestPoint = function(a) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), a)
    };
    N.prototype.RayCast = function(a, b) {
        return this.m_shape.RayCast(a, b, this.m_body.GetTransform())
    };
    N.prototype.GetMassData = function(a) {
        void 0 === a && (a = null);
        null == a && (a = new r);
        this.m_shape.ComputeMass(a, this.m_density);
        return a
    };
    N.prototype.SetDensity = function(a) {
        void 0 === a && (a = 0);
        this.m_density = a
    };
    N.prototype.GetDensity = function() {
        return this.m_density
    };
    N.prototype.GetFriction = function() {
        return this.m_friction
    };
    N.prototype.SetFriction = function(a) {
        void 0 === a && (a = 0);
        this.m_friction = a
    };
    N.prototype.GetRestitution = function() {
        return this.m_restitution
    };
    N.prototype.SetRestitution = function(a) {
        void 0 === a && (a = 0);
        this.m_restitution = a
    };
    N.prototype.GetAABB = function() {
        return this.m_aabb
    };
    N.prototype.b2Fixture = function() {
        this.m_aabb = new n;
        this.m_shape = this.m_next = this.m_body = this.m_userData = null;
        this.m_restitution = this.m_friction = this.m_density = 0
    };
    N.prototype.Create = function(a, b, g) {
        this.m_userData = g.userData;
        this.m_friction = g.friction;
        this.m_restitution = g.restitution;
        this.m_body = a;
        this.m_next = null;
        this.m_filter = g.filter.Copy();
        this.m_isSensor = g.isSensor;
        this.m_shape = g.shape.Copy();
        this.m_density = g.density
    };
    N.prototype.Destroy = function() {
        this.m_shape = null
    };
    N.prototype.CreateProxy = function(a, b) {
        this.m_shape.ComputeAABB(this.m_aabb, b);
        this.m_proxy = a.CreateProxy(this.m_aabb, this)
    };
    N.prototype.DestroyProxy = function(a) {
        null != this.m_proxy && (a.DestroyProxy(this.m_proxy), this.m_proxy = null)
    };
    N.prototype.Synchronize = function(a, g, d) {
        if (this.m_proxy) {
            var c = new n,
                e = new n;
            this.m_shape.ComputeAABB(c, g);
            this.m_shape.ComputeAABB(e, d);
            this.m_aabb.Combine(c, e);
            g = b.SubtractVV(d.position, g.position);
            a.MoveProxy(this.m_proxy, this.m_aabb, g)
        }
    };
    J.b2FixtureDef = function() {
        this.filter = new K
    };
    J.prototype.b2FixtureDef = function() {
        this.userData = this.shape = null;
        this.friction = .2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1
    };
    L.b2Island = function() {};
    L.prototype.b2Island = function() {
        this.m_bodies = new Vector;
        this.m_contacts = new Vector;
        this.m_joints = new Vector
    };
    L.prototype.Initialize = function(a, b, g, d, e, q) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === g && (g = 0);
        this.m_bodyCapacity = a;
        this.m_contactCapacity = b;
        this.m_jointCapacity = g;
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        this.m_allocator = d;
        this.m_listener = e;
        this.m_contactSolver = q;
        for (d = this.m_bodies.length; d < a; d++) this.m_bodies[d] = null;
        for (d = this.m_contacts.length; d < b; d++) this.m_contacts[d] = null;
        for (d = this.m_joints.length; d < g; d++) this.m_joints[d] = null
    };
    L.prototype.Clear = function() {
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
    };
    L.prototype.Solve = function(a, g, d) {
        var c;
        for (c = 0; c < this.m_bodyCount; ++c) {
            var p = this.m_bodies[c];
            p.GetType() == e.b2_dynamicBody && (p.m_linearVelocity.x += a.dt * (g.x + p.m_invMass * p.m_force.x), p.m_linearVelocity.y += a.dt * (g.y + p.m_invMass * p.m_force.y), p.m_angularVelocity += a.dt * p.m_invI * p.m_torque, p.m_linearVelocity.Multiply(b.Clamp(1 - a.dt * p.m_linearDamping, 0, 1)), p.m_angularVelocity *= b.Clamp(1 - a.dt * p.m_angularDamping, 0, 1))
        }
        this.m_contactSolver.Initialize(a, this.m_contacts, this.m_contactCount, this.m_allocator);
        g = this.m_contactSolver;
        g.InitVelocityConstraints(a);
        for (c = 0; c < this.m_jointCount; ++c) {
            var q = this.m_joints[c];
            q.InitVelocityConstraints(a)
        }
        for (c = 0; c < a.velocityIterations; ++c) {
            for (p = 0; p < this.m_jointCount; ++p) q = this.m_joints[p],
                q.SolveVelocityConstraints(a);
            g.SolveVelocityConstraints()
        }
        for (c = 0; c < this.m_jointCount; ++c) q = this.m_joints[c],
            q.FinalizeVelocityConstraints();
        g.FinalizeVelocityConstraints();
        for (c = 0; c < this.m_bodyCount; ++c) if (p = this.m_bodies[c], p.GetType() != e.b2_staticBody) {
            var x = a.dt * p.m_linearVelocity.x,
                h = a.dt * p.m_linearVelocity.y;
            x * x + h * h > f.b2_maxTranslationSquared && (p.m_linearVelocity.Normalize(), p.m_linearVelocity.x = p.m_linearVelocity.x * f.b2_maxTranslation * a.inv_dt, p.m_linearVelocity.y = p.m_linearVelocity.y * f.b2_maxTranslation * a.inv_dt);
            x = a.dt * p.m_angularVelocity;
            x * x > f.b2_maxRotationSquared && (p.m_angularVelocity = 0 > p.m_angularVelocity ? -f.b2_maxRotation * a.inv_dt: f.b2_maxRotation * a.inv_dt);
            p.m_sweep.c0.SetV(p.m_sweep.c);
            p.m_sweep.a0 = p.m_sweep.a;
            p.m_sweep.c.x += a.dt * p.m_linearVelocity.x;
            p.m_sweep.c.y += a.dt * p.m_linearVelocity.y;
            p.m_sweep.a += a.dt * p.m_angularVelocity;
            p.SynchronizeTransform()
        }
        for (c = 0; c < a.positionIterations; ++c) {
            x = g.SolvePositionConstraints(f.b2_contactBaumgarte);
            h = !0;
            for (p = 0; p < this.m_jointCount; ++p) q = this.m_joints[p],
                q = q.SolvePositionConstraints(f.b2_contactBaumgarte),
                h = h && q;
            if (x && h) break
        }
        this.Report(g.m_constraints);
        if (d) {
            d = Number.MAX_VALUE;
            g = f.b2_linearSleepTolerance * f.b2_linearSleepTolerance;
            x = f.b2_angularSleepTolerance * f.b2_angularSleepTolerance;
            for (c = 0; c < this.m_bodyCount; ++c) p = this.m_bodies[c],
            p.GetType() != e.b2_staticBody && (0 == (p.m_flags & e.e_allowSleepFlag) && (d = p.m_sleepTime = 0), 0 == (p.m_flags & e.e_allowSleepFlag) || p.m_angularVelocity * p.m_angularVelocity > x || b.Dot(p.m_linearVelocity, p.m_linearVelocity) > g ? d = p.m_sleepTime = 0 : (p.m_sleepTime += a.dt, d = b.Min(d, p.m_sleepTime)));
            if (d >= f.b2_timeToSleep) for (c = 0; c < this.m_bodyCount; ++c) p = this.m_bodies[c],
                p.SetAwake(!1)
        }
    };
    L.prototype.SolveTOI = function(a) {
        var c, b;
        this.m_contactSolver.Initialize(a, this.m_contacts, this.m_contactCount, this.m_allocator);
        var g = this.m_contactSolver;
        for (c = 0; c < this.m_jointCount; ++c) this.m_joints[c].InitVelocityConstraints(a);
        for (c = 0; c < a.velocityIterations; ++c) for (g.SolveVelocityConstraints(), b = 0; b < this.m_jointCount; ++b) this.m_joints[b].SolveVelocityConstraints(a);
        for (c = 0; c < this.m_bodyCount; ++c) if (b = this.m_bodies[c], b.GetType() != e.b2_staticBody) {
            var d = a.dt * b.m_linearVelocity.x,
                q = a.dt * b.m_linearVelocity.y;
            d * d + q * q > f.b2_maxTranslationSquared && (b.m_linearVelocity.Normalize(), b.m_linearVelocity.x = b.m_linearVelocity.x * f.b2_maxTranslation * a.inv_dt, b.m_linearVelocity.y = b.m_linearVelocity.y * f.b2_maxTranslation * a.inv_dt);
            d = a.dt * b.m_angularVelocity;
            d * d > f.b2_maxRotationSquared && (b.m_angularVelocity = 0 > b.m_angularVelocity ? -f.b2_maxRotation * a.inv_dt: f.b2_maxRotation * a.inv_dt);
            b.m_sweep.c0.SetV(b.m_sweep.c);
            b.m_sweep.a0 = b.m_sweep.a;
            b.m_sweep.c.x += a.dt * b.m_linearVelocity.x;
            b.m_sweep.c.y += a.dt * b.m_linearVelocity.y;
            b.m_sweep.a += a.dt * b.m_angularVelocity;
            b.SynchronizeTransform()
        }
        for (c = 0; c < a.positionIterations; ++c) {
            d = g.SolvePositionConstraints(.75);
            q = !0;
            for (b = 0; b < this.m_jointCount; ++b) {
                var x = this.m_joints[b].SolvePositionConstraints(f.b2_contactBaumgarte);
                q = q && x
            }
            if (d && q) break
        }
        this.Report(g.m_constraints)
    };
    L.prototype.Report = function(a) {
        if (null != this.m_listener) for (var c = 0; c < this.m_contactCount; ++c) {
            for (var b = this.m_contacts[c], g = a[c], d = 0; d < g.pointCount; ++d) L.s_impulse.normalImpulses[d] = g.points[d].normalImpulse,
                L.s_impulse.tangentImpulses[d] = g.points[d].tangentImpulse;
            this.m_listener.PostSolve(b, L.s_impulse)
        }
    };
    L.prototype.AddBody = function(a) {
        a.m_islandIndex = this.m_bodyCount;
        this.m_bodies[this.m_bodyCount++] = a
    };
    L.prototype.AddContact = function(a) {
        this.m_contacts[this.m_contactCount++] = a
    };
    L.prototype.AddJoint = function(a) {
        this.m_joints[this.m_jointCount++] = a
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Island.s_impulse = new M
    });
    g.b2TimeStep = function() {};
    g.prototype.Set = function(a) {
        this.dt = a.dt;
        this.inv_dt = a.inv_dt;
        this.positionIterations = a.positionIterations;
        this.velocityIterations = a.velocityIterations;
        this.warmStarting = a.warmStarting
    };
    q.b2World = function() {
        this.s_stack = new Vector;
        this.m_contactManager = new P;
        this.m_contactSolver = new C;
        this.m_island = new L
    };
    q.prototype.b2World = function(a, b) {
        this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
        this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        q.m_warmStarting = !0;
        q.m_continuousPhysics = !0;
        this.m_allowSleep = b;
        this.m_gravity = a;
        this.m_inv_dt0 = 0;
        this.m_contactManager.m_world = this;
        var c = new A;
        this.m_groundBody = this.CreateBody(c)
    };
    q.prototype.SetDestructionListener = function(a) {
        this.m_destructionListener = a
    };
    q.prototype.SetContactFilter = function(a) {
        this.m_contactManager.m_contactFilter = a
    };
    q.prototype.SetContactListener = function(a) {
        this.m_contactManager.m_contactListener = a
    };
    q.prototype.SetDebugDraw = function(a) {
        this.m_debugDraw = a
    };
    q.prototype.SetBroadPhase = function(a) {
        var c = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = a;
        for (var b = this.m_bodyList; b; b = b.m_next) for (var g = b.m_fixtureList; g; g = g.m_next) g.m_proxy = a.CreateProxy(c.GetFatAABB(g.m_proxy), g)
    };
    q.prototype.Validate = function() {
        this.m_contactManager.m_broadPhase.Validate()
    };
    q.prototype.GetProxyCount = function() {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
    };
    q.prototype.CreateBody = function(a) {
        if (1 == this.IsLocked()) return null;
        a = new e(a, this);
        a.m_prev = null;
        if (a.m_next = this.m_bodyList) this.m_bodyList.m_prev = a;
        this.m_bodyList = a; ++this.m_bodyCount;
        return a
    };
    q.prototype.DestroyBody = function(a) {
        if (1 != this.IsLocked()) {
            for (var c = a.m_jointList; c;) {
                var b = c;
                c = c.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(b.joint);
                this.DestroyJoint(b.joint)
            }
            for (c = a.m_controllerList; c;) b = c,
                c = c.nextController,
                b.controller.RemoveBody(a);
            for (c = a.m_contactList; c;) b = c,
                c = c.next,
                this.m_contactManager.Destroy(b.contact);
            a.m_contactList = null;
            for (c = a.m_fixtureList; c;) b = c,
                c = c.m_next,
            this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(b),
                b.DestroyProxy(this.m_contactManager.m_broadPhase),
                b.Destroy();
            a.m_fixtureList = null;
            a.m_fixtureCount = 0;
            a.m_prev && (a.m_prev.m_next = a.m_next);
            a.m_next && (a.m_next.m_prev = a.m_prev);
            a == this.m_bodyList && (this.m_bodyList = a.m_next); --this.m_bodyCount
        }
    };
    q.prototype.CreateJoint = function(a) {
        var c = Q.Create(a, null);
        c.m_prev = null;
        if (c.m_next = this.m_jointList) this.m_jointList.m_prev = c;
        this.m_jointList = c; ++this.m_jointCount;
        c.m_edgeA.joint = c;
        c.m_edgeA.other = c.m_bodyB;
        c.m_edgeA.prev = null;
        if (c.m_edgeA.next = c.m_bodyA.m_jointList) c.m_bodyA.m_jointList.prev = c.m_edgeA;
        c.m_bodyA.m_jointList = c.m_edgeA;
        c.m_edgeB.joint = c;
        c.m_edgeB.other = c.m_bodyA;
        c.m_edgeB.prev = null;
        if (c.m_edgeB.next = c.m_bodyB.m_jointList) c.m_bodyB.m_jointList.prev = c.m_edgeB;
        c.m_bodyB.m_jointList = c.m_edgeB;
        var b = a.bodyA,
            g = a.bodyB;
        if (0 == a.collideConnected) for (a = g.GetContactList(); a;) a.other == b && a.contact.FlagForFiltering(),
            a = a.next;
        return c
    };
    q.prototype.DestroyJoint = function(a) {
        var c = a.m_collideConnected;
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a == this.m_jointList && (this.m_jointList = a.m_next);
        var b = a.m_bodyA,
            g = a.m_bodyB;
        b.SetAwake(!0);
        g.SetAwake(!0);
        a.m_edgeA.prev && (a.m_edgeA.prev.next = a.m_edgeA.next);
        a.m_edgeA.next && (a.m_edgeA.next.prev = a.m_edgeA.prev);
        a.m_edgeA == b.m_jointList && (b.m_jointList = a.m_edgeA.next);
        a.m_edgeA.prev = null;
        a.m_edgeA.next = null;
        a.m_edgeB.prev && (a.m_edgeB.prev.next = a.m_edgeB.next);
        a.m_edgeB.next && (a.m_edgeB.next.prev = a.m_edgeB.prev);
        a.m_edgeB == g.m_jointList && (g.m_jointList = a.m_edgeB.next);
        a.m_edgeB.prev = null;
        a.m_edgeB.next = null;
        Q.Destroy(a, null); --this.m_jointCount;
        if (0 == c) for (a = g.GetContactList(); a;) a.other == b && a.contact.FlagForFiltering(),
            a = a.next
    };
    q.prototype.AddController = function(a) {
        a.m_next = this.m_controllerList;
        a.m_prev = null;
        this.m_controllerList = a;
        a.m_world = this;
        this.m_controllerCount++;
        return a
    };
    q.prototype.RemoveController = function(a) {
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a.m_next && (a.m_next.m_prev = a.m_prev);
        this.m_controllerList == a && (this.m_controllerList = a.m_next);
        this.m_controllerCount--
    };
    q.prototype.CreateController = function(a) {
        if (a.m_world != this) throw Error("Controller can only be a member of one world");
        a.m_next = this.m_controllerList;
        a.m_prev = null;
        this.m_controllerList && (this.m_controllerList.m_prev = a);
        this.m_controllerList = a; ++this.m_controllerCount;
        a.m_world = this;
        return a
    };
    q.prototype.DestroyController = function(a) {
        a.Clear();
        a.m_next && (a.m_next.m_prev = a.m_prev);
        a.m_prev && (a.m_prev.m_next = a.m_next);
        a == this.m_controllerList && (this.m_controllerList = a.m_next); --this.m_controllerCount
    };
    q.prototype.SetWarmStarting = function(a) {
        q.m_warmStarting = a
    };
    q.prototype.SetContinuousPhysics = function(a) {
        q.m_continuousPhysics = a
    };
    q.prototype.GetBodyCount = function() {
        return this.m_bodyCount
    };
    q.prototype.GetJointCount = function() {
        return this.m_jointCount
    };
    q.prototype.GetContactCount = function() {
        return this.m_contactCount
    };
    q.prototype.SetGravity = function(a) {
        this.m_gravity = a
    };
    q.prototype.GetGravity = function() {
        return this.m_gravity
    };
    q.prototype.GetGroundBody = function() {
        return this.m_groundBody
    };
    q.prototype.Step = function(a, b, g) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === g && (g = 0);
        this.m_flags & q.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~q.e_newFixture);
        this.m_flags |= q.e_locked;
        var c = q.s_timestep2;
        c.dt = a;
        c.velocityIterations = b;
        c.positionIterations = g;
        c.inv_dt = 0 < a ? 1 / a: 0;
        c.dtRatio = this.m_inv_dt0 * a;
        c.warmStarting = q.m_warmStarting;
        this.m_contactManager.Collide();
        0 < c.dt && this.Solve(c);
        q.m_continuousPhysics && 0 < c.dt && this.SolveTOI(c);
        0 < c.dt && (this.m_inv_dt0 = c.inv_dt);
        this.m_flags &= ~q.e_locked
    };
    q.prototype.ClearForces = function() {
        for (var a = this.m_bodyList; a; a = a.m_next) a.m_force.SetZero(),
            a.m_torque = 0
    };
    q.prototype.DrawDebugData = function() {
        if (null != this.m_debugDraw) {
            this.m_debugDraw.m_sprite.graphics.clear();
            var a = this.m_debugDraw.GetFlags(),
                b,
                g;
            new d;
            new d;
            new d;
            new n;
            new n;
            new d;
            new d;
            new d;
            new d;
            var f = new h(0, 0, 0);
            if (a & z.e_shapeBit) for (b = this.m_bodyList; b; b = b.m_next) {
                var x = b.m_xf;
                for (g = b.GetFixtureList(); g; g = g.m_next) {
                    var k = g.GetShape();
                    0 == b.IsActive() ? f.Set(.5, .5, .3) : b.GetType() == e.b2_staticBody ? f.Set(.5, .9, .5) : b.GetType() == e.b2_kinematicBody ? f.Set(.5, .5, .9) : 0 == b.IsAwake() ? f.Set(.6, .6, .6) : f.Set(.9, .7, .7);
                    this.DrawShape(k, x, f)
                }
            }
            if (a & z.e_jointBit) for (b = this.m_jointList; b; b = b.m_next) this.DrawJoint(b);
            if (a & z.e_controllerBit) for (b = this.m_controllerList; b; b = b.m_next) b.Draw(this.m_debugDraw);
            if (a & z.e_pairBit) for (f.Set(.3, .9, .9), b = this.m_contactManager.m_contactList; b; b = b.GetNext()) k = b.GetFixtureA(),
                g = b.GetFixtureB(),
                k = k.GetAABB().GetCenter(),
                g = g.GetAABB().GetCenter(),
                this.m_debugDraw.DrawSegment(k, g, f);
            if (a & z.e_aabbBit) for (k = this.m_contactManager.m_broadPhase, x = [new d, new d, new d, new d], b = this.m_bodyList; b; b = b.GetNext()) if (0 != b.IsActive()) for (g = b.GetFixtureList(); g; g = g.GetNext()) {
                var C = k.GetFatAABB(g.m_proxy);
                x[0].Set(C.lowerBound.x, C.lowerBound.y);
                x[1].Set(C.upperBound.x, C.lowerBound.y);
                x[2].Set(C.upperBound.x, C.upperBound.y);
                x[3].Set(C.lowerBound.x, C.upperBound.y);
                this.m_debugDraw.DrawPolygon(x, 4, f)
            }
            if (a & z.e_centerOfMassBit) for (b = this.m_bodyList; b; b = b.m_next) x = q.s_xf,
                x.R = b.m_xf.R,
                x.position = b.GetWorldCenter(),
                this.m_debugDraw.DrawTransform(x)
        }
    };
    q.prototype.QueryAABB = function(a, b) {
        var c = this.m_contactManager.m_broadPhase;
        c.Query(function(b) {
                return a(c.GetUserData(b))
            },
            b)
    };
    q.prototype.QueryShape = function(a, b, g) {
        void 0 === g && (g = null);
        null == g && (g = new k, g.SetIdentity());
        var c = this.m_contactManager.m_broadPhase,
            d = new n;
        b.ComputeAABB(d, g);
        c.Query(function(d) {
                d = c.GetUserData(d) instanceof N ? c.GetUserData(d) : null;
                return G.TestOverlap(b, g, d.GetShape(), d.GetBody().GetTransform()) ? a(d) : !0
            },
            d)
    };
    q.prototype.QueryPoint = function(a, b) {
        var c = this.m_contactManager.m_broadPhase,
            g = new n;
        g.lowerBound.Set(b.x - f.b2_linearSlop, b.y - f.b2_linearSlop);
        g.upperBound.Set(b.x + f.b2_linearSlop, b.y + f.b2_linearSlop);
        c.Query(function(g) {
                g = c.GetUserData(g) instanceof N ? c.GetUserData(g) : null;
                return g.TestPoint(b) ? a(g) : !0
            },
            g)
    };
    q.prototype.RayCast = function(a, b, g) {
        var c = this.m_contactManager.m_broadPhase,
            e = new u,
            q = new y(b, g);
        c.RayCast(function(q, f) {
                var p = c.GetUserData(f);
                p = p instanceof N ? p: null;
                if (p.RayCast(e, q)) {
                    var x = e.fraction,
                        h = new d((1 - x) * b.x + x * g.x, (1 - x) * b.y + x * g.y);
                    return a(p, h, e.normal, x)
                }
                return q.maxFraction
            },
            q)
    };
    q.prototype.RayCastOne = function(a, b) {
        var c;
        this.RayCast(function(a, b, g, d) {
                void 0 === d && (d = 0);
                c = a;
                return d
            },
            a, b);
        return c
    };
    q.prototype.RayCastAll = function(a, b) {
        var c = new Vector;
        this.RayCast(function(a, b, g, d) {
                c[c.length] = a;
                return 1
            },
            a, b);
        return c
    };
    q.prototype.GetBodyList = function() {
        return this.m_bodyList
    };
    q.prototype.GetJointList = function() {
        return this.m_jointList
    };
    q.prototype.GetContactList = function() {
        return this.m_contactList
    };
    q.prototype.IsLocked = function() {
        return 0 < (this.m_flags & q.e_locked)
    };
    q.prototype.Solve = function(a) {
        for (var c, b = this.m_controllerList; b; b = b.m_next) b.Step(a);
        b = this.m_island;
        b.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~e.e_islandFlag;
        for (var g = this.m_contactList; g; g = g.m_next) g.m_flags &= ~I.e_islandFlag;
        for (g = this.m_jointList; g; g = g.m_next) g.m_islandFlag = !1;
        parseInt(this.m_bodyCount);
        g = this.s_stack;
        for (var d = this.m_bodyList; d; d = d.m_next) if (! (d.m_flags & e.e_islandFlag) && 0 != d.IsAwake() && 0 != d.IsActive() && d.GetType() != e.b2_staticBody) {
            b.Clear();
            var q = 0;
            g[q++] = d;
            for (d.m_flags |= e.e_islandFlag; 0 < q;) if (c = g[--q], b.AddBody(c), 0 == c.IsAwake() && c.SetAwake(!0), c.GetType() != e.b2_staticBody) {
                for (var f, x = c.m_contactList; x; x = x.next) x.contact.m_flags & I.e_islandFlag || 1 == x.contact.IsSensor() || 0 == x.contact.IsEnabled() || 0 == x.contact.IsTouching() || (b.AddContact(x.contact), x.contact.m_flags |= I.e_islandFlag, f = x.other, f.m_flags & e.e_islandFlag || (g[q++] = f, f.m_flags |= e.e_islandFlag));
                for (c = c.m_jointList; c; c = c.next) 1 != c.joint.m_islandFlag && (f = c.other, 0 != f.IsActive() && (b.AddJoint(c.joint), c.joint.m_islandFlag = !0, f.m_flags & e.e_islandFlag || (g[q++] = f, f.m_flags |= e.e_islandFlag)))
            }
            b.Solve(a, this.m_gravity, this.m_allowSleep);
            for (q = 0; q < b.m_bodyCount; ++q) c = b.m_bodies[q],
            c.GetType() == e.b2_staticBody && (c.m_flags &= ~e.e_islandFlag)
        }
        for (q = 0; q < g.length && g[q]; ++q) g[q] = null;
        for (c = this.m_bodyList; c; c = c.m_next) 0 != c.IsAwake() && 0 != c.IsActive() && c.GetType() != e.b2_staticBody && c.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts()
    };
    q.prototype.SolveTOI = function(a) {
        var c, b, g = this.m_island;
        g.Initialize(this.m_bodyCount, f.b2_maxTOIContactsPerIsland, f.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        var d = q.s_queue;
        for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~e.e_islandFlag,
            c.m_sweep.t0 = 0;
        for (b = this.m_contactList; b; b = b.m_next) b.m_flags &= ~ (I.e_toiFlag | I.e_islandFlag);
        for (b = this.m_jointList; b; b = b.m_next) b.m_islandFlag = !1;
        for (;;) {
            var x = null,
                h = 1;
            for (b = this.m_contactList; b; b = b.m_next) if (1 != b.IsSensor() && 0 != b.IsEnabled() && 0 != b.IsContinuous()) {
                if (b.m_flags & I.e_toiFlag) var k = b.m_toi;
                else {
                    k = b.m_fixtureA;
                    c = b.m_fixtureB;
                    k = k.m_body;
                    c = c.m_body;
                    if (! (k.GetType() == e.b2_dynamicBody && 0 != k.IsAwake() || c.GetType() == e.b2_dynamicBody && 0 != c.IsAwake())) continue;
                    var C = k.m_sweep.t0;
                    k.m_sweep.t0 < c.m_sweep.t0 ? (C = c.m_sweep.t0, k.m_sweep.Advance(C)) : c.m_sweep.t0 < k.m_sweep.t0 && (C = k.m_sweep.t0, c.m_sweep.Advance(C));
                    k = b.ComputeTOI(k.m_sweep, c.m_sweep);
                    f.b2Assert(0 <= k && 1 >= k);
                    0 < k && 1 > k && (k = (1 - k) * C + k, 1 < k && (k = 1));
                    b.m_toi = k;
                    b.m_flags |= I.e_toiFlag
                }
                Number.MIN_VALUE < k && k < h && (x = b, h = k)
            }
            if (null == x || 1 - 100 * Number.MIN_VALUE < h) break;
            k = x.m_fixtureA;
            c = x.m_fixtureB;
            k = k.m_body;
            c = c.m_body;
            q.s_backupA.Set(k.m_sweep);
            q.s_backupB.Set(c.m_sweep);
            k.Advance(h);
            c.Advance(h);
            x.Update(this.m_contactManager.m_contactListener);
            x.m_flags &= ~I.e_toiFlag;
            if (1 == x.IsSensor() || 0 == x.IsEnabled()) k.m_sweep.Set(q.s_backupA),
                c.m_sweep.Set(q.s_backupB),
                k.SynchronizeTransform(),
                c.SynchronizeTransform();
            else if (0 != x.IsTouching()) {
                k.GetType() != e.b2_dynamicBody && (k = c);
                g.Clear();
                x = b = 0;
                d[b + x++] = k;
                for (k.m_flags |= e.e_islandFlag; 0 < x;) if (c = d[b++], --x, g.AddBody(c), 0 == c.IsAwake() && c.SetAwake(!0), c.GetType() == e.b2_dynamicBody) {
                    for (C = c.m_contactList; C && g.m_contactCount != g.m_contactCapacity; C = C.next) C.contact.m_flags & I.e_islandFlag || 1 == C.contact.IsSensor() || 0 == C.contact.IsEnabled() || 0 == C.contact.IsTouching() || (g.AddContact(C.contact), C.contact.m_flags |= I.e_islandFlag, k = C.other, k.m_flags & e.e_islandFlag || (k.GetType() != e.b2_staticBody && (k.Advance(h), k.SetAwake(!0)), d[b + x] = k, ++x, k.m_flags |= e.e_islandFlag));
                    for (c = c.m_jointList; c; c = c.next) g.m_jointCount != g.m_jointCapacity && 1 != c.joint.m_islandFlag && (k = c.other, 0 != k.IsActive() && (g.AddJoint(c.joint), c.joint.m_islandFlag = !0, k.m_flags & e.e_islandFlag || (k.GetType() != e.b2_staticBody && (k.Advance(h), k.SetAwake(!0)), d[b + x] = k, ++x, k.m_flags |= e.e_islandFlag)))
                }
                b = q.s_timestep;
                b.warmStarting = !1;
                b.dt = (1 - h) * a.dt;
                b.inv_dt = 1 / b.dt;
                b.dtRatio = 0;
                b.velocityIterations = a.velocityIterations;
                b.positionIterations = a.positionIterations;
                g.SolveTOI(b);
                for (h = 0; h < g.m_bodyCount; ++h) if (c = g.m_bodies[h], c.m_flags &= ~e.e_islandFlag, 0 != c.IsAwake() && c.GetType() == e.b2_dynamicBody) for (c.SynchronizeFixtures(), C = c.m_contactList; C; C = C.next) C.contact.m_flags &= ~I.e_toiFlag;
                for (h = 0; h < g.m_contactCount; ++h) b = g.m_contacts[h],
                    b.m_flags &= ~ (I.e_toiFlag | I.e_islandFlag);
                for (h = 0; h < g.m_jointCount; ++h) b = g.m_joints[h],
                    b.m_islandFlag = !1;
                this.m_contactManager.FindNewContacts()
            }
        }
    };
    q.prototype.DrawJoint = function(a) {
        var c = a.GetBodyA(),
            b = a.GetBodyB(),
            g = c.m_xf.position,
            d = b.m_xf.position,
            e = a.GetAnchorA(),
            f = a.GetAnchorB(),
            x = q.s_jointColor;
        switch (a.m_type) {
            case Q.e_distanceJoint:
                this.m_debugDraw.DrawSegment(e, f, x);
                break;
            case Q.e_pulleyJoint:
                c = a instanceof R ? a: null;
                a = c.GetGroundAnchorA();
                c = c.GetGroundAnchorB();
                this.m_debugDraw.DrawSegment(a, e, x);
                this.m_debugDraw.DrawSegment(c, f, x);
                this.m_debugDraw.DrawSegment(a, c, x);
                break;
            case Q.e_mouseJoint:
                this.m_debugDraw.DrawSegment(e, f, x);
                break;
            default:
                c != this.m_groundBody && this.m_debugDraw.DrawSegment(g, e, x),
                    this.m_debugDraw.DrawSegment(e, f, x),
                b != this.m_groundBody && this.m_debugDraw.DrawSegment(d, f, x)
        }
    };
    q.prototype.DrawShape = function(a, g, d) {
        switch (a.m_type) {
            case G.e_circleShape:
                a = a instanceof B ? a: null;
                var c = b.MulX(g, a.m_p);
                this.m_debugDraw.DrawSolidCircle(c, a.m_radius, g.R.col1, d);
                break;
            case G.e_polygonShape:
                c = a instanceof F ? a: null;
                a = parseInt(c.GetVertexCount());
                var e = c.GetVertices(),
                    q = new Vector(a);
                for (c = 0; c < a; ++c) q[c] = b.MulX(g, e[c]);
                this.m_debugDraw.DrawSolidPolygon(q, a, d);
                break;
            case G.e_edgeShape:
                a = a instanceof t ? a: null,
                    this.m_debugDraw.DrawSegment(b.MulX(g, a.GetVertex1()), b.MulX(g, a.GetVertex2()), d)
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2World.s_timestep2 = new g;
        Box2D.Dynamics.b2World.s_xf = new k;
        Box2D.Dynamics.b2World.s_backupA = new l;
        Box2D.Dynamics.b2World.s_backupB = new l;
        Box2D.Dynamics.b2World.s_timestep = new g;
        Box2D.Dynamics.b2World.s_queue = new Vector;
        Box2D.Dynamics.b2World.s_jointColor = new h(.5, .8, .8);
        Box2D.Dynamics.b2World.e_newFixture = 1;
        Box2D.Dynamics.b2World.e_locked = 2
    })
})(); (function() {
    var b = Box2D.Collision.Shapes.b2CircleShape,
        l = Box2D.Collision.Shapes.b2EdgeShape,
        k = Box2D.Collision.Shapes.b2PolygonShape,
        d = Box2D.Collision.Shapes.b2Shape,
        h = Box2D.Dynamics.Contacts.b2CircleContact,
        f = Box2D.Dynamics.Contacts.b2Contact,
        n = Box2D.Dynamics.Contacts.b2ContactConstraint,
        a = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
        m = Box2D.Dynamics.Contacts.b2ContactEdge,
        y = Box2D.Dynamics.Contacts.b2ContactFactory,
        u = Box2D.Dynamics.Contacts.b2ContactRegister,
        B = Box2D.Dynamics.Contacts.b2ContactResult,
        t = Box2D.Dynamics.Contacts.b2ContactSolver,
        r = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
        F = Box2D.Dynamics.Contacts.b2NullContact,
        G = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
        e = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
        A = Box2D.Dynamics.Contacts.b2PolygonContact,
        v = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
        M = Box2D.Dynamics.b2Body,
        E = Box2D.Dynamics.b2TimeStep,
        P = Box2D.Common.b2Settings,
        z = Box2D.Common.Math.b2Mat22,
        O = Box2D.Common.Math.b2Math,
        K = Box2D.Common.Math.b2Vec2,
        N = Box2D.Collision.b2Collision,
        J = Box2D.Collision.b2ContactID,
        L = Box2D.Collision.b2Manifold,
        g = Box2D.Collision.b2TimeOfImpact,
        q = Box2D.Collision.b2TOIInput,
        I = Box2D.Collision.b2WorldManifold;
    Box2D.inherit(h, Box2D.Dynamics.Contacts.b2Contact);
    h.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    h.b2CircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    h.Create = function(a) {
        return new h
    };
    h.Destroy = function(a, b) {};
    h.prototype.Reset = function(a, b) {
        this.__super.Reset.call(this, a, b)
    };
    h.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody(),
            g = this.m_fixtureB.GetBody();
        N.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof b ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, g.m_xf)
    };
    f.b2Contact = function() {
        this.m_nodeA = new m;
        this.m_nodeB = new m;
        this.m_manifold = new L;
        this.m_oldManifold = new L
    };
    f.prototype.GetManifold = function() {
        return this.m_manifold
    };
    f.prototype.GetWorldManifold = function(a) {
        var b = this.m_fixtureA.GetBody(),
            g = this.m_fixtureB.GetBody(),
            d = this.m_fixtureA.GetShape(),
            c = this.m_fixtureB.GetShape();
        a.Initialize(this.m_manifold, b.GetTransform(), d.m_radius, g.GetTransform(), c.m_radius)
    };
    f.prototype.IsTouching = function() {
        return (this.m_flags & f.e_touchingFlag) == f.e_touchingFlag
    };
    f.prototype.IsContinuous = function() {
        return (this.m_flags & f.e_continuousFlag) == f.e_continuousFlag
    };
    f.prototype.SetSensor = function(a) {
        this.m_flags = a ? this.m_flags | f.e_sensorFlag: this.m_flags & ~f.e_sensorFlag
    };
    f.prototype.IsSensor = function() {
        return (this.m_flags & f.e_sensorFlag) == f.e_sensorFlag
    };
    f.prototype.SetEnabled = function(a) {
        this.m_flags = a ? this.m_flags | f.e_enabledFlag: this.m_flags & ~f.e_enabledFlag
    };
    f.prototype.IsEnabled = function() {
        return (this.m_flags & f.e_enabledFlag) == f.e_enabledFlag
    };
    f.prototype.GetNext = function() {
        return this.m_next
    };
    f.prototype.GetFixtureA = function() {
        return this.m_fixtureA
    };
    f.prototype.GetFixtureB = function() {
        return this.m_fixtureB
    };
    f.prototype.FlagForFiltering = function() {
        this.m_flags |= f.e_filterFlag
    };
    f.prototype.b2Contact = function() {};
    f.prototype.Reset = function(a, b) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        this.m_flags = f.e_enabledFlag;
        if (a && b) {
            if (a.IsSensor() || b.IsSensor()) this.m_flags |= f.e_sensorFlag;
            var g = a.GetBody(),
                d = b.GetBody();
            if (g.GetType() != M.b2_dynamicBody || g.IsBullet() || d.GetType() != M.b2_dynamicBody || d.IsBullet()) this.m_flags |= f.e_continuousFlag;
            this.m_fixtureA = a;
            this.m_fixtureB = b;
            this.m_manifold.m_pointCount = 0;
            this.m_next = this.m_prev = null;
            this.m_nodeA.contact = null;
            this.m_nodeA.prev = null;
            this.m_nodeA.next = null;
            this.m_nodeA.other = null;
            this.m_nodeB.contact = null;
            this.m_nodeB.prev = null;
            this.m_nodeB.next = null;
            this.m_nodeB.other = null
        } else this.m_fixtureB = this.m_fixtureA = null
    };
    f.prototype.Update = function(a) {
        var b = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold;
        this.m_manifold = b;
        this.m_flags |= f.e_enabledFlag;
        var g = !1;
        b = (this.m_flags & f.e_touchingFlag) == f.e_touchingFlag;
        var e = this.m_fixtureA.m_body,
            c = this.m_fixtureB.m_body,
            q = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & f.e_sensorFlag) q && (g = this.m_fixtureA.GetShape(), q = this.m_fixtureB.GetShape(), e = e.GetTransform(), c = c.GetTransform(), g = d.TestOverlap(g, e, q, c)),
            this.m_manifold.m_pointCount = 0;
        else {
            e.GetType() != M.b2_dynamicBody || e.IsBullet() || c.GetType() != M.b2_dynamicBody || c.IsBullet() ? this.m_flags |= f.e_continuousFlag: this.m_flags &= ~f.e_continuousFlag;
            if (q) for (this.Evaluate(), g = 0 < this.m_manifold.m_pointCount, q = 0; q < this.m_manifold.m_pointCount; ++q) {
                var x = this.m_manifold.m_points[q];
                x.m_normalImpulse = 0;
                x.m_tangentImpulse = 0;
                for (var h = x.m_id,
                         k = 0; k < this.m_oldManifold.m_pointCount; ++k) {
                    var l = this.m_oldManifold.m_points[k];
                    if (l.m_id.key == h.key) {
                        x.m_normalImpulse = l.m_normalImpulse;
                        x.m_tangentImpulse = l.m_tangentImpulse;
                        break
                    }
                }
            } else this.m_manifold.m_pointCount = 0;
            g != b && (e.SetAwake(!0), c.SetAwake(!0))
        }
        this.m_flags = g ? this.m_flags | f.e_touchingFlag: this.m_flags & ~f.e_touchingFlag;
        0 == b && 1 == g && a.BeginContact(this);
        1 == b && 0 == g && a.EndContact(this);
        0 == (this.m_flags & f.e_sensorFlag) && a.PreSolve(this, this.m_oldManifold)
    };
    f.prototype.Evaluate = function() {};
    f.prototype.ComputeTOI = function(a, b) {
        f.s_input.proxyA.Set(this.m_fixtureA.GetShape());
        f.s_input.proxyB.Set(this.m_fixtureB.GetShape());
        f.s_input.sweepA = a;
        f.s_input.sweepB = b;
        f.s_input.tolerance = P.b2_linearSlop;
        return g.TimeOfImpact(f.s_input)
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
        Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
        Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
        Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
        Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
        Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
        Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
        Box2D.Dynamics.Contacts.b2Contact.s_input = new q
    });
    n.b2ContactConstraint = function() {
        this.localPlaneNormal = new K;
        this.localPoint = new K;
        this.normal = new K;
        this.normalMass = new z;
        this.K = new z
    };
    n.prototype.b2ContactConstraint = function() {
        this.points = new Vector(P.b2_maxManifoldPoints);
        for (var b = 0; b < P.b2_maxManifoldPoints; b++) this.points[b] = new a
    };
    a.b2ContactConstraintPoint = function() {
        this.localPoint = new K;
        this.rA = new K;
        this.rB = new K
    };
    m.b2ContactEdge = function() {};
    y.b2ContactFactory = function() {};
    y.prototype.b2ContactFactory = function(a) {
        this.m_allocator = a;
        this.InitializeRegisters()
    };
    y.prototype.AddType = function(a, b, g, d) {
        void 0 === g && (g = 0);
        void 0 === d && (d = 0);
        this.m_registers[g][d].createFcn = a;
        this.m_registers[g][d].destroyFcn = b;
        this.m_registers[g][d].primary = !0;
        g != d && (this.m_registers[d][g].createFcn = a, this.m_registers[d][g].destroyFcn = b, this.m_registers[d][g].primary = !1)
    };
    y.prototype.InitializeRegisters = function() {
        this.m_registers = new Vector(d.e_shapeTypeCount);
        for (var a = 0; a < d.e_shapeTypeCount; a++) {
            this.m_registers[a] = new Vector(d.e_shapeTypeCount);
            for (var b = 0; b < d.e_shapeTypeCount; b++) this.m_registers[a][b] = new u
        }
        this.AddType(h.Create, h.Destroy, d.e_circleShape, d.e_circleShape);
        this.AddType(G.Create, G.Destroy, d.e_polygonShape, d.e_circleShape);
        this.AddType(A.Create, A.Destroy, d.e_polygonShape, d.e_polygonShape);
        this.AddType(r.Create, r.Destroy, d.e_edgeShape, d.e_circleShape);
        this.AddType(e.Create, e.Destroy, d.e_polygonShape, d.e_edgeShape)
    };
    y.prototype.Create = function(a, b) {
        var g = parseInt(a.GetType()),
            d = parseInt(b.GetType());
        g = this.m_registers[g][d];
        if (g.pool) return d = g.pool,
            g.pool = d.m_next,
            g.poolCount--,
            d.Reset(a, b),
            d;
        d = g.createFcn;
        return null != d ? (g.primary ? (d = d(this.m_allocator), d.Reset(a, b)) : (d = d(this.m_allocator), d.Reset(b, a)), d) : null
    };
    y.prototype.Destroy = function(a) {
        0 < a.m_manifold.m_pointCount && (a.m_fixtureA.m_body.SetAwake(!0), a.m_fixtureB.m_body.SetAwake(!0));
        var b = parseInt(a.m_fixtureA.GetType()),
            g = parseInt(a.m_fixtureB.GetType());
        b = this.m_registers[b][g];
        b.poolCount++;
        a.m_next = b.pool;
        b.pool = a;
        b = b.destroyFcn;
        b(a, this.m_allocator)
    };
    u.b2ContactRegister = function() {};
    B.b2ContactResult = function() {
        this.position = new K;
        this.normal = new K;
        this.id = new J
    };
    t.b2ContactSolver = function() {
        this.m_step = new E;
        this.m_constraints = new Vector
    };
    t.prototype.b2ContactSolver = function() {};
    t.prototype.Initialize = function(a, b, g, d) {
        void 0 === g && (g = 0);
        this.m_step.Set(a);
        this.m_allocator = d;
        for (this.m_constraintCount = g; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new n;
        for (a = 0; a < g; ++a) {
            var c = b[a];
            d = c.m_fixtureA;
            var e = c.m_fixtureB,
                q = d.m_shape.m_radius,
                f = e.m_shape.m_radius,
                x = d.m_body,
                h = e.m_body,
                k = c.GetManifold(),
                C = P.b2MixFriction(d.GetFriction(), e.GetFriction()),
                l = P.b2MixRestitution(d.GetRestitution(), e.GetRestitution()),
                m = x.m_linearVelocity.x,
                I = x.m_linearVelocity.y,
                Q = h.m_linearVelocity.x,
                R = h.m_linearVelocity.y,
                r = x.m_angularVelocity,
                v = h.m_angularVelocity;
            P.b2Assert(0 < k.m_pointCount);
            t.s_worldManifold.Initialize(k, x.m_xf, q, h.m_xf, f);
            e = t.s_worldManifold.m_normal.x;
            c = t.s_worldManifold.m_normal.y;
            d = this.m_constraints[a];
            d.bodyA = x;
            d.bodyB = h;
            d.manifold = k;
            d.normal.x = e;
            d.normal.y = c;
            d.pointCount = k.m_pointCount;
            d.friction = C;
            d.restitution = l;
            d.localPlaneNormal.x = k.m_localPlaneNormal.x;
            d.localPlaneNormal.y = k.m_localPlaneNormal.y;
            d.localPoint.x = k.m_localPoint.x;
            d.localPoint.y = k.m_localPoint.y;
            d.radius = q + f;
            d.type = k.m_type;
            for (q = 0; q < d.pointCount; ++q) {
                C = k.m_points[q];
                f = d.points[q];
                f.normalImpulse = C.m_normalImpulse;
                f.tangentImpulse = C.m_tangentImpulse;
                f.localPoint.SetV(C.m_localPoint);
                C = f.rA.x = t.s_worldManifold.m_points[q].x - x.m_sweep.c.x;
                l = f.rA.y = t.s_worldManifold.m_points[q].y - x.m_sweep.c.y;
                var z = f.rB.x = t.s_worldManifold.m_points[q].x - h.m_sweep.c.x,
                    u = f.rB.y = t.s_worldManifold.m_points[q].y - h.m_sweep.c.y,
                    B = C * c - l * e,
                    A = z * c - u * e;
                B *= B;
                A *= A;
                f.normalMass = 1 / (x.m_invMass + h.m_invMass + x.m_invI * B + h.m_invI * A);
                var y = x.m_mass * x.m_invMass + h.m_mass * h.m_invMass;
                y += x.m_mass * x.m_invI * B + h.m_mass * h.m_invI * A;
                f.equalizedMass = 1 / y;
                A = c;
                y = -e;
                B = C * y - l * A;
                A = z * y - u * A;
                B *= B;
                A *= A;
                f.tangentMass = 1 / (x.m_invMass + h.m_invMass + x.m_invI * B + h.m_invI * A);
                f.velocityBias = 0;
                C = d.normal.x * (Q + -v * u - m - -r * l) + d.normal.y * (R + v * z - I - r * C);
                C < -P.b2_velocityThreshold && (f.velocityBias += -d.restitution * C)
            }
            2 == d.pointCount && (R = d.points[0], Q = d.points[1], k = x.m_invMass, x = x.m_invI, m = h.m_invMass, h = h.m_invI, I = R.rA.x * c - R.rA.y * e, R = R.rB.x * c - R.rB.y * e, r = Q.rA.x * c - Q.rA.y * e, Q = Q.rB.x * c - Q.rB.y * e, e = k + m + x * I * I + h * R * R, c = k + m + x * r * r + h * Q * Q, h = k + m + x * I * r + h * R * Q, e * e < 100 * (e * c - h * h) ? (d.K.col1.Set(e, h), d.K.col2.Set(h, c), d.K.GetInverse(d.normalMass)) : d.pointCount = 1)
        }
    };
    t.prototype.InitVelocityConstraints = function(a) {
        for (var b = 0; b < this.m_constraintCount; ++b) {
            var g = this.m_constraints[b],
                d = g.bodyA,
                c = g.bodyB,
                e = d.m_invMass,
                q = d.m_invI,
                f = c.m_invMass,
                x = c.m_invI,
                h = g.normal.x,
                k = g.normal.y,
                l = k,
                m = -h,
                I;
            if (a.warmStarting) {
                var n = g.pointCount;
                for (I = 0; I < n; ++I) {
                    var r = g.points[I];
                    r.normalImpulse *= a.dtRatio;
                    r.tangentImpulse *= a.dtRatio;
                    var t = r.normalImpulse * h + r.tangentImpulse * l,
                        v = r.normalImpulse * k + r.tangentImpulse * m;
                    d.m_angularVelocity -= q * (r.rA.x * v - r.rA.y * t);
                    d.m_linearVelocity.x -= e * t;
                    d.m_linearVelocity.y -= e * v;
                    c.m_angularVelocity += x * (r.rB.x * v - r.rB.y * t);
                    c.m_linearVelocity.x += f * t;
                    c.m_linearVelocity.y += f * v
                }
            } else for (n = g.pointCount, I = 0; I < n; ++I) d = g.points[I],
                d.normalImpulse = 0,
                d.tangentImpulse = 0
        }
    };
    t.prototype.SolveVelocityConstraints = function() {
        for (var a, b, g, d, c, e, q, f, h, k, l = 0; l < this.m_constraintCount; ++l) {
            c = this.m_constraints[l];
            var I = c.bodyA,
                m = c.bodyB,
                n = I.m_angularVelocity,
                r = m.m_angularVelocity,
                t = I.m_linearVelocity,
                v = m.m_linearVelocity,
                z = I.m_invMass,
                B = I.m_invI,
                u = m.m_invMass,
                A = m.m_invI;
            f = c.normal.x;
            var y = h = c.normal.y;
            k = -f;
            q = c.friction;
            for (a = 0; a < c.pointCount; a++) b = c.points[a],
                g = v.x - r * b.rB.y - t.x + n * b.rA.y,
                d = v.y + r * b.rB.x - t.y - n * b.rA.x,
                g = g * y + d * k,
                g = b.tangentMass * -g,
                d = q * b.normalImpulse,
                d = O.Clamp(b.tangentImpulse + g, -d, d),
                g = d - b.tangentImpulse,
                e = g * y,
                g *= k,
                t.x -= z * e,
                t.y -= z * g,
                n -= B * (b.rA.x * g - b.rA.y * e),
                v.x += u * e,
                v.y += u * g,
                r += A * (b.rB.x * g - b.rB.y * e),
                b.tangentImpulse = d;
            parseInt(c.pointCount);
            if (1 == c.pointCount) b = c.points[0],
                g = v.x + -r * b.rB.y - t.x - -n * b.rA.y,
                d = v.y + r * b.rB.x - t.y - n * b.rA.x,
                c = g * f + d * h,
                g = -b.normalMass * (c - b.velocityBias),
                d = b.normalImpulse + g,
                d = 0 < d ? d: 0,
                g = d - b.normalImpulse,
                e = g * f,
                g *= h,
                t.x -= z * e,
                t.y -= z * g,
                n -= B * (b.rA.x * g - b.rA.y * e),
                v.x += u * e,
                v.y += u * g,
                r += A * (b.rB.x * g - b.rB.y * e),
                b.normalImpulse = d;
            else {
                b = c.points[0];
                a = c.points[1];
                g = b.normalImpulse;
                q = a.normalImpulse;
                var E = (v.x - r * b.rB.y - t.x + n * b.rA.y) * f + (v.y + r * b.rB.x - t.y - n * b.rA.x) * h,
                    F = (v.x - r * a.rB.y - t.x + n * a.rA.y) * f + (v.y + r * a.rB.x - t.y - n * a.rA.x) * h;
                d = E - b.velocityBias;
                e = F - a.velocityBias;
                k = c.K;
                d -= k.col1.x * g + k.col2.x * q;
                for (e -= k.col1.y * g + k.col2.y * q;;) {
                    k = c.normalMass;
                    y = -(k.col1.x * d + k.col2.x * e);
                    k = -(k.col1.y * d + k.col2.y * e);
                    if (0 <= y && 0 <= k) {
                        g = y - g;
                        q = k - q;
                        c = g * f;
                        g *= h;
                        f *= q;
                        h *= q;
                        t.x -= z * (c + f);
                        t.y -= z * (g + h);
                        n -= B * (b.rA.x * g - b.rA.y * c + a.rA.x * h - a.rA.y * f);
                        v.x += u * (c + f);
                        v.y += u * (g + h);
                        r += A * (b.rB.x * g - b.rB.y * c + a.rB.x * h - a.rB.y * f);
                        b.normalImpulse = y;
                        a.normalImpulse = k;
                        break
                    }
                    y = -b.normalMass * d;
                    k = 0;
                    F = c.K.col1.y * y + e;
                    if (0 <= y && 0 <= F) {
                        g = y - g;
                        q = k - q;
                        c = g * f;
                        g *= h;
                        f *= q;
                        h *= q;
                        t.x -= z * (c + f);
                        t.y -= z * (g + h);
                        n -= B * (b.rA.x * g - b.rA.y * c + a.rA.x * h - a.rA.y * f);
                        v.x += u * (c + f);
                        v.y += u * (g + h);
                        r += A * (b.rB.x * g - b.rB.y * c + a.rB.x * h - a.rB.y * f);
                        b.normalImpulse = y;
                        a.normalImpulse = k;
                        break
                    }
                    y = 0;
                    k = -a.normalMass * e;
                    E = c.K.col2.x * k + d;
                    if (0 <= k && 0 <= E) {
                        g = y - g;
                        q = k - q;
                        c = g * f;
                        g *= h;
                        f *= q;
                        h *= q;
                        t.x -= z * (c + f);
                        t.y -= z * (g + h);
                        n -= B * (b.rA.x * g - b.rA.y * c + a.rA.x * h - a.rA.y * f);
                        v.x += u * (c + f);
                        v.y += u * (g + h);
                        r += A * (b.rB.x * g - b.rB.y * c + a.rB.x * h - a.rB.y * f);
                        b.normalImpulse = y;
                        a.normalImpulse = k;
                        break
                    }
                    k = y = 0;
                    E = d;
                    F = e;
                    if (0 <= E && 0 <= F) {
                        g = y - g;
                        q = k - q;
                        c = g * f;
                        g *= h;
                        f *= q;
                        h *= q;
                        t.x -= z * (c + f);
                        t.y -= z * (g + h);
                        n -= B * (b.rA.x * g - b.rA.y * c + a.rA.x * h - a.rA.y * f);
                        v.x += u * (c + f);
                        v.y += u * (g + h);
                        r += A * (b.rB.x * g - b.rB.y * c + a.rB.x * h - a.rB.y * f);
                        b.normalImpulse = y;
                        a.normalImpulse = k;
                        break
                    }
                    break
                }
            }
            I.m_angularVelocity = n;
            m.m_angularVelocity = r
        }
    };
    t.prototype.FinalizeVelocityConstraints = function() {
        for (var a = 0; a < this.m_constraintCount; ++a) for (var b = this.m_constraints[a], g = b.manifold, d = 0; d < b.pointCount; ++d) {
            var c = g.m_points[d],
                e = b.points[d];
            c.m_normalImpulse = e.normalImpulse;
            c.m_tangentImpulse = e.tangentImpulse
        }
    };
    t.prototype.SolvePositionConstraints = function(a) {
        void 0 === a && (a = 0);
        for (var b = 0,
                 g = 0; g < this.m_constraintCount; g++) {
            var d = this.m_constraints[g],
                c = d.bodyA,
                e = d.bodyB,
                q = c.m_mass * c.m_invMass,
                f = c.m_mass * c.m_invI,
                h = e.m_mass * e.m_invMass,
                x = e.m_mass * e.m_invI;
            t.s_psm.Initialize(d);
            for (var k = t.s_psm.m_normal,
                     l = 0; l < d.pointCount; l++) {
                var I = d.points[l],
                    m = t.s_psm.m_points[l],
                    n = t.s_psm.m_separations[l],
                    r = m.x - c.m_sweep.c.x,
                    v = m.y - c.m_sweep.c.y,
                    z = m.x - e.m_sweep.c.x;
                m = m.y - e.m_sweep.c.y;
                b = b < n ? b: n;
                n = O.Clamp(a * (n + P.b2_linearSlop), -P.b2_maxLinearCorrection, 0);
                n *= -I.equalizedMass;
                I = n * k.x;
                n *= k.y;
                c.m_sweep.c.x -= q * I;
                c.m_sweep.c.y -= q * n;
                c.m_sweep.a -= f * (r * n - v * I);
                c.SynchronizeTransform();
                e.m_sweep.c.x += h * I;
                e.m_sweep.c.y += h * n;
                e.m_sweep.a += x * (z * n - m * I);
                e.SynchronizeTransform()
            }
        }
        return b > -1.5 * P.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new I;
        Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new v
    });
    Box2D.inherit(r, Box2D.Dynamics.Contacts.b2Contact);
    r.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    r.b2EdgeAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    r.Create = function(a) {
        return new r
    };
    r.Destroy = function(a, b) {};
    r.prototype.Reset = function(a, b) {
        this.__super.Reset.call(this, a, b)
    };
    r.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody(),
            g = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof l ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, g.m_xf)
    };
    r.prototype.b2CollideEdgeAndCircle = function(a, b, g, d, c) {};
    Box2D.inherit(F, Box2D.Dynamics.Contacts.b2Contact);
    F.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    F.b2NullContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    F.prototype.b2NullContact = function() {
        this.__super.b2Contact.call(this)
    };
    F.prototype.Evaluate = function() {};
    Box2D.inherit(G, Box2D.Dynamics.Contacts.b2Contact);
    G.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    G.b2PolyAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    G.Create = function(a) {
        return new G
    };
    G.Destroy = function(a, b) {};
    G.prototype.Reset = function(a, b) {
        this.__super.Reset.call(this, a, b);
        P.b2Assert(a.GetType() == d.e_polygonShape);
        P.b2Assert(b.GetType() == d.e_circleShape)
    };
    G.prototype.Evaluate = function() {
        var a = this.m_fixtureA.m_body,
            g = this.m_fixtureB.m_body;
        N.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof k ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, g.m_xf)
    };
    Box2D.inherit(e, Box2D.Dynamics.Contacts.b2Contact);
    e.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    e.b2PolyAndEdgeContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    e.Create = function(a) {
        return new e
    };
    e.Destroy = function(a, b) {};
    e.prototype.Reset = function(a, b) {
        this.__super.Reset.call(this, a, b);
        P.b2Assert(a.GetType() == d.e_polygonShape);
        P.b2Assert(b.GetType() == d.e_edgeShape)
    };
    e.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody(),
            b = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof k ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof l ? this.m_fixtureB.GetShape() : null, b.m_xf)
    };
    e.prototype.b2CollidePolyAndEdge = function(a, b, g, d, c) {};
    Box2D.inherit(A, Box2D.Dynamics.Contacts.b2Contact);
    A.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    A.b2PolygonContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    A.Create = function(a) {
        return new A
    };
    A.Destroy = function(a, b) {};
    A.prototype.Reset = function(a, b) {
        this.__super.Reset.call(this, a, b)
    };
    A.prototype.Evaluate = function() {
        var a = this.m_fixtureA.GetBody(),
            b = this.m_fixtureB.GetBody();
        N.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof k ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof k ? this.m_fixtureB.GetShape() : null, b.m_xf)
    };
    v.b2PositionSolverManifold = function() {};
    v.prototype.b2PositionSolverManifold = function() {
        this.m_normal = new K;
        this.m_separations = new Vector_a2j_Number(P.b2_maxManifoldPoints);
        this.m_points = new Vector(P.b2_maxManifoldPoints);
        for (var a = 0; a < P.b2_maxManifoldPoints; a++) this.m_points[a] = new K
    };
    v.prototype.Initialize = function(a) {
        P.b2Assert(0 < a.pointCount);
        switch (a.type) {
            case L.e_circles:
                var b = a.bodyA.m_xf.R;
                var g = a.localPoint;
                var d = a.bodyA.m_xf.position.x + (b.col1.x * g.x + b.col2.x * g.y);
                var c = a.bodyA.m_xf.position.y + (b.col1.y * g.x + b.col2.y * g.y);
                b = a.bodyB.m_xf.R;
                g = a.points[0].localPoint;
                var e = a.bodyB.m_xf.position.x + (b.col1.x * g.x + b.col2.x * g.y);
                b = a.bodyB.m_xf.position.y + (b.col1.y * g.x + b.col2.y * g.y);
                g = e - d;
                var q = b - c;
                var f = g * g + q * q;
                f > Number.MIN_VALUE * Number.MIN_VALUE ? (f = Math.sqrt(f), this.m_normal.x = g / f, this.m_normal.y = q / f) : (this.m_normal.x = 1, this.m_normal.y = 0);
                this.m_points[0].x = .5 * (d + e);
                this.m_points[0].y = .5 * (c + b);
                this.m_separations[0] = g * this.m_normal.x + q * this.m_normal.y - a.radius;
                break;
            case L.e_faceA:
                b = a.bodyA.m_xf.R;
                g = a.localPlaneNormal;
                this.m_normal.x = b.col1.x * g.x + b.col2.x * g.y;
                this.m_normal.y = b.col1.y * g.x + b.col2.y * g.y;
                b = a.bodyA.m_xf.R;
                g = a.localPoint;
                e = a.bodyA.m_xf.position.x + (b.col1.x * g.x + b.col2.x * g.y);
                q = a.bodyA.m_xf.position.y + (b.col1.y * g.x + b.col2.y * g.y);
                b = a.bodyB.m_xf.R;
                for (d = 0; d < a.pointCount; ++d) g = a.points[d].localPoint,
                    c = a.bodyB.m_xf.position.x + (b.col1.x * g.x + b.col2.x * g.y),
                    g = a.bodyB.m_xf.position.y + (b.col1.y * g.x + b.col2.y * g.y),
                    this.m_separations[d] = (c - e) * this.m_normal.x + (g - q) * this.m_normal.y - a.radius,
                    this.m_points[d].x = c,
                    this.m_points[d].y = g;
                break;
            case L.e_faceB:
                b = a.bodyB.m_xf.R;
                g = a.localPlaneNormal;
                this.m_normal.x = b.col1.x * g.x + b.col2.x * g.y;
                this.m_normal.y = b.col1.y * g.x + b.col2.y * g.y;
                b = a.bodyB.m_xf.R;
                g = a.localPoint;
                e = a.bodyB.m_xf.position.x + (b.col1.x * g.x + b.col2.x * g.y);
                q = a.bodyB.m_xf.position.y + (b.col1.y * g.x + b.col2.y * g.y);
                b = a.bodyA.m_xf.R;
                for (d = 0; d < a.pointCount; ++d) g = a.points[d].localPoint,
                    c = a.bodyA.m_xf.position.x + (b.col1.x * g.x + b.col2.x * g.y),
                    g = a.bodyA.m_xf.position.y + (b.col1.y * g.x + b.col2.y * g.y),
                    this.m_separations[d] = (c - e) * this.m_normal.x + (g - q) * this.m_normal.y - a.radius,
                    this.m_points[d].Set(c, g);
                this.m_normal.x *= -1;
                this.m_normal.y *= -1
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new K;
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new K
    })
})(); (function() {
    var b = Box2D.Common.Math.b2Mat22,
        l = Box2D.Common.Math.b2Math,
        k = Box2D.Common.Math.b2Vec2,
        d = Box2D.Common.b2Color,
        h = Box2D.Dynamics.Controllers.b2BuoyancyController,
        f = Box2D.Dynamics.Controllers.b2ConstantAccelController,
        n = Box2D.Dynamics.Controllers.b2ConstantForceController,
        a = Box2D.Dynamics.Controllers.b2Controller,
        m = Box2D.Dynamics.Controllers.b2ControllerEdge,
        y = Box2D.Dynamics.Controllers.b2GravityController,
        u = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(h, Box2D.Dynamics.Controllers.b2Controller);
    h.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    h.b2BuoyancyController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.normal = new k(0, -1);
        this.density = this.offset = 0;
        this.velocity = new k(0, 0);
        this.linearDrag = 2;
        this.angularDrag = 1;
        this.useDensity = !1;
        this.useWorldGravity = !0;
        this.gravity = null
    };
    h.prototype.Step = function(a) {
        if (this.m_bodyList) for (this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy()), a = this.m_bodyList; a; a = a.nextBody) {
            var b = a.body;
            if (0 != b.IsAwake()) {
                for (var d = new k,
                         f = new k,
                         h = 0,
                         e = 0,
                         l = b.GetFixtureList(); l; l = l.GetNext()) {
                    var m = new k,
                        n = l.GetShape().ComputeSubmergedArea(this.normal, this.offset, b.GetTransform(), m);
                    h += n;
                    d.x += n * m.x;
                    d.y += n * m.y;
                    e += 1 * n;
                    f.x += n * m.x * 1;
                    f.y += n * m.y * 1
                }
                d.x /= h;
                d.y /= h;
                f.x /= e;
                f.y /= e;
                h < Number.MIN_VALUE || (e = this.gravity.GetNegative(), e.Multiply(this.density * h), b.ApplyForce(e, f), f = b.GetLinearVelocityFromWorldPoint(d), f.Subtract(this.velocity), f.Multiply( - this.linearDrag * h), b.ApplyForce(f, d), b.ApplyTorque( - b.GetInertia() / b.GetMass() * h * b.GetAngularVelocity() * this.angularDrag))
            }
        }
    };
    h.prototype.Draw = function(a) {
        var b = new k,
            f = new k;
        b.x = this.normal.x * this.offset + 1E3 * this.normal.y;
        b.y = this.normal.y * this.offset - 1E3 * this.normal.x;
        f.x = this.normal.x * this.offset - 1E3 * this.normal.y;
        f.y = this.normal.y * this.offset + 1E3 * this.normal.x;
        var h = new d(0, 0, 1);
        a.DrawSegment(b, f, h)
    };
    Box2D.inherit(f, Box2D.Dynamics.Controllers.b2Controller);
    f.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    f.b2ConstantAccelController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.A = new k(0, 0)
    };
    f.prototype.Step = function(a) {
        a = new k(this.A.x * a.dt, this.A.y * a.dt);
        for (var b = this.m_bodyList; b; b = b.nextBody) {
            var d = b.body;
            d.IsAwake() && d.SetLinearVelocity(new k(d.GetLinearVelocity().x + a.x, d.GetLinearVelocity().y + a.y))
        }
    };
    Box2D.inherit(n, Box2D.Dynamics.Controllers.b2Controller);
    n.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    n.b2ConstantForceController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.F = new k(0, 0)
    };
    n.prototype.Step = function(a) {
        for (a = this.m_bodyList; a; a = a.nextBody) {
            var b = a.body;
            b.IsAwake() && b.ApplyForce(this.F, b.GetWorldCenter())
        }
    };
    a.b2Controller = function() {};
    a.prototype.Step = function(a) {};
    a.prototype.Draw = function(a) {};
    a.prototype.AddBody = function(a) {
        var b = new m;
        b.controller = this;
        b.body = a;
        b.nextBody = this.m_bodyList;
        b.prevBody = null;
        this.m_bodyList = b;
        b.nextBody && (b.nextBody.prevBody = b);
        this.m_bodyCount++;
        b.nextController = a.m_controllerList;
        b.prevController = null;
        a.m_controllerList = b;
        b.nextController && (b.nextController.prevController = b);
        a.m_controllerCount++
    };
    a.prototype.RemoveBody = function(a) {
        for (var b = a.m_controllerList; b && b.controller != this;) b = b.nextController;
        b.prevBody && (b.prevBody.nextBody = b.nextBody);
        b.nextBody && (b.nextBody.prevBody = b.prevBody);
        b.nextController && (b.nextController.prevController = b.prevController);
        b.prevController && (b.prevController.nextController = b.nextController);
        this.m_bodyList == b && (this.m_bodyList = b.nextBody);
        a.m_controllerList == b && (a.m_controllerList = b.nextController);
        a.m_controllerCount--;
        this.m_bodyCount--
    };
    a.prototype.Clear = function() {
        for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body)
    };
    a.prototype.GetNext = function() {
        return this.m_next
    };
    a.prototype.GetWorld = function() {
        return this.m_world
    };
    a.prototype.GetBodyList = function() {
        return this.m_bodyList
    };
    m.b2ControllerEdge = function() {};
    Box2D.inherit(y, Box2D.Dynamics.Controllers.b2Controller);
    y.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    y.b2GravityController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.G = 1;
        this.invSqr = !0
    };
    y.prototype.Step = function(a) {
        var b;
        if (this.invSqr) for (a = this.m_bodyList; a; a = a.nextBody) {
            var d = a.body;
            var f = d.GetWorldCenter();
            var h = d.GetMass();
            for (b = this.m_bodyList; b != a; b = b.nextBody) {
                var e = b.body;
                var l = e.GetWorldCenter();
                var m = l.x - f.x;
                var n = l.y - f.y;
                var u = m * m + n * n;
                u < Number.MIN_VALUE || (m = new k(m, n), m.Multiply(this.G / u / Math.sqrt(u) * h * e.GetMass()), d.IsAwake() && d.ApplyForce(m, f), m.Multiply( - 1), e.IsAwake() && e.ApplyForce(m, l))
            }
        } else for (a = this.m_bodyList; a; a = a.nextBody) for (d = a.body, f = d.GetWorldCenter(), h = d.GetMass(), b = this.m_bodyList; b != a; b = b.nextBody) e = b.body,
            l = e.GetWorldCenter(),
            m = l.x - f.x,
            n = l.y - f.y,
            u = m * m + n * n,
        u < Number.MIN_VALUE || (m = new k(m, n), m.Multiply(this.G / u * h * e.GetMass()), d.IsAwake() && d.ApplyForce(m, f), m.Multiply( - 1), e.IsAwake() && e.ApplyForce(m, l))
    };
    Box2D.inherit(u, Box2D.Dynamics.Controllers.b2Controller);
    u.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    u.b2TensorDampingController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.T = new b;
        this.maxTimestep = 0
    };
    u.prototype.SetAxisAligned = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.T.col1.x = -a;
        this.T.col1.y = 0;
        this.T.col2.x = 0;
        this.T.col2.y = -b;
        this.maxTimestep = 0 < a || 0 < b ? 1 / Math.max(a, b) : 0
    };
    u.prototype.Step = function(a) {
        a = a.dt;
        if (! (a <= Number.MIN_VALUE)) {
            a > this.maxTimestep && 0 < this.maxTimestep && (a = this.maxTimestep);
            for (var b = this.m_bodyList; b; b = b.nextBody) {
                var d = b.body;
                if (d.IsAwake()) {
                    var f = d.GetWorldVector(l.MulMV(this.T, d.GetLocalVector(d.GetLinearVelocity())));
                    d.SetLinearVelocity(new k(d.GetLinearVelocity().x + f.x * a, d.GetLinearVelocity().y + f.y * a))
                }
            }
        }
    }
})(); (function() {
    var b = Box2D.Common.b2Settings,
        l = Box2D.Common.Math.b2Mat22,
        k = Box2D.Common.Math.b2Mat33,
        d = Box2D.Common.Math.b2Math,
        h = Box2D.Common.Math.b2Vec2,
        f = Box2D.Common.Math.b2Vec3,
        n = Box2D.Dynamics.Joints.b2DistanceJoint,
        a = Box2D.Dynamics.Joints.b2DistanceJointDef,
        m = Box2D.Dynamics.Joints.b2FrictionJoint,
        y = Box2D.Dynamics.Joints.b2FrictionJointDef,
        u = Box2D.Dynamics.Joints.b2GearJoint,
        B = Box2D.Dynamics.Joints.b2GearJointDef,
        t = Box2D.Dynamics.Joints.b2Jacobian,
        r = Box2D.Dynamics.Joints.b2Joint,
        F = Box2D.Dynamics.Joints.b2JointDef,
        G = Box2D.Dynamics.Joints.b2JointEdge,
        e = Box2D.Dynamics.Joints.b2LineJoint,
        A = Box2D.Dynamics.Joints.b2LineJointDef,
        v = Box2D.Dynamics.Joints.b2MouseJoint,
        M = Box2D.Dynamics.Joints.b2MouseJointDef,
        E = Box2D.Dynamics.Joints.b2PrismaticJoint,
        P = Box2D.Dynamics.Joints.b2PrismaticJointDef,
        z = Box2D.Dynamics.Joints.b2PulleyJoint,
        O = Box2D.Dynamics.Joints.b2PulleyJointDef,
        K = Box2D.Dynamics.Joints.b2RevoluteJoint,
        N = Box2D.Dynamics.Joints.b2RevoluteJointDef,
        J = Box2D.Dynamics.Joints.b2WeldJoint,
        L = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.inherit(n, Box2D.Dynamics.Joints.b2Joint);
    n.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    n.b2DistanceJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new h;
        this.m_localAnchor2 = new h;
        this.m_u = new h
    };
    n.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    n.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    n.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_impulse * this.m_u.x, a * this.m_impulse * this.m_u.y)
    };
    n.prototype.GetReactionTorque = function(a) {
        return 0
    };
    n.prototype.GetLength = function() {
        return this.m_length
    };
    n.prototype.SetLength = function(a) {
        void 0 === a && (a = 0);
        this.m_length = a
    };
    n.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    };
    n.prototype.SetFrequency = function(a) {
        void 0 === a && (a = 0);
        this.m_frequencyHz = a
    };
    n.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    };
    n.prototype.SetDampingRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_dampingRatio = a
    };
    n.prototype.b2DistanceJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_length = a.length;
        this.m_frequencyHz = a.frequencyHz;
        this.m_dampingRatio = a.dampingRatio;
        this.m_bias = this.m_gamma = this.m_impulse = 0
    };
    n.prototype.InitVelocityConstraints = function(a) {
        var g = this.m_bodyA,
            d = this.m_bodyB;
        var e = g.m_xf.R;
        var f = this.m_localAnchor1.x - g.m_sweep.localCenter.x,
            h = this.m_localAnchor1.y - g.m_sweep.localCenter.y;
        var k = e.col1.x * f + e.col2.x * h;
        h = e.col1.y * f + e.col2.y * h;
        f = k;
        e = d.m_xf.R;
        var c = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
            p = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
        k = e.col1.x * c + e.col2.x * p;
        p = e.col1.y * c + e.col2.y * p;
        c = k;
        this.m_u.x = d.m_sweep.c.x + c - g.m_sweep.c.x - f;
        this.m_u.y = d.m_sweep.c.y + p - g.m_sweep.c.y - h;
        k = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        k > b.b2_linearSlop ? this.m_u.Multiply(1 / k) : this.m_u.SetZero();
        e = f * this.m_u.y - h * this.m_u.x;
        var l = c * this.m_u.y - p * this.m_u.x;
        e = g.m_invMass + g.m_invI * e * e + d.m_invMass + d.m_invI * l * l;
        this.m_mass = 0 != e ? 1 / e: 0;
        if (0 < this.m_frequencyHz) {
            k -= this.m_length;
            l = 2 * Math.PI * this.m_frequencyHz;
            var m = this.m_mass * l * l;
            this.m_gamma = a.dt * (2 * this.m_mass * this.m_dampingRatio * l + a.dt * m);
            this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma: 0;
            this.m_bias = k * a.dt * m * this.m_gamma;
            this.m_mass = e + this.m_gamma;
            this.m_mass = 0 != this.m_mass ? 1 / this.m_mass: 0
        }
        a.warmStarting ? (this.m_impulse *= a.dtRatio, a = this.m_impulse * this.m_u.x, e = this.m_impulse * this.m_u.y, g.m_linearVelocity.x -= g.m_invMass * a, g.m_linearVelocity.y -= g.m_invMass * e, g.m_angularVelocity -= g.m_invI * (f * e - h * a), d.m_linearVelocity.x += d.m_invMass * a, d.m_linearVelocity.y += d.m_invMass * e, d.m_angularVelocity += d.m_invI * (c * e - p * a)) : this.m_impulse = 0
    };
    n.prototype.SolveVelocityConstraints = function(a) {
        a = this.m_bodyA;
        var b = this.m_bodyB;
        var g = a.m_xf.R;
        var d = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
            e = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
            f = g.col1.x * d + g.col2.x * e;
        e = g.col1.y * d + g.col2.y * e;
        d = f;
        g = b.m_xf.R;
        var h = this.m_localAnchor2.x - b.m_sweep.localCenter.x,
            c = this.m_localAnchor2.y - b.m_sweep.localCenter.y;
        f = g.col1.x * h + g.col2.x * c;
        c = g.col1.y * h + g.col2.y * c;
        h = f;
        f = -this.m_mass * (this.m_u.x * (b.m_linearVelocity.x + -b.m_angularVelocity * c - (a.m_linearVelocity.x + -a.m_angularVelocity * e)) + this.m_u.y * (b.m_linearVelocity.y + b.m_angularVelocity * h - (a.m_linearVelocity.y + a.m_angularVelocity * d)) + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += f;
        g = f * this.m_u.x;
        f *= this.m_u.y;
        a.m_linearVelocity.x -= a.m_invMass * g;
        a.m_linearVelocity.y -= a.m_invMass * f;
        a.m_angularVelocity -= a.m_invI * (d * f - e * g);
        b.m_linearVelocity.x += b.m_invMass * g;
        b.m_linearVelocity.y += b.m_invMass * f;
        b.m_angularVelocity += b.m_invI * (h * f - c * g)
    };
    n.prototype.SolvePositionConstraints = function(a) {
        if (0 < this.m_frequencyHz) return ! 0;
        a = this.m_bodyA;
        var g = this.m_bodyB;
        var e = a.m_xf.R;
        var f = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
            h = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
            k = e.col1.x * f + e.col2.x * h;
        h = e.col1.y * f + e.col2.y * h;
        f = k;
        e = g.m_xf.R;
        var l = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
            c = this.m_localAnchor2.y - g.m_sweep.localCenter.y;
        k = e.col1.x * l + e.col2.x * c;
        c = e.col1.y * l + e.col2.y * c;
        l = k;
        k = g.m_sweep.c.x + l - a.m_sweep.c.x - f;
        var p = g.m_sweep.c.y + c - a.m_sweep.c.y - h;
        e = Math.sqrt(k * k + p * p);
        k /= e;
        p /= e;
        e -= this.m_length;
        e = d.Clamp(e, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
        var m = -this.m_mass * e;
        this.m_u.Set(k, p);
        k = m * this.m_u.x;
        p = m * this.m_u.y;
        a.m_sweep.c.x -= a.m_invMass * k;
        a.m_sweep.c.y -= a.m_invMass * p;
        a.m_sweep.a -= a.m_invI * (f * p - h * k);
        g.m_sweep.c.x += g.m_invMass * k;
        g.m_sweep.c.y += g.m_invMass * p;
        g.m_sweep.a += g.m_invI * (l * p - c * k);
        a.SynchronizeTransform();
        g.SynchronizeTransform();
        return d.Abs(e) < b.b2_linearSlop
    };
    Box2D.inherit(a, Box2D.Dynamics.Joints.b2JointDef);
    a.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    a.b2DistanceJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new h;
        this.localAnchorB = new h
    };
    a.prototype.b2DistanceJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_distanceJoint;
        this.length = 1;
        this.dampingRatio = this.frequencyHz = 0
    };
    a.prototype.Initialize = function(a, b, d, e) {
        this.bodyA = a;
        this.bodyB = b;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
        a = e.x - d.x;
        d = e.y - d.y;
        this.length = Math.sqrt(a * a + d * d);
        this.dampingRatio = this.frequencyHz = 0
    };
    Box2D.inherit(m, Box2D.Dynamics.Joints.b2Joint);
    m.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    m.b2FrictionJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new h;
        this.m_localAnchorB = new h;
        this.m_linearMass = new l;
        this.m_linearImpulse = new h
    };
    m.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    m.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    m.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_linearImpulse.x, a * this.m_linearImpulse.y)
    };
    m.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_angularImpulse
    };
    m.prototype.SetMaxForce = function(a) {
        void 0 === a && (a = 0);
        this.m_maxForce = a
    };
    m.prototype.GetMaxForce = function() {
        return this.m_maxForce
    };
    m.prototype.SetMaxTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_maxTorque = a
    };
    m.prototype.GetMaxTorque = function() {
        return this.m_maxTorque
    };
    m.prototype.b2FrictionJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchorA.SetV(a.localAnchorA);
        this.m_localAnchorB.SetV(a.localAnchorB);
        this.m_linearMass.SetZero();
        this.m_angularMass = 0;
        this.m_linearImpulse.SetZero();
        this.m_angularImpulse = 0;
        this.m_maxForce = a.maxForce;
        this.m_maxTorque = a.maxTorque
    };
    m.prototype.InitVelocityConstraints = function(a) {
        var b = this.m_bodyA,
            g = this.m_bodyB;
        var d = b.m_xf.R;
        var e = this.m_localAnchorA.x - b.m_sweep.localCenter.x,
            f = this.m_localAnchorA.y - b.m_sweep.localCenter.y;
        var h = d.col1.x * e + d.col2.x * f;
        f = d.col1.y * e + d.col2.y * f;
        e = h;
        d = g.m_xf.R;
        var c = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
            k = this.m_localAnchorB.y - g.m_sweep.localCenter.y;
        h = d.col1.x * c + d.col2.x * k;
        k = d.col1.y * c + d.col2.y * k;
        c = h;
        d = b.m_invMass;
        h = g.m_invMass;
        var m = b.m_invI,
            n = g.m_invI,
            r = new l;
        r.col1.x = d + h;
        r.col2.x = 0;
        r.col1.y = 0;
        r.col2.y = d + h;
        r.col1.x += m * f * f;
        r.col2.x += -m * e * f;
        r.col1.y += -m * e * f;
        r.col2.y += m * e * e;
        r.col1.x += n * k * k;
        r.col2.x += -n * c * k;
        r.col1.y += -n * c * k;
        r.col2.y += n * c * c;
        r.GetInverse(this.m_linearMass);
        this.m_angularMass = m + n;
        0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
        a.warmStarting ? (this.m_linearImpulse.x *= a.dtRatio, this.m_linearImpulse.y *= a.dtRatio, this.m_angularImpulse *= a.dtRatio, a = this.m_linearImpulse, b.m_linearVelocity.x -= d * a.x, b.m_linearVelocity.y -= d * a.y, b.m_angularVelocity -= m * (e * a.y - f * a.x + this.m_angularImpulse), g.m_linearVelocity.x += h * a.x, g.m_linearVelocity.y += h * a.y, g.m_angularVelocity += n * (c * a.y - k * a.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0)
    };
    m.prototype.SolveVelocityConstraints = function(a) {
        var b = this.m_bodyA,
            g = this.m_bodyB,
            e = b.m_linearVelocity,
            f = b.m_angularVelocity,
            k = g.m_linearVelocity,
            l = g.m_angularVelocity,
            c = b.m_invMass,
            p = g.m_invMass,
            m = b.m_invI,
            n = g.m_invI;
        var r = b.m_xf.R;
        var t = this.m_localAnchorA.x - b.m_sweep.localCenter.x,
            v = this.m_localAnchorA.y - b.m_sweep.localCenter.y;
        var z = r.col1.x * t + r.col2.x * v;
        v = r.col1.y * t + r.col2.y * v;
        t = z;
        r = g.m_xf.R;
        var u = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
            y = this.m_localAnchorB.y - g.m_sweep.localCenter.y;
        z = r.col1.x * u + r.col2.x * y;
        y = r.col1.y * u + r.col2.y * y;
        u = z;
        z = -this.m_angularMass * (l - f);
        var A = this.m_angularImpulse;
        r = a.dt * this.m_maxTorque;
        this.m_angularImpulse = d.Clamp(this.m_angularImpulse + z, -r, r);
        z = this.m_angularImpulse - A;
        f -= m * z;
        l += n * z;
        r = d.MulMV(this.m_linearMass, new h( - (k.x - l * y - e.x + f * v), -(k.y + l * u - e.y - f * t)));
        z = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(r);
        r = a.dt * this.m_maxForce;
        this.m_linearImpulse.LengthSquared() > r * r && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(r));
        r = d.SubtractVV(this.m_linearImpulse, z);
        e.x -= c * r.x;
        e.y -= c * r.y;
        f -= m * (t * r.y - v * r.x);
        k.x += p * r.x;
        k.y += p * r.y;
        l += n * (u * r.y - y * r.x);
        b.m_angularVelocity = f;
        g.m_angularVelocity = l
    };
    m.prototype.SolvePositionConstraints = function(a) {
        return ! 0
    };
    Box2D.inherit(y, Box2D.Dynamics.Joints.b2JointDef);
    y.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    y.b2FrictionJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new h;
        this.localAnchorB = new h
    };
    y.prototype.b2FrictionJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_frictionJoint;
        this.maxTorque = this.maxForce = 0
    };
    y.prototype.Initialize = function(a, b, d) {
        this.bodyA = a;
        this.bodyB = b;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d))
    };
    Box2D.inherit(u, Box2D.Dynamics.Joints.b2Joint);
    u.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    u.b2GearJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new h;
        this.m_groundAnchor2 = new h;
        this.m_localAnchor1 = new h;
        this.m_localAnchor2 = new h;
        this.m_J = new t
    };
    u.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    u.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    u.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_impulse * this.m_J.linearB.x, a * this.m_impulse * this.m_J.linearB.y)
    };
    u.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        var b = this.m_bodyB.m_xf.R,
            g = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
            d = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
            e = b.col1.x * g + b.col2.x * d;
        d = b.col1.y * g + b.col2.y * d;
        return a * (this.m_impulse * this.m_J.angularB - e * this.m_impulse * this.m_J.linearB.y + d * this.m_impulse * this.m_J.linearB.x)
    };
    u.prototype.GetRatio = function() {
        return this.m_ratio
    };
    u.prototype.SetRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_ratio = a
    };
    u.prototype.b2GearJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        var b = parseInt(a.joint1.m_type),
            g = parseInt(a.joint2.m_type);
        this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
        this.m_ground1 = a.joint1.GetBodyA();
        this.m_bodyA = a.joint1.GetBodyB();
        b == r.e_revoluteJoint ? (this.m_revolute1 = a.joint1 instanceof K ? a.joint1: null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), b = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = a.joint1 instanceof E ? a.joint1: null, this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), b = this.m_prismatic1.GetJointTranslation());
        this.m_ground2 = a.joint2.GetBodyA();
        this.m_bodyB = a.joint2.GetBodyB();
        g == r.e_revoluteJoint ? (this.m_revolute2 = a.joint2 instanceof K ? a.joint2: null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), g = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = a.joint2 instanceof E ? a.joint2: null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), g = this.m_prismatic2.GetJointTranslation());
        this.m_ratio = a.ratio;
        this.m_constant = b + this.m_ratio * g;
        this.m_impulse = 0
    };
    u.prototype.InitVelocityConstraints = function(a) {
        var b = this.m_ground1,
            g = this.m_ground2,
            d = this.m_bodyA,
            e = this.m_bodyB,
            f = 0;
        this.m_J.SetZero();
        if (this.m_revolute1) this.m_J.angularA = -1,
            f += d.m_invI;
        else {
            var h = b.m_xf.R;
            var c = this.m_prismatic1.m_localXAxis1;
            b = h.col1.x * c.x + h.col2.x * c.y;
            c = h.col1.y * c.x + h.col2.y * c.y;
            h = d.m_xf.R;
            var k = this.m_localAnchor1.x - d.m_sweep.localCenter.x;
            var l = this.m_localAnchor1.y - d.m_sweep.localCenter.y;
            var m = h.col1.x * k + h.col2.x * l;
            l = h.col1.y * k + h.col2.y * l;
            h = m * c - l * b;
            this.m_J.linearA.Set( - b, -c);
            this.m_J.angularA = -h;
            f += d.m_invMass + d.m_invI * h * h
        }
        this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, f += this.m_ratio * this.m_ratio * e.m_invI) : (h = g.m_xf.R, c = this.m_prismatic2.m_localXAxis1, b = h.col1.x * c.x + h.col2.x * c.y, c = h.col1.y * c.x + h.col2.y * c.y, h = e.m_xf.R, k = this.m_localAnchor2.x - e.m_sweep.localCenter.x, l = this.m_localAnchor2.y - e.m_sweep.localCenter.y, m = h.col1.x * k + h.col2.x * l, l = h.col1.y * k + h.col2.y * l, h = m * c - l * b, this.m_J.linearB.Set( - this.m_ratio * b, -this.m_ratio * c), this.m_J.angularB = -this.m_ratio * h, f += this.m_ratio * this.m_ratio * (e.m_invMass + e.m_invI * h * h));
        this.m_mass = 0 < f ? 1 / f: 0;
        a.warmStarting ? (d.m_linearVelocity.x += d.m_invMass * this.m_impulse * this.m_J.linearA.x, d.m_linearVelocity.y += d.m_invMass * this.m_impulse * this.m_J.linearA.y, d.m_angularVelocity += d.m_invI * this.m_impulse * this.m_J.angularA, e.m_linearVelocity.x += e.m_invMass * this.m_impulse * this.m_J.linearB.x, e.m_linearVelocity.y += e.m_invMass * this.m_impulse * this.m_J.linearB.y, e.m_angularVelocity += e.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
    };
    u.prototype.SolveVelocityConstraints = function(a) {
        a = this.m_bodyA;
        var b = this.m_bodyB,
            g = this.m_J.Compute(a.m_linearVelocity, a.m_angularVelocity, b.m_linearVelocity, b.m_angularVelocity);
        g *= -this.m_mass;
        this.m_impulse += g;
        a.m_linearVelocity.x += a.m_invMass * g * this.m_J.linearA.x;
        a.m_linearVelocity.y += a.m_invMass * g * this.m_J.linearA.y;
        a.m_angularVelocity += a.m_invI * g * this.m_J.angularA;
        b.m_linearVelocity.x += b.m_invMass * g * this.m_J.linearB.x;
        b.m_linearVelocity.y += b.m_invMass * g * this.m_J.linearB.y;
        b.m_angularVelocity += b.m_invI * g * this.m_J.angularB
    };
    u.prototype.SolvePositionConstraints = function(a) {
        a = this.m_bodyA;
        var g = this.m_bodyB;
        var d = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation();
        var e = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation();
        d = -this.m_mass * (this.m_constant - (d + this.m_ratio * e));
        a.m_sweep.c.x += a.m_invMass * d * this.m_J.linearA.x;
        a.m_sweep.c.y += a.m_invMass * d * this.m_J.linearA.y;
        a.m_sweep.a += a.m_invI * d * this.m_J.angularA;
        g.m_sweep.c.x += g.m_invMass * d * this.m_J.linearB.x;
        g.m_sweep.c.y += g.m_invMass * d * this.m_J.linearB.y;
        g.m_sweep.a += g.m_invI * d * this.m_J.angularB;
        a.SynchronizeTransform();
        g.SynchronizeTransform();
        return 0 < b.b2_linearSlop
    };
    Box2D.inherit(B, Box2D.Dynamics.Joints.b2JointDef);
    B.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    B.b2GearJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
    };
    B.prototype.b2GearJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_gearJoint;
        this.joint2 = this.joint1 = null;
        this.ratio = 1
    };
    t.b2Jacobian = function() {
        this.linearA = new h;
        this.linearB = new h
    };
    t.prototype.SetZero = function() {
        this.linearA.SetZero();
        this.angularA = 0;
        this.linearB.SetZero();
        this.angularB = 0
    };
    t.prototype.Set = function(a, b, d, e) {
        void 0 === b && (b = 0);
        void 0 === e && (e = 0);
        this.linearA.SetV(a);
        this.angularA = b;
        this.linearB.SetV(d);
        this.angularB = e
    };
    t.prototype.Compute = function(a, b, d, e) {
        void 0 === b && (b = 0);
        void 0 === e && (e = 0);
        return this.linearA.x * a.x + this.linearA.y * a.y + this.angularA * b + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * e
    };
    r.b2Joint = function() {
        this.m_edgeA = new G;
        this.m_edgeB = new G;
        this.m_localCenterA = new h;
        this.m_localCenterB = new h
    };
    r.prototype.GetType = function() {
        return this.m_type
    };
    r.prototype.GetAnchorA = function() {
        return null
    };
    r.prototype.GetAnchorB = function() {
        return null
    };
    r.prototype.GetReactionForce = function(a) {
        return null
    };
    r.prototype.GetReactionTorque = function(a) {
        return 0
    };
    r.prototype.GetBodyA = function() {
        return this.m_bodyA
    };
    r.prototype.GetBodyB = function() {
        return this.m_bodyB
    };
    r.prototype.GetNext = function() {
        return this.m_next
    };
    r.prototype.GetUserData = function() {
        return this.m_userData
    };
    r.prototype.SetUserData = function(a) {
        this.m_userData = a
    };
    r.prototype.IsActive = function() {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
    };
    r.Create = function(b, d) {
        var g = null;
        switch (b.type) {
            case r.e_distanceJoint:
                g = new n(b instanceof a ? b: null);
                break;
            case r.e_mouseJoint:
                g = new v(b instanceof M ? b: null);
                break;
            case r.e_prismaticJoint:
                g = new E(b instanceof P ? b: null);
                break;
            case r.e_revoluteJoint:
                g = new K(b instanceof N ? b: null);
                break;
            case r.e_pulleyJoint:
                g = new z(b instanceof O ? b: null);
                break;
            case r.e_gearJoint:
                g = new u(b instanceof B ? b: null);
                break;
            case r.e_lineJoint:
                g = new e(b instanceof A ? b: null);
                break;
            case r.e_weldJoint:
                g = new J(b instanceof L ? b: null);
                break;
            case r.e_frictionJoint:
                g = new m(b instanceof y ? b: null)
        }
        return g
    };
    r.Destroy = function(a, b) {};
    r.prototype.b2Joint = function(a) {
        b.b2Assert(a.bodyA != a.bodyB);
        this.m_type = a.type;
        this.m_next = this.m_prev = null;
        this.m_bodyA = a.bodyA;
        this.m_bodyB = a.bodyB;
        this.m_collideConnected = a.collideConnected;
        this.m_islandFlag = !1;
        this.m_userData = a.userData
    };
    r.prototype.InitVelocityConstraints = function(a) {};
    r.prototype.SolveVelocityConstraints = function(a) {};
    r.prototype.FinalizeVelocityConstraints = function() {};
    r.prototype.SolvePositionConstraints = function(a) {
        return ! 1
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
        Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
        Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
        Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
        Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
        Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
        Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
        Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
        Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
        Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
        Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
        Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
        Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
        Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
    });
    F.b2JointDef = function() {};
    F.prototype.b2JointDef = function() {
        this.type = r.e_unknownJoint;
        this.bodyB = this.bodyA = this.userData = null;
        this.collideConnected = !1
    };
    G.b2JointEdge = function() {};
    Box2D.inherit(e, Box2D.Dynamics.Joints.b2Joint);
    e.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    e.b2LineJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new h;
        this.m_localAnchor2 = new h;
        this.m_localXAxis1 = new h;
        this.m_localYAxis1 = new h;
        this.m_axis = new h;
        this.m_perp = new h;
        this.m_K = new l;
        this.m_impulse = new h
    };
    e.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    e.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    e.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
    };
    e.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.y
    };
    e.prototype.GetJointTranslation = function() {
        var a = this.m_bodyA,
            b = this.m_bodyB,
            d = a.GetWorldPoint(this.m_localAnchor1),
            e = b.GetWorldPoint(this.m_localAnchor2);
        b = e.x - d.x;
        d = e.y - d.y;
        a = a.GetWorldVector(this.m_localXAxis1);
        return a.x * b + a.y * d
    };
    e.prototype.GetJointSpeed = function() {
        var a = this.m_bodyA,
            b = this.m_bodyB;
        var d = a.m_xf.R;
        var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
            h = d.col1.x * e + d.col2.x * f;
        f = d.col1.y * e + d.col2.y * f;
        e = h;
        d = b.m_xf.R;
        var k = this.m_localAnchor2.x - b.m_sweep.localCenter.x,
            c = this.m_localAnchor2.y - b.m_sweep.localCenter.y;
        h = d.col1.x * k + d.col2.x * c;
        c = d.col1.y * k + d.col2.y * c;
        k = h;
        d = b.m_sweep.c.x + k - (a.m_sweep.c.x + e);
        h = b.m_sweep.c.y + c - (a.m_sweep.c.y + f);
        var p = a.GetWorldVector(this.m_localXAxis1),
            l = a.m_linearVelocity,
            m = b.m_linearVelocity;
        a = a.m_angularVelocity;
        b = b.m_angularVelocity;
        return d * -a * p.y + h * a * p.x + (p.x * (m.x + -b * c - l.x - -a * f) + p.y * (m.y + b * k - l.y - a * e))
    };
    e.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    e.prototype.EnableLimit = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = a
    };
    e.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    };
    e.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    };
    e.prototype.SetLimits = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = a;
        this.m_upperTranslation = b
    };
    e.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    };
    e.prototype.EnableMotor = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = a
    };
    e.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    };
    e.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    e.prototype.SetMaxMotorForce = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = a
    };
    e.prototype.GetMaxMotorForce = function() {
        return this.m_maxMotorForce
    };
    e.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    };
    e.prototype.b2LineJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_localXAxis1.SetV(a.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = a.lowerTranslation;
        this.m_upperTranslation = a.upperTranslation;
        this.m_maxMotorForce = a.maxMotorForce;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = r.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    e.prototype.InitVelocityConstraints = function(a) {
        var g = this.m_bodyA,
            e = this.m_bodyB;
        this.m_localCenterA.SetV(g.GetLocalCenter());
        this.m_localCenterB.SetV(e.GetLocalCenter());
        var f = g.GetTransform();
        e.GetTransform();
        var h = g.m_xf.R;
        var k = this.m_localAnchor1.x - this.m_localCenterA.x,
            l = this.m_localAnchor1.y - this.m_localCenterA.y;
        var c = h.col1.x * k + h.col2.x * l;
        l = h.col1.y * k + h.col2.y * l;
        k = c;
        h = e.m_xf.R;
        var p = this.m_localAnchor2.x - this.m_localCenterB.x,
            m = this.m_localAnchor2.y - this.m_localCenterB.y;
        c = h.col1.x * p + h.col2.x * m;
        m = h.col1.y * p + h.col2.y * m;
        p = c;
        h = e.m_sweep.c.x + p - g.m_sweep.c.x - k;
        c = e.m_sweep.c.y + m - g.m_sweep.c.y - l;
        this.m_invMassA = g.m_invMass;
        this.m_invMassB = e.m_invMass;
        this.m_invIA = g.m_invI;
        this.m_invIB = e.m_invI;
        this.m_axis.SetV(d.MulMV(f.R, this.m_localXAxis1));
        this.m_a1 = (h + k) * this.m_axis.y - (c + l) * this.m_axis.x;
        this.m_a2 = p * this.m_axis.y - m * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass: 0;
        this.m_perp.SetV(d.MulMV(f.R, this.m_localYAxis1));
        this.m_s1 = (h + k) * this.m_perp.y - (c + l) * this.m_perp.x;
        this.m_s2 = p * this.m_perp.y - m * this.m_perp.x;
        f = this.m_invMassA;
        k = this.m_invMassB;
        l = this.m_invIA;
        p = this.m_invIB;
        this.m_K.col1.x = f + k + l * this.m_s1 * this.m_s1 + p * this.m_s2 * this.m_s2;
        this.m_K.col1.y = l * this.m_s1 * this.m_a1 + p * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = f + k + l * this.m_a1 * this.m_a1 + p * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (h = this.m_axis.x * h + this.m_axis.y * c, d.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = r.e_equalLimits: h <= this.m_lowerTranslation ? this.m_limitState != r.e_atLowerLimit && (this.m_limitState = r.e_atLowerLimit, this.m_impulse.y = 0) : h >= this.m_upperTranslation ? this.m_limitState != r.e_atUpperLimit && (this.m_limitState = r.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = r.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = r.e_inactiveLimit;
        0 == this.m_enableMotor && (this.m_motorImpulse = 0);
        a.warmStarting ? (this.m_impulse.x *= a.dtRatio, this.m_impulse.y *= a.dtRatio, this.m_motorImpulse *= a.dtRatio, a = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, h = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, c = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, f = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, g.m_linearVelocity.x -= this.m_invMassA * a, g.m_linearVelocity.y -= this.m_invMassA * h, g.m_angularVelocity -= this.m_invIA * c, e.m_linearVelocity.x += this.m_invMassB * a, e.m_linearVelocity.y += this.m_invMassB * h, e.m_angularVelocity += this.m_invIB * f) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    e.prototype.SolveVelocityConstraints = function(a) {
        var b = this.m_bodyA,
            g = this.m_bodyB,
            e = b.m_linearVelocity,
            f = b.m_angularVelocity,
            k = g.m_linearVelocity,
            l = g.m_angularVelocity;
        if (this.m_enableMotor && this.m_limitState != r.e_equalLimits) {
            var c = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (k.x - e.x) + this.m_axis.y * (k.y - e.y) + this.m_a2 * l - this.m_a1 * f));
            var p = this.m_motorImpulse;
            a = a.dt * this.m_maxMotorForce;
            this.m_motorImpulse = d.Clamp(this.m_motorImpulse + c, -a, a);
            c = this.m_motorImpulse - p;
            p = c * this.m_axis.x;
            a = c * this.m_axis.y;
            var m = c * this.m_a1;
            c *= this.m_a2;
            e.x -= this.m_invMassA * p;
            e.y -= this.m_invMassA * a;
            f -= this.m_invIA * m;
            k.x += this.m_invMassB * p;
            k.y += this.m_invMassB * a;
            l += this.m_invIB * c
        }
        a = this.m_perp.x * (k.x - e.x) + this.m_perp.y * (k.y - e.y) + this.m_s2 * l - this.m_s1 * f;
        this.m_enableLimit && this.m_limitState != r.e_inactiveLimit ? (m = this.m_axis.x * (k.x - e.x) + this.m_axis.y * (k.y - e.y) + this.m_a2 * l - this.m_a1 * f, p = this.m_impulse.Copy(), c = this.m_K.Solve(new h, -a, -m), this.m_impulse.Add(c), this.m_limitState == r.e_atLowerLimit ? this.m_impulse.y = d.Max(this.m_impulse.y, 0) : this.m_limitState == r.e_atUpperLimit && (this.m_impulse.y = d.Min(this.m_impulse.y, 0)), a = -a - (this.m_impulse.y - p.y) * this.m_K.col2.x, this.m_impulse.x = 0 != this.m_K.col1.x ? a / this.m_K.col1.x + p.x: p.x, c.x = this.m_impulse.x - p.x, c.y = this.m_impulse.y - p.y, p = c.x * this.m_perp.x + c.y * this.m_axis.x, a = c.x * this.m_perp.y + c.y * this.m_axis.y, m = c.x * this.m_s1 + c.y * this.m_a1, c = c.x * this.m_s2 + c.y * this.m_a2) : (c = 0 != this.m_K.col1.x ? -a / this.m_K.col1.x: 0, this.m_impulse.x += c, p = c * this.m_perp.x, a = c * this.m_perp.y, m = c * this.m_s1, c *= this.m_s2);
        e.x -= this.m_invMassA * p;
        e.y -= this.m_invMassA * a;
        f -= this.m_invIA * m;
        k.x += this.m_invMassB * p;
        k.y += this.m_invMassB * a;
        l += this.m_invIB * c;
        b.m_linearVelocity.SetV(e);
        b.m_angularVelocity = f;
        g.m_linearVelocity.SetV(k);
        g.m_angularVelocity = l
    };
    e.prototype.SolvePositionConstraints = function(a) {
        a = this.m_bodyA;
        var g = this.m_bodyB,
            e = a.m_sweep.c,
            f = a.m_sweep.a,
            k = g.m_sweep.c,
            m = g.m_sweep.a,
            n = 0;
        var c = !1;
        var p = 0,
            r = l.FromAngle(f);
        var w = l.FromAngle(m);
        var t = r;
        var v = this.m_localAnchor1.x - this.m_localCenterA.x;
        var z = this.m_localAnchor1.y - this.m_localCenterA.y;
        var u = t.col1.x * v + t.col2.x * z;
        z = t.col1.y * v + t.col2.y * z;
        v = u;
        t = w;
        w = this.m_localAnchor2.x - this.m_localCenterB.x;
        var y = this.m_localAnchor2.y - this.m_localCenterB.y;
        u = t.col1.x * w + t.col2.x * y;
        y = t.col1.y * w + t.col2.y * y;
        w = u;
        t = k.x + w - e.x - v;
        u = k.y + y - e.y - z;
        if (this.m_enableLimit) {
            this.m_axis = d.MulMV(r, this.m_localXAxis1);
            this.m_a1 = (t + v) * this.m_axis.y - (u + z) * this.m_axis.x;
            this.m_a2 = w * this.m_axis.y - y * this.m_axis.x;
            var A = this.m_axis.x * t + this.m_axis.y * u;
            d.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (p = d.Clamp(A, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection), n = d.Abs(A), c = !0) : A <= this.m_lowerTranslation ? (p = d.Clamp(A - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), n = this.m_lowerTranslation - A, c = !0) : A >= this.m_upperTranslation && (p = d.Clamp(A - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), n = A - this.m_upperTranslation, c = !0)
        }
        this.m_perp = d.MulMV(r, this.m_localYAxis1);
        this.m_s1 = (t + v) * this.m_perp.y - (u + z) * this.m_perp.x;
        this.m_s2 = w * this.m_perp.y - y * this.m_perp.x;
        r = new h;
        v = this.m_perp.x * t + this.m_perp.y * u;
        n = d.Max(n, d.Abs(v));
        c ? (c = this.m_invMassA, z = this.m_invMassB, w = this.m_invIA, y = this.m_invIB, this.m_K.col1.x = c + z + w * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, this.m_K.col1.y = w * this.m_s1 * this.m_a1 + y * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = c + z + w * this.m_a1 * this.m_a1 + y * this.m_a2 * this.m_a2, this.m_K.Solve(r, -v, -p)) : (c = this.m_invMassA, z = this.m_invMassB, w = this.m_invIA, y = this.m_invIB, p = c + z + w * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, r.x = 0 != p ? -v / p: 0, r.y = 0);
        p = r.x * this.m_perp.x + r.y * this.m_axis.x;
        c = r.x * this.m_perp.y + r.y * this.m_axis.y;
        v = r.x * this.m_s1 + r.y * this.m_a1;
        r = r.x * this.m_s2 + r.y * this.m_a2;
        e.x -= this.m_invMassA * p;
        e.y -= this.m_invMassA * c;
        f -= this.m_invIA * v;
        k.x += this.m_invMassB * p;
        k.y += this.m_invMassB * c;
        m += this.m_invIB * r;
        a.m_sweep.a = f;
        g.m_sweep.a = m;
        a.SynchronizeTransform();
        g.SynchronizeTransform();
        return n <= b.b2_linearSlop && 0 <= b.b2_angularSlop
    };
    Box2D.inherit(A, Box2D.Dynamics.Joints.b2JointDef);
    A.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    A.b2LineJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new h;
        this.localAnchorB = new h;
        this.localAxisA = new h
    };
    A.prototype.b2LineJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_lineJoint;
        this.localAxisA.Set(1, 0);
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    };
    A.prototype.Initialize = function(a, b, d, e) {
        this.bodyA = a;
        this.bodyB = b;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e)
    };
    Box2D.inherit(v, Box2D.Dynamics.Joints.b2Joint);
    v.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    v.b2MouseJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new l;
        this.K1 = new l;
        this.K2 = new l;
        this.m_localAnchor = new h;
        this.m_target = new h;
        this.m_impulse = new h;
        this.m_mass = new l;
        this.m_C = new h
    };
    v.prototype.GetAnchorA = function() {
        return this.m_target
    };
    v.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
    };
    v.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_impulse.x, a * this.m_impulse.y)
    };
    v.prototype.GetReactionTorque = function(a) {
        return 0
    };
    v.prototype.GetTarget = function() {
        return this.m_target
    };
    v.prototype.SetTarget = function(a) {
        0 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
        this.m_target = a
    };
    v.prototype.GetMaxForce = function() {
        return this.m_maxForce
    };
    v.prototype.SetMaxForce = function(a) {
        void 0 === a && (a = 0);
        this.m_maxForce = a
    };
    v.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    };
    v.prototype.SetFrequency = function(a) {
        void 0 === a && (a = 0);
        this.m_frequencyHz = a
    };
    v.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    };
    v.prototype.SetDampingRatio = function(a) {
        void 0 === a && (a = 0);
        this.m_dampingRatio = a
    };
    v.prototype.b2MouseJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_target.SetV(a.target);
        var b = this.m_target.x - this.m_bodyB.m_xf.position.x,
            g = this.m_target.y - this.m_bodyB.m_xf.position.y,
            d = this.m_bodyB.m_xf.R;
        this.m_localAnchor.x = b * d.col1.x + g * d.col1.y;
        this.m_localAnchor.y = b * d.col2.x + g * d.col2.y;
        this.m_maxForce = a.maxForce;
        this.m_impulse.SetZero();
        this.m_frequencyHz = a.frequencyHz;
        this.m_dampingRatio = a.dampingRatio;
        this.m_gamma = this.m_beta = 0
    };
    v.prototype.InitVelocityConstraints = function(a) {
        var b = this.m_bodyB,
            g = b.GetMass(),
            d = 2 * Math.PI * this.m_frequencyHz,
            e = g * d * d;
        this.m_gamma = a.dt * (2 * g * this.m_dampingRatio * d + a.dt * e);
        this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma: 0;
        this.m_beta = a.dt * e * this.m_gamma;
        e = b.m_xf.R;
        g = this.m_localAnchor.x - b.m_sweep.localCenter.x;
        d = this.m_localAnchor.y - b.m_sweep.localCenter.y;
        var f = e.col1.x * g + e.col2.x * d;
        d = e.col1.y * g + e.col2.y * d;
        g = f;
        e = b.m_invMass;
        f = b.m_invI;
        this.K1.col1.x = e;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = e;
        this.K2.col1.x = f * d * d;
        this.K2.col2.x = -f * g * d;
        this.K2.col1.y = -f * g * d;
        this.K2.col2.y = f * g * g;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.col1.x += this.m_gamma;
        this.K.col2.y += this.m_gamma;
        this.K.GetInverse(this.m_mass);
        this.m_C.x = b.m_sweep.c.x + g - this.m_target.x;
        this.m_C.y = b.m_sweep.c.y + d - this.m_target.y;
        b.m_angularVelocity *= .98;
        this.m_impulse.x *= a.dtRatio;
        this.m_impulse.y *= a.dtRatio;
        b.m_linearVelocity.x += e * this.m_impulse.x;
        b.m_linearVelocity.y += e * this.m_impulse.y;
        b.m_angularVelocity += f * (g * this.m_impulse.y - d * this.m_impulse.x)
    };
    v.prototype.SolveVelocityConstraints = function(a) {
        var b = this.m_bodyB;
        var d = b.m_xf.R;
        var g = this.m_localAnchor.x - b.m_sweep.localCenter.x,
            e = this.m_localAnchor.y - b.m_sweep.localCenter.y;
        var f = d.col1.x * g + d.col2.x * e;
        e = d.col1.y * g + d.col2.y * e;
        g = f;
        f = b.m_linearVelocity.x + -b.m_angularVelocity * e;
        var h = b.m_linearVelocity.y + b.m_angularVelocity * g;
        d = this.m_mass;
        f = f + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
        var c = h + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
        h = -(d.col1.x * f + d.col2.x * c);
        c = -(d.col1.y * f + d.col2.y * c);
        d = this.m_impulse.x;
        f = this.m_impulse.y;
        this.m_impulse.x += h;
        this.m_impulse.y += c;
        a = a.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > a * a && this.m_impulse.Multiply(a / this.m_impulse.Length());
        h = this.m_impulse.x - d;
        c = this.m_impulse.y - f;
        b.m_linearVelocity.x += b.m_invMass * h;
        b.m_linearVelocity.y += b.m_invMass * c;
        b.m_angularVelocity += b.m_invI * (g * c - e * h)
    };
    v.prototype.SolvePositionConstraints = function(a) {
        return ! 0
    };
    Box2D.inherit(M, Box2D.Dynamics.Joints.b2JointDef);
    M.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    M.b2MouseJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.target = new h
    };
    M.prototype.b2MouseJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_mouseJoint;
        this.maxForce = 0;
        this.frequencyHz = 5;
        this.dampingRatio = .7
    };
    Box2D.inherit(E, Box2D.Dynamics.Joints.b2Joint);
    E.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    E.b2PrismaticJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new h;
        this.m_localAnchor2 = new h;
        this.m_localXAxis1 = new h;
        this.m_localYAxis1 = new h;
        this.m_axis = new h;
        this.m_perp = new h;
        this.m_K = new k;
        this.m_impulse = new f
    };
    E.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    E.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    E.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
    };
    E.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.y
    };
    E.prototype.GetJointTranslation = function() {
        var a = this.m_bodyA,
            b = this.m_bodyB,
            d = a.GetWorldPoint(this.m_localAnchor1),
            e = b.GetWorldPoint(this.m_localAnchor2);
        b = e.x - d.x;
        d = e.y - d.y;
        a = a.GetWorldVector(this.m_localXAxis1);
        return a.x * b + a.y * d
    };
    E.prototype.GetJointSpeed = function() {
        var a = this.m_bodyA,
            b = this.m_bodyB;
        var d = a.m_xf.R;
        var e = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
            h = d.col1.x * e + d.col2.x * f;
        f = d.col1.y * e + d.col2.y * f;
        e = h;
        d = b.m_xf.R;
        var k = this.m_localAnchor2.x - b.m_sweep.localCenter.x,
            c = this.m_localAnchor2.y - b.m_sweep.localCenter.y;
        h = d.col1.x * k + d.col2.x * c;
        c = d.col1.y * k + d.col2.y * c;
        k = h;
        d = b.m_sweep.c.x + k - (a.m_sweep.c.x + e);
        h = b.m_sweep.c.y + c - (a.m_sweep.c.y + f);
        var p = a.GetWorldVector(this.m_localXAxis1),
            l = a.m_linearVelocity,
            m = b.m_linearVelocity;
        a = a.m_angularVelocity;
        b = b.m_angularVelocity;
        return d * -a * p.y + h * a * p.x + (p.x * (m.x + -b * c - l.x - -a * f) + p.y * (m.y + b * k - l.y - a * e))
    };
    E.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    E.prototype.EnableLimit = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = a
    };
    E.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    };
    E.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    };
    E.prototype.SetLimits = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = a;
        this.m_upperTranslation = b
    };
    E.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    };
    E.prototype.EnableMotor = function(a) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = a
    };
    E.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    };
    E.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    E.prototype.SetMaxMotorForce = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = a
    };
    E.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    };
    E.prototype.b2PrismaticJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_localXAxis1.SetV(a.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_refAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = a.lowerTranslation;
        this.m_upperTranslation = a.upperTranslation;
        this.m_maxMotorForce = a.maxMotorForce;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = r.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    E.prototype.InitVelocityConstraints = function(a) {
        var g = this.m_bodyA,
            e = this.m_bodyB;
        this.m_localCenterA.SetV(g.GetLocalCenter());
        this.m_localCenterB.SetV(e.GetLocalCenter());
        var f = g.GetTransform();
        e.GetTransform();
        var h = g.m_xf.R;
        var k = this.m_localAnchor1.x - this.m_localCenterA.x,
            l = this.m_localAnchor1.y - this.m_localCenterA.y;
        var c = h.col1.x * k + h.col2.x * l;
        l = h.col1.y * k + h.col2.y * l;
        k = c;
        h = e.m_xf.R;
        var p = this.m_localAnchor2.x - this.m_localCenterB.x,
            m = this.m_localAnchor2.y - this.m_localCenterB.y;
        c = h.col1.x * p + h.col2.x * m;
        m = h.col1.y * p + h.col2.y * m;
        p = c;
        h = e.m_sweep.c.x + p - g.m_sweep.c.x - k;
        c = e.m_sweep.c.y + m - g.m_sweep.c.y - l;
        this.m_invMassA = g.m_invMass;
        this.m_invMassB = e.m_invMass;
        this.m_invIA = g.m_invI;
        this.m_invIB = e.m_invI;
        this.m_axis.SetV(d.MulMV(f.R, this.m_localXAxis1));
        this.m_a1 = (h + k) * this.m_axis.y - (c + l) * this.m_axis.x;
        this.m_a2 = p * this.m_axis.y - m * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
        this.m_perp.SetV(d.MulMV(f.R, this.m_localYAxis1));
        this.m_s1 = (h + k) * this.m_perp.y - (c + l) * this.m_perp.x;
        this.m_s2 = p * this.m_perp.y - m * this.m_perp.x;
        f = this.m_invMassA;
        k = this.m_invMassB;
        l = this.m_invIA;
        p = this.m_invIB;
        this.m_K.col1.x = f + k + l * this.m_s1 * this.m_s1 + p * this.m_s2 * this.m_s2;
        this.m_K.col1.y = l * this.m_s1 + p * this.m_s2;
        this.m_K.col1.z = l * this.m_s1 * this.m_a1 + p * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = l + p;
        this.m_K.col2.z = l * this.m_a1 + p * this.m_a2;
        this.m_K.col3.x = this.m_K.col1.z;
        this.m_K.col3.y = this.m_K.col2.z;
        this.m_K.col3.z = f + k + l * this.m_a1 * this.m_a1 + p * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (h = this.m_axis.x * h + this.m_axis.y * c, d.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = r.e_equalLimits: h <= this.m_lowerTranslation ? this.m_limitState != r.e_atLowerLimit && (this.m_limitState = r.e_atLowerLimit, this.m_impulse.z = 0) : h >= this.m_upperTranslation ? this.m_limitState != r.e_atUpperLimit && (this.m_limitState = r.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = r.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState = r.e_inactiveLimit;
        0 == this.m_enableMotor && (this.m_motorImpulse = 0);
        a.warmStarting ? (this.m_impulse.x *= a.dtRatio, this.m_impulse.y *= a.dtRatio, this.m_motorImpulse *= a.dtRatio, a = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, h = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, c = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, f = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2, g.m_linearVelocity.x -= this.m_invMassA * a, g.m_linearVelocity.y -= this.m_invMassA * h, g.m_angularVelocity -= this.m_invIA * c, e.m_linearVelocity.x += this.m_invMassB * a, e.m_linearVelocity.y += this.m_invMassB * h, e.m_angularVelocity += this.m_invIB * f) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    E.prototype.SolveVelocityConstraints = function(a) {
        var b = this.m_bodyA,
            g = this.m_bodyB,
            e = b.m_linearVelocity,
            k = b.m_angularVelocity,
            l = g.m_linearVelocity,
            m = g.m_angularVelocity;
        if (this.m_enableMotor && this.m_limitState != r.e_equalLimits) {
            var c = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (l.x - e.x) + this.m_axis.y * (l.y - e.y) + this.m_a2 * m - this.m_a1 * k));
            var p = this.m_motorImpulse;
            a = a.dt * this.m_maxMotorForce;
            this.m_motorImpulse = d.Clamp(this.m_motorImpulse + c, -a, a);
            c = this.m_motorImpulse - p;
            p = c * this.m_axis.x;
            a = c * this.m_axis.y;
            var n = c * this.m_a1;
            c *= this.m_a2;
            e.x -= this.m_invMassA * p;
            e.y -= this.m_invMassA * a;
            k -= this.m_invIA * n;
            l.x += this.m_invMassB * p;
            l.y += this.m_invMassB * a;
            m += this.m_invIB * c
        }
        n = this.m_perp.x * (l.x - e.x) + this.m_perp.y * (l.y - e.y) + this.m_s2 * m - this.m_s1 * k;
        a = m - k;
        this.m_enableLimit && this.m_limitState != r.e_inactiveLimit ? (c = this.m_axis.x * (l.x - e.x) + this.m_axis.y * (l.y - e.y) + this.m_a2 * m - this.m_a1 * k, p = this.m_impulse.Copy(), c = this.m_K.Solve33(new f, -n, -a, -c), this.m_impulse.Add(c), this.m_limitState == r.e_atLowerLimit ? this.m_impulse.z = d.Max(this.m_impulse.z, 0) : this.m_limitState == r.e_atUpperLimit && (this.m_impulse.z = d.Min(this.m_impulse.z, 0)), n = -n - (this.m_impulse.z - p.z) * this.m_K.col3.x, a = -a - (this.m_impulse.z - p.z) * this.m_K.col3.y, a = this.m_K.Solve22(new h, n, a), a.x += p.x, a.y += p.y, this.m_impulse.x = a.x, this.m_impulse.y = a.y, c.x = this.m_impulse.x - p.x, c.y = this.m_impulse.y - p.y, c.z = this.m_impulse.z - p.z, p = c.x * this.m_perp.x + c.z * this.m_axis.x, a = c.x * this.m_perp.y + c.z * this.m_axis.y, n = c.x * this.m_s1 + c.y + c.z * this.m_a1, c = c.x * this.m_s2 + c.y + c.z * this.m_a2) : (c = this.m_K.Solve22(new h, -n, -a), this.m_impulse.x += c.x, this.m_impulse.y += c.y, p = c.x * this.m_perp.x, a = c.x * this.m_perp.y, n = c.x * this.m_s1 + c.y, c = c.x * this.m_s2 + c.y);
        e.x -= this.m_invMassA * p;
        e.y -= this.m_invMassA * a;
        k -= this.m_invIA * n;
        l.x += this.m_invMassB * p;
        l.y += this.m_invMassB * a;
        m += this.m_invIB * c;
        b.m_linearVelocity.SetV(e);
        b.m_angularVelocity = k;
        g.m_linearVelocity.SetV(l);
        g.m_angularVelocity = m
    };
    E.prototype.SolvePositionConstraints = function(a) {
        a = this.m_bodyA;
        var g = this.m_bodyB,
            e = a.m_sweep.c,
            k = a.m_sweep.a,
            m = g.m_sweep.c,
            n = g.m_sweep.a,
            r = 0;
        var c = !1;
        var p = 0,
            t = l.FromAngle(k),
            w = l.FromAngle(n);
        var v = t;
        var z = this.m_localAnchor1.x - this.m_localCenterA.x;
        var u = this.m_localAnchor1.y - this.m_localCenterA.y;
        var y = v.col1.x * z + v.col2.x * u;
        u = v.col1.y * z + v.col2.y * u;
        z = y;
        v = w;
        w = this.m_localAnchor2.x - this.m_localCenterB.x;
        var A = this.m_localAnchor2.y - this.m_localCenterB.y;
        y = v.col1.x * w + v.col2.x * A;
        A = v.col1.y * w + v.col2.y * A;
        w = y;
        v = m.x + w - e.x - z;
        y = m.y + A - e.y - u;
        if (this.m_enableLimit) {
            this.m_axis = d.MulMV(t, this.m_localXAxis1);
            this.m_a1 = (v + z) * this.m_axis.y - (y + u) * this.m_axis.x;
            this.m_a2 = w * this.m_axis.y - A * this.m_axis.x;
            var E = this.m_axis.x * v + this.m_axis.y * y;
            d.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (p = d.Clamp(E, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection), r = d.Abs(E), c = !0) : E <= this.m_lowerTranslation ? (p = d.Clamp(E - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), r = this.m_lowerTranslation - E, c = !0) : E >= this.m_upperTranslation && (p = d.Clamp(E - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), r = E - this.m_upperTranslation, c = !0)
        }
        this.m_perp = d.MulMV(t, this.m_localYAxis1);
        this.m_s1 = (v + z) * this.m_perp.y - (y + u) * this.m_perp.x;
        this.m_s2 = w * this.m_perp.y - A * this.m_perp.x;
        t = new f;
        u = this.m_perp.x * v + this.m_perp.y * y;
        w = n - k - this.m_refAngle;
        r = d.Max(r, d.Abs(u));
        z = d.Abs(w);
        c ? (c = this.m_invMassA, A = this.m_invMassB, v = this.m_invIA, y = this.m_invIB, this.m_K.col1.x = c + A + v * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, this.m_K.col1.y = v * this.m_s1 + y * this.m_s2, this.m_K.col1.z = v * this.m_s1 * this.m_a1 + y * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = v + y, this.m_K.col2.z = v * this.m_a1 + y * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = c + A + v * this.m_a1 * this.m_a1 + y * this.m_a2 * this.m_a2, this.m_K.Solve33(t, -u, -w, -p)) : (c = this.m_invMassA, A = this.m_invMassB, v = this.m_invIA, y = this.m_invIB, p = v * this.m_s1 + y * this.m_s2, E = v + y, this.m_K.col1.Set(c + A + v * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, p, 0), this.m_K.col2.Set(p, E, 0), p = this.m_K.Solve22(new h, -u, -w), t.x = p.x, t.y = p.y, t.z = 0);
        p = t.x * this.m_perp.x + t.z * this.m_axis.x;
        c = t.x * this.m_perp.y + t.z * this.m_axis.y;
        u = t.x * this.m_s1 + t.y + t.z * this.m_a1;
        t = t.x * this.m_s2 + t.y + t.z * this.m_a2;
        e.x -= this.m_invMassA * p;
        e.y -= this.m_invMassA * c;
        k -= this.m_invIA * u;
        m.x += this.m_invMassB * p;
        m.y += this.m_invMassB * c;
        n += this.m_invIB * t;
        a.m_sweep.a = k;
        g.m_sweep.a = n;
        a.SynchronizeTransform();
        g.SynchronizeTransform();
        return r <= b.b2_linearSlop && z <= b.b2_angularSlop
    };
    Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
    P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    P.b2PrismaticJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new h;
        this.localAnchorB = new h;
        this.localAxisA = new h
    };
    P.prototype.b2PrismaticJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_prismaticJoint;
        this.localAxisA.Set(1, 0);
        this.referenceAngle = 0;
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    };
    P.prototype.Initialize = function(a, b, d, e) {
        this.bodyA = a;
        this.bodyB = b;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(z, Box2D.Dynamics.Joints.b2Joint);
    z.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    z.b2PulleyJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new h;
        this.m_groundAnchor2 = new h;
        this.m_localAnchor1 = new h;
        this.m_localAnchor2 = new h;
        this.m_u1 = new h;
        this.m_u2 = new h
    };
    z.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    z.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    z.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_impulse * this.m_u2.x, a * this.m_impulse * this.m_u2.y)
    };
    z.prototype.GetReactionTorque = function(a) {
        return 0
    };
    z.prototype.GetGroundAnchorA = function() {
        var a = this.m_ground.m_xf.position.Copy();
        a.Add(this.m_groundAnchor1);
        return a
    };
    z.prototype.GetGroundAnchorB = function() {
        var a = this.m_ground.m_xf.position.Copy();
        a.Add(this.m_groundAnchor2);
        return a
    };
    z.prototype.GetLength1 = function() {
        var a = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
            b = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x);
        a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
        return Math.sqrt(b * b + a * a)
    };
    z.prototype.GetLength2 = function() {
        var a = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
            b = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x);
        a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
        return Math.sqrt(b * b + a * a)
    };
    z.prototype.GetRatio = function() {
        return this.m_ratio
    };
    z.prototype.b2PulleyJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_ground = this.m_bodyA.m_world.m_groundBody;
        this.m_groundAnchor1.x = a.groundAnchorA.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor1.y = a.groundAnchorA.y - this.m_ground.m_xf.position.y;
        this.m_groundAnchor2.x = a.groundAnchorB.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor2.y = a.groundAnchorB.y - this.m_ground.m_xf.position.y;
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_ratio = a.ratio;
        this.m_constant = a.lengthA + this.m_ratio * a.lengthB;
        this.m_maxLength1 = d.Min(a.maxLengthA, this.m_constant - this.m_ratio * z.b2_minPulleyLength);
        this.m_maxLength2 = d.Min(a.maxLengthB, (this.m_constant - z.b2_minPulleyLength) / this.m_ratio);
        this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    z.prototype.InitVelocityConstraints = function(a) {
        var d = this.m_bodyA,
            g = this.m_bodyB;
        var e = d.m_xf.R;
        var f = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            h = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            k = e.col1.x * f + e.col2.x * h;
        h = e.col1.y * f + e.col2.y * h;
        f = k;
        e = g.m_xf.R;
        var c = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
            l = this.m_localAnchor2.y - g.m_sweep.localCenter.y;
        k = e.col1.x * c + e.col2.x * l;
        l = e.col1.y * c + e.col2.y * l;
        c = k;
        e = g.m_sweep.c.x + c;
        k = g.m_sweep.c.y + l;
        var m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
            n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(d.m_sweep.c.x + f - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), d.m_sweep.c.y + h - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
        this.m_u2.Set(e - m, k - n);
        e = this.m_u1.Length();
        k = this.m_u2.Length();
        e > b.b2_linearSlop ? this.m_u1.Multiply(1 / e) : this.m_u1.SetZero();
        k > b.b2_linearSlop ? this.m_u2.Multiply(1 / k) : this.m_u2.SetZero();
        0 < this.m_constant - e - this.m_ratio * k ? (this.m_state = r.e_inactiveLimit, this.m_impulse = 0) : this.m_state = r.e_atUpperLimit;
        e < this.m_maxLength1 ? (this.m_limitState1 = r.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = r.e_atUpperLimit;
        k < this.m_maxLength2 ? (this.m_limitState2 = r.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = r.e_atUpperLimit;
        e = f * this.m_u1.y - h * this.m_u1.x;
        k = c * this.m_u2.y - l * this.m_u2.x;
        this.m_limitMass1 = d.m_invMass + d.m_invI * e * e;
        this.m_limitMass2 = g.m_invMass + g.m_invI * k * k;
        this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
        this.m_limitMass1 = 1 / this.m_limitMass1;
        this.m_limitMass2 = 1 / this.m_limitMass2;
        this.m_pulleyMass = 1 / this.m_pulleyMass;
        a.warmStarting ? (this.m_impulse *= a.dtRatio, this.m_limitImpulse1 *= a.dtRatio, this.m_limitImpulse2 *= a.dtRatio, a = ( - this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, e = ( - this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, k = ( - this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, m = ( - this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, d.m_linearVelocity.x += d.m_invMass * a, d.m_linearVelocity.y += d.m_invMass * e, d.m_angularVelocity += d.m_invI * (f * e - h * a), g.m_linearVelocity.x += g.m_invMass * k, g.m_linearVelocity.y += g.m_invMass * m, g.m_angularVelocity += g.m_invI * (c * m - l * k)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    z.prototype.SolveVelocityConstraints = function(a) {
        a = this.m_bodyA;
        var b = this.m_bodyB;
        var e = a.m_xf.R;
        var g = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
            h = e.col1.x * g + e.col2.x * f;
        f = e.col1.y * g + e.col2.y * f;
        g = h;
        e = b.m_xf.R;
        var k = this.m_localAnchor2.x - b.m_sweep.localCenter.x,
            c = this.m_localAnchor2.y - b.m_sweep.localCenter.y;
        h = e.col1.x * k + e.col2.x * c;
        c = e.col1.y * k + e.col2.y * c;
        k = h;
        if (this.m_state == r.e_atUpperLimit) {
            e = a.m_linearVelocity.x + -a.m_angularVelocity * f;
            h = a.m_linearVelocity.y + a.m_angularVelocity * g;
            var l = b.m_linearVelocity.x + -b.m_angularVelocity * c;
            var m = b.m_linearVelocity.y + b.m_angularVelocity * k;
            e = -(this.m_u1.x * e + this.m_u1.y * h) - this.m_ratio * (this.m_u2.x * l + this.m_u2.y * m);
            m = this.m_pulleyMass * -e;
            e = this.m_impulse;
            this.m_impulse = d.Max(0, this.m_impulse + m);
            m = this.m_impulse - e;
            e = -m * this.m_u1.x;
            h = -m * this.m_u1.y;
            l = -this.m_ratio * m * this.m_u2.x;
            m = -this.m_ratio * m * this.m_u2.y;
            a.m_linearVelocity.x += a.m_invMass * e;
            a.m_linearVelocity.y += a.m_invMass * h;
            a.m_angularVelocity += a.m_invI * (g * h - f * e);
            b.m_linearVelocity.x += b.m_invMass * l;
            b.m_linearVelocity.y += b.m_invMass * m;
            b.m_angularVelocity += b.m_invI * (k * m - c * l)
        }
        this.m_limitState1 == r.e_atUpperLimit && (e = a.m_linearVelocity.x + -a.m_angularVelocity * f, h = a.m_linearVelocity.y + a.m_angularVelocity * g, e = -(this.m_u1.x * e + this.m_u1.y * h), m = -this.m_limitMass1 * e, e = this.m_limitImpulse1, this.m_limitImpulse1 = d.Max(0, this.m_limitImpulse1 + m), m = this.m_limitImpulse1 - e, e = -m * this.m_u1.x, h = -m * this.m_u1.y, a.m_linearVelocity.x += a.m_invMass * e, a.m_linearVelocity.y += a.m_invMass * h, a.m_angularVelocity += a.m_invI * (g * h - f * e));
        this.m_limitState2 == r.e_atUpperLimit && (l = b.m_linearVelocity.x + -b.m_angularVelocity * c, m = b.m_linearVelocity.y + b.m_angularVelocity * k, e = -(this.m_u2.x * l + this.m_u2.y * m), m = -this.m_limitMass2 * e, e = this.m_limitImpulse2, this.m_limitImpulse2 = d.Max(0, this.m_limitImpulse2 + m), m = this.m_limitImpulse2 - e, l = -m * this.m_u2.x, m = -m * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * l, b.m_linearVelocity.y += b.m_invMass * m, b.m_angularVelocity += b.m_invI * (k * m - c * l))
    };
    z.prototype.SolvePositionConstraints = function(a) {
        a = this.m_bodyA;
        var e = this.m_bodyB,
            g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
            f = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
            h = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
            k = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
            l = 0;
        if (this.m_state == r.e_atUpperLimit) {
            var c = a.m_xf.R;
            var m = this.m_localAnchor1.x - a.m_sweep.localCenter.x;
            var n = this.m_localAnchor1.y - a.m_sweep.localCenter.y;
            var w = c.col1.x * m + c.col2.x * n;
            n = c.col1.y * m + c.col2.y * n;
            m = w;
            c = e.m_xf.R;
            var t = this.m_localAnchor2.x - e.m_sweep.localCenter.x;
            var v = this.m_localAnchor2.y - e.m_sweep.localCenter.y;
            w = c.col1.x * t + c.col2.x * v;
            v = c.col1.y * t + c.col2.y * v;
            t = w;
            c = a.m_sweep.c.x + m;
            w = a.m_sweep.c.y + n;
            var z = e.m_sweep.c.x + t;
            var u = e.m_sweep.c.y + v;
            this.m_u1.Set(c - g, w - f);
            this.m_u2.Set(z - h, u - k);
            c = this.m_u1.Length();
            w = this.m_u2.Length();
            c > b.b2_linearSlop ? this.m_u1.Multiply(1 / c) : this.m_u1.SetZero();
            w > b.b2_linearSlop ? this.m_u2.Multiply(1 / w) : this.m_u2.SetZero();
            c = this.m_constant - c - this.m_ratio * w;
            l = d.Max(l, -c);
            c = d.Clamp(c + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0);
            u = -this.m_pulleyMass * c;
            c = -u * this.m_u1.x;
            w = -u * this.m_u1.y;
            z = -this.m_ratio * u * this.m_u2.x;
            u = -this.m_ratio * u * this.m_u2.y;
            a.m_sweep.c.x += a.m_invMass * c;
            a.m_sweep.c.y += a.m_invMass * w;
            a.m_sweep.a += a.m_invI * (m * w - n * c);
            e.m_sweep.c.x += e.m_invMass * z;
            e.m_sweep.c.y += e.m_invMass * u;
            e.m_sweep.a += e.m_invI * (t * u - v * z);
            a.SynchronizeTransform();
            e.SynchronizeTransform()
        }
        this.m_limitState1 == r.e_atUpperLimit && (c = a.m_xf.R, m = this.m_localAnchor1.x - a.m_sweep.localCenter.x, n = this.m_localAnchor1.y - a.m_sweep.localCenter.y, w = c.col1.x * m + c.col2.x * n, n = c.col1.y * m + c.col2.y * n, m = w, c = a.m_sweep.c.x + m, w = a.m_sweep.c.y + n, this.m_u1.Set(c - g, w - f), c = this.m_u1.Length(), c > b.b2_linearSlop ? (this.m_u1.x *= 1 / c, this.m_u1.y *= 1 / c) : this.m_u1.SetZero(), c = this.m_maxLength1 - c, l = d.Max(l, -c), c = d.Clamp(c + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), u = -this.m_limitMass1 * c, c = -u * this.m_u1.x, w = -u * this.m_u1.y, a.m_sweep.c.x += a.m_invMass * c, a.m_sweep.c.y += a.m_invMass * w, a.m_sweep.a += a.m_invI * (m * w - n * c), a.SynchronizeTransform());
        this.m_limitState2 == r.e_atUpperLimit && (c = e.m_xf.R, t = this.m_localAnchor2.x - e.m_sweep.localCenter.x, v = this.m_localAnchor2.y - e.m_sweep.localCenter.y, w = c.col1.x * t + c.col2.x * v, v = c.col1.y * t + c.col2.y * v, t = w, z = e.m_sweep.c.x + t, u = e.m_sweep.c.y + v, this.m_u2.Set(z - h, u - k), w = this.m_u2.Length(), w > b.b2_linearSlop ? (this.m_u2.x *= 1 / w, this.m_u2.y *= 1 / w) : this.m_u2.SetZero(), c = this.m_maxLength2 - w, l = d.Max(l, -c), c = d.Clamp(c + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), u = -this.m_limitMass2 * c, z = -u * this.m_u2.x, u = -u * this.m_u2.y, e.m_sweep.c.x += e.m_invMass * z, e.m_sweep.c.y += e.m_invMass * u, e.m_sweep.a += e.m_invI * (t * u - v * z), e.SynchronizeTransform());
        return l < b.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2
    });
    Box2D.inherit(O, Box2D.Dynamics.Joints.b2JointDef);
    O.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    O.b2PulleyJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.groundAnchorA = new h;
        this.groundAnchorB = new h;
        this.localAnchorA = new h;
        this.localAnchorB = new h
    };
    O.prototype.b2PulleyJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_pulleyJoint;
        this.groundAnchorA.Set( - 1, 1);
        this.groundAnchorB.Set(1, 1);
        this.localAnchorA.Set( - 1, 0);
        this.localAnchorB.Set(1, 0);
        this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
        this.ratio = 1;
        this.collideConnected = !0
    };
    O.prototype.Initialize = function(a, b, d, e, f, h, k) {
        void 0 === k && (k = 0);
        this.bodyA = a;
        this.bodyB = b;
        this.groundAnchorA.SetV(d);
        this.groundAnchorB.SetV(e);
        this.localAnchorA = this.bodyA.GetLocalPoint(f);
        this.localAnchorB = this.bodyB.GetLocalPoint(h);
        a = f.x - d.x;
        d = f.y - d.y;
        this.lengthA = Math.sqrt(a * a + d * d);
        d = h.x - e.x;
        e = h.y - e.y;
        this.lengthB = Math.sqrt(d * d + e * e);
        this.ratio = k;
        k = this.lengthA + this.ratio * this.lengthB;
        this.maxLengthA = k - this.ratio * z.b2_minPulleyLength;
        this.maxLengthB = (k - z.b2_minPulleyLength) / this.ratio
    };
    Box2D.inherit(K, Box2D.Dynamics.Joints.b2Joint);
    K.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    K.b2RevoluteJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new l;
        this.K1 = new l;
        this.K2 = new l;
        this.K3 = new l;
        this.impulse3 = new f;
        this.impulse2 = new h;
        this.reduced = new h;
        this.m_localAnchor1 = new h;
        this.m_localAnchor2 = new h;
        this.m_impulse = new f;
        this.m_mass = new k
    };
    K.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    K.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    K.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_impulse.x, a * this.m_impulse.y)
    };
    K.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.z
    };
    K.prototype.GetJointAngle = function() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    };
    K.prototype.GetJointSpeed = function() {
        return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
    };
    K.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    K.prototype.EnableLimit = function(a) {
        this.m_enableLimit = a
    };
    K.prototype.GetLowerLimit = function() {
        return this.m_lowerAngle
    };
    K.prototype.GetUpperLimit = function() {
        return this.m_upperAngle
    };
    K.prototype.SetLimits = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.m_lowerAngle = a;
        this.m_upperAngle = b
    };
    K.prototype.IsMotorEnabled = function() {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        return this.m_enableMotor
    };
    K.prototype.EnableMotor = function(a) {
        this.m_enableMotor = a
    };
    K.prototype.SetMotorSpeed = function(a) {
        void 0 === a && (a = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = a
    };
    K.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    K.prototype.SetMaxMotorTorque = function(a) {
        void 0 === a && (a = 0);
        this.m_maxMotorTorque = a
    };
    K.prototype.GetMotorTorque = function() {
        return this.m_maxMotorTorque
    };
    K.prototype.b2RevoluteJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchor1.SetV(a.localAnchorA);
        this.m_localAnchor2.SetV(a.localAnchorB);
        this.m_referenceAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = 0;
        this.m_lowerAngle = a.lowerAngle;
        this.m_upperAngle = a.upperAngle;
        this.m_maxMotorTorque = a.maxMotorTorque;
        this.m_motorSpeed = a.motorSpeed;
        this.m_enableLimit = a.enableLimit;
        this.m_enableMotor = a.enableMotor;
        this.m_limitState = r.e_inactiveLimit
    };
    K.prototype.InitVelocityConstraints = function(a) {
        var e = this.m_bodyA,
            g = this.m_bodyB;
        var f = e.m_xf.R;
        var h = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
            k = this.m_localAnchor1.y - e.m_sweep.localCenter.y;
        var l = f.col1.x * h + f.col2.x * k;
        k = f.col1.y * h + f.col2.y * k;
        h = l;
        f = g.m_xf.R;
        var c = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - g.m_sweep.localCenter.y;
        l = f.col1.x * c + f.col2.x * m;
        m = f.col1.y * c + f.col2.y * m;
        c = l;
        f = e.m_invMass;
        l = g.m_invMass;
        var n = e.m_invI,
            w = g.m_invI;
        this.m_mass.col1.x = f + l + k * k * n + m * m * w;
        this.m_mass.col2.x = -k * h * n - m * c * w;
        this.m_mass.col3.x = -k * n - m * w;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = f + l + h * h * n + c * c * w;
        this.m_mass.col3.y = h * n + c * w;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = n + w;
        this.m_motorMass = 1 / (n + w);
        0 == this.m_enableMotor && (this.m_motorImpulse = 0);
        if (this.m_enableLimit) {
            var t = g.m_sweep.a - e.m_sweep.a - this.m_referenceAngle;
            d.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b.b2_angularSlop ? this.m_limitState = r.e_equalLimits: t <= this.m_lowerAngle ? (this.m_limitState != r.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = r.e_atLowerLimit) : t >= this.m_upperAngle ? (this.m_limitState != r.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = r.e_atUpperLimit) : (this.m_limitState = r.e_inactiveLimit, this.m_impulse.z = 0)
        } else this.m_limitState = r.e_inactiveLimit;
        a.warmStarting ? (this.m_impulse.x *= a.dtRatio, this.m_impulse.y *= a.dtRatio, this.m_motorImpulse *= a.dtRatio, a = this.m_impulse.x, t = this.m_impulse.y, e.m_linearVelocity.x -= f * a, e.m_linearVelocity.y -= f * t, e.m_angularVelocity -= n * (h * t - k * a + this.m_motorImpulse + this.m_impulse.z), g.m_linearVelocity.x += l * a, g.m_linearVelocity.y += l * t, g.m_angularVelocity += w * (c * t - m * a + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    K.prototype.SolveVelocityConstraints = function(a) {
        var b = this.m_bodyA,
            e = this.m_bodyB,
            g = b.m_linearVelocity,
            f = b.m_angularVelocity,
            h = e.m_linearVelocity,
            k = e.m_angularVelocity,
            c = b.m_invMass,
            l = e.m_invMass,
            m = b.m_invI,
            n = e.m_invI;
        if (this.m_enableMotor && this.m_limitState != r.e_equalLimits) {
            var t = this.m_motorMass * -(k - f - this.m_motorSpeed);
            var v = this.m_motorImpulse;
            a = a.dt * this.m_maxMotorTorque;
            this.m_motorImpulse = d.Clamp(this.m_motorImpulse + t, -a, a);
            t = this.m_motorImpulse - v;
            f -= m * t;
            k += n * t
        }
        if (this.m_enableLimit && this.m_limitState != r.e_inactiveLimit) {
            var u = b.m_xf.R;
            t = this.m_localAnchor1.x - b.m_sweep.localCenter.x;
            v = this.m_localAnchor1.y - b.m_sweep.localCenter.y;
            var z = u.col1.x * t + u.col2.x * v;
            v = u.col1.y * t + u.col2.y * v;
            t = z;
            u = e.m_xf.R;
            a = this.m_localAnchor2.x - e.m_sweep.localCenter.x;
            var y = this.m_localAnchor2.y - e.m_sweep.localCenter.y;
            z = u.col1.x * a + u.col2.x * y;
            y = u.col1.y * a + u.col2.y * y;
            a = z;
            z = h.x + -k * y - g.x - -f * v;
            var A = h.y + k * a - g.y - f * t;
            this.m_mass.Solve33(this.impulse3, -z, -A, -(k - f));
            this.m_limitState == r.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == r.e_atLowerLimit ? (u = this.m_impulse.z + this.impulse3.z, 0 > u && (this.m_mass.Solve22(this.reduced, -z, -A), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == r.e_atUpperLimit && (u = this.m_impulse.z + this.impulse3.z, 0 < u && (this.m_mass.Solve22(this.reduced, -z, -A), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0));
            g.x -= c * this.impulse3.x;
            g.y -= c * this.impulse3.y;
            f -= m * (t * this.impulse3.y - v * this.impulse3.x + this.impulse3.z);
            h.x += l * this.impulse3.x;
            h.y += l * this.impulse3.y;
            k += n * (a * this.impulse3.y - y * this.impulse3.x + this.impulse3.z)
        } else u = b.m_xf.R,
            t = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
            v = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
            z = u.col1.x * t + u.col2.x * v,
            v = u.col1.y * t + u.col2.y * v,
            t = z,
            u = e.m_xf.R,
            a = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
            y = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
            z = u.col1.x * a + u.col2.x * y,
            y = u.col1.y * a + u.col2.y * y,
            a = z,
            this.m_mass.Solve22(this.impulse2, -(h.x + -k * y - g.x - -f * v), -(h.y + k * a - g.y - f * t)),
            this.m_impulse.x += this.impulse2.x,
            this.m_impulse.y += this.impulse2.y,
            g.x -= c * this.impulse2.x,
            g.y -= c * this.impulse2.y,
            f -= m * (t * this.impulse2.y - v * this.impulse2.x),
            h.x += l * this.impulse2.x,
            h.y += l * this.impulse2.y,
            k += n * (a * this.impulse2.y - y * this.impulse2.x);
        b.m_linearVelocity.SetV(g);
        b.m_angularVelocity = f;
        e.m_linearVelocity.SetV(h);
        e.m_angularVelocity = k
    };
    K.prototype.SolvePositionConstraints = function(a) {
        a = this.m_bodyA;
        var e = this.m_bodyB,
            g = 0;
        if (this.m_enableLimit && this.m_limitState != r.e_inactiveLimit) {
            var f = e.m_sweep.a - a.m_sweep.a - this.m_referenceAngle;
            var h = 0;
            this.m_limitState == r.e_equalLimits ? (f = d.Clamp(f - this.m_lowerAngle, -b.b2_maxAngularCorrection, b.b2_maxAngularCorrection), h = -this.m_motorMass * f, g = d.Abs(f)) : this.m_limitState == r.e_atLowerLimit ? (f -= this.m_lowerAngle, g = -f, f = d.Clamp(f + b.b2_angularSlop, -b.b2_maxAngularCorrection, 0), h = -this.m_motorMass * f) : this.m_limitState == r.e_atUpperLimit && (g = f -= this.m_upperAngle, f = d.Clamp(f - b.b2_angularSlop, 0, b.b2_maxAngularCorrection), h = -this.m_motorMass * f);
            a.m_sweep.a -= a.m_invI * h;
            e.m_sweep.a += e.m_invI * h;
            a.SynchronizeTransform();
            e.SynchronizeTransform()
        }
        var k = a.m_xf.R;
        h = this.m_localAnchor1.x - a.m_sweep.localCenter.x;
        f = this.m_localAnchor1.y - a.m_sweep.localCenter.y;
        var l = k.col1.x * h + k.col2.x * f;
        f = k.col1.y * h + k.col2.y * f;
        h = l;
        k = e.m_xf.R;
        var c = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - e.m_sweep.localCenter.y;
        l = k.col1.x * c + k.col2.x * m;
        m = k.col1.y * c + k.col2.y * m;
        c = l;
        var n = e.m_sweep.c.x + c - a.m_sweep.c.x - h;
        var w = e.m_sweep.c.y + m - a.m_sweep.c.y - f;
        var t = n * n + w * w;
        k = Math.sqrt(t);
        l = a.m_invMass;
        var v = e.m_invMass,
            u = a.m_invI,
            z = e.m_invI,
            y = 10 * b.b2_linearSlop;
        t > y * y && (t = 1 / (l + v), n = t * -n, w = t * -w, a.m_sweep.c.x -= .5 * l * n, a.m_sweep.c.y -= .5 * l * w, e.m_sweep.c.x += .5 * v * n, e.m_sweep.c.y += .5 * v * w, n = e.m_sweep.c.x + c - a.m_sweep.c.x - h, w = e.m_sweep.c.y + m - a.m_sweep.c.y - f);
        this.K1.col1.x = l + v;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = l + v;
        this.K2.col1.x = u * f * f;
        this.K2.col2.x = -u * h * f;
        this.K2.col1.y = -u * h * f;
        this.K2.col2.y = u * h * h;
        this.K3.col1.x = z * m * m;
        this.K3.col2.x = -z * c * m;
        this.K3.col1.y = -z * c * m;
        this.K3.col2.y = z * c * c;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.AddM(this.K3);
        this.K.Solve(K.tImpulse, -n, -w);
        n = K.tImpulse.x;
        w = K.tImpulse.y;
        a.m_sweep.c.x -= a.m_invMass * n;
        a.m_sweep.c.y -= a.m_invMass * w;
        a.m_sweep.a -= a.m_invI * (h * w - f * n);
        e.m_sweep.c.x += e.m_invMass * n;
        e.m_sweep.c.y += e.m_invMass * w;
        e.m_sweep.a += e.m_invI * (c * w - m * n);
        a.SynchronizeTransform();
        e.SynchronizeTransform();
        return k <= b.b2_linearSlop && g <= b.b2_angularSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new h
    });
    Box2D.inherit(N, Box2D.Dynamics.Joints.b2JointDef);
    N.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    N.b2RevoluteJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new h;
        this.localAnchorB = new h
    };
    N.prototype.b2RevoluteJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_revoluteJoint;
        this.localAnchorA.Set(0, 0);
        this.localAnchorB.Set(0, 0);
        this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
        this.enableMotor = this.enableLimit = !1
    };
    N.prototype.Initialize = function(a, b, d) {
        this.bodyA = a;
        this.bodyB = b;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(J, Box2D.Dynamics.Joints.b2Joint);
    J.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    J.b2WeldJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new h;
        this.m_localAnchorB = new h;
        this.m_impulse = new f;
        this.m_mass = new k
    };
    J.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    J.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    J.prototype.GetReactionForce = function(a) {
        void 0 === a && (a = 0);
        return new h(a * this.m_impulse.x, a * this.m_impulse.y)
    };
    J.prototype.GetReactionTorque = function(a) {
        void 0 === a && (a = 0);
        return a * this.m_impulse.z
    };
    J.prototype.b2WeldJoint = function(a) {
        this.__super.b2Joint.call(this, a);
        this.m_localAnchorA.SetV(a.localAnchorA);
        this.m_localAnchorB.SetV(a.localAnchorB);
        this.m_referenceAngle = a.referenceAngle;
        this.m_impulse.SetZero();
        this.m_mass = new k
    };
    J.prototype.InitVelocityConstraints = function(a) {
        var b = this.m_bodyA,
            d = this.m_bodyB;
        var e = b.m_xf.R;
        var g = this.m_localAnchorA.x - b.m_sweep.localCenter.x,
            f = this.m_localAnchorA.y - b.m_sweep.localCenter.y;
        var h = e.col1.x * g + e.col2.x * f;
        f = e.col1.y * g + e.col2.y * f;
        g = h;
        e = d.m_xf.R;
        var c = this.m_localAnchorB.x - d.m_sweep.localCenter.x,
            k = this.m_localAnchorB.y - d.m_sweep.localCenter.y;
        h = e.col1.x * c + e.col2.x * k;
        k = e.col1.y * c + e.col2.y * k;
        c = h;
        e = b.m_invMass;
        h = d.m_invMass;
        var l = b.m_invI,
            m = d.m_invI;
        this.m_mass.col1.x = e + h + f * f * l + k * k * m;
        this.m_mass.col2.x = -f * g * l - k * c * m;
        this.m_mass.col3.x = -f * l - k * m;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = e + h + g * g * l + c * c * m;
        this.m_mass.col3.y = g * l + c * m;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = l + m;
        a.warmStarting ? (this.m_impulse.x *= a.dtRatio, this.m_impulse.y *= a.dtRatio, this.m_impulse.z *= a.dtRatio, b.m_linearVelocity.x -= e * this.m_impulse.x, b.m_linearVelocity.y -= e * this.m_impulse.y, b.m_angularVelocity -= l * (g * this.m_impulse.y - f * this.m_impulse.x + this.m_impulse.z), d.m_linearVelocity.x += h * this.m_impulse.x, d.m_linearVelocity.y += h * this.m_impulse.y, d.m_angularVelocity += m * (c * this.m_impulse.y - k * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
    };
    J.prototype.SolveVelocityConstraints = function(a) {
        a = this.m_bodyA;
        var b = this.m_bodyB,
            d = a.m_linearVelocity,
            e = a.m_angularVelocity,
            g = b.m_linearVelocity,
            h = b.m_angularVelocity,
            k = a.m_invMass,
            c = b.m_invMass,
            l = a.m_invI,
            m = b.m_invI;
        var n = a.m_xf.R;
        var r = this.m_localAnchorA.x - a.m_sweep.localCenter.x,
            t = this.m_localAnchorA.y - a.m_sweep.localCenter.y;
        var v = n.col1.x * r + n.col2.x * t;
        t = n.col1.y * r + n.col2.y * t;
        r = v;
        n = b.m_xf.R;
        var u = this.m_localAnchorB.x - b.m_sweep.localCenter.x,
            z = this.m_localAnchorB.y - b.m_sweep.localCenter.y;
        v = n.col1.x * u + n.col2.x * z;
        z = n.col1.y * u + n.col2.y * z;
        u = v;
        n = g.x - h * z - d.x + e * t;
        v = g.y + h * u - d.y - e * r;
        var y = h - e,
            A = new f;
        this.m_mass.Solve33(A, -n, -v, -y);
        this.m_impulse.Add(A);
        d.x -= k * A.x;
        d.y -= k * A.y;
        e -= l * (r * A.y - t * A.x + A.z);
        g.x += c * A.x;
        g.y += c * A.y;
        h += m * (u * A.y - z * A.x + A.z);
        a.m_angularVelocity = e;
        b.m_angularVelocity = h
    };
    J.prototype.SolvePositionConstraints = function(a) {
        a = this.m_bodyA;
        var e = this.m_bodyB;
        var g = a.m_xf.R;
        var h = this.m_localAnchorA.x - a.m_sweep.localCenter.x,
            k = this.m_localAnchorA.y - a.m_sweep.localCenter.y;
        var l = g.col1.x * h + g.col2.x * k;
        k = g.col1.y * h + g.col2.y * k;
        h = l;
        g = e.m_xf.R;
        var m = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
            c = this.m_localAnchorB.y - e.m_sweep.localCenter.y;
        l = g.col1.x * m + g.col2.x * c;
        c = g.col1.y * m + g.col2.y * c;
        m = l;
        g = a.m_invMass;
        l = e.m_invMass;
        var p = a.m_invI,
            n = e.m_invI,
            r = e.m_sweep.c.x + m - a.m_sweep.c.x - h,
            t = e.m_sweep.c.y + c - a.m_sweep.c.y - k,
            v = e.m_sweep.a - a.m_sweep.a - this.m_referenceAngle,
            u = 10 * b.b2_linearSlop,
            z = Math.sqrt(r * r + t * t),
            y = d.Abs(v);
        z > u && (p *= 1, n *= 1);
        this.m_mass.col1.x = g + l + k * k * p + c * c * n;
        this.m_mass.col2.x = -k * h * p - c * m * n;
        this.m_mass.col3.x = -k * p - c * n;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = g + l + h * h * p + m * m * n;
        this.m_mass.col3.y = h * p + m * n;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = p + n;
        u = new f;
        this.m_mass.Solve33(u, -r, -t, -v);
        a.m_sweep.c.x -= g * u.x;
        a.m_sweep.c.y -= g * u.y;
        a.m_sweep.a -= p * (h * u.y - k * u.x + u.z);
        e.m_sweep.c.x += l * u.x;
        e.m_sweep.c.y += l * u.y;
        e.m_sweep.a += n * (m * u.y - c * u.x + u.z);
        a.SynchronizeTransform();
        e.SynchronizeTransform();
        return z <= b.b2_linearSlop && y <= b.b2_angularSlop
    };
    Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
    L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    L.b2WeldJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new h;
        this.localAnchorB = new h
    };
    L.prototype.b2WeldJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = r.e_weldJoint;
        this.referenceAngle = 0
    };
    L.prototype.Initialize = function(a, b, d) {
        this.bodyA = a;
        this.bodyB = b;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
})(); (function() {
    var b = Box2D.Dynamics.b2DebugDraw;
    b.b2DebugDraw = function() {
        this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
        var b = this;
        this.m_sprite = {
            graphics: {
                clear: function() {
                    b.m_ctx.clearRect(0, 0, b.m_ctx.canvas.width, b.m_ctx.canvas.height)
                }
            }
        }
    };
    b.prototype._color = function(b, k) {
        return "rgba(" + ((b & 16711680) >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + k + ")"
    };
    b.prototype.b2DebugDraw = function() {
        this.m_drawFlags = 0
    };
    b.prototype.SetFlags = function(b) {
        void 0 === b && (b = 0);
        this.m_drawFlags = b
    };
    b.prototype.GetFlags = function() {
        return this.m_drawFlags
    };
    b.prototype.AppendFlags = function(b) {
        void 0 === b && (b = 0);
        this.m_drawFlags |= b
    };
    b.prototype.ClearFlags = function(b) {
        void 0 === b && (b = 0);
        this.m_drawFlags &= ~b
    };
    b.prototype.SetSprite = function(b) {
        this.m_ctx = b
    };
    b.prototype.GetSprite = function() {
        return this.m_ctx
    };
    b.prototype.SetDrawScale = function(b) {
        void 0 === b && (b = 0);
        this.m_drawScale = b
    };
    b.prototype.GetDrawScale = function() {
        return this.m_drawScale
    };
    b.prototype.SetLineThickness = function(b) {
        void 0 === b && (b = 0);
        this.m_lineThickness = b;
        this.m_ctx.strokeWidth = b
    };
    b.prototype.GetLineThickness = function() {
        return this.m_lineThickness
    };
    b.prototype.SetAlpha = function(b) {
        void 0 === b && (b = 0);
        this.m_alpha = b
    };
    b.prototype.GetAlpha = function() {
        return this.m_alpha
    };
    b.prototype.SetFillAlpha = function(b) {
        void 0 === b && (b = 0);
        this.m_fillAlpha = b
    };
    b.prototype.GetFillAlpha = function() {
        return this.m_fillAlpha
    };
    b.prototype.SetXFormScale = function(b) {
        void 0 === b && (b = 0);
        this.m_xformScale = b
    };
    b.prototype.GetXFormScale = function() {
        return this.m_xformScale
    };
    b.prototype.DrawPolygon = function(b, k, d) {
        if (k) {
            var h = this.m_ctx,
                f = this.m_drawScale;
            h.beginPath();
            h.strokeStyle = this._color(d.color, this.m_alpha);
            h.moveTo(b[0].x * f, b[0].y * f);
            for (d = 1; d < k; d++) h.lineTo(b[d].x * f, b[d].y * f);
            h.lineTo(b[0].x * f, b[0].y * f);
            h.closePath();
            h.stroke()
        }
    };
    b.prototype.DrawSolidPolygon = function(b, k, d) {
        if (k) {
            var h = this.m_ctx,
                f = this.m_drawScale;
            h.beginPath();
            h.strokeStyle = this._color(d.color, this.m_alpha);
            h.fillStyle = this._color(d.color, this.m_fillAlpha);
            h.moveTo(b[0].x * f, b[0].y * f);
            for (d = 1; d < k; d++) h.lineTo(b[d].x * f, b[d].y * f);
            h.lineTo(b[0].x * f, b[0].y * f);
            h.closePath();
            h.fill();
            h.stroke()
        }
    };
    b.prototype.DrawCircle = function(b, k, d) {
        if (k) {
            var h = this.m_ctx,
                f = this.m_drawScale;
            h.beginPath();
            h.strokeStyle = this._color(d.color, this.m_alpha);
            h.arc(b.x * f, b.y * f, k * f, 0, 2 * Math.PI, !0);
            h.closePath();
            h.stroke()
        }
    };
    b.prototype.DrawSolidCircle = function(b, k, d, h) {
        if (k) {
            var f = this.m_ctx,
                l = this.m_drawScale,
                a = b.x * l,
                m = b.y * l;
            f.moveTo(0, 0);
            f.beginPath();
            f.strokeStyle = this._color(h.color, this.m_alpha);
            f.fillStyle = this._color(h.color, this.m_fillAlpha);
            f.arc(a, m, k * l, 0, 2 * Math.PI, !0);
            f.moveTo(a, m);
            f.lineTo((b.x + d.x * k) * l, (b.y + d.y * k) * l);
            f.closePath();
            f.fill();
            f.stroke()
        }
    };
    b.prototype.DrawSegment = function(b, k, d) {
        var h = this.m_ctx,
            f = this.m_drawScale;
        h.strokeStyle = this._color(d.color, this.m_alpha);
        h.beginPath();
        h.moveTo(b.x * f, b.y * f);
        h.lineTo(k.x * f, k.y * f);
        h.closePath();
        h.stroke()
    };
    b.prototype.DrawTransform = function(b) {
        var k = this.m_ctx,
            d = this.m_drawScale;
        k.beginPath();
        k.strokeStyle = this._color(16711680, this.m_alpha);
        k.moveTo(b.position.x * d, b.position.y * d);
        k.lineTo((b.position.x + this.m_xformScale * b.R.col1.x) * d, (b.position.y + this.m_xformScale * b.R.col1.y) * d);
        k.strokeStyle = this._color(65280, this.m_alpha);
        k.moveTo(b.position.x * d, b.position.y * d);
        k.lineTo((b.position.x + this.m_xformScale * b.R.col2.x) * d, (b.position.y + this.m_xformScale * b.R.col2.y) * d);
        k.closePath();
        k.stroke()
    }
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
function CBall(b, l, k) {
    var d;
    this._init = function(b, f, k) {
        d = createBitmap(k);
        d.x = b;
        d.y = f;
        d.regX = .5 * k.width;
        d.regY = .5 * k.height;
        s_oStage.addChild(d)
    };
    this.unload = function() {
        s_oStage.removeChild(d)
    };
    this.setVisible = function(b) {
        d.visible = b
    };
    this.setPosition = function(b, f) {
        d.x = b;
        d.y = f
    };
    this.setAngle = function(b) {
        d.rotation = b
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this.scale = function(b) {
        d.scaleX = b;
        d.scaleY = b
    };
    this.getScale = function() {
        return d.scaleX
    };
    this.childIndex = function(b) {
        s_oStage.setChildIndex(d, b)
    };
    this._init(b, l, k);
    return this
}
function CCharacter(b, l, k, d, h) {
    var f, n = {},
        a, m, y, u, B, t = 0,
        r, F, G, e, A = !1,
        v = !1,
        M = !1;
    this._init = function(b, d, h, k, l) {
        e = l;
        l = new createjs.SpriteSheet({
            images: [h],
            frames: {
                width: h.width / 8,
                height: h.height / 7,
                regX: h.width / 2 / 8,
                regY: h.height / 2 / 7
            },
            animations: {
                idle: [0, 11, "idle", .5],
                run: [12, 22],
                shot: [23, 28],
                head_shot_run: [29, 37],
                head_shot_idle: [38, 48],
                heel_shot: [49, 55],
                head_help: [38, 48, "head_help"],
                shot_help: [23, 28, "shot_help"],
                reverse: {
                    frames: [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
                }
            }
        });
        f = createSprite(l, "idle", h.width / 2 / 8, h.height / 2 / 7, h.width / 8, h.height / 7);
        f.x = b;
        f.y = d;
        b = y = h.width / 8;
        a = CANVAS_WIDTH + -y;
        m = b;
        B = k;
        u = CHARACTER_SPEED * B;
        e.addChild(f)
    };
    this.getX = function() {
        return f.x
    };
    this.getY = function() {
        return f.y
    };
    this.setPosition = function(a, b) {
        null !== a && (f.x = a);
        null !== b && (f.y = b)
    };
    this.setDirection = function(a) {
        t = a
    };
    this.getDirection = function() {
        return t
    };
    this.rotate = function(a) {
        f.scaleX = a
    };
    this.setVisible = function(a) {
        f.visible = a
    };
    this.changeState = function(a) {
        f.gotoAndPlay(a);
        "shot" !== a && "head_shot_run" !== a && "head_shot_idle" !== a && "heel_shot" !== a || this._onFinishAnimation()
    };
    this.stopAnimation = function() {
        f.stop()
    };
    this.playAnimation = function() {
        f.play()
    };
    this._onFinishAnimation = function() {
        f.on("animationend",
            function() {
                0 === t ? f.gotoAndPlay("idle") : -1 === t ? f.gotoAndPlay("reverse") : f.gotoAndPlay("run");
                f.removeAllEventListeners()
            })
    };
    this.setInfoData = function(a, b) {
        n[a] = b
    };
    this.getInfoData = function(a) {
        return n[a]
    };
    this.unload = function() {
        e.removeChild(f);
        s_oCharacter = null
    };
    this.createPlayerHead = function(a) {
        F = a.addHead({
                x: f.x + OFFSET_HEAD_POS.x,
                y: f.y + OFFSET_HEAD_POS.y
            },
            PLAYER_HEAD);
        v = !0
    };
    this.createHeel = function(a) {
        G = a.addLeg({
                x: f.x + OFFSET_HEEL_POS.x,
                y: f.y + OFFSET_HEEL_POS.y
            },
            PLAYER_HEEL);
        M = !0
    };
    this.createPlayerLeg = function(a) {
        r = a.addLeg({
                x: f.x + OFFSET_LEG_POS.x,
                y: f.y + OFFSET_LEG_POS.y
            },
            PLAYER_LEG);
        A = !0
    };
    this.getLegShoot = function() {
        return A
    };
    this.getHeadShoot = function() {
        return v
    };
    this.getHeelShoot = function() {
        return M
    };
    this.movement = function(b, d) {
        var e = s_oPhysicsController.getElementPosition(b.fixture1),
            h = s_oPhysicsController.getElementPosition(b.fixture2),
            k = s_oPhysicsController.getElementPosition(b.fixture3);
        if (d - f.x > STOP_WALK_DISTANCE_PLAYER || 0 > t) e.x += u * t;
        e.x >= a ? e.x = a: e.x <= m && (e.x = m);
        h.x = e.x + PLAYERS_COLLISION.sph_offset.x - PLAYERS_COLLISION.rec_offset.x;
        k.x = e.x + PLAYERS_COLLISION.rec_neck.x - PLAYERS_COLLISION.rec_offset.x;
        s_oPhysicsController.setElementPosition(b.fixture1, e);
        s_oPhysicsController.setElementPosition(b.fixture2, h);
        s_oPhysicsController.setElementPosition(b.fixture3, k);
        f.x = e.x + PLAYERS_COLLISION.rec_center_width;
        f.y = e.y - PLAYERS_COLLISION.rec_offset.y
    };
    this.update = function(a, b) {
        this.movement(a, b);
        if (!0 === A) {
            var d = s_oPhysicsController.getJointAngle(r.jointLeg);
            var e = {
                x: f.x + OFFSET_LEG_POS.x,
                y: f.y + OFFSET_LEG_POS.y
            };
            s_oPhysicsController.setElementPosition(r.fixture2, e);
            d >= DELETE_LEG_ANGLE_PLAYER && (s_oGame.removeLeg(r), A = !1)
        } else ! 0 === v ? (d = s_oPhysicsController.getJointTranslation(F.joint), e = {
            x: f.x + OFFSET_HEAD_POS.x,
            y: f.y + OFFSET_HEAD_POS.y
        },
            s_oPhysicsController.setElementPosition(F.fixture2, e), d >= PLAYER_HEAD.distance - .1 && (s_oGame.removeHead(F), v = !1)) : !0 === M && (d = s_oPhysicsController.getJointAngle(G.jointLeg), e = {
            x: f.x + OFFSET_HEEL_POS.x,
            y: f.y + OFFSET_HEEL_POS.y
        },
            s_oPhysicsController.setElementPosition(G.fixture2, e), d <= DELETE_HEEL_ANGLE_PLAYER && (s_oGame.removeLeg(G), M = !1))
    };
    s_oCharacter = this;
    this._init(b, l, k, d, h)
}
var s_oCharacter;
function COpponent(b, l, k, d, h, f, n) {
    var a, m, y, u, B, t, r = 0,
        F, G, e, A, v, M, E, P, z = !1,
        O = !1,
        K = !1,
        N = !1,
        J = !1,
        L = !1,
        g = !1,
        q, I, x, C, Q, R;
    this._init = function(b, d, e, g, f, h, k) {
        P = k;
        k = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 8,
                height: e.height / 7,
                regX: e.width / 2 / 8,
                regY: e.height / 2 / 7
            },
            animations: {
                idle: [0, 11, "idle", .5],
                run: [12, 22],
                shot: [23, 28],
                head_shot_run: [29, 37],
                head_shot_idle: [38, 48],
                heel_shot: [49, 55],
                reverse: {
                    frames: [22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12]
                }
            }
        });
        a = createSprite(k, "idle", e.width / 2 / 8, e.height / 2 / 7, e.width / 8, e.height / 7);
        a.x = b;
        a.y = d;
        a.scaleX = -1;
        u = e.width / 8;
        Q = I = C = x = 0;
        R = TIME_TRY_TO_SHOT_BALL_OPPONENT;
        E = h;
        b = u;
        m = CANVAS_WIDTH + -u;
        y = b;
        t = g;
        B = CHARACTER_SPEED * t;
        F = OPPONENT_DISTANCE_PROTECTION;
        M = f;
        P.addChild(a)
    };
    this.setChildIndex = function(b) {
        P.setChildIndex(a, b)
    };
    this.getChildIndex = function() {
        return P.getChildIndex(a)
    };
    this.getX = function() {
        return a.x
    };
    this.getY = function() {
        return a.y
    };
    this.removeAllComponent = function() { ! 0 === z ? (s_oGame.removeLeg(e), z = !1) : !0 === O ? (s_oGame.removeHead(A), O = !1) : !0 === K && (s_oGame.removeLeg(v), K = !1)
    };
    this.setPosition = function(b, d) {
        null !== b && (a.x = b);
        null !== d && (a.y = d)
    };
    this.rotate = function(b) {
        a.scaleX = b
    };
    this.changeState = function(b) {
        a.gotoAndPlay(b);
        "shot" !== b && "head_shot_run" !== b && "head_shot_idle" !== b && "heel_shot" !== b || this._onFinishAnimation()
    };
    this.stopAnimation = function() {
        a.stop()
    };
    this.playAnimation = function() {
        a.play()
    };
    this._onFinishAnimation = function() {
        a.on("animationend",
            function() {
                0 === r ? (a.gotoAndPlay("idle"), G = "idle") : -1 === r ? (a.gotoAndPlay("reverse"), G = "reverse") : (a.gotoAndPlay("run"), G = "run");
                a.removeAllEventListeners()
            })
    };
    this.unload = function() {
        P.removeChild(a)
    };
    this.createHead = function() {
        A = M.addHead({
                x: a.x + OFFSET_HEAD_POS_OPPONENT.x,
                y: a.y + OFFSET_HEAD_POS_OPPONENT.y
            },
            OPPONENT_HEAD);
        O = !0
    };
    this.createHeel = function() {
        v = M.addLeg({
                x: a.x + OFFSET_HEEL_POS_OPPONENT.x,
                y: a.y + OFFSET_HEEL_POS_OPPONENT.y
            },
            OPPONENT_HEEL);
        K = !0
    };
    this.createLeg = function() {
        e = M.addLeg({
                x: a.x + OFFSET_LEG_POS_OPPONENT.x,
                y: a.y + OFFSET_LEG_POS_OPPONENT.y
            },
            OPPONENT_LEG);
        z = !0
    };
    this.getLegShoot = function() {
        return z
    };
    this.getHeadShoot = function() {
        return O
    };
    this.getHeelShoot = function() {
        return K
    };
    this.protectTheGoal = function(b, d, e, g, f) {
        10 < b || -10 > b ? a.x < d ? this.move(1, E) : a.x > d && this.move( - 1, E) : this.move(0, E);
        this.shot(e, g, f)
    };
    this.saveTheBallFromGoal = function(a, b) {
        J = !0;
        10 < b || -10 > b ? this.move(1, E) : this.move(0, E);
        a < HEEL_SHOOT_DISTANCE_OPPONENT && (0 >= q ? !1 === K && (this.createHeel(), this.changeState("heel_shot"), q = randomRange(REACT_OPP_FOR_HEEL_SHOOT.min, REACT_OPP_FOR_HEEL_SHOOT.max)) : q -= 1 / createjs.Ticker.framerate)
    };
    this.move = function(b) {
        1 === b ? ("reverse" !== G && this.changeState("reverse"), G = "reverse") : -1 === b ? ("run" !== G && this.changeState("run"), G = "run") : 0 === b && ("idle" !== G && this.changeState("idle"), G = "idle");
        r = b;
        var c = s_oPhysicsController.getElementPosition(E.fixture1),
            d = s_oPhysicsController.getElementPosition(E.fixture2),
            e = s_oPhysicsController.getElementPosition(E.fixture3);
        c.x += B * b;
        c.x >= m ? c.x = m: c.x <= y && (c.x = y);
        d.x = c.x + OPPONENT_COLLISION.sph_offset.x - OPPONENT_COLLISION.rec_offset.x;
        e.x = c.x + OPPONENT_COLLISION.rec_neck.x - OPPONENT_COLLISION.rec_offset.x;
        s_oPhysicsController.setElementPosition(E.fixture1, c);
        s_oPhysicsController.setElementPosition(E.fixture2, d);
        s_oPhysicsController.setElementPosition(E.fixture3, e);
        a.x = c.x + OPPONENT_COLLISION.rec_center_width;
        a.y = c.y - OPPONENT_COLLISION.rec_offset.y
    };
    this.goToBall = function(b, d, e, g, f, h) {
        e > MIN_DISTANCE_BETWEEN_PLAYER && 0 < R || d.x < f.x || 1 > h ? this.move( - 1, E) : 0 < R || a.x > STOP_BACK_WALK_POSITION ? (this.move(0, E), R = 0 >= R ? TIME_TRY_TO_SHOT_BALL_OPPONENT: R - g) : e < GO_TO_DISTANCE && f.x < d.x ? this.move(1, E) : R = TIME_TRY_TO_SHOT_BALL_OPPONENT;
        this.shot(b, d, g)
    };
    this.shot = function(b, d, e) {
        b < DISTANCE_START_SHOOT_OPPONENT && (0 >= C ? (d.y < a.y ? !1 === O && (this.createHead(), 1 === r || -1 === r ? this.changeState("head_shot_run") : this.changeState("head_shot_idle")) : !1 === z && (this.createLeg(), this.changeState("shot")), C = randomRange(TIME_INTERVAL_SHOOT.min, TIME_INTERVAL_SHOOT.max)) : C -= e)
    };
    this.checkAFinishedShoot = function() {
        if (!0 === z) {
            var b = s_oPhysicsController.getJointAngle(e.jointLeg);
            var d = {
                x: a.x + OFFSET_LEG_POS_OPPONENT.x,
                y: a.y + OFFSET_LEG_POS_OPPONENT.y
            };
            s_oPhysicsController.setElementPosition(e.fixture2, d);
            b <= DELETE_LEG_ANGLE_OPPONENT && (s_oGame.removeLeg(e), z = !1)
        } else ! 0 === O ? (b = s_oPhysicsController.getJointTranslation(A.joint), d = {
            x: a.x + OFFSET_HEAD_POS_OPPONENT.x,
            y: a.y + OFFSET_HEAD_POS_OPPONENT.y
        },
            s_oPhysicsController.setElementPosition(A.fixture2, d), b >= PLAYER_HEAD.distance - .1 && (s_oGame.removeHead(A), O = !1)) : !0 === K && (b = s_oPhysicsController.getJointAngle(v.jointLeg), d = {
            x: a.x + OFFSET_HEEL_POS_OPPONENT.x,
            y: a.y + OFFSET_HEEL_POS_OPPONENT.y
        },
            s_oPhysicsController.setElementPosition(v.fixture2, d), b >= DELETE_HEEL_ANGLE_OPPONENT && (s_oGame.removeLeg(v), K = !1))
    };
    this.getAggressive = function() {
        return g
    };
    this.setAggressive = function(a, b) {
        F = (g = a) ? OPPONENT_DISTANCE_PROTECTION_AGG: OPPONENT_DISTANCE_PROTECTION[b]
    };
    this.setDistanceProtection = function(a) {
        F = a
    };
    this.restart = function() {
        L = J = N = !1;
        Q = I = C = x = 0;
        this.move(0, E)
    };
    this.activeProtectGoal = function() { ! 1 === N && (N = !0, L = !1, I = randomRange(TIME_REACTION_FROM_SAVE_TO_GO.min, TIME_REACTION_FROM_SAVE_TO_GO.max), C = randomRange(.5 * TIME_INTERVAL_SHOOT.min, .5 * TIME_INTERVAL_SHOOT.max), x = randomRange(TIME_IN_PROTECT_STATE.min, TIME_IN_PROTECT_STATE.max), R = TIME_TRY_TO_SHOT_BALL_OPPONENT)
    };
    this.activeGoToBall = function() { ! 1 === L && (C = randomRange(.5 * TIME_INTERVAL_SHOOT.min, .5 * TIME_INTERVAL_SHOOT.max), R = TIME_TRY_TO_SHOT_BALL_OPPONENT, N = !1, L = !0)
    };
    this.chooseAction = function(a, b, d) {
        J = !1;
        0 >= I ? a > F && b.x < BALL_VELOCITY_X_REACTION ? this.activeProtectGoal() : a < F || b.x > BALL_VELOCITY_X_REACTION_ATTACK ? this.activeGoToBall() : b.x < BALL_VELOCITY_X_REACTION_ATTACK ? this.activeProtectGoal() : this.activeGoToBall() : I -= d
    };
    this.decision = function(b, d, e, g, f) {
        a.x < b.x + d ? (!1 === J && (q = randomRange(REACT_OPP_FOR_HEEL_SHOOT.min, REACT_OPP_FOR_HEEL_SHOOT.max)), J = !0, L = N = !1) : this.chooseAction(e, g, f)
    };
    this.update = function(b, d, e, g) {
        var c = 1 / createjs.Ticker.framerate;
        this.checkAFinishedShoot();
        var f = s_oGame.getBallSpritePos(),
            h = OBJECT[1][0].x,
            k = h - a.x,
            m = distanceV2({
                    x: a.x,
                    y: a.y
                },
                f),
            l = distanceV2({
                    x: a.x,
                    y: a.y
                },
                e),
            n = OFFSET_OPPONENT_FORWOARD_BALL + .2 * (a.y - OPPONENT_COLLISION.recHeight - f.y);
        0 >= Q ? (this.decision(f, n, m, d, c), Q = TIME_REFRESH_AI[g]) : Q -= c;
        N ? 0 < x ? (this.protectTheGoal(k, h, m, f, c), x -= c) : (N = !1, L = !0, I = randomRange(TIME_AFTER_REACTION.min, TIME_AFTER_REACTION.max)) : L ? this.goToBall(m, f, l, c, e, d.x * d.x + d.y * d.y) : J ? this.saveTheBallFromGoal(m, k) : this.move(0);
        s_oPhysicsController.setElementAngle(b.fixture1, 0)
    };
    this._init(b, l, k, d, h, f, n)
}
function CTeamChoose() {
    var b, l, k, d, h, f, n, a, m, y, u, B, t, r, F, G, e, A, v, M, E = null,
        P = null;
    this._init = function() {
        var z;
        m = createBitmap(s_oSpriteLibrary.getSprite("bg_select_team"));
        s_oStage.addChild(m);
        e = [];
        A = [];
        G = new createjs.Container;
        for (z = v = 0; z < TOT_TEAM; z++) this._createFlag(z, FLAG_POSITION[z].x, FLAG_POSITION[z].y, Math.floor(500 * Math.random()), 1500, G),
            this._createPlayer(z, G);
        z = s_oSpriteLibrary.getSprite("flag_selection");
        F = createBitmap(z);
        F.x = e[0].getX();
        F.y = e[0].getY();
        F.regX = .5 * z.width;
        F.regY = .5 * z.height;
        s_oStage.addChild(G);
        G.y = 12;
        u = new createjs.Container;
        z = new createjs.Text(TEXT_SELECT_YOUR_TEAM, "48px " + FONT_GAME, TEXT_COLOR);
        z.textAlign = "center";
        z.x = 0;
        z.y = 0;
        var O = new createjs.Text(TEXT_SELECT_YOUR_TEAM, "48px " + FONT_GAME, "#000000");
        O.textAlign = "center";
        O.x = 0;
        O.y = 0;
        O.outline = 5;
        u.x = 682;
        u.y = 176;
        u.addChild(O, z);
        s_oStage.addChild(u);
        z = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - z.width / 2 - 10;
        l = z.height / 2 + 10;
        r = new CGfxButton(b, l, z, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"),
            n = b - z.width / 2 - 10,
            a = z.height / 2 + 10,
            t = new CToggle(n, a, z, s_bAudioActive, s_oStage),
            t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        h = .5 * CANVAS_WIDTH + 600;
        f = .5 * CANVAS_HEIGHT + 340;
        z = s_oSpriteLibrary.getSprite("but_continue");
        y = new CGfxButton(h, f, z, s_oStage);
        y.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this);
        y.pulseAnimation();
        z = window.document;
        O = z.documentElement;
        E = O.requestFullscreen || O.mozRequestFullScreen || O.webkitRequestFullScreen || O.msRequestFullscreen;
        P = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen; ! 1 === ENABLE_FULLSCREEN && (E = !1);
        E && !1 === inIframe() && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), k = z.width / 4 + 10, d = l, M = new CToggle(k, d, z, s_bFullscreen, s_oStage), M.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        B = new createjs.Shape;
        B.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(B);
        createjs.Tween.get(B).to({
                alpha: 0
            },
            1E3).call(function() {
            B.visible = !1;
            G.addChild(F)
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this._createFlag = function(a, b, d, f, h, k) {
        var g = s_oSpriteLibrary.getSprite("flag_" + a);
        e[a] = new CGfxButton(b, d, g, k);
        e[a].addEventListenerWithParams(ON_MOUSE_UP, this._onButTeamChoose, this, a);
        a = e[a].getButton();
        a.scaleX = 0;
        a.scaleY = 0;
        createjs.Tween.get(a).wait(f).to({
                scaleY: 1,
                scaleX: 1
            },
            h, createjs.Ease.elasticOut)
    };
    this._createPlayer = function(a, b) {
        var d = s_oSpriteLibrary.getSprite("team_" + a);
        A[a] = new CCharacter(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 30, d, 1, b);
        A[a].changeState("run");
        0 !== a && A[a].setVisible(!1)
    };
    this.refreshButtonPos = function(e, m) {
        r.setPosition(b - e, m + l);
        y.setPosition(h - e, f - m); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(n - e, m + a);
        E && !1 === inIframe() && M.setPosition(k + s_iOffsetX, d + s_iOffsetY)
    };
    this._onButTeamChoose = function(a) {
        v !== a && (A[a].setVisible(!0), F.x = e[a].getX(), F.y = e[a].getY(), A[v].setVisible(!1), v = a)
    };
    this.unload = function() {
        for (var a = 0; a < e.length; a++) e[a].unload(),
            e[a] = null;
        r.unload();
        r = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(),
            t = null;
        E && !1 === inIframe() && M.unload();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oTeamChoose = null
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButContinueRelease = function() {
        this.unload();
        s_oMain.gotoGame(v)
    };
    this.resetFullscreenBut = function() {
        M.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? P.call(window.document) : E.call(window.document.documentElement);
        sizeHandler()
    };
    s_oTeamChoose = this;
    this._init()
}
var s_oTeamChoose = null;
function CVsPanel(b, l, k, d, h) {
    var f, n, a, m, y, u, B, t, r, F, G;
    this._init = function(b, d, f, h, k) {
        n = new createjs.Container;
        null !== b && (a = createBitmap(b), n.addChild(a));
        t = new createjs.Container;
        r = new createjs.Container;
        F = new createjs.Container;
        b = h + 1;
        h = new createjs.Text(TEXT_MATCH + " " + b, "32px " + FONT_GAME, "#000000");
        h.x = .5 * CANVAS_WIDTH;
        h.y = .5 * CANVAS_HEIGHT - 150;
        h.textAlign = "center";
        h.outline = 5;
        n.addChild(h);
        b = new createjs.Text(TEXT_MATCH + " " + b, "32px " + FONT_GAME, TEXT_COLOR);
        b.x = .5 * CANVAS_WIDTH;
        b.y = .5 * CANVAS_HEIGHT - 150;
        b.textAlign = "center";
        n.addChild(b);
        b = s_oSpriteLibrary.getSprite("flag_" + d);
        m = createBitmap(b);
        m.regX = .5 * b.width;
        m.regY = .5 * b.height;
        m.x = .5 * CANVAS_WIDTH - 200;
        m.y = .5 * CANVAS_HEIGHT + 30;
        t.addChild(m);
        b = s_oSpriteLibrary.getSprite("flag_" + f);
        y = createBitmap(b);
        y.regX = .5 * b.width;
        y.regY = .5 * b.height;
        y.x = .5 * CANVAS_WIDTH + 200;
        y.y = .5 * CANVAS_HEIGHT + 30;
        r.addChild(y);
        d = s_oSpriteLibrary.getSprite("team_" + d);
        new CCharacter(.5 * CANVAS_WIDTH - 250, .5 * CANVAS_HEIGHT + 10, d, 0, t);
        f = s_oSpriteLibrary.getSprite("team_" + f);
        new COpponent(.5 * CANVAS_WIDTH + 250, .5 * CANVAS_HEIGHT + 10, f, CHARACTER_SPEED, null, null, r);
        r.x = .5 * CANVAS_WIDTH;
        t.x = .5 * -CANVAS_WIDTH;
        F.x = .5 * CANVAS_WIDTH;
        F.y = .5 * CANVAS_HEIGHT + 30;
        n.addChild(t, r, F);
        null === k && (k = 0);
        createjs.Tween.get(r).wait(k).to({
                x: 0
            },
            1E3, createjs.Ease.elasticOut);
        var e = this;
        createjs.Tween.get(t).wait(k).to({
                x: 0
            },
            1E3, createjs.Ease.elasticOut).call(function() {
            e._createVsText(F);
            F.scaleX = 10;
            F.scaleY = 10;
            createjs.Tween.get(F).to({
                    scaleX: 1,
                    scaleY: 1
                },
                1E3, createjs.Ease.bounceOut).call(function() {
                e._createButContinue(n, .5 * CANVAS_WIDTH + 600, .5 * CANVAS_HEIGHT + 340)
            })
        });
        s_oStage.addChild(n);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, b) {
        G && G.setPosition(f.x - a, f.y - b)
    };
    this._createButContinue = function(a, b, d) {
        f = {
            x: b,
            y: d
        };
        b = s_oSpriteLibrary.getSprite("but_continue");
        G = new CGfxButton(f.x, f.y, b, a);
        G.addEventListener(ON_MOUSE_UP, this._onExitVsPanel, this);
        G.pulseAnimation();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this._createVsText = function(a) {
        u = new createjs.Text(TEXT_VS, "100px " + FONT_GAME, "#000000");
        u.x = 0;
        u.y = 0;
        u.textAlign = "center";
        u.textBaseline = "middle";
        u.outline = 5;
        a.addChild(u);
        B = new createjs.Text(TEXT_VS, "100px " + FONT_GAME, TEXT_COLOR);
        B.x = 0;
        B.y = 0;
        B.textAlign = "center";
        B.textBaseline = "middle";
        a.addChild(B)
    };
    this.setChildIndex = function(a) {
        s_oStage.setChildIndex(n, a)
    };
    this.unload = function() {
        s_oStage.removeChild(n)
    };
    this._onExitVsPanel = function() {
        this.unload();
        s_oGame._onExitVsPanel();
        s_oInterface.unloadHelpPanel()
    };
    this._init(b, l, k, d, h);
    s_oVsPanel = this;
    return this
}
var s_oVsPanel = null;
function CGoal() {
    var b, l, k, d, h;
    this._init = function() {
        b = [];
        var d = OBJECT[0][0],
            h = OBJECT[1][0],
            a = s_oSpriteLibrary.getSprite("goal_back");
        l = createBitmap(a);
        l.x = d.x + d.offset_back.x;
        l.y = d.y + d.offset_back.y;
        l.regX = .5 * a.width;
        l.regy = .5 * a.heigth;
        s_oStage.addChild(l);
        b[0] = l;
        k = createBitmap(a);
        k.x = h.x + h.offset_back.x;
        k.y = h.y + h.offset_back.y;
        k.regX = .5 * a.width;
        k.regy = .5 * a.heigth;
        k.scaleX = -1;
        s_oStage.addChild(k);
        b[1] = k
    };
    this.createGoalFront = function() {
        var f = OBJECT[0][0],
            k = OBJECT[1][0],
            a = s_oSpriteLibrary.getSprite("goal_front");
        d = createBitmap(a);
        d.x = f.x + f.offset_front.x;
        d.y = f.y + f.offset_front.y;
        d.regX = .5 * a.width;
        d.regy = .5 * a.heigth;
        s_oStage.addChild(d);
        b[2] = d;
        h = createBitmap(a);
        h.x = k.x + k.offset_front.x;
        h.y = k.y + k.offset_front.y;
        h.regX = .5 * a.width;
        h.regy = .5 * a.heigth;
        h.scaleX = -1;
        s_oStage.addChild(h);
        b[3] = h
    };
    this.unload = function() {
        for (var d = 0; d < b.length; d++) s_oStage.removeChild(b[d])
    };
    this._init();
    return this
}
function CScoreBoard(b, l, k, d, h, f, n) {
    var a, m, y, u, B, t, r;
    this._init = function(b, d, e, f, h, k, l) {
        a = {
            x: d,
            y: e
        };
        m = new createjs.Container;
        m.x = a.x;
        m.y = a.y;
        y = createBitmap(b);
        y.x = 0;
        y.y = -3;
        y.regX = .5 * b.width;
        y.regY = 0;
        m.addChild(y);
        B = new createjs.Text(f + " 0 - 0 " + h, "28px " + FONT_GAME, "#000000");
        B.x = 0;
        B.y = .5 * b.height - 3;
        B.textAlign = "center";
        B.textBaseline = "middle";
        B.outline = 5;
        m.addChild(B);
        u = new createjs.Text(f + " 0 - 0 " + h, "28px " + FONT_GAME, TEXT_COLOR);
        u.x = 0;
        u.y = B.y;
        u.textAlign = "center";
        u.textBaseline = "middle";
        m.addChild(u);
        b = s_oSpriteLibrary.getSprite("flag_" + k);
        t = createBitmap(b);
        t.x = -170;
        t.y = 5;
        t.regX = .5 * b.width;
        t.regY = 0;
        t.scaleX = .3;
        t.scaleY = .3;
        m.addChild(t);
        l = s_oSpriteLibrary.getSprite("flag_" + l);
        r = createBitmap(l);
        r.x = 170;
        r.y = 5;
        r.regX = .5 * b.width;
        r.regY = 0;
        r.scaleX = .3;
        r.scaleY = .3;
        m.addChild(r);
        s_oStage.addChild(m)
    };
    this.changeTeamsFlag = function(a, b) {
        t.image = s_oSpriteLibrary.getSprite("flag_" + a);
        r.image = s_oSpriteLibrary.getSprite("flag_" + b)
    };
    this.getStartPosition = function() {
        return a
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.unload = function() {
        s_oStage.removeChild(m)
    };
    this.refresh = function(a) {
        B.text = a;
        u.text = a
    };
    this.getResult = function() {
        return u.text
    };
    this._init(b, l, k, d, h, f, n);
    return this
}
function CTimeBoard(b, l, k) {
    var d, h, f, n, a;
    this._init = function(b, k, l) {
        d = {
            x: k,
            y: l
        };
        h = new createjs.Container;
        h.x = d.x;
        h.y = d.y;
        f = createBitmap(b);
        f.x = 0;
        f.y = 0;
        f.regX = 0;
        f.regY = 0;
        h.addChild(f);
        a = new createjs.Text(TEXT_TIME + ": 0", "28px " + FONT_GAME, "#000000");
        a.x = .5 * b.width;
        a.y = .5 * b.height;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.outline = 5;
        h.addChild(a);
        n = new createjs.Text(TEXT_TIME + ": 0", "28px " + FONT_GAME, TEXT_COLOR);
        n.x = .5 * b.width;
        n.y = .5 * b.height;
        n.textAlign = "center";
        n.textBaseline = "middle";
        h.addChild(n);
        s_oStage.addChild(h)
    };
    this.getStartPosition = function() {
        return d
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.unload = function() {
        s_oStage.removeChild(h)
    };
    this.refresh = function(b) {
        n.text = b;
        a.text = b
    };
    this._init(b, l, k);
    return this
}
function CCrowd(b, l, k) {
    var d, h;
    this._init = function(b, k, a) {
        d = createBitmap(b);
        d.x = k;
        d.y = a;
        d.regX = 0;
        d.regY = .5 * b.height;
        h = new createjs.Container;
        h.addChild(d);
        s_oStage.addChild(h)
    };
    this.getPosition = function() {
        return {
            x: d.x,
            y: d.y
        }
    };
    this.crowOn = function(b, d, a, k) {
        var f = createBitmap(b);
        f.x = d;
        f.y = a;
        f.regX = 0;
        f.regY = .5 * b.height;
        h.addChild(f);
        b = a + TWEEN_CROWD_ON_Y;
        createjs.Tween.get(f).to({
                y: b
            },
            k, createjs.Ease.quartOut).call(function() {
            createjs.Tween.get(f).to({
                y: a
            },
                k - 100, createjs.Ease.quartIn).call(function() {
                s_oStage.removeChild(f)
            })
        })
    };
    this.unload = function() {
        s_oStage.removeChild(h)
    };
    this._init(b, l, k);
    return this
}
function CSpriteAnimator() {
    var b, l, k, d, h = 0,
        f = 0,
        n = 0;
    this._init = function() {
        d = !1;
        k = 0;
        b = new createjs.Container;
        l = [];
        s_oStage.addChild(b)
    };
    this.loadSprites = function(a, d, f, h, k) {
        var m = l.length;
        l[m] = createBitmap(a);
        l[m].x = d;
        l[m].y = f;
        l[m].regX = h;
        l[m].regY = k;
        0 !== m && (l[m].visible = !1);
        b.addChild(l[m])
    };
    this.unload = function() {
        s_oStage.removeChild(b)
    };
    this.startAnimation = function(a) {
        k = 0;
        f = a;
        n = 0;
        d = !0
    };
    this.getStateAnimation = function() {
        return d
    };
    this.update = function() {
        d && (h += s_iTimeElaps, 30 <= h && (k++, k < l.length ? (l[k - 1].visible = !1, l[k].visible = !0) : (n === f ? d = !1 : (n++, k = 1), l[l.length - 1].visible = !1, l[0].visible = !0)), h = 0)
    };
    this._init();
    return this
}
function CCongratulations(b, l) {
    var k, d, h, f, n, a, m, y, u, B, t, r;
    this._init = function(b, l) {
        f = createBitmap(s_oSpriteLibrary.getSprite("bg_congratulations"));
        s_oStage.addChild(f);
        var e = s_oSpriteLibrary.getSprite("but_home");
        k = CANVAS_WIDTH / 2;
        n = new CGfxButton(k, 595, e, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onButMenuRelease, this);
        n.pulseAnimation();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e = s_oSpriteLibrary.getSprite("audio_icon"),
            d = CANVAS_WIDTH - e.height / 2 - 10,
            h = e.height / 2 + 10,
            r = new CToggle(d, h, e, s_bAudioActive, s_oStage),
            r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        a = new createjs.Text(TEXT_CONGRATULATIONS, "36px " + FONT_GAME, "#000000");
        a.x = .5 * CANVAS_WIDTH;
        a.y = .5 * CANVAS_HEIGHT - 270;
        a.textAlign = "center";
        a.outline = 5;
        s_oStage.addChild(a);
        m = new createjs.Text(TEXT_CONGRATULATIONS, "36px " + FONT_GAME, TEXT_COLOR);
        m.x = .5 * CANVAS_WIDTH;
        m.y = .5 * CANVAS_HEIGHT - 270;
        m.textAlign = "center";
        s_oStage.addChild(m);
        e = this.createResultText(b);
        y = new createjs.Text(TEXT_TOTAL_SCORE + ": " + l, "50px " + FONT_GAME, "#000000");
        y.x = .5 * CANVAS_WIDTH;
        y.y = .5 * CANVAS_HEIGHT + e;
        y.textAlign = "center";
        y.outline = 5;
        s_oStage.addChild(y);
        u = new createjs.Text(TEXT_TOTAL_SCORE + ": " + l, "50px " + FONT_GAME, TEXT_COLOR);
        u.x = .5 * CANVAS_WIDTH;
        u.y = .5 * CANVAS_HEIGHT + e;
        u.textAlign = "center";
        s_oStage.addChild(u);
        e = s_oSpriteLibrary.getSprite("character_pose_" + b[0].player_team);
        var t = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 3,
                height: e.height,
                regX: e.width / 2 / 3,
                regY: e.height / 2
            },
            animations: {
                angry: [0],
                win: [1],
                champion: [2]
            }
        });
        e = createSprite(t, "champion", e.width / 2 / 3, e.height / 2, e.width / 3, e.height);
        e.scaleX = .8;
        e.scaleY = .8;
        e.x = .5 * CANVAS_WIDTH - 440;
        e.y = .5 * CANVAS_HEIGHT + 125;
        s_oStage.addChild(e);
        B = new createjs.Shape;
        B.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(B);
        createjs.Tween.get(B).to({
                alpha: 0
            },
            1E3).call(function() {
            B.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.createResultText = function(a) {
        t = new createjs.Container;
        var b = -200,
            d = 200,
            f = !1,
            h = 0;
        1 === (TOT_TEAM - 1) % 2 && (f = !0, h = TOT_TEAM - 2);
        for (var k = 0; k < a.length; k++, d += 150) {
            var m = new createjs.Container;
            m.alpha = 0;
            var l = a[k].result,
                n = k + 1;
            var r = new createjs.Text(l, "28px " + FONT_GAME, "#000000");
            r.x = 0;
            r.y = 3;
            r.textAlign = "center";
            r.outline = 5;
            m.addChild(r);
            l = new createjs.Text(l, "28px " + FONT_GAME, TEXT_COLOR);
            l.x = 0;
            l.y = 3;
            l.textAlign = "center";
            m.addChild(l);
            l = new createjs.Text(n + ".", "28px " + FONT_GAME, "#000000");
            l.x = -200;
            l.y = 3;
            l.textAlign = "center";
            l.outline = 5;
            m.addChild(l);
            n = new createjs.Text(n + ".", "28px " + FONT_GAME, TEXT_COLOR);
            n.x = -200;
            n.y = 3;
            n.textAlign = "center";
            m.addChild(n);
            n = s_oSpriteLibrary.getSprite("flag_" + a[k].player_team);
            l = createBitmap(n);
            l.x = -150;
            l.y = 5;
            l.regX = .5 * n.width;
            l.regY = 0;
            l.scaleX = .3;
            l.scaleY = .3;
            m.addChild(l);
            l = s_oSpriteLibrary.getSprite("flag_" + a[k].opponent_team);
            l = createBitmap(l);
            l.x = 150;
            l.y = 5;
            l.regX = .5 * n.width;
            l.regY = 0;
            l.scaleX = .3;
            l.scaleY = .3;
            m.addChild(l);
            m.y = .5 * CANVAS_HEIGHT + b;
            0 === k % 2 ? (n = h === k && f ? .5 * CANVAS_WIDTH: .5 * CANVAS_WIDTH - 250, m.x = -100) : (m.x = CANVAS_WIDTH + 100, n = .5 * CANVAS_WIDTH + 250, b += 40);
            createjs.Tween.get(m).wait(d).to({
                    x: n,
                    alpha: 1
                },
                500, createjs.Ease.cubicIn);
            t.addChild(m)
        }
        s_oStage.addChild(t);
        return b + 60
    };
    this.refreshButtonPos = function(a, b) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(d - a, b + h)
    };
    this.unload = function() {
        n.unload();
        n = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(),
            r = null;
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oCongratulations = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButMenuRelease = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    s_oCongratulations = this;
    this._init(b, l)
}
var s_oCongratulations = null;
function CController() {
    var b, l, k, d, h, f, n, a;
    this._init = function() {
        b = {
            x: .5 * CANVAS_WIDTH - 450,
            y: .5 * CANVAS_HEIGHT + 320
        };
        l = {
            x: .5 * CANVAS_WIDTH + 450,
            y: .5 * CANVAS_HEIGHT + 320
        };
        k = new createjs.Container;
        k.x = b.x;
        k.y = b.y;
        d = new createjs.Container;
        d.x = l.x;
        d.y = l.y;
        var m = s_oSpriteLibrary.getSprite("arrow");
        h = new CGfxButton( - 90, 0, m, k);
        h.addEventListener(ON_MOUSE_DOWN, s_oGame.moveLeft, this);
        h.addEventListener(ON_MOUSE_UP, s_oGame.onCommandLeftUp, this);
        h.setScaleX( - 1);
        f = new CGfxButton(90, 0, m, k);
        f.addEventListener(ON_MOUSE_DOWN, s_oGame.moveRight, this);
        f.addEventListener(ON_MOUSE_UP, s_oGame.onCommandRightUp, this);
        m = s_oSpriteLibrary.getSprite("but_head");
        n = new CGfxButton( - 90, 0, m, d);
        n.addEventListener(ON_MOUSE_DOWN, s_oGame.headShot, this);
        n.addEventListener(ON_MOUSE_UP, s_oGame.onCommandActionUp, this);
        m = s_oSpriteLibrary.getSprite("but_kick");
        a = new CGfxButton(90, 0, m, d);
        a.addEventListener(ON_MOUSE_DOWN, s_oGame.shot, this);
        a.addEventListener(ON_MOUSE_UP, s_oGame.onCommandActionUp, this);
        s_oStage.addChild(k, d)
    };
    this.block = function(b) {
        h.block(b);
        f.block(b);
        n.block(b);
        a.block(b)
    };
    this.getStartPositionRightSide = function() {
        return b
    };
    this.getStartPositionLeftSide = function() {
        return l
    };
    this.setPositionRightSide = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.setPositionLeftSide = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.unload = function() {
        n.unload();
        n = null;
        h.unload();
        h = null;
        f.unload();
        f = null;
        a.unload();
        a = null;
        s_oStage.removeChild(k, d)
    };
    this._init();
    return this
}
function CCreditsPanel() {
    var b, l, k, d, h, f, n, a, m, y;
    this._init = function() {
        y = new createjs.Container;
        s_oStage.addChild(y);
        l = createBitmap(s_oSpriteLibrary.getSprite("bg_select_team"));
        y.addChild(l);
        n = new createjs.Shape;
        n.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        n.alpha = .01;
        n.on("click", this._onLogoButRelease);
        n.cursor = "pointer";
        y.addChild(n);
        var u = s_oSpriteLibrary.getSprite("but_exit");
        b = .5 * CANVAS_WIDTH + 370;
        d = new CGfxButton(b, 190, u, y);
        d.addEventListener(ON_MOUSE_UP, this.unload, this);
        f = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + FONT_GAME, "#000");
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = CANVAS_WIDTH / 2;
        f.y = 320;
        f.outline = 5;
        y.addChild(f);
        h = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + FONT_GAME, TEXT_COLOR);
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = f.x;
        h.y = f.y;
        y.addChild(h);
        u = s_oSpriteLibrary.getSprite("logo_ctl");
        k = createBitmap(u);
        k.regX = u.width / 2;
        k.regY = u.height / 2;
        k.x = CANVAS_WIDTH / 2;
        k.y = 420;
        y.addChild(k);
        m = new createjs.Text(TEXT_LINK1, "50px " + FONT_GAME, "#000");
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.x = CANVAS_WIDTH / 2;
        m.y = 560;
        m.outline = 5;
        y.addChild(m);
        a = new createjs.Text(TEXT_LINK1, "50px " + FONT_GAME, TEXT_COLOR);
        a.textAlign = "center";
        a.textBaseline = "alphabetic";
        a.x = m.x;
        a.y = m.y;
        y.addChild(a)
    };
    this.unload = function() {
        n.off("click", this._onLogoButRelease);
        d.unload();
        d = null;
        s_oStage.removeChild(y)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    };
    this._init()
}
function CPause() {
    var b;
    this._init = function() {
        var l = new createjs.Container;
        l.alpha = 0;
        b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.alpha = .5;
        var k = new createjs.Shape;
        k.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.hitArea = k;
        b.on("click",
            function() {});
        l.addChild(b);
        k = new createjs.Text(TEXT_PAUSE, "50px " + FONT_GAME, "#000000");
        k.x = .5 * CANVAS_WIDTH;
        k.y = .5 * CANVAS_HEIGHT - 130;
        k.textAlign = "center";
        k.outline = 5;
        l.addChild(k);
        var d = new createjs.Text(TEXT_PAUSE, "50px " + FONT_GAME, TEXT_COLOR);
        d.x = k.x;
        d.y = k.y;
        d.textAlign = "center";
        l.addChild(d);
        k = s_oSpriteLibrary.getSprite("but_continue"); (new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 70, k, l)).addEventListenerWithParams(ON_MOUSE_UP, this._onLeavePause, this, l);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
                alpha: 1
            },
            300, createjs.quartOut)
    };
    this.unload = function() {
        b.off("click",
            function() {});
        s_oStage.removeChild(void 0)
    };
    this._onLeavePause = function(b) {
        createjs.Tween.get(b).to({
                alpha: 0
            },
            300, createjs.quartIn).call(function() {
            s_oInterface.unloadPause();
            s_oGame.unpause(!0)
        })
    };
    this._init();
    return this
}
function CAreYouSurePanel(b) {
    var l, k, d, h, f;
    this._init = function() {
        f = new createjs.Container;
        f.visible = !1;
        n.addChild(f);
        var a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        f.addChild(a);
        l = new createjs.Text(TEXT_ARE_SURE, "50px " + FONT_GAME, "#000");
        l.x = CANVAS_WIDTH / 2;
        l.y = 300;
        l.textAlign = "center";
        l.textBaseline = "middle";
        l.outline = 5;
        f.addChild(l);
        k = new createjs.Text(l.text, "50px " + FONT_GAME, TEXT_COLOR);
        k.x = l.x;
        k.y = l.y;
        k.textAlign = "center";
        k.textBaseline = "middle";
        f.addChild(k);
        d = new CGfxButton(CANVAS_WIDTH / 2 + 170, 500, s_oSpriteLibrary.getSprite("but_yes"), f);
        d.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        h = new CGfxButton(CANVAS_WIDTH / 2 - 170, 500, s_oSpriteLibrary.getSprite("but_exit"), f);
        h.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this.show = function() {
        s_oGame.unpause(!1);
        f.visible = !0
    };
    this._onButYes = function() {
        s_oGame.unpause(!0);
        s_oGame.onExit()
    };
    this._onButNo = function() {
        s_oGame.unpause(!0);
        f.visible = !1
    };
    var n = b;
    this._init()
};