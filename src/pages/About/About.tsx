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

            <p>Your Warden romanced both Leliana and Morrigan? </p>

            <p>Your Hawke defected to the Qun and left Kirkwall with the Arishok?</p>

            <p>Your Inquisitor is a vampire Aeducan princess?</p>

            <p>...with this website, you can keep track of all of that!</p>

            <h2>How can I suggest features or report bugs?</h2>

            <p>This app was developed by one person (me, <a href="https://www.aliriegray.com/">Alirie!</a>) FOR the Dragon Age community, and I'm very appreciative of all of you who help me maintain it by submitting feature requests, bug reports, any and all feedback on how I can make this site as useful as possible to you all.</p>

            <p>The best way to make sure I see your feedback is to submit an issue on the <a href="https://github.com/AlirieGray/da-state-manager">GitHub repository.</a> I also keep the ReadMe up to date with upcoming features I'm working on.</p>

            <p>Short of that, you can also email me at: <a href="mailto:alirie.gray@gmail.com">alirie.gray@gmail.com</a></p>
            
            <h2>Attributions</h2>

            <p>Resources and assets used by this website:</p>

            <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</a>
        </div>
    )
}

export default About