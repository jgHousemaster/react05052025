import React from 'react'
import DebouncedComp from './myCBDebounce'
import BirthdayTable from './BirthdayTable'
import { BirthdayRecord } from '../many_practices'
import BirthdayRecordSolution from '../many_practices/BirthdayRecord/solution'

const Performance = () => {
  return (
    <div>Performance<br/>
    <DebouncedComp />
    <BirthdayTable />
    <BirthdayRecordSolution /></div>
  )
}

export default Performance