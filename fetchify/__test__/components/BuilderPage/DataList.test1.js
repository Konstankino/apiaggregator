import React from "react";
import { shallow, mount } from "enzyme";
import DataList from "../../../src/components/BodyBuilder/presentational/DataList";

describe("Data list", () => {
  let props;

  const setUp = (props = { urls: [], saved: [] }) => {
    let wrapper = mount(<DataList {...props} />);
    return wrapper;
  };



  it("renders without errors", () => {
    props = { urls: [] };
    const component = setUp(props);
    expect(component.text()).toContain("Stored data");
  });

  it("renders Tab with panes props", () => {
    props = { urls: [] };
    const component = setUp(props);
    expect(component.find("Tab").length).toEqual(1);
    expect(component.find("Tab").prop("panes").length).toBeGreaterThan(0);
  });

  it("renders with active URL`s", () => {
    props = { urls: [] };
    const component = setUp(props);
    expect(component.find("MenuItem").length).toBe(2);
    expect(
      component
        .find("MenuItem")
        .first()
        .prop("active")
    ).toBe(true);
    expect(
      component
        .find("MenuItem")
        .at(1)
        .prop("active")
    ).toBe(false);
  });

  it("toggles to saved data", () => {
    props = { urls: [], saved: [] };
    const component = setUp(props);
    component
      .find("MenuItem")
      .at(1)
      .simulate("click");
    expect(
      component
        .find("MenuItem")
        .at(1)
        .prop("active")
    ).toBe(true);
    expect(
      component
        .find("MenuItem")
        .first()
        .prop("active")
    ).toBe(false);
  });

  it("do not render URL`s if its empty", () => {
    props = { urls: [] };
    const component = setUp(props);
    expect(component.text()).toContain("You dont make any request");
  });

  it("render URL`s if data passed", () => {
    props = { urls: [{ url: "test", status: "Failed" }] };
    const component = setUp(props);
    expect(component.text()).not.toContain("You dont make any request");
  });

  it("allow draggable to elements list", () => {
    props = { urls: [{ url: "test", status: "Failed" }] };
    const component = setUp(props);
    expect(component.find("ListItem").prop("draggable")).toEqual(true);
  });

  it("do not render Data if its empty", () => {
    props = { urls: [{url: "test", status: "Failed"}], saved: [] };
    const component = setUp(props);
    component
      .find("MenuItem")
      .at(1)
      .simulate("click");
    expect(component.text()).toContain("You dont make any request")
  });

  it("render Data if its passed", () => {
    props = { urls: [{url: "test", status: "Failed"}], saved: [{url: "test", result: "test"}] };
    const component = setUp(props);
    component
      .find("MenuItem")
      .at(1)
      .simulate("click");
      expect(component.text()).not.toContain("You dont make any request")
  })

});
