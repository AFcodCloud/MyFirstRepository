import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";
import React from "react"


describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="It-Camasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("It-Camasutra.com");
  });
  test("After creation <span/> should be displayed", () => {
    const component = create(<ProfileStatus status="It-Camasutra.com" />);
    const root = component.root
    const span = root.findByType("span")
    expect(span).not.toBeNull();
  });
  test("After creation <input/> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="It-Camasutra.com" />);
    const root = component.root;
    const input = root.findByType("input");
    expect(input).toBeNull();
  });
  test("After creation <span/> should contains  correct status", () => {
    const component = create(<ProfileStatus status="It-Camasutra.com" />);
    const root = component.root;
    const span = root.findByType("span")
    expect(span.children[0]).toBe("It-Camasutra.com");
  });
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="It-Camasutra.com" />); //создали в component компонету profileStatus
    const root = component.root;
    const span = root.findByType("span") //нашли в ней спан
    span.props.onDoubleClick() //сделали двойной клик
    let input = root.findByType("input") //проверили появился ли инпут
    expect(input.props.value).toBe("It-Camasutra.com"); //проверили значение в инпуте
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="It-Camasutra.com" getUpdateStatus={mockCallback}/>); 
    const instance = component.getInstance();
    instance.toggleEditMode(); 
    expect(mockCallback.mock.calls.length).toBe(1);  
  });
});



