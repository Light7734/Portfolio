import * as React from "react"
import Layout from '../components/layout'
import Social from '../components/social'
import Tab from '../components/tab'
import * as style from '../styles/about.module.scss'


export default function About() {

    const Specs = [
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>,
        <p>
            AWrkljWAE:Tkljawlok tj oalwjtboawijoaWejbapowrtJ WATpboaiwtpaowijrPOAWIjer
            oawejtbawpeotjaweptboahweptboahwetpoaiwhetbopbaiwetbawet
            awetba;weoltjbawpetoibjaweptoijbawetpo;bijawet
            awetbaoweitjbaowiethjbawet
        </p>,

    ];

    const SpecsTabs = [
        <h1> Lina </h1>,
        <h1> Tresdin </h1>,
    ]

    const Resoureces = [
        <p> Programming resources </p>,
        <p> Art resources </p>,
        <p> Music resources </p>,
    ]

    const ResourecesTabs = [
        <h1> Programming </h1>,
        <h1> Art </h1>,
        <h1> Music </h1>,

    ]

    return (
        <Layout title="About"
            left={
                <div>
                    <div className={style.bio}>
                        <h1> ABOUT </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.

                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.

                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.

                        </p>
                    </div>

                    <div className={style.hseparator}>
                    </div>

                    <div className={style.specs}>
                        <h1> SPECS </h1>
                        <Tab
                            tabs={SpecsTabs}
                            contents={Specs}
                        />
                    </div>

                    <div className={style.hseparator}>
                    </div>

                    <div className={style.resources}>
                        <h1> RESOURCES </h1>
                        <Tab
                            tabs={ResourecesTabs}
                            contents={Resoureces}
                        />
                    </div>

                </div>
            }
            right={
                <div>
                    <div className={style.socials}>
                        <Social caption={"TWITTER"} />
                    </div>
                </div>
            }
        />
    )

}
