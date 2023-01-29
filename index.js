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

function main () {
  const result=[];
  people.forEach(person => {
    if (! person.parentId) {
      res.push({...person, children: []});
    }  
    else {
      children = findParentInArray(res, person.parentId, person.name, person); // ??
      if (children) 
        children.push({...person, children: []});
    }
  });
  console.log("result=", result);
}


function findParentInArray(arrayOfParents, parentId, name, person) {
  console.log("run findParentInArray for id/name ", parentId, name);
  arrayOfParents.forEach (mayBeFather => {
    if (mayBeFather.id === parentId) {
      console.log("found mayBeFather, person=", mayBeFather);
      console.log("for sun/daughter with id=", parentId);
      mayBeFather.children.push({...person, children: []});
      return true;
    }
    else
      findParentInArray(mayBeFather.children, parentId, name, person); 
  });
}
