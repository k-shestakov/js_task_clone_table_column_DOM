"use strict";
// write your code here
const table = document.querySelector("table");
const tableTrs = table.rows;
[
    ...tableTrs
].forEach((tr)=>{
    const dublicateItem = tr.children[1].cloneNode(true);
    tr.children[4].before(dublicateItem);
});

//# sourceMappingURL=index.f75de5e1.js.map
