import {TextField, TextFieldProps} from '@material-ui/core'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import './app.css'
import {useCallback, useState} from 'react'

type ExampleProps = {
  textFieldProps: TextFieldProps
}

export function App() {
  const [date, setDate] = useState('')

  const textFieldProps: TextFieldProps = {
    value: date,
    onChange: e => setDate(e.target.value),
  }

  return (
    <main>
      <Good textFieldProps={textFieldProps} />
      <Bad textFieldProps={textFieldProps} />
    </main>
  )
}

function Good({textFieldProps}: ExampleProps) {
  return (
    <DayPickerInput
      component={TextField}
      inputProps={{
        ...textFieldProps,
        label: '✅ Good',
      }}
      overlayComponent={CustomOverlay}
      dayPickerProps={{
        todayButton: 'Today',
      }}
    />
  )
}

function Bad({textFieldProps}: ExampleProps) {
  const DayPickerTextInput = useCallback(
    (props: TextFieldProps) => (
      <TextField
        {...props}
        label="❌ Bad"
        value={textFieldProps.value}
        onChange={textFieldProps.onChange}
      />
    ),
    [textFieldProps],
  )

  return (
    <DayPickerInput
      component={DayPickerTextInput}
      overlayComponent={CustomOverlay}
      dayPickerProps={{
        todayButton: 'Today',
      }}
    />
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
