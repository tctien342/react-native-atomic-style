import * as React from "react";
import * as renderer from "react-test-renderer";

import { HalocomTest } from "..";

test("Component should show 'red' text 'Hello World'", () => {
	const component = renderer.create(<HalocomTest text="World" />);
	const testInstance = component.root;

	expect(testInstance.findByType(HalocomTest).props.text).toBe("World");

	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
