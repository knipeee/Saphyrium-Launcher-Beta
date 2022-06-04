var Va = Object.defineProperty,
    Ha = Object.defineProperties;
var Ba = Object.getOwnPropertyDescriptors;
var js = Object.getOwnPropertySymbols;
var Fa = Object.prototype.hasOwnProperty,
    ja = Object.prototype.propertyIsEnumerable;
var Us = (e, t, n) => t in e ? Va(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
    Ds = (e, t) => { for (var n in t || (t = {})) Fa.call(t, n) && Us(e, n, t[n]); if (js)
            for (var n of js(t)) ja.call(t, n) && Us(e, n, t[n]); return e },
    zs = (e, t) => Ha(e, Ba(t));
const Ua = function() { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver(s => { for (const i of s)
            if (i.type === "childList")
                for (const r of i.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && o(r) }).observe(document, { childList: !0, subtree: !0 });

    function n(s) { const i = {}; return s.integrity && (i.integrity = s.integrity), s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? i.credentials = "include" : s.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i }

    function o(s) { if (s.ep) return;
        s.ep = !0; const i = n(s);
        fetch(s.href, i) } };
Ua();

function Xo(e, t) { const n = Object.create(null),
        o = e.split(","); for (let s = 0; s < o.length; s++) n[o[s]] = !0; return t ? s => !!n[s.toLowerCase()] : s => !!n[s] }
const Da = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    za = Xo(Da);

function Xi(e) { return !!e || e === "" }

function Fe(e) { if (W(e)) { const t = {}; for (let n = 0; n < e.length; n++) { const o = e[n],
                s = Ee(o) ? Ka(o) : Fe(o); if (s)
                for (const i in s) t[i] = s[i] } return t } else { if (Ee(e)) return e; if (Ce(e)) return e } }
const Ga = /;(?![^(]*\))/g,
    Za = /:(.+)/;

function Ka(e) { const t = {}; return e.split(Ga).forEach(n => { if (n) { const o = n.split(Za);
            o.length > 1 && (t[o[0].trim()] = o[1].trim()) } }), t }

function nt(e) { let t = ""; if (Ee(e)) t = e;
    else if (W(e))
        for (let n = 0; n < e.length; n++) { const o = nt(e[n]);
            o && (t += o + " ") } else if (Ce(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim() }

function Wa(e) { if (!e) return null; let { class: t, style: n } = e; return t && !Ee(t) && (e.class = nt(t)), n && (e.style = Fe(n)), e }
const re = e => Ee(e) ? e : e == null ? "" : W(e) || Ce(e) && (e.toString === or || !ee(e.toString)) ? JSON.stringify(e, er, 2) : String(e),
    er = (e, t) => t && t.__v_isRef ? er(e, t.value) : qt(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {}) } : tr(t) ? {
        [`Set(${t.size})`]: [...t.values()] } : Ce(t) && !W(t) && !sr(t) ? String(t) : t,
    ge = {},
    Wt = [],
    Ze = () => {},
    qa = () => !1,
    Ja = /^on[^a-z]/,
    Yn = e => Ja.test(e),
    es = e => e.startsWith("onUpdate:"),
    Ae = Object.assign,
    ts = (e, t) => { const n = e.indexOf(t);
        n > -1 && e.splice(n, 1) },
    Ya = Object.prototype.hasOwnProperty,
    ie = (e, t) => Ya.call(e, t),
    W = Array.isArray,
    qt = e => Qn(e) === "[object Map]",
    tr = e => Qn(e) === "[object Set]",
    ee = e => typeof e == "function",
    Ee = e => typeof e == "string",
    ns = e => typeof e == "symbol",
    Ce = e => e !== null && typeof e == "object",
    nr = e => Ce(e) && ee(e.then) && ee(e.catch),
    or = Object.prototype.toString,
    Qn = e => or.call(e),
    Qa = e => Qn(e).slice(8, -1),
    sr = e => Qn(e) === "[object Object]",
    os = e => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Hn = Xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Xn = e => { const t = Object.create(null); return n => t[n] || (t[n] = e(n)) },
    Xa = /-(\w)/g,
    ot = Xn(e => e.replace(Xa, (t, n) => n ? n.toUpperCase() : "")),
    el = /\B([A-Z])/g,
    nn = Xn(e => e.replace(el, "-$1").toLowerCase()),
    eo = Xn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    vo = Xn(e => e ? `on${eo(e)}` : ""),
    En = (e, t) => !Object.is(e, t),
    Bn = (e, t) => { for (let n = 0; n < e.length; n++) e[n](t) },
    jn = (e, t, n) => { Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n }) },
    Un = e => { const t = parseFloat(e); return isNaN(t) ? e : t };
let Gs;
const tl = () => Gs || (Gs = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let Ye;
class nl { constructor(t = !1) { this.active = !0, this.effects = [], this.cleanups = [], !t && Ye && (this.parent = Ye, this.index = (Ye.scopes || (Ye.scopes = [])).push(this) - 1) }
    run(t) { if (this.active) { const n = Ye; try { return Ye = this, t() } finally { Ye = n } } }
    on() { Ye = this }
    off() { Ye = this.parent }
    stop(t) { if (this.active) { let n, o; for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop(); for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n](); if (this.scopes)
                for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0); if (this.parent && !t) { const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index) }
            this.active = !1 } } }

function ol(e, t = Ye) { t && t.active && t.effects.push(e) }
const ss = e => { const t = new Set(e); return t.w = 0, t.n = 0, t },
    ir = e => (e.w & wt) > 0,
    rr = e => (e.n & wt) > 0,
    sl = ({ deps: e }) => { if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= wt },
    il = e => { const { deps: t } = e; if (t.length) { let n = 0; for (let o = 0; o < t.length; o++) { const s = t[o];
                ir(s) && !rr(s) ? s.delete(e) : t[n++] = s, s.w &= ~wt, s.n &= ~wt }
            t.length = n } },
    xo = new WeakMap;
let fn = 0,
    wt = 1;
const Lo = 30;
let ze;
const Ot = Symbol(""),
    So = Symbol("");
class is { constructor(t, n = null, o) { this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, ol(this, o) }
    run() { if (!this.active) return this.fn(); let t = ze,
            n = yt; for (; t;) { if (t === this) return;
            t = t.parent } try { return this.parent = ze, ze = this, yt = !0, wt = 1 << ++fn, fn <= Lo ? sl(this) : Zs(this), this.fn() } finally { fn <= Lo && il(this), wt = 1 << --fn, ze = this.parent, yt = n, this.parent = void 0, this.deferStop && this.stop() } }
    stop() { ze === this ? this.deferStop = !0 : this.active && (Zs(this), this.onStop && this.onStop(), this.active = !1) } }

function Zs(e) { const { deps: t } = e; if (t.length) { for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0 } }
let yt = !0;
const ar = [];

function on() { ar.push(yt), yt = !1 }

function sn() { const e = ar.pop();
    yt = e === void 0 ? !0 : e }

function Ve(e, t, n) { if (yt && ze) { let o = xo.get(e);
        o || xo.set(e, o = new Map); let s = o.get(n);
        s || o.set(n, s = ss()), lr(s) } }

function lr(e, t) { let n = !1;
    fn <= Lo ? rr(e) || (e.n |= wt, n = !ir(e)) : n = !e.has(ze), n && (e.add(ze), ze.deps.push(e)) }

function at(e, t, n, o, s, i) { const r = xo.get(e); if (!r) return; let a = []; if (t === "clear") a = [...r.values()];
    else if (n === "length" && W(e)) r.forEach((l, u) => {
        (u === "length" || u >= o) && a.push(l) });
    else switch (n !== void 0 && a.push(r.get(n)), t) {
        case "add":
            W(e) ? os(n) && a.push(r.get("length")) : (a.push(r.get(Ot)), qt(e) && a.push(r.get(So))); break;
        case "delete":
            W(e) || (a.push(r.get(Ot)), qt(e) && a.push(r.get(So))); break;
        case "set":
            qt(e) && a.push(r.get(Ot)); break }
    if (a.length === 1) a[0] && ko(a[0]);
    else { const l = []; for (const u of a) u && l.push(...u);
        ko(ss(l)) } }

function ko(e, t) { const n = W(e) ? e : [...e]; for (const o of n) o.computed && Ks(o); for (const o of n) o.computed || Ks(o) }

function Ks(e, t) {
    (e !== ze || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run()) }
const rl = Xo("__proto__,__v_isRef,__isVue"),
    cr = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ns)),
    al = rs(),
    ll = rs(!1, !0),
    cl = rs(!0),
    Ws = ul();

function ul() { const e = {}; return ["includes", "indexOf", "lastIndexOf"].forEach(t => { e[t] = function(...n) { const o = ce(this); for (let i = 0, r = this.length; i < r; i++) Ve(o, "get", i + ""); const s = o[t](...n); return s === -1 || s === !1 ? o[t](...n.map(ce)) : s } }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => { e[t] = function(...n) { on(); const o = ce(this)[t].apply(this, n); return sn(), o } }), e }

function rs(e = !1, t = !1) { return function(o, s, i) { if (s === "__v_isReactive") return !e; if (s === "__v_isReadonly") return e; if (s === "__v_isShallow") return t; if (s === "__v_raw" && i === (e ? t ? Ml : hr : t ? pr : fr).get(o)) return o; const r = W(o); if (!e && r && ie(Ws, s)) return Reflect.get(Ws, s, i); const a = Reflect.get(o, s, i); return (ns(s) ? cr.has(s) : rl(s)) || (e || Ve(o, "get", s), t) ? a : Te(a) ? r && os(s) ? a : a.value : Ce(a) ? e ? mr(a) : lt(a) : a } }
const dl = ur(),
    fl = ur(!0);

function ur(e = !1) { return function(n, o, s, i) { let r = n[o]; if (Cn(r) && Te(r) && !Te(s)) return !1; if (!e && !Cn(s) && (Po(s) || (s = ce(s), r = ce(r)), !W(n) && Te(r) && !Te(s))) return r.value = s, !0; const a = W(n) && os(o) ? Number(o) < n.length : ie(n, o),
            l = Reflect.set(n, o, s, i); return n === ce(i) && (a ? En(s, r) && at(n, "set", o, s) : at(n, "add", o, s)), l } }

function pl(e, t) { const n = ie(e, t);
    e[t]; const o = Reflect.deleteProperty(e, t); return o && n && at(e, "delete", t, void 0), o }

function hl(e, t) { const n = Reflect.has(e, t); return (!ns(t) || !cr.has(t)) && Ve(e, "has", t), n }

function ml(e) { return Ve(e, "iterate", W(e) ? "length" : Ot), Reflect.ownKeys(e) }
const dr = { get: al, set: dl, deleteProperty: pl, has: hl, ownKeys: ml },
    gl = { get: cl, set(e, t) { return !0 }, deleteProperty(e, t) { return !0 } },
    _l = Ae({}, dr, { get: ll, set: fl }),
    as = e => e,
    to = e => Reflect.getPrototypeOf(e);

function kn(e, t, n = !1, o = !1) { e = e.__v_raw; const s = ce(e),
        i = ce(t);
    n || (t !== i && Ve(s, "get", t), Ve(s, "get", i)); const { has: r } = to(s), a = o ? as : n ? us : Mn; if (r.call(s, t)) return a(e.get(t)); if (r.call(s, i)) return a(e.get(i));
    e !== s && e.get(t) }

function Pn(e, t = !1) { const n = this.__v_raw,
        o = ce(n),
        s = ce(e); return t || (e !== s && Ve(o, "has", e), Ve(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s) }

function Rn(e, t = !1) { return e = e.__v_raw, !t && Ve(ce(e), "iterate", Ot), Reflect.get(e, "size", e) }

function qs(e) { e = ce(e); const t = ce(this); return to(t).has.call(t, e) || (t.add(e), at(t, "add", e, e)), this }

function Js(e, t) { t = ce(t); const n = ce(this),
        { has: o, get: s } = to(n); let i = o.call(n, e);
    i || (e = ce(e), i = o.call(n, e)); const r = s.call(n, e); return n.set(e, t), i ? En(t, r) && at(n, "set", e, t) : at(n, "add", e, t), this }

function Ys(e) { const t = ce(this),
        { has: n, get: o } = to(t); let s = n.call(t, e);
    s || (e = ce(e), s = n.call(t, e)), o && o.call(t, e); const i = t.delete(e); return s && at(t, "delete", e, void 0), i }

function Qs() { const e = ce(this),
        t = e.size !== 0,
        n = e.clear(); return t && at(e, "clear", void 0, void 0), n }

function On(e, t) { return function(o, s) { const i = this,
            r = i.__v_raw,
            a = ce(r),
            l = t ? as : e ? us : Mn; return !e && Ve(a, "iterate", Ot), r.forEach((u, c) => o.call(s, l(u), l(c), i)) } }

function Nn(e, t, n) { return function(...o) { const s = this.__v_raw,
            i = ce(s),
            r = qt(i),
            a = e === "entries" || e === Symbol.iterator && r,
            l = e === "keys" && r,
            u = s[e](...o),
            c = n ? as : t ? us : Mn; return !t && Ve(i, "iterate", l ? So : Ot), { next() { const { value: f, done: p } = u.next(); return p ? { value: f, done: p } : { value: a ? [c(f[0]), c(f[1])] : c(f), done: p } }, [Symbol.iterator]() { return this } } } }

function dt(e) { return function(...t) { return e === "delete" ? !1 : this } }

function vl() { const e = {get(i) { return kn(this, i) }, get size() { return Rn(this) }, has: Pn, add: qs, set: Js, delete: Ys, clear: Qs, forEach: On(!1, !1) },
        t = {get(i) { return kn(this, i, !1, !0) }, get size() { return Rn(this) }, has: Pn, add: qs, set: Js, delete: Ys, clear: Qs, forEach: On(!1, !0) },
        n = {get(i) { return kn(this, i, !0) }, get size() { return Rn(this, !0) }, has(i) { return Pn.call(this, i, !0) }, add: dt("add"), set: dt("set"), delete: dt("delete"), clear: dt("clear"), forEach: On(!0, !1) },
        o = {get(i) { return kn(this, i, !0, !0) }, get size() { return Rn(this, !0) }, has(i) { return Pn.call(this, i, !0) }, add: dt("add"), set: dt("set"), delete: dt("delete"), clear: dt("clear"), forEach: On(!0, !0) }; return ["keys", "values", "entries", Symbol.iterator].forEach(i => { e[i] = Nn(i, !1, !1), n[i] = Nn(i, !0, !1), t[i] = Nn(i, !1, !0), o[i] = Nn(i, !0, !0) }), [e, n, t, o] }
const [yl, bl, wl, $l] = vl();

function ls(e, t) { const n = t ? e ? $l : wl : e ? bl : yl; return (o, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(ie(n, s) && s in o ? n : o, s, i) }
const Il = { get: ls(!1, !1) },
    El = { get: ls(!1, !0) },
    Cl = { get: ls(!0, !1) },
    fr = new WeakMap,
    pr = new WeakMap,
    hr = new WeakMap,
    Ml = new WeakMap;

function Tl(e) { switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0 } }

function Al(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : Tl(Qa(e)) }

function lt(e) { return Cn(e) ? e : cs(e, !1, dr, Il, fr) }

function xl(e) { return cs(e, !1, _l, El, pr) }

function mr(e) { return cs(e, !0, gl, Cl, hr) }

function cs(e, t, n, o, s) { if (!Ce(e) || e.__v_raw && !(t && e.__v_isReactive)) return e; const i = s.get(e); if (i) return i; const r = Al(e); if (r === 0) return e; const a = new Proxy(e, r === 2 ? o : n); return s.set(e, a), a }

function Jt(e) { return Cn(e) ? Jt(e.__v_raw) : !!(e && e.__v_isReactive) }

function Cn(e) { return !!(e && e.__v_isReadonly) }

function Po(e) { return !!(e && e.__v_isShallow) }

function gr(e) { return Jt(e) || Cn(e) }

function ce(e) { const t = e && e.__v_raw; return t ? ce(t) : e }

function _r(e) { return jn(e, "__v_skip", !0), e }
const Mn = e => Ce(e) ? lt(e) : e,
    us = e => Ce(e) ? mr(e) : e;

function vr(e) { yt && ze && (e = ce(e), lr(e.dep || (e.dep = ss()))) }

function yr(e, t) { e = ce(e), e.dep && ko(e.dep) }

function Te(e) { return !!(e && e.__v_isRef === !0) }

function Dn(e) { return br(e, !1) }

function Ll(e) { return br(e, !0) }

function br(e, t) { return Te(e) ? e : new Sl(e, t) }
class Sl { constructor(t, n) { this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ce(t), this._value = n ? t : Mn(t) }
    get value() { return vr(this), this._value }
    set value(t) { t = this.__v_isShallow ? t : ce(t), En(t, this._rawValue) && (this._rawValue = t, this._value = this.__v_isShallow ? t : Mn(t), yr(this)) } }

function hn(e) { return Te(e) ? e.value : e }
const kl = { get: (e, t, n) => hn(Reflect.get(e, t, n)), set: (e, t, n, o) => { const s = e[t]; return Te(s) && !Te(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o) } };

function wr(e) { return Jt(e) ? e : new Proxy(e, kl) }

function Pl(e) { const t = W(e) ? new Array(e.length) : {}; for (const n in e) t[n] = Ol(e, n); return t }
class Rl { constructor(t, n, o) { this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0 }
    get value() { const t = this._object[this._key]; return t === void 0 ? this._defaultValue : t }
    set value(t) { this._object[this._key] = t } }

function Ol(e, t, n) { const o = e[t]; return Te(o) ? o : new Rl(e, t, n) }
class Nl { constructor(t, n, o, s) { this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new is(t, () => { this._dirty || (this._dirty = !0, yr(this)) }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o }
    get value() { const t = ce(this); return vr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value }
    set value(t) { this._setter(t) } }

function Vl(e, t, n = !1) { let o, s; const i = ee(e); return i ? (o = e, s = Ze) : (o = e.get, s = e.set), new Nl(o, s, i || !s, n) }

function bt(e, t, n, o) { let s; try { s = o ? e(...o) : e() } catch (i) { no(i, t, n) } return s }

function je(e, t, n, o) { if (ee(e)) { const i = bt(e, t, n, o); return i && nr(i) && i.catch(r => { no(r, t, n) }), i } const s = []; for (let i = 0; i < e.length; i++) s.push(je(e[i], t, n, o)); return s }

function no(e, t, n, o = !0) { const s = t ? t.vnode : null; if (t) { let i = t.parent; const r = t.proxy,
            a = n; for (; i;) { const u = i.ec; if (u) { for (let c = 0; c < u.length; c++)
                    if (u[c](e, r, a) === !1) return }
            i = i.parent } const l = t.appContext.config.errorHandler; if (l) { bt(l, null, 10, [e, r, a]); return } }
    Hl(e, n, s, o) }

function Hl(e, t, n, o = !0) { console.error(e) }
let zn = !1,
    Ro = !1;
const Ne = [];
let rt = 0;
const mn = [];
let pn = null,
    zt = 0;
const gn = [];
let gt = null,
    Gt = 0;
const $r = Promise.resolve();
let ds = null,
    Oo = null;

function Ir(e) { const t = ds || $r; return e ? t.then(this ? e.bind(this) : e) : t }

function Bl(e) { let t = rt + 1,
        n = Ne.length; for (; t < n;) { const o = t + n >>> 1;
        Tn(Ne[o]) < e ? t = o + 1 : n = o } return t }

function Er(e) {
    (!Ne.length || !Ne.includes(e, zn && e.allowRecurse ? rt + 1 : rt)) && e !== Oo && (e.id == null ? Ne.push(e) : Ne.splice(Bl(e.id), 0, e), Cr()) }

function Cr() {!zn && !Ro && (Ro = !0, ds = $r.then(Ar)) }

function Fl(e) { const t = Ne.indexOf(e);
    t > rt && Ne.splice(t, 1) }

function Mr(e, t, n, o) { W(e) ? n.push(...e) : (!t || !t.includes(e, e.allowRecurse ? o + 1 : o)) && n.push(e), Cr() }

function jl(e) { Mr(e, pn, mn, zt) }

function Ul(e) { Mr(e, gt, gn, Gt) }

function oo(e, t = null) { if (mn.length) { for (Oo = t, pn = [...new Set(mn)], mn.length = 0, zt = 0; zt < pn.length; zt++) pn[zt]();
        pn = null, zt = 0, Oo = null, oo(e, t) } }

function Tr(e) { if (oo(), gn.length) { const t = [...new Set(gn)]; if (gn.length = 0, gt) { gt.push(...t); return } for (gt = t, gt.sort((n, o) => Tn(n) - Tn(o)), Gt = 0; Gt < gt.length; Gt++) gt[Gt]();
        gt = null, Gt = 0 } }
const Tn = e => e.id == null ? 1 / 0 : e.id;

function Ar(e) { Ro = !1, zn = !0, oo(e), Ne.sort((n, o) => Tn(n) - Tn(o)); const t = Ze; try { for (rt = 0; rt < Ne.length; rt++) { const n = Ne[rt];
            n && n.active !== !1 && bt(n, null, 14) } } finally { rt = 0, Ne.length = 0, Tr(), zn = !1, ds = null, (Ne.length || mn.length || gn.length) && Ar(e) } }

function Dl(e, t, ...n) { if (e.isUnmounted) return; const o = e.vnode.props || ge; let s = n; const i = t.startsWith("update:"),
        r = i && t.slice(7); if (r && r in o) { const c = `${r==="modelValue"?"model":r}Modifiers`,
            { number: f, trim: p } = o[c] || ge;
        p && (s = n.map(_ => _.trim())), f && (s = n.map(Un)) } let a, l = o[a = vo(t)] || o[a = vo(ot(t))];!l && i && (l = o[a = vo(nn(t))]), l && je(l, e, 6, s); const u = o[a + "Once"]; if (u) { if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, je(u, e, 6, s) } }

function xr(e, t, n = !1) { const o = t.emitsCache,
        s = o.get(e); if (s !== void 0) return s; const i = e.emits; let r = {},
        a = !1; if (!ee(e)) { const l = u => { const c = xr(u, t, !0);
            c && (a = !0, Ae(r, c)) };!n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l) } return !i && !a ? (o.set(e, null), null) : (W(i) ? i.forEach(l => r[l] = null) : Ae(r, i), o.set(e, r), r) }

function so(e, t) { return !e || !Yn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, nn(t)) || ie(e, t)) }
let Le = null,
    io = null;

function Gn(e) { const t = Le; return Le = e, io = e && e.type.__scopeId || null, t }

function Et(e) { io = e }

function Ct() { io = null }

function ne(e, t = Le, n) { if (!t || e._n) return e; const o = (...s) => { o._d && ui(-1); const i = Gn(t),
            r = e(...s); return Gn(i), o._d && ui(1), r }; return o._n = !0, o._c = !0, o._d = !0, o }

function yo(e) { const { type: t, vnode: n, proxy: o, withProxy: s, props: i, propsOptions: [r], slots: a, attrs: l, emit: u, render: c, renderCache: f, data: p, setupState: _, ctx: E, inheritAttrs: k } = e; let P, S; const B = Gn(e); try { if (n.shapeFlag & 4) { const Q = s || o;
            P = Qe(c.call(Q, Q, f, i, _, p, E)), S = l } else { const Q = t;
            P = Qe(Q.length > 1 ? Q(i, { attrs: l, slots: a, emit: u }) : Q(i, null)), S = t.props ? l : zl(l) } } catch (Q) { wn.length = 0, no(Q, e, 1), P = T(Ue) } let q = P; if (S && k !== !1) { const Q = Object.keys(S),
            { shapeFlag: Z } = q;
        Q.length && Z & 7 && (r && Q.some(es) && (S = Gl(S, r)), q = It(q, S)) } return n.dirs && (q = It(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (q.transition = n.transition), P = q, Gn(B), P }
const zl = e => { let t; for (const n in e)(n === "class" || n === "style" || Yn(n)) && ((t || (t = {}))[n] = e[n]); return t },
    Gl = (e, t) => { const n = {}; for (const o in e)(!es(o) || !(o.slice(9) in t)) && (n[o] = e[o]); return n };

function Zl(e, t, n) { const { props: o, children: s, component: i } = e, { props: r, children: a, patchFlag: l } = t, u = i.emitsOptions; if (t.dirs || t.transition) return !0; if (n && l >= 0) { if (l & 1024) return !0; if (l & 16) return o ? Xs(o, r, u) : !!r; if (l & 8) { const c = t.dynamicProps; for (let f = 0; f < c.length; f++) { const p = c[f]; if (r[p] !== o[p] && !so(u, p)) return !0 } } } else return (s || a) && (!a || !a.$stable) ? !0 : o === r ? !1 : o ? r ? Xs(o, r, u) : !0 : !!r; return !1 }

function Xs(e, t, n) { const o = Object.keys(t); if (o.length !== Object.keys(e).length) return !0; for (let s = 0; s < o.length; s++) { const i = o[s]; if (t[i] !== e[i] && !so(n, i)) return !0 } return !1 }

function Kl({ vnode: e, parent: t }, n) { for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent }
const Wl = e => e.__isSuspense;

function ql(e, t) { t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : Ul(e) }

function _n(e, t) { if (Me) { let n = Me.provides; const o = Me.parent && Me.parent.provides;
        o === n && (n = Me.provides = Object.create(o)), n[e] = t } }

function et(e, t, n = !1) { const o = Me || Le; if (o) { const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides; if (s && e in s) return s[e]; if (arguments.length > 1) return n && ee(t) ? t.call(o.proxy) : t } }

function Jl(e, t) { return ro(e, null, t) }

function Yl(e, t) { return ro(e, null, { flush: "post" }) }
const ei = {};

function Nt(e, t, n) { return ro(e, t, n) }

function ro(e, t, { immediate: n, deep: o, flush: s, onTrack: i, onTrigger: r } = ge) { const a = Me; let l, u = !1,
        c = !1; if (Te(e) ? (l = () => e.value, u = Po(e)) : Jt(e) ? (l = () => e, o = !0) : W(e) ? (c = !0, u = e.some(S => Jt(S) || Po(S)), l = () => e.map(S => { if (Te(S)) return S.value; if (Jt(S)) return Rt(S); if (ee(S)) return bt(S, a, 2) })) : ee(e) ? t ? l = () => bt(e, a, 2) : l = () => { if (!(a && a.isUnmounted)) return f && f(), je(e, a, 3, [p]) } : l = Ze, t && o) { const S = l;
        l = () => Rt(S()) } let f, p = S => { f = P.onStop = () => { bt(S, a, 4) } }; if (xn) return p = Ze, t ? n && je(t, a, 3, [l(), c ? [] : void 0, p]) : l(), Ze; let _ = c ? [] : ei; const E = () => { if (!!P.active)
            if (t) { const S = P.run();
                (o || u || (c ? S.some((B, q) => En(B, _[q])) : En(S, _))) && (f && f(), je(t, a, 3, [S, _ === ei ? void 0 : _, p]), _ = S) } else P.run() };
    E.allowRecurse = !!t; let k;
    s === "sync" ? k = E : s === "post" ? k = () => ke(E, a && a.suspense) : k = () => jl(E); const P = new is(l, k); return t ? n ? E() : _ = P.run() : s === "post" ? ke(P.run.bind(P), a && a.suspense) : P.run(), () => { P.stop(), a && a.scope && ts(a.scope.effects, P) } }

function Ql(e, t, n) { const o = this.proxy,
        s = Ee(e) ? e.includes(".") ? Lr(o, e) : () => o[e] : e.bind(o, o); let i;
    ee(t) ? i = t : (i = t.handler, n = t); const r = Me;
    Xt(this); const a = ro(s, i.bind(o), n); return r ? Xt(r) : Vt(), a }

function Lr(e, t) { const n = t.split("."); return () => { let o = e; for (let s = 0; s < n.length && o; s++) o = o[n[s]]; return o } }

function Rt(e, t) { if (!Ce(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e; if (t.add(e), Te(e)) Rt(e.value, t);
    else if (W(e))
        for (let n = 0; n < e.length; n++) Rt(e[n], t);
    else if (tr(e) || qt(e)) e.forEach(n => { Rt(n, t) });
    else if (sr(e))
        for (const n in e) Rt(e[n], t); return e }

function Xl() { const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map }; return co(() => { e.isMounted = !0 }), Nr(() => { e.isUnmounting = !0 }), e }
const Be = [Function, Array],
    ec = { name: "BaseTransition", props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Be, onEnter: Be, onAfterEnter: Be, onEnterCancelled: Be, onBeforeLeave: Be, onLeave: Be, onAfterLeave: Be, onLeaveCancelled: Be, onBeforeAppear: Be, onAppear: Be, onAfterAppear: Be, onAppearCancelled: Be }, setup(e, { slots: t }) { const n = Yr(),
                o = Xl(); let s; return () => { const i = t.default && Pr(t.default(), !0); if (!i || !i.length) return; let r = i[0]; if (i.length > 1) { for (const k of i)
                        if (k.type !== Ue) { r = k; break } } const a = ce(e),
                    { mode: l } = a; if (o.isLeaving) return bo(r); const u = ti(r); if (!u) return bo(r); const c = No(u, a, o, n);
                Vo(u, c); const f = n.subTree,
                    p = f && ti(f); let _ = !1; const { getTransitionKey: E } = u.type; if (E) { const k = E();
                    s === void 0 ? s = k : k !== s && (s = k, _ = !0) } if (p && p.type !== Ue && (!St(u, p) || _)) { const k = No(p, a, o, n); if (Vo(p, k), l === "out-in") return o.isLeaving = !0, k.afterLeave = () => { o.isLeaving = !1, n.update() }, bo(r);
                    l === "in-out" && u.type !== Ue && (k.delayLeave = (P, S, B) => { const q = kr(o, p);
                        q[String(p.key)] = p, P._leaveCb = () => { S(), P._leaveCb = void 0, delete c.delayedLeave }, c.delayedLeave = B }) } return r } } },
    Sr = ec;

function kr(e, t) { const { leavingVNodes: n } = e; let o = n.get(t.type); return o || (o = Object.create(null), n.set(t.type, o)), o }

function No(e, t, n, o) { const { appear: s, mode: i, persisted: r = !1, onBeforeEnter: a, onEnter: l, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: f, onLeave: p, onAfterLeave: _, onLeaveCancelled: E, onBeforeAppear: k, onAppear: P, onAfterAppear: S, onAppearCancelled: B } = t, q = String(e.key), Q = kr(n, e), Z = (z, L) => { z && je(z, o, 9, L) }, J = (z, L) => { const K = L[1];
        Z(z, L), W(z) ? z.every(X => X.length <= 1) && K() : z.length <= 1 && K() }, se = { mode: i, persisted: r, beforeEnter(z) { let L = a; if (!n.isMounted)
                if (s) L = k || a;
                else return;
            z._leaveCb && z._leaveCb(!0); const K = Q[q];
            K && St(e, K) && K.el._leaveCb && K.el._leaveCb(), Z(L, [z]) }, enter(z) { let L = l,
                K = u,
                X = c; if (!n.isMounted)
                if (s) L = P || l, K = S || u, X = B || c;
                else return;
            let O = !1; const we = z._enterCb = xe => { O || (O = !0, xe ? Z(X, [z]) : Z(K, [z]), se.delayedLeave && se.delayedLeave(), z._enterCb = void 0) };
            L ? J(L, [z, we]) : we() }, leave(z, L) { const K = String(e.key); if (z._enterCb && z._enterCb(!0), n.isUnmounting) return L();
            Z(f, [z]); let X = !1; const O = z._leaveCb = we => { X || (X = !0, L(), we ? Z(E, [z]) : Z(_, [z]), z._leaveCb = void 0, Q[K] === e && delete Q[K]) };
            Q[K] = e, p ? J(p, [z, O]) : O() }, clone(z) { return No(z, t, n, o) } }; return se }

function bo(e) { if (ao(e)) return e = It(e), e.children = null, e }

function ti(e) { return ao(e) ? e.children ? e.children[0] : void 0 : e }

function Vo(e, t) { e.shapeFlag & 6 && e.component ? Vo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t }

function Pr(e, t = !1, n) { let o = [],
        s = 0; for (let i = 0; i < e.length; i++) { let r = e[i]; const a = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
        r.type === _e ? (r.patchFlag & 128 && s++, o = o.concat(Pr(r.children, t, a))) : (t || r.type !== Ue) && o.push(a != null ? It(r, { key: a }) : r) } if (s > 1)
        for (let i = 0; i < o.length; i++) o[i].patchFlag = -2; return o }

function G(e) { return ee(e) ? { setup: e, name: e.name } : e }
const vn = e => !!e.type.__asyncLoader,
    ao = e => e.type.__isKeepAlive;

function tc(e, t) { Rr(e, "a", t) }

function nc(e, t) { Rr(e, "da", t) }

function Rr(e, t, n = Me) { const o = e.__wdc || (e.__wdc = () => { let s = n; for (; s;) { if (s.isDeactivated) return;
            s = s.parent } return e() }); if (lo(t, o, n), n) { let s = n.parent; for (; s && s.parent;) ao(s.parent.vnode) && oc(o, t, n, s), s = s.parent } }

function oc(e, t, n, o) { const s = lo(t, e, o, !0);
    fs(() => { ts(o[t], s) }, n) }

function lo(e, t, n = Me, o = !1) { if (n) { const s = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...r) => { if (n.isUnmounted) return;
                on(), Xt(n); const a = je(t, n, e, r); return Vt(), sn(), a }); return o ? s.unshift(i) : s.push(i), i } }
