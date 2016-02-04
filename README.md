# meteor-rest-template
A RESTful API template project written in Meteor. Uses `iron:router`

Uses a collection called `Records`, as defined [here](https://github.com/j6k4m8/meteor-rest-template/blob/master/restful-template.js#L1).

| Endpoint | Parameters | Description |
|----------|------------|-------------|
| <kbd>/api/get/all</kbd> | None | Returns a JSON array of every record in the collection |
| <kbd>/api/get/single</kbd> | JSON dictionary containing the key `_id`. e.g. `{ _id: 4, text: "all but _id is ignored" }` | Returns a JSON dictionary of a single item with the specified `_id`. |
| <kbd>/api/get/creator</kbd> | JSON dictionary containing the key `creator`. e.g. `{ creator: 'Jordan' }` | A JSON array of every item in the collection whose `creator` field is set to that of the request body. |
| <kbd>/api/post</kbd> | Any JSON object. e.g. `{ name: "meteor-rest-template", creator: "j6k4m8", awesomeness: 11 }` | Posts the content of the request body as a new item in the collection. |
