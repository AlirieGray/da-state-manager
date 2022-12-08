import React from 'react'
import {useLocalStorage} from './useLocalStorage'
import {InputAttributes} from '../types'

const useInput = (key: string, initValue: string) => {
    const [value, setValue] = useLocalStorage(key, initValue)

    const resetValue = () => setValue(initValue)

    const inputAttributes: InputAttributes = {
        value,
        onChange: (e: React.FormEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            setValue(target.value)
        }
    }

    return [value, resetValue, inputAttributes] as const
}

export default useInput