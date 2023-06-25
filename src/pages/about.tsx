import * as React from "react";
import Layout from "../components/layout";

import Tab from "../components/tab";
import AboutCard from "../components/aboutCard";

import * as style from "../styles/about.module.scss";
import * as cstyle from "../styles/common.module.scss";

import CodeJSONData from "../learningResources/code.json";
import GeneralLearningJSONData from "../learningResources/general.json";
import ArtJSONData from "../learningResources/art.json";
import MusicJSONData from "../learningResources/music.json";

import LinaJSONData from "../specs/lina.json";
import TresdinJSONData from "../specs/tresdin.json";

const get_specs: React.FC = (json_data: any) => {
    return (
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {json_data.specs.map((data: any) => (
                <tr>
                    <td>
                        <a>
                            <h3> {data.category} </h3>
                            <p> {data.value} </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>
    );
};

const get_learning_resources: React.FC = (json_data: any) => {
    return (
        <table>
            <colgroup>
                <col /> <col />
            </colgroup>
            {json_data.resources.map((data: any) => (
                <tr>
                    <td>
                        <a href={data.url}>
                            <h3>
                                {data.category} ({data.platform})
                            </h3>
                            <p> {data.description}. </p>
                            <p> author: {data.author} </p>
                        </a>
                    </td>
                </tr>
            ))}
        </table>
    );
};

const About: React.FC = () => {
    const SpecsTabs = [<h2> Lina </h2>, <h2> Tresdin </h2>];
    const Specs = [get_specs(LinaJSONData), get_specs(TresdinJSONData)];

    const ResourecesTabs = [
        <h2> Code </h2>,
        <h2> Art </h2>,
        <h2> Music </h2>,
        <h2> General </h2>,
    ];
    const Resoureces = [
        get_learning_resources(CodeJSONData),
        get_learning_resources(ArtJSONData),
        get_learning_resources(MusicJSONData),
        get_learning_resources(GeneralLearningJSONData),
    ];

    return (
        <Layout
            title="About"
            navIndex={3}
            left={
                <div>
                    <h1> ABOUT ME </h1>
                    <div className={cstyle.separator_horizontal} />
                    <div className={style.section_bio}>
                        <p>
                            Hello there! I'm Light, an aspiring game developer
                            who wants to create great things and become a source
                            of inspiration.
                            <br /> <br />
                            Making a game come to life is an exhilarating
                            process because it requires an arsenal of skills and
                            collaboration between people who think very
                            differently.
                            <br />
                            The effort that goes into it is simply admirable,
                            all the little technical and creative pieces working
                            together in harmony to entertain and tell a story.
                            <br />
                            <br />
                            <b> Areas of interest: </b>
                            <ul>
                                <li> Game engines </li>
                                <li> Renderers </li>
                                <li>
                                    High-performance languages (C/C++, Rust)
                                </li>
                                <li> Scripting languages (Lua, Python) </li>
                                <li> Linux (and customizing it) </li>
                                <li> Digital art (pixel, 3d, painting) </li>
                                <li> Music production </li>
                                <li> Musical instruments </li>
                                <li> Heavy metal \m/ </li>
                                <li> (Game) lore </li>
                            </ul>
                        </p>
                    </div>

                    <div className={style.section_resources}>
                        <h1> GREAT LEARNING RESOURCES </h1>
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
