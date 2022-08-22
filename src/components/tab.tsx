import * as React from "react"
import * as style from '../styles/tab.module.scss'

interface TabProps {
    tabs: React.ReactNode[];
    contents: React.ReactNode[];
}

const Tab: React.FC<TabProps> = (props) => {

    const [toggleState, setToggleState] = React.useState(0);

    const tabButtons = props.tabs.map((tab: React.ReactNode, index: number) =>
        <button className={[style.button, toggleState === index ? style.buttonActive : ""].join(" ")} onClick={() => setToggleState(index)} > {tab} </button>
    );

    const tabContents = props.contents.map((content: React.ReactNode, index: number) =>
        <div className={[style.content, toggleState === index ? style.contentActive : ""].join(' ')} > {content} </ div >
    );

    const tabCount = tabButtons.length;


    return (
        <div className={style.container}>

            <div className={style.buttonContainer}>
                <button className={style.iterateButton} onClick={() => setToggleState((toggleState === 0) ? tabCount - 1 : toggleState - 1)} > <h1> &lt; </h1> </button>
                {tabButtons}
                <button className={style.iterateButton} onClick={() => setToggleState((toggleState + 1) % tabCount)} >  <h1> &gt; </h1>  </button>
            </div>

            <div className={style.contentContainer}>
                {tabContents}
            </div>

        </div>
    )

}

export default Tab;
