import cls from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsItems.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messagesData.map( m => <Message message={m.message}  />)

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={cls.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;