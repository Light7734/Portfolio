import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Social from '../components/social'
import Tab from '../components/tab'
import * as style from '../styles/about.module.scss'
import { GatsbyImage } from "gatsby-plugin-image"

export default function About({ data }) {

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

                    <div className={style.hseparator} />

                    <div className={style.specs}>
                        <h1> SPECS </h1>
                        <Tab
                            tabs={SpecsTabs}
                            contents={Specs}
                        />
                    </div>

                    <div className={style.hseparator} />

                    <div className={style.resources}>
                        <h1> LEARNING RESOURCES </h1>
                        <Tab
                            tabs={ResourecesTabs}
                            contents={Resoureces}
                        />
                    </div>

                </div>
            }
            right={
                <div>
                    <h1> SOCIALS </h1>
                    <div className={style.socials}>
                        <Social caption={"@Light7734"} link={"https://twitter.com"} icon={data.file.childImageSharp.gatsbyImageData} description="I post pixel_dailies here and some updates and nice art retweets" />
                        <Social caption={"TWITTER"} link={"https://twitter.com"} icon={data.file.childImageSharp.gatsbyImageData} description="I post pixel_dailies here and some updates and nice art retweets" />
                        <Social caption={"TWITTER"} link={"https://twitter.com"} icon={data.file.childImageSharp.gatsbyImageData} description="I post pixel_dailies here and some updates and occasianly retweet interesting art" />
                        <Social caption={"TWITTER"} link={"https://twitter.com"} icon={data.file.childImageSharp.gatsbyImageData} description="I post pixel_dailies here and some updates and nice art retweets" />
                    </div>

                    <div className={style.hseparator} />

                    <h1> TOOLS </h1>
                    <div className={style.tools}>
                        <h3> C++ </h3>
                    </div>
                </div>
            }
        />
    )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
gatsbyImageData(
    layout: FIXED
    width: 64
    )
      }
    }
  }
`
