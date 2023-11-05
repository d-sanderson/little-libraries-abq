# Example little library app with the htmx hono hyperleaflet and cloudflare d1 storage

![image](https://github.com/d-sanderson/little-libraries-abq/assets/43357044/24646426-327a-4a38-8ba4-7142c7060225)


- [hono.dev](https://hono.dev) provides a familiar express style router and jsx
- [htmx.org](https://htmx.org) powers ajax partial html fetching

## Todo example app

This demo is built to deploy to Cloudflare Workers and uses the Cloudflare D1 SQLite db.

## Setup

Install wrangler:

```
npm install -g wrangler
```

Setup `wrangler.toml` file:

```
cp wrangler.toml.example wrangler.toml
```

Setup a Cloudflare D1 sqlite database:

```
wrangler d1 create htmljs-todo-example --experimental-backend
```

Copy the ouput starting `[[d1_databases]]` to the end of your `wrangler.toml` file.

Load db with schema an example data:

```
wrangler d1 execute htmljs-todo-example --local --file=./db/schema.sql
```

Install dependencies and run dev server:

```
pnpm install
pnpm run dev
# In sepate terminal run tailwindcss build watcher
pnpm run dev:css
```

```
pnpm run deploy
```
