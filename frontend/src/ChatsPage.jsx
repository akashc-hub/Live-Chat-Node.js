import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '355dd746-3865-4d00-ad87-3121076fc058', 
        props.user.username, 
        props.user.secret
        );
    return (
    <div style={{height : '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height : '100%'}}/>
    </div>
    )
}

export default ChatsPage


// import { PrettyChatWindow } from 'react-chat-engine-pretty'
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '355dd746-3865-4d00-ad87-3121076fc058', 
//         props.user.username, 
//         props.user.secret
//         );
//     return (
//     <div style={{height : '100vh'}}>
//         <PrettyChatWindow 
//             projectId='355dd746-3865-4d00-ad87-3121076fc058'
//             username='props.user.username'
//             secret='props.user.secret'
//             style={{ height : '100%' }}
//         />
//     </div>
//     )
// }

// export default ChatsPage