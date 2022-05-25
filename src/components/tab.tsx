import * as React from "react"
import * as style from '../styles/tab.module.scss'

interface TabProps {
    tabs: React.ReactNode[];
    contents: React.ReactNode[];
}

const Tab: React.FC<TabProps> = (props) => {

    const [toggleState, setToggleState] = React.useState(0);

    const tabButtons = props.tabs.map((tab: React.ReactNode, index: number) =>
        <button className={toggleState === index ? style.tabButtonActive : style.tabButton} onClick={() => setToggleState(index)} > {tab} </ button >
    );

    const tabContent = props.contents.map((content: React.ReactNode, index: number) =>
        <div className={toggleState === index ? style.tabContentActive : style.tabContent}>
            {content}
        </div >
    );

    return (
        <div className={style.tabContainer}>

            <div className={style.buttonContainer}>
                {tabButtons}
            </div>

            <div className={style.contentContainer}>
                {tabContent}
            </div>
        </div>

    )
}

export default Tab;
