import * as React from "react"
import * as style from '../styles/tab.module.scss'

export default function Tab(props) {
    const tabs = props.tabs;
    const contents = props.contents;

    const tabButtons = tabs.map((tab) =>
        <button className={style.tabButton}> {tab} </button>

    );

    const tabContent = contents.map((content) =>
        <div className={style.tabContent}>
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
