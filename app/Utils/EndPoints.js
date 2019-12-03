const searchList = (term) =>
 `https://api.yelp.com/v3/businesses/search?location=new%20york&term=${term}`
const searchDetail = (id) =>
`https://api.yelp.com/v3/businesses/${id}`
export { searchList, searchDetail };
