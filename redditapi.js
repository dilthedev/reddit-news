export default {
    search: function(searchTerm, searchLimit, sortBy){
        fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
        .then(res => res.json())
        .then(data => data.data.children.map(data => data.data))
        // .then(data => console.log(data.data.children))
        .catch(err => console.log(err)
        );
    }
}