const ct = e => (t, n = Me) => (!xn || e === "sp") && lo(e, t, n),
    Or = ct("bm"),
    co = ct("m"),
    sc = ct("bu"),
    ic = ct("u"),
    Nr = ct("bum"),
    fs = ct("um"),
    rc = ct("sp"),
    ac = ct("rtg"),
    lc = ct("rtc");

function cc(e, t = Me) { lo("ec", e, t) }

function Yt(e, t) { const n = Le; if (n === null) return e; const o = fo(n) || n.proxy,
        s = e.dirs || (e.dirs = []); for (let i = 0; i < t.length; i++) { let [r, a, l, u = ge] = t[i];
        ee(r) && (r = { mounted: r, updated: r }), r.deep && Rt(a), s.push({ dir: r, instance: o, value: a, oldValue: void 0, arg: l, modifiers: u }) } return e }

function Mt(e, t, n, o) { const s = e.dirs,
        i = t && t.dirs; for (let r = 0; r < s.length; r++) { const a = s[r];
        i && (a.oldValue = i[r].value); let l = a.dir[o];
        l && (on(), je(l, n, 8, [e.el, a, e, t]), sn()) } }
const ps = "components";

function H(e, t) { return Hr(ps, e, !0, t) || e }
const Vr = Symbol();

function Qt(e) { return Ee(e) ? Hr(ps, e, !1) || e : e || Vr }

function Hr(e, t, n = !0, o = !1) { const s = Le || Me; if (s) { const i = s.type; if (e === ps) { const a = Bc(i); if (a && (a === t || a === ot(t) || a === eo(ot(t)))) return i } const r = ni(s[e] || i[e], t) || ni(s.appContext[e], t); return !r && o ? i : r } }

function ni(e, t) { return e && (e[t] || e[ot(t)] || e[eo(ot(t))]) }

function tt(e, t, n, o) { let s; const i = n && n[o]; if (W(e) || Ee(e)) { s = new Array(e.length); for (let r = 0, a = e.length; r < a; r++) s[r] = t(e[r], r, void 0, i && i[r]) } else if (typeof e == "number") { s = new Array(e); for (let r = 0; r < e; r++) s[r] = t(r + 1, r, void 0, i && i[r]) } else if (Ce(e))
        if (e[Symbol.iterator]) s = Array.from(e, (r, a) => t(r, a, void 0, i && i[a]));
        else { const r = Object.keys(e);
            s = new Array(r.length); for (let a = 0, l = r.length; a < l; a++) { const u = r[a];
                s[a] = t(e[u], u, a, i && i[a]) } }
    else s = []; return n && (n[o] = s), s }

function $t(e, t, n = {}, o, s) { if (Le.isCE || Le.parent && vn(Le.parent) && Le.parent.isCE) return T("slot", t === "default" ? null : { name: t }, o && o()); let i = e[t];
    i && i._c && (i._d = !1), v(); const r = i && Br(i(n)),
        a = be(_e, { key: n.key || `_${t}` }, r || (o ? o() : []), r && e._ === 1 ? 64 : -2); return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a }

function Br(e) { return e.some(t => Wn(t) ? !(t.type === Ue || t.type === _e && !Br(t.children)) : !0) ? e : null }
const Ho = e => e ? Qr(e) ? fo(e) || e.proxy : Ho(e.parent) : null,
    Zn = Ae(Object.create(null), { $: e => e, $el: e => e.vnode.el, $data: e => e.data, $props: e => e.props, $attrs: e => e.attrs, $slots: e => e.slots, $refs: e => e.refs, $parent: e => Ho(e.parent), $root: e => Ho(e.root), $emit: e => e.emit, $options: e => jr(e), $forceUpdate: e => e.f || (e.f = () => Er(e.update)), $nextTick: e => e.n || (e.n = Ir.bind(e.proxy)), $watch: e => Ql.bind(e) }),
    uc = {get({ _: e }, t) { const { ctx: n, setupState: o, data: s, props: i, accessCache: r, type: a, appContext: l } = e; let u; if (t[0] !== "$") { const _ = r[t]; if (_ !== void 0) switch (_) {
                    case 1:
                        return o[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t] } else { if (o !== ge && ie(o, t)) return r[t] = 1, o[t]; if (s !== ge && ie(s, t)) return r[t] = 2, s[t]; if ((u = e.propsOptions[0]) && ie(u, t)) return r[t] = 3, i[t]; if (n !== ge && ie(n, t)) return r[t] = 4, n[t];
                    Bo && (r[t] = 0) } } const c = Zn[t]; let f, p; if (c) return t === "$attrs" && Ve(e, "get", t), c(e); if ((f = a.__cssModules) && (f = f[t])) return f; if (n !== ge && ie(n, t)) return r[t] = 4, n[t]; if (p = l.config.globalProperties, ie(p, t)) return p[t] }, set({ _: e }, t, n) { const { data: o, setupState: s, ctx: i } = e; return s !== ge && ie(s, t) ? (s[t] = n, !0) : o !== ge && ie(o, t) ? (o[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0) }, has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: i } }, r) { let a; return !!n[r] || e !== ge && ie(e, r) || t !== ge && ie(t, r) || (a = i[0]) && ie(a, r) || ie(o, r) || ie(Zn, r) || ie(s.config.globalProperties, r) }, defineProperty(e, t, n) { return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n) } };
let Bo = !0;

function dc(e) { const t = jr(e),
        n = e.proxy,
        o = e.ctx;
    Bo = !1, t.beforeCreate && oi(t.beforeCreate, e, "bc"); const { data: s, computed: i, methods: r, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: p, beforeUpdate: _, updated: E, activated: k, deactivated: P, beforeDestroy: S, beforeUnmount: B, destroyed: q, unmounted: Q, render: Z, renderTracked: J, renderTriggered: se, errorCaptured: z, serverPrefetch: L, expose: K, inheritAttrs: X, components: O, directives: we, filters: xe } = t; if (u && fc(u, o, null, e.appContext.config.unwrapInjectedRef), r)
        for (const ve in r) { const de = r[ve];
            ee(de) && (o[ve] = de.bind(n)) }
    if (s) { const ve = s.call(n, n);
        Ce(ve) && (e.data = lt(ve)) } if (Bo = !0, i)
        for (const ve in i) { const de = i[ve],
                Re = ee(de) ? de.bind(n, n) : ee(de.get) ? de.get.bind(n, n) : Ze,
                Bt = !ee(de) && ee(de.set) ? de.set.bind(n) : Ze,
                it = Xe({ get: Re, set: Bt });
            Object.defineProperty(o, ve, { enumerable: !0, configurable: !0, get: () => it.value, set: We => it.value = We }) }
    if (a)
        for (const ve in a) Fr(a[ve], o, n, ve); if (l) { const ve = ee(l) ? l.call(n) : l;
        Reflect.ownKeys(ve).forEach(de => { _n(de, ve[de]) }) }
    c && oi(c, e, "c");

    function Ie(ve, de) { W(de) ? de.forEach(Re => ve(Re.bind(n))) : de && ve(de.bind(n)) } if (Ie(Or, f), Ie(co, p), Ie(sc, _), Ie(ic, E), Ie(tc, k), Ie(nc, P), Ie(cc, z), Ie(lc, J), Ie(ac, se), Ie(Nr, B), Ie(fs, Q), Ie(rc, L), W(K))
        if (K.length) { const ve = e.exposed || (e.exposed = {});
            K.forEach(de => { Object.defineProperty(ve, de, { get: () => n[de], set: Re => n[de] = Re }) }) } else e.exposed || (e.exposed = {});
    Z && e.render === Ze && (e.render = Z), X != null && (e.inheritAttrs = X), O && (e.components = O), we && (e.directives = we) }

function fc(e, t, n = Ze, o = !1) { W(e) && (e = Fo(e)); for (const s in e) { const i = e[s]; let r;
        Ce(i) ? "default" in i ? r = et(i.from || s, i.default, !0) : r = et(i.from || s) : r = et(i), Te(r) && o ? Object.defineProperty(t, s, { enumerable: !0, configurable: !0, get: () => r.value, set: a => r.value = a }) : t[s] = r } }

function oi(e, t, n) { je(W(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n) }

function Fr(e, t, n, o) { const s = o.includes(".") ? Lr(n, o) : () => n[o]; if (Ee(e)) { const i = t[e];
        ee(i) && Nt(s, i) } else if (ee(e)) Nt(s, e.bind(n));
    else if (Ce(e))
        if (W(e)) e.forEach(i => Fr(i, t, n, o));
        else { const i = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
            ee(i) && Nt(s, i, e) } }

function jr(e) { const t = e.type,
        { mixins: n, extends: o } = t,
        { mixins: s, optionsCache: i, config: { optionMergeStrategies: r } } = e.appContext,
        a = i.get(t); let l; return a ? l = a : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach(u => Kn(l, u, r, !0)), Kn(l, t, r)), i.set(t, l), l }

function Kn(e, t, n, o = !1) { const { mixins: s, extends: i } = t;
    i && Kn(e, i, n, !0), s && s.forEach(r => Kn(e, r, n, !0)); for (const r in t)
        if (!(o && r === "expose")) { const a = pc[r] || n && n[r];
            e[r] = a ? a(e[r], t[r]) : t[r] }
    return e }
const pc = { data: si, props: Lt, emits: Lt, methods: Lt, computed: Lt, beforeCreate: Se, created: Se, beforeMount: Se, mounted: Se, beforeUpdate: Se, updated: Se, beforeDestroy: Se, beforeUnmount: Se, destroyed: Se, unmounted: Se, activated: Se, deactivated: Se, errorCaptured: Se, serverPrefetch: Se, components: Lt, directives: Lt, watch: mc, provide: si, inject: hc };

function si(e, t) { return t ? e ? function() { return Ae(ee(e) ? e.call(this, this) : e, ee(t) ? t.call(this, this) : t) } : t : e }

function hc(e, t) { return Lt(Fo(e), Fo(t)) }

function Fo(e) { if (W(e)) { const t = {}; for (let n = 0; n < e.length; n++) t[e[n]] = e[n]; return t } return e }

function Se(e, t) { return e ? [...new Set([].concat(e, t))] : t }

function Lt(e, t) { return e ? Ae(Ae(Object.create(null), e), t) : t }

function mc(e, t) { if (!e) return t; if (!t) return e; const n = Ae(Object.create(null), e); for (const o in t) n[o] = Se(e[o], t[o]); return n }

function gc(e, t, n, o = !1) { const s = {},
        i = {};
    jn(i, uo, 1), e.propsDefaults = Object.create(null), Ur(e, t, s, i); for (const r in e.propsOptions[0]) r in s || (s[r] = void 0);
    n ? e.props = o ? s : xl(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i }

function _c(e, t, n, o) { const { props: s, attrs: i, vnode: { patchFlag: r } } = e, a = ce(s), [l] = e.propsOptions; let u = !1; if ((o || r > 0) && !(r & 16)) { if (r & 8) { const c = e.vnode.dynamicProps; for (let f = 0; f < c.length; f++) { let p = c[f]; if (so(e.emitsOptions, p)) continue; const _ = t[p]; if (l)
                    if (ie(i, p)) _ !== i[p] && (i[p] = _, u = !0);
                    else { const E = ot(p);
                        s[E] = jo(l, a, E, _, e, !1) }
                else _ !== i[p] && (i[p] = _, u = !0) } } } else { Ur(e, t, s, i) && (u = !0); let c; for (const f in a)(!t || !ie(t, f) && ((c = nn(f)) === f || !ie(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = jo(l, a, f, void 0, e, !0)) : delete s[f]); if (i !== a)
            for (const f in i)(!t || !ie(t, f) && !0) && (delete i[f], u = !0) }
    u && at(e, "set", "$attrs") }

function Ur(e, t, n, o) { const [s, i] = e.propsOptions; let r = !1,
        a; if (t)
        for (let l in t) { if (Hn(l)) continue; const u = t[l]; let c;
            s && ie(s, c = ot(l)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : so(e.emitsOptions, l) || (!(l in o) || u !== o[l]) && (o[l] = u, r = !0) }
    if (i) { const l = ce(n),
            u = a || ge; for (let c = 0; c < i.length; c++) { const f = i[c];
            n[f] = jo(s, l, f, u[f], e, !ie(u, f)) } } return r }

function jo(e, t, n, o, s, i) { const r = e[n]; if (r != null) { const a = ie(r, "default"); if (a && o === void 0) { const l = r.default; if (r.type !== Function && ee(l)) { const { propsDefaults: u } = s;
                n in u ? o = u[n] : (Xt(s), o = u[n] = l.call(null, t), Vt()) } else o = l }
        r[0] && (i && !a ? o = !1 : r[1] && (o === "" || o === nn(n)) && (o = !0)) } return o }

function Dr(e, t, n = !1) { const o = t.propsCache,
        s = o.get(e); if (s) return s; const i = e.props,
        r = {},
        a = []; let l = !1; if (!ee(e)) { const c = f => { l = !0; const [p, _] = Dr(f, t, !0);
            Ae(r, p), _ && a.push(..._) };!n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c) } if (!i && !l) return o.set(e, Wt), Wt; if (W(i))
        for (let c = 0; c < i.length; c++) { const f = ot(i[c]);
            ii(f) && (r[f] = ge) } else if (i)
            for (const c in i) { const f = ot(c); if (ii(f)) { const p = i[c],
                        _ = r[f] = W(p) || ee(p) ? { type: p } : p; if (_) { const E = li(Boolean, _.type),
                            k = li(String, _.type);
                        _[0] = E > -1, _[1] = k < 0 || E < k, (E > -1 || ie(_, "default")) && a.push(f) } } }
        const u = [r, a];
    return o.set(e, u), u }

function ii(e) { return e[0] !== "$" }

function ri(e) { const t = e && e.toString().match(/^\s*function (\w+)/); return t ? t[1] : e === null ? "null" : "" }

function ai(e, t) { return ri(e) === ri(t) }

function li(e, t) { return W(t) ? t.findIndex(n => ai(n, e)) : ee(t) && ai(t, e) ? 0 : -1 }
const zr = e => e[0] === "_" || e === "$stable",
    hs = e => W(e) ? e.map(Qe) : [Qe(e)],
    vc = (e, t, n) => { if (t._n) return t; const o = ne((...s) => hs(t(...s)), n); return o._c = !1, o },
    Gr = (e, t, n) => { const o = e._ctx; for (const s in e) { if (zr(s)) continue; const i = e[s]; if (ee(i)) t[s] = vc(s, i, o);
            else if (i != null) { const r = hs(i);
                t[s] = () => r } } },
    Zr = (e, t) => { const n = hs(t);
        e.slots.default = () => n },
    yc = (e, t) => { if (e.vnode.shapeFlag & 32) { const n = t._;
            n ? (e.slots = ce(t), jn(t, "_", n)) : Gr(t, e.slots = {}) } else e.slots = {}, t && Zr(e, t);
        jn(e.slots, uo, 1) },
    bc = (e, t, n) => { const { vnode: o, slots: s } = e; let i = !0,
            r = ge; if (o.shapeFlag & 32) { const a = t._;
            a ? n && a === 1 ? i = !1 : (Ae(s, t), !n && a === 1 && delete s._) : (i = !t.$stable, Gr(t, s)), r = t } else t && (Zr(e, t), r = { default: 1 }); if (i)
            for (const a in s) !zr(a) && !(a in r) && delete s[a] };

function Kr() { return { app: null, config: { isNativeTag: qa, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: Object.create(null), optionsCache: new WeakMap, propsCache: new WeakMap, emitsCache: new WeakMap } }
let wc = 0;

function $c(e, t) { return function(o, s = null) { ee(o) || (o = Object.assign({}, o)), s != null && !Ce(s) && (s = null); const i = Kr(),
            r = new Set; let a = !1; const l = i.app = { _uid: wc++, _component: o, _props: s, _container: null, _context: i, _instance: null, version: jc, get config() { return i.config }, set config(u) {}, use(u, ...c) { return r.has(u) || (u && ee(u.install) ? (r.add(u), u.install(l, ...c)) : ee(u) && (r.add(u), u(l, ...c))), l }, mixin(u) { return i.mixins.includes(u) || i.mixins.push(u), l }, component(u, c) { return c ? (i.components[u] = c, l) : i.components[u] }, directive(u, c) { return c ? (i.directives[u] = c, l) : i.directives[u] }, mount(u, c, f) { if (!a) { const p = T(o, s); return p.appContext = i, c && t ? t(p, u) : e(p, u, f), a = !0, l._container = u, u.__vue_app__ = l, fo(p.component) || p.component.proxy } }, unmount() { a && (e(null, l._container), delete l._container.__vue_app__) }, provide(u, c) { return i.provides[u] = c, l } }; return l } }

function Uo(e, t, n, o, s = !1) { if (W(e)) { e.forEach((p, _) => Uo(p, t && (W(t) ? t[_] : t), n, o, s)); return } if (vn(o) && !s) return; const i = o.shapeFlag & 4 ? fo(o.component) || o.component.proxy : o.el,
        r = s ? null : i,
        { i: a, r: l } = e,
        u = t && t.r,
        c = a.refs === ge ? a.refs = {} : a.refs,
        f = a.setupState; if (u != null && u !== l && (Ee(u) ? (c[u] = null, ie(f, u) && (f[u] = null)) : Te(u) && (u.value = null)), ee(l)) bt(l, a, 12, [r, c]);
    else { const p = Ee(l),
            _ = Te(l); if (p || _) { const E = () => { if (e.f) { const k = p ? c[l] : l.value;
                    s ? W(k) && ts(k, i) : W(k) ? k.includes(i) || k.push(i) : p ? (c[l] = [i], ie(f, l) && (f[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value)) } else p ? (c[l] = r, ie(f, l) && (f[l] = r)) : Te(l) && (l.value = r, e.k && (c[e.k] = r)) };
            r ? (E.id = -1, ke(E, n)) : E() } } }
const ke = ql;

function Ic(e) { return Ec(e) }

function Ec(e, t) { const n = tl();
    n.__VUE__ = !0; const { insert: o, remove: s, patchProp: i, createElement: r, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: p, setScopeId: _ = Ze, cloneNode: E, insertStaticContent: k } = e, P = (d, h, g, w = null, b = null, M = null, R = !1, C = null, A = !!h.dynamicChildren) => { if (d === h) return;
        d && !St(d, h) && (w = F(d), He(d, b, M, !0), d = null), h.patchFlag === -2 && (A = !1, h.dynamicChildren = null); const { type: $, ref: U, shapeFlag: N } = h; switch ($) {
            case gs:
                S(d, h, g, w); break;
            case Ue:
                B(d, h, g, w); break;
            case bn:
                d == null && q(h, g, w, R); break;
            case _e:
                we(d, h, g, w, b, M, R, C, A); break;
            default:
                N & 1 ? J(d, h, g, w, b, M, R, C, A) : N & 6 ? xe(d, h, g, w, b, M, R, C, A) : (N & 64 || N & 128) && $.process(d, h, g, w, b, M, R, C, A, ye) }
        U != null && b && Uo(U, d && d.ref, M, h || d, !h) }, S = (d, h, g, w) => { if (d == null) o(h.el = a(h.children), g, w);
        else { const b = h.el = d.el;
            h.children !== d.children && u(b, h.children) } }, B = (d, h, g, w) => { d == null ? o(h.el = l(h.children || ""), g, w) : h.el = d.el }, q = (d, h, g, w) => {
        [d.el, d.anchor] = k(d.children, h, g, w, d.el, d.anchor) }, Q = ({ el: d, anchor: h }, g, w) => { let b; for (; d && d !== h;) b = p(d), o(d, g, w), d = b;
        o(h, g, w) }, Z = ({ el: d, anchor: h }) => { let g; for (; d && d !== h;) g = p(d), s(d), d = g;
        s(h) }, J = (d, h, g, w, b, M, R, C, A) => { R = R || h.type === "svg", d == null ? se(h, g, w, b, M, R, C, A) : K(d, h, b, M, R, C, A) }, se = (d, h, g, w, b, M, R, C) => { let A, $; const { type: U, props: N, shapeFlag: D, transition: Y, patchFlag: ae, dirs: pe } = d; if (d.el && E !== void 0 && ae === -1) A = d.el = E(d.el);
        else { if (A = d.el = r(d.type, M, N && N.is, N), D & 8 ? c(A, d.children) : D & 16 && L(d.children, A, null, w, b, M && U !== "foreignObject", R, C), pe && Mt(d, null, w, "created"), N) { for (const $e in N) $e !== "value" && !Hn($e) && i(A, $e, null, N[$e], M, d.children, w, b, x); "value" in N && i(A, "value", null, N.value), ($ = N.onVnodeBeforeMount) && Je($, w, d) }
            z(A, d, d.scopeId, R, w) }
        pe && Mt(d, null, w, "beforeMount"); const he = (!b || b && !b.pendingBranch) && Y && !Y.persisted;
        he && Y.beforeEnter(A), o(A, h, g), (($ = N && N.onVnodeMounted) || he || pe) && ke(() => { $ && Je($, w, d), he && Y.enter(A), pe && Mt(d, null, w, "mounted") }, b) }, z = (d, h, g, w, b) => { if (g && _(d, g), w)
            for (let M = 0; M < w.length; M++) _(d, w[M]); if (b) { let M = b.subTree; if (h === M) { const R = b.vnode;
                z(d, R, R.scopeId, R.slotScopeIds, b.parent) } } }, L = (d, h, g, w, b, M, R, C, A = 0) => { for (let $ = A; $ < d.length; $++) { const U = d[$] = C ? _t(d[$]) : Qe(d[$]);
            P(null, U, h, g, w, b, M, R, C) } }, K = (d, h, g, w, b, M, R) => { const C = h.el = d.el; let { patchFlag: A, dynamicChildren: $, dirs: U } = h;
        A |= d.patchFlag & 16; const N = d.props || ge,
            D = h.props || ge; let Y;
        g && Tt(g, !1), (Y = D.onVnodeBeforeUpdate) && Je(Y, g, h, d), U && Mt(h, d, g, "beforeUpdate"), g && Tt(g, !0); const ae = b && h.type !== "foreignObject"; if ($ ? X(d.dynamicChildren, $, C, g, w, ae, M) : R || Re(d, h, C, null, g, w, ae, M, !1), A > 0) { if (A & 16) O(C, h, N, D, g, w, b);
            else if (A & 2 && N.class !== D.class && i(C, "class", null, D.class, b), A & 4 && i(C, "style", N.style, D.style, b), A & 8) { const pe = h.dynamicProps; for (let he = 0; he < pe.length; he++) { const $e = pe[he],
                        De = N[$e],
                        Ft = D[$e];
                    (Ft !== De || $e === "value") && i(C, $e, De, Ft, b, d.children, g, w, x) } }
            A & 1 && d.children !== h.children && c(C, h.children) } else !R && $ == null && O(C, h, N, D, g, w, b);
        ((Y = D.onVnodeUpdated) || U) && ke(() => { Y && Je(Y, g, h, d), U && Mt(h, d, g, "updated") }, w) }, X = (d, h, g, w, b, M, R) => { for (let C = 0; C < h.length; C++) { const A = d[C],
                $ = h[C],
                U = A.el && (A.type === _e || !St(A, $) || A.shapeFlag & 70) ? f(A.el) : g;
            P(A, $, U, null, w, b, M, R, !0) } }, O = (d, h, g, w, b, M, R) => { if (g !== w) { for (const C in w) { if (Hn(C)) continue; const A = w[C],
                    $ = g[C];
                A !== $ && C !== "value" && i(d, C, $, A, R, h.children, b, M, x) } if (g !== ge)
                for (const C in g) !Hn(C) && !(C in w) && i(d, C, g[C], null, R, h.children, b, M, x); "value" in w && i(d, "value", g.value, w.value) } }, we = (d, h, g, w, b, M, R, C, A) => { const $ = h.el = d ? d.el : a(""),
            U = h.anchor = d ? d.anchor : a(""); let { patchFlag: N, dynamicChildren: D, slotScopeIds: Y } = h;
        Y && (C = C ? C.concat(Y) : Y), d == null ? (o($, g, w), o(U, g, w), L(h.children, g, U, b, M, R, C, A)) : N > 0 && N & 64 && D && d.dynamicChildren ? (X(d.dynamicChildren, D, g, b, M, R, C), (h.key != null || b && h === b.subTree) && ms(d, h, !0)) : Re(d, h, g, U, b, M, R, C, A) }, xe = (d, h, g, w, b, M, R, C, A) => { h.slotScopeIds = C, d == null ? h.shapeFlag & 512 ? b.ctx.activate(h, g, w, R, A) : st(h, g, w, b, M, R, A) : Ie(d, h, A) }, st = (d, h, g, w, b, M, R) => { const C = d.component = Rc(d, w, b); if (ao(d) && (C.ctx.renderer = ye), Oc(C), C.asyncDep) { if (b && b.registerDep(C, ve), !d.el) { const A = C.subTree = T(Ue);
                B(null, A, h, g) } return }
        ve(C, d, h, g, b, M, R) }, Ie = (d, h, g) => { const w = h.component = d.component; if (Zl(d, h, g))
            if (w.asyncDep && !w.asyncResolved) { de(w, h, g); return } else w.next = h, Fl(w.update), w.update();
        else h.el = d.el, w.vnode = h }, ve = (d, h, g, w, b, M, R) => { const C = () => { if (d.isMounted) { let { next: U, bu: N, u: D, parent: Y, vnode: ae } = d, pe = U, he;
                    Tt(d, !1), U ? (U.el = ae.el, de(d, U, R)) : U = ae, N && Bn(N), (he = U.props && U.props.onVnodeBeforeUpdate) && Je(he, Y, U, ae), Tt(d, !0); const $e = yo(d),
                        De = d.subTree;
                    d.subTree = $e, P(De, $e, f(De.el), F(De), d, b, M), U.el = $e.el, pe === null && Kl(d, $e.el), D && ke(D, b), (he = U.props && U.props.onVnodeUpdated) && ke(() => Je(he, Y, U, ae), b) } else { let U; const { el: N, props: D } = h, { bm: Y, m: ae, parent: pe } = d, he = vn(h); if (Tt(d, !1), Y && Bn(Y), !he && (U = D && D.onVnodeBeforeMount) && Je(U, pe, h), Tt(d, !0), N && te) { const $e = () => { d.subTree = yo(d), te(N, d.subTree, d, b, null) };
                        he ? h.type.__asyncLoader().then(() => !d.isUnmounted && $e()) : $e() } else { const $e = d.subTree = yo(d);
                        P(null, $e, g, w, d, b, M), h.el = $e.el } if (ae && ke(ae, b), !he && (U = D && D.onVnodeMounted)) { const $e = h;
                        ke(() => Je(U, pe, $e), b) }(h.shapeFlag & 256 || pe && vn(pe.vnode) && pe.vnode.shapeFlag & 256) && d.a && ke(d.a, b), d.isMounted = !0, h = g = w = null } },
            A = d.effect = new is(C, () => Er($), d.scope),
            $ = d.update = () => A.run();
        $.id = d.uid, Tt(d, !0), $() }, de = (d, h, g) => { h.component = d; const w = d.vnode.props;
        d.vnode = h, d.next = null, _c(d, h.props, w, g), bc(d, h.children, g), on(), oo(void 0, d.update), sn() }, Re = (d, h, g, w, b, M, R, C, A = !1) => { const $ = d && d.children,
            U = d ? d.shapeFlag : 0,
            N = h.children,
            { patchFlag: D, shapeFlag: Y } = h; if (D > 0) { if (D & 128) { it($, N, g, w, b, M, R, C, A); return } else if (D & 256) { Bt($, N, g, w, b, M, R, C, A); return } }
        Y & 8 ? (U & 16 && x($, b, M), N !== $ && c(g, N)) : U & 16 ? Y & 16 ? it($, N, g, w, b, M, R, C, A) : x($, b, M, !0) : (U & 8 && c(g, ""), Y & 16 && L(N, g, w, b, M, R, C, A)) }, Bt = (d, h, g, w, b, M, R, C, A) => { d = d || Wt, h = h || Wt; const $ = d.length,
            U = h.length,
            N = Math.min($, U); let D; for (D = 0; D < N; D++) { const Y = h[D] = A ? _t(h[D]) : Qe(h[D]);
            P(d[D], Y, g, null, b, M, R, C, A) }
        $ > U ? x(d, b, M, !0, !1, N) : L(h, g, w, b, M, R, C, A, N) }, it = (d, h, g, w, b, M, R, C, A) => { let $ = 0; const U = h.length; let N = d.length - 1,
            D = U - 1; for (; $ <= N && $ <= D;) { const Y = d[$],
                ae = h[$] = A ? _t(h[$]) : Qe(h[$]); if (St(Y, ae)) P(Y, ae, g, null, b, M, R, C, A);
            else break;
            $++ } for (; $ <= N && $ <= D;) { const Y = d[N],
                ae = h[D] = A ? _t(h[D]) : Qe(h[D]); if (St(Y, ae)) P(Y, ae, g, null, b, M, R, C, A);
            else break;
            N--, D-- } if ($ > N) { if ($ <= D) { const Y = D + 1,
                    ae = Y < U ? h[Y].el : w; for (; $ <= D;) P(null, h[$] = A ? _t(h[$]) : Qe(h[$]), g, ae, b, M, R, C, A), $++ } } else if ($ > D)
            for (; $ <= N;) He(d[$], b, M, !0), $++;
        else { const Y = $,
                ae = $,
                pe = new Map; for ($ = ae; $ <= D; $++) { const Oe = h[$] = A ? _t(h[$]) : Qe(h[$]);
                Oe.key != null && pe.set(Oe.key, $) } let he, $e = 0; const De = D - ae + 1; let Ft = !1,
                Hs = 0; const ln = new Array(De); for ($ = 0; $ < De; $++) ln[$] = 0; for ($ = Y; $ <= N; $++) { const Oe = d[$]; if ($e >= De) { He(Oe, b, M, !0); continue } let qe; if (Oe.key != null) qe = pe.get(Oe.key);
                else
                    for (he = ae; he <= D; he++)
                        if (ln[he - ae] === 0 && St(Oe, h[he])) { qe = he; break }
                qe === void 0 ? He(Oe, b, M, !0) : (ln[qe - ae] = $ + 1, qe >= Hs ? Hs = qe : Ft = !0, P(Oe, h[qe], g, null, b, M, R, C, A), $e++) } const Bs = Ft ? Cc(ln) : Wt; for (he = Bs.length - 1, $ = De - 1; $ >= 0; $--) { const Oe = ae + $,
                    qe = h[Oe],
                    Fs = Oe + 1 < U ? h[Oe + 1].el : w;
                ln[$] === 0 ? P(null, qe, g, Fs, b, M, R, C, A) : Ft && (he < 0 || $ !== Bs[he] ? We(qe, g, Fs, 2) : he--) } } }, We = (d, h, g, w, b = null) => { const { el: M, type: R, transition: C, children: A, shapeFlag: $ } = d; if ($ & 6) { We(d.component.subTree, h, g, w); return } if ($ & 128) { d.suspense.move(h, g, w); return } if ($ & 64) { R.move(d, h, g, ye); return } if (R === _e) { o(M, h, g); for (let N = 0; N < A.length; N++) We(A[N], h, g, w);
            o(d.anchor, h, g); return } if (R === bn) { Q(d, h, g); return } if (w !== 2 && $ & 1 && C)
            if (w === 0) C.beforeEnter(M), o(M, h, g), ke(() => C.enter(M), b);
            else { const { leave: N, delayLeave: D, afterLeave: Y } = C, ae = () => o(M, h, g), pe = () => { N(M, () => { ae(), Y && Y() }) };
                D ? D(M, ae, pe) : pe() }
        else o(M, h, g) }, He = (d, h, g, w = !1, b = !1) => { const { type: M, props: R, ref: C, children: A, dynamicChildren: $, shapeFlag: U, patchFlag: N, dirs: D } = d; if (C != null && Uo(C, null, g, d, !0), U & 256) { h.ctx.deactivate(d); return } const Y = U & 1 && D,
            ae = !vn(d); let pe; if (ae && (pe = R && R.onVnodeBeforeUnmount) && Je(pe, h, d), U & 6) V(d.component, g, w);
        else { if (U & 128) { d.suspense.unmount(g, w); return }
            Y && Mt(d, null, h, "beforeUnmount"), U & 64 ? d.type.remove(d, h, g, b, ye, w) : $ && (M !== _e || N > 0 && N & 64) ? x($, h, g, !1, !0) : (M === _e && N & 384 || !b && U & 16) && x(A, h, g), w && _o(d) }(ae && (pe = R && R.onVnodeUnmounted) || Y) && ke(() => { pe && Je(pe, h, d), Y && Mt(d, null, h, "unmounted") }, g) }, _o = d => { const { type: h, el: g, anchor: w, transition: b } = d; if (h === _e) { y(g, w); return } if (h === bn) { Z(d); return } const M = () => { s(g), b && !b.persisted && b.afterLeave && b.afterLeave() }; if (d.shapeFlag & 1 && b && !b.persisted) { const { leave: R, delayLeave: C } = b, A = () => R(g, M);
            C ? C(d.el, M, A) : A() } else M() }, y = (d, h) => { let g; for (; d !== h;) g = p(d), s(d), d = g;
        s(h) }, V = (d, h, g) => { const { bum: w, scope: b, update: M, subTree: R, um: C } = d;
        w && Bn(w), b.stop(), M && (M.active = !1, He(R, d, h, g)), C && ke(C, h), ke(() => { d.isUnmounted = !0 }, h), h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()) }, x = (d, h, g, w = !1, b = !1, M = 0) => { for (let R = M; R < d.length; R++) He(d[R], h, g, w, b) }, F = d => d.shapeFlag & 6 ? F(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el), fe = (d, h, g) => { d == null ? h._vnode && He(h._vnode, null, null, !0) : P(h._vnode || null, d, h, null, null, null, g), Tr(), h._vnode = d }, ye = { p: P, um: He, m: We, r: _o, mt: st, mc: L, pc: Re, pbc: X, n: F, o: e }; let oe, te; return t && ([oe, te] = t(ye)), { render: fe, hydrate: oe, createApp: $c(fe, oe) } }

function Tt({ effect: e, update: t }, n) { e.allowRecurse = t.allowRecurse = n }

function ms(e, t, n = !1) { const o = e.children,
        s = t.children; if (W(o) && W(s))
        for (let i = 0; i < o.length; i++) { const r = o[i]; let a = s[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[i] = _t(s[i]), a.el = r.el), n || ms(r, a)) } }

function Cc(e) { const t = e.slice(),
        n = [0]; let o, s, i, r, a; const l = e.length; for (o = 0; o < l; o++) { const u = e[o]; if (u !== 0) { if (s = n[n.length - 1], e[s] < u) { t[o] = s, n.push(o); continue } for (i = 0, r = n.length - 1; i < r;) a = i + r >> 1, e[n[a]] < u ? i = a + 1 : r = a;
            u < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o) } } for (i = n.length, r = n[i - 1]; i-- > 0;) n[i] = r, r = t[r]; return n }
const Mc = e => e.__isTeleport,
    yn = e => e && (e.disabled || e.disabled === ""),
    ci = e => typeof SVGElement != "undefined" && e instanceof SVGElement,
    Do = (e, t) => { const n = e && e.to; return Ee(n) ? t ? t(n) : null : n },
    Tc = { __isTeleport: !0, process(e, t, n, o, s, i, r, a, l, u) { const { mc: c, pc: f, pbc: p, o: { insert: _, querySelector: E, createText: k, createComment: P } } = u, S = yn(t.props); let { shapeFlag: B, children: q, dynamicChildren: Q } = t; if (e == null) { const Z = t.el = k(""),
                    J = t.anchor = k("");
                _(Z, n, o), _(J, n, o); const se = t.target = Do(t.props, E),
                    z = t.targetAnchor = k("");
                se && (_(z, se), r = r || ci(se)); const L = (K, X) => { B & 16 && c(q, K, X, s, i, r, a, l) };
                S ? L(n, J) : se && L(se, z) } else { t.el = e.el; const Z = t.anchor = e.anchor,
                    J = t.target = e.target,
                    se = t.targetAnchor = e.targetAnchor,
                    z = yn(e.props),
                    L = z ? n : J,
                    K = z ? Z : se; if (r = r || ci(J), Q ? (p(e.dynamicChildren, Q, L, s, i, r, a), ms(e, t, !0)) : l || f(e, t, L, K, s, i, r, a, !1), S) z || Vn(t, n, Z, u, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) { const X = t.target = Do(t.props, E);
                    X && Vn(t, X, null, u, 0) } else z && Vn(t, J, se, u, 1) } }, remove(e, t, n, o, { um: s, o: { remove: i } }, r) { const { shapeFlag: a, children: l, anchor: u, targetAnchor: c, target: f, props: p } = e; if (f && i(c), (r || !yn(p)) && (i(u), a & 16))
                for (let _ = 0; _ < l.length; _++) { const E = l[_];
                    s(E, t, n, !0, !!E.dynamicChildren) } }, move: Vn, hydrate: Ac };

function Vn(e, t, n, { o: { insert: o }, m: s }, i = 2) { i === 0 && o(e.targetAnchor, t, n); const { el: r, anchor: a, shapeFlag: l, children: u, props: c } = e, f = i === 2; if (f && o(r, t, n), (!f || yn(c)) && l & 16)
        for (let p = 0; p < u.length; p++) s(u[p], t, n, 2);
    f && o(a, t, n) }

function Ac(e, t, n, o, s, i, { o: { nextSibling: r, parentNode: a, querySelector: l } }, u) { const c = t.target = Do(t.props, l); if (c) { const f = c._lpa || c.firstChild; if (t.shapeFlag & 16)
            if (yn(t.props)) t.anchor = u(r(e), t, a(e), n, o, s, i), t.targetAnchor = f;
            else { t.anchor = r(e); let p = f; for (; p;)
                    if (p = r(p), p && p.nodeType === 8 && p.data === "teleport anchor") { t.targetAnchor = p, c._lpa = t.targetAnchor && r(t.targetAnchor); break }
                u(f, t, c, n, o, s, i) } } return t.anchor && r(t.anchor) }
const Wr = Tc,
    _e = Symbol(void 0),
    gs = Symbol(void 0),
    Ue = Symbol(void 0),
    bn = Symbol(void 0),
    wn = [];
let Ge = null;

function v(e = !1) { wn.push(Ge = e ? null : []) }

function xc() { wn.pop(), Ge = wn[wn.length - 1] || null }
let An = 1;

function ui(e) { An += e }

function qr(e) { return e.dynamicChildren = An > 0 ? Ge || Wt : null, xc(), An > 0 && Ge && Ge.push(e), e }

function I(e, t, n, o, s, i) { return qr(m(e, t, n, o, s, i, !0)) }

function be(e, t, n, o, s) { return qr(T(e, t, n, o, s, !0)) }

function Wn(e) { return e ? e.__v_isVNode === !0 : !1 }

function St(e, t) { return e.type === t.type && e.key === t.key }
const uo = "__vInternal",
    Jr = ({ key: e }) => e != null ? e : null,
    Fn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Ee(e) || Te(e) || ee(e) ? { i: Le, r: e, k: t, f: !!n } : e : null;

function m(e, t = null, n = null, o = 0, s = null, i = e === _e ? 0 : 1, r = !1, a = !1) { const l = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && Jr(t), ref: t && Fn(t), scopeId: io, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: i, patchFlag: o, dynamicProps: s, dynamicChildren: null, appContext: null }; return a ? (_s(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ee(n) ? 8 : 16), An > 0 && !r && Ge && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && Ge.push(l), l }
const T = Lc;

function Lc(e, t = null, n = null, o = 0, s = null, i = !1) { if ((!e || e === Vr) && (e = Ue), Wn(e)) { const a = It(e, t, !0); return n && _s(a, n), An > 0 && !i && Ge && (a.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = a : Ge.push(a)), a.patchFlag |= -2, a } if (Fc(e) && (e = e.__vccOpts), t) { t = Sc(t); let { class: a, style: l } = t;
        a && !Ee(a) && (t.class = nt(a)), Ce(l) && (gr(l) && !W(l) && (l = Ae({}, l)), t.style = Fe(l)) } const r = Ee(e) ? 1 : Wl(e) ? 128 : Mc(e) ? 64 : Ce(e) ? 4 : ee(e) ? 2 : 0; return m(e, t, n, o, s, r, i, !0) }

function Sc(e) { return e ? gr(e) || uo in e ? Ae({}, e) : e : null }

function It(e, t, n = !1) { const { props: o, ref: s, patchFlag: i, children: r } = e, a = t ? vs(o || {}, t) : o; return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && Jr(a), ref: t && t.ref ? n && s ? W(s) ? s.concat(Fn(t)) : [s, Fn(t)] : Fn(t) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: r, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && It(e.ssContent), ssFallback: e.ssFallback && It(e.ssFallback), el: e.el, anchor: e.anchor } }

