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
    expect(screen.getByRole('heading')).toBeTruthy();//hタグが存在するかどうかのチェック
    expect(screen.getByRole('textbox')).toBeTruthy();//inputタグが存在するかのチェック
    expect(screen.getAllByRole("button")[0]).toBeTruthy();//buttonが存在するかのチェック
    expect(screen.getAllByRole("button")[1]).toBeTruthy();//buttonが存在するかのチェック
  })
})