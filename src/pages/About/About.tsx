import  {useContext} from 'react'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import './about.css'

function About() {

    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    setPageView(PageViewType.ABOUT)
    

    return (
        <div className='aboutWrapper'>
            <h2>What's this website all about?</h2>
            <p>Dragon Age World State Manager was created as an alternative to the Dragon Age Keep, providing Dragon Age players with a way to manage custom world states
            that exist outside the canon of the games themselves and are therefore not possible to store in the Keep. For example, say... </p>

            <p>your Warden romanced both Leliana and Morrigan? </p>

            <p>your Hawke defected to the Qun and left for Par Vollen with the Arishok?</p>

            <p>your Inquisitor </p>

            <p>...with this website, you can keep track of all of that! The main quests and most of the side quests for each of the three games have default values according to the canon of the games, but you can type in your own answers for these plot points as well.</p>

            <h2>How can I suggest features or report bugs?</h2>

            <p>This app was developed by one person (me,  <a className="aboutLink" href="https://www.aliriegray.com/" target="_blank" rel="noopener noreferrer">Alirie!</a>) FOR the Dragon Age community, and I'm very appreciative of all of you who help me maintain it by submitting feature requests, bug reports, side quests I've overlooked, and any and all feedback on how I can make this site as useful as possible to you all.</p>

            <p>The best way to make sure I see your feedback is to submit an issue on the <a className="aboutLink" href="https://github.com/AlirieGray/da-state-manager" target="_blank" rel="noopener noreferrer">GitHub repository.</a> I also keep the ReadMe up to date with upcoming features I'm working on.</p>

            <p>Short of that, you can always email me at: <a className="aboutLink" href="mailto:alirie.gray@gmail.com">alirie.gray@gmail.com</a></p>
            
            <h2>Attributions</h2>

            <p>Resources and assets used by this website:</p>

            <a className="aboutLink" href="https://www.flaticon.com/free-icons/question" target="_blank" rel="noopener noreferrer" title="question icons">Question icons created by Freepik - Flaticon</a>
        </div>
    )
}

export default About