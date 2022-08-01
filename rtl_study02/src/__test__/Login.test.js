import {render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../Login"


describe("Test Login Component",()=> {
  test("render the form with 2 button", async() => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1); //ボタンが２つあるかテスト
  });

  test("Should be failed on email validation",()=>{
    render(<Login />);
    const testEmail = "aaaaa.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  })

  test("Should be successed on email validation",()=>{
    const testEmail = "aaaaa@mail.com";
    expect(validateEmail(testEmail)).toBe(true);
  })

  test("password input should have type password",()=>{
    render(<Login />);
    const password = screen.getByPlaceholderText('パスワード入力');
    expect(password).toHaveAttribute("type","password");
  })

  test("Should be able to submit the form",()=>{
    render(<Login />);
    const submitButton = screen.getByTestId('submit');
    const email = screen.getByPlaceholderText('メールアドレス入力');
    const password = screen.getByPlaceholderText('パスワード入力');
    userEvent.type(email,"aaa@gmail.com");
    userEvent.type(password,"password");
    userEvent.click(submitButton);
    const userInfo = screen.getByText('aaa@gmail.com');
    expect(userInfo).toBeInTheDocument();
  })
})