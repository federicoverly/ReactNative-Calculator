import { useState, useRef } from "react"

enum Operators {
    add, substract, multiply, divide
}

export const useCalculator = () => {
 
    const [ prevNumber, setPrevNumb ] = useState('100')
    const [ number, setNumber] = useState('100')

    const lastOperation = useRef<Operators>()

    function clear(){
        setNumber('0')
        setPrevNumb('0')
    }

    function createNumber( numberText : string){

        // If there is decimal point
        if ( number.includes('.') && numberText === '.') return

        // General validation
        if (number.startsWith('0') || (number.startsWith('-0'))) {

            // Decimal point
            if (numberText === '.') {
                setNumber( number + numberText)

            // Evaluate if it is zero and there is a point
            } else if (numberText === '0' && number.includes('.')) {
                setNumber( number + numberText)

            // Number if different than zero and there is no point
            } else if (numberText !== '0' && !number.includes('.')){
                setNumber(numberText)

            // Avoid 000.0
            } else if ( numberText === '0' && !number.includes('.')){
                setNumber(number)
            } else {
                setNumber( number + numberText)
            }
        } else {
            setNumber( number + numberText)
        }       
    }

    function changeNumForPrev (){
        if (number.endsWith('.')){
            setPrevNumb(number.slice(0,-1))
        } else {
            setPrevNumb(number)
        }
        setNumber('0')
    }

    // Delete last number
    function deleteLast(){
        if ( number.length === 2 ){
            if (number.includes('-')) {
            setNumber('0')}
            else {
                setNumber( number.slice(0,-1))
            }
        } else if (number.length === 1 ) {
            setNumber('0')
        } else {
        setNumber( number.slice(0,-1))
        }
    }

    // Change module
    function posNeg(){
        if (number.includes('-')){
            setNumber( number.replace('-',''))
        } else {
            setNumber( '-' + number)
        }
        
    }

    // Divide
    function btnDivide(){
        changeNumForPrev()
        lastOperation.current = Operators.divide
    }

    // Substract
    function btnSubstract(){
        changeNumForPrev()
        lastOperation.current = Operators.substract
    }

    // Add
    function btnAdd(){
        changeNumForPrev()
        lastOperation.current = Operators.add
    }

    // Multiply
    function btnMultiply(){
        changeNumForPrev()
        lastOperation.current = Operators.multiply
    }

    function calculate() {
        const num1 = Number ( number )
        const num2 = Number ( prevNumber )

        switch ( lastOperation.current ) {
            case Operators.add:
                setNumber(`${ num1 + num2 }`)
               break;

            case Operators.substract:
                setNumber(`${num2 - num1}`)
                break
            
            case Operators.multiply:
                setNumber(`${num1 * num2}`)
                break

            case Operators.divide:
                setNumber(`${num2 / num1}`)
                break
        }
        setPrevNumb('0')
    }

        return {
            prevNumber,
            number,
            clear,
            createNumber,
            changeNumForPrev,
            deleteLast,
            posNeg,
            btnAdd,
            btnSubstract,
            btnMultiply,
            btnDivide,
            calculate,
    }
}