function le(e = " ", t = 0) { return T(gs, null, e, t) }

function Sn(e, t) { const n = T(bn, null, e); return n.staticCount = t, n }

function ue(e = "", t = !1) { return t ? (v(), be(Ue, null, e)) : T(Ue, null, e) }

function Qe(e) { return e == null || typeof e == "boolean" ? T(Ue) : W(e) ? T(_e, null, e.slice()) : typeof e == "object" ? _t(e) : T(gs, null, String(e)) }

function _t(e) { return e.el === null || e.memo ? e : It(e) }

function _s(e, t) { let n = 0; const { shapeFlag: o } = e; if (t == null) t = null;
    else if (W(t)) n = 16;
    else if (typeof t == "object")
        if (o & 65) { const s = t.default;
            s && (s._c && (s._d = !1), _s(e, s()), s._c && (s._d = !0)); return } else { n = 32; const s = t._;!s && !(uo in t) ? t._ctx = Le : s === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) }
    else ee(t) ? (t = { default: t, _ctx: Le }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [le(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n }

function vs(...e) { const t = {}; for (let n = 0; n < e.length; n++) { const o = e[n]; for (const s in o)
            if (s === "class") t.class !== o.class && (t.class = nt([t.class, o.class]));
            else if (s === "style") t.style = Fe([t.style, o.style]);
        else if (Yn(s)) { const i = t[s],
                r = o[s];
            r && i !== r && !(W(i) && i.includes(r)) && (t[s] = i ? [].concat(i, r) : r) } else s !== "" && (t[s] = o[s]) } return t }

function Je(e, t, n, o = null) { je(e, t, 7, [n, o]) }
const kc = Kr();
let Pc = 0;

function Rc(e, t, n) { const o = e.type,
        s = (t ? t.appContext : e.appContext) || kc,
        i = { uid: Pc++, vnode: e, type: o, parent: t, appContext: s, root: null, next: null, subTree: null, effect: null, update: null, scope: new nl(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(s.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: Dr(o, s), emitsOptions: xr(o, s), emit: null, emitted: null, propsDefaults: ge, inheritAttrs: o.inheritAttrs, ctx: ge, data: ge, props: ge, attrs: ge, slots: ge, refs: ge, setupState: ge, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null }; return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Dl.bind(null, i), e.ce && e.ce(i), i }
let Me = null;
const Yr = () => Me || Le,
    Xt = e => { Me = e, e.scope.on() },
    Vt = () => { Me && Me.scope.off(), Me = null };

function Qr(e) { return e.vnode.shapeFlag & 4 }
let xn = !1;

function Oc(e, t = !1) { xn = t; const { props: n, children: o } = e.vnode, s = Qr(e);
    gc(e, n, s, t), yc(e, o); const i = s ? Nc(e, t) : void 0; return xn = !1, i }

function Nc(e, t) { const n = e.type;
    e.accessCache = Object.create(null), e.proxy = _r(new Proxy(e.ctx, uc)); const { setup: o } = n; if (o) { const s = e.setupContext = o.length > 1 ? Hc(e) : null;
        Xt(e), on(); const i = bt(o, e, 0, [e.props, s]); if (sn(), Vt(), nr(i)) { if (i.then(Vt, Vt), t) return i.then(r => { di(e, r, t) }).catch(r => { no(r, e, 0) });
            e.asyncDep = i } else di(e, i, t) } else Xr(e, t) }

function di(e, t, n) { ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ce(t) && (e.setupState = wr(t)), Xr(e, n) }
let fi;

function Xr(e, t, n) { const o = e.type; if (!e.render) { if (!t && fi && !o.render) { const s = o.template; if (s) { const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: l } = o, u = Ae(Ae({ isCustomElement: i, delimiters: a }, r), l);
                o.render = fi(s, u) } }
        e.render = o.render || Ze }
    Xt(e), on(), dc(e), sn(), Vt() }

function Vc(e) { return new Proxy(e.attrs, {get(t, n) { return Ve(e, "get", "$attrs"), t[n] } }) }

function Hc(e) { const t = o => { e.exposed = o || {} }; let n; return {get attrs() { return n || (n = Vc(e)) }, slots: e.slots, emit: e.emit, expose: t } }

function fo(e) { if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(wr(_r(e.exposed)), {get(t, n) { if (n in t) return t[n]; if (n in Zn) return Zn[n](e) } })) }

function Bc(e) { return ee(e) && e.displayName || e.name }

function Fc(e) { return ee(e) && "__vccOpts" in e }
const Xe = (e, t) => Vl(e, t, xn);

function ys(e, t, n) { const o = arguments.length; return o === 2 ? Ce(t) && !W(t) ? Wn(t) ? T(e, null, [t]) : T(e, t) : T(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Wn(n) && (n = [n]), T(e, t, n)) }
const jc = "3.2.36",
    Uc = "http://www.w3.org/2000/svg",
    kt = typeof document != "undefined" ? document : null,
    pi = kt && kt.createElement("template"),
    Dc = { insert: (e, t, n) => { t.insertBefore(e, n || null) }, remove: e => { const t = e.parentNode;
            t && t.removeChild(e) }, createElement: (e, t, n, o) => { const s = t ? kt.createElementNS(Uc, e) : kt.createElement(e, n ? { is: n } : void 0); return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s }, createText: e => kt.createTextNode(e), createComment: e => kt.createComment(e), setText: (e, t) => { e.nodeValue = t }, setElementText: (e, t) => { e.textContent = t }, parentNode: e => e.parentNode, nextSibling: e => e.nextSibling, querySelector: e => kt.querySelector(e), setScopeId(e, t) { e.setAttribute(t, "") }, cloneNode(e) { const t = e.cloneNode(!0); return "_value" in e && (t._value = e._value), t }, insertStaticContent(e, t, n, o, s, i) { const r = n ? n.previousSibling : t.lastChild; if (s && (s === i || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)););
            else { pi.innerHTML = o ? `<svg>${e}</svg>` : e; const a = pi.content; if (o) { const l = a.firstChild; for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l) }
                t.insertBefore(a, n) } return [r ? r.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild] } };

function zc(e, t, n) { const o = e._vtc;
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t }

function Gc(e, t, n) { const o = e.style,
        s = Ee(n); if (n && !s) { for (const i in n) zo(o, i, n[i]); if (t && !Ee(t))
            for (const i in t) n[i] == null && zo(o, i, "") } else { const i = o.display;
        s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = i) } }
const hi = /\s*!important$/;

function zo(e, t, n) { if (W(n)) n.forEach(o => zo(e, t, o));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else { const o = Zc(e, t);
        hi.test(n) ? e.setProperty(nn(o), n.replace(hi, ""), "important") : e[o] = n } }
const mi = ["Webkit", "Moz", "ms"],
    wo = {};

function Zc(e, t) { const n = wo[t]; if (n) return n; let o = ot(t); if (o !== "filter" && o in e) return wo[t] = o;
    o = eo(o); for (let s = 0; s < mi.length; s++) { const i = mi[s] + o; if (i in e) return wo[t] = i } return t }
const gi = "http://www.w3.org/1999/xlink";

function Kc(e, t, n, o, s) { if (o && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(gi, t.slice(6, t.length)) : e.setAttributeNS(gi, t, n);
    else { const i = za(t);
        n == null || i && !Xi(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n) } }

function Wc(e, t, n, o, s, i, r) { if (t === "innerHTML" || t === "textContent") { o && r(o, s, i), e[t] = n == null ? "" : n; return } if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) { e._value = n; const l = n == null ? "" : n;
        (e.value !== l || e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t); return } let a = !1; if (n === "" || n == null) { const l = typeof e[t];
        l === "boolean" ? n = Xi(n) : n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0) } try { e[t] = n } catch {}
    a && e.removeAttribute(t) }
const [ea, qc] = (() => { let e = Date.now,
        t = !1; if (typeof window != "undefined") { Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance)); const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(n && Number(n[1]) <= 53) } return [e, t] })();
let Go = 0;
const Jc = Promise.resolve(),
    Yc = () => { Go = 0 },
    Qc = () => Go || (Jc.then(Yc), Go = ea());

function Zt(e, t, n, o) { e.addEventListener(t, n, o) }

function Xc(e, t, n, o) { e.removeEventListener(t, n, o) }

function eu(e, t, n, o, s = null) { const i = e._vei || (e._vei = {}),
        r = i[t]; if (o && r) r.value = o;
    else { const [a, l] = tu(t); if (o) { const u = i[t] = nu(o, s);
            Zt(e, a, u, l) } else r && (Xc(e, a, r, l), i[t] = void 0) } }
const _i = /(?:Once|Passive|Capture)$/;

function tu(e) { let t; if (_i.test(e)) { t = {}; let n; for (; n = e.match(_i);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0 } return [nn(e.slice(2)), t] }

function nu(e, t) { const n = o => { const s = o.timeStamp || ea();
        (qc || s >= n.attached - 1) && je(ou(o, n.value), t, 5, [o]) }; return n.value = e, n.attached = Qc(), n }

function ou(e, t) { if (W(t)) { const n = e.stopImmediatePropagation; return e.stopImmediatePropagation = () => { n.call(e), e._stopped = !0 }, t.map(o => s => !s._stopped && o && o(s)) } else return t }
const vi = /^on[a-z]/,
    su = (e, t, n, o, s = !1, i, r, a, l) => { t === "class" ? zc(e, o, s) : t === "style" ? Gc(e, n, o) : Yn(t) ? es(t) || eu(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : iu(e, t, o, s)) ? Wc(e, t, o, i, r, a, l) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Kc(e, t, o, s)) };

function iu(e, t, n, o) { return o ? !!(t === "innerHTML" || t === "textContent" || t in e && vi.test(t) && ee(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || vi.test(t) && Ee(n) ? !1 : t in e }

function bs(e) { const t = Yr(); if (!t) return; const n = () => Zo(t.subTree, e(t.proxy));
    Yl(n), co(() => { const o = new MutationObserver(n);
        o.observe(t.subTree.el.parentNode, { childList: !0 }), fs(() => o.disconnect()) }) }

function Zo(e, t) { if (e.shapeFlag & 128) { const n = e.suspense;
        e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => { Zo(n.activeBranch, t) }) } for (; e.component;) e = e.component.subTree; if (e.shapeFlag & 1 && e.el) yi(e.el, t);
    else if (e.type === _e) e.children.forEach(n => Zo(n, t));
    else if (e.type === bn) { let { el: n, anchor: o } = e; for (; n && (yi(n, t), n !== o);) n = n.nextSibling } }

function yi(e, t) { if (e.nodeType === 1) { const n = e.style; for (const o in t) n.setProperty(`--${o}`, t[o]) } }
const ft = "transition",
    cn = "animation",
    Pt = (e, { slots: t }) => ys(Sr, ru(e), t);
Pt.displayName = "Transition";
const ta = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
Pt.props = Ae({}, Sr.props, ta);
const At = (e, t = []) => { W(e) ? e.forEach(n => n(...t)) : e && e(...t) },
    bi = e => e ? W(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function ru(e) { const t = {}; for (const O in e) O in ta || (t[O] = e[O]); if (e.css === !1) return t; const { name: n = "v", type: o, duration: s, enterFromClass: i = `${n}-enter-from`, enterActiveClass: r = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = i, appearActiveClass: u = r, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: _ = `${n}-leave-to` } = e, E = au(s), k = E && E[0], P = E && E[1], { onBeforeEnter: S, onEnter: B, onEnterCancelled: q, onLeave: Q, onLeaveCancelled: Z, onBeforeAppear: J = S, onAppear: se = B, onAppearCancelled: z = q } = t, L = (O, we, xe) => { xt(O, we ? c : a), xt(O, we ? u : r), xe && xe() }, K = (O, we) => { O._isLeaving = !1, xt(O, f), xt(O, _), xt(O, p), we && we() }, X = O => (we, xe) => { const st = O ? se : B,
            Ie = () => L(we, O, xe);
        At(st, [we, Ie]), wi(() => { xt(we, O ? l : i), pt(we, O ? c : a), bi(st) || $i(we, o, k, Ie) }) }; return Ae(t, { onBeforeEnter(O) { At(S, [O]), pt(O, i), pt(O, r) }, onBeforeAppear(O) { At(J, [O]), pt(O, l), pt(O, u) }, onEnter: X(!1), onAppear: X(!0), onLeave(O, we) { O._isLeaving = !0; const xe = () => K(O, we);
            pt(O, f), uu(), pt(O, p), wi(() => {!O._isLeaving || (xt(O, f), pt(O, _), bi(Q) || $i(O, o, P, xe)) }), At(Q, [O, xe]) }, onEnterCancelled(O) { L(O, !1), At(q, [O]) }, onAppearCancelled(O) { L(O, !0), At(z, [O]) }, onLeaveCancelled(O) { K(O), At(Z, [O]) } }) }

function au(e) { if (e == null) return null; if (Ce(e)) return [$o(e.enter), $o(e.leave)]; { const t = $o(e); return [t, t] } }

function $o(e) { return Un(e) }

function pt(e, t) { t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t) }

function xt(e, t) { t.split(/\s+/).forEach(o => o && e.classList.remove(o)); const { _vtc: n } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0)) }

function wi(e) { requestAnimationFrame(() => { requestAnimationFrame(e) }) }
let lu = 0;

function $i(e, t, n, o) { const s = e._endId = ++lu,
        i = () => { s === e._endId && o() }; if (n) return setTimeout(i, n); const { type: r, timeout: a, propCount: l } = cu(e, t); if (!r) return o(); const u = r + "end"; let c = 0; const f = () => { e.removeEventListener(u, p), i() },
        p = _ => { _.target === e && ++c >= l && f() };
    setTimeout(() => { c < l && f() }, a + 1), e.addEventListener(u, p) }

function cu(e, t) { const n = window.getComputedStyle(e),
        o = E => (n[E] || "").split(", "),
        s = o(ft + "Delay"),
        i = o(ft + "Duration"),
        r = Ii(s, i),
        a = o(cn + "Delay"),
        l = o(cn + "Duration"),
        u = Ii(a, l); let c = null,
        f = 0,
        p = 0;
    t === ft ? r > 0 && (c = ft, f = r, p = i.length) : t === cn ? u > 0 && (c = cn, f = u, p = l.length) : (f = Math.max(r, u), c = f > 0 ? r > u ? ft : cn : null, p = c ? c === ft ? i.length : l.length : 0); const _ = c === ft && /\b(transform|all)(,|$)/.test(n[ft + "Property"]); return { type: c, timeout: f, propCount: p, hasTransform: _ } }

function Ii(e, t) { for (; e.length < t.length;) e = e.concat(e); return Math.max(...t.map((n, o) => Ei(n) + Ei(e[o]))) }

function Ei(e) { return Number(e.slice(0, -1).replace(",", ".")) * 1e3 }

function uu() { return document.body.offsetHeight }
const Ci = e => { const t = e.props["onUpdate:modelValue"] || !1; return W(t) ? n => Bn(t, n) : t };

function du(e) { e.target.composing = !0 }

function Mi(e) { const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input"))) }
const Io = { created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) { e._assign = Ci(s); const i = o || s.props && s.props.type === "number";
            Zt(e, t ? "change" : "input", r => { if (r.target.composing) return; let a = e.value;
                n && (a = a.trim()), i && (a = Un(a)), e._assign(a) }), n && Zt(e, "change", () => { e.value = e.value.trim() }), t || (Zt(e, "compositionstart", du), Zt(e, "compositionend", Mi), Zt(e, "change", Mi)) }, mounted(e, { value: t }) { e.value = t == null ? "" : t }, beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: o, number: s } }, i) { if (e._assign = Ci(i), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (s || e.type === "number") && Un(e.value) === t)) return; const r = t == null ? "" : t;
            e.value !== r && (e.value = r) } },
    fu = ["ctrl", "shift", "alt", "meta"],
    pu = { stop: e => e.stopPropagation(), prevent: e => e.preventDefault(), self: e => e.target !== e.currentTarget, ctrl: e => !e.ctrlKey, shift: e => !e.shiftKey, alt: e => !e.altKey, meta: e => !e.metaKey, left: e => "button" in e && e.button !== 0, middle: e => "button" in e && e.button !== 1, right: e => "button" in e && e.button !== 2, exact: (e, t) => fu.some(n => e[`${n}Key`] && !t.includes(n)) },
    hu = (e, t) => (n, ...o) => { for (let s = 0; s < t.length; s++) { const i = pu[t[s]]; if (i && i(n, t)) return } return e(n, ...o) },
    ws = { beforeMount(e, { value: t }, { transition: n }) { e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : un(e, t) }, mounted(e, { value: t }, { transition: n }) { n && t && n.enter(e) }, updated(e, { value: t, oldValue: n }, { transition: o }) {!t != !n && (o ? t ? (o.beforeEnter(e), un(e, !0), o.enter(e)) : o.leave(e, () => { un(e, !1) }) : un(e, t)) }, beforeUnmount(e, { value: t }) { un(e, t) } };

function un(e, t) { e.style.display = t ? e._vod : "none" }
const mu = Ae({ patchProp: su }, Dc);
let Ti;

function gu() { return Ti || (Ti = Ic(mu)) }
const _u = (...e) => { const t = gu().createApp(...e),
        { mount: n } = t; return t.mount = o => { const s = vu(o); if (!s) return; const i = t._component;!ee(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = ""; const r = n(s, !1, s instanceof SVGElement); return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r }, t };

function vu(e) { return Ee(e) ? document.querySelector(e) : e }

function yu() { return na().__VUE_DEVTOOLS_GLOBAL_HOOK__ }

function na() { return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {} }
const bu = typeof Proxy == "function",
    wu = "devtools-plugin:setup",
    $u = "plugin:settings:set";
let jt, Ko;

function Iu() { var e; return jt !== void 0 || (typeof window != "undefined" && window.performance ? (jt = !0, Ko = window.performance) : typeof global != "undefined" && ((e = global.perf_hooks) === null || e === void 0 ? void 0 : e.performance) ? (jt = !0, Ko = global.perf_hooks.performance) : jt = !1), jt }

function Eu() { return Iu() ? Ko.now() : Date.now() }
class Cu { constructor(t, n) { this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n; const o = {}; if (t.settings)
            for (const r in t.settings) { const a = t.settings[r];
                o[r] = a.defaultValue }
        const s = `__vue-devtools-plugin-settings__${t.id}`; let i = Object.assign({}, o); try { const r = localStorage.getItem(s),
                a = JSON.parse(r);
            Object.assign(i, a) } catch {}
        this.fallbacks = { getSettings() { return i }, setSettings(r) { try { localStorage.setItem(s, JSON.stringify(r)) } catch {}
                i = r }, now() { return Eu() } }, n && n.on($u, (r, a) => { r === this.plugin.id && this.fallbacks.setSettings(a) }), this.proxiedOn = new Proxy({}, { get: (r, a) => this.target ? this.target.on[a] : (...l) => { this.onQueue.push({ method: a, args: l }) } }), this.proxiedTarget = new Proxy({}, { get: (r, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({ method: a, args: l, resolve: () => {} }), this.fallbacks[a](...l)) : (...l) => new Promise(u => { this.targetQueue.push({ method: a, args: l, resolve: u }) }) }) }
    async setRealTarget(t) { this.target = t; for (const n of this.onQueue) this.target.on[n.method](...n.args); for (const n of this.targetQueue) n.resolve(await this.target[n.method](...n.args)) } }

function Mu(e, t) { const n = e,
        o = na(),
        s = yu(),
        i = bu && n.enableEarlyProxy; if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i)) s.emit(wu, e, t);
    else { const r = i ? new Cu(n, s) : null;
        (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({ pluginDescriptor: n, setupFn: t, proxy: r }), r && t(r.proxiedTarget) } }
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var Tu = "store";

function rn(e, t) { Object.keys(e).forEach(function(n) { return t(e[n], n) }) }

function Au(e) { return e !== null && typeof e == "object" }

function xu(e) { return e && typeof e.then == "function" }

function Lu(e, t) { return function() { return e(t) } }

function oa(e, t, n) { return t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
        function() { var o = t.indexOf(e);
            o > -1 && t.splice(o, 1) } }

function sa(e, t) { e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null); var n = e.state;
    po(e, n, [], e._modules.root, !0), $s(e, n, t) }

function $s(e, t, n) { var o = e._state;
    e.getters = {}, e._makeLocalGettersCache = Object.create(null); var s = e._wrappedGetters,
        i = {};
    rn(s, function(r, a) { i[a] = Lu(r, e), Object.defineProperty(e.getters, a, { get: function() { return i[a]() }, enumerable: !0 }) }), e._state = lt({ data: t }), e.strict && Ou(e), o && n && e._withCommit(function() { o.data = null }) }

