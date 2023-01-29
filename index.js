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

const res=[];
console.log("start6");
people.forEach(man => {

  if (! man.parentId) {
    res.push({...man, children: []});
  }  
  else {
      parent = findParentInRes(res, man.parentId); // ??
      parent.children.push({...man, children: []});
    }
});


function findParentInRes(arrayOfParents, parentId) {
console.log("🚀 ~ file: index.js:33 ~ findParentInRes ~ parentId", parentId)

  for (man of arrayOfParents) {
    console.log("🚀 ~ file: index.js:42 ~ findParentInRes ~ man", man)
    if (man.id === parentId) {
      console.log("found result, man=", man);
      return man;
    }
    else
      findParentInRes(man.children, parentId); 
  }
}
