"use strict";
/**
 * Generated by scripts/generatePolyfill/index.js
 * Options:
 *     targetChromiumVersion: "70.0.3538.0"
 *     targetUA: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.0 Safari/537.36"
 *     unrecognizableFeaturesFeatures: "scripts/generatePolyfill/unrecognizableFeatures.json"
 *     flaggableFeatures: [ "Array.from", "Array.isArray", "Array.prototype.copyWithin", "Array.prototype.entries", "Array.prototype.every", "Array.prototype.fill", "Array.prototype.filter", "Array.prototype.find", "Array.prototype.findIndex", "Array.prototype.flat", "Array.prototype.flatMap", "Array.prototype.forEach", "Array.prototype.includes", "Array.prototype.indexOf", "Array.prototype.keys", "Array.prototype.lastIndexOf", "Array.prototype.map", "Array.prototype.reduce", "Array.prototype.reduceRight", "Array.prototype.some", "Array.prototype.sort", "Array.prototype.values", "ArrayBuffer", "ArrayBuffer.isView", "Blob", "DOMTokenList.prototype.forEach", "DOMTokenList.prototype.replace", "DataView", "Date.now", "Date.prototype.toISOString", "DocumentFragment.prototype.append", "DocumentFragment.prototype.prepend", "Element.prototype.after", "Element.prototype.animate", "Element.prototype.append", "Element.prototype.before", "Element.prototype.classList", "Element.prototype.closest", "Element.prototype.matches", "Element.prototype.nextElementSibling", "Element.prototype.prepend", "Element.prototype.remove", "Element.prototype.replaceWith", "Element.prototype.scrollIntoView", "Float32Array", "Float64Array", "Function.prototype.bind", "Function.prototype.name", "Int16Array", "Int32Array", "Int8Array", "IntersectionObserver", "Intl", "Intl.DateTimeFormat", "Intl.ListFormat", "Intl.NumberFormat", "Intl.RelativeTimeFormat", "JSON", "Map", "Math.sign", "Math.trunc", "MutationObserver", "Node.prototype.contains", "NodeList.prototype.forEach", "Number.MAX_SAFE_INTEGER", "Number.MIN_SAFE_INTEGER", "Number.isInteger", "Number.isNaN", "Number.isSafeInteger", "Object.assign", "Object.create", "Object.defineProperties", "Object.defineProperty", "Object.entries", "Object.fromEntries", "Object.getOwnPropertyDescriptor", "Object.getOwnPropertyDescriptors", "Object.getOwnPropertyNames", "Object.getOwnPropertySymbols", "Object.getPrototypeOf", "Object.is", "Object.isExtensible", "Object.keys", "Object.preventExtensions", "Object.setPrototypeOf", "Object.values", "Promise", "Promise.prototype.finally", "Reflect", "Reflect.construct", "Reflect.defineProperty", "Reflect.deleteProperty", "Reflect.has", "Reflect.ownKeys", "RegExp.prototype.flags", "ResizeObserver", "Set", "String.fromCodePoint", "String.prototype.anchor", "String.prototype.codePointAt", "String.prototype.endsWith", "String.prototype.fixed", "String.prototype.includes", "String.prototype.link", "String.prototype.normalize", "String.prototype.padStart", "String.prototype.repeat", "String.prototype.startsWith", "String.prototype.trim", "Symbol", "Symbol.iterator", "Symbol.prototype.description", "Symbol.species", "Symbol.toPrimitive", "URL", "URL.prototype.toJSON", "URLSearchParams", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "XMLHttpRequest", "atob", "console", "console.debug", "console.error", "console.info", "console.log", "console.warn", "document", "fetch", "getComputedStyle", "globalThis", "localStorage", "matchMedia" ]
 */