function po(e, t, n, o, s) { var i = !n.length,
        r = e._modules.getNamespace(n); if (o.namespaced && (e._modulesNamespaceMap[r], e._modulesNamespaceMap[r] = o), !i && !s) { var a = Is(t, n.slice(0, -1)),
            l = n[n.length - 1];
        e._withCommit(function() { a[l] = o.state }) } var u = o.context = Su(e, r, n);
    o.forEachMutation(function(c, f) { var p = r + f;
        ku(e, p, c, u) }), o.forEachAction(function(c, f) { var p = c.root ? f : r + f,
            _ = c.handler || c;
        Pu(e, p, _, u) }), o.forEachGetter(function(c, f) { var p = r + f;
        Ru(e, p, c, u) }), o.forEachChild(function(c, f) { po(e, t, n.concat(f), c, s) }) }

function Su(e, t, n) { var o = t === "",
        s = { dispatch: o ? e.dispatch : function(i, r, a) { var l = qn(i, r, a),
                    u = l.payload,
                    c = l.options,
                    f = l.type; return (!c || !c.root) && (f = t + f), e.dispatch(f, u) }, commit: o ? e.commit : function(i, r, a) { var l = qn(i, r, a),
                    u = l.payload,
                    c = l.options,
                    f = l.type;
                (!c || !c.root) && (f = t + f), e.commit(f, u, c) } }; return Object.defineProperties(s, { getters: { get: o ? function() { return e.getters } : function() { return ia(e, t) } }, state: { get: function() { return Is(e.state, n) } } }), s }

function ia(e, t) { if (!e._makeLocalGettersCache[t]) { var n = {},
            o = t.length;
        Object.keys(e.getters).forEach(function(s) { if (s.slice(0, o) === t) { var i = s.slice(o);
                Object.defineProperty(n, i, { get: function() { return e.getters[s] }, enumerable: !0 }) } }), e._makeLocalGettersCache[t] = n } return e._makeLocalGettersCache[t] }

function ku(e, t, n, o) { var s = e._mutations[t] || (e._mutations[t] = []);
    s.push(function(r) { n.call(e, o.state, r) }) }

function Pu(e, t, n, o) { var s = e._actions[t] || (e._actions[t] = []);
    s.push(function(r) { var a = n.call(e, { dispatch: o.dispatch, commit: o.commit, getters: o.getters, state: o.state, rootGetters: e.getters, rootState: e.state }, r); return xu(a) || (a = Promise.resolve(a)), e._devtoolHook ? a.catch(function(l) { throw e._devtoolHook.emit("vuex:error", l), l }) : a }) }

function Ru(e, t, n, o) { e._wrappedGetters[t] || (e._wrappedGetters[t] = function(i) { return n(o.state, o.getters, i.state, i.getters) }) }

function Ou(e) { Nt(function() { return e._state.data }, function() {}, { deep: !0, flush: "sync" }) }

function Is(e, t) { return t.reduce(function(n, o) { return n[o] }, e) }

function qn(e, t, n) { return Au(e) && e.type && (n = t, t = e, e = e.type), { type: e, payload: t, options: n } }
var Nu = "vuex bindings",
    Ai = "vuex:mutations",
    Eo = "vuex:actions",
    Ut = "vuex",
    Vu = 0;

function Hu(e, t) { Mu({ id: "org.vuejs.vuex", app: e, label: "Vuex", homepage: "https://next.vuex.vuejs.org/", logo: "https://vuejs.org/images/icons/favicon-96x96.png", packageName: "vuex", componentStateTypes: [Nu] }, function(n) { n.addTimelineLayer({ id: Ai, label: "Vuex Mutations", color: xi }), n.addTimelineLayer({ id: Eo, label: "Vuex Actions", color: xi }), n.addInspector({ id: Ut, label: "Vuex", icon: "storage", treeFilterPlaceholder: "Filter stores..." }), n.on.getInspectorTree(function(o) { if (o.app === e && o.inspectorId === Ut)
                if (o.filter) { var s = [];
                    ca(s, t._modules.root, o.filter, ""), o.rootNodes = s } else o.rootNodes = [la(t._modules.root, "")] }), n.on.getInspectorState(function(o) { if (o.app === e && o.inspectorId === Ut) { var s = o.nodeId;
                ia(t, s), o.state = ju(Du(t._modules, s), s === "root" ? t.getters : t._makeLocalGettersCache, s) } }), n.on.editInspectorState(function(o) { if (o.app === e && o.inspectorId === Ut) { var s = o.nodeId,
                    i = o.path;
                s !== "root" && (i = s.split("/").filter(Boolean).concat(i)), t._withCommit(function() { o.set(t._state.data, i, o.state.value) }) } }), t.subscribe(function(o, s) { var i = {};
            o.payload && (i.payload = o.payload), i.state = s, n.notifyComponentUpdate(), n.sendInspectorTree(Ut), n.sendInspectorState(Ut), n.addTimelineEvent({ layerId: Ai, event: { time: Date.now(), title: o.type, data: i } }) }), t.subscribeAction({ before: function(o, s) { var i = {};
                o.payload && (i.payload = o.payload), o._id = Vu++, o._time = Date.now(), i.state = s, n.addTimelineEvent({ layerId: Eo, event: { time: o._time, title: o.type, groupId: o._id, subtitle: "start", data: i } }) }, after: function(o, s) { var i = {},
                    r = Date.now() - o._time;
                i.duration = { _custom: { type: "duration", display: r + "ms", tooltip: "Action duration", value: r } }, o.payload && (i.payload = o.payload), i.state = s, n.addTimelineEvent({ layerId: Eo, event: { time: Date.now(), title: o.type, groupId: o._id, subtitle: "end", data: i } }) } }) }) }
var xi = 8702998,
    Bu = 6710886,
    Fu = 16777215,
    ra = { label: "namespaced", textColor: Fu, backgroundColor: Bu };

function aa(e) { return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root" }

function la(e, t) { return { id: t || "root", label: aa(t), tags: e.namespaced ? [ra] : [], children: Object.keys(e._children).map(function(n) { return la(e._children[n], t + n + "/") }) } }

function ca(e, t, n, o) { o.includes(n) && e.push({ id: o || "root", label: o.endsWith("/") ? o.slice(0, o.length - 1) : o || "Root", tags: t.namespaced ? [ra] : [] }), Object.keys(t._children).forEach(function(s) { ca(e, t._children[s], n, o + s + "/") }) }

function ju(e, t, n) { t = n === "root" ? t : t[n]; var o = Object.keys(t),
        s = { state: Object.keys(e.state).map(function(r) { return { key: r, editable: !0, value: e.state[r] } }) }; if (o.length) { var i = Uu(t);
        s.getters = Object.keys(i).map(function(r) { return { key: r.endsWith("/") ? aa(r) : r, editable: !1, value: Wo(function() { return i[r] }) } }) } return s }

function Uu(e) { var t = {}; return Object.keys(e).forEach(function(n) { var o = n.split("/"); if (o.length > 1) { var s = t,
                i = o.pop();
            o.forEach(function(r) { s[r] || (s[r] = { _custom: { value: {}, display: r, tooltip: "Module", abstract: !0 } }), s = s[r]._custom.value }), s[i] = Wo(function() { return e[n] }) } else t[n] = Wo(function() { return e[n] }) }), t }

function Du(e, t) { var n = t.split("/").filter(function(o) { return o }); return n.reduce(function(o, s, i) { var r = o[s]; if (!r) throw new Error('Missing module "' + s + '" for path "' + t + '".'); return i === n.length - 1 ? r : r._children }, t === "root" ? e : e.root._children) }

function Wo(e) { try { return e() } catch (t) { return t } }
var Ke = function(t, n) { this.runtime = n, this._children = Object.create(null), this._rawModule = t; var o = t.state;
        this.state = (typeof o == "function" ? o() : o) || {} },
    ua = { namespaced: { configurable: !0 } };
ua.namespaced.get = function() { return !!this._rawModule.namespaced };
Ke.prototype.addChild = function(t, n) { this._children[t] = n };
Ke.prototype.removeChild = function(t) { delete this._children[t] };
Ke.prototype.getChild = function(t) { return this._children[t] };
Ke.prototype.hasChild = function(t) { return t in this._children };
Ke.prototype.update = function(t) { this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters) };
Ke.prototype.forEachChild = function(t) { rn(this._children, t) };
Ke.prototype.forEachGetter = function(t) { this._rawModule.getters && rn(this._rawModule.getters, t) };
Ke.prototype.forEachAction = function(t) { this._rawModule.actions && rn(this._rawModule.actions, t) };
Ke.prototype.forEachMutation = function(t) { this._rawModule.mutations && rn(this._rawModule.mutations, t) };
Object.defineProperties(Ke.prototype, ua);
var Ht = function(t) { this.register([], t, !1) };
Ht.prototype.get = function(t) { return t.reduce(function(n, o) { return n.getChild(o) }, this.root) };
Ht.prototype.getNamespace = function(t) { var n = this.root; return t.reduce(function(o, s) { return n = n.getChild(s), o + (n.namespaced ? s + "/" : "") }, "") };
Ht.prototype.update = function(t) { da([], this.root, t) };
Ht.prototype.register = function(t, n, o) { var s = this;
    o === void 0 && (o = !0); var i = new Ke(n, o); if (t.length === 0) this.root = i;
    else { var r = this.get(t.slice(0, -1));
        r.addChild(t[t.length - 1], i) }
    n.modules && rn(n.modules, function(a, l) { s.register(t.concat(l), a, o) }) };
Ht.prototype.unregister = function(t) { var n = this.get(t.slice(0, -1)),
        o = t[t.length - 1],
        s = n.getChild(o);!s || !s.runtime || n.removeChild(o) };
Ht.prototype.isRegistered = function(t) { var n = this.get(t.slice(0, -1)),
        o = t[t.length - 1]; return n ? n.hasChild(o) : !1 };

function da(e, t, n) { if (t.update(n), n.modules)
        for (var o in n.modules) { if (!t.getChild(o)) return;
            da(e.concat(o), t.getChild(o), n.modules[o]) } }

