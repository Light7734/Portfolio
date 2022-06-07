import * as React from "react"
import Layout from '../components/layout'

import Tab from '../components/tab'
import Social from '../components/social'

import * as style from '../styles/about.module.scss'

const About: React.FC = () => {

    const Specs = [
        // LINA
        <table>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <tr>
                <td>
                    <p>Casing</p>
                </td>
                <td>
                    <p>CoolerMaster Masterbox K501L ARGB </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Motherboard</p>
                </td>
                <td>
                    <p>ROG MAXIMUS XII HERO (WI-FI) </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>PCU</p>
                </td>
                <td>
                    <p>ASUS ROG Strix 750G Gold Full Modular </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>CPU</p>
                </td>
                <td>
                    <p>Intel Core i9-10900 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>GPU</p>
                </td>
                <td>
                    <p>Asus ROG Strix RTX 3060 O12G V2 Gaming GDDR6 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>RAM</p>
                </td>
                <td>
                    <p>2X - G.SKILL Trident Z 16GB 3200MHz CL14 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>SSD</p>
                </td>
                <td>
                    <p>2X - ADATA XPG Spectrix S40G RGB M.2 NVMe 512GB </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>HDD</p>
                </td>
                <td>
                    <p>WesternDigital Blue 2TB 256MB </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Display</p>
                </td>
                <td>
                    <p>ASUS TUF Gaming VG27BQ 144Hz 1ms G-Sync HDR10 27Inch </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Keyboard</p>
                </td>
                <td>
                    <p>CoolerMaster CK550 V2 w/ TTC Red Mechanical Switches </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Mouse</p>
                </td>
                <td>
                    <p>Bloody AL90 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Speakers</p>
                </td>
                <td>
                    <p>Razer Nommo </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>OperatingSystem</p>
                </td>
                <td>
                    <p>Arch Linux BTW </p>
                </td>
            </tr>
        </table>,

        // Tresdin
        <table>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <tr>
                <td>
                    <p>Model</p>
                </td>
                <td>
                    <p>Lenovo Legion-Y512 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>CPU</p>
                </td>
                <td>
                    <p>Intel Core i7 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>GPU</p>
                </td>
                <td>
                    <p>NVIDIA GeForce 1050Ti </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>RAM</p>
                </td>
                <td>
                    <p>16 GB DDR4 </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Display</p>
                </td>
                <td>
                    <p>15.6" FHD 16:9 IPS Anti-Glare </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>Storage</p>
                </td>
                <td>
                    <p>1TB HDD </p>
                </td>
            </tr>

            <tr>
                <td>
                    <p>OperatingSystem</p>
                </td>
                <td>
                    <p>Gentoo Linux</p>
                </td>
            </tr>
        </table>,

    ];

    const SpecsTabs = [
        <h1> Lina </h1>,
        <h1> Tresdin </h1>,
    ]

    const Resoureces = [
        // CODE
        <table>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <tr>
                <td> <p> C++ </p> </td>
                <td> <p> <a href="https://www.youtube.com/c/TheChernoProject">The Cherno</a> </p> </td>
            </tr>
            <tr>
                <td> <p> C++ </p> </td>
                <td> <p> <a href="https://cses.fi/book/book.pdf"> Competitive Programmer’s Handbook  </a></p> </td>
            </tr>
            <tr>
                <td> <p> Vulkan </p> </td>
                <td> <p> <a href="https://www.youtube.com/c/BrendanGalea"> BrendanGalea </a> </p> </td>
            </tr>
            <tr>
                <td> <p> Vulkan </p> </td>
                <td> <p> <a href="https://vulkan-tutorial.com/"> vulkan-tutorial.com </a></p> </td>
            </tr>
            <tr>
                <td> <p> Vulkan </p> </td>
                <td> <p> <a href="https://github.com/KhronosGroup/Vulkan-Guide">  Vulkan guide </a> </p> </td>
            </tr>
            <tr>
                <td> <p> Vulkan </p> </td>
                <td> <p> <a href="https://www.khronos.org/registry/vulkan/specs/1.2/html/index.html"> Vulkan docs </a> </p> </td>
            </tr>
            <tr>
                <td> <p> DirectX </p> </td>
                <td> <p> <a href="https://www.youtube.com/c/ChiliTomatoNoodle">ChilliTomatoNoodle</a> </p> </td>
            </tr>
            <tr>
                <td> <p> DirectX </p> </td>
                <td> <p> <a href="http://www.directxtutorial.com/"> directxtutorial.com </a></p> </td>
            </tr>
            <tr>
                <td> <p> OpenGL </p> </td>
                <td> <p> <a href="https://www.learnopengl.com"> learnopengl.com </a></p> </td>
            </tr>
            <tr>
                <td> <p> OpenGL </p> </td>
                <td> <p> <a href="https://docs.gl/"> OpenGL docs </a></p> </td>
            </tr>
            <tr>
                <td> <p> UnrealEngine </p> </td>
                <td> <p> <a href="https://learn.unrealengine.com/"> learn.unrealengine.com </a></p> </td>
            </tr>
            <tr>
                <td> <p> Rendering </p> </td>
                <td> <p> Real-time rendering by Tomas Akenine-möller </p> </td>
            </tr>

            <tr>
                <td> <p> Rendering </p> </td>
                <td> <p> <a href="https://www.rust-lang.org/learn"> Real-time rendering by Tomas Akenine-möller </a> </p> </td>
            </tr>

            <tr>
                <td> <p> Memory </p> </td>
                <td> <p> <a href="https://people.freebsd.org/~lstewart/articles/cpumemory.pdf"> What Every Programmer Should Know About Memory by Ulrich Drepper </a> </p> </td>
            </tr>
            <tr>
                <td> <p> Linux </p> </td>
                <td> <p> Linux Command Line and Shell Scripting BIBLE by Richard Blum </p> </td>
            </tr >
        </table>,

        // ART
        <table>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <tr>
                <td>
                    <p> Pixel Art </p>
                </td>
                <td>
                    <p> <a href="https://www.youtube.com/c/PeterMilko">Pixel Pete (Peter Milko)</a> </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p> Pixel Art </p>
                </td>
                <td>
                    <p> <a href="">AdamCYousins</a></p>
                </td>
            </tr>
        </table>

        ,
        // MUSIC
        <table>
            <colgroup>
                <col />
                <col />
            </colgroup>
            <tr>
                <td>
                    <p> Inspiration :) </p>
                </td>
                <td>
                    <p> <a href="https://www.youtube.com/c/Sebastiside">Sebastiside</a> </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p> Songwriting </p>
                </td>
                <td>
                    <p> <a href="https://www.youtube.com/c/SignalsMusicStudio">Signals Music Studio</a> </p>
                </td>
            </tr>
        </table>
    ]

    const ResourecesTabs = [
        <h1> Programming </h1>,
        <h1> Art </h1>,
        <h1> Music </h1>,
    ]

    return (
        <Layout title="About >_<"
            left={
                <div>
                    <div className={style.bio}>
                        <h1> ABOUT ME </h1>
                        <div className={style.hseparator} />
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

                    <div className={style.sectionSeparator} />

                    <div className={style.specs}>
                        <h1> MY SPECS </h1>
                        <div className={style.hseparator} />
                        <Tab
                            tabs={SpecsTabs}
                            contents={Specs}
                        />
                    </div>



                    <div className={style.sectionSeparator} />

                    <div className={style.resources}>
                        <h1> LEARNING RESOURCES </h1>
                        <div className={style.hseparator} />
                        <Tab
                            tabs={ResourecesTabs}
                            contents={Resoureces}
                        />
                    </div>

                </div>
            }
            right={
                <div>
                    <h1> SOCIAL HANDLES </h1>
                    <div className={style.hseparator} />
                    <div className={style.socials}>
                        <Social caption={"Github"} link={"https://github.com/light7734"} icon={"icons/github.svg"} description="All my code projects" />
                        <Social caption={"Email"} link={"https://"} icon={"icons/mail.svg"} description="mail@mohammad-hm.com" />
                        <Social caption={"Twitter"} link={"https://twitter.com/Light7734"} icon={"/icons/twitter.svg"} description="Daily art posts & retweets" />
                        <Social caption={"Discord"} link={"https://discordapp.com/users/928576662352822353"} icon={"icons/discord.svg"} description="Chat with me @Light7734#4652" />
                        <Social caption={"Youtube"} link={"https://www.youtube.com/channel/UC6rAJG66oNHIeb5-50RhdDw"} icon={"icons/youtube.svg"} description="Devlogs (soon, hopefully)" />
                        <Social caption={"Pinterest"} link={"https://www.pinterest.com/Light7734_/_saved/"} icon={"icons/pinterest.svg"} description="Art references & inspirations" />
                        <Social caption={"Reddit"} link={"https://www.reddit.com/user/Light7734"} icon={"icons/reddit.svg"} description="Idk what to do with this" />
                        <Social caption={"Soundcloud"} link={"https://soundcloud.com/user-499649814"} icon={"icons/soundcloud.svg"} description="All my music" />
                    </div>


                    <div className={style.sectionSeparator} />

                    <h1> TOOLS OF THE TRADE </h1>
                    <div className={style.hseparator} />
                    <div className={style.socials}>
                        <Social caption={"Artirx Linux"} link={"https://archlinux.org/"} icon={"icons/artixbtw.svg"} description="Lina's operating system" />
                        <Social caption={"Gentoo Linux"} link={"https://www.gentoo.org/"} icon={"icons/gentoo.svg"} description="Tresdin's operating system" />
                        <Social caption={"Neovim"} link={"https://neovim.io/"} icon={"icons/nvim.svg"} description="IDE and Text-editor" />
                        <Social caption={"Rider"} link={"https://www.jetbrains.com/lp/rider-unreal/"} icon={"icons/rider.svg"} description="IDE for UnrealEngine" />
                        <Social caption={"Blender"} link={"https://www.blender.org/"} icon={"icons/blender-3d.svg"} description="3D-art creation tool" />
                        <Social caption={"Aseprite"} link={"https://www.aseprite.org/"} icon={"icons/aseprite.svg"} description="Pixel-art creation tool" />
                        <Social caption={"Unreal Engine"} link={"https://www.unrealengine.com/en-US/?sessionInvalidated=true"} icon={"icons/ue.svg"} description="3D game engine" />
                        <Social caption={"Light Engine"} link={"https://www.unrealengine.com/en-US/?sessionInvalidated=true"} icon={"icons/ue.svg"} description="My own game engine ^^" />
                        <Social caption={"C++"} link={"https://en.cppreference.com/w/"} icon={"icons/c++.svg"} description="Favourite programming language" />
                        <Social caption={"Rust"} link={"https://www.rust-lang.org/"} icon={"icons/rust.svg"} description="Learning to make a renderer with it" />
                        <Social caption={"Vulkan"} link={"https://www.vulkan.org/"} icon={"icons/vulkan.svg"} description="Favourite graphics API (still learning)" />
                        <Social caption={"Gatsby"} link={"https://www.gatsbyjs.com/"} icon={"icons/gatsby.svg"} description="Used to develop this website" />
                        <Social caption={"LMMS"} link={"https://lmms.io/"} icon={"icons/lmms.svg"} description="Digital audio workstation" /> </div>
                </div>
            }
        />
    )
}

export default About;
