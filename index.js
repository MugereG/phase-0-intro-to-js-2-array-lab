// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    return cats.push("Ralph")
}
function destructivelyPrependCat() {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    let newCat = [...cats, name]
    return newCat;
}
function prependCat(name1) {
    let otherCat = [name1, ...cats]
    return otherCat;
}
function removeFirstCat() {
    let thisOtherCat = [...cats]
    return thisOtherCat.splice(1);
}
function removeLastCat() {
    let theOtherCat = [...cats]
    return theOtherCat.slice(0, theOtherCat.length - 1);
}