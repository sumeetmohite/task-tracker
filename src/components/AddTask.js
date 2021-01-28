import React,{useState} from 'react';

const AddTask = ({onAdd}) => {
    const[text, setText] = useState('');
    const[day, setDay] = useState('');
    const[reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text) {
            alert('Please add a Task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input style={{ fontFamily: 'Kreon',
                    backgroundColor:'#1d2127e1',
                    color:'white',
                    border: '1px solid grey',
                    borderRadius: '3px',
                }}
                type='text' 
                value={text} 
                placeholder='Add Task'
                onChange={
                    (e) => setText(e.target.value)
                } />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input style={{ fontFamily: 'Kreon',
                    backgroundColor:'#1d2127e1',
                    border: '1px solid grey',
                    color:'white',
                    borderRadius:'3px',
                }}
                type='text' 
                placeholder='Add Day & Time'
                value={day}
                onChange={
                    (e) => setDay(e.target.value)
                }/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={
                    (e) => setReminder(e.currentTarget.checked)
                } />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'/>

        </form>
    )
}

export default AddTask
