export const RECEIVE_VIBE = "RECEIVE_VIBE"

const receiveVibe = vibe => (
    {
    type: RECEIVE_VIBE,
    vibe
})

export const fetchVibe = vibe => dispatch => (
    dispatch(receiveVibe(vibe))
)

// s/o Pauly