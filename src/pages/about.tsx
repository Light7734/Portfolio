import * as React from "react";
import Layout from "../components/layout";

import Tab from "../components/tab";
import AboutCard from "../components/aboutCard";

import * as style from "../styles/about.module.scss";
import * as cstyle from "../styles/common.module.scss";

import CodeJSONData from "../learningResources/code.json";
import ArtJSONData from "../learningResources/art.json";
import MusicJSONData from "../learningResources/music.json";

import LinaJSONData from "../specs/lina.json";
import TresdinJSONData from "../specs/tresdin.json";

const About: React.FC = () => {
    const SpecsTabs = [<h2> Lina </h2>, <h2> Tresdin </h2>];
    const ResourecesTabs = [
        <h2> Programming </h2>,
        <h2> Art </h2>,
        <h2> Music </h2>,
    ];

    const Specs = [
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {LinaJSONData.specs.map((data: any) => (
                <tr>
                    <td>
                        <a>
                            <p> {data.category} </p>
                        </a>
                    </td>
                    <td>
                        <a>
                            <p> {data.value} </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>,
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {TresdinJSONData.specs.map((data: any) => (
                <tr>
                    <td>
                        <a>
                            <p> {data.category} </p>
                        </a>
                    </td>
                    <td>
                        <a>
                            <p> {data.value} </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>,
    ];

    const Resoureces = [
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {CodeJSONData.resources.map((data: any) => (
                <tr>
                    <td>
                        <a href={data.url}>
                            <p> {data.category} </p>
                        </a>
                    </td>
                    <td>
                        <a href={data.url}>
                            <p>
                                {data.description}
                                <i className={style.resourcePlatform}>
                                    ({data.platform})
                                </i>
                            </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>,
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {ArtJSONData.resources.map((data: any) => (
                <tr>
                    <td>
                        <a href={data.url}>
                            <p> {data.category} </p>
                        </a>
                    </td>
                    <td>
                        <a href={data.url}>
                            <p>
                                {data.description}
                                <i className={style.resourcePlatform}>
                                    ({data.platform})
                                </i>
                            </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>,
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {MusicJSONData.resources.map((data: any) => (
                <tr>
                    <td>
                        <a href={data.url}>
                            <p> {data.category} </p>
                        </a>
                    </td>
                    <td>
                        <a href={data.url}>
                            <p>
                                {data.description}
                                <i className={style.resourcePlatform}>
                                    ({data.platform})
                                </i>
                            </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>,
    ];

    return (
        <Layout
            title="About"
            navIndex={3}
            left={
                <div className={style.lhs}>
                    <h1> ABOUT ME </h1>
                    <div className={cstyle.separator_horizontal} />
                    <div className={style.section_bio}>
                        <p>
                            Hello there! I'm Light, a game developer who aspires
                            to create great things and be a source of
                            inspiration. <br />
                            I love game development for to make one come to life
                            it requires an arsenal of technical and creative
                            skills, and I have an unhealthy obsession with
                            figuring out how everything works (and probably more
                            game-time than sleep-time). <br />
                            <br />
                            Techincally, I'm interested in:
                            <ul>
                                <li> Game engines </li>
                                <li> Graphics programming </li>
                                <li> C++, Rust, GatbsyJS w/ Typescript </li>
                                <li> Scripting </li>
                                <li> Customization & Automation </li>
                                <li> Linux (the superior OS)</li>
                                <li>
                                    Tinkering around with stuff (and possibly
                                    breaking them beyond repair)
                                </li>
                            </ul>
                            <br />
                            While I still consider coding to be a creative
                            activity, but creatively I'm interested in:
                            <ul>
                                <li> Pixel-art </li>
                                <li> 3D-art </li>
                                <li> Lore & Storytelling </li>
                                <li> Music production & Guitar </li>
                            </ul>
                            <br />I listed some nice learning resources down
                            here hit me up if you want to add to it or just chat
                            with me ^^
                        </p>
                    </div>

                    <div className={style.section_resources}>
                        <h1> LEARNING RESOURCES </h1>
                        <div className={cstyle.separator_horizontal} />
                        <Tab tabs={ResourecesTabs} contents={Resoureces} />
                    </div>

                    <div className={style.section_specs}>
                        <h1> MY SPECS </h1>
                        <div className={cstyle.separator_horizontal} />
                        <Tab tabs={SpecsTabs} contents={Specs} />
                    </div>
                </div>
            }
            right={
                <div>
                    <h1> SOCIAL HANDLES </h1>
                    <div className={cstyle.separator_horizontal} />

                    <div className={style.cards}>
                        <AboutCard
                            title="Github"
                            link="https://github.com/light7734"
                            icon="/icons/github.svg"
                            description="All my code projects"
                        />
                        <AboutCard
                            title="Email"
                            link="mailto:mail@light7734.com"
                            icon="/icons/mail.svg"
                            description="mail@light7734.com"
                        />
                        <AboutCard
                            title="Matrix"
                            link="https://matrix.org"
                            icon="/icons/matrix.svg"
                            description="@light7734:matrix.org"
                        />
                        <AboutCard
                            title="Twitter"
                            link="https://twitter.com/Light7734"
                            icon="/icons/twitter.svg"
                            description="Daily art posts & retweets"
                        />
                        <AboutCard
                            title="Youtube"
                            link="https://www.youtube.com/channel/UCIVFJTiSJsUZYY4XAWQj2jQ"
                            icon="/icons/youtube.svg"
                            description="Devlogs (soon, hopefully)"
                        />
                        <AboutCard
                            title="Pinterest"
                            link="https://www.pinterest.com/Light7734_/_saved/"
                            icon="/icons/pinterest.svg"
                            description="Art references & inspirations"
                        />
                        <AboutCard
                            title="Soundcloud"
                            link="https://soundcloud.com/user-499649814"
                            icon="/icons/soundcloud.svg"
                            description="All my music projects"
                        />
                    </div>

                    <h1> TOOLS OF THE TRADE </h1>
                    <div className={cstyle.separator_horizontal} />
                    <div className={style.cards}>
                        <AboutCard
                            title="Artirx Linux"
                            link="https://artixlinux.org/"
                            icon="/icons/artixbtw.svg"
                            description="Operating system"
                        />
                        <AboutCard
                            title="Neovim"
                            link="https://neovim.io/"
                            icon="/icons/nvim.svg"
                            description="Integrated development environment"
                        />
                        <AboutCard
                            title="C++"
                            link="https://en.cppreference.com/w/"
                            icon="/icons/c++.svg"
                            description="1st & fav language"
                        />
                        <AboutCard
                            title="Rust"
                            link="https://www.rust-lang.org/"
                            icon="/icons/rust.svg"
                            description="Safe and fast language"
                        />
                        <AboutCard
                            title="Vulkan"
                            link="https://www.vulkan.org/"
                            icon="/icons/vulkan.svg"
                            description="Next-gen graphics API"
                        />
                        <AboutCard
                            title="GatsbyJS"
                            link="https://www.gatsbyjs.com/"
                            icon="/icons/gatsby.svg"
                            description="React based framework"
                        />
                        <AboutCard
                            title="Blender"
                            link="https://www.blender.org/"
                            icon="/icons/blender-3d.svg"
                            description="3D-art creation tool"
                        />
                        <AboutCard
                            title="Aseprite"
                            link="https://www.aseprite.org/"
                            icon="/icons/aseprite.svg"
                            description="Pixel-art creation tool"
                        />
                        <AboutCard
                            title="Inkscape"
                            link="https://inkscape.org/"
                            icon="/icons/inkscape.svg"
                            description="Vector-art creation tool"
                        />
                        <AboutCard
                            title="LMMS"
                            link="https://lmms.io/"
                            icon="/icons/lmms.svg"
                            description="Digital audio workstation"
                        />
                    </div>
                </div>
            }
        />
    );
};

export default About;
