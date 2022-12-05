import {useLocalStorage} from './useLocalStorage'

const useInput = (key: string, initValue: string) => {
    const [value, setValue] = useLocalStorage(key, initValue)

    const resetUser = () => setValue(initValue)

    const userAttributes = {
        value,
        onChange: (e: React.FormEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            setValue(target.value)
        }
    }

    return [value, resetUser, userAttributes] as const
}

export default useInput