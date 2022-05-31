import * as React from "react";
import { Location, WindowLocation } from "@reach/router"

export interface PropsWithLocation {
    location: WindowLocation<unknown>;
}

export const WithLocation = (ComponentToWrap: React.FC<any>) => (props: any) =>
    <Location>
        {({ location }) => (
            <ComponentToWrap
                {...props}
                location={location}
            />
        )}
    </Location>

