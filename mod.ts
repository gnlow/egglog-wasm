import { run_program } from "./egglog_demo.ts"

export const run =
(code: string) => {
    const r = run_program(code)
    const { text } = r

    r.free()

    return text
}
