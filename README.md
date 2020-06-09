# map-reduce-poc


`npm i`

`sls offline`
or if you're in vscode just press `f5` for debugging (after `npm i`)

---

Here is the outcome of the MapReduce aggregations with dimension support POC. Multiple dimensions (lets say report on specific site and specific learner tag at the same time) at the same time seem a bit more complex but would be possible with the same method, just a few more nested mappings. I am going to keep this where it is at for now until we decide on requirements.

If you're wondering what the `2020010101` format is, its YYYYMMDDHH  where all events get aggregated to hours. Idea is to automate the aggregate* jobs on their respective granularity. This means if you want an annual aggregation you need to input from-/toDate with only the YYYY value. Month would be YYYYMM etc.

I put this in S3 with the folder structure {year}/{month}/{day}/{hour}/ Where any level can have {dimensionKey (could be 'tenant' or 'site' etc}/{dimensionValue (could be 'marriott' or 'front office' etc)}/aggregation.json

Whether that will be the best solution is TBD, the same solution can be achieved with MongoDB. There are benefits and downsides to both.
