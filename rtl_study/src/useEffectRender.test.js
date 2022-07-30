import React from "react";
import { render,screen } from "@testing-library/react";
import { EffectRender } from "./useEffectRender";

describe("useEffect rendering",()=>{
    it("Should render only after async function resolved", async ()=>{
        render(<EffectRender />)
        expect(screen.queryByText(/I am/)).toBeNull()
        expect(await screen.findByText(/I am/)).toBeInTheDocument()
    })
})