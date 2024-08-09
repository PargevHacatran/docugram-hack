import { Messages, PeopleInfo } from "../blcoks";

export const ChatContent = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <PeopleInfo />
            <Messages />
        </div>
    );
}