function zu(e) { return new Pe(e) }
var Pe = function(t) { var n = this;
        t === void 0 && (t = {}); var o = t.plugins;
        o === void 0 && (o = []); var s = t.strict;
        s === void 0 && (s = !1); var i = t.devtools;
        this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new Ht(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._makeLocalGettersCache = Object.create(null), this._devtools = i; var r = this,
            a = this,
            l = a.dispatch,
            u = a.commit;
        this.dispatch = function(p, _) { return l.call(r, p, _) }, this.commit = function(p, _, E) { return u.call(r, p, _, E) }, this.strict = s; var c = this._modules.root.state;
        po(this, c, [], this._modules.root), $s(this, c), o.forEach(function(f) { return f(n) }) },
    Es = { state: { configurable: !0 } };
Pe.prototype.install = function(t, n) { t.provide(n || Tu, this), t.config.globalProperties.$store = this; var o = this._devtools !== void 0 ? this._devtools : !1;
    o && Hu(t, this) };
Es.state.get = function() { return this._state.data };
Es.state.set = function(e) {};
Pe.prototype.commit = function(t, n, o) { var s = this,
        i = qn(t, n, o),
        r = i.type,
        a = i.payload,
        l = { type: r, payload: a },
        u = this._mutations[r];!u || (this._withCommit(function() { u.forEach(function(f) { f(a) }) }), this._subscribers.slice().forEach(function(c) { return c(l, s.state) })) };
Pe.prototype.dispatch = function(t, n) { var o = this,
        s = qn(t, n),
        i = s.type,
        r = s.payload,
        a = { type: i, payload: r },
        l = this._actions[i]; if (!!l) { try { this._actionSubscribers.slice().filter(function(c) { return c.before }).forEach(function(c) { return c.before(a, o.state) }) } catch {} var u = l.length > 1 ? Promise.all(l.map(function(c) { return c(r) })) : l[0](r); return new Promise(function(c, f) { u.then(function(p) { try { o._actionSubscribers.filter(function(_) { return _.after }).forEach(function(_) { return _.after(a, o.state) }) } catch {}
                c(p) }, function(p) { try { o._actionSubscribers.filter(function(_) { return _.error }).forEach(function(_) { return _.error(a, o.state, p) }) } catch {}
                f(p) }) }) } };
Pe.prototype.subscribe = function(t, n) { return oa(t, this._subscribers, n) };
Pe.prototype.subscribeAction = function(t, n) { var o = typeof t == "function" ? { before: t } : t; return oa(o, this._actionSubscribers, n) };
Pe.prototype.watch = function(t, n, o) { var s = this; return Nt(function() { return t(s.state, s.getters) }, n, Object.assign({}, o)) };
Pe.prototype.replaceState = function(t) { var n = this;
    this._withCommit(function() { n._state.data = t }) };
Pe.prototype.registerModule = function(t, n, o) { o === void 0 && (o = {}), typeof t == "string" && (t = [t]), this._modules.register(t, n), po(this, this.state, t, this._modules.get(t), o.preserveState), $s(this, this.state) };
Pe.prototype.unregisterModule = function(t) { var n = this;
    typeof t == "string" && (t = [t]), this._modules.unregister(t), this._withCommit(function() { var o = Is(n.state, t.slice(0, -1));
        delete o[t[t.length - 1]] }), sa(this) };
Pe.prototype.hasModule = function(t) { return typeof t == "string" && (t = [t]), this._modules.isRegistered(t) };
Pe.prototype.hotUpdate = function(t) { this._modules.update(t), sa(this, !0) };
Pe.prototype._withCommit = function(t) { var n = this._committing;
    this._committing = !0, t(), this._committing = n };
Object.defineProperties(Pe.prototype, Es);
const Gu = zu({ state() { return { username: "", skinUrl: "", notifications: [] } }, mutations: { setUsername(e, t) { e.username = t }, setSkinUrl(e, t) { e.skinUrl = t }, setNotifications(e, t) { e.notifications = t } } });
/*!
 * vue-router v4.0.15
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const fa = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    an = e => fa ? Symbol(e) : "_vr_" + e,
    Zu = an("rvlm"),
    Li = an("rvd"),
    ho = an("r"),
    pa = an("rl"),
    qo = an("rvl"),
    Kt = typeof window != "undefined";

function Ku(e) { return e.__esModule || fa && e[Symbol.toStringTag] === "Module" }
const me = Object.assign;

function Co(e, t) { const n = {}; for (const o in t) { const s = t[o];
        n[o] = Array.isArray(s) ? s.map(e) : e(s) } return n }
const $n = () => {},
    Wu = /\/$/,
    qu = e => e.replace(Wu, "");

function Mo(e, t, n = "/") { let o, s = {},
        i = "",
        r = ""; const a = t.indexOf("?"),
        l = t.indexOf("#", a > -1 ? a : 0); return a > -1 && (o = t.slice(0, a), i = t.slice(a + 1, l > -1 ? l : t.length), s = e(i)), l > -1 && (o = o || t.slice(0, l), r = t.slice(l, t.length)), o = Xu(o != null ? o : t, n), { fullPath: o + (i && "?") + i + r, path: o, query: s, hash: r } }

function Ju(e, t) { const n = t.query ? e(t.query) : ""; return t.path + (n && "?") + n + (t.hash || "") }

function Si(e, t) { return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/" }

function Yu(e, t, n) { const o = t.matched.length - 1,
        s = n.matched.length - 1; return o > -1 && o === s && en(t.matched[o], n.matched[s]) && ha(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash }

function en(e, t) { return (e.aliasOf || e) === (t.aliasOf || t) }

function ha(e, t) { if (Object.keys(e).length !== Object.keys(t).length) return !1; for (const n in e)
        if (!Qu(e[n], t[n])) return !1;
    return !0 }

function Qu(e, t) { return Array.isArray(e) ? ki(e, t) : Array.isArray(t) ? ki(t, e) : e === t }

function ki(e, t) { return Array.isArray(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t }

function Xu(e, t) { if (e.startsWith("/")) return e; if (!e) return t; const n = t.split("/"),
        o = e.split("/"); let s = n.length - 1,
        i, r; for (i = 0; i < o.length; i++)
        if (r = o[i], !(s === 1 || r === "."))
            if (r === "..") s--;
            else break;
    return n.slice(0, s).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/") }
var Ln;
(function(e) { e.pop = "pop", e.push = "push" })(Ln || (Ln = {}));
var In;
(function(e) { e.back = "back", e.forward = "forward", e.unknown = "" })(In || (In = {}));

function ed(e) { if (!e)
        if (Kt) { const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "") } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), qu(e) }
const td = /^[^#]+#/;

function nd(e, t) { return e.replace(td, "#") + t }

function od(e, t) { const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect(); return { behavior: t.behavior, left: o.left - n.left - (t.left || 0), top: o.top - n.top - (t.top || 0) } }
const mo = () => ({ left: window.pageXOffset, top: window.pageYOffset });

function sd(e) { let t; if ("el" in e) { const n = e.el,
            o = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n; if (!s) return;
        t = od(s, e) } else t = e; "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset) }

function Pi(e, t) { return (history.state ? history.state.position - t : -1) + e }
const Jo = new Map;

function id(e, t) { Jo.set(e, t) }

function rd(e) { const t = Jo.get(e); return Jo.delete(e), t }
let ad = () => location.protocol + "//" + location.host;

function ma(e, t) { const { pathname: n, search: o, hash: s } = t, i = e.indexOf("#"); if (i > -1) { let a = s.includes(e.slice(i)) ? e.slice(i).length : 1,
            l = s.slice(a); return l[0] !== "/" && (l = "/" + l), Si(l, "") } return Si(n, e) + o + s }

function ld(e, t, n, o) { let s = [],
        i = [],
        r = null; const a = ({ state: p }) => { const _ = ma(e, location),
            E = n.value,
            k = t.value; let P = 0; if (p) { if (n.value = _, t.value = p, r && r === E) { r = null; return }
            P = k ? p.position - k.position : 0 } else o(_);
        s.forEach(S => { S(n.value, E, { delta: P, type: Ln.pop, direction: P ? P > 0 ? In.forward : In.back : In.unknown }) }) };

    function l() { r = n.value }

    function u(p) { s.push(p); const _ = () => { const E = s.indexOf(p);
            E > -1 && s.splice(E, 1) }; return i.push(_), _ }

    function c() { const { history: p } = window;!p.state || p.replaceState(me({}, p.state, { scroll: mo() }), "") }

    function f() { for (const p of i) p();
        i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c) } return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c), { pauseListeners: l, listen: u, destroy: f } }

function Ri(e, t, n, o = !1, s = !1) { return { back: e, current: t, forward: n, replaced: o, position: window.history.length, scroll: s ? mo() : null } }

function cd(e) { const { history: t, location: n } = window, o = { value: ma(e, n) }, s = { value: t.state };
    s.value || i(o.value, { back: null, current: o.value, forward: null, position: t.length - 1, replaced: !0, scroll: null }, !0);

    function i(l, u, c) { const f = e.indexOf("#"),
            p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : ad() + e + l; try { t[c ? "replaceState" : "pushState"](u, "", p), s.value = u } catch (_) { console.error(_), n[c ? "replace" : "assign"](p) } }

    function r(l, u) { const c = me({}, t.state, Ri(s.value.back, l, s.value.forward, !0), u, { position: s.value.position });
        i(l, c, !0), o.value = l }

    function a(l, u) { const c = me({}, s.value, t.state, { forward: l, scroll: mo() });
        i(c.current, c, !0); const f = me({}, Ri(o.value, l, null), { position: c.position + 1 }, u);
        i(l, f, !1), o.value = l } return { location: o, state: s, push: a, replace: r } }

function ud(e) { e = ed(e); const t = cd(e),
        n = ld(e, t.state, t.location, t.replace);

    function o(i, r = !0) { r || n.pauseListeners(), history.go(i) } const s = me({ location: "", base: e, go: o, createHref: nd.bind(null, e) }, t, n); return Object.defineProperty(s, "location", { enumerable: !0, get: () => t.location.value }), Object.defineProperty(s, "state", { enumerable: !0, get: () => t.state.value }), s }

function dd(e) { return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), ud(e) }

function fd(e) { return typeof e == "string" || e && typeof e == "object" }

function ga(e) { return typeof e == "string" || typeof e == "symbol" }
const ht = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 },
    _a = an("nf");
var Oi;
(function(e) { e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated" })(Oi || (Oi = {}));

function tn(e, t) { return me(new Error, { type: e, [_a]: !0 }, t) }

function mt(e, t) { return e instanceof Error && _a in e && (t == null || !!(e.type & t)) }
const Ni = "[^/]+?",
    pd = { sensitive: !1, strict: !1, start: !0, end: !0 },
    hd = /[.+*?^${}()[\]/\\]/g;

function md(e, t) { const n = me({}, pd, t),
        o = []; let s = n.start ? "^" : ""; const i = []; for (const u of e) { const c = u.length ? [] : [90];
        n.strict && !u.length && (s += "/"); for (let f = 0; f < u.length; f++) { const p = u[f]; let _ = 40 + (n.sensitive ? .25 : 0); if (p.type === 0) f || (s += "/"), s += p.value.replace(hd, "\\$&"), _ += 40;
            else if (p.type === 1) { const { value: E, repeatable: k, optional: P, regexp: S } = p;
                i.push({ name: E, repeatable: k, optional: P }); const B = S || Ni; if (B !== Ni) { _ += 10; try { new RegExp(`(${B})`) } catch (Q) { throw new Error(`Invalid custom RegExp for param "${E}" (${B}): ` + Q.message) } } let q = k ? `((?:${B})(?:/(?:${B}))*)` : `(${B})`;
                f || (q = P && u.length < 2 ? `(?:/${q})` : "/" + q), P && (q += "?"), s += q, _ += 20, P && (_ += -8), k && (_ += -20), B === ".*" && (_ += -50) }
            c.push(_) }
        o.push(c) } if (n.strict && n.end) { const u = o.length - 1;
        o[u][o[u].length - 1] += .7000000000000001 }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)"); const r = new RegExp(s, n.sensitive ? "" : "i");

    function a(u) { const c = u.match(r),
            f = {}; if (!c) return null; for (let p = 1; p < c.length; p++) { const _ = c[p] || "",
                E = i[p - 1];
            f[E.name] = _ && E.repeatable ? _.split("/") : _ } return f }

    function l(u) { let c = "",
            f = !1; for (const p of e) {
            (!f || !c.endsWith("/")) && (c += "/"), f = !1; for (const _ of p)
                if (_.type === 0) c += _.value;
                else if (_.type === 1) { const { value: E, repeatable: k, optional: P } = _, S = E in u ? u[E] : ""; if (Array.isArray(S) && !k) throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`); const B = Array.isArray(S) ? S.join("/") : S; if (!B)
                    if (P) p.length < 2 && e.length > 1 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${E}"`);
                c += B } } return c } return { re: r, score: o, keys: i, parse: a, stringify: l } }

function gd(e, t) { let n = 0; for (; n < e.length && n < t.length;) { const o = t[n] - e[n]; if (o) return o;
        n++ } return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0 }

function _d(e, t) { let n = 0; const o = e.score,
        s = t.score; for (; n < o.length && n < s.length;) { const i = gd(o[n], s[n]); if (i) return i;
        n++ } return s.length - o.length }
const vd = { type: 0, value: "" },
    yd = /[a-zA-Z0-9_]/;

function bd(e) { if (!e) return [
        []
    ]; if (e === "/") return [
        [vd]
    ]; if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(_) { throw new Error(`ERR (${n})/"${u}": ${_}`) } let n = 0,
        o = n; const s = []; let i;

    function r() { i && s.push(i), i = [] } let a = 0,
        l, u = "",
        c = "";

    function f() {!u || (n === 0 ? i.push({ type: 0, value: u }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), i.push({ type: 1, value: u, regexp: c, repeatable: l === "*" || l === "+", optional: l === "*" || l === "?" })) : t("Invalid state to consume buffer"), u = "") }

    function p() { u += l } for (; a < e.length;) { if (l = e[a++], l === "\\" && n !== 2) { o = n, n = 4; continue } switch (n) {
            case 0:
                l === "/" ? (u && f(), r()) : l === ":" ? (f(), n = 1) : p(); break;
            case 4:
                p(), n = o; break;
            case 1:
                l === "(" ? n = 2 : yd.test(l) ? p() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--); break;
            case 2:
                l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l; break;
            case 3:
                f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = ""; break;
            default:
                t("Unknown state"); break } } return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), r(), s }

function wd(e, t, n) { const o = md(bd(e.path), n),
        s = me(o, { record: e, parent: t, children: [], alias: [] }); return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s }

function $d(e, t) { const n = [],
        o = new Map;
    t = Hi({ strict: !1, end: !0, sensitive: !1 }, t);

    function s(c) { return o.get(c) }

    function i(c, f, p) { const _ = !p,
            E = Ed(c);
        E.aliasOf = p && p.record; const k = Hi(t, c),
            P = [E]; if ("alias" in c) { const q = typeof c.alias == "string" ? [c.alias] : c.alias; for (const Q of q) P.push(me({}, E, { components: p ? p.record.components : E.components, path: Q, aliasOf: p ? p.record : E })) } let S, B; for (const q of P) { const { path: Q } = q; if (f && Q[0] !== "/") { const Z = f.record.path,
                    J = Z[Z.length - 1] === "/" ? "" : "/";
                q.path = f.record.path + (Q && J + Q) } if (S = wd(q, f, k), p ? p.alias.push(S) : (B = B || S, B !== S && B.alias.push(S), _ && c.name && !Vi(S) && r(c.name)), "children" in E) { const Z = E.children; for (let J = 0; J < Z.length; J++) i(Z[J], S, p && p.children[J]) }
            p = p || S, l(S) } return B ? () => { r(B) } : $n }

    function r(c) { if (ga(c)) { const f = o.get(c);
            f && (o.delete(c), n.splice(n.indexOf(f), 1), f.children.forEach(r), f.alias.forEach(r)) } else { const f = n.indexOf(c);
            f > -1 && (n.splice(f, 1), c.record.name && o.delete(c.record.name), c.children.forEach(r), c.alias.forEach(r)) } }

    function a() { return n }

    function l(c) { let f = 0; for (; f < n.length && _d(c, n[f]) >= 0 && (c.record.path !== n[f].record.path || !va(c, n[f]));) f++;
        n.splice(f, 0, c), c.record.name && !Vi(c) && o.set(c.record.name, c) }

    function u(c, f) { let p, _ = {},
            E, k; if ("name" in c && c.name) { if (p = o.get(c.name), !p) throw tn(1, { location: c });
            k = p.record.name, _ = me(Id(f.params, p.keys.filter(B => !B.optional).map(B => B.name)), c.params), E = p.stringify(_) } else if ("path" in c) E = c.path, p = n.find(B => B.re.test(E)), p && (_ = p.parse(E), k = p.record.name);
        else { if (p = f.name ? o.get(f.name) : n.find(B => B.re.test(f.path)), !p) throw tn(1, { location: c, currentLocation: f });
            k = p.record.name, _ = me({}, f.params, c.params), E = p.stringify(_) } const P = []; let S = p; for (; S;) P.unshift(S.record), S = S.parent; return { name: k, path: E, params: _, matched: P, meta: Md(P) } } return e.forEach(c => i(c)), { addRoute: i, resolve: u, removeRoute: r, getRoutes: a, getRecordMatcher: s } }

function Id(e, t) { const n = {}; for (const o of t) o in e && (n[o] = e[o]); return n }

function Ed(e) { return { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: void 0, beforeEnter: e.beforeEnter, props: Cd(e), children: e.children || [], instances: {}, leaveGuards: new Set, updateGuards: new Set, enterCallbacks: {}, components: "components" in e ? e.components || {} : { default: e.component } } }

function Cd(e) { const t = {},
        n = e.props || !1; if ("component" in e) t.default = n;
    else
        for (const o in e.components) t[o] = typeof n == "boolean" ? n : n[o]; return t }

function Vi(e) { for (; e;) { if (e.record.aliasOf) return !0;
        e = e.parent } return !1 }

function Md(e) { return e.reduce((t, n) => me(t, n.meta), {}) }

function Hi(e, t) { const n = {}; for (const o in e) n[o] = o in t ? t[o] : e[o]; return n }

function va(e, t) { return t.children.some(n => n === e || va(e, n)) }
const ya = /#/g,
    Td = /&/g,
    Ad = /\//g,
    xd = /=/g,
    Ld = /\?/g,
    ba = /\+/g,
    Sd = /%5B/g,
    kd = /%5D/g,
    wa = /%5E/g,
    Pd = /%60/g,
    $a = /%7B/g,
    Rd = /%7C/g,
    Ia = /%7D/g,
    Od = /%20/g;

function Cs(e) { return encodeURI("" + e).replace(Rd, "|").replace(Sd, "[").replace(kd, "]") }

function Nd(e) { return Cs(e).replace($a, "{").replace(Ia, "}").replace(wa, "^") }

function Yo(e) { return Cs(e).replace(ba, "%2B").replace(Od, "+").replace(ya, "%23").replace(Td, "%26").replace(Pd, "`").replace($a, "{").replace(Ia, "}").replace(wa, "^") }

function Vd(e) { return Yo(e).replace(xd, "%3D") }

function Hd(e) { return Cs(e).replace(ya, "%23").replace(Ld, "%3F") }

function Bd(e) { return e == null ? "" : Hd(e).replace(Ad, "%2F") }

function Jn(e) { try { return decodeURIComponent("" + e) } catch {} return "" + e }

function Fd(e) { const t = {}; if (e === "" || e === "?") return t; const o = (e[0] === "?" ? e.slice(1) : e).split("&"); for (let s = 0; s < o.length; ++s) { const i = o[s].replace(ba, " "),
            r = i.indexOf("="),
            a = Jn(r < 0 ? i : i.slice(0, r)),
            l = r < 0 ? null : Jn(i.slice(r + 1)); if (a in t) { let u = t[a];
            Array.isArray(u) || (u = t[a] = [u]), u.push(l) } else t[a] = l } return t }

function Bi(e) { let t = ""; for (let n in e) { const o = e[n]; if (n = Vd(n), o == null) { o !== void 0 && (t += (t.length ? "&" : "") + n); continue }(Array.isArray(o) ? o.map(i => i && Yo(i)) : [o && Yo(o)]).forEach(i => { i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i)) }) } return t }

function jd(e) { const t = {}; for (const n in e) { const o = e[n];
        o !== void 0 && (t[n] = Array.isArray(o) ? o.map(s => s == null ? null : "" + s) : o == null ? o : "" + o) } return t }

function dn() { let e = [];

    function t(o) { return e.push(o), () => { const s = e.indexOf(o);
            s > -1 && e.splice(s, 1) } }

    function n() { e = [] } return { add: t, list: () => e, reset: n } }

function vt(e, t, n, o, s) { const i = o && (o.enterCallbacks[s] = o.enterCallbacks[s] || []); return () => new Promise((r, a) => { const l = f => { f === !1 ? a(tn(4, { from: n, to: t })) : f instanceof Error ? a(f) : fd(f) ? a(tn(2, { from: t, to: f })) : (i && o.enterCallbacks[s] === i && typeof f == "function" && i.push(f), r()) },
            u = e.call(o && o.instances[s], t, n, l); let c = Promise.resolve(u);
        e.length < 3 && (c = c.then(l)), c.catch(f => a(f)) }) }

function To(e, t, n, o) { const s = []; for (const i of e)
        for (const r in i.components) { let a = i.components[r]; if (!(t !== "beforeRouteEnter" && !i.instances[r]))
                if (Ud(a)) { const u = (a.__vccOpts || a)[t];
                    u && s.push(vt(u, n, o, i, r)) } else { let l = a();
                    s.push(() => l.then(u => { if (!u) return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${i.path}"`)); const c = Ku(u) ? u.default : u;
                        i.components[r] = c; const p = (c.__vccOpts || c)[t]; return p && vt(p, n, o, i, r)() })) } }
    return s }

function Ud(e) { return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e }

function Fi(e) { const t = et(ho),
        n = et(pa),
        o = Xe(() => t.resolve(hn(e.to))),
        s = Xe(() => { const { matched: l } = o.value, { length: u } = l, c = l[u - 1], f = n.matched; if (!c || !f.length) return -1; const p = f.findIndex(en.bind(null, c)); if (p > -1) return p; const _ = ji(l[u - 2]); return u > 1 && ji(c) === _ && f[f.length - 1].path !== _ ? f.findIndex(en.bind(null, l[u - 2])) : p }),
        i = Xe(() => s.value > -1 && Zd(n.params, o.value.params)),
        r = Xe(() => s.value > -1 && s.value === n.matched.length - 1 && ha(n.params, o.value.params));

    function a(l = {}) { return Gd(l) ? t[hn(e.replace) ? "replace" : "push"](hn(e.to)).catch($n) : Promise.resolve() } return { route: o, href: Xe(() => o.value.href), isActive: i, isExactActive: r, navigate: a } }
const Dd = G({ name: "RouterLink", props: { to: { type: [String, Object], required: !0 }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: Fi, setup(e, { slots: t }) { const n = lt(Fi(e)),
                { options: o } = et(ho),
                s = Xe(() => ({
                    [Ui(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive, [Ui(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive })); return () => { const i = t.default && t.default(n); return e.custom ? i : ys("a", { "aria-current": n.isExactActive ? e.ariaCurrentValue : null, href: n.href, onClick: n.navigate, class: s.value }, i) } } }),
    zd = Dd;

function Gd(e) { if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) { if (e.currentTarget && e.currentTarget.getAttribute) { const t = e.currentTarget.getAttribute("target"); if (/\b_blank\b/i.test(t)) return } return e.preventDefault && e.preventDefault(), !0 } }

function Zd(e, t) { for (const n in t) { const o = t[n],
            s = e[n]; if (typeof o == "string") { if (o !== s) return !1 } else if (!Array.isArray(s) || s.length !== o.length || o.some((i, r) => i !== s[r])) return !1 } return !0 }

function ji(e) { return e ? e.aliasOf ? e.aliasOf.path : e.path : "" }
const Ui = (e, t, n) => e != null ? e : t != null ? t : n,
    Kd = G({ name: "RouterView", inheritAttrs: !1, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: t, slots: n }) { const o = et(qo),
                s = Xe(() => e.route || o.value),
                i = et(Li, 0),
                r = Xe(() => s.value.matched[i]);
            _n(Li, i + 1), _n(Zu, r), _n(qo, s); const a = Dn(); return Nt(() => [a.value, r.value, e.name], ([l, u, c], [f, p, _]) => { u && (u.instances[c] = l, p && p !== u && l && l === f && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), l && u && (!p || !en(u, p) || !f) && (u.enterCallbacks[c] || []).forEach(E => E(l)) }, { flush: "post" }), () => { const l = s.value,
                    u = r.value,
                    c = u && u.components[e.name],
                    f = e.name; if (!c) return Di(n.default, { Component: c, route: l }); const p = u.props[e.name],
                    _ = p ? p === !0 ? l.params : typeof p == "function" ? p(l) : p : null,
                    k = ys(c, me({}, _, t, { onVnodeUnmounted: P => { P.component.isUnmounted && (u.instances[f] = null) }, ref: a })); return Di(n.default, { Component: k, route: l }) || k } } });

function Di(e, t) { if (!e) return null; const n = e(t); return n.length === 1 ? n[0] : n }
const Wd = Kd;

function qd(e) { const t = $d(e.routes, e),
        n = e.parseQuery || Fd,
        o = e.stringifyQuery || Bi,
        s = e.history,
        i = dn(),
        r = dn(),
        a = dn(),
        l = Ll(ht); let u = ht;
    Kt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual"); const c = Co.bind(null, y => "" + y),
        f = Co.bind(null, Bd),
        p = Co.bind(null, Jn);

    function _(y, V) { let x, F; return ga(y) ? (x = t.getRecordMatcher(y), F = V) : F = y, t.addRoute(F, x) }

    function E(y) { const V = t.getRecordMatcher(y);
        V && t.removeRoute(V) }

    function k() { return t.getRoutes().map(y => y.record) }

    function P(y) { return !!t.getRecordMatcher(y) }

    function S(y, V) { if (V = me({}, V || l.value), typeof y == "string") { const te = Mo(n, y, V.path),
                d = t.resolve({ path: te.path }, V),
                h = s.createHref(te.fullPath); return me(te, d, { params: p(d.params), hash: Jn(te.hash), redirectedFrom: void 0, href: h }) } let x; if ("path" in y) x = me({}, y, { path: Mo(n, y.path, V.path).path });
        else { const te = me({}, y.params); for (const d in te) te[d] == null && delete te[d];
            x = me({}, y, { params: f(y.params) }), V.params = f(V.params) } const F = t.resolve(x, V),
            fe = y.hash || "";
        F.params = c(p(F.params)); const ye = Ju(o, me({}, y, { hash: Nd(fe), path: F.path })),
            oe = s.createHref(ye); return me({ fullPath: ye, hash: fe, query: o === Bi ? jd(y.query) : y.query || {} }, F, { redirectedFrom: void 0, href: oe }) }

    function B(y) { return typeof y == "string" ? Mo(n, y, l.value.path) : me({}, y) }

    function q(y, V) { if (u !== y) return tn(8, { from: V, to: y }) }

    function Q(y) { return se(y) }

    function Z(y) { return Q(me(B(y), { replace: !0 })) }

    function J(y) { const V = y.matched[y.matched.length - 1]; if (V && V.redirect) { const { redirect: x } = V; let F = typeof x == "function" ? x(y) : x; return typeof F == "string" && (F = F.includes("?") || F.includes("#") ? F = B(F) : { path: F }, F.params = {}), me({ query: y.query, hash: y.hash, params: y.params }, F) } }

    function se(y, V) { const x = u = S(y),
            F = l.value,
            fe = y.state,
            ye = y.force,
            oe = y.replace === !0,
            te = J(x); if (te) return se(me(B(te), { state: fe, force: ye, replace: oe }), V || x); const d = x;
        d.redirectedFrom = V; let h; return !ye && Yu(o, F, x) && (h = tn(16, { to: d, from: F }), Bt(F, F, !0, !1)), (h ? Promise.resolve(h) : L(d, F)).catch(g => mt(g) ? mt(g, 2) ? g : Re(g) : ve(g, d, F)).then(g => { if (g) { if (mt(g, 2)) return se(me(B(g.to), { state: fe, force: ye, replace: oe }), V || d) } else g = X(d, F, !0, oe, fe); return K(d, F, g), g }) }

    function z(y, V) { const x = q(y, V); return x ? Promise.reject(x) : Promise.resolve() }

    function L(y, V) { let x; const [F, fe, ye] = Jd(y, V);
        x = To(F.reverse(), "beforeRouteLeave", y, V); for (const te of F) te.leaveGuards.forEach(d => { x.push(vt(d, y, V)) }); const oe = z.bind(null, y, V); return x.push(oe), Dt(x).then(() => { x = []; for (const te of i.list()) x.push(vt(te, y, V)); return x.push(oe), Dt(x) }).then(() => { x = To(fe, "beforeRouteUpdate", y, V); for (const te of fe) te.updateGuards.forEach(d => { x.push(vt(d, y, V)) }); return x.push(oe), Dt(x) }).then(() => { x = []; for (const te of y.matched)
                if (te.beforeEnter && !V.matched.includes(te))
                    if (Array.isArray(te.beforeEnter))
                        for (const d of te.beforeEnter) x.push(vt(d, y, V));
                    else x.push(vt(te.beforeEnter, y, V));
            return x.push(oe), Dt(x) }).then(() => (y.matched.forEach(te => te.enterCallbacks = {}), x = To(ye, "beforeRouteEnter", y, V), x.push(oe), Dt(x))).then(() => { x = []; for (const te of r.list()) x.push(vt(te, y, V)); return x.push(oe), Dt(x) }).catch(te => mt(te, 8) ? te : Promise.reject(te)) }

    function K(y, V, x) { for (const F of a.list()) F(y, V, x) }

    function X(y, V, x, F, fe) { const ye = q(y, V); if (ye) return ye; const oe = V === ht,
            te = Kt ? history.state : {};
        x && (F || oe ? s.replace(y.fullPath, me({ scroll: oe && te && te.scroll }, fe)) : s.push(y.fullPath, fe)), l.value = y, Bt(y, V, x, oe), Re() } let O;

    function we() { O || (O = s.listen((y, V, x) => { const F = S(y),
                fe = J(F); if (fe) { se(me(fe, { replace: !0 }), F).catch($n); return }
            u = F; const ye = l.value;
            Kt && id(Pi(ye.fullPath, x.delta), mo()), L(F, ye).catch(oe => mt(oe, 12) ? oe : mt(oe, 2) ? (se(oe.to, F).then(te => { mt(te, 20) && !x.delta && x.type === Ln.pop && s.go(-1, !1) }).catch($n), Promise.reject()) : (x.delta && s.go(-x.delta, !1), ve(oe, F, ye))).then(oe => { oe = oe || X(F, ye, !1), oe && (x.delta ? s.go(-x.delta, !1) : x.type === Ln.pop && mt(oe, 20) && s.go(-1, !1)), K(F, ye, oe) }).catch($n) })) } let xe = dn(),
        st = dn(),
        Ie;

    function ve(y, V, x) { Re(y); const F = st.list(); return F.length ? F.forEach(fe => fe(y, V, x)) : console.error(y), Promise.reject(y) }

    function de() { return Ie && l.value !== ht ? Promise.resolve() : new Promise((y, V) => { xe.add([y, V]) }) }

    function Re(y) { return Ie || (Ie = !y, we(), xe.list().forEach(([V, x]) => y ? x(y) : V()), xe.reset()), y }

    function Bt(y, V, x, F) { const { scrollBehavior: fe } = e; if (!Kt || !fe) return Promise.resolve(); const ye = !x && rd(Pi(y.fullPath, 0)) || (F || !x) && history.state && history.state.scroll || null; return Ir().then(() => fe(y, V, ye)).then(oe => oe && sd(oe)).catch(oe => ve(oe, y, V)) } const it = y => s.go(y); let We; const He = new Set; return { currentRoute: l, addRoute: _, removeRoute: E, hasRoute: P, getRoutes: k, resolve: S, options: e, push: Q, replace: Z, go: it, back: () => it(-1), forward: () => it(1), beforeEach: i.add, beforeResolve: r.add, afterEach: a.add, onError: st.add, isReady: de, install(y) { const V = this;
            y.component("RouterLink", zd), y.component("RouterView", Wd), y.config.globalProperties.$router = V, Object.defineProperty(y.config.globalProperties, "$route", { enumerable: !0, get: () => hn(l) }), Kt && !We && l.value === ht && (We = !0, Q(s.location).catch(fe => {})); const x = {}; for (const fe in ht) x[fe] = Xe(() => l.value[fe]);
            y.provide(ho, V), y.provide(pa, lt(x)), y.provide(qo, l); const F = y.unmount;
            He.add(y), y.unmount = function() { He.delete(y), He.size < 1 && (u = ht, O && O(), O = null, l.value = ht, We = !1, Ie = !1), F() } } } }

function Dt(e) { return e.reduce((t, n) => t.then(() => n()), Promise.resolve()) }

function Jd(e, t) { const n = [],
        o = [],
        s = [],
        i = Math.max(t.matched.length, e.matched.length); for (let r = 0; r < i; r++) { const a = t.matched[r];
        a && (e.matched.find(u => en(u, a)) ? o.push(a) : n.push(a)); const l = e.matched[r];
        l && (t.matched.find(u => en(u, l)) || s.push(l)) } return [n, o, s] }

function Yd() { return et(ho) }
const Qd = window.electron.getLauncherMaximizedAtStartup,
    Xd = window.electron.setLauncherMaximizedAtStartup,
    ef = window.electron.minimizeWindow,
    tf = window.electron.maximizeWindow,
    nf = window.electron.unmaximizeWindow,
    of = window.electron.closeWindow,
    sf = window.electron.checkForUpdates;
window.electron.quitAndInstallUpdate;
const rf = window.electron.getAutoLaunchIsEnabled,
    af = window.electron.setAutoLaunch,
    zi = window.electron.getAccounts,
    lf = window.electron.changeAccount,
    cf = window.electron.deleteAccount,
    uf = window.electron.logout,
    df = window.electron.getAccessToken,
    ff = window.electron.getAllVanillaVersions,
    Gi = window.electron.checkIfVanillaInstalled,
    pf = window.electron.checkIfCustomInstalled,
    hf = window.electron.launchCustom,
    mf = window.electron.launchMinecraftVanilla,
    gf = window.electron.getLastVanillaVersion,
    _f = window.electron.getBlogPosts,
    vf = window.electron.getGameJavaPath,
    yf = window.electron.getGameMem,
    bf = window.electron.getGameResolution,
    wf = window.electron.getGameStartInFullscreen,
    $f = window.electron.getLauncherStayOpen,
    If = window.electron.setLastVanillaVersion,
    Ef = window.electron.setGameJavaPath,
    Cf = window.electron.setGameMem,
    Mf = window.electron.setGameResolution,
    Tf = window.electron.setGameStartInFullscreen,
    Af = window.electron.setLauncherStayOpen,
    xf = window.electron.getNotifications,
    Lf = window.electron.setNotificationRead,
    Sf = window.electron.setNotificationArchive,
    Ms = window.electron.getVersion,
    kf = window.electron.getTotalMem,
    Pf = window.electron.getFreeMem,
    Rf = window.electron.getIsUnderMaintenance,
    Ea = window.electron.isWindows;
window.electron.isMacos;
window.electron.isLinux;
const Of = window.electron.loadURL,
    Nf = window.electron.onGoTo,
    Vf = window.electron.onUserDataFetch,
    Hf = window.electron.onUpdateAvailable,
    Bf = window.electron.onGameDownloadProgress,
    Ff = window.electron.onGameStartup,
    jf = window.electron.onGameDownloadFinish,
    Uf = window.electron.onNotifications,
    Df = window.electron.onSetLoginBtn,
    zf = window.electron.onUpdateAccounts;
var j = (e, t) => { const n = e.__vccOpts || e; for (const [o, s] of t) n[o] = s; return n };
const Gf = G({ name: "DangerIcon" }),
    Zf = { xmlns: "http://www.w3.org/2000/svg", width: "39.807", height: "34.474", viewBox: "0 0 39.807 34.474" },
    Kf = m("rect", { width: "2.609", height: "12.391", transform: "translate(18.6 12.43)", fill: "#ff453a" }, null, -1),
    Wf = m("rect", { width: "2.609", height: "2.243", transform: "translate(18.6 27.43)", fill: "#ff453a" }, null, -1),
    qf = m("path", { d: "M12.209,18.548,19.9,5.219,27.6,18.548l7.7,13.317H4.526ZM19.9,0,9.952,17.243,0,34.474H39.807l-9.952-17.23Z", fill: "#ff453a" }, null, -1),
    Jf = m("rect", { width: "2.609", height: "12.391", transform: "translate(18.6 12.43)", fill: "#ff453a" }, null, -1),
    Yf = [Kf, Wf, qf, Jf];

function Qf(e, t, n, o, s, i) { return v(), I("svg", Zf, Yf) }
var Xf = j(Gf, [
    ["render", Qf]
]);
const ep = G({ name: "UpdateIcon" }),
    tp = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "46.173", height: "35.13", viewBox: "0 0 46.173 35.13" },
    np = Sn('<defs><clipPath id="a"><rect width="46.173" height="35.13" fill="#ff9f0a"></rect></clipPath></defs><g transform="translate(0 0)" clip-path="url(#a)"><path d="M37.195,6.61,35.089,8.273A14.747,14.747,0,0,0,8.782,17.431c0,.416.013.845.054,1.26H14.87L7.442,26.307,0,18.691H6.154c-.04-.416-.054-.845-.054-1.26A17.429,17.429,0,0,1,37.195,6.61" transform="translate(0 0)" fill="#ff9f0a"></path><path d="M6.7,26.277,8.8,24.614a14.747,14.747,0,0,0,26.307-9.158c0-.416-.013-.845-.054-1.26H29.021L36.449,6.58,43.891,14.2H37.736c.04.416.054.845.054,1.26A17.429,17.429,0,0,1,6.7,26.277" transform="translate(2.282 2.243)" fill="#ff9f0a"></path></g>', 2),
    op = [np];

function sp(e, t, n, o, s, i) { return v(), I("svg", tp, op) }
var ip = j(ep, [
    ["render", sp]
]);
const Ao = { LINK: "a", BUTTON: "button", ROUTER_LINK: "RouterLink" },
    Qo = { SELF: "_self", BLANK: "_blank" },
    Zi = { NO_OPENER: "noopener", NO_REFERRER: "noreferrer" },
    rp = e => !e || Object.values(Qo).indexOf(e) !== -1,
    ap = G({ name: "PalaLink", props: { disabled: Boolean, href: { type: String }, to: { type: Object }, target: { type: String, default: Qo.SELF, validator: rp }, noForwardOpener: Boolean, noForwardReferrer: Boolean }, computed: { relAttr() { const e = []; return this.href && this.target === Qo.BLANK && (this.noForwardReferrer && e.push(Zi.NO_REFERRER), this.noForwardOpener && e.push(Zi.NO_OPENER)), e.length && e.join(" ") || void 0 }, tag() { return this.to ? Ao.ROUTER_LINK : this.href ? Ao.LINK : Ao.BUTTON } } }),
    lp = { class: "label" };

function cp(e, t, n, o, s, i) { return v(), be(Qt(e.tag), vs({ href: e.href, to: e.to, target: e.target, disabled: e.disabled, rel: e.relAttr }, { class: "link", onClick: t[0] || (t[0] = r => e.$emit("click", r)) }), { default: ne(() => [m("span", lp, [$t(e.$slots, "default")])]), _: 3 }, 16) }
var Ts = j(ap, [
        ["render", cp]
    ]),
    up = "./p.gif";
const dp = G({ name: "SplashPage", components: { PalaLink: Ts, DangerIcon: Xf, UpdateIcon: ip }, data() { return { version: "", isUnderMaintenance: !1, isUnderUpdate: !1 } }, async beforeMount() { Hf(() => { this.isUnderUpdate = !0 }), this.version = await Ms(), this.isUnderMaintenance = await Rf() }, mounted() { this.isUnderMaintenance || sf() } }),
    As = e => (Et("data-v-3f9a50b2"), e = e(), Ct(), e),
    fp = { id: "splash" },
    pp = { key: 0, class: "alert danger" },
    hp = As(() => m("div", null, [m("div", { class: "alert-title" }, "Alerte maintenance"), m("div", { class: "alert-description" }, "Launcher d\xE9sactiv\xE9")], -1)),
    mp = { key: 1, class: "alert warning" },
    gp = As(() => m("div", null, [m("div", { class: "alert-title" }, "Mise \xE0 jour"), m("div", { class: "alert-description" }, "Update launcher")], -1)),
    _p = As(() => m("img", { alt: "Paladium", src: up }, null, -1)),
    vp = le(" Probl\xE8me lors de la connexion ? "),
    yp = { id: "version" };

function bp(e, t, n, o, s, i) { const r = H("DangerIcon"),
        a = H("UpdateIcon"),
        l = H("PalaLink"); return v(), I("div", fp, [e.isUnderMaintenance ? (v(), I("div", pp, [T(r), hp])) : ue("", !0), e.isUnderUpdate ? (v(), I("div", mp, [T(a), gp])) : ue("", !0), _p, T(l, { id: "help-link", href: "https://paladium-pvp.fr/", target: "_blank", rel: "noopener noreferrer" }, { default: ne(() => [vp]), _: 1 }), m("span", yp, "V" + re(e.version), 1)]) }
var wp = j(dp, [
    ["render", bp],
    ["__scopeId", "data-v-3f9a50b2"]
]);
const $p = G({ name: "Spinner" }),
    go = e => (Et("data-v-d395b17e"), e = e(), Ct(), e),
    Ip = { class: "spinner" },
    Ep = go(() => m("div", null, null, -1)),
    Cp = go(() => m("div", null, null, -1)),
    Mp = go(() => m("div", null, null, -1)),
    Tp = go(() => m("div", null, null, -1)),
    Ap = [Ep, Cp, Mp, Tp];

function xp(e, t, n, o, s, i) { return v(), I("div", Ip, Ap) }
var Lp = j($p, [
        ["render", xp],
        ["__scopeId", "data-v-d395b17e"]
    ]),
    Sp = "./logo.svg";
const kp = G({ name: "LoginPage", components: { Spinner: Lp, PalaLink: Ts }, data() { return { version: "", inLogin: !1 } }, async beforeMount() { this.version = await Ms(), Df(e => { this.inLogin = e }) }, methods: { login() { this.inLogin = !0, df() } } }),
    Pp = e => (Et("data-v-514e6f98"), e = e(), Ct(), e),
    Rp = { id: "login" },
    Op = Pp(() => m("img", { id: "login-logo", alt: "Paladium", src: Sp }, null, -1)),
    Np = ["disabled"],
    Vp = { key: 1 },
    Hp = { class: "buy-minecraft" },
    Bp = le(" Pas de compte minecraft ? "),
    Fp = le(" En acheter un "),
    jp = le(" Probl\xE8me lors de la connexion ? "),
    Up = { id: "version" };

function Dp(e, t, n, o, s, i) { const r = H("Spinner"),
        a = H("PalaLink"); return v(), I("div", Rp, [Op, m("div", null, [m("button", { type: "button", class: "action-btn btn", disabled: e.inLogin, onClick: t[0] || (t[0] = (...l) => e.login && e.login(...l)) }, [e.inLogin ? (v(), be(r, { key: 0 })) : (v(), I("span", Vp, "Connexion"))], 8, Np), m("div", Hp, [Bp, T(a, { href: "https://www.minecraft.net/fr-fr", target: "_blank", rel: "noopener noreferrer" }, { default: ne(() => [Fp]), _: 1 })])]), T(a, { id: "help-link", href: "https://paladium-pvp.fr/", target: "_blank", rel: "noopener noreferrer" }, { default: ne(() => [jp]), _: 1 }), m("span", Up, "V" + re(e.version), 1)]) }
var zp = j(kp, [
        ["render", Dp],
        ["__scopeId", "data-v-514e6f98"]
    ]),
    Ca = e => new Promise(t => setTimeout(t, e));
const Gp = G({ name: "PlayIcon" }),
    Zp = { id: "play", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18.095 18.095" },
    Kp = m("path", { id: "Trac\xE9_1085", "data-name": "Trac\xE9 1085", d: "M12.647,21.695A9.047,9.047,0,1,0,3.6,12.647,9.047,9.047,0,0,0,12.647,21.695Zm-.5-12.25a1.131,1.131,0,0,0-1.759.941v4.524a1.131,1.131,0,0,0,1.759.941l3.393-2.262a1.131,1.131,0,0,0,0-1.882L12.144,9.445Z", transform: "translate(-3.6 -3.6)", fill: "#fff", "fill-rule": "evenodd" }, null, -1),
    Wp = [Kp];

function qp(e, t, n, o, s, i) { return v(), I("svg", Zp, Wp) }
var Jp = j(Gp, [
    ["render", qp]
]);
const Yp = G({ name: "DownloadIcon" }),
    Qp = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24.8 24.352" },
    Xp = m("g", { transform: "translate(-5.4 -7.59)" }, [m("path", { d: "M5.4,30.171A1.771,1.771,0,0,1,7.171,28.4H28.429a1.771,1.771,0,1,1,0,3.543H7.171A1.771,1.771,0,0,1,5.4,30.171Zm5.833-13.653a1.771,1.771,0,0,1,2.5,0l2.291,2.291.131-9.448a1.771,1.771,0,1,1,3.543,0l-.131,9.448,2.29-2.29a1.771,1.771,0,1,1,2.5,2.5l-5.315,5.314a1.771,1.771,0,0,1-2.5,0l-5.314-5.314a1.771,1.771,0,0,1,0-2.5Z", fill: "#fff", "fill-rule": "evenodd" })], -1),
    eh = [Xp];

function th(e, t, n, o, s, i) { return v(), I("svg", Qp, eh) }
var nh = j(Yp, [
    ["render", th]
]);
const oh = G({ name: "CogIcon" }),
    sh = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30" },
    ih = m("g", { id: "settings", transform: "translate(0 0)" }, [m("path", { id: "Trac\xE9_383", "data-name": "Trac\xE9 383", d: "M29.883,18.561V16.87l2.122-1.856a2.21,2.21,0,0,0,.419-2.818l-2.608-4.42A2.228,2.228,0,0,0,27.2,6.782l-2.685.906a12.542,12.542,0,0,0-1.448-.829L22.5,4.074a2.21,2.21,0,0,0-2.21-1.779H15.12a2.21,2.21,0,0,0-2.21,1.779l-.564,2.785a12.685,12.685,0,0,0-1.459.829L8.258,6.737a2.21,2.21,0,0,0-.706-.066A2.21,2.21,0,0,0,5.64,7.776L3.032,12.2a2.21,2.21,0,0,0,.453,2.774l2.088,1.911v1.69L3.485,20.428a2.21,2.21,0,0,0-.453,2.818l2.608,4.42a2.228,2.228,0,0,0,2.619.994l2.685-.906a12.542,12.542,0,0,0,1.448.829l.564,2.785a2.21,2.21,0,0,0,2.21,1.779h5.216a2.21,2.21,0,0,0,2.21-1.779l.564-2.785a12.685,12.685,0,0,0,1.459-.829l2.675.906a2.228,2.228,0,0,0,2.619-.994l2.519-4.42a2.21,2.21,0,0,0-.453-2.774Zm-1.978,8-3.79-1.282a9.79,9.79,0,0,1-2.995,1.735l-.784,3.967H15.121l-.785-3.923a10.343,10.343,0,0,1-2.984-1.735l-3.8,1.238-2.608-4.42,3.006-2.652a9.835,9.835,0,0,1,0-3.458L4.944,13.3l2.608-4.42,3.79,1.282a9.79,9.79,0,0,1,2.995-1.735l.784-3.967h5.216l.785,3.923a10.343,10.343,0,0,1,2.984,1.735l3.8-1.238,2.608,4.42-3.006,2.652a9.835,9.835,0,0,1,0,3.458l3.006,2.73Z", transform: "translate(-2.714 -2.295)", fill: "#fff" }), m("path", { id: "Trac\xE9_384", "data-name": "Trac\xE9 384", d: "M17.88,24.51a6.564,6.564,0,1,1,4.708-1.922A6.63,6.63,0,0,1,17.88,24.51Zm0-11.05a4.321,4.321,0,0,0-4.42,4.42,4.321,4.321,0,0,0,4.42,4.42,4.321,4.321,0,0,0,4.42-4.42,4.321,4.321,0,0,0-4.42-4.42Z", transform: "translate(-2.866 -2.454)", fill: "#fff" })], -1),
    rh = [ih];

function ah(e, t, n, o, s, i) { return v(), I("svg", sh, rh) }
var Ma = j(oh, [
    ["render", ah]
]);
const lh = G({ name: "SpotlightComponent", props: { title: String } }),
    ch = { class: "spotlight" },
    uh = { class: "spotlight__container" };

function dh(e, t, n, o, s, i) { return v(), I("div", ch, [m("h2", null, re(e.title), 1), m("div", uh, [$t(e.$slots, "default", {}, void 0, !0)])]) }
var fh = j(lh, [
    ["render", dh],
    ["__scopeId", "data-v-299f14a7"]
]);
const ph = G({ name: "ArrowRightIcon" }),
    hh = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8.667 13.867" },
    mh = m("path", { d: "M9,21.277l1.733-1.733,5.2,5.2,5.2-5.2,1.735,1.733-6.934,6.934Z", transform: "translate(-19.544 22.867) rotate(-90)", fill: "#828282" }, null, -1),
    gh = [mh];

function _h(e, t, n, o, s, i) { return v(), I("svg", hh, gh) }
var vh = j(ph, [
    ["render", _h]
]);
const xs = G({ name: "ShopCard", props: ["items", "accentColor"], components: { ArrowRightIcon: vh }, data() { return { currentId: 0, activeColor: this.accentColor } }, computed: { subtitleType() { let e = this.items[this.currentId].priceSubtitle; return e === "%" ? "percentage-subtitle" : e === "+" ? "add-subtitle" : "" } }, methods: { setLeftItem() { this.currentId - 1 >= 0 && this.currentId-- }, setRightItem() { this.currentId + 1 <= this.items.length - 1 && this.currentId++ }, setItem(e) { this.currentId = e } } }),
    Ki = () => { bs(e => ({ "49f5132e": e.activeColor })) },
    Wi = xs.setup;
xs.setup = Wi ? (e, t) => (Ki(), Wi(e, t)) : Ki;
const yh = xs,
    bh = { class: "shop-card" },
    wh = ["href"],
    $h = { class: "shop-card-container__img" },
    Ih = ["src"],
    Eh = { class: "shop-card-container__details" },
    Ch = { key: 0, class: "subtitle" },
    Mh = { class: "price" },
    Th = { class: "shop-card-footer" },
    Ah = ["onClick"];

function xh(e, t, n, o, s, i) { const r = H("ArrowRightIcon"); return v(), I("div", bh, [m("a", { href: e.items[e.currentId].link, target: "_blank", rel: "noopener noreferrer", class: "shop-card-container" }, [m("div", $h, [m("img", { alt: "product name", src: e.items[e.currentId].icon, draggable: "false" }, null, 8, Ih)]), m("div", Eh, [m("div", null, [e.items[e.currentId].subtitle ? (v(), I("div", Ch, re(e.items[e.currentId].subtitle), 1)) : ue("", !0), m("div", { class: "title", style: Fe(`color: ${e.items[e.currentId].color};`) }, re(e.items[e.currentId].title), 5)]), m("div", null, [e.items[e.currentId].priceSubtitle ? (v(), I("div", { key: 0, class: nt(`subtitle ${e.subtitleType}`) }, re(e.items[e.currentId].priceSubtitle), 3)) : ue("", !0), m("div", Mh, re(e.items[e.currentId].price), 1)])])], 8, wh), m("div", Th, [m("button", { type: "button", class: "arrowBtn inverted", onClick: t[0] || (t[0] = (...a) => e.setLeftItem && e.setLeftItem(...a)) }, [T(r)]), (v(!0), I(_e, null, tt(e.items, (a, l) => (v(), I("button", { type: "button", onClick: u => e.setItem(l), key: l, class: nt("indicator" + (l === e.currentId ? " active" : "")) }, null, 10, Ah))), 128)), m("button", { type: "button", class: "arrowBtn", onClick: t[1] || (t[1] = (...a) => e.setRightItem && e.setRightItem(...a)) }, [T(r)])])]) }
var Lh = j(yh, [
    ["render", xh],
    ["__scopeId", "data-v-4102f3b4"]
]);
const Sh = { name: "SelectIcon" },
    kh = { xmlns: "http://www.w3.org/2000/svg", width: "6.476", height: "9.216", viewBox: "0 0 6.476 9.216" },
    Ph = m("path", { d: "M9,9.238l.809.809,2.429-2.429,2.428,2.429.81-.809L12.238,6Z", transform: "translate(-9 -6)", fill: "#303030" }, null, -1),
    Rh = m("path", { d: "M9,20.353l.809-.809,2.429,2.429,2.428-2.429.81.809-3.238,3.238Z", transform: "translate(-9 -14.376)", fill: "#303030" }, null, -1),
    Oh = [Ph, Rh];

function Nh(e, t, n, o, s, i) { return v(), I("svg", kh, Oh) }
var Vh = j(Sh, [
    ["render", Nh]
]);
const Hh = { name: "SelectComponent", components: { SelectIcon: Vh }, props: { options: { type: Array, required: !0 }, value: { type: String, required: !1, default: null }, tabindex: { type: Number, required: !1, default: 0 } }, data() { return { selected: null, open: !1 } }, beforeMount() { if (this.value === null) this.selected = this.options[0];
            else { const e = this.options.findIndex(t => t.value === this.value);
                e === -1 ? this.selected = this.options[0] : this.selected = this.options[e] } }, mounted() { this.$emit("change", this.selected.value) } },
    Bh = ["tabindex"],
    Fh = ["alt", "src"],
    jh = { class: "items-container" },
    Uh = ["onClick"],
    Dh = ["alt", "src"];

function zh(e, t, n, o, s, i) { const r = H("SelectIcon"); return v(), I("div", { class: "custom-select", tabindex: n.tabindex, onBlur: t[1] || (t[1] = a => s.open = !1) }, [m("div", { class: nt(["selected", { open: s.open }]), onClick: t[0] || (t[0] = a => s.open = !s.open) }, [m("div", null, [s.selected.icon.length > 0 ? (v(), I("img", { key: 0, alt: s.selected.value, src: s.selected.icon, height: "12" }, null, 8, Fh)) : ue("", !0), le(" " + re(s.selected.value), 1)]), T(r)], 2), m("div", { class: nt(["items", { selectHide: !s.open }]) }, [m("div", jh, [(v(!0), I(_e, null, tt(n.options, (a, l) => Yt((v(), I("div", { key: l, onClick: u => { s.selected = a, s.open = !1, e.$emit("change", a.value) } }, [a.icon.length > 0 ? (v(), I("img", { key: 0, alt: a.value, src: a.icon, height: "12" }, null, 8, Dh)) : ue("", !0), le(" " + re(a.value), 1)], 8, Uh)), [
        [ws, s.selected.value !== a.value]
    ])), 128))])], 2)], 40, Bh) }
var Gh = j(Hh, [
    ["render", zh],
    ["__scopeId", "data-v-2fb8ad65"]
]);
const Zh = { visibility: !0, id: "paladium", name: "Paladium", jre: "legacy", tweakClass: "cpw.mods.fml.common.launcher.FMLTweaker", classPaths: "net.minecraft.launchwrapper.Launch", url: "https://download.paladium-pvp.fr/games/paladium.json", backgroundImage: "./paladium/background.webp", icon: "PaladiumIcon", logo: "./paladium/logo.webp", headline: "Le plus populaire", description: "Paladium est le premier serveur pvp faction fran\xE7ais. Nous proposons une aventure exclusive sur Minecraft !", colors: { activeIcon: "#080808", settingsActiveIcon: "#FF5C00", activeIndicator: "#FF5C00", button: { default: "#FF5C00", hover: "#BE4400", disabled: "#FFA978" } }, versions: [{ icon: "./paladium/small-logo.webp", value: "Paladium" }] },
    Kh = { visibility: !1, id: "paladium-ptr", name: "Paladium", icon: "PaladiumIcon", jre: "legacy", url: "https://download.paladium-pvp.fr/games/paladium.json", classPaths: "net.minecraft.launchwrapper.Launch", backgroundImage: "./paladium/PTR/background.webp", logo: "./paladium/logo.webp", headline: "PTR", description: "Paladium est le premier serveur pvp faction fran\xE7ais. Nous proposons une aventure exclusive sur Minecraft !", colors: { activeIcon: "#C101C4", settingsActiveIcon: "#C101C4", activeIndicator: "#C101C4", button: { default: "#C101C4", hover: "#970199", disabled: "#C39DC4" } }, versions: [{ icon: "./paladium//PTR/small-logo.webp", value: "Paladium PTR" }, { icon: "./paladium/small-logo.webp", value: "Paladium" }] },
    Wh = { visibility: !1, id: "palanarchy", name: "Palanarchy", icon: "PalanarchyIcon", url: "https://download.paladium-pvp.fr/games/palanarchy.json", classPaths: "cpw.mods.modlauncher.Launcher", backgroundImage: "./palanarchy/background.webp", logo: "./palanarchy/logo.webp", headline: "Nouveau", description: "Une seule r\xE8gle. Pas de r\xE8gles. Vivez Paladium en Anarchie totale.", colors: { activeIcon: "#ef1b1b", activeIndicator: "#EF1B1B", settingsActiveIcon: "#FF5C00", button: { default: "#EF1B1B", hover: "#991111", disabled: "#EFBFBF" } }, versions: [{ icon: "./paladium/small-logo.webp", value: "Paladium" }] },
    qh = { visibility: !1, id: "modded", name: "Modded", icon: "ModdedIcon", jre: "legacy", url: "https://download.paladium-pvp.fr/games/modded.json", classPaths: "cpw.mods.modlauncher.Launcher", backgroundImage: "./modded/background.webp", logo: "./modded/logo.webp", headline: "Nouveau", description: "Apr\xE8s 5 saisons riches en rebondissements, Minecraft modd\xE9 revient pour une toute nouvelle saison. Et cette fois-ci, vous pourrez participer et rejoindre l\u2019aventure Modded.", colors: { activeIcon: "url(#modded-icon-gradient)", settingsActiveIcon: "#263358", activeIndicator: "#263358", button: { default: "#263358", hover: "#19223B", disabled: "#788196" } } },
    Jh = { visibility: !0, id: "minecraft", name: "Minecraft", icon: "MinecraftIcon", backgroundImage: "./minecraft/background.webp", logo: "./minecraft/logo.webp", headline: "Vanilla", description: "Minecraft comme vous l'avez toujours connu, sauf que tous les launchers sont unifi\xE9s !", hideFooter: !0, colors: { activeIcon: "#60CB4C", settingsActiveIcon: "#60CB4C", activeIndicator: "#60CB4C", button: { default: "#60CB4C", hover: "#48993A", disabled: "#A9CBA2" } } },
    Ls = [Zh, Kh, Wh, qh, Jh];
const Ss = G({ name: "GamePage", components: { PlayIcon: Jp, DownloadIcon: nh, CogIcon: Ma, Spotlight: fh, PalaSelect: Gh, ShopCard: Lh }, props: { id: { type: String, required: !0 } }, emits: ["openSettings"], setup(e) { let t = lt({ value: !0, firstTime: !0 }),
                n = lt({ blogPosts: null, installed: !1, startup: !1, progress: null, selectedVersion: null, allVersions: null, onlineConfig: null }),
                o = Dn(null); const s = Yd(); return Jl(async() => { if (e.id) { if (t.firstTime === !1 ? (t.value = !1, await Ca(1210)) : t.firstTime = !1, o.value = Ls.find(a => a.id === e.id), n.blogPosts = await _f(), n.installed = !1, n.startup = !1, n.progress = null, n.selectedVersion = null, n.allVersions = null, n.onlineConfig = null, o.value.url && (n.onlineConfig = await Of(o.value.url)), o.value.id === "minecraft") { const a = await ff();
                        n.selectedVersion = await gf(), n.allVersions = [], a.forEach(l => { var u;
                            (u = n == null ? void 0 : n.allVersions) == null || u.push({ icon: "./minecraft/small-logo.webp", value: l }) }), (n.selectedVersion === null || n.selectedVersion === void 0) && (n.selectedVersion = n.allVersions[0].value), n.installed = await Gi(n.selectedVersion) } else n.installed = await pf(o.value.id), o.value.versions && (n.allVersions = o.value.versions);
                    Ff(a => { o.value.id === a.id && (n.startup = a.value) }), jf(a => { o.value.id === a.id && (n.installed = !0) }), Bf(a => { o.value.id === a.id && (n.progress = parseInt(a.value, 10)) }), t.value = !0 } }), { data: o, showAnimation: t, gameState: n, selectedVersionChange: async a => { o.value.id === "minecraft" ? (n.selectedVersion = a, n.progress = null, n.onlineConfig = null, n.installed = await Gi(n.selectedVersion)) : o.value.id === "paladium" && a === "Paladium PTR" ? s.push("paladium-ptr") : o.value.id === "paladium-ptr" && a === "Paladium" && s.push("paladium") }, actionBtn: () => { o.value.id === "minecraft" ? (If(n.selectedVersion), mf(n.selectedVersion)) : hf(n.onlineConfig.distributions[0], o.value.jre, o.value.id, o.value.tweakClass ? o.value.tweakClass : null, o.value.classPaths ? o.value.classPaths : null) } } } }),
    qi = () => { bs(e => ({ "129d72e0": e.data.colors.button.default, "9db7fcca": e.data.colors.button.hover, "2ad031bd": e.data.colors.button.disabled })) },
    Ji = Ss.setup;
Ss.setup = Ji ? (e, t) => (qi(), Ji(e, t)) : qi;
const Yh = Ss,
    Qh = { id: "game-page" },
    Xh = { id: "game-page__logo" },
    e1 = ["src", "alt"],
    t1 = { key: 0, id: "game-page__content" },
    n1 = { class: "headline" },
    o1 = { class: "title" },
    s1 = { class: "description" },
    i1 = { class: "actions" },
    r1 = { key: 0, class: "progression" },
    a1 = { class: "progress-bar" },
    l1 = { class: "progression-percentage" },
    c1 = ["disabled"],
    u1 = le(" Installer "),
    d1 = { key: 0, id: "game-page__footer" },
    f1 = { id: "game-page__footer__container" },
    p1 = { class: "spotlight-news" },
    h1 = ["href"];

function m1(e, t, n, o, s, i) { const r = H("PlayIcon"),
        a = H("DownloadIcon"),
        l = H("CogIcon"),
        u = H("PalaSelect"),
        c = H("Spotlight"),
        f = H("ShopCard"); return v(), I("div", Qh, [T(Pt, { appear: "", name: "translate-background", mode: "out-in" }, { default: ne(() => [e.showAnimation.value ? (v(), I("div", { key: 0, id: "game-page__background", style: Fe(`background-image: url('${e.data.backgroundImage}');`) }, null, 4)) : ue("", !0)]), _: 1 }), m("div", Xh, [T(Pt, { appear: "", name: "translate-logo" }, { default: ne(() => [e.showAnimation.value ? (v(), I("img", { key: 0, src: e.data.logo, alt: e.data.name, draggable: "false" }, null, 8, e1)) : ue("", !0)]), _: 1 })]), T(Pt, { appear: "", name: "translate-content", mode: "out-in" }, { default: ne(() => [e.showAnimation.value ? (v(), I("div", t1, [m("h2", n1, re(e.data.headline), 1), m("h1", o1, re(e.data.name), 1), m("p", s1, re(e.data.description), 1), m("div", i1, [e.gameState.progress !== null && e.gameState.progress !== 100 && e.gameState.progress !== 0 ? (v(), I("div", r1, [m("div", a1, [m("div", { class: "progress-bar-value", style: Fe(`width: ${e.gameState.progress}%`) }, null, 4)]), m("div", l1, re(e.gameState.progress) + "%", 1)])) : e.gameState.installed ? (v(), I("button", { key: 1, disabled: e.gameState.startup, type: "button", class: "action-btn btn", onClick: t[0] || (t[0] = (...p) => e.actionBtn && e.actionBtn(...p)) }, [T(r), le(" " + re(e.gameState.startup ? "D\xE9marrage..." : "Jouer"), 1)], 8, c1)) : (v(), I("button", { key: 2, type: "button", class: "action-btn btn", onClick: t[1] || (t[1] = (...p) => e.actionBtn && e.actionBtn(...p)) }, [T(a), u1])), m("button", { class: "settings-btn", type: "button", onClick: t[2] || (t[2] = p => e.$emit("openSettings", e.data.id)) }, [T(l)])]), e.gameState.allVersions ? (v(), be(u, { key: 0, class: "select-version", value: e.gameState.selectedVersion, options: e.gameState.allVersions, onChange: t[3] || (t[3] = p => e.selectedVersionChange(p)) }, null, 8, ["value", "options"])) : ue("", !0)])) : ue("", !0)]), _: 1 }), e.data.hideFooter ? ue("", !0) : (v(), I("div", d1, [m("div", f1, [T(Pt, { appear: "", name: "translate-spotlight-1", mode: "out-in" }, { default: ne(() => [e.showAnimation.value ? (v(), be(c, { key: 0, title: "DERNIERES NEWS" }, { default: ne(() => [m("div", p1, [(v(!0), I(_e, null, tt(e.gameState.blogPosts, p => (v(), I("a", { key: p.id, class: "spotlight-news-box", href: `https://paladium-pvp.fr/articles/${p.slug}`, target: "_blank", rel: "noopener noreferrer", style: Fe(`background-image: url(${p.feature_image});`) }, null, 12, h1))), 128))])]), _: 1 })) : ue("", !0)]), _: 1 }), e.gameState.onlineConfig && e.gameState.onlineConfig.shop ? (v(), be(Pt, { key: 0, appear: "", name: "translate-spotlight-2", mode: "out-in" }, { default: ne(() => [e.showAnimation.value ? (v(), be(c, { key: 0, title: "LA BOUTIQUE" }, { default: ne(() => [T(f, { items: e.gameState.onlineConfig.shop, "accent-color": e.data.colors.activeIndicator }, null, 8, ["items", "accent-color"])]), _: 1 })) : ue("", !0)]), _: 1 })) : ue("", !0)])]))]) }
var g1 = j(Yh, [
    ["render", m1],
    ["__scopeId", "data-v-415a2ca2"]
]);
const _1 = [{ path: "/splash", name: "Splash", meta: { layout: "empty" }, component: wp }, { path: "/login", name: "Login", meta: { layout: "empty" }, component: zp }, { path: "/:id", name: "GamePage", component: g1, props: !0 }, { path: "/:pathMatch(.*)*", name: "NotFound", redirect: "/paladium" }],
    v1 = qd({ history: dd(), routes: _1 });
const y1 = G({ name: "TitlebarComponent", props: { resizable: { type: Boolean, default: !0 }, canMinimize: { type: Boolean, default: !0 } }, data() { return { isMaximized: !1, isWindows: !1 } }, async beforeMount() { this.isWindows = await Ea() }, methods: { minimize() { ef() }, maximize() { this.isMaximized = !0, tf() }, restore() { this.isMaximized = !1, nf() }, close() { of() } } }),
    b1 = { id: "titlebar" },
    w1 = { key: 0, id: "window-controls" };

function $1(e, t, n, o, s, i) { return v(), I("div", b1, [e.isWindows ? (v(), I("div", w1, [e.canMinimize === !0 ? (v(), I("div", { key: 0, class: "button", onClick: t[0] || (t[0] = (...r) => e.minimize && e.minimize(...r)) }, "\uE921")) : ue("", !0), e.isMaximized === !1 && e.resizable === !0 ? (v(), I("div", { key: 1, class: "button", onClick: t[1] || (t[1] = (...r) => e.maximize && e.maximize(...r)) }, "\uE922")) : ue("", !0), e.isMaximized === !0 && e.resizable === !0 ? (v(), I("div", { key: 2, class: "button", onClick: t[2] || (t[2] = (...r) => e.restore && e.restore(...r)) }, "\uE923")) : ue("", !0), m("div", { class: "button", onClick: t[3] || (t[3] = (...r) => e.close && e.close(...r)) }, "\uE8BB")])) : ue("", !0)]) }
var Ta = j(y1, [
    ["render", $1],
    ["__scopeId", "data-v-95e3de94"]
]);
const I1 = G({ name: "BellIcon" }),
    E1 = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "29.265", height: "32.62", viewBox: "0 0 29.265 32.62" },
    C1 = m("defs", null, [m("clipPath", { id: "a" }, [m("rect", { width: "29.265", height: "32.62", transform: "translate(0 0)", fill: "#fff" })])], -1),
    M1 = m("g", { "clip-path": "url(#a)" }, [m("path", { d: "M28.923,21.71l-3.041-3.04V13.5A11.4,11.4,0,0,0,15.763,2.25V0H13.5V2.25A11.407,11.407,0,0,0,3.383,13.5v5.17L.343,21.71A1.03,1.03,0,0,0,0,22.5v3.37A1.055,1.055,0,0,0,.983,27H9a5.63,5.63,0,0,0,11.26,0h8.019a1.057,1.057,0,0,0,.981-1.13V22.5a1.037,1.037,0,0,0-.34-.79m-14.29,8.66A3.374,3.374,0,0,1,11.253,27h6.76a3.374,3.374,0,0,1-3.38,3.37m12.38-5.62H2.253v-1.8l3.04-3.04a1.066,1.066,0,0,0,.34-.79V13.5a9,9,0,1,1,18,0v5.62a1.07,1.07,0,0,0,.34.79l3.041,3.04Z", fill: "#fff" })], -1),
    T1 = [C1, M1];

function A1(e, t, n, o, s, i) { return v(), I("svg", E1, T1) }
var Aa = j(I1, [
    ["render", A1]
]);
const x1 = G({ name: "XIcon" }),
    L1 = { xmlns: "http://www.w3.org/2000/svg", width: "15.2", height: "15.19", viewBox: "0 0 15.2 15.19" },
    S1 = m("path", { d: "M13.78,0,7.6,6.18,1.42,0,0,1.41,6.18,7.591,0,13.77l1.42,1.42L7.6,9.01l6.18,6.18,1.42-1.42L9.02,7.591,15.2,1.41Z", transform: "translate(0 0)", fill: "#fff" }, null, -1),
    k1 = [S1];

function P1(e, t, n, o, s, i) { return v(), I("svg", L1, k1) }
var xa = j(x1, [
    ["render", P1]
]);
const R1 = G({ name: "TabComponent", setup() { const e = Dn(0),
                t = Dn(!1),
                n = et("TabsProvider"); return Nt(() => n.selectedIndex, () => { t.value = e.value === n.selectedIndex }), Or(() => { e.value = n.count, n.count++, t.value = e.value === n.selectedIndex }), { index: e, isActive: t } } }),
    O1 = { class: "tab" };

function N1(e, t, n, o, s, i) { return Yt((v(), I("div", O1, [$t(e.$slots, "default")], 512)), [
        [ws, e.isActive]
    ]) }
var La = j(R1, [
    ["render", N1]
]);
const V1 = G({ name: "PaladiumIcon" }),
    H1 = { xmlns: "http://www.w3.org/2000/svg", width: "33.674", height: "35.039", viewBox: "0 0 33.674 35.039" },
    B1 = m("path", { d: "M4222.424,247.593c-1.745.691-3.619,5.345-3.732,13.954l4.583-6.347v-7.8A3.309,3.309,0,0,0,4222.424,247.593Z", transform: "translate(-4205.742 -226.507)" }, null, -1),
    F1 = m("path", { d: "M4189.506,153.306c-2.237,7.07-9.435,8.25-9.513,8.261l-.089.007-3.987,0v-1.183h0v-6.6h3.885a3.748,3.748,0,0,1,3.886,3.595.851.851,0,0,1,0,.1,3.367,3.367,0,0,1-.534,1.72,10.575,10.575,0,0,0,5.508-7.312,10.9,10.9,0,0,0-8.855-4.371h-23.013l12.353,5.38v22.442c.828-4.851,2.4-7.243,3.894-7.836a4.628,4.628,0,0,1,1.287-.278v.019h5.479a11.089,11.089,0,0,0,7.335-2.706,9.5,9.5,0,0,0,3.323-7.057c0-.034,0-.066,0-.1A9.205,9.205,0,0,0,4189.506,153.306Z", transform: "translate(-4156.789 -147.527)" }, null, -1),
    j1 = [B1, F1];

function U1(e, t, n, o, s, i) { return v(), I("svg", H1, j1) }
var ks = j(V1, [
    ["render", U1]
]);
const D1 = G({ name: "PalanarchyIcon" }),
    z1 = { xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "43.746", height: "42.198", viewBox: "0 0 43.746 42.198" },
    G1 = Sn('<defs><clipPath id="a"><rect width="43.746" height="42.198"></rect></clipPath></defs><g transform="translate(0 0)" clip-path="url(#a)"><path d="M6.539,20.914l-.087.072c.029.058.072.116.1.173a1.514,1.514,0,0,0,.116.159l.477.318.145-.1L7.1,21.29Z" transform="translate(2.875 9.319)"></path><path d="M25.9,3.732l-.289-.188-.231.564.275.188Z" transform="translate(11.309 1.579)"></path><path d="M11.725,2.47h.014l-.275-.506-.289.087h-.014l.275.506Z" transform="translate(4.973 0.875)"></path><path d="M43.645,16.977a.506.506,0,0,1-.029-.434.979.979,0,0,0,.043-.9,2.565,2.565,0,0,1-.145-.882c.014-.159.043-.332-.173-.419a.158.158,0,0,1-.058-.188.174.174,0,0,1,.072-.072.314.314,0,0,0,.173-.3l-1.85-5.218c-.173-.014-.275-.043-.275-.26,0-.1-.029-.26-.188-.231-.231.058-.448.116-.506-.217a.514.514,0,0,0-.058-.13,8.082,8.082,0,0,1-.593-.954c-.043-.072-.087-.145-.13-.2L37.617,5.86l-.116.159.535.376-.116.159L36.041,5.7l.636-.275-.13-.1q-1.323-.759-1.865-.347l-.116.145-.549-.39v-.26l-.145.145.029.26-.549-.39.145-.159.246-.043.1-.159-.246.058-.52-.376.058-.13L32.2,2.666l.188-.217.911.491.188-.217a.477.477,0,0,1-.1-.651l.087-.087-.593-.578a1.272,1.272,0,0,0-.217-.072,8.521,8.521,0,0,0-.853-.3c-.029,0-.072-.058-.072-.087.029-.361-.246-.3-.448-.347-.231-.058-.477-.087-.564-.361-.014-.072-.1-.1-.159-.116a1.079,1.079,0,0,0-.9-.043.131.131,0,0,1-.145,0,.352.352,0,0,0-.376-.043A2.186,2.186,0,0,1,28,.02c-.217-.043-7.156.636-7.343.665a1.055,1.055,0,0,0-.434.231,1.292,1.292,0,0,1-.781.347h-.014v.029L17.075,2.868l.043.173.593-.159.043.173-1.72.838.188-.607-.159.029c-.882.347-1.33.723-1.33,1.128l.029.188-.607.145-.173-.145.029.188.188.145-.593.145-.043-.173.116-.217-.043-.173-.1.217-.578.159-.043-.087a2.835,2.835,0,0,0-.737.578.205.205,0,0,1-.2.058.5.5,0,0,0-.463.231,8.054,8.054,0,0,1-.665.737.974.974,0,0,0-.361.708c0,.058-.058.1-.087.145-.058.072-.13.145-.188.217l.1.246.2.058L10.469,8c-.1.3-.376.434-.838.39a.47.47,0,0,1-.188.188l-.1.39.361.954L7.887,14.713c-.111.023-.2.053-.314.074l-.252.014.429-.947,0-.006.111-.212-.2.055-.049-.082.419-.737.289-1-.2-.043-.7,1.925-3.342.9.029.374,1.253-.093.007.379L0,17.552a1.241,1.241,0,0,0,.013.175q.115.581.951.526l.007.377-.3.395.009.377.941-.431.331-.02q.015.755-.956.812l.016.756,4.435-1.376-.022.059a1.907,1.907,0,0,1,.084.542l-.062.078.065-.006c0,.212-.019.478.1.6.2.217.159.434.2.679a.694.694,0,0,0,.361.636c-.347-.072-.318.13-.318.318a1,1,0,0,1-.13.651,17.471,17.471,0,0,0,.593,3.787c.231-.029.3.058.332.275,0,.014.014.029.014.043.173.116.332.246.491.376l.087-.087.535.3.159.463.737.607-.043.231.145-.116-.043.231,1.33,1.33.607.708h-.246l-.145.1s4.423,2.631,4.5,2.631c.1-.145.13-.043.217.014.145.1.26.361.477.188.13-.13.231-.014.332-.014.043,0,.087.087-.014.116-.217.014-.058.1-.014.13a4.669,4.669,0,0,0,.911.679c.043.029.087.058.13.029.116-.087.145-.043.145.087-.014.087.072.1.145.116s.116.014.13.072c.048.191.2.241.343.295l-.166.948,1.071,1.487L18,40.71,20.932,42.2H21.3l.373-.373q1.247-3.719,1.991-3.718l-.278-1.687h.6c.116,0,.246-.058.318-.014a1.868,1.868,0,0,0,.969.173,8.17,8.17,0,0,0,1.879,0,18.231,18.231,0,0,1,2.515-.173,1.935,1.935,0,0,0,.983-.231,8.985,8.985,0,0,1,1.952-.853.675.675,0,0,0,.145-.072c.217-.1.347-.318.578-.39a8.708,8.708,0,0,0,1.07-.434,3.523,3.523,0,0,0,.983-.578c.26-.231.477-.087.694-.058a23.681,23.681,0,0,0,2.342-1.865l2.949-6.3,1.417-4.38.39-.477h.477a.4.4,0,0,0-.029-.289.5.5,0,0,1,.014-.4.972.972,0,0,0-.188-.925c-.2-.1-.13-.188-.029-.275a.674.674,0,0,0,.231-.911c-.029-.058-.116-.116-.058-.188.231-.26.13-.52.058-.8m-30.357-6c.231-.188.318-.506.593-.651.173-.087.231-.26.361-.376.029-.029.13-.116,0-.188a.076.076,0,0,1-.029-.1.079.079,0,0,1,.072-.043c.4.058.607-.275.838-.463.275-.217.52-.477.81-.679.332-.231.694-.419,1.041-.636a3.5,3.5,0,0,0,.679-.708c.058-.058.072-.159.159-.029.014.029.058.029.087.014.4-.289.954-.347,1.315-.723a1.261,1.261,0,0,1,.506-.4c.824-.954,4.467-1.3,4.467-1.3h.087c.058,0,.116.029.173.014.029,0,.043-.014.058-.014h.087A14.424,14.424,0,0,1,29.955,5.86.112.112,0,0,0,30,5.875v.014a.586.586,0,0,1,.13.072,2,2,0,0,0,.911.665,4.18,4.18,0,0,1,.838.434.949.949,0,0,0,.52.116.318.318,0,0,1,.231.072A4.359,4.359,0,0,0,33.9,8.13a.987.987,0,0,1,.535.491,1.524,1.524,0,0,0,.781.694.7.7,0,0,1,.1.043c.071.237.272.37.419.548a4.97,4.97,0,0,0-.8-.071l-1.489.372-3.983-.743-2.625.372q.043-1.117-.7-1.116t-.788,1.116h-.373q.043-1.86-.7-1.86H22.419l-.372.373V7.975L21.7,7.6h-.373l-.393.373.35,1.489.372-.373.723.744-.023.372c-.01.33-1.094.963-3.213,1.891l-2.841.477-.338-.356.03.372-.338-.357-1.885.507-.561-.172.032-.039.014-.382-.785.045a2.406,2.406,0,0,1,.241-.435,3.418,3.418,0,0,1,.578-.781m5.982,14.109.02-.372h.746l-.088,1.859H19.2l.045-.743.372-.373ZM12.312,12.579l0,.09-.136.065a1.537,1.537,0,0,0,.1-.192Zm20.654,2.836h1.116a20.763,20.763,0,0,1-8.4,6.7h-.742l.525-4.464q.041-1.728,7.5-2.232M24.52,23.6l.372-.372Q33.231,19,34.41,16.9h.372a18.731,18.731,0,0,1-9.518,7.067H24.52ZM10.165,11.57v.578H9.891Zm-.419,1.07h.289l.246.173-.246.781-.017.162a2.8,2.8,0,0,0-.9.59l-.211-.1ZM6.421,18.581l-.093-.029.12-.045Zm.837-3.02-.292.027.181-.4Zm-.636.059L6.29,14.5l.636-.059.106.351-.3.814ZM17.249,30.189h-.014c-.448-.1-4.814-2.616-4.814-2.616a.259.259,0,0,1-.1-.072,3.174,3.174,0,0,1-.246-.361,1.844,1.844,0,0,0-.911-.81c-.072-.029-.072-.058-.029-.13a.859.859,0,0,0-.029-.752.855.855,0,0,1-.116-.318l-.014-.014v-.029c-.145-.491-.622-4.366-.679-4.857-.014-.014-.014-.014,0-.029a.053.053,0,0,1-.014-.043v-.13c.027-.278.025-.557.027-.833l.85-.143.338.357-.03-.373.338.358,1.886-.507.559.172-.032.039-.014.38,1.279-.074-.338-.356,0-.091.188-.09.139.159,1.278-.074-.006-.377a1.291,1.291,0,0,1,.286-.538,3.26,3.26,0,0,0,1.35-.807c.049-.017.085-.039.137-.055a3.834,3.834,0,0,1,1.272,3.075h.372l.045-1.487.721.743-.043,1.86h-.744l.33,1.115-.066,1.86h-.372l.042-1.487h-.742l-.4.373.373.372L18.006,30.4a1.633,1.633,0,0,0-.194-.1.716.716,0,0,0-.188-.058.471.471,0,0,1-.376-.058M39.38,17.136a.408.408,0,0,0-.058.217,12.517,12.517,0,0,1-.058,1.807c-.043.434-.029.853-.043,1.287a.285.285,0,0,1-.087.2.438.438,0,0,0-.087.376.684.684,0,0,1-.159.694c-.188.173-.145.419-.217.636a11.916,11.916,0,0,1-.723,1.793c-.058.116-.2.188-.217.347a.7.7,0,0,0,.072.564c.116.173-.014.376-.116.549-.014.014-.029.014-.043.029-.087.1-.145.159-.173.159-.246.954-3.686,4-3.686,4h-.014a.617.617,0,0,1-.376.3,4,4,0,0,0-.954.578c-.058.058-.13.1-.188.159a.724.724,0,0,0-.116.1l-.014.014a.491.491,0,0,0-.043.289l.159-.043.4-.3.043.188-.1.217.043.173c.246-.072.419-.014.491.159a.6.6,0,0,1,.029.087L30.793,33.3l.043.173.578-.159.058.173-1.72.838.188-.622-.159.043q-1.323.5-1.344,1.128l.043.173-.607.159-.188-.145.029.188.2.13-.607.159-.029-.188.116-.2-.058-.173-.1.217-.578.159-.058-.116-1.272.072-.043-.26.882-.361-.043-.26a.465.465,0,0,1-.535-.347v-.087l-1.243.145-.029-.246c-.072-.347.332-.723,1.214-1.113l-.043-.116.043-.043c-.188-.043-.376-.087-.578-.116a8.854,8.854,0,0,1-1.467-.256l.071-2.324,6.04-2.6q5.252-2.669,8.14-9.671h.372l-.022.743h.372l.811-2.232v-.37l-.351-.373.142-.929c.087.085.185.158.263.25.2.188.1.52.275.723-.231.535.087,1.142-.217,1.677" transform="translate(0 0)"></path><path d="M21.114,21.924c-.145.029-.289.072-.448.116a.777.777,0,0,0-.434.246l.029.13.3-.072L21.128,22Z" transform="translate(9.015 9.769)"></path><path d="M20.666,23.1h-.014l.26.506h.014l.289-.087-.26-.506Z" transform="translate(9.202 10.254)"></path></g>', 2),
    Z1 = [G1];

function K1(e, t, n, o, s, i) { return v(), I("svg", z1, Z1) }
var Ps = j(D1, [
    ["render", K1]
]);
const W1 = G({ name: "ModdedIcon" }),
    q1 = { xmlns: "http://www.w3.org/2000/svg", width: "45.98", height: "20.002", viewBox: "0 0 45.98 20.002" },
    J1 = Sn('<defs xmlns="http://www.w3.org/2000/svg"><linearGradient id="modded-icon-gradient" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#2d2ed0"></stop><stop offset="1" stop-color="#009eff"></stop></linearGradient></defs><g transform="translate(-427.808 -270.174)"><path d="M385.57,268.877v8.9h-21.36l-4.2-6.118-4.92-7.183h-9.53v1.595a5.054,5.054,0,0,0,1.235,3.593,5.36,5.36,0,0,0,7.059,0,4.317,4.317,0,0,0,.861-1.388L358.64,274a9.421,9.421,0,0,1-2.82,2.42,11.8,11.8,0,0,1-10.98,0,9.8,9.8,0,0,1-3.848-3.877,11.884,11.884,0,0,1-1.4-5.872v-8.9h21.349l.007.011,4.193,6.119,4.92,7.176H379.6v-1.6a5.038,5.038,0,0,0-1.239-3.59,5.345,5.345,0,0,0-7.056,0,4.241,4.241,0,0,0-.865,1.388l-3.92-5.723a9.345,9.345,0,0,1,2.823-2.423,11.769,11.769,0,0,1,10.98,0,9.823,9.823,0,0,1,3.848,3.877A11.872,11.872,0,0,1,385.57,268.877Z" transform="translate(88.218 12.4)"></path></g>', 2),
    Y1 = [J1];

function Q1(e, t, n, o, s, i) { return v(), I("svg", q1, Y1) }
var Rs = j(W1, [
    ["render", Q1]
]);
const X1 = G({ name: "MinecraftIcon" }),
    em = { xmlns: "http://www.w3.org/2000/svg", width: "37.498", height: "37.498", viewBox: "0 0 37.498 37.498" },
    tm = m("path", { d: "M18.749,37.5,0,28.124V9.375L18.749,0,37.5,9.375V28.124ZM35.154,10.546l-16.405-8.2-16.405,8.2v3.515H4.687v2.344H7.031V14.062H9.375v2.344h2.344v2.344h2.344V16.405l2.344,1.172v3.515h2.344V18.749h2.344v2.344h2.344V18.749H25.78V15.234l2.344-1.172v2.344h2.344V12.89l2.344-1.172v2.344h2.344ZM9.375,14.062Z" }, null, -1),
    nm = [tm];

function om(e, t, n, o, s, i) { return v(), I("svg", em, nm) }
var Os = j(X1, [
    ["render", om]
]);
const sm = G({ name: "HomeIcon" }),
    im = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 17.308 15.337" },
    rm = m("path", { d: "M18.575,12.1H16.981v5.718a.868.868,0,0,1-.953.953H12.216V13.053H8.4v5.718H4.591a.868.868,0,0,1-.953-.953V12.1H2.044c-.57,0-.448-.309-.057-.713L9.635,3.732a.913.913,0,0,1,1.349,0l7.646,7.654c.392.405.514.714-.056.714Z", transform: "translate(-1.655 -3.434)" }, null, -1),
    am = [rm];

function lm(e, t, n, o, s, i) { return v(), I("svg", im, am) }
var Sa = j(sm, [
    ["render", lm]
]);
const cm = G({ name: "AvatarIcon" }),
    um = { xmlns: "http://www.w3.org/2000/svg", width: "18.101", height: "18.101", viewBox: "0 0 18.101 18.101" },
    dm = m("g", { transform: "translate(7068.455 -11455.545)" }, [m("path", { d: "M25.817,18.1h18.1V0h-18.1Zm17.218-.884H39.274V13.48H37.326v1.948H32.41V13.48H30.461v3.738H26.7V7.227h2.22V5.007H40.815v2.22h2.22Z", transform: "translate(-7094.272 11455.545)" }), m("path", { d: "M36.187,3.591v2.9H32.154v-2.9H26.377v3.33H31.7V8.938h4.916V6.921h5.324V3.591ZM31.27,6.06H29.685V4.475H31.27Zm7.363,0H37.048V4.475h1.586Z", transform: "translate(-7093.564 11460.09)" })], -1),
    fm = [dm];

function pm(e, t, n, o, s, i) { return v(), I("svg", um, fm) }
var ka = j(cm, [
    ["render", pm]
]);
const hm = G({ name: "ArchiveIcon" }),
    mm = { xmlns: "http://www.w3.org/2000/svg", width: "19.059", height: "15.938", viewBox: "0 0 19.059 15.938" },
    gm = m("path", { d: "M2.588,5.231H16.471v9.787H2.588ZM.919.919H18.14V4.312H.919ZM0,0V5.231H1.669V15.938H17.391V5.231h1.669V0Z", fill: "#828282" }, null, -1),
    _m = m("rect", { width: "5.201", height: "0.919", transform: "translate(6.93 6.833)", fill: "#828282" }, null, -1),
    vm = [gm, _m];

function ym(e, t, n, o, s, i) { return v(), I("svg", mm, vm) }
var Pa = j(hm, [
    ["render", ym]
]);
const bm = G({ name: "TabsComponent", components: { PaladiumIcon: ks, PalanarchyIcon: Ps, ModdedIcon: Rs, MinecraftIcon: Os, HomeIcon: Sa, AvatarIcon: ka, ArchiveIcon: Pa }, props: { defaultSelectTab: { type: [String, Number], default: 0 } }, setup(e, { slots: t }) { const n = lt({ selectedIndex: 0, tabs: [], count: 0 });
            _n("TabsProvider", n); const o = s => { n.selectedIndex = s }; return co(() => { if (t.default) { let s = [];
                    t.default().forEach(i => { i.type.name === "TabComponent" ? s.push(i) : i.type === _e && i.children && i.children.length > 0 && i.children.forEach(r => { s.push(r) }) }), n.tabs = s } if (e.defaultSelectTab)
                    if (typeof e.defaultSelectTab == "number") o(e.defaultSelectTab);
                    else { const s = n.tabs.findIndex(i => i.props.id === e.defaultSelectTab);
                        o(s === -1 ? 0 : s) } }), zs(Ds({}, Pl(n)), { selectTab: o }) } }),
    wm = { class: "tabs" },
    $m = { class: "tabs-header" },
    Im = ["onClick"],
    Em = { key: 0, class: "badge" };

function Cm(e, t, n, o, s, i) { return v(), I("div", wm, [m("div", $m, [(v(!0), I(_e, null, tt(e.tabs, (r, a) => (v(), I("div", { key: a, class: nt([{ "tab-selected": a === e.selectedIndex }, "tab"]), onClick: l => e.selectTab(a) }, [(v(), be(Qt(r.props["icon-name"]))), le(" " + re(r.props.name) + " ", 1), r.props.badge ? (v(), I("div", Em, re(r.props.badge), 1)) : ue("", !0), (v(), be(Qt(r.props["right-icon-name"]), { class: "right-icon" }))], 10, Im))), 128))]), $t(e.$slots, "default", {}, void 0, !0)]) }
var Ra = j(bm, [
    ["render", Cm],
    ["__scopeId", "data-v-658854b0"]
]);
const Mm = G({ name: "NotificationItem", components: { ArchiveIcon: Pa }, props: { id: { type: String, required: !0 }, name: { type: String, default: "" }, description: { type: String, default: "" }, read: { type: Boolean, default: !1 }, archived: { type: Boolean, default: !1 }, link: { type: String, default: "" } }, data() { return { isRead: !1 } }, async beforeMount() { this.isRead = this.read }, methods: { clickLink() { Lf(this.id), this.isRead = !0, this.link.startsWith("https://") ? window.open(this.link, "_blank") : this.link.startsWith("#") && (this.$router.push(this.link.slice(1)), this.$emit("close")) }, clickArchive() { Sf(this.id) } } }),
    Tm = { class: "notification" },
    Am = { key: 0, class: "notification-unread" };

function xm(e, t, n, o, s, i) { const r = H("ArchiveIcon"); return v(), I("div", Tm, [m("div", { class: "notification-item", onClick: t[0] || (t[0] = (...a) => e.clickLink && e.clickLink(...a)) }, [m("h3", null, [le(re(e.name) + " ", 1), e.isRead === !1 ? (v(), I("span", Am)) : ue("", !0)]), m("p", null, re(e.description), 1)]), e.archived ? ue("", !0) : (v(), I("button", { key: 0, type: "button", onClick: t[1] || (t[1] = (...a) => e.clickArchive && e.clickArchive(...a)) }, [T(r)]))]) }
var Lm = j(Mm, [
    ["render", xm],
    ["__scopeId", "data-v-8c50fe4a"]
]);
const Sm = G({ name: "NotificationsModal", components: { BellIcon: Aa, XIcon: xa, Tab: La, Tabs: Ra, NotificationItem: Lm } }),
    km = e => (Et("data-v-3d9fea7c"), e = e(), Ct(), e),
    Pm = km(() => m("div", { class: "overlay" }, null, -1)),
    Rm = { class: "notifications-modal" },
    Om = le(" Notifications");

function Nm(e, t, n, o, s, i) { const r = H("XIcon"),
        a = H("BellIcon"),
        l = H("NotificationItem"),
        u = H("Tab"),
        c = H("Tabs"); return v(), be(Wr, { to: "body" }, [Pm, m("div", Rm, [m("button", { type: "button", class: "modal-close", onClick: t[0] || (t[0] = f => e.$emit("close")) }, [T(r)]), m("h2", null, [T(a), Om]), T(c, null, { default: ne(() => [T(u, { name: "Nouvelles", badge: e.$store.state.notifications.unreadNotifCount }, { default: ne(() => [(v(!0), I(_e, null, tt(e.$store.state.notifications.newNotifs, f => (v(), be(l, { id: f.id, key: f.id, read: f.read, name: f.name, description: f.description, link: f.link, onClose: t[1] || (t[1] = p => e.$emit("close")) }, null, 8, ["id", "read", "name", "description", "link"]))), 128))]), _: 1 }, 8, ["badge"]), T(u, { name: "Archiv\xE9es", "right-icon-name": "ArchiveIcon" }, { default: ne(() => [(v(!0), I(_e, null, tt(e.$store.state.notifications.archivedNotifs, f => (v(), be(l, { id: f.id, key: f.id, read: !0, archived: !0, name: f.name, description: f.description, link: f.link, onClose: t[2] || (t[2] = p => e.$emit("close")) }, null, 8, ["id", "name", "description", "link"]))), 128))]), _: 1 })]), _: 1 })])]) }
var Vm = j(Sm, [
    ["render", Nm],
    ["__scopeId", "data-v-3d9fea7c"]
]);
const Hm = G({ name: "Notifications", components: { NotificationsModal: Vm, BellIcon: Aa }, data() { return { open: !1 } } }),
    Bm = { key: 0, class: "notifications-btn-badge" };

function Fm(e, t, n, o, s, i) { const r = H("BellIcon"),
        a = H("NotificationsModal"); return v(), I(_e, null, [m("button", { type: "button", class: "notifications-btn", onClick: t[0] || (t[0] = l => e.open = !e.open) }, [e.$store.state.notifications.unreadNotifCount > 0 ? (v(), I("div", Bm)) : ue("", !0), T(r)]), e.open ? (v(), be(a, { key: 0, onClose: t[1] || (t[1] = l => e.open = !1) })) : ue("", !0)], 64) }
var jm = j(Hm, [
    ["render", Fm],
    ["__scopeId", "data-v-1390ae0a"]
]);
const Um = G({ name: "NavigationContainer" }),
    Dm = { class: "main-nav__container" };

function zm(e, t, n, o, s, i) { return v(), I("div", Dm, [$t(e.$slots, "default", {}, void 0, !0)]) }
var Oa = j(Um, [
    ["render", zm],
    ["__scopeId", "data-v-9c313382"]
]);
const Gm = G({ name: "Avatar", components: { NavigationContainer: Oa }, computed: { title() { return this.$store.state.username }, avatarStyle() { return `background-image: url('${this.$store.state.skinUrl}')` } } }),
    Zm = e => (Et("data-v-4c347186"), e = e(), Ct(), e),
    Km = Zm(() => m("div", { class: "status" }, null, -1));

function Wm(e, t, n, o, s, i) { const r = H("NavigationContainer"); return v(), be(r, { id: "main-nav__header", title: e.title }, { default: ne(() => [Km, m("div", { class: "avatar", style: Fe(e.avatarStyle) }, null, 4)]), _: 1 }, 8, ["title"]) }
var qm = j(Gm, [
    ["render", Wm],
    ["__scopeId", "data-v-4c347186"]
]);
const Jm = G({ name: "IndicatorIcon" }),
    Ym = { xmlns: "http://www.w3.org/2000/svg", width: "6.5", height: "34", viewBox: "0 0 6.5 34" },
    Qm = m("path", { id: "Indicator", d: "M5,32H29l5,6.5H0Z", transform: "translate(-32 34) rotate(-90)" }, null, -1),
    Xm = [Qm];

function e0(e, t, n, o, s, i) { return v(), I("svg", Ym, Xm) }
var t0 = j(Jm, [
    ["render", e0]
]);
const Ns = G({ name: "NavigationIndicator", components: { IndicatorIcon: t0 }, props: { color: { type: String, default: "" }, yPos: { type: Number, default: 0 } } }),
    Yi = () => { bs(e => ({ "62630c52": e.color, "4083d227": e.yPos })) },
    Qi = Ns.setup;
Ns.setup = Qi ? (e, t) => (Yi(), Qi(e, t)) : Yi;
const n0 = Ns;

function o0(e, t, n, o, s, i) { const r = H("IndicatorIcon"); return v(), be(r, { id: "indicator" }) }
var s0 = j(n0, [
    ["render", o0],
    ["__scopeId", "data-v-2954f754"]
]);
const i0 = G({ name: "NavigationItem", components: { NavigationIndicator: s0, PaladiumIcon: ks, PalanarchyIcon: Ps, ModdedIcon: Rs, MinecraftIcon: Os }, props: { item: { type: Object, required: !0 } }, data() { return { indicatorYPos: 32.5 } }, watch: { $route() {
            (async() => (await Ca(10), this.updateIndicator()))() } }, beforeMount() { this.updateIndicator() }, methods: { updateIndicator() { let e = document.getElementById("main-nav__menu"),
                t = document.getElementsByClassName("router-link-active"); if (t.length > 0) { const n = t[0],
                    o = e == null ? void 0 : e.getBoundingClientRect(),
                    s = n.getBoundingClientRect();
                this.indicatorYPos = s.top + s.height / 2 - ((o == null ? void 0 : o.top) || 0) - 17 } } } });

function r0(e, t, n, o, s, i) { const r = H("NavigationIndicator"),
        a = H("router-link"); return v(), be(a, { key: e.item.name, title: e.item.name, to: `/${e.item.id}`, class: "navigation-item" }, { default: ne(({ isActive: l }) => [l ? (v(), be(r, { key: 0, color: e.item.colors.activeIndicator, "y-pos": e.indicatorYPos }, null, 8, ["color", "y-pos"])) : ue("", !0), (v(), be(Qt(e.item.icon), { style: Fe(l ? `fill: ${e.item.colors.activeIcon};` : "") }, null, 8, ["style"]))]), _: 1 }, 8, ["title", "to"]) }
var a0 = j(i0, [
    ["render", r0],
    ["__scopeId", "data-v-7078eb6e"]
]);
const l0 = G({ name: "NavigationComponent", components: { NavigationItem: a0, NavigationContainer: Oa, Avatar: qm, Notifications: jm }, emits: ["openSettings"], data() { return { games: Ls } } }),
    c0 = { id: "main-nav" };

function u0(e, t, n, o, s, i) { const r = H("Avatar"),
        a = H("NavigationItem"),
        l = H("NavigationContainer"),
        u = H("Notifications"); return v(), I("div", c0, [T(r, { onClick: t[0] || (t[0] = c => e.$emit("openSettings", 0)) }), T(l, { id: "main-nav__menu" }, { default: ne(() => [(v(!0), I(_e, null, tt(e.games, c => (v(), I(_e, { key: c.name }, [c.visibility ? Yt((v(), be(a, Wa(vs({ key: 0 }, { item: c })), null, 16)), [
            [ws, e.$route.path === "/paladium-ptr" || e.$route.path === "/paladium" ? c.name === "Paladium" && e.$route.path === "/paladium-ptr" ? c.id === "paladium-ptr" : c.name === "Paladium" && e.$route.path === "/paladium" ? c.id === "paladium" : !0 : c.id !== "paladium-ptr"]
        ]) : ue("", !0)], 64))), 128))]), _: 1 }), T(l, { id: "main-nav__footer" }, { default: ne(() => [T(u)]), _: 1 })]) }
var d0 = j(l0, [
        ["render", u0],
        ["__scopeId", "data-v-5290e020"]
    ]),
    f0 = [{ id: 0, name: "@tryghost/content-api", version: "1.7.2", license: "MIT License (MIT)", repository: "https://github.com/TryGhost/SDK/tree/master/packages/content-api", author: "Ghost Foundation", dependencyLevel: "production" }, { id: 1, name: "@typescript-eslint/eslint-plugin", version: "4.33.0", license: "MIT License (MIT)", repository: "git+https://github.com/typescript-eslint/typescript-eslint.git", homepage: "https://github.com/typescript-eslint/typescript-eslint#readme", dependencyLevel: "production" }, { id: 2, name: "@typescript-eslint/parser", version: "4.33.0", license: 'BSD 2-Clause "Simplified" License (BSD-2-Clause)', repository: "git+https://github.com/typescript-eslint/typescript-eslint.git", homepage: "https://github.com/typescript-eslint/typescript-eslint#readme", dependencyLevel: "production" }, { id: 3, name: "@vitejs/plugin-vue", version: "2.2.4", license: "MIT License (MIT)", repository: "git+https://github.com/vitejs/vite.git", author: "Evan You", homepage: "https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme", dependencyLevel: "production" }, { id: 4, name: "@vue/cli", version: "5.0.3", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/vue-cli.git", author: "Evan You", homepage: "https://cli.vuejs.org/", dependencyLevel: "production" }, { id: 5, name: "@vue/eslint-config-prettier", version: "6.0.0", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/eslint-config-prettier.git", author: "Evan You", homepage: "https://github.com/vuejs/eslint-config-prettier#readme", dependencyLevel: "production" }, { id: 6, name: "@vue/eslint-config-typescript", version: "10.0.0", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/eslint-config-typescript.git", author: "Evan You", homepage: "https://github.com/vuejs/eslint-config-typescript#readme", dependencyLevel: "production" }, { id: 7, name: "adm-zip", version: "0.5.9", license: "MIT License (MIT)", repository: "git+https://github.com/cthackers/adm-zip.git", author: "Nasca Iacob", homepage: "https://github.com/cthackers/adm-zip", dependencyLevel: "production" }, { id: 8, name: "auto-launch", version: "5.0.5", license: "MIT License (MIT)", repository: "git+https://github.com/4ver/node-auto-launch.git", author: "Donal Linehan", homepage: "https://github.com/4ver/node-auto-launch", dependencyLevel: "production" }, { id: 9, name: "autoprefixer", version: "10.4.4", license: "MIT License (MIT)", repository: "git+https://github.com/postcss/autoprefixer.git", author: "Andrey Sitnik", homepage: "https://github.com/postcss/autoprefixer#readme", dependencyLevel: "production" }, { id: 10, name: "axios", version: "0.26.1", license: "MIT License (MIT)", repository: "git+https://github.com/axios/axios.git", author: "Matt Zabriskie", homepage: "https://axios-http.com", dependencyLevel: "production" }, { id: 11, name: "chalk", version: "4.1.2", license: "MIT License (MIT)", repository: "git+https://github.com/chalk/chalk.git", homepage: "https://github.com/chalk/chalk#readme", dependencyLevel: "production" }, { id: 12, name: "checksum", version: "1.0.0", license: "MIT License (MIT)", repository: "git://github.com/dshaw/checksum.git", author: "Daniel D. Shaw", homepage: "https://github.com/dshaw/checksum#readme", dependencyLevel: "production" }, { id: 13, name: "chokidar", version: "3.5.3", license: "MIT License (MIT)", repository: "git+https://github.com/paulmillr/chokidar.git", author: "Paul Miller", homepage: "https://github.com/paulmillr/chokidar", dependencyLevel: "production" }, { id: 14, name: "electron-builder", version: "22.14.13", license: "MIT License (MIT)", repository: "git+https://github.com/electron-userland/electron-builder.git", author: "Vladimir Krivosheev", homepage: "https://github.com/electron-userland/electron-builder", dependencyLevel: "production" }, { id: 15, name: "electron-debug", version: "3.2.0", license: "MIT License (MIT)", repository: "git+https://github.com/sindresorhus/electron-debug.git", author: "Sindre Sorhus", homepage: "https://github.com/sindresorhus/electron-debug#readme", dependencyLevel: "production" }, { id: 16, name: "electron-log", version: "4.4.6", license: "MIT License (MIT)", repository: "git+https://github.com/megahertz/electron-log.git", author: "Alexey Prokhorov", homepage: "https://github.com/megahertz/electron-log#readme", dependencyLevel: "production" }, { id: 17, name: "electron-store", version: "8.0.1", license: "MIT License (MIT)", repository: "git+https://github.com/sindresorhus/electron-store.git", author: "Sindre Sorhus", homepage: "https://github.com/sindresorhus/electron-store#readme", dependencyLevel: "production" }, { id: 18, name: "electron-updater", version: "4.6.5", license: "MIT License (MIT)", repository: "git+https://github.com/electron-userland/electron-builder.git", author: "Vladimir Krivosheev", homepage: "https://github.com/electron-userland/electron-builder", dependencyLevel: "production" }, { id: 19, name: "electron", version: "17.1.2", license: "MIT License (MIT)", repository: "git+https://github.com/electron/electron.git", author: "Electron Community", homepage: "https://github.com/electron/electron#readme", dependencyLevel: "production" }, { id: 20, name: "eslint-config-prettier", version: "8.5.0", license: "MIT License (MIT)", repository: "git+https://github.com/prettier/eslint-config-prettier.git", author: "Simon Lydell", homepage: "https://github.com/prettier/eslint-config-prettier#readme", dependencyLevel: "production" }, { id: 21, name: "eslint-friendly-formatter", version: "4.0.1", license: "MIT License (MIT)", repository: "git+https://github.com/royriojas/eslint-friendly-formatter.git", author: "Roy Riojas", homepage: "https://github.com/royriojas/eslint-friendly-formatter#readme", dependencyLevel: "production" }, { id: 22, name: "eslint-loader", version: "4.0.2", license: "MIT License (MIT)", repository: "git+https://github.com/webpack-contrib/eslint-loader.git", author: "Maxime Thirouin", homepage: "https://github.com/webpack-contrib/eslint-loader", dependencyLevel: "production" }, { id: 23, name: "eslint-plugin-prettier", version: "4.0.0", license: "MIT License (MIT)", repository: "git+https://github.com/prettier/eslint-plugin-prettier.git", author: "Teddy Katz", homepage: "https://github.com/prettier/eslint-plugin-prettier#readme", dependencyLevel: "production" }, { id: 24, name: "eslint-plugin-vue", version: "8.5.0", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/eslint-plugin-vue.git", author: "Toru Nagashima", homepage: "https://eslint.vuejs.org", dependencyLevel: "production" }, { id: 25, name: "eslint", version: "7.32.0", license: "MIT License (MIT)", repository: "git+https://github.com/eslint/eslint.git", author: "Nicholas C. Zakas", homepage: "https://eslint.org", dependencyLevel: "production" }, { id: 26, name: "javascript-obfuscator", version: "4.0.0", license: 'BSD 2-Clause "Simplified" License (BSD-2-Clause)', repository: "git+https://github.com/javascript-obfuscator/javascript-obfuscator.git", author: "Timofey Kachalov", homepage: "https://obfuscator.io/", dependencyLevel: "production" }, { id: 27, name: "jsonwebtoken", version: "8.5.1", license: "MIT License (MIT)", repository: "git+https://github.com/auth0/node-jsonwebtoken.git", author: "auth0", homepage: "https://github.com/auth0/node-jsonwebtoken#readme", dependencyLevel: "production" }, { id: 28, name: "lint-staged", version: "12.3.7", license: "MIT License (MIT)", repository: "git+https://github.com/okonet/lint-staged.git", author: "Andrey Okonetchnikov", homepage: "https://github.com/okonet/lint-staged#readme", dependencyLevel: "production" }, { id: 29, name: "minecraft-launcher-core", version: "3.16.12", license: "MIT License (MIT)", repository: "git+https://github.com/Pierce01/MinecraftLauncher-core.git", author: "Pierce Harriz", homepage: "https://github.com/Pierce01/MinecraftLauncher-core#readme", dependencyLevel: "production" }, { id: 30, name: "prettier", version: "2.6.0", license: "MIT License (MIT)", repository: "git+https://github.com/prettier/prettier.git", author: "James Long", homepage: "https://prettier.io", dependencyLevel: "production" }, { id: 31, name: "request", version: "2.88.2", license: "Apache License 2.0 (Apache-2.0)", repository: "git+https://github.com/request/request.git", author: "Mikeal Rogers", homepage: "https://github.com/request/request#readme", dependencyLevel: "production" }, { id: 32, name: "rollup-plugin-obfuscator", version: "0.2.1", license: "Mozilla Public License 2.0 (MPL-2.0)", repository: "git+ssh://git@github.com/getkey/rollup-plugin-obfuscator.git", homepage: "https://github.com/getkey/rollup-plugin-obfuscator#readme", dependencyLevel: "production" }, { id: 33, name: "sass", version: "1.49.9", license: "MIT License (MIT)", repository: "git+https://github.com/sass/dart-sass.git", author: "Natalie Weizenbaum", homepage: "https://github.com/sass/dart-sass", dependencyLevel: "production" }, { id: 34, name: "typescript", version: "4.6.2", license: "Apache License 2.0 (Apache-2.0)", repository: "git+https://github.com/Microsoft/TypeScript.git", author: "Microsoft Corp.", homepage: "https://www.typescriptlang.org/", dependencyLevel: "production" }, { id: 35, name: "vite", version: "2.8.6", license: "MIT License (MIT)", repository: "git+https://github.com/vitejs/vite.git", author: "Evan You", homepage: "https://github.com/vitejs/vite/tree/main/#readme", dependencyLevel: "production" }, { id: 36, name: "vue-router", version: "4.0.14", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/router.git", homepage: "https://github.com/vuejs/router#readme", dependencyLevel: "production" }, { id: 37, name: "vue", version: "3.2.31", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/core.git", author: "Evan You", homepage: "https://github.com/vuejs/core/tree/main/packages/vue#readme", dependencyLevel: "production" }, { id: 38, name: "vuex", version: "4.0.2", license: "MIT License (MIT)", repository: "git+https://github.com/vuejs/vuex.git", author: "Evan You", homepage: "https://github.com/vuejs/vuex#readme", dependencyLevel: "production" }];
const p0 = G({ name: "PlayCircleIcon" }),
    h0 = { xmlns: "http://www.w3.org/2000/svg", width: "24.445", height: "24.444", viewBox: "0 0 24.445 24.444" },
    m0 = m("g", { id: "Groupe_974", "data-name": "Groupe 974", transform: "translate(-8298.385 -17321.995)" }, [m("path", { id: "Trac\xE9_1771", "data-name": "Trac\xE9 1771", d: "M56.831,27.439A12.222,12.222,0,1,1,69.054,15.217,12.236,12.236,0,0,1,56.831,27.439m0-22.444A10.222,10.222,0,1,0,67.054,15.217,10.233,10.233,0,0,0,56.831,4.995", transform: "translate(8253.776 17319)", fill: "#fff" }), m("path", { id: "Trac\xE9_1772", "data-name": "Trac\xE9 1772", d: "M54.258,21.359V9.076l7.069,6.141Zm2-7.9v3.509l2.021-1.755Z", transform: "translate(8253.776 17319)", fill: "#fff" })], -1),
    g0 = [m0];

function _0(e, t, n, o, s, i) { return v(), I("svg", h0, g0) }
var v0 = j(p0, [
    ["render", _0]
]);
const y0 = G({ name: "RAMIcon" }),
    b0 = { id: "Groupe_973", "data-name": "Groupe 973", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "42.37", height: "25.18", viewBox: "0 0 42.37 25.18" },
    w0 = Sn('<defs><clipPath id="clip-path"><rect id="Rectangle_479" data-name="Rectangle 479" width="42.37" height="25.18" transform="translate(0 0)" fill="#fff"></rect></clipPath></defs><g id="Groupe_972" data-name="Groupe 972" clip-path="url(#clip-path)"><path id="Trac\xE9_1766" data-name="Trac\xE9 1766" d="M42.37,7.18V0H0V7.18a2.667,2.667,0,0,1,2,.9,2.673,2.673,0,0,1,0,3.54,2.667,2.667,0,0,1-2,.9V19.7H2.01v5.48H15.3V21.09a1.39,1.39,0,0,1,2.78,0v4.09H40.37V19.7h2V12.52a2.67,2.67,0,0,1,0-5.34M13.3,21.09v2.09H4.01V19.7H13.6a3.364,3.364,0,0,0-.3,1.39m25.07,2.09H20.08V21.09a3.364,3.364,0,0,0-.3-1.39H38.37Zm2-9.12V17.7H2V14.06A4.654,4.654,0,0,0,2,5.64V2H40.37V5.64a4.662,4.662,0,0,0,0,8.42" fill="#fff"></path><path id="Trac\xE9_1767" data-name="Trac\xE9 1767" d="M26.71,14.62h7.55V5.08H26.71Zm5.55-2H28.71V7.08h3.55Z" fill="#fff"></path><path id="Trac\xE9_1768" data-name="Trac\xE9 1768" d="M17.41,14.62h7.56V5.08H17.41Zm5.56-2H19.41V7.08h3.56Z" fill="#fff"></path><path id="Trac\xE9_1769" data-name="Trac\xE9 1769" d="M8.11,14.62h7.56V5.08H8.11Zm5.56-2H10.11V7.08h3.56Z" fill="#fff"></path></g>', 2),
    $0 = [w0];

function I0(e, t, n, o, s, i) { return v(), I("svg", b0, $0) }
var E0 = j(y0, [
    ["render", I0]
]);
const C0 = G({ name: "ScreenIcon" }),
    M0 = { xmlns: "http://www.w3.org/2000/svg", width: "36.518", height: "26.124", viewBox: "0 0 36.518 26.124" },
    T0 = m("path", { id: "Trac\xE9_1770", "data-name": "Trac\xE9 1770", d: "M2,4.653H34.519V22.719H2Zm-2-2V24.718H17.26v2.059H4.627v2H31.892v-2H19.26V24.718H36.518V2.653Z", transform: "translate(0 -2.653)", fill: "#fff" }, null, -1),
    A0 = [T0];

function x0(e, t, n, o, s, i) { return v(), I("svg", M0, A0) }
var L0 = j(C0, [
    ["render", x0]
]);
const S0 = G({ name: "JavaIcon" }),
    k0 = { xmlns: "http://www.w3.org/2000/svg", width: "24.809", height: "32.428", viewBox: "0 0 24.809 32.428" },
    P0 = Sn('<g id="Groupe_975" data-name="Groupe 975" transform="translate(-8330.154 -17319)"><path id="Trac\xE9_1773" data-name="Trac\xE9 1773" d="M97.117,14.638v-2.07H78.077v10.65a5.525,5.525,0,0,0,5.52,5.52h8a5.516,5.516,0,0,0,5.34-4.14,5.062,5.062,0,0,0,.18-9.96m-5.52,12.1h-8a3.525,3.525,0,0,1-3.52-3.52v-8.65h15.04v8.65a3.693,3.693,0,0,1-.24,1.29,3.539,3.539,0,0,1-3.28,2.23m5.52-4.24v-5.79a3.059,3.059,0,0,1,0,5.79" transform="translate(8253.776 17319)" fill="#fff"></path><path id="Trac\xE9_1774" data-name="Trac\xE9 1774" d="M87.383,11.226l-1.852-.757L86.8,7.356,85.377,3.864,86.959,0l1.852.758L87.537,3.865l1.428,3.491Z" transform="translate(8253.776 17319)" fill="#fff"></path><path id="Trac\xE9_1775" data-name="Trac\xE9 1775" d="M90.591,9.838l-1.734-.995L90,6.854,88.57,4.367l1.713-2.98,1.735,1L90.877,4.368,92.3,6.854Z" transform="translate(8253.776 17319)" fill="#fff"></path><rect id="Rectangle_480" data-name="Rectangle 480" width="22.441" height="2" transform="translate(8330.154 17349.428)" fill="#fff"></rect></g>', 1),
    R0 = [P0];

function O0(e, t, n, o, s, i) { return v(), I("svg", k0, R0) }
var N0 = j(S0, [
    ["render", O0]
]);
const V0 = G({ name: "LegalIcon" }),
    H0 = { id: "Legal", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 39.039 37.29" },
    B0 = m("path", { id: "Trac\xE9_1792", "data-name": "Trac\xE9 1792", d: "M2.827,31.113,16.97,16.97l1.454,1.454,1.453,1.453L5.734,34.019ZM26.28,23.451l6.52-6.52,1.219,1.218L27.5,24.671Zm-2.711-2.71,6.521-6.52,1.3,1.3-6.52,6.52ZM25.456,6.757,26.922,5.29l4.634,4.635L30.09,11.391ZM19.837,17.01,16.97,14.143,12.177,9.349,18.7,2.828l9.978,9.978-6.521,6.521ZM18.7,0,9.348,9.349l6.208,6.208L0,31.113l5.734,5.734L21.291,21.291,27.5,27.5l9.349-9.35L31.5,12.806l2.88-2.881L26.922,2.462,24.041,5.343Z", fill: "#fff" }, null, -1),
    F0 = m("rect", { id: "Rectangle_495", "data-name": "Rectangle 495", width: "21.631", height: "2", transform: "translate(17.408 35.29)", fill: "#fff" }, null, -1),
    j0 = [B0, F0];

function U0(e, t, n, o, s, i) { return v(), I("svg", H0, j0) }
var D0 = j(V0, [
    ["render", U0]
]);
const z0 = G({ name: "ResolutionIcon" }),
    G0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 34.09 34.1" },
    Z0 = m("g", { id: "screen", transform: "translate(0 0)" }, [m("path", { id: "Trac\xE9_1785", "data-name": "Trac\xE9 1785", d: "M2,30.68V24.67H0V34.1H9.421v-2H3.41l6.011-6.01,1.419-1.42.58-.58,1.42-1.42,1.17-1.17L12.6,20.09Z", fill: "#fff" }), m("path", { id: "Trac\xE9_1786", "data-name": "Trac\xE9 1786", d: "M24.67,0V2h6.01l-9.43,9.43-1.7,1.71,1.41,1.41,1.71-1.71,1.41-1.41.59-.59,1.41-1.41,6.011-6.01V9.43h2V0Z", fill: "#fff" })], -1),
    K0 = [Z0];

function W0(e, t, n, o, s, i) { return v(), I("svg", G0, K0) }
var q0 = j(z0, [
    ["render", W0]
]);
const J0 = G({ name: "WindowsIcon" }),
    Y0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 33.111 33.111" },
    Q0 = m("path", { id: "windows", d: "M2,26.816V19.383h9.452v8.743ZM0,17.384V28.557l13.451,1.866V17.384Zm17.289,11.5-.151-9.5H31.111V30.812Zm-2.183-11.5.211,13.244,17.794,2.483V17.384ZM2,6.5,11.452,5.2v8.742H2ZM0,4.758V15.936H13.451V2.9Zm17.106-.345,14-2.092V13.728h-14ZM33.111,0,15.106,2.689V15.728H33.111Z", fill: "#fff" }, null, -1),
    X0 = [Q0];

function eg(e, t, n, o, s, i) { return v(), I("svg", Y0, X0) }
var tg = j(J0, [
    ["render", eg]
]);
const ng = G({ name: "ArrowDownIcon" }),
    og = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 13.867 8.667" },
    sg = m("g", { transform: "translate(7.695 -0.858)" }, [m("path", { d: "M9,21.277l1.733-1.733,5.2,5.2,5.2-5.2,1.735,1.733-6.934,6.934Z", transform: "translate(-16.695 -18.686)" })], -1),
    ig = [sg];

function rg(e, t, n, o, s, i) { return v(), I("svg", og, ig) }
var ag = j(ng, [
    ["render", rg]
]);
const lg = G({ name: "ExpanderComponent", components: { ArrowDownIcon: ag }, props: { name: String, description: String }, data() { return { isExpanded: !1 } } }),
    cg = { class: "expander" },
    ug = { class: "icon" },
    dg = { key: 0, class: "expander-content" };

function fg(e, t, n, o, s, i) { const r = H("ArrowDownIcon"); return v(), I("div", cg, [m("div", { class: "expander-header", onClick: t[0] || (t[0] = a => e.isExpanded = !e.isExpanded) }, [m("div", ug, [$t(e.$slots, "icon", {}, void 0, !0)]), m("div", null, [m("h4", null, re(e.name), 1), m("p", null, re(e.description), 1)]), T(r, { class: "arrow-icon" })]), e.isExpanded ? (v(), I("div", dg, [$t(e.$slots, "default", {}, void 0, !0)])) : ue("", !0)]) }
var pg = j(lg, [
    ["render", fg],
    ["__scopeId", "data-v-68341630"]
]);
const hg = G({ name: "ToggleComponent", props: { value: Boolean } }),
    mg = e => (Et("data-v-7eaa931d"), e = e(), Ct(), e),
    gg = { class: "toggle" },
    _g = ["checked"],
    vg = mg(() => m("span", { class: "toggle-style" }, null, -1));

function yg(e, t, n, o, s, i) { return v(), I("label", gg, [m("input", { type: "checkbox", name: "toggle", checked: e.value, onChange: t[0] || (t[0] = r => e.$emit("change", r)) }, null, 40, _g), vg]) }
var Na = j(hg, [
    ["render", yg],
    ["__scopeId", "data-v-7eaa931d"]
]);
const bg = G({ name: "BigToggle", components: { Toggle: Na }, props: { name: String, description: String, checked: Boolean } }),
    wg = { class: "big-toggle" },
    $g = { class: "big-toggle-header" },
    Ig = { class: "icon" },
    Eg = { class: "big-toggle-btn" };

function Cg(e, t, n, o, s, i) { const r = H("Toggle"); return v(), I("div", wg, [m("div", $g, [m("div", Ig, [$t(e.$slots, "icon", {}, void 0, !0)]), m("div", null, [m("h4", null, re(e.name), 1), m("p", null, re(e.description), 1)]), m("div", Eg, [T(r, { value: e.checked }, null, 8, ["value"])])])]) }
var Mg = j(bg, [
    ["render", Cg],
    ["__scopeId", "data-v-44b68000"]
]);
const Tg = { name: "LogoutIcon" },
    Ag = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23.41 16.542" },
    xg = m("path", { d: "M25.435,9.123l1.916,1.8H19.057v1.312h8.287l-1.909,1.791.9.959L29.083,12.4l.879-.827-.879-.827L26.334,8.165Z", transform: "translate(-6.552 -2.807)", fill: "#f63737" }, null, -1),
    Lg = m("path", { d: "M7.349,7.848H9.194V9.685H7.349ZM0,0V16.542H16.542V10.965H15.23V15.23H11.752V1.312H15.23V6.562h1.312V0Z", fill: "#f63737" }, null, -1),
    Sg = [xg, Lg];

function kg(e, t, n, o, s, i) { return v(), I("svg", Ag, Sg) }
var Pg = j(Tg, [
    ["render", kg]
]);
const Rg = { name: "UserCard", components: { LogoutIcon: Pg }, props: { name: String, skinUrl: String, description: String, active: Boolean }, methods: { changeAccount() { lf(this.name) }, logoutUser() { cf(this.name) } } },
    Og = { class: "user-card-header" },
    Ng = { class: "user-card-btn" };

function Vg(e, t, n, o, s, i) { const r = H("LogoutIcon"); return v(), I("div", { onClick: t[1] || (t[1] = (...a) => i.changeAccount && i.changeAccount(...a)), class: nt(`user-card ${n.active?"active":""}`) }, [m("div", Og, [m("div", { class: "avatar", style: Fe(`background-image: url('${n.skinUrl}')`) }, null, 4), m("div", null, [m("h4", null, re(n.name), 1), m("p", null, re(n.description), 1)]), m("div", Ng, [m("button", { type: "button", onClick: t[0] || (t[0] = hu((...a) => i.logoutUser && i.logoutUser(...a), ["stop"])) }, [T(r)])])])], 2) }
var Hg = j(Rg, [
    ["render", Vg],
    ["__scopeId", "data-v-3dc73f09"]
]);

function Bg(e) { var t = this,
        n = 0,
        o = 0,
        s = document.getElementById(e),
        i = s.querySelector(".slider-touch-left"),
        r = s.querySelector(".slider-touch-right"),
        a = s.querySelector(".slider-line span"),
        l = parseFloat(s.getAttribute("se-min")),
        u = parseFloat(s.getAttribute("se-max")),
        c = l;
    s.hasAttribute("se-min-value") && (c = parseFloat(s.getAttribute("se-min-value"))); var f = u;
    s.hasAttribute("se-max-value") && (f = parseFloat(s.getAttribute("se-max-value"))), c < l && (c = l), f > u && (f = u), c > f && (c = f); var p = 0;
    s.getAttribute("se-step") && (p = Math.abs(parseFloat(s.getAttribute("se-step")))); var _ = 26;
    t.slider = s, t.reset = function() { i.style.left = "0px", r.style.left = s.offsetWidth - i.offsetWidth + "px", a.style.marginLeft = "0px", a.style.width = s.offsetWidth - i.offsetWidth + "px", n = 0, o = 0 }, t.setMinValue = function(Z) { var J = (Z - l) / (u - l);
        i.style.left = Math.ceil(J * (s.offsetWidth - (i.offsetWidth + _))) + "px", a.style.marginLeft = i.offsetLeft + "px", a.style.width = r.offsetLeft - i.offsetLeft + "px", s.setAttribute("se-min-value", Z) }, t.setMaxValue = function(Z) { var J = (Z - l) / (u - l);
        r.style.left = Math.ceil(J * (s.offsetWidth - (i.offsetWidth + _)) + _) + "px", a.style.marginLeft = i.offsetLeft + "px", a.style.width = r.offsetLeft - i.offsetLeft + "px", s.setAttribute("se-max-value", Z) }, t.reset(); var E = s.offsetWidth - r.offsetWidth,
        k = null,
        P = a.offsetWidth - _;
    t.setMinValue(c), t.setMaxValue(f);

    function S(Z) { Z.preventDefault(); var J = Z;
        Z.touches && (J = Z.touches[0]), this === i ? o = i.offsetLeft : o = r.offsetLeft, n = J.pageX - o, k = this, document.addEventListener("mousemove", B), document.addEventListener("mouseup", q), document.addEventListener("touchmove", B), document.addEventListener("touchend", q) }

    function B(Z) { var J = Z; if (Z.touches && (J = Z.touches[0]), o = J.pageX - n, k === i ? (o > r.offsetLeft - k.offsetWidth + 10 ? o = r.offsetLeft - k.offsetWidth + 10 : o < 0 && (o = 0), k.style.left = o + "px") : k === r && (o < i.offsetLeft + i.offsetWidth - 10 ? o = i.offsetLeft + i.offsetWidth - 10 : o > E && (o = E), k.style.left = o + "px"), a.style.marginLeft = i.offsetLeft + "px", a.style.width = r.offsetLeft - i.offsetLeft + "px", Q(), s.getAttribute("on-change")) { var se = new Function("min, max", s.getAttribute("on-change"));
            se(s.getAttribute("se-min-value"), s.getAttribute("se-max-value")) }
        t.onChange && t.onChange(s.getAttribute("se-min-value"), s.getAttribute("se-max-value")) }

    function q() { if (document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", q), document.removeEventListener("touchmove", B), document.removeEventListener("touchend", q), k = null, Q(), s.getAttribute("did-changed")) { var Z = new Function("min, max", s.getAttribute("did-changed"));
            Z(s.getAttribute("se-min-value"), s.getAttribute("se-max-value")) }
        t.didChanged && t.didChanged(s.getAttribute("se-min-value"), s.getAttribute("se-max-value")) }

    function Q() { var Z = (a.offsetWidth - _) / P,
            J = a.offsetLeft / P,
            se = J + Z; if (J = J * (u - l) + l, se = se * (u - l) + l, p !== 0) { var z = Math.floor(J / p);
            J = p * z, z = Math.floor(se / p), se = p * z }
        s.setAttribute("se-min-value", J), s.setAttribute("se-max-value", se) }
    i.addEventListener("mousedown", S), r.addEventListener("mousedown", S), i.addEventListener("touchstart", S), r.addEventListener("touchstart", S) }
const Fg = { name: "DoubleSliderComponent", props: { id: { type: String, default: Date.now() }, minThreshold: { type: Number, default: -100 }, maxThreshold: { type: Number, default: 100 }, step: { type: Number, default: 1 }, min: { type: Number, required: !0 }, max: { type: Number, required: !0 } }, data: function() { return { instance: void 0 } }, mounted: function() { this.instance = new Bg("double-slider-" + this.id), this.instance.onChange = (e, t) => this.updateValues(e, t) }, methods: { updateValues: function(e, t) { this.$emit("update:min", e), this.$emit("update:max", t), this.$emit("change") } } },
    Vs = e => (Et("data-v-653dc45d"), e = e(), Ct(), e),
    jg = { class: "content" },
    Ug = ["id", "se-min", "se-step", "se-min-value", "se-max-value", "se-max"],
    Dg = { class: "slider-touch-left" },
    zg = { class: "slider-touch-indicator" },
    Gg = Vs(() => m("span", null, null, -1)),
    Zg = { class: "slider-touch-right" },
    Kg = { class: "slider-touch-indicator" },
    Wg = Vs(() => m("span", null, null, -1)),
    qg = Vs(() => m("div", { class: "slider-line" }, [m("span")], -1));

function Jg(e, t, n, o, s, i) { return v(), I("div", jg, [m("div", { id: `double-slider-${n.id}`, "se-min": n.minThreshold, "se-step": n.step, "se-min-value": n.min, "se-max-value": n.max, "se-max": n.maxThreshold, class: "slider" }, [m("div", Dg, [m("div", zg, re(n.min) + " Go", 1), Gg]), m("div", Zg, [m("div", Kg, re(n.max) + " Go", 1), Wg]), qg], 8, Ug)]) }
var Yg = j(Fg, [
    ["render", Jg],
    ["__scopeId", "data-v-653dc45d"]
]);
const Qg = G({ name: "SettingsModal", components: { PalaLink: Ts, PaladiumIcon: ks, PalanarchyIcon: Ps, ModdedIcon: Rs, MinecraftIcon: Os, HomeIcon: Sa, AvatarIcon: ka, PlayCircleIcon: v0, RAMIcon: E0, ScreenIcon: L0, JavaIcon: N0, LegalIcon: D0, ResolutionIcon: q0, WindowsIcon: tg, XIcon: xa, CogIcon: Ma, Tab: La, Tabs: Ra, Expander: pg, BigToggle: Mg, UserCard: Hg, Toggle: Na, DoubleSlider: Yg }, props: { open: { type: Boolean, default: !1 }, defaultTab: { type: [String, Number], default: 0 } }, emits: ["close"], data() { return { games: Ls, licenses: f0, autoLaunch: !1, launcherMaximizedAtStartup: !1, totalMem: 0, freeMem: 0, gamesJavaPath: [], gamesMem: [], gamesResolution: [], gamesStartInFullscreen: [], gamesLauncherStayOpen: [], version: "", isWindows: !1, accounts: [] } }, computed: { activeGames: function() { return this.games.filter(e => e.visibility) } }, async beforeMount() { this.version = await Ms(), this.autoLaunch = await rf(), this.launcherMaximizedAtStartup = await Qd(), this.totalMem = Math.floor(await kf() / 1024 / 1024 / 1024), this.freeMem = Math.floor(await Pf() / 1024 / 1024 / 1024), this.isWindows = await Ea(), this.accounts = await zi(), zf(async() => { this.accounts = await zi() }), await this.activeGames.forEach(async e => { this.gamesJavaPath.push(await vf(e.id, e.jre)), this.gamesMem.push(await yf(e.id)), this.gamesResolution.push(await bf(e.id)), this.gamesStartInFullscreen.push(await wf(e.id)), this.gamesLauncherStayOpen.push(await $f(e.id)) }) }, methods: { close() { this.$emit("close") }, setLaunchAtStartup(e) { af(e) }, setLauncherMaximizedAtStartup(e) { this.launcherMaximizedAtStartup = e, Xd(e) }, setGameJavaPath(e, t) { Ef(t, this.gamesJavaPath[e]) }, setGameMem(e, t) { Cf(t, this.gamesMem[e].min, this.gamesMem[e].max) }, setGameResolution(e, t) { Mf(t, this.gamesResolution[e].w, this.gamesResolution[e].h) }, setGameStartInFullscreen(e, t, n) { this.gamesStartInFullscreen[e] = n, Tf(t, n) }, setLauncherStayOpen(e, t, n) { this.gamesLauncherStayOpen[e] = n, Af(t, n) }, addAccount() { uf() } } }),
    ut = e => (Et("data-v-1976ccce"), e = e(), Ct(), e),
    Xg = { key: 0, class: "overlay" },
    e_ = { key: 1, class: "center-modal" },
    t_ = { class: "settings-modal" },
    n_ = le(" Param\xE8tres "),
    o_ = le(" Launcher "),
    s_ = { class: "flex", style: { gap: "12px" } },
    i_ = le(" D\xE9marrer en plein \xE9cran "),
    r_ = le(" Conditions g\xE9n\xE9rales de vente: "),
    a_ = le("https://paladium-pvp.fr/pages/cgv"),
    l_ = ut(() => m("br", null, null, -1)),
    c_ = le(" Contrat de licence de l'utilisateur final: "),
    u_ = le("https://paladium-pvp.fr/pages/cluf"),
    d_ = ut(() => m("br", null, null, -1)),
    f_ = ut(() => m("h4", { class: "third-party-licenses-title" }, "Licences tierces", -1)),
    p_ = { class: "third-party-licenses" },
    h_ = ut(() => m("br", null, null, -1)),
    m_ = ut(() => m("p", null, [le(" Plus cette quantit\xE9 est importante, plus votre jeu sera stable et aura de bonne performances."), m("br"), le(" Toutefois, m\xEAme si vous avez beaucoup de RAM disponible sur votre ordinateur, il est inutile d'en allouer une tr\xE8s grande quantit\xE9. ")], -1)),
    g_ = { class: "memory" },
    __ = { class: "memory-slider" },
    v_ = ut(() => m("div", { class: "memory-slider-recommended" }, "RAM Recommand\xE9e : 2 Go", -1)),
    y_ = { class: "memory-info" },
    b_ = ut(() => m("br", null, null, -1)),
    w_ = ut(() => m("p", null, [le(" Le launcher utilise une version embarqu\xE9e de Java."), m("br"), le(" Cette version est disponible dans le r\xE9pertoire C:/Users/Username/AppData/Roaming/.paladium/runtime/java-runtime-beta/bin/java."), m("br"), le(" Toutefois, vous pouvez sp\xE9cifier votre propre ex\xE9cutable. ")], -1)),
    $_ = { class: "flex", style: { gap: "12px", "margin-top": "20px" } },
    I_ = ["onUpdate:modelValue"],
    E_ = ["onClick"],
    C_ = ut(() => m("p", null, [le(" D\xE9finissez une r\xE9solution personnalis\xE9e ou choisissez-en une dans la liste en fonction de la taille de votre \xE9cran."), m("br"), le(" Vous pouvez aussi faire d\xE9marrer Minecraft automatiquement en plein \xE9cran. ")], -1)),
    M_ = { class: "resolution" },
    T_ = { class: "resolution-data" },
    A_ = ["onUpdate:modelValue", "onChange"],
    x_ = ["onUpdate:modelValue", "onChange"],
    L_ = { class: "resolution-toggle" },
    S_ = le(" D\xE9marrer Minecraft en plein \xE9cran "),
    k_ = { class: "flex", style: { gap: "12px" } },
    P_ = le(" Garder le launcher ouvert apr\xE8s le lancement du jeu "),
    R_ = le(" Comptes "),
    O_ = { class: "accounts-grid" },
    N_ = { class: "version" };

function V_(e, t, n, o, s, i) { const r = H("XIcon"),
        a = H("CogIcon"),
        l = H("HomeIcon"),
        u = H("WindowsIcon"),
        c = H("BigToggle"),
        f = H("ResolutionIcon"),
        p = H("Toggle"),
        _ = H("Expander"),
        E = H("LegalIcon"),
        k = H("PalaLink"),
        P = H("Tab"),
        S = H("RAMIcon"),
        B = H("DoubleSlider"),
        q = H("JavaIcon"),
        Q = H("ScreenIcon"),
        Z = H("PlayCircleIcon"),
        J = H("AvatarIcon"),
        se = H("UserCard"),
        z = H("Tabs"); return v(), be(Wr, { to: "body" }, [e.open ? (v(), I("div", Xg)) : ue("", !0), e.open ? (v(), I("div", e_, [m("div", t_, [m("button", { type: "button", class: "modal-close", onClick: t[0] || (t[0] = (...L) => e.close && e.close(...L)) }, [T(r)]), m("h2", null, [T(a), n_]), T(z, { defaultSelectTab: e.defaultTab }, { default: ne(() => [T(P, { name: "Launcher", "icon-name": "HomeIcon" }, { default: ne(() => [m("h3", null, [T(l), o_]), e.isWindows ? (v(), be(c, { key: 0, name: "D\xE9marrage avec Windows", description: "D\xE9marrer votre launcher en m\xEAme temps que votre ordinateur", checked: e.autoLaunch, onChange: t[1] || (t[1] = L => e.setLaunchAtStartup(L.target.checked)) }, { icon: ne(() => [T(u)]), _: 1 }, 8, ["checked"])) : ue("", !0), T(_, { name: "Taille de l'interface", description: "Choisissez la taille de l'interface launcher" }, { icon: ne(() => [T(f)]), default: ne(() => [m("div", s_, [T(p, { value: e.launcherMaximizedAtStartup, onChange: t[2] || (t[2] = L => e.setLauncherMaximizedAtStartup(L.target.checked)) }, null, 8, ["value"]), i_])]), _: 1 }), T(_, { name: "L\xE9gale" }, { icon: ne(() => [T(E)]), default: ne(() => [m("p", null, [r_, T(k, { href: "https://paladium-pvp.fr/pages/cgv", target: "_blank", rel: "noopener noreferrer" }, { default: ne(() => [a_]), _: 1 }), l_, c_, T(k, { href: "https://paladium-pvp.fr/pages/cluf", target: "_blank", rel: "noopener noreferrer" }, { default: ne(() => [u_]), _: 1 }), d_]), f_, m("div", p_, [(v(!0), I(_e, null, tt(e.licenses, L => (v(), I("div", { key: L.id }, [T(k, { href: L.homepage, target: "_blank", rel: "noopener noreferrer" }, { default: ne(() => [m("h5", null, re(L.name), 1), m("span", null, re(L.version), 1), h_, m("code", null, re(L.author) + " - " + re(L.license), 1)]), _: 2 }, 1032, ["href"])]))), 128))])]), _: 1 })]), _: 1 }), (v(!0), I(_e, null, tt(e.activeGames, (L, K) => (v(), be(P, { key: L.name, id: L.id, name: L.name, "icon-name": L.icon }, { default: ne(() => [m("h3", null, [(v(), be(Qt(L.icon), { style: Fe(`fill: ${L.colors.settingsActiveIcon?L.colors.settingsActiveIcon:L.colors.activeIcon};`) }, null, 8, ["style"])), le(" " + re(L.name), 1)]), T(_, { name: "M\xE9moire RAM", description: `G\xE9rer la quantit\xE9 de RAM que va allouer votre syst\xE8me \xE0 ${L.name}.` }, { icon: ne(() => [T(S)]), default: ne(() => [m_, m("div", g_, [m("div", __, [T(B, { id: L.id, "min-threshold": 2, "max-threshold": e.totalMem, min: parseInt(e.gamesMem[K].min, 10), max: parseInt(e.gamesMem[K].max, 10), onChange: X => e.setGameMem(K, L.id), "onUpdate:min": X => e.gamesMem[K].min = X, "onUpdate:max": X => e.gamesMem[K].max = X }, null, 8, ["id", "max-threshold", "min", "max", "onChange", "onUpdate:min", "onUpdate:max"]), v_]), m("p", y_, [le(" RAM totale sur votre ordinateur : " + re(e.totalMem) + " Go", 1), b_, le(" RAM disponible : " + re(e.freeMem) + " Go ", 1)])])]), _: 2 }, 1032, ["description"]), T(_, { name: "Ex\xE9cutable JAVA", description: `Indiquer \xE0 ${L.name} l'emplacement de l'ex\xE9cutable Java.` }, { icon: ne(() => [T(q)]), default: ne(() => [w_, m("div", $_, [Yt(m("input", { "onUpdate:modelValue": X => e.gamesJavaPath[K] = X, class: "flex-grow", type: "text" }, null, 8, I_), [
                    [Io, e.gamesJavaPath[K]]
                ]), m("button", { type: "button", class: "btn btn-small btn-vertical-center", style: { color: "#ffffff" }, onClick: X => e.setGameJavaPath(K, L.id) }, " Changer ", 8, E_)])]), _: 2 }, 1032, ["description"]), T(_, { name: "R\xE9solution", description: `Modifier la r\xE9solution de votre jeu au lancement de ${L.name}.` }, { icon: ne(() => [T(Q)]), default: ne(() => [C_, m("div", M_, [m("div", T_, [Yt(m("input", { "onUpdate:modelValue": X => e.gamesResolution[K].w = X, type: "number", onChange: X => e.setGameResolution(K, L.id) }, null, 40, A_), [
                    [Io, e.gamesResolution[K].w]
                ]), T(r), Yt(m("input", { "onUpdate:modelValue": X => e.gamesResolution[K].h = X, type: "number", onChange: X => e.setGameResolution(K, L.id) }, null, 40, x_), [
                    [Io, e.gamesResolution[K].h]
                ])]), m("div", L_, [T(p, { value: e.gamesStartInFullscreen[K], onChange: X => e.setGameStartInFullscreen(K, L.id, X.target.checked) }, null, 8, ["value", "onChange"]), S_])])]), _: 2 }, 1032, ["description"]), T(_, { name: "Apr\xE8s le lancement", description: `S\xE9lectionner ce que va faire le launcher apr\xE8s le lancement de ${L.name}.` }, { icon: ne(() => [T(Z)]), default: ne(() => [m("div", k_, [T(p, { value: e.gamesLauncherStayOpen[K], onChange: X => e.setLauncherStayOpen(K, L.id, X.target.checked) }, null, 8, ["value", "onChange"]), P_])]), _: 2 }, 1032, ["description"])]), _: 2 }, 1032, ["id", "name", "icon-name"]))), 128)), T(P, { name: "Comptes", "icon-name": "AvatarIcon" }, { default: ne(() => [m("h3", null, [T(J), R_]), m("div", O_, [(v(!0), I(_e, null, tt(e.accounts, L => (v(), be(se, { key: L.username, name: L.username, skinUrl: L.skinUrl, active: L.username === this.$store.state.username, description: "Compte Microsoft" }, null, 8, ["name", "skinUrl", "active"]))), 128)), m("div", { class: "accounts-grid__add", onClick: t[3] || (t[3] = (...L) => e.addAccount && e.addAccount(...L)) }, " Ajouter un compte ")])]), _: 1 })]), _: 1 }, 8, ["defaultSelectTab"]), m("span", N_, "V" + re(e.version), 1)])])) : ue("", !0)]) }
var H_ = j(Qg, [
    ["render", V_],
    ["__scopeId", "data-v-1976ccce"]
]);
const B_ = G({ name: "DefaultLayout", components: { Titlebar: Ta, Navigation: d0, SettingsModal: H_ }, data() { return { settingsModalIsOpen: !1, settingsModalDefaultTab: "" } }, methods: { openSettingsModal(e) { this.settingsModalIsOpen = !0, this.settingsModalDefaultTab = e } } });

function F_(e, t, n, o, s, i) { const r = H("Titlebar"),
        a = H("Navigation"),
        l = H("router-view"),
        u = H("SettingsModal"); return v(), I(_e, null, [T(r), T(a, { onOpenSettings: t[0] || (t[0] = c => e.openSettingsModal(c)) }), T(l, { onOpenSettings: t[1] || (t[1] = c => e.openSettingsModal(c)) }), T(u, { open: e.settingsModalIsOpen, defaultTab: e.settingsModalDefaultTab, onClose: t[2] || (t[2] = c => e.settingsModalIsOpen = !1) }, null, 8, ["open", "defaultTab"])], 64) }
var j_ = j(B_, [
    ["render", F_]
]);
const U_ = G({ name: "EmptyLayout", components: { Titlebar: Ta } }),
    D_ = { id: "empty" };

function z_(e, t, n, o, s, i) { const r = H("Titlebar"),
        a = H("router-view"); return v(), I("div", D_, [T(r, { resizable: !1 }), T(a)]) }
var G_ = j(U_, [
        ["render", z_],
        ["__scopeId", "data-v-0998b34d"]
    ]),
    Z_ = "./minecraft/background.webp",
    K_ = "./modded/background.webp",
    W_ = "./paladium/background.webp",
    q_ = "./palanarchy/background.webp";
const J_ = G({ name: "App", components: { DefaultLayout: j_, EmptyLayout: G_ }, data() { return { notificationsInterval: null } }, computed: { layout() { return (this.$route.meta.layout || "default") + "-layout" } }, beforeMount() { this.getNotifs(), this.notificationsInterval = setInterval(() => { this.getNotifs() }, 3e5), Uf(e => { this.$store.commit("setNotifications", e) }), Nf(e => { this.$router.push(e) }), Vf(e => { this.$store.commit("setUsername", e.username), this.$store.commit("setSkinUrl", e.skinUrl) }) }, beforeDestroy() { clearInterval(this.notificationsInterval) }, methods: { async getNotifs() { const e = await xf();
                this.$store.commit("setNotifications", e) } } }),
    Y_ = { id: "app" },
    Q_ = m("img", { alt: "Background", src: Z_, class: "hide" }, null, -1),
    X_ = m("img", { alt: "Background", src: K_, class: "hide" }, null, -1),
    e2 = m("img", { alt: "Background", src: W_, class: "hide" }, null, -1),
    t2 = m("img", { alt: "Background", src: q_, class: "hide" }, null, -1);

function n2(e, t, n, o, s, i) { return v(), I("div", Y_, [Q_, X_, e2, t2, (v(), be(Qt(e.layout)))]) }
var o2 = j(J_, [
    ["render", n2]
]);
const s2 = _u(o2);
s2.use(Gu).use(v1).mount("#app");