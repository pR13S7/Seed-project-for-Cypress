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
export const randomInRange = (min = 0, max = 100) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//=== Date helper functions
export const todayDateString = () =>{
    return new Date().toLocaleDateString('uk')
}

export const randomDate = (start, end) =>{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const timeStampToFormatDate = (timestamp) =>{
    return new Date(timestamp).toLocaleDateString('uk')
}

