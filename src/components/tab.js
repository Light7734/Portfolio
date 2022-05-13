import * as React from "react"
import * as style from '../styles/tab.module.scss'

function ShowTab(tabContainerId, tabIndex) {
    console.log(tabContainerId);
    var tabContainer = document.getElementById(tabContainerId);
    var tabContents = tabContainer.querySelectorAll(`.${style.tabContent}`);

    console.log(tabIndex);
    console.log(tabContents.length);
    console.log('---');

    tabContents.forEach(function(node) {
        node.style.display = "none";
    });

    tabContents[tabIndex].style.display = "block";
}

export default function Tab(props) {

    const tabs = props.tabs;
    const contents = props.contents;
    const id = Math.random();

    const tabButtons = tabs.map((tab, index) =>
        <button className={style.tabButton} onClick={(event) => ShowTab(id, index)}> {tab} </ button >

    );

    const tabContent = contents.map((content) =>
        <div className={style.tabContent} on>
            {content}
        </div >
    );

    return (
        <div className={style.tabContainer} id={id}>

            <div className={style.buttonContainer}>
                {tabButtons}
            </div>

            <div className={style.contentContainer}>
                {tabContent}
            </div>
        </div>

    )

}
