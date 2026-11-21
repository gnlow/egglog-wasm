let wasm: any;

export class Result {
    declare __wbg_ptr: number;
    static __wrap(ptr: number): Result {
        const obj = Object.create(Result.prototype);
        obj.__wbg_ptr = ptr;
        ResultFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw(): number {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ResultFinalization.unregister(this);
        return ptr;
    }
    free(): void {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_result_free(ptr, 0);
    }
    get dot(): string {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_result_dot(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    get json(): string {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_result_json(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    get omitted(): string {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_result_omitted(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    get text(): string {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_result_text(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    set dot(arg0: string) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_result_dot(this.__wbg_ptr, ptr0, len0);
    }
    set json(arg0: string) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_result_json(this.__wbg_ptr, ptr0, len0);
    }
    set omitted(arg0: string) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_result_omitted(this.__wbg_ptr, ptr0, len0);
    }
    set text(arg0: string) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_result_text(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) (Result.prototype as any)[Symbol.dispose] = Result.prototype.free;

export function run_program(input: string): Result {
    const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.run_program(ptr0, len0);
    return Result.__wrap(ret);
}

export function start(): void {
    wasm.start();
}

function log(arg0: string, arg1: string) {
    
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_is_undefined_6cff064c44e0d823: function(arg0: any) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0: number, arg1: number) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_error_757e9472f8410341: function(arg0: number, arg1: number) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_dd408a7b3cb542dd: function(arg0: any) {
            console.error(arg0);
        },
        __wbg_log_0b37cda0b8ab3148: function(arg0: number, arg1: number, arg2: number, arg3: number) {
            log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0: any) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0: any) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0: number, arg1: any) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_c7aea38d4de089bc: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_42d4fae05e59267a: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_e0db14a0eba6a812: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbindgen_cast_0000000000000001: function(arg0: number, arg1: number) {
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./egglog_demo_bg.js": import0,
    };
}

const ResultFinalization: { register: (...args: any[]) => void; unregister: (...args: any[]) => void } = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry((ptr: number) => wasm.__wbg_result_free(ptr, 1));

function addToExternrefTable0(obj: any): number {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

let cachedDataViewMemory0: DataView | null = null;
function getDataViewMemory0(): DataView {
    if (cachedDataViewMemory0 === null || (cachedDataViewMemory0.buffer as ArrayBuffer).detached === true || ((cachedDataViewMemory0.buffer as ArrayBuffer).detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr: number, len: number): string {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0: Uint8Array | null = null;
function getUint8ArrayMemory0(): Uint8Array {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function isLikeNone(x: unknown): x is null | undefined {
    return x === undefined || x === null;
}

function passStringToWasm0(arg: string, malloc: (len: number, align: number) => number, realloc?: (ptr: number, oldLen: number, newLen: number, align: number) => number): number {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
function decodeText(ptr: number, len: number): string {
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    (cachedTextEncoder as any).encodeInto = function (arg: string, view: Uint8Array) {
        const buf = (cachedTextEncoder as TextEncoder).encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule: WebAssembly.Module, wasmInstance: WebAssembly.Instance;
function __wbg_finalize_init(instance: WebAssembly.Instance, module: WebAssembly.Module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

export function initSync(module?: any) {
    if (wasm !== undefined) return wasm;

    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports as unknown as WebAssembly.Imports);
    return __wbg_finalize_init(instance, module);
}

import bytes from "./egglog_demo_bg.wasm" with { type: "bytes" };

initSync({ module: bytes });
