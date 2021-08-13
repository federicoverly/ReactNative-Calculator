import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

    const { prevNumber, 
        number, 
        clear, 
        createNumber, 
        changeNumForPrev, 
        btnAdd,
        btnDivide,
        btnSubstract,
        btnMultiply,
        posNeg,
        calculate, 
        deleteLast} = useCalculator()

    return (
        <View style={ styles.calculatorContainer}>
            {
                ( prevNumber !== '0') && 
                <Text style={ styles.smallResult }>{prevNumber}</Text>
            }
            <Text style={ styles.result }
            numberOfLines={1}
            adjustsFontSizeToFit>
                {number}
            </Text>

          <View style={ styles.row}>
              <ButtonCalc text={'C'} color={'#9B9B9B'} action={clear}/>
              <ButtonCalc text={'+/-'} color={'#9B9B9B'} action={posNeg}/>
              <ButtonCalc text={'del'} color={'#9B9B9B'} action={deleteLast}/>
              <ButtonCalc text={'/'} color={'#FF9427'} action={btnDivide}/>
          </View>
          <View style={ styles.row}>
              <ButtonCalc text={'7'} action={createNumber}/>
              <ButtonCalc text={'8'} action={createNumber}/>
              <ButtonCalc text={'9'} action={createNumber}/>
              <ButtonCalc text={'X'} color={'#FF9427'} action={btnMultiply}/>
          </View>
          <View style={ styles.row}>
              <ButtonCalc text={'4'} action={createNumber}/>
              <ButtonCalc text={'5'} action={createNumber}/>
              <ButtonCalc text={'6'} action={createNumber}/>
              <ButtonCalc text={'-'} color={'#FF9427'} action={btnSubstract}/>
          </View>
          <View style={ styles.row}>
              <ButtonCalc text={'1'} action={createNumber}/>
              <ButtonCalc text={'2'} action={createNumber}/>
              <ButtonCalc text={'3'} action={createNumber}/>
              <ButtonCalc text={'+'} color={'#FF9427'} action={btnAdd}/>
          </View>
          <View style={ styles.row}>
              <ButtonCalc text={'0'} width={true} action={createNumber}/>
              <ButtonCalc text={'.'} action={createNumber}/>
              <ButtonCalc text={'='} color={'#FF9427'} action={calculate}/>
          </View>
        </View>
    )
}
