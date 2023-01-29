const people = [
  {name: "Ivan", id: 1, parentId: null}, 
  {name: "Sergio", id: 4, parentId: null},  

  {name: "Helen", id: 2, parentId: 1},
  {name: "Danya", id: 8, parentId: 4},

  {name: "Pavel", id: 3, parentId: 2},
  {name: "Olya", id: 5, parentId: 2},
  {name: "Nana", id: 6, parentId: 5},
  {name: "Ira", id: 7, parentId: 6},

  {name: "Alex", id: 9, parentId: 1},
];

const res={};
console.log("start3");
people.forEach(man => {
  console.log("🚀 ~ file: index.js:19 ~ man", man)
  console.log("🚀 ~ file: index.js:30 ~ res", res)
  if (! man.parentId) {
    res[man.id] = man;
    res[man.id].children = [];
  }  
  else {
    if (res[man.parentId]) {
      res[man.parentId].children.push({...man, children: []}); // ??
      console.log("🚀 ~ file: index.js:28 ~ res[man.parentId].children", res[man.parentId].children)
      
    } 
    else {
      parent = findParentInRes(res, man.parentId); // ??
      console.log("🚀 ~ file: index.js:33 ~ parent", parent)
      parent.children.push(man);
    }
  }  
});


function findParentInRes(arrayOfParents, parentId) {
  for (man of arrayOfParents) {
    console.log("🚀 ~ file: index.js:42 ~ findParentInRes ~ man", man)
    if (man.id === parentId)
      return man;
    else
      findParentInRes(man.children, parentId); 
  }
}
