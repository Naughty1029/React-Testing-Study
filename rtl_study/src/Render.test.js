import React from "react";
import {render,screen} from "@testing-library/react";
import Render from "./Render";

describe("Rendering",()=>{
  it("Should render all the elments correctly",()=>{
    render(<Render />);//renderコンポーネントを取得
    //screen.debug();//取得したコンポーネントをhtmlとして描画
    
    // https://github.com/A11yance/aria-query#elements-to-roles
    // screen.debug(screen.getByRole("heading"));//headingのロールを持つ要素を描画

    //https://jestjs.io/ja/docs/expect
    expect(screen.getAllByRole('heading')).toBeTruthy();//存在するかどうかのチェック
  })
})