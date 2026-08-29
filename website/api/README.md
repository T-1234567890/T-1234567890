# Hibiscus remote content

`hibiscus.json` is the static remote-content configuration fetched by Hibiscus from:

`https://1234567890.dev/api/hibiscus.json`

Edit that JSON file and redeploy the website to change More Apps or Discord content. No application logic or backend is involved.

## More Apps ranking

- Only entries with `enabled: true` are intended to be displayed.
- Sort enabled entries by `rank` in ascending order: `rank: 1` is the first item, `rank: 2` is the second, and so on.
- Ranking is one-based. Do not use `0` or spaced values such as `10`, `20`, and `30`.
- When entries have the same valid rank, preserve their original array order as the deterministic tie-breaker.
- For backward compatibility, a missing or malformed rank does not invalidate the endpoint. Place that entry after explicitly ranked entries, preserving array order among entries without a valid rank.
- Do not alphabetically reorder entries. Rank controls presentation order only; it does not affect URLs, availability, or app functionality.

Example:

```json
{
  "moreApps": {
    "enabled": true,
    "apps": [
      {
        "id": "musedial",
        "enabled": true,
        "rank": 1
      },
      {
        "id": "fluidgantt",
        "enabled": true,
        "rank": 2
      }
    ]
  }
}
```
