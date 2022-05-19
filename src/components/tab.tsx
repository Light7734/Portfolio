import * as React from "react"
import * as style from '../styles/tab.module.scss'

function ShowTab(tabContainerId, tabIds, tabIndex) {
    console.log(tabContainerId);
    var tabContainer = document.getElementById(tabContainerId);
    var tabContents = tabContainer.querySelectorAll(`.${style.tabContent}`);
    var tabButtons = tabContainer.querySelectorAll(`button`);
    var tabButton = document.getElementById(tabIds[tabIndex]);

    console.log(tabIndex);

    tabContents.forEach(function(node) {
        node.style.display = "none";
    });

    tabButtons.forEach(function(node) {
        node.className = style.tabButton;

    });

    tabContents[tabIndex].style.display = "block";
    tabButtons[tabIndex].className = style.tabButtonActive;
}

export default function Tab(props) {

    const tabs = props.tabs;
    const contents = props.contents;
    const id = Math.random();

    const tabIds = tabs.map((tab, index) => Math.random());

    const tabButtons = tabs.map((tab, index) =>
        <button className={index == 0 ? style.tabButtonActive : style.tabButton} id={tabIds[index]} onClick={(event) => ShowTab(id, tabIds, index)}> {tab} </ button >

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
