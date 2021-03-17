# @tailwindcss/jit purge issue

Using `@tailwindcss/jit` produces larger production CSS than `tailwindcss` when
using a plugin like `@tailwindcss/forms`.

## Files of interest

### non-JIT (`tailwindcss`)

- [non-jit.css](non-jit.css) - 1.67 kB Next.js estimate (4.8 kB on disk)
- [non-jit.prettier.css](non-jit.prettier.css) (for easier reviewing)

### JIT (`@tailwindcss/jit@0.1.3`)

- [jit.css](jit.css) - 2.19 kB Next.js estimate (7.5 kB on disk)
- [jit.prettier.css](jit.prettier.css) (for easier reviewing)
