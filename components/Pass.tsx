import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Pass from 'yup'

const PasswordSchema = Pass.object().shape({
  passwordLength: Pass.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be min of 4 characters')
    .required('Length is required')
})

const [password, setpassword] = useState('')
const [isPassGenerated, setIsPassGenerated] = useState(false)

const [lowerCase, setLowerCase] = useState (true)
const [upperCase, setUpperCase] = useState (false)
const [numbers, setNumbers] = useState (false)
const [symbols, setsymbols] = useState (false)


const generatePasswordString = (passwordLength : number) => {
  let characterList = '';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const digitChars = '0123456789';
  const specialChars = '!@#$%^&*()_+'

  if(upperCase) {
    characterList += upperCase
  }

  if(lowerCase) {
    characterList += lowerCase
  }

  if(numbers) {
    characterList += numbers
  }

  if(symbols) {
    characterList += symbols
  }

  const passwordResult = createPassword (characterList, passwordLength)

  setpassword(passwordResult)
  setIsPassGenerated(true)
  
}

const createPassword = (characters: string, passwordLength: number) => {
  
  let result = ''
  for (let i=0; i<passwordLength; i++){
    const characterIndex = Math.round(Math.random() * characters.length)
    result += characters.charAt(characterIndex)
  }
  return result
}

const resetPasswordState = ( ) => {
  setpassword('')
  setIsPassGenerated(false)
  setLowerCase(true)
  setUpperCase(false)
  setNumbers(false)

}

export default function Pass() {
  return (
    <View>
      <Text>Pass</Text>
    </View>
  )
}

const styles = StyleSheet.create({})