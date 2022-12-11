import { Quest } from '../../types'

type QuestViewProps = {
    quest: Quest
}



function QuestView({quest}: QuestViewProps) {
    
    const getDecisions = () => {
        console.log(quest.decisions)
        
        return Object.values(quest.decisions).map((decision) => {
            if (decision !== '') {
                return <li>{decision}</li>
            }
        })
    }

    return (
        <div className='questViewWrapper'>
            <div className='questHeader'>
                {quest.name}
            </div>
            <ul className='decisions'>
                {getDecisions()}
            </ul>
        </div>
    )
}

export default QuestView