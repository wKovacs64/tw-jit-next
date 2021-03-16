# @tailwindcss/jit production issue

Certain arbitrary styles don't seem to work in production builds. They render fine in development mode.

## Example (`grid-cols-`)

```jsx
function Home() {
  return (
    <div className="px-96">
      <main className="grid grid-cols-[1fr,128px] gap-x-4 items-center p-8">
        <div className="bg-blue-400">Big column</div>
        <div className="bg-gray-400">Small column</div>
      </main>
    </div>
  )
}

export default Home;
```

### Development

![Dev Screenshot](dev.png)

### Production

![Prod Screenshot](prod.png)
