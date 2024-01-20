import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

interface MUIDatePickerProps<TDate> extends DatePickerProps<TDate> { }

const MUIDatePicker = (props) => {
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Basic date picker" slotProps={{ textField: { variant: 'standard', } }} defaultValue={dayjs(new Date())} {...props} />
        </LocalizationProvider>
    )
}

export default MUIDatePicker;