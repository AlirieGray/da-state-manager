import { World } from './worldTypes'

type OriginsFormActions = 
    | { type: 'SET_ORIGINS_PROTAG_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_ORIGINS_MULTI', payload: {key: string, value: string[]} }
    | { type: 'SET_DAO_COMPANION_ATTR', payload: {key: string, value: string}}
    | { type: 'SET_PROLOGUE_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_LOTHERING_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_REDCLIFFE_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_URN_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_CIRCLE_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_NATURE_OF_THE_BEAST_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_PARAGON_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_LANDSMEET_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_BATTLE_DENERIM_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_AWAKENING_ATTR', payload: {key: string, value: string} }

type DA2FormActions =
    | { type: 'SET_DA2_MULTI', payload: {key: string, value: string[]} }
    | { type: 'SET_DA2_PROTAG_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_ACT_ONE_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_ACT_TWO_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_ACT_THREE_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_MOTA_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_LEGACY_ATTR', payload: {key: string, value: string} }

type InqusitionFormActions = 
    | { type: 'SET_INQ_PROTAG_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_IYHSB_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_IHW_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_COTJ_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_HLTA_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_WEWH_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_WPHW_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_DUATW_ATTR', payload: {key: string, value: string} }
    | { type: 'SET_TRESPASSER_ATTR', payload: {key: string, value: string} }

export type WorldFormAction = 
    | { type: 'SET_WORLD_NAME', payload: string }
    | { type: 'SET_WORLD_SUMMARY', payload: string }
    | { type: 'SET_WORLD_IMG', payload: string }
    | { type: 'SET_WORLD', payload: World }
    | { type: 'SET_ACTIVE_GAME', payload: number}
    | { type: 'CLEAR_FORM' }
    | OriginsFormActions
    | DA2FormActions
    | InqusitionFormActions
