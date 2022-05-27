import * as React from "react"
import Layout from "../components/layout"

import CodeFrame from "../components/codeFrame"

import * as style from "../styles/code.module.scss"

const Code: React.FC = () => {

    return (
        <Layout
            title="Code >_<"
            left={
                <div>
                    <h1> PROJECTS </h1>

                    <CodeFrame
                        imageDir="icons/ue.svg"
                        title="Light Engine"
                        description="Game engine made using C++ and Vulkan, broken rn lol lorem ipsum dara"
                        url="https://github.com/light7734/light"
                        languages={["icons/c++.svg", "icons/rust.svg", "icons/vulkan.svg",]}

                    />

                    <CodeFrame
                        imageDir="icons/ue.svg"
                        title="Raytracer"
                        description="Raytracer I made for the purpose of learning rust, and raytracing,"
                        url="https://github.com/light7734/raytracer"
                        languages={["icons/rust.svg", "icons/vulkan.svg",]}
                    />


                    <CodeFrame
                        imageDir="icons/ue.svg"
                        title="Vulkan renderer"
                        description="A realtime renderer made with the next-gen GraphicsAPI Vulkan"
                        url="https://github.com/light7734/vulkan-renderer"
                        languages={["icons/c++.svg", "icons/vulkan.svg"]}
                    />

                    <CodeFrame
                        imageDir="icons/ue.svg"
                        title="Homepage"
                        description="This homepage, made with gatsby using react, typescript, graphql"
                        url="https://github.com/light7734/homepage"
                        languages={["icons/gatsby.svg", "icons/graphql.svg", "icons/react.svg"]}
                    />

                    <CodeFrame
                        imageDir="icons/ue.svg"
                        title="CSES"
                        description="Some fun competetive programming problem set, that I don't find free time to solve lol"
                        url="https://github.com/light7734/cses"
                        languages={["icons/c++.svg"]}
                    />

                </div>
            }
            right={
                <div>
                    <h1> ARTICLES </h1>
                </div>
            }
        />
    )

}

export default Code;
