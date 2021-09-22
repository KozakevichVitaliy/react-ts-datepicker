import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store'

export const useTypedUseSelector: TypedUseSelectorHook<RootState> = useSelector