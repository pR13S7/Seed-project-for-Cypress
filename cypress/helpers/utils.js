let faker = require('faker')
const { _ } = Cypress

//==== grep data from cells in table to an array
export const cellsToNamesObjects = (cells) => {
    return _.map(cells, (cell) => {        
        return cell.textContent
    })
} 

//===== check if array is sorted by alphabet
export const stringArrIsSorted = (stringArr, isReverse) =>{
    let sortedStringArr = [...stringArr]
    sortedStringArr.sort((a, b) => a !== b ? a < b ? -1 : 1 : 0)            

    if(isReverse){
        sortedStringArr = sortedStringArr.reverse()
    }

    expect(stringArr,'String array are sorted 📈').to.deep.equal(sortedStringArr)    
}

//==== No Operation function to use in callbacks
export const noop = () =>{}

//==== Returns a random number between min (inclusive) and max (inclusive)
export const randomInRange = (edgeA = 0, edgeB = 100) =>{
    edgeA = Math.ceil(edgeA);
    edgeB = Math.floor(edgeB)

    return Math.floor(Math.random() * (edgeA - edgeB + 1)) + edgeA
}