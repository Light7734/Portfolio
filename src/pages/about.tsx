import * as React from "react"
import Layout from '../components/layout'

import { Link } from "gatsby"

import Tab from '../components/tab'
import Social from '../components/social'

import * as style from '../styles/about.module.scss'
import * as cstyle from '../styles/common.module.scss'

import CodeJSONData from "../learningResources/code.json"
import ArtJSONData from "../learningResources/art.json"
import MusicJSONData from "../learningResources/music.json"
import LinaJSONData from "../specs/lina.json"
import TresdinJSONData from "../specs/tresdin.json"

const About: React.FC = () => {

    /////////////////////////////////////////////////////////////////////////////////
    // Specs
    const SpecsTabs = [
        <h1> Lina </h1>,
        <h1> Tresdin </h1>,
    ]

    const Specs = [
        // LINA
        <table>
            <colgroup> <col /> <col /> </colgroup>
            {
                LinaJSONData.specs.map((data: any) =>
                    <tr>
                        <td> <p> {data.category} </p> </td>
                        <td> <p> {data.value} </p> </td>
                    </tr>
                )
            }
        </table>,

        // Tresdin
        <table>
            <colgroup> <col /> <col /> </colgroup>
            {
                TresdinJSONData.specs.map((data: any) =>
                    <tr>
                        <td> <p> {data.category} </p> </td>
                        <td> <p> {data.value} </p> </td>
                    </tr>
                )
            }

        </table>,
    ];

    /////////////////////////////////////////////////////////////////////////////////
    // Resources
    const ResourecesTabs = [
        <h1> Programming </h1>,
        <h1> Art </h1>,
        <h1> Music </h1>,
    ]

    const Resoureces = [
        // CODE
        <table>
            <colgroup> <col /> <col /> </colgroup>
            {
                CodeJSONData.resources.map((data: any) =>
                    <tr>
                        <td> <p> {data.category} </p> </td>
                        <td> <p> <a href={data.url}> {data.description} <i>({data.platform})</i></a> </p> </td>
                    </tr>
                )
            }
        </table >,
        // ART
        <table>
            <colgroup> <col /> <col /> </colgroup>
            {
                ArtJSONData.resources.map((data: any) =>
                    <tr>
                        <td> <p> {data.category} </p> </td>
                        <td> <p> <a href={data.url}> {data.description} <i>({data.platform})</i></a> </p> </td>
                    </tr>
                )
            }
        </table>
        ,
        // MUSIC
        <table>
            <colgroup> <col /> <col /> </colgroup>
            {
                MusicJSONData.resources.map((data: any) =>
                    <tr>
                        <td> <p> {data.category} </p> </td>
                        <td> <p> <a href={data.url}> {data.description} <i>({data.platform})</i></a> </p> </td>
                    </tr>
                )
            }
        </table>
    ]
    return (
        <Layout title="About"
            navIndex={3}
            left={
                <div>
                    <div className={style.bio}>
                        <h1> ABOUT ME </h1>
                        <div className={cstyle.hseparator} />
                        <p>
                            Hello there! I'm Light, a game developer who aspires to create great things and be a source of inspiration.  <br />
                            I love game development for to make one come to life it requires an arsenal of technical and creative skills, and I have an unhealthy obsession with figuring out how everything works (and probably more game-time than sleep-time). <br />
                            <br />

                            Techincally, I'm interested in:
                            <ul>
                                <li> -- Game engines </li>
                                <li> -- Graphics programming </li>
                                <li> -- C++, Rust, GatbsyJS w/ Typescript </li>
                                <li> -- Scripting </li>
                                <li> -- Customization & Automation </li>
                                <li> -- Linux (the superior OS)</li>
                                <li> -- Tinkering around with stuff (and possibly breaking them beyond repair)</li>
                            </ul>
                            <br />

                            While I still consider coding to be a creative activity, but creatively I'm interested in:
                            <ul>
                                <li> -- Pixel-art </li>
                                <li> -- 3D-art </li>
                                <li> -- Lore & Storytelling </li>
                                <li> -- Music production & Guitar </li>
                            </ul>

                            <br />
                            I listed some nice learning resources down here (if you couldn't tell by that giant heading) hit me up if you want to add to it or just chat with me ^^
                        </p>
                    </div>

                    <div className={cstyle.sectionSeparator} />


                    <div className={style.resources}>
                        <h1> LEARNING RESOURCES </h1>
                        <div className={cstyle.hseparator} />
                        <Tab tabs={ResourecesTabs} contents={Resoureces} />
                    </div>

                    <div className={cstyle.sectionSeparator} />

                    <div className={style.specs}>
                        <h1> MY SPECS </h1>
                        <div className={cstyle.hseparator} />
                        <Tab tabs={SpecsTabs} contents={Specs} />
                    </div>

                </div >
            }

            right={
                < div >
                    <h1> SOCIAL HANDLES </h1>
                    <div className={cstyle.hseparator} />
                    <div className={style.socials}>
                        <Social caption={"Github"} link={"https://github.com/light7734"} icon={"/icons/github.svg"} description="All my code projects" />
                        <Social caption={"Email"} link={"https://"} icon={"/icons/mail.svg"} description="mail@mohammad-hm.com" />
                        <Social caption={"Twitter"} link={"https://twitter.com/Light7734"} icon={"/icons/twitter.svg"} description="Daily art posts & retweets" />
                        <Social caption={"Discord"} link={"https://discordapp.com/users/928576662352822353"} icon={"/icons/discord.svg"} description="Chat with me @Light7734#4652" />
                        <Social caption={"Youtube"} link={"https://www.youtube.com/channel/UC6rAJG66oNHIeb5-50RhdDw"} icon={"/icons/youtube.svg"} description="Devlogs (soon, hopefully)" />
                        <Social caption={"Pinterest"} link={"https://www.pinterest.com/Light7734_/_saved/"} icon={"/icons/pinterest.svg"} description="Art references & inspirations" />
                        <Social caption={"Reddit"} link={"https://www.reddit.com/user/Light7734"} icon={"/icons/reddit.svg"} description="Idk what to do with this" />
                        <Social caption={"Soundcloud"} link={"https://soundcloud.com/user-499649814"} icon={"/icons/soundcloud.svg"} description="All my music" />
                    </div>

                    <div className={cstyle.sectionSeparator} />

                    <h1> TOOLS OF THE TRADE </h1>
                    <div className={cstyle.hseparator} />

                    <div className={style.socials}>
                        <Social caption={"Artirx Linux"} link={"https://artixlinux.org/"} icon={"/icons/artixbtw.svg"} description="Lina's operating system" />
                        <Social caption={"Gentoo Linux"} link={"https://www.gentoo.org/"} icon={"/icons/gentoo.svg"} description="Tresdin's operating system" />
                        <Social caption={"Neovim"} link={"https://neovim.io/"} icon={"/icons/nvim.svg"} description="IDE and Text-editor" />
                        <Social caption={"Rider"} link={"https://www.jetbrains.com/lp/rider-unreal/"} icon={"/icons/rider.svg"} description="IDE for UnrealEngine" />
                        <Social caption={"Blender"} link={"https://www.blender.org/"} icon={"/icons/blender-3d.svg"} description="3D-art creation tool" />
                        <Social caption={"Aseprite"} link={"https://www.aseprite.org/"} icon={"/icons/aseprite.svg"} description="Pixel-art creation tool" />
                        <Social caption={"Unreal Engine"} link={"https://www.unrealengine.com/en-US/?sessionInvalidated=true"} icon={"/icons/ue.svg"} description="3D game engine" />
                        <Social caption={"Light Engine"} link={"https://www.unrealengine.com/en-US/?sessionInvalidated=true"} icon={"/icons/light.svg"} description="My own game engine ^^" />
                        <Social caption={"C++"} link={"https://en.cppreference.com/w/"} icon={"/icons/c++.svg"} description="Favourite programming language" />
                        <Social caption={"Rust"} link={"https://www.rust-lang.org/"} icon={"/icons/rust.svg"} description="Learning to make a renderer with it" />
                        <Social caption={"Vulkan"} link={"https://www.vulkan.org/"} icon={"/icons/vulkan.svg"} description="Favourite graphics API (still learning)" />
                        <Social caption={"Gatsby"} link={"https://www.gatsbyjs.com/"} icon={"/icons/gatsby.svg"} description="Used to develop this website" />
                        <Social caption={"LMMS"} link={"https://lmms.io/"} icon={"/icons/lmms.svg"} description="Digital audio workstation" />
                        <Social caption={"Inkscape"} link={"https://inkscape.org/"} icon={"/icons/inkscape.svg"} description="Vector art" /> </div>
                </div >
            }
        />
    )
}

export default About;
