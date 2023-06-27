import React from 'react'

const MeetContext = React.createContext({
  names: '',
  topics: '',
  updateDetails: () => {},
})

export default MeetContext
