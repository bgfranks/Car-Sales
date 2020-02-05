export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

// ADD_FEATURE

export const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  }
}

// REMOVE_FEATURE

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  }
}
