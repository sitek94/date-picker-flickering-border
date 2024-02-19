import {TextField} from '@material-ui/core'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './app.css'

export function App() {
  return (
    <main>
      <DayPickerInput
        component={TextField}
        inputProps={{
          label: 'Pick a day',
        }}
        overlayComponent={CustomOverlay}
        dayPickerProps={{
          todayButton: 'Today',
        }}
      />
    </main>
  )
}

function CustomOverlay({classNames, selectedDay, children, ...props}: any) {
  return (
    <div
      className={classNames.overlayWrapper}
      style={{marginLeft: -100}}
      {...props}
    >
      <div className={classNames.overlay}>
        <h3>Custom Overlay</h3>
        <p>
          {selectedDay
            ? `You picked: ${selectedDay.toLocaleDateString()}`
            : 'Please pick a day'}
        </p>
        {children}
      </div>
    </div>
  )
}
