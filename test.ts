import { run_program } from "./mod.ts"

const r = run_program("(extract 1)")

console.log(r.text)
r.free()