(() => {
    const script = document.createElement("script");
    script.src = "https://polyfill.alicdn.com/v3/polyfill.js?features=Array.from%2CArray.isArray%2CArray.prototype.copyWithin%2CArray.prototype.entries%2CArray.prototype.every%2CArray.prototype.fill%2CArray.prototype.filter%2CArray.prototype.find%2CArray.prototype.findIndex%2CArray.prototype.flat%2CArray.prototype.flatMap%2CArray.prototype.forEach%2CArray.prototype.includes%2CArray.prototype.indexOf%2CArray.prototype.keys%2CArray.prototype.lastIndexOf%2CArray.prototype.map%2CArray.prototype.reduce%2CArray.prototype.reduceRight%2CArray.prototype.some%2CArray.prototype.sort%2CArray.prototype.values%2CArrayBuffer%2CArrayBuffer.isView%2CBlob%2CDOMTokenList.prototype.forEach%2CDOMTokenList.prototype.replace%2CDataView%2CDate.now%2CDate.prototype.toISOString%2CDocumentFragment.prototype.append%2CDocumentFragment.prototype.prepend%2CElement.prototype.after%2CElement.prototype.animate%2CElement.prototype.append%2CElement.prototype.before%2CElement.prototype.classList%2CElement.prototype.closest%2CElement.prototype.matches%2CElement.prototype.nextElementSibling%2CElement.prototype.prepend%2CElement.prototype.remove%2CElement.prototype.replaceWith%2CElement.prototype.scrollIntoView%2CFloat32Array%2CFloat64Array%2CFunction.prototype.bind%2CFunction.prototype.name%2CInt16Array%2CInt32Array%2CInt8Array%2CIntersectionObserver%2CIntl%2CIntl.DateTimeFormat%2CIntl.ListFormat%2CIntl.NumberFormat%2CIntl.RelativeTimeFormat%2CJSON%2CMap%2CMath.sign%2CMath.trunc%2CMutationObserver%2CNode.prototype.contains%2CNodeList.prototype.forEach%2CNumber.MAX_SAFE_INTEGER%2CNumber.MIN_SAFE_INTEGER%2CNumber.isInteger%2CNumber.isNaN%2CNumber.isSafeInteger%2CObject.assign%2CObject.create%2CObject.defineProperties%2CObject.defineProperty%2CObject.entries%2CObject.fromEntries%2CObject.getOwnPropertyDescriptor%2CObject.getOwnPropertyDescriptors%2CObject.getOwnPropertyNames%2CObject.getOwnPropertySymbols%2CObject.getPrototypeOf%2CObject.is%2CObject.isExtensible%2CObject.keys%2CObject.preventExtensions%2CObject.setPrototypeOf%2CObject.values%2CPromise%2CPromise.prototype.finally%2CReflect%2CReflect.construct%2CReflect.defineProperty%2CReflect.deleteProperty%2CReflect.has%2CReflect.ownKeys%2CRegExp.prototype.flags%2CResizeObserver%2CSet%2CString.fromCodePoint%2CString.prototype.anchor%2CString.prototype.codePointAt%2CString.prototype.endsWith%2CString.prototype.fixed%2CString.prototype.includes%2CString.prototype.link%2CString.prototype.normalize%2CString.prototype.padStart%2CString.prototype.repeat%2CString.prototype.startsWith%2CString.prototype.trim%2CSymbol%2CSymbol.iterator%2CSymbol.prototype.description%2CSymbol.species%2CSymbol.toPrimitive%2CURL%2CURL.prototype.toJSON%2CURLSearchParams%2CUint16Array%2CUint32Array%2CUint8Array%2CUint8ClampedArray%2CWeakMap%2CXMLHttpRequest%2Catob%2Cconsole%2Cconsole.debug%2Cconsole.error%2Cconsole.info%2Cconsole.log%2Cconsole.warn%2Cdocument%2Cfetch%2CgetComputedStyle%2CglobalThis%2ClocalStorage%2CmatchMedia";
    script.async = true;
    const polyfillPromise = new Promise((res) => {
        script.addEventListener("load", () => res(), {
            once: true,
        });
        script.addEventListener("error", () => res(), {
            once: true,
        });
    });
    Object.defineProperty(window, "polyfillPromise", {
        configurable: false,
        enumerable: true,
        writable: false,
        value: polyfillPromise,
    });
})();
