const body = document.getElementsByTagName("body")
const groceryList = document.createElement("div")
append(groceryList)
groceryList.append (groceryHeader)
const groceryHeader = document.createElement("h1")
groceryHeader.textContent = ("groceryList")
const groceryFridge = document.querySelector("h2")
groceryFridge.append(groceryList)
const ul = document.createElement("ul")
const liOne = document.createElement("ul")
liOne.textContent = "Milk"
const liTwo = document.createElement("ul")
liTwo.textContent = "Cheese"
const liThree = document.createElement("ul")
liThree.textContent = "Butter"
ul.append (liOne, liTwo, liThree)
