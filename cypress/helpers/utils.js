let faker = require('faker')
const { _ } = Cypress
const dayjs = require('dayjs')
let customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

//==== grep data from cells in table to an array
export const cellsToNamesObjects = (cells) => {
    return _.map(cells, (cell) => {        
        return cell.textContent
    })
} 

//===== check if array of strings is sorted by alphabet
export const stringArrIsSorted = (stringArr, isReverse) =>{
    let sortedStringArr = [...stringArr]
    sortedStringArr.sort((a, b) => {return a.localeCompare(b, 'en', { sensitivity: 'base'})}) 
    isReverse && (sortedStringArr = sortedStringArr.reverse()) 
    
    expect(stringArr,'String array are sorted 📈').to.deep.equal(sortedStringArr)    
}

//===== check if array of numbers is sorted by alphabet
export const numberArrIsSorted = (numberArr, isReverse) =>{
    let sortedNumberArr = [...numberArr]
    sortedNumberArr.sort((a, b) => a - b)            

    isReverse && (sortedNumberArr = sortedNumberArr.reverse())    

    expect(numberArr,'Number array are sorted 📈').to.deep.equal(sortedNumberArr)    
}

//===== check if array of date strings is sorted by alphabet
export const arrIsSortedByDate = (arr, isReverse) =>{    
    // @ts-ignore
    let sortedCells = [...arr].sort((a,b)=>dayjs(b, 'DD/MM/YYYY').isAfter(dayjs(a, 'DD/MM/YYYY')) ? 1 : -1 )
    isReverse && (sortedCells = sortedCells.reverse())    

    expect(arr,'Date cells are sorted 📈').to.deep.equal(sortedCells)
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

export const isDateInFuture = (date,fromDate) => {
    return date.setHours(0,0,0,0) >= fromDate.setHours(0,0,0,0)
}

export const randomDate = (start, end) =>{
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const timeStampToFormatDate = (timestamp, isSec = false) =>{    
    isSec && (timestamp *= 1000)

    return new Date(timestamp).toLocaleDateString('uk')
}

export const stringArrIsSorted = (stringArr, isReverse) =>{
    let sortedStringArr = [...stringArr]
    sortedStringArr.sort((a, b) => a !== b ? a < b ? -1 : 1 : 0)            

    if(isReverse){
        sortedStringArr = sortedStringArr.reverse()
    }

    expect(stringArr,'String array are sorted 📈').to.deep.equal(sortedStringArr)    
}

//** Returns a random number between min (inclusive) and max (inclusive)
export const randomInRange = (min = 0, max = 100) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const replaceValueInArr = (arr, oldVal, newVal) =>{
    arr.forEach((el,i,arr) => { el === oldVal && (arr[i] = newVal) })